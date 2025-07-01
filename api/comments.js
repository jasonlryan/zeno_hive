// Vercel Serverless Function for Comment Management
// This endpoint handles GET and POST requests for comments

import { Redis } from "@upstash/redis";

// Initialize Redis connection
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      // Get comments for a specific section or all comments
      const { section, page } = req.query;

      if (section) {
        // Get comments for specific section
        const comments = await redis.lrange(`comments:${section}`, 0, -1);
        const parsedComments = comments
          .map((comment) => {
            try {
              // Check if it's already an object or a valid JSON string
              if (typeof comment === "object") return comment;
              if (comment === "[object Object]") return null; // Skip malformed data
              return JSON.parse(comment);
            } catch (e) {
              console.warn("Failed to parse comment:", comment, e.message);
              return null; // Skip malformed comments
            }
          })
          .filter((comment) => comment !== null); // Remove null entries
        return res.status(200).json(parsedComments);
      } else {
        // Get all comments across all sections
        const sections = [
          "overview",
          "prd",
          "functional",
          "integration",
          "technical",
          "ui-spec",
        ];
        const allComments = [];

        for (const sec of sections) {
          const sectionComments = await redis.lrange(`comments:${sec}`, 0, -1);
          const parsed = sectionComments
            .map((comment) => {
              try {
                if (typeof comment === "object") return comment;
                if (comment === "[object Object]") return null;
                return JSON.parse(comment);
              } catch (e) {
                console.warn("Failed to parse comment:", comment, e.message);
                return null;
              }
            })
            .filter((comment) => comment !== null);
          allComments.push(...parsed);
        }

        // Sort by timestamp (newest first)
        allComments.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        return res.status(200).json(allComments);
      }
    }

    if (req.method === "POST") {
      // Add a new comment
      const comment = req.body;

      // Validate required fields
      if (!comment.text || !comment.author || !comment.section) {
        return res.status(400).json({
          error: "Missing required fields: text, author, section",
        });
      }

      // Add timestamp if not provided
      if (!comment.timestamp) {
        comment.timestamp = new Date().toISOString();
      }

      // Add unique ID if not provided
      if (!comment.id) {
        comment.id = Date.now().toString();
      }

      // Store comment in Redis
      const commentKey = `comments:${comment.section}`;
      await redis.lpush(commentKey, JSON.stringify(comment));

      // Set expiration to 30 days (optional)
      await redis.expire(commentKey, 30 * 24 * 60 * 60);

      // Also store in a global comments list for cross-section queries
      await redis.lpush("comments:all", JSON.stringify(comment));
      await redis.expire("comments:all", 30 * 24 * 60 * 60);

      return res.status(201).json({
        success: true,
        comment: comment,
        message: "Comment saved successfully",
      });
    }

    if (req.method === "DELETE") {
      // Delete a comment
      const { id, section } = req.query;

      if (!id || !section) {
        return res.status(400).json({
          error: "Missing required parameters: id, section",
        });
      }

      // Get current comments for the section
      const comments = await redis.lrange(`comments:${section}`, 0, -1);
      const parsedComments = comments
        .map((comment) => {
          try {
            if (typeof comment === "object") return comment;
            if (comment === "[object Object]") return null;
            return JSON.parse(comment);
          } catch (e) {
            console.warn("Failed to parse comment for deletion:", comment);
            return null;
          }
        })
        .filter((comment) => comment !== null);

      // Filter out the comment to delete
      const filteredComments = parsedComments.filter(
        (comment) => comment.id !== id
      );

      if (filteredComments.length === parsedComments.length) {
        return res.status(404).json({ error: "Comment not found" });
      }

      // Clear the list and re-add filtered comments
      await redis.del(`comments:${section}`);
      if (filteredComments.length > 0) {
        const commentStrings = filteredComments.map((comment) =>
          JSON.stringify(comment)
        );
        await redis.lpush(`comments:${section}`, ...commentStrings);
        await redis.expire(`comments:${section}`, 30 * 24 * 60 * 60);
      }

      // Also remove from global comments list
      const allComments = await redis.lrange("comments:all", 0, -1);
      const parsedAllComments = allComments
        .map((comment) => {
          try {
            if (typeof comment === "object") return comment;
            if (comment === "[object Object]") return null;
            return JSON.parse(comment);
          } catch (e) {
            console.warn(
              "Failed to parse global comment for deletion:",
              comment
            );
            return null;
          }
        })
        .filter((comment) => comment !== null);
      const filteredAllComments = parsedAllComments.filter(
        (comment) => comment.id !== id
      );

      await redis.del("comments:all");
      if (filteredAllComments.length > 0) {
        const allCommentStrings = filteredAllComments.map((comment) =>
          JSON.stringify(comment)
        );
        await redis.lpush("comments:all", ...allCommentStrings);
        await redis.expire("comments:all", 30 * 24 * 60 * 60);
      }

      return res.status(200).json({
        success: true,
        message: "Comment deleted successfully",
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Redis error:", error);
    return res.status(500).json({
      error: "Failed to process request",
      details: error.message,
    });
  }
}

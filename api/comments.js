// Vercel Serverless Function for Comment Management
// This endpoint handles GET and POST requests for comments

import { Redis } from "@upstash/redis";

// Initialize Redis connection
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
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
        const parsedComments = comments.map((comment) => JSON.parse(comment));
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
          const parsed = sectionComments.map((comment) => JSON.parse(comment));
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

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Redis error:", error);
    return res.status(500).json({
      error: "Failed to process request",
      details: error.message,
    });
  }
}

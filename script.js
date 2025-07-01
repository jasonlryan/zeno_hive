// Global State
let commentMode = false;
let comments = [];
let currentSection = "overview";

// Sample documentation content
const documentContent = {
  overview: {
    title: "🐝 HIVE 3.0 Project Overview",
    content: `
            <div class="doc-content">
                <h1>🐝 HIVE 3.0 - Cultural Moment Marketing Platform</h1>
                
                <h2>Executive Summary</h2>
                <p>HIVE 3.0 is an end-to-end cultural moment marketing platform that leverages AI to detect emerging trends, generate relevant creative concepts, and produce campaign assets at unprecedented speed. The system serves as an intelligent bridge between cultural moments and brand opportunities.</p>
                
                <h2>System Architecture Overview</h2>
                <div class="architecture-flow" style="justify-content: flex-start; margin: 20px 0;">
                    <div class="flow-step">📡 Detection</div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">🧠 Ideation</div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">✨ Creation</div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">🚀 Distribution</div>
                </div>
                
                <h2>Key Goals</h2>
                <ul>
                    <li><strong>Speed to Market:</strong> Reduce campaign development time from weeks to hours</li>
                    <li><strong>Cultural Relevance:</strong> Achieve 90%+ brand-moment relevance scoring</li>
                    <li><strong>Scale:</strong> Support multiple concurrent brand clients with customized outputs</li>
                    <li><strong>Quality:</strong> Maintain brand compliance while maximizing creative impact</li>
                </ul>
                
                <h2>Target Clients</h2>
                <ul>
                    <li><strong>Nike:</strong> Sports culture, athlete partnerships, social justice alignment</li>
                    <li><strong>Aldi:</strong> Value positioning, family focus, practical benefits</li>
                    <li><strong>Pilgrims:</strong> Food safety, quality messaging, B2B considerations</li>
                </ul>
                
                <h2>Success Metrics</h2>
                <ul>
                    <li>Time from trend detection to campaign asset delivery: &lt;4 hours</li>
                    <li>Brand guideline compliance rate: &gt;95%</li>
                    <li>Client satisfaction score: &gt;4.5/5</li>
                    <li>Trend prediction accuracy: &gt;80%</li>
                </ul>
            </div>
        `,
  },
  prd: {
    title: "📄 Product Requirements Document",
    content: `
            <div class="doc-content">
                <h1>Product Requirements Document (PRD)</h1>
                <h2>AI Hive - Cultural Moment Marketing Platform</h2>
                
                <h3>Business Objectives</h3>
                <h4>Primary Goals</h4>
                <ul>
                    <li><strong>Speed to Market:</strong> Reduce campaign development time from weeks to hours</li>
                    <li><strong>Cultural Relevance:</strong> Achieve 90%+ brand-moment relevance scoring</li>
                    <li><strong>Scale:</strong> Support multiple concurrent brand clients with customized outputs</li>
                    <li><strong>Quality:</strong> Maintain brand compliance while maximizing creative impact</li>
                </ul>
                
                <h3>Core Features & Requirements</h3>
                
                <h4>1. Signal Detection & Listening Layer</h4>
                <p><strong>Priority: P0 (Critical)</strong></p>
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Real-time monitoring across 15+ digital channels including Discord, Substack, forums</li>
                    <li>Peak Metrics API primary integration for threads data, TikTok data, global messaging platforms</li>
                    <li>Talkwalker augmentation strategy maintaining existing capabilities while adding proprietary intelligence</li>
                    <li>Custom trend detection algorithms with staying power vs fleeting moment differentiation</li>
                    <li>Multi-platform data ingestion (TikTok, Reddit, Twitter, YouTube, news, podcasts, Substack)</li>
                    <li>Brand mention vs cultural moment differentiation and matching capabilities</li>
                    <li>Audio, video, text, and image mention tracking across all platforms</li>
                </ul>
                
                <h4>2. Intelligence & Ideation Engine</h4>
                <p><strong>Priority: P0 (Critical)</strong></p>
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Integration with existing Zeno custom GPTs into unified system</li>
                    <li>Custom GPT models trained on brand-specific data and voice guidelines</li>
                    <li>Brand-moment relevance scoring with disqualification capabilities</li>
                    <li>Multi-concept ideation with strategic rationale and message translation</li>
                    <li>Predictive messaging assessment using synthetic audience personas</li>
                    <li>Historical performance analysis for predictive insights</li>
                    <li>Human-in-the-loop approval workflows with creative director oversight</li>
                    <li>Unified platform approach adaptable per client (not separate HIVE per client)</li>
                </ul>
                
                <h4>3. Creative Asset Generation</h4>
                <p><strong>Priority: P0 (Critical)</strong></p>
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Comprehensive campaign plan generation including integrated campaign strategies</li>
                    <li>Channel-agnostic long-form content creation with atomization capabilities</li>
                    <li>Text-to-image AI integration (DALL-E, Midjourney, Stable Diffusion)</li>
                    <li>Text-to-video AI capabilities</li>
                    <li>Platform-specific optimization (Instagram, TikTok, Facebook, LinkedIn)</li>
                    <li>Data-backed creative using historical earned and paid media performance</li>
                    <li>Asset evaluation scoring algorithm for performance prediction</li>
                    <li>Brand compliance automation with template integration</li>
                    <li>A/B testing variant generation with performance-based optimization</li>
                </ul>
                
                <h4>4. Distribution & Intelligence Layer</h4>
                <p><strong>Priority: P0 (Critical)</strong></p>
                <p><strong>Requirements:</strong></p>
                <ul>
                    <li>Multi-stakeholder dashboard system with unified interface</li>
                    <li>Real-time performance tracking with feedback loop integration</li>
                    <li>Client-specific asset delivery portals</li>
                    <li>Agency intelligence briefings with strategic insights sharing</li>
                    <li>Campaign effectiveness analytics with continuous learning capabilities</li>
                    <li>Proof of concept metrics for new client pitching</li>
                    <li>Performance data incorporation back into system for improvement</li>
                    <li>Modular workflow automation: detection → idea → review → asset → publish</li>
                </ul>
            </div>
        `,
  },
  detection: {
    title: "📡 Detection & Listening Area",
    content: `
            <div class="doc-content">
                <h1>📡 Detection & Listening Area</h1>
                <h2>Cultural Moment Identification System</h2>
                
                <h3>Process Overview</h3>
                <p>The Detection Area continuously monitors digital channels to identify emerging cultural moments and trends that have the potential for brand activation. This system serves as the foundation for all subsequent HIVE activities.</p>
                
                <h3>Input Requirements</h3>
                <h4>Primary Data Sources</h4>
                <ul>
                    <li><strong>Peak Metrics API:</strong> Primary integration for threads data, TikTok data, Discord data (public channels), global messaging platforms</li>
                    <li><strong>Talkwalker Integration:</strong> Augmentation layer maintaining existing capabilities while adding proprietary intelligence</li>
                    <li><strong>Social Media APIs:</strong> Twitter API v2, Instagram Graph API, TikTok Research API, LinkedIn API</li>
                    <li><strong>Content Platforms:</strong> YouTube API, Reddit API, Substack RSS feeds, forum monitoring</li>
                    <li><strong>News Sources:</strong> NewsAPI, Google News API, RSS feeds from major publications</li>
                    <li><strong>Podcast Data:</strong> Spotify API, Apple Podcasts API, podcast transcription services</li>
                    <li><strong>Existing Zeno Tools:</strong> Custom GPTs integration, TikTok Insights Beta platform</li>
                </ul>
                
                <h3>Processing Steps</h3>
                <h4>1. Data Ingestion</h4>
                <p>Real-time stream processing using Apache Kafka to handle 1M+ data points daily across all monitored channels.</p>
                
                <h4>2. Trend Detection Algorithm</h4>
                <ul>
                    <li>Natural Language Processing for content analysis</li>
                    <li>Sentiment analysis using transformer models</li>
                    <li>Velocity calculation based on engagement rates</li>
                    <li>Longevity prediction using historical trend data</li>
                </ul>
                
                <h4>3. Classification System</h4>
                <ul>
                    <li>Content categorization (sports, entertainment, politics, lifestyle)</li>
                    <li>Geographic relevance detection</li>
                    <li>Demographic targeting analysis</li>
                    <li>Brand safety assessment</li>
                    <li>Viral potential scoring</li>
                    <li>Brand mentions vs cultural moments differentiation</li>
                    <li>Staying power vs fleeting moment classification</li>
                </ul>
                
                <h3>Output Specifications</h3>
                <h4>Trend Data Format</h4>
                <pre>
{
  "trend_id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "velocity_score": "float",
  "longevity_prediction": "float",
  "sentiment": "positive|negative|neutral",
  "geographic_relevance": ["array"],
  "demographics": {},
  "brand_safety_score": "float",
  "source_platforms": ["array"],
  "detection_timestamp": "ISO 8601",
  "related_keywords": ["array"]
}
                </pre>
                
                <h3>Integration Points</h3>
                <ul>
                    <li><strong>To Ideation Area:</strong> Detected trends with relevance scoring</li>
                    <li><strong>From Performance:</strong> Historical trend performance data for improved prediction</li>
                    <li><strong>External APIs:</strong> Real-time data feeds from all monitoring sources</li>
                </ul>
                
                <h3>Success Metrics</h3>
                <ul>
                    <li>Detect emerging trends within 30 minutes of initial momentum</li>
                    <li>Process 1M+ data points daily across all channels</li>
                    <li>Achieve 85% accuracy in trend longevity prediction</li>
                    <li>Support real-time alerting for critical cultural moments</li>
                    <li>99.9% uptime with auto-failover</li>
                    <li>&lt;500ms response time for API queries</li>
                </ul>
            </div>
        `,
  },
  ideation: {
    title: "🧠 Intelligence & Ideation Area",
    content: `
            <div class="doc-content">
                <h1>🧠 Intelligence & Ideation Area</h1>
                <h2>AI-Powered Concept Generation System</h2>
                
                <h3>Process Overview</h3>
                <p>The Ideation Area transforms detected cultural moments into strategic creative concepts using AI-powered analysis and human oversight. This system generates multiple brand-relevant concepts with strategic rationale for each detected trend.</p>
                
                <h3>Input Requirements</h3>
                <h4>From Detection Area</h4>
                <ul>
                    <li>Detected trends with metadata</li>
                    <li>Velocity and longevity predictions</li>
                    <li>Audience and demographic insights</li>
                    <li>Brand safety assessments</li>
                </ul>
                
                <h4>Brand Intelligence Data</h4>
                <ul>
                    <li>Brand guidelines and visual identity</li>
                    <li>Historical campaign performance</li>
                    <li>Target audience profiles</li>
                    <li>Synthetic audience personas</li>
                    <li>Existing Zeno custom GPT models</li>
                </ul>
                
                <h3>Processing Steps</h3>
                <h4>1. Brand-Moment Relevance Scoring</h4>
                <ul>
                    <li>Brand-trend compatibility analysis</li>
                    <li>Audience alignment assessment</li>
                    <li>Historical performance correlation</li>
                    <li>Risk factor evaluation</li>
                    <li>Opportunity sizing calculation</li>
                </ul>
                
                <h4>2. AI Model Configuration</h4>
                <ul>
                    <li><strong>Primary Model:</strong> GPT-4 with custom fine-tuning</li>
                    <li><strong>Brand-Specific Models:</strong> Individual GPT instances trained on brand data</li>
                    <li><strong>Creative Enhancement:</strong> Integration with Claude, Gemini for concept diversity</li>
                    <li><strong>Unified System:</strong> Integration with existing Zeno custom GPTs</li>
                </ul>
                
                <h4>3. Concept Generation Pipeline</h4>
                <ol>
                    <li>Trend data ingestion and brand context application</li>
                    <li>Historical performance analysis</li>
                    <li>Creative brief generation</li>
                    <li>Multiple concept generation (5-10 concepts per trend)</li>
                    <li>Strategic rationale development</li>
                    <li>Execution recommendation</li>
                    <li>Risk assessment per concept</li>
                    <li>Platform-specific adaptation suggestions</li>
                </ol>
                
                <h4>4. Human-in-the-Loop Workflow</h4>
                <ol>
                    <li><strong>Automated Generation:</strong> AI creates initial concepts</li>
                    <li><strong>Quality Filter:</strong> Automated screening for compliance and quality</li>
                    <li><strong>Human Review:</strong> Creative director evaluation and feedback</li>
                    <li><strong>Concept Refinement:</strong> AI incorporates human feedback</li>
                    <li><strong>Final Approval:</strong> Stakeholder sign-off for asset generation</li>
                </ol>
                
                <h3>Output Specifications</h3>
                <h4>Concept Data Format</h4>
                <pre>
{
  "concept_id": "string",
  "title": "string",
  "description": "string",
  "strategic_rationale": "string",
  "execution_approach": "string",
  "platform_adaptations": {
    "instagram": {},
    "tiktok": {},
    "twitter": {},
    "linkedin": {}
  },
  "risk_factors": ["array"],
  "expected_performance": "float",
  "resource_requirements": {},
  "approval_status": "pending|approved|rejected",
  "human_feedback": "string"
}
                </pre>
                
                <h3>Integration Points</h3>
                <ul>
                    <li><strong>From Detection:</strong> Trend data and cultural moment insights</li>
                    <li><strong>To Creation:</strong> Approved concepts for asset generation</li>
                    <li><strong>From Performance:</strong> Historical concept effectiveness data</li>
                    <li><strong>Brand Systems:</strong> Guidelines, personas, and performance history</li>
                </ul>
                
                <h3>Success Metrics</h3>
                <ul>
                    <li>Generate 5+ unique concepts per detected moment</li>
                    <li>Relevance scoring accuracy >80% vs human assessment</li>
                    <li>Brand voice consistency >90% across all outputs</li>
                    <li>Concept generation time <15 minutes per brand</li>
                    <li>Human approval rate >70% for generated concepts</li>
                </ul>
            </div>
        `,
  },
  creation: {
    title: "✨ Creative Asset Generation Area",
    content: `
            <div class="doc-content">
                <h1>✨ Creative Asset Generation Area</h1>
                <h2>AI-Powered Creative Production System</h2>
                
                <h3>Process Overview</h3>
                <p>The Creation Area transforms approved creative concepts into production-ready campaign assets using generative AI services. This system produces multi-format, platform-optimized creative materials with automated brand compliance checking.</p>
                
                <h3>Input Requirements</h3>
                <h4>From Ideation Area</h4>
                <ul>
                    <li>Approved creative concepts</li>
                    <li>Strategic rationale and execution approach</li>
                    <li>Platform-specific adaptations</li>
                    <li>Brand compliance requirements</li>
                </ul>
                
                <h4>Brand Assets & Guidelines</h4>
                <ul>
                    <li>Logo files and brand marks</li>
                    <li>Color palettes and font specifications</li>
                    <li>Visual identity guidelines</li>
                    <li>Existing creative templates</li>
                    <li>Historical performance data</li>
                </ul>
                
                <h3>Processing Steps</h3>
                <h4>1. AI Service Integration</h4>
                <ul>
                    <li><strong>Text-to-Image:</strong> DALL-E 3, Midjourney API, Stable Diffusion</li>
                    <li><strong>Text-to-Video:</strong> RunwayML, Pika Labs, Stable Video Diffusion</li>
                    <li><strong>Design Tools:</strong> Canva API for template-based generation</li>
                    <li><strong>Brand Asset Integration:</strong> Logo placement, font application, color schemes</li>
                </ul>
                
                <h4>2. Asset Types and Specifications</h4>
                <h5>Social Media Assets</h5>
                <ul>
                    <li>Instagram Posts: 1080x1080, 1080x1350</li>
                    <li>Instagram Stories: 1080x1920</li>
                    <li>TikTok Videos: 1080x1920, 15-60 seconds</li>
                    <li>Twitter Posts: 1200x675</li>
                    <li>LinkedIn Posts: 1200x627</li>
                </ul>
                
                <h5>Campaign Materials</h5>
                <ul>
                    <li>Hero Images: 1920x1080, 2560x1440</li>
                    <li>Banner Ads: Multiple IAB standard sizes</li>
                    <li>Print Materials: 300 DPI, CMYK color profile</li>
                    <li>Video Ads: 1920x1080, 30-second format</li>
                </ul>
                
                <h4>3. Asset Creation Pipeline</h4>
                <ol>
                    <li>Concept parsing and asset requirement analysis</li>
                    <li>Platform-specific optimization</li>
                    <li>Brand compliance application</li>
                    <li>AI generation with multiple variations</li>
                    <li>Quality assessment and filtering</li>
                    <li>Human review and approval</li>
                    <li>Final asset delivery</li>
                </ol>
                
                <h4>4. Brand Compliance Automation</h4>
                <ul>
                    <li>Automated logo placement with proper spacing</li>
                    <li>Brand color palette enforcement</li>
                    <li>Font consistency checking</li>
                    <li>Visual identity guideline adherence</li>
                    <li>Legal compliance verification (trademark, copyright)</li>
                </ul>
                
                <h4>5. Advanced Creative Capabilities</h4>
                <ul>
                    <li><strong>Campaign Plan Generation:</strong> Comprehensive integrated campaign strategies</li>
                    <li><strong>Channel-Agnostic Content:</strong> Long-form content with atomization capabilities</li>
                    <li><strong>Data-Backed Creative:</strong> Historical earned and paid media performance integration</li>
                    <li><strong>Asset Evaluation:</strong> Performance prediction scoring algorithm</li>
                    <li><strong>A/B Testing:</strong> Variant generation with performance-based optimization</li>
                </ul>
                
                <h3>Output Specifications</h3>
                <h4>Asset Data Format</h4>
                <pre>
{
  "asset_id": "string",
  "concept_id": "string",
  "asset_type": "image|video|design",
  "platform": "string",
  "dimensions": "string",
  "file_url": "string",
  "thumbnail_url": "string",
  "brand_compliance_score": "float",
  "quality_score": "float",
  "variations": ["array"],
  "generation_metadata": {},
  "approval_status": "pending|approved|rejected",
  "delivery_timestamp": "ISO 8601"
}
                </pre>
                
                <h3>Integration Points</h3>
                <ul>
                    <li><strong>From Ideation:</strong> Approved concepts for asset generation</li>
                    <li><strong>To Distribution:</strong> Production-ready creative assets</li>
                    <li><strong>Brand Systems:</strong> Assets, guidelines, and templates</li>
                    <li><strong>Performance Data:</strong> Historical asset effectiveness metrics</li>
                </ul>
                
                <h3>Success Metrics</h3>
                <ul>
                    <li>Generate platform-optimized assets in <10 minutes</li>
                    <li>100% brand guideline compliance through automated checks</li>
                    <li>Support 5+ asset variations per concept</li>
                    <li>Quality assessment scoring >4/5 average</li>
                    <li>Human approval rate >85% for generated assets</li>
                </ul>
            </div>
        `,
  },
  distribution: {
    title: "🚀 Distribution & Analytics Area",
    content: `
            <div class="doc-content">
                <h1>🚀 Distribution & Analytics Area</h1>
                <h2>Multi-Channel Distribution & Performance Intelligence</h2>
                
                <h3>Process Overview</h3>
                <p>The Distribution Area manages multi-channel asset delivery and provides comprehensive performance tracking with real-time analytics. This system serves different stakeholders while incorporating performance data back into the learning loop.</p>
                
                <h3>Input Requirements</h3>
                <h4>From Creation Area</h4>
                <ul>
                    <li>Production-ready creative assets</li>
                    <li>Platform-specific optimizations</li>
                    <li>Brand compliance verification</li>
                    <li>Asset metadata and variations</li>
                </ul>
                
                <h4>Distribution Parameters</h4>
                <ul>
                    <li>Campaign objectives and KPIs</li>
                    <li>Target audience specifications</li>
                    <li>Platform scheduling requirements</li>
                    <li>Budget allocation parameters</li>
                </ul>
                
                <h3>Processing Steps</h3>
                <h4>1. Multi-Stakeholder Dashboard System</h4>
                <h5>User Roles and Access Levels</h5>
                <ul>
                    <li><strong>Creative Directors:</strong> Full system access, concept approval authority, performance analytics, team management</li>
                    <li><strong>Account Managers:</strong> Client-specific access, asset delivery management, campaign coordination</li>
                    <li><strong>Social Media Managers:</strong> Asset deployment tools, platform scheduling, performance monitoring</li>
                    <li><strong>Brand Clients:</strong> Asset review and approval, campaign performance dashboards, download tracking</li>
                </ul>
                
                <h4>2. Real-Time Performance Tracking</h4>
                <h5>Data Collection Sources</h5>
                <ul>
                    <li>Social platform APIs (Instagram, TikTok, Twitter, LinkedIn)</li>
                    <li>Google Analytics 4 with enhanced ecommerce tracking</li>
                    <li>Custom tracking pixels and event monitoring</li>
                    <li>Brand mention monitoring across platforms</li>
                    <li>Conversion tracking and attribution modeling</li>
                </ul>
                
                <h5>Performance Metrics</h5>
                <ul>
                    <li>Reach and impressions across platforms</li>
                    <li>Engagement rates (likes, shares, comments)</li>
                    <li>Click-through rates and conversions</li>
                    <li>Sentiment analysis and brand lift</li>
                    <li>Viral coefficient and share velocity</li>
                </ul>
                
                <h4>3. Feedback Loop Integration</h4>
                <h5>Performance Data Flow</h5>
                <ul>
                    <li><strong>Collection:</strong> Real-time via platform APIs and tracking pixels</li>
                    <li><strong>Processing:</strong> Automated analysis and pattern recognition</li>
                    <li><strong>Learning:</strong> Feed insights back into AI models for improvement</li>
                    <li><strong>Optimization:</strong> Automatic adjustment of future outputs</li>
                </ul>
                
                <h5>Continuous Learning Categories</h5>
                <ul>
                    <li><strong>Content Performance:</strong> Visual elements, messaging tone, format effectiveness</li>
                    <li><strong>Trend Prediction:</strong> Longevity accuracy, velocity precision, timing optimization</li>
                    <li><strong>Brand-Specific Learning:</strong> Audience preferences, messaging effectiveness, channel optimization</li>
                </ul>
                
                <h4>4. Modular Workflow Automation</h4>
                <p><strong>Complete Pipeline:</strong> Detection → Idea → Review → Asset → Publish</p>
                <ul>
                    <li><strong>Automated Publishing:</strong> Platform-specific scheduling and delivery</li>
                    <li><strong>Performance Monitoring:</strong> Real-time tracking and alerting</li>
                    <li><strong>Optimization:</strong> Dynamic budget reallocation and content adjustments</li>
                    <li><strong>Reporting:</strong> Automated stakeholder updates and insights</li>
                </ul>
                
                <h3>Output Specifications</h3>
                <h4>Dashboard Components</h4>
                <ul>
                    <li><strong>Real-Time Monitoring:</strong> Trend detection alerts, concept generation status, asset production pipeline</li>
                    <li><strong>Analytics and Reporting:</strong> Campaign ROI tracking, engagement performance analysis, trend prediction accuracy</li>
                    <li><strong>Asset Management:</strong> Centralized library with search and filter capabilities, version control</li>
                </ul>
                
                <h4>API Endpoints</h4>
                <pre>
GET /api/v1/trends - List detected trends
POST /api/v1/concepts - Generate new concepts
GET /api/v1/assets/{id} - Retrieve specific asset
POST /api/v1/assets/generate - Create new assets
GET /api/v1/campaigns/{id}/performance - Campaign analytics
                </pre>
                
                <h3>Integration Points</h3>
                <ul>
                    <li><strong>From Creation:</strong> Production-ready assets for distribution</li>
                    <li><strong>To All Areas:</strong> Performance feedback for continuous learning</li>
                    <li><strong>External Platforms:</strong> Social media, advertising, and analytics systems</li>
                    <li><strong>Client Systems:</strong> CRM, project management, and communication tools</li>
                </ul>
                
                <h3>Success Metrics</h3>
                <ul>
                    <li>Role-based access control for all user types</li>
                    <li>Real-time dashboard updates <5 second latency</li>
                    <li>Automated daily intelligence briefings</li>
                    <li>Campaign ROI tracking and reporting</li>
                    <li>99.9% uptime for distribution systems</li>
                    <li>Proof of concept metrics for new client pitching</li>
                </ul>
                
                <h3>Proof of Concept & Client Acquisition</h3>
                <h4>POC Components</h4>
                <ul>
                    <li><strong>Performance Benchmarking:</strong> HIVE performance vs industry standards</li>
                    <li><strong>Case Study Generation:</strong> Automated success story creation from campaign data</li>
                    <li><strong>Predictive Modeling:</strong> Prospect performance predictions and ROI projections</li>
                    <li><strong>Competitive Analysis:</strong> Performance vs competitor campaigns</li>
                </ul>
            </div>
        `,
  },
  "functional-spec": {
    title: "🔧 Functional Specification",
    content: `
            <div class="doc-content">
                <h1>🔧 Functional Specification</h1>
                <h2>AI Hive - Technical Implementation Guide</h2>
                
                <h3>System Architecture Overview</h3>
                <p>The AI Hive platform is built on a microservices architecture with five core systems that work together to deliver end-to-end cultural moment marketing capabilities.</p>
                
                <h3>Core System Components</h3>
                
                <h4>1. Signal Detection System</h4>
                <ul>
                    <li><strong>Peak Metrics API Integration:</strong> Primary data source for social velocity and engagement metrics</li>
                    <li><strong>Multi-Platform Monitoring:</strong> Real-time data ingestion from 15+ digital channels</li>
                    <li><strong>Trend Classification Engine:</strong> AI-powered analysis to distinguish cultural moments from fleeting trends</li>
                </ul>
                
                <h4>2. Intelligence & Ideation Engine</h4>
                <ul>
                    <li><strong>Custom GPT Integration:</strong> Brand-specific AI models with historical performance training</li>
                    <li><strong>Relevance Scoring:</strong> Multi-factor brand-moment compatibility assessment</li>
                    <li><strong>Human-in-Loop Workflows:</strong> Creative director oversight and approval processes</li>
                </ul>
                
                <h4>3. Creative Asset Generation</h4>
                <ul>
                    <li><strong>Text-to-Image/Video AI:</strong> Integration with DALL-E, Midjourney, RunwayML</li>
                    <li><strong>Brand Compliance Automation:</strong> Automated adherence to visual identity guidelines</li>
                    <li><strong>Multi-Format Output:</strong> Platform-optimized assets for all major social channels</li>
                </ul>
                
                <h4>4. Distribution & Analytics</h4>
                <ul>
                    <li><strong>Multi-Stakeholder Dashboards:</strong> Role-based interfaces for different user types</li>
                    <li><strong>Real-Time Performance Tracking:</strong> Campaign effectiveness monitoring</li>
                    <li><strong>Continuous Learning Loop:</strong> Performance data fed back to improve future outputs</li>
                </ul>
                
                <h4>5. Brand Intelligence Layer</h4>
                <ul>
                    <li><strong>Client-Specific Configuration:</strong> Custom brand guidelines and audience parameters</li>
                    <li><strong>Historical Performance Database:</strong> Campaign data for predictive insights</li>
                    <li><strong>Synthetic Personas:</strong> AI-generated audience models for testing</li>
                </ul>
                
                <h3>API Architecture</h3>
                <pre>
GET /api/v1/trends - Retrieve detected cultural moments
POST /api/v1/concepts - Generate creative concepts
GET /api/v1/assets/{id} - Access generated creative assets
POST /api/v1/campaigns - Create new campaign
GET /api/v1/performance/{campaign_id} - Campaign analytics
                </pre>
                
                <h3>Technical Requirements</h3>
                <ul>
                    <li><strong>Scalability:</strong> Support 1M+ daily data points with auto-scaling</li>
                    <li><strong>Performance:</strong> Sub-500ms API response times</li>
                    <li><strong>Security:</strong> SOC 2 compliance with encryption at rest and in transit</li>
                    <li><strong>Availability:</strong> 99.9% uptime with automated failover</li>
                </ul>
            </div>
        `,
  },
  integration: {
    title: "🔗 Integration Requirements",
    content: `
            <div class="doc-content">
                <h1>🔗 Integration Requirements</h1>
                <h2>External Systems & Data Sources</h2>
                
                <h3>Primary Data Integrations</h3>
                
                <h4>Peak Metrics API (Starting July 1st)</h4>
                <ul>
                    <li><strong>Data Types:</strong> Social velocity, threads data, TikTok analytics, Discord monitoring</li>
                    <li><strong>Update Frequency:</strong> Real-time streaming with 30-second refresh</li>
                    <li><strong>Coverage:</strong> Global messaging platforms and social networks</li>
                </ul>
                
                <h4>Talkwalker Augmentation</h4>
                <ul>
                    <li><strong>Strategy:</strong> Maintain existing capabilities while adding proprietary intelligence</li>
                    <li><strong>Data Enhancement:</strong> Sentiment analysis, image recognition, influencer tracking</li>
                    <li><strong>Complementary Role:</strong> Fill gaps in Peak Metrics coverage</li>
                </ul>
                
                <h3>Social Media Platform APIs</h3>
                <ul>
                    <li><strong>Twitter API v2:</strong> Real-time tweet monitoring, engagement metrics</li>
                    <li><strong>Instagram Graph API:</strong> Post analytics, story data, hashtag tracking</li>
                    <li><strong>TikTok Research API:</strong> Video trends, audio analysis, creator insights</li>
                    <li><strong>LinkedIn API:</strong> Professional content monitoring, B2B trends</li>
                    <li><strong>YouTube Data API:</strong> Video performance, comment sentiment</li>
                    <li><strong>Reddit API:</strong> Community discussions, trending topics</li>
                </ul>
                
                <h3>Content Platform Integrations</h3>
                <ul>
                    <li><strong>Substack RSS:</strong> Newsletter content monitoring</li>
                    <li><strong>Discord (Public Channels):</strong> Community conversation tracking</li>
                    <li><strong>Forum Monitoring:</strong> Specialized community discussions</li>
                    <li><strong>Podcast APIs:</strong> Spotify, Apple Podcasts for audio trend detection</li>
                </ul>
                
                <h3>Existing Zeno Tool Integration</h3>
                
                <h4>Custom GPTs</h4>
                <ul>
                    <li><strong>Integration Approach:</strong> Unified API layer connecting existing models</li>
                    <li><strong>Brand Specialization:</strong> Nike, Aldi, Pilgrims-specific GPT instances</li>
                    <li><strong>Performance History:</strong> Historical campaign data integration</li>
                </ul>
                
                <h4>TikTok Insights Beta</h4>
                <ul>
                    <li><strong>Data Access:</strong> Advanced TikTok analytics and trend predictions</li>
                    <li><strong>Creative Optimization:</strong> Format and timing recommendations</li>
                    <li><strong>Audience Insights:</strong> Demographic and behavioral data</li>
                </ul>
                
                <h3>AI Service Integrations</h3>
                <ul>
                    <li><strong>OpenAI GPT-4:</strong> Text generation and analysis</li>
                    <li><strong>DALL-E 3:</strong> Image generation and editing</li>
                    <li><strong>Midjourney API:</strong> Advanced creative imagery</li>
                    <li><strong>RunwayML:</strong> Video generation and editing</li>
                    <li><strong>Claude:</strong> Additional text analysis and generation</li>
                </ul>
                
                <h3>Client System Integrations</h3>
                <ul>
                    <li><strong>CRM Systems:</strong> Salesforce, HubSpot integration</li>
                    <li><strong>Project Management:</strong> Monday.com, Asana connectivity</li>
                    <li><strong>Communication:</strong> Slack, Microsoft Teams channels</li>
                    <li><strong>Asset Management:</strong> Brand asset libraries and DAM systems</li>
                </ul>
                
                <h3>Security & Compliance</h3>
                <ul>
                    <li><strong>Authentication:</strong> OAuth 2.0 with API key management</li>
                    <li><strong>Data Privacy:</strong> GDPR and CCPA compliance</li>
                    <li><strong>Rate Limiting:</strong> Respectful API usage with proper throttling</li>
                    <li><strong>Error Handling:</strong> Graceful degradation when services are unavailable</li>
                </ul>
            </div>
        `,
  },
  technical: {
    title: "⚙️ Technical Addendum",
    content: `
            <div class="doc-content">
                <h1>⚙️ Technical Addendum</h1>
                <h2>Advanced Architecture & Implementation Details</h2>
                
                <h3>Unified Platform Architecture</h3>
                <p>HIVE 3.0 implements a single, adaptable platform approach rather than separate instances per client, enabling cost efficiency and consistent feature development.</p>
                
                <h4>Multi-Tenant Design</h4>
                <ul>
                    <li><strong>Brand Configuration Layer:</strong> Client-specific settings without code duplication</li>
                    <li><strong>Shared Infrastructure:</strong> Common AI models with brand-specific fine-tuning</li>
                    <li><strong>Data Isolation:</strong> Secure separation of client data while sharing computational resources</li>
                </ul>
                
                <h3>Modular Workflow Automation</h3>
                <p><strong>Complete Pipeline:</strong> Detection → Idea → Review → Asset → Publish</p>
                
                <h4>Workflow Engine</h4>
                <ul>
                    <li><strong>Event-Driven Architecture:</strong> Microservices communicate via message queues</li>
                    <li><strong>State Management:</strong> Track campaign progress across all phases</li>
                    <li><strong>Error Recovery:</strong> Automatic retry mechanisms with human escalation</li>
                    <li><strong>Parallel Processing:</strong> Multiple campaigns processed simultaneously</li>
                </ul>
                
                <h3>Continuous Learning Systems</h3>
                
                <h4>Feedback Loop Implementation</h4>
                <ul>
                    <li><strong>Performance Data Collection:</strong> Real-time campaign metrics ingestion</li>
                    <li><strong>Model Retraining:</strong> Automated improvement of AI predictions</li>
                    <li><strong>A/B Testing Framework:</strong> Systematic testing of new approaches</li>
                    <li><strong>Human Feedback Integration:</strong> Creative team insights incorporated into models</li>
                </ul>
                
                <h4>Learning Categories</h4>
                <ul>
                    <li><strong>Trend Prediction Accuracy:</strong> Improving longevity and velocity predictions</li>
                    <li><strong>Brand-Moment Relevance:</strong> Refining brand-cultural moment matching</li>
                    <li><strong>Creative Performance:</strong> Optimizing asset generation for engagement</li>
                    <li><strong>Channel Effectiveness:</strong> Platform-specific optimization insights</li>
                </ul>
                
                <h3>Advanced AI Capabilities</h3>
                
                <h4>Synthetic Personas</h4>
                <ul>
                    <li><strong>Audience Simulation:</strong> AI-generated representative user personas</li>
                    <li><strong>Predictive Testing:</strong> Message effectiveness prediction before deployment</li>
                    <li><strong>Demographic Modeling:</strong> Age, geography, interest-based persona creation</li>
                    <li><strong>Behavioral Prediction:</strong> Engagement and sharing likelihood modeling</li>
                </ul>
                
                <h4>Campaign Plan Generation</h4>
                <ul>
                    <li><strong>Integrated Strategy:</strong> Multi-channel campaign development</li>
                    <li><strong>Timeline Optimization:</strong> Optimal posting schedules and campaign duration</li>
                    <li><strong>Budget Allocation:</strong> Resource distribution recommendations</li>
                    <li><strong>Success Metrics:</strong> KPI definition and tracking setup</li>
                </ul>
                
                <h3>Data Architecture</h3>
                
                <h4>Real-Time Processing</h4>
                <ul>
                    <li><strong>Stream Processing:</strong> Apache Kafka for high-throughput data ingestion</li>
                    <li><strong>Data Lake:</strong> AWS S3 with Snowflake for analytical processing</li>
                    <li><strong>Caching Layer:</strong> Redis for frequently accessed data</li>
                    <li><strong>CDN:</strong> Global asset delivery with edge caching</li>
                </ul>
                
                <h4>Scalability Architecture</h4>
                <ul>
                    <li><strong>Kubernetes Orchestration:</strong> Container-based deployment with auto-scaling</li>
                    <li><strong>Load Balancing:</strong> Traffic distribution across multiple instances</li>
                    <li><strong>Database Sharding:</strong> Horizontal scaling for large datasets</li>
                    <li><strong>Geographic Distribution:</strong> Multi-region deployment for global performance</li>
                </ul>
                
                <h3>Monitoring & Observability</h3>
                <ul>
                    <li><strong>Application Performance:</strong> New Relic or DataDog integration</li>
                    <li><strong>AI Model Monitoring:</strong> Drift detection and performance tracking</li>
                    <li><strong>Business Metrics:</strong> Campaign success and ROI dashboards</li>
                    <li><strong>Error Tracking:</strong> Sentry for bug reporting and resolution</li>
                </ul>
                
                <h3>Security Architecture</h3>
                <ul>
                    <li><strong>Zero Trust Network:</strong> All services authenticated and encrypted</li>
                    <li><strong>API Security:</strong> Rate limiting, authentication, and validation</li>
                    <li><strong>Data Encryption:</strong> AES-256 at rest, TLS 1.3 in transit</li>
                    <li><strong>Access Control:</strong> Role-based permissions with audit logging</li>
                </ul>
            </div>
        `,
  },
  "ui-spec": {
    title: "🎨 UI Specification",
    content: `
            <div class="doc-content">
                <h1>🎨 UI Specification</h1>
                <h2>HIVE 3.0 User Interface Design</h2>
                
                <h3>Design Philosophy</h3>
                <p>The HIVE 3.0 interface prioritizes real-time collaboration, clear information hierarchy, and seamless workflow management across all user roles.</p>
                
                <h3>User Interface Architecture</h3>
                
                <h4>5-Phase Pipeline Visualization</h4>
                <ul>
                    <li><strong>Detection Phase:</strong> Real-time trend monitoring dashboard</li>
                    <li><strong>Intelligence Phase:</strong> Concept generation and relevance scoring</li>
                    <li><strong>Ideation Phase:</strong> Creative concept review and approval</li>
                    <li><strong>Creation Phase:</strong> Asset generation and brand compliance</li>
                    <li><strong>Distribution Phase:</strong> Multi-channel deployment and analytics</li>
                </ul>
                
                <h3>Role-Based Dashboard Design</h3>
                
                <h4>Creative Director Interface</h4>
                <ul>
                    <li><strong>Overview Dashboard:</strong> System-wide performance and trend alerts</li>
                    <li><strong>Concept Approval:</strong> Side-by-side comparison with approval workflows</li>
                    <li><strong>Team Management:</strong> Workload distribution and performance tracking</li>
                    <li><strong>Strategic Insights:</strong> Long-term trend analysis and opportunity mapping</li>
                </ul>
                
                <h4>Account Manager Interface</h4>
                <ul>
                    <li><strong>Client-Specific Dashboards:</strong> Brand-focused campaign management</li>
                    <li><strong>Asset Library:</strong> Organized access to all client creative materials</li>
                    <li><strong>Performance Reports:</strong> Client-ready analytics and ROI metrics</li>
                    <li><strong>Campaign Coordination:</strong> Timeline management and stakeholder communication</li>
                </ul>
                
                <h4>Social Media Manager Interface</h4>
                <ul>
                    <li><strong>Publishing Calendar:</strong> Multi-platform scheduling and optimization</li>
                    <li><strong>Asset Deployment:</strong> One-click publishing with platform customization</li>
                    <li><strong>Real-Time Monitoring:</strong> Engagement tracking and performance alerts</li>
                    <li><strong>Content Library:</strong> Easy access to approved assets and variations</li>
                </ul>
                
                <h3>Collaborative Feedback System</h3>
                
                <h4>Real-Time Collaboration Features</h4>
                <ul>
                    <li><strong>Phase-Specific Comments:</strong> Contextual feedback on concepts and assets</li>
                    <li><strong>Approval Workflows:</strong> Clear approval chains with notification systems</li>
                    <li><strong>Version Control:</strong> Track changes and iterations with rollback capability</li>
                    <li><strong>Team Communication:</strong> Built-in messaging with @mentions and notifications</li>
                </ul>
                
                <h4>Feedback Interface Design</h4>
                <ul>
                    <li><strong>Inline Comments:</strong> Click-to-comment on any interface element</li>
                    <li><strong>Suggestion Mode:</strong> Propose specific changes with visual markup</li>
                    <li><strong>Discussion Threads:</strong> Organized conversations around specific topics</li>
                    <li><strong>Resolution Tracking:</strong> Mark feedback as addressed or implemented</li>
                </ul>
                
                <h3>Phase-Specific Interface Design</h3>
                
                <h4>Detection Phase Interface</h4>
                <ul>
                    <li><strong>Trend Map:</strong> Geographic visualization of emerging cultural moments</li>
                    <li><strong>Velocity Graphs:</strong> Real-time trend momentum and longevity predictions</li>
                    <li><strong>Alert System:</strong> Configurable notifications for high-potential moments</li>
                    <li><strong>Brand Relevance Filters:</strong> Client-specific trend filtering and scoring</li>
                </ul>
                
                <h4>Ideation Phase Interface</h4>
                <ul>
                    <li><strong>Concept Cards:</strong> Visual concept presentation with strategic rationale</li>
                    <li><strong>Scoring Dashboard:</strong> Multi-factor relevance and performance predictions</li>
                    <li><strong>Approval Workflow:</strong> Clear approval status and feedback integration</li>
                    <li><strong>Brand Alignment:</strong> Guidelines compliance checking and visual indicators</li>
                </ul>
                
                <h4>Creation Phase Interface</h4>
                <ul>
                    <li><strong>Asset Gallery:</strong> Generated creative variations with quality scores</li>
                    <li><strong>Platform Preview:</strong> See how assets appear on different social platforms</li>
                    <li><strong>Brand Compliance:</strong> Automated checking with manual override capability</li>
                    <li><strong>Generation Controls:</strong> Fine-tune AI parameters for asset creation</li>
                </ul>
                
                <h4>Distribution Phase Interface</h4>
                <ul>
                    <li><strong>Performance Dashboard:</strong> Real-time campaign metrics and analytics</li>
                    <li><strong>Multi-Channel View:</strong> Unified performance across all platforms</li>
                    <li><strong>Optimization Alerts:</strong> AI-driven recommendations for campaign adjustments</li>
                    <li><strong>ROI Tracking:</strong> Financial performance and cost-per-engagement metrics</li>
                </ul>
                
                <h3>Technical Implementation</h3>
                
                <h4>Frontend Framework</h4>
                <ul>
                    <li><strong>Technology Stack:</strong> React.js with TypeScript for type safety</li>
                    <li><strong>State Management:</strong> Redux Toolkit for predictable state updates</li>
                    <li><strong>Real-Time Updates:</strong> Socket.io for live collaboration features</li>
                    <li><strong>Charts & Visualization:</strong> D3.js and Chart.js for data presentation</li>
                </ul>
                
                <h4>Responsive Design</h4>
                <ul>
                    <li><strong>Mobile-First:</strong> Optimized for tablets and smartphones</li>
                    <li><strong>Progressive Web App:</strong> Offline capability and app-like experience</li>
                    <li><strong>Accessibility:</strong> WCAG 2.1 AA compliance with screen reader support</li>
                    <li><strong>Performance:</strong> Sub-2 second load times with progressive loading</li>
                </ul>
                
                <h3>Design System</h3>
                <ul>
                    <li><strong>Color Palette:</strong> ZENO brand colors with accessibility-compliant contrast</li>
                    <li><strong>Typography:</strong> Inter font family for clarity and readability</li>
                    <li><strong>Component Library:</strong> Reusable UI components with consistent styling</li>
                    <li><strong>Icon System:</strong> Custom iconography aligned with platform functionality</li>
                </ul>
            </div>
        `,
  },
};

// Navigation and Content Loading
function loadContent(section) {
  currentSection = section;
  const contentArea = document.getElementById("contentArea");
  const content = documentContent[section];

  if (content) {
    contentArea.innerHTML = content.content;
    updateTableOfContents();
    updateActiveNavLink(section);
    loadCommentsForSection(section);
  }
}

function updateActiveNavLink(section) {
  // Remove active class from all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to current section
  const activeLink = document.querySelector(
    `[onclick="loadContent('${section}')"]`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

function updateTableOfContents() {
  const content = document.getElementById("contentArea");
  const headings = content.querySelectorAll("h1, h2, h3, h4");
  const tocContainer = document.getElementById("tableOfContents");

  let tocHTML = "<ul>";
  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;
    const level = heading.tagName.toLowerCase();
    const indent =
      level === "h1"
        ? ""
        : level === "h2"
        ? 'style="margin-left: 16px;"'
        : 'style="margin-left: 32px;"';
    tocHTML += `<li ${indent}><a href="#${id}" onclick="scrollToHeading('${id}')">${heading.textContent}</a></li>`;
  });
  tocHTML += "</ul>";

  tocContainer.innerHTML = tocHTML;
}

function scrollToHeading(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Comment System
function toggleCommentMode() {
  commentMode = !commentMode;
  const body = document.body;
  const btn = document.querySelector('[onclick="toggleCommentMode()"]');

  if (commentMode) {
    body.classList.add("comment-mode");
    btn.textContent = "❌ Exit Comment Mode";
    btn.classList.remove("btn-secondary");
    btn.classList.add("btn-primary");
    makeContentCommentable();
  } else {
    body.classList.remove("comment-mode");
    btn.textContent = "💬 Comment Mode";
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-secondary");
    removeCommentableElements();
  }
}

function makeContentCommentable() {
  const content = document.getElementById("contentArea");
  const elements = content.querySelectorAll("h1, h2, h3, h4, p, ul, ol, pre");

  elements.forEach((element, index) => {
    element.classList.add("commentable");
    element.setAttribute("data-comment-target", `${currentSection}-${index}`);
    element.addEventListener("click", handleCommentClick);
  });
}

function removeCommentableElements() {
  const commentableElements = document.querySelectorAll(".commentable");
  commentableElements.forEach((element) => {
    element.classList.remove("commentable");
    element.removeAttribute("data-comment-target");
    element.removeEventListener("click", handleCommentClick);
  });
}

function handleCommentClick(event) {
  if (commentMode) {
    event.preventDefault();
    const target = event.target.getAttribute("data-comment-target");
    showCommentModal(target);
  }
}

function showCommentModal(target) {
  const modal = document.getElementById("commentModal");
  modal.style.display = "block";
  modal.setAttribute("data-target", target);

  // Pre-populate user info if previously entered
  const savedAuthor = localStorage.getItem("commentAuthor");
  const savedEmail = localStorage.getItem("commentEmail");

  if (savedAuthor) {
    document.getElementById("commentAuthor").value = savedAuthor;
  }
  if (savedEmail) {
    document.getElementById("commentEmail").value = savedEmail;
  }

  // Focus on text area if name is already filled
  setTimeout(() => {
    if (savedAuthor) {
      document.getElementById("commentText").focus();
    } else {
      document.getElementById("commentAuthor").focus();
    }
  }, 100);
}

function closeCommentModal() {
  const modal = document.getElementById("commentModal");
  modal.style.display = "none";
  document.getElementById("commentText").value = "";
  // Don't clear author/email as we want to remember them
}

async function submitComment() {
  const modal = document.getElementById("commentModal");
  const target = modal.getAttribute("data-target");
  const text = document.getElementById("commentText").value.trim();
  const author = document.getElementById("commentAuthor").value.trim();
  const email = document.getElementById("commentEmail").value.trim();
  const type = document.getElementById("commentType").value;
  const priority = document.getElementById("commentPriority").value;

  if (!text) {
    alert("Please enter a comment");
    return;
  }

  if (!author) {
    alert("Please enter your name");
    return;
  }

  const comment = {
    id: Date.now(),
    target: target,
    section: currentSection,
    text: text,
    type: type,
    priority: priority,
    timestamp: new Date().toISOString(),
    author: author,
    email: email || null,
  };

  // Save comment to Redis (both local dev with vercel dev and production)
  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    if (response.ok) {
      const result = await response.json();
      comments.push(comment);

      localStorage.setItem("commentAuthor", author);
      if (email) localStorage.setItem("commentEmail", email);

      updateCommentCount();
      loadCommentsForSection(currentSection);
      closeCommentModal();
      document.getElementById("commentText").value = "";

      console.log("Comment saved to Redis:", result.message);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save comment");
    }
  } catch (error) {
    console.error("Error saving comment:", error);
    alert(
      `Failed to save comment: ${error.message}\n\nFor local development, run: vercel dev`
    );
  }
}

function loadCommentsForSection(section) {
  const sectionComments = comments.filter(
    (comment) => comment.section === section
  );
  const container = document.getElementById("commentsContainer");

  if (sectionComments.length === 0) {
    container.innerHTML = `
            <div class="no-comments">
                <p>No comments yet. Enable comment mode to start discussing!</p>
                <button class="btn-secondary small" onclick="toggleCommentMode()">Enable Comments</button>
            </div>
        `;
  } else {
    let commentsHTML = "";
    sectionComments.forEach((comment) => {
      const priorityClass =
        comment.priority === "high"
          ? "high-priority"
          : comment.priority === "medium"
          ? "medium-priority"
          : "low-priority";
      const typeClass = comment.type || "comment";
      commentsHTML += `
                <div class="comment ${priorityClass} ${typeClass}">
                    <div class="comment-header">
                        <strong>${comment.author}</strong>
                        <span class="comment-time">${formatTime(
                          comment.timestamp
                        )}</span>
                        <button class="delete-comment-btn" onclick="deleteComment('${
                          comment.id
                        }', '${
        comment.section
      }')" title="Delete comment">×</button>
                    </div>
                    <div class="comment-body">${comment.text}</div>
                    <div class="comment-meta">
                        <span class="comment-type">${
                          comment.type || "comment"
                        }</span>
                        <span class="comment-priority">${
                          comment.priority || "medium"
                        } priority</span>
                    </div>
                </div>
            `;
    });
    container.innerHTML = commentsHTML;
  }
}

function updateCommentCount() {
  const count = comments.length;
  const countElement = document.querySelector(".comment-count");
  if (countElement) {
    countElement.textContent = `(${count})`;
  }

  // Update stats on overview page
  const statNumber = document.querySelector(".stat-number");
  if (statNumber && currentSection === "overview") {
    statNumber.textContent = count;
  }
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
  return `${Math.floor(minutes / 1440)}d ago`;
}

// Team Activity Modal
function showTeamFeedback() {
  const modal = document.getElementById("teamModal");
  modal.style.display = "block";
  loadTeamActivity();
}

function closeTeamModal() {
  const modal = document.getElementById("teamModal");
  modal.style.display = "none";
}

function showTab(tabName) {
  // Remove active class from all tabs
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-pane")
    .forEach((pane) => pane.classList.remove("active"));

  // Add active class to selected tab
  document
    .querySelector(`[onclick="showTab('${tabName}')"]`)
    .classList.add("active");
  document.getElementById(`${tabName}Tab`).classList.add("active");
}

function loadTeamActivity() {
  const recentTab = document.getElementById("recentTab");
  const commentsTab = document.getElementById("commentsTab");

  if (comments.length === 0) {
    recentTab.innerHTML =
      '<p class="empty-state">No recent activity. Start by adding comments to begin collaboration!</p>';
    commentsTab.innerHTML =
      '<p class="empty-state">No comments yet. Enable comment mode and click anywhere to add feedback.</p>';
  } else {
    // Load recent activity
    let recentHTML = "";
    const recentComments = comments.slice(-5).reverse();
    recentComments.forEach((comment) => {
      recentHTML += `
                <div class="activity-item">
                    <strong>${comment.author}</strong> added a ${
        comment.type
      } to ${comment.section}
                    <div class="activity-time">${formatTime(
                      comment.timestamp
                    )}</div>
                    <div class="activity-preview">"${comment.text.substring(
                      0,
                      100
                    )}..."</div>
                </div>
            `;
    });
    recentTab.innerHTML = recentHTML;

    // Load all comments
    let allCommentsHTML = "";
    comments.forEach((comment) => {
      allCommentsHTML += `
                <div class="comment-item">
                    <div class="comment-section">${comment.section}</div>
                    <div class="comment-content">
                        <strong>${comment.author}</strong> - ${comment.type}
                        <div>${comment.text}</div>
                        <div class="comment-time">${formatTime(
                          comment.timestamp
                        )}</div>
                    </div>
                </div>
            `;
    });
    commentsTab.innerHTML = allCommentsHTML;
  }
}

// Search Functionality
function searchDocs() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  if (query.length < 2) return;

  // Simple search implementation
  const results = [];
  Object.entries(documentContent).forEach(([key, doc]) => {
    if (doc.content.toLowerCase().includes(query)) {
      results.push({
        section: key,
        title: doc.title,
        relevance: (
          doc.content.toLowerCase().match(new RegExp(query, "g")) || []
        ).length,
      });
    }
  });

  // Sort by relevance and show results
  results.sort((a, b) => b.relevance - a.relevance);
  console.log("Search results:", results);
}

// Team Activity Functions
function showTeamActivity() {
  showTeamFeedback();
}

function showDecisions() {
  showTeamFeedback();
  showTab("decisions");
}

function showDiscussions() {
  showTeamFeedback();
  showTab("comments");
}

// Modal Event Listeners
window.onclick = function (event) {
  const commentModal = document.getElementById("commentModal");
  const teamModal = document.getElementById("teamModal");

  if (event.target === commentModal) {
    closeCommentModal();
  }
  if (event.target === teamModal) {
    closeTeamModal();
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  loadContent("overview");
  updateCommentCount();
  loadExistingComments();
});

// Delete a comment
async function deleteComment(commentId, section) {
  if (!confirm("Are you sure you want to delete this comment?")) {
    return;
  }

  try {
    const response = await fetch(
      `/api/comments?id=${commentId}&section=${section}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // Remove from local array
      const index = comments.findIndex((c) => c.id == commentId);
      if (index > -1) {
        comments.splice(index, 1);
      }

      updateCommentCount();
      loadCommentsForSection(currentSection);
      console.log("Comment deleted successfully");
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete comment");
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    alert(`Failed to delete comment: ${error.message}`);
  }
}

// Load existing comments from Redis
async function loadExistingComments() {
  try {
    const response = await fetch("/api/comments");
    if (response.ok) {
      const existingComments = await response.json();
      comments.push(...existingComments);
      updateCommentCount();
      if (currentSection) {
        loadCommentsForSection(currentSection);
      }
      console.log(`Loaded ${existingComments.length} comments from Redis`);
    }
  } catch (error) {
    console.log("No existing comments or server not available:", error);
  }
}

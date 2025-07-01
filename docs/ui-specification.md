# UI Specification - HIVE 3.0 v1

## Cultural Moment Marketing Platform Interface

---

## Overview

This UI specification defines the user interface design for HIVE 3.0 v1, creating an intuitive, collaborative platform that visualizes the entire cultural moment marketing pipeline from trend detection to asset distribution. The interface prioritizes real-time collaboration, workflow transparency, and user feedback integration.

## Design Philosophy

### Core Principles

- **Unified Experience**: Single platform serving all user roles without requiring multiple logins
- **Real-Time Collaboration**: Live updates and collaborative feedback on all sections
- **Workflow Transparency**: Clear visual representation of the 5-phase pipeline
- **Contextual Intelligence**: Smart recommendations and insights at every step
- **Progressive Disclosure**: Information hierarchy that reveals detail as needed

### Visual Design Language

- **Modern & Clean**: Minimal interface with focus on content and data
- **ZENO Brand Integration**: Green accent colors (#4CAF50) with professional gray palette
- **Data-Rich Visualizations**: Charts, graphs, and trend indicators throughout
- **Mobile-Responsive**: Full functionality across desktop, tablet, and mobile

## Main Dashboard Layout

### Top Navigation Bar

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [ZENO 🐝] HIVE 3.0    [Detection] [Ideation] [Assets] [Performance] [🔔] [👤] │
├─────────────────────────────────────────────────────────────────────────────┤
│ Client: [Nike ▼]     Status: 🟢 Active    Trends: 12 Active   Assets: 47    │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Components:**

- **ZENO Branding**: Logo with 🐝 hive icon
- **Main Navigation**: Detection, Ideation, Assets, Performance sections
- **Client Selector**: Dropdown for multi-client switching (Nike, Aldi, Pilgrims)
- **System Status**: Real-time health indicators
- **Quick Stats**: Active trends, generated assets, performance metrics
- **Notifications**: Real-time alerts and approvals needed
- **User Profile**: Role-based access and settings

### Main Content Area: 5-Phase Pipeline Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CULTURAL MOMENT PIPELINE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📡              🧠              ✨              🚀              📊         │
│ DETECTION    →  IDEATION     →  CREATION     →  DISTRIBUTION  →  ANALYTICS  │
│                                                                             │
│ ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│ │ 12      │    │ 47      │    │ 23      │    │ 156     │    │ 89%     │    │
│ │ Trends  │    │ Concepts│    │ Assets  │    │ Published│   │ Success │    │
│ │ Active  │    │ Pending │    │ In Prod │    │ Today   │    │ Rate    │    │
│ └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘    │
│                                                                             │
│ [💬 Add Feedback] [💬 Add Feedback] [💬 Add Feedback] [💬 Add Feedback]    │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Feedback Integration:**

- Each phase has a "💬 Add Feedback" button
- Feedback modal opens with:
  - Phase-specific feedback categories
  - Text input for suggestions
  - Vote/rating system for existing feedback
  - @mention capabilities for team members
  - Attachment support for mockups/examples

## Phase 1: Detection Interface

### Real-Time Trend Monitoring Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 📡 CULTURAL MOMENT DETECTION                           [💬 Phase Feedback]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── LIVE TRENDS ──────────────────┐ ┌─── VELOCITY CHART ─────────────────┐ │
│ │ 🔥 Olympics Mental Health         │ │     ▲                              │ │
│ │    Velocity: 847/hr ↗️ 23%        │ │    /|\                             │ │
│ │    Sentiment: 🟢 82% Positive     │ │   / | \                            │ │
│ │    Brand Fit: 🟡 Nike: 91%        │ │  /  |  \                           │ │
│ │    [Generate Ideas] [Dismiss]     │ │ /   |   \                          │ │
│ │                                   │ │/    |    \____                     │ │
│ │ 📈 Sustainable Fashion            │ │     |         \____                │ │
│ │    Velocity: 245/hr ↗️ 156%       │ │  6hr│12hr 18hr     24hr           │ │
│ │    Sentiment: 🟢 79% Positive     │ │                                    │ │
│ │    Brand Fit: 🟢 Aldi: 67%        │ └────────────────────────────────────┘ │
│ │    [Generate Ideas] [Watch]       │                                      │
│ └───────────────────────────────────┘ ┌─── DATA SOURCES ──────────────────┐ │
│                                       │ Peak Metrics API:  🟢 Connected   │ │
│ ┌─── TREND FILTERS ─────────────────┐ │ Talkwalker:       🟢 Connected   │ │
│ │ Velocity:    [Min] [──●───] [Max] │ │ TikTok Insights:  🟢 Connected   │ │
│ │ Sentiment:   [Positive ✓] [Mixed] │ │ Discord Monitor:  🟢 Connected   │ │
│ │ Geography:   [Global ▼]           │ │ YouTube API:      🟡 Rate Limited │ │
│ │ Brand Fit:   [High] [Medium] [Low]│ │ Substack Feeds:   🟢 Connected   │ │
│ │ Keywords:    [Sports, Mental...]  │ └────────────────────────────────────┘ │
│ └───────────────────────────────────┘                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Feedback Areas for Detection Phase:**

- **Data Source Suggestions**: "What other platforms should we monitor?"
- **Filter Improvements**: "How can we improve trend filtering?"
- **Alert Preferences**: "What notifications are most useful?"
- **Velocity Thresholds**: "Are our trend detection thresholds optimal?"

### Trend Detail Modal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🔥 Olympics Mental Health Awareness                              [✕ Close]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── TREND OVERVIEW ─────────────────┐ ┌─── BRAND RELEVANCE ─────────────┐  │
│ │ Detected: 2h 34m ago               │ │ Nike:     91% ✨ High Potential │  │
│ │ Peak Time: 6-8 PM EST             │ │ Aldi:     23% ⚠️ Low Relevance  │  │
│ │ Longevity: 72% (3-5 days)         │ │ Pilgrims: 15% ❌ Not Suitable   │  │
│ │ Geographic: Global, USA-focused    │ │                                 │  │
│ │ Demographics: 18-34, Sports fans   │ │ [Generate Nike Concepts]        │  │
│ └────────────────────────────────────┘ └─────────────────────────────────┘  │
│                                                                             │
│ ┌─── CONTENT SAMPLES ─────────────────────────────────────────────────────┐  │
│ │ "Mental health is just as important as physical health in sports..."    │  │
│ │ - @SerenaWilliams (2.3M engagements)                                   │  │
│ │                                                                         │  │
│ │ "Olympic athletes opening up about mental health struggles..."          │  │
│ │ - @NBCOlympics (856K engagements)                                      │  │
│ │                                                                         │  │
│ │ [View All Sources] [Export Report]                                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌─── TEAM FEEDBACK ─────────────────────────────────────────────────────┐   │
│ │ 💬 "This could work well with our Nike athlete partnerships" - Sarah   │   │
│ │ 👍 3  💬 "Should we wait for more data?" - Mike  👍 1                  │   │
│ │ [Add Comment...] [💡 Suggest Idea] [@Mention Team]                     │   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Phase 2: Ideation Interface

### AI-Powered Concept Generation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🧠 CREATIVE IDEATION ENGINE                            [💬 Phase Feedback]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── ACTIVE CONCEPTS ─────────────────────────────────────────────────────┐  │
│ │                                                                         │  │
│ │ 💡 "Mental Strength, Physical Power" Campaign                          │  │
│ │    Brand: Nike | Trend: Olympics Mental Health | Score: 94%            │  │
│ │    Strategy: Partner with Olympic athletes sharing mental health       │  │
│ │    stories alongside physical training routines                        │  │
│ │    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐         │  │
│ │    │ [📱 Social]     │ │ [🎥 Video]      │ │ [📊 Campaign]   │         │  │
│ │    │ Instagram Posts │ │ 30sec Athlete   │ │ Integrated Plan │         │  │
│ │    │ TikTok Stories  │ │ Documentary     │ │ Budget: $2.3M   │         │  │
│ │    └─────────────────┘ └─────────────────┘ └─────────────────┘         │  │
│ │    Status: [⏳ Human Review] [✅ Approve] [❌ Reject] [✏️ Refine]        │  │
│ │                                                                         │  │
│ │ ────────────────────────────────────────────────────────────────────────│  │
│ │                                                                         │  │
│ │ 💡 "Everyday Heroes" Campaign                                          │  │
│ │    Brand: Nike | Trend: Olympics Mental Health | Score: 87%            │  │
│ │    Strategy: Celebrate everyday people overcoming mental challenges     │  │
│ │    through sport and fitness                                           │  │
│ │    Status: [📝 In Development] [👁️ Preview Assets]                      │  │
│ │                                                                         │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌─── CONCEPT GENERATOR ─────────────────┐ ┌─── PERFORMANCE PREDICTION ────┐  │
│ │ Selected Trend: Olympics Mental Health │ │ Historical Analysis:          │  │
│ │ Selected Brand: [Nike ▼]               │ │ Similar campaigns: 89% success│  │
│ │ Concept Count: [5 ▼] concepts          │ │ Audience alignment: 94%       │  │
│ │ Creative Style: [Inspirational ▼]      │ │ Predicted reach: 12M-18M      │  │
│ │ Campaign Type: [Integrated ▼]          │ │ Expected engagement: 8.5%     │  │
│ │                                        │ │ Risk factors: Low (12%)       │  │
│ │ [🎯 Generate New Concepts]             │ └───────────────────────────────┘  │
│ └────────────────────────────────────────┘                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Feedback Areas for Ideation Phase:**

- **Concept Quality**: "How can we improve AI-generated concepts?"
- **Brand Voice Accuracy**: "Does the AI capture our brand voice correctly?"
- **Strategic Suggestions**: "What creative approaches are we missing?"
- **Approval Workflow**: "How can we streamline the concept approval process?"

### Concept Detail & Collaboration View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 💡 "Mental Strength, Physical Power" - Concept Details        [✕ Close]    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── CONCEPT OVERVIEW ─────────────────┐ ┌─── EXECUTION PLAN ─────────────┐  │
│ │ Trend Source: Olympics Mental Health  │ │ Phase 1: Athlete Partnerships  │  │
│ │ Brand Alignment: 94% Nike            │ │ Phase 2: Content Creation       │  │
│ │ Target Audience: 18-34 Sports Fans   │ │ Phase 3: Multi-Platform Launch │  │
│ │ Key Message: Mental & Physical Unity  │ │ Phase 4: Community Engagement  │  │
│ │ Tone: Inspirational, Authentic       │ │ Timeline: 6 weeks               │  │
│ │ Risk Level: Low (Brand Safe)         │ │ Budget Est: $2.3M               │  │
│ └──────────────────────────────────────┘ └─────────────────────────────────┘  │
│                                                                             │
│ ┌─── STRATEGIC RATIONALE ──────────────────────────────────────────────────┐  │
│ │ This campaign leverages Nike's authentic connection to elite athletes    │  │
│ │ while addressing a culturally relevant mental health conversation.       │  │
│ │ The dual focus on mental and physical strength aligns perfectly with     │  │
│ │ Nike's "Just Do It" philosophy while showing vulnerability and humanity. │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌─── COLLABORATION SPACE ──────────────────────────────────────────────────┐ │
│ │ 💬 Creative Director: "Love the athlete angle. Can we include more       │ │
│ │    diversity in the athlete selection?" [2h ago] 👍 4                   │ │
│ │                                                                         │ │
│ │ 💬 Brand Manager: "Need to ensure this doesn't conflict with ongoing    │ │
│ │    campaigns. Check calendar." [1h ago] ⚠️ Priority                     │ │
│ │                                                                         │ │
│ │ 💬 Account Manager: "Client will love this. Very on-brand and timely"   │ │
│ │    [45m ago] ✅ Approved                                                │ │
│ │                                                                         │ │
│ │ [💬 Add Comment] [📎 Attach File] [🏷️ Add Tag] [@Mention] [⭐ Priority] │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ │ [✅ Approve Concept] [❌ Reject] [✏️ Request Changes] [🎨 Generate Assets]│ │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Phase 3: Asset Creation Interface

### AI-Powered Creative Production

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ✨ CREATIVE ASSET GENERATION                           [💬 Phase Feedback]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── ACTIVE PRODUCTIONS ──────────────────────────────────────────────────┐  │
│ │                                                                         │  │
│ │ 🎨 "Mental Strength, Physical Power" Assets                            │  │
│ │    Status: 🟡 In Production (7/12 completed)                           │  │
│ │                                                                         │  │
│ │    ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │  │
│ │    │Instagram │ │TikTok    │ │Twitter   │ │LinkedIn  │ │Hero      │   │  │
│ │    │Posts ✅  │ │Videos ✅ │ │Cards 🟡  │ │Posts ⏳ │ │Image ⏳ │   │  │
│ │    │4 variants│ │3 clips   │ │2 variants│ │1 post    │ │1 main    │   │  │
│ │    └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘   │  │
│ │                                                                         │  │
│ │    Brand Compliance: ✅ 98% | Quality Score: ⭐ 4.7/5                  │  │
│ │    [👁️ Preview All] [📥 Download] [🚀 Approve for Distribution]         │  │
│ │                                                                         │  │
│ │ ────────────────────────────────────────────────────────────────────────│  │
│ │                                                                         │  │
│ │ 🎬 "Everyday Heroes" Assets                                            │  │
│ │    Status: ⏳ Queued (Starting in 15 minutes)                          │  │
│ │    [⚡ Rush Production] [✏️ Edit Brief] [⏸️ Pause]                       │  │
│ │                                                                         │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌─── ASSET GENERATOR ───────────────────┐ ┌─── QUALITY CONTROL ──────────┐  │
│ │ Selected Concept: Mental Strength...   │ │ Auto-Checks: ✅ Brand Colors │  │
│ │ Asset Types:                           │ │             ✅ Logo Presence │  │
│ │ ☑️ Social Media (Instagram, TikTok)    │ │             ✅ Font Compliance│  │
│ │ ☑️ Paid Media (Display, Video)         │ │             ⚠️ Contrast Ratio│  │
│ │ ☑️ Hero Assets (Campaign, Print)       │ │                              │  │
│ │ Variations: [3] per asset type         │ │ Human Review: 👤 Pending     │  │
│ │ Style: [Nike Brand Guidelines ▼]       │ │ Estimated Quality: ⭐ 4.5/5  │  │
│ │                                        │ │                              │  │
│ │ [🎨 Start Production] [⚙️ Advanced]    │ └──────────────────────────────┘  │
│ └────────────────────────────────────────┘                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Feedback Areas for Creation Phase:**

- **Asset Quality**: "How can we improve AI-generated creative quality?"
- **Brand Compliance**: "Are brand guidelines being followed accurately?"
- **Production Speed**: "How can we optimize asset generation time?"
- **Format Requirements**: "What asset formats are we missing?"

### Asset Preview & Approval Interface

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 👁️ Asset Preview: Instagram Posts - "Mental Strength, Physical Power"      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── VARIANT A ─────────┐ ┌─── VARIANT B ─────────┐ ┌─── VARIANT C ─────────┐│
│ │ [Instagram Post 1x1]  │ │ [Instagram Post 1x1]  │ │ [Instagram Post 1x1]  ││
│ │ ┌─────────────────────┐│ │ ┌─────────────────────┐│ │ ┌─────────────────────┐││
│ │ │ 🏃‍♀️ Athlete image   ││ │ │ 💪 Split brain/muscle││ │ │ 🧠 Mental health    ││
│ │ │ with mental health   ││ │ │ graphic design       ││ │ │ quote overlay       ││
│ │ │ quote overlay        ││ │ │                     ││ │ │                     ││
│ │ │                     ││ │ │ "Your mind is your   ││ │ │ "Strength isn't     ││
│ │ │ "Train your mind    ││ │ │ strongest muscle"    ││ │ │ just physical"      ││
│ │ │ like your body"     ││ │ │                     ││ │ │                     ││
│ │ │                     ││ │ │ Nike Swoosh         ││ │ │ Nike Swoosh         ││
│ │ │ Nike Swoosh         ││ │ └─────────────────────┘│ │ └─────────────────────┘││
│ │ └─────────────────────┘│ │                       │ │                       ││
│ │ Performance: ⭐ 4.2    │ │ Performance: ⭐ 4.7    │ │ Performance: ⭐ 4.1    ││
│ │ Brand: ✅ 96%         │ │ Brand: ✅ 98%         │ │ Brand: ✅ 94%         ││
│ │ [✅ Approve] [✏️ Edit] │ │ [✅ Approve] [✏️ Edit] │ │ [✅ Approve] [✏️ Edit] ││
│ └───────────────────────┘ └───────────────────────┘ └───────────────────────┘│
│                                                                             │
│ ┌─── TEAM FEEDBACK ─────────────────────────────────────────────────────┐   │
│ │ 💬 "Variant B has the strongest visual impact" - Creative Director     │   │
│ │ 💬 "Love the brain/muscle concept, very Nike" - Brand Manager          │   │
│ │ 💬 "A/B test B vs C for engagement?" - Social Media Manager            │   │
│ │ [Add Feedback] [📊 Performance Data] [🔄 Generate More Variants]       │   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ [✅ Approve All] [✅ Approve Selected] [🚀 Send to Distribution] [💾 Save]  │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Phase 4: Distribution Interface

### Multi-Channel Asset Distribution

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🚀 ASSET DISTRIBUTION CENTER                          [💬 Phase Feedback]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── CAMPAIGN: "Mental Strength, Physical Power" ──────────────────────────┐ │
│ │                                                                         │ │
│ │ ┌─ INSTAGRAM ─┐ ┌─ TIKTOK ────┐ ┌─ TWITTER ──┐ ┌─ LINKEDIN ─┐ ┌─ EMAIL ─┐│ │
│ │ │ 📱 4 Posts  │ │ 🎵 3 Videos │ │ 🐦 6 Cards │ │ 💼 2 Posts │ │ 📧 1 Tmpl││ │
│ │ │ Scheduled:  │ │ Scheduled:  │ │ Scheduled: │ │ Scheduled: │ │ Ready:   ││ │
│ │ │ Today 2PM   │ │ Today 4PM   │ │ Today 3PM  │ │ Tomorrow   │ │ On Demand││ │
│ │ │ Status: ⏳  │ │ Status: ✅  │ │ Status: ✅ │ │ Status: ⏳ │ │ Status:✅││ │
│ │ │ [📊 Metrics]│ │ [📊 Metrics]│ │ [📊 Metrics]│ │ [📊 Metrics]│ │[📊 Stats]││ │
│ │ └─────────────┘ └─────────────┘ └────────────┘ └────────────┘ └──────────┘│ │
│ │                                                                         │ │
│ │ ┌─ PAID MEDIA ──────────────────────────────────────────────────────────┐│ │
│ │ │ 🎯 Display Ads: $50K budget | Running | CTR: 2.3% | Conv: 4.1%       ││ │
│ │ │ 📺 Video Ads: $75K budget | Starting 6PM | Predicted reach: 2.1M     ││ │
│ │ │ 🔍 Search Ads: $25K budget | Pending approval | Keywords: 23          ││ │
│ │ └───────────────────────────────────────────────────────────────────────┘│ │
│ │                                                                         │ │
│ │ Campaign Health: 🟢 Performing well | Budget: $87K of $150K used       │ │
│ │ [⏸️ Pause Campaign] [⚡ Boost Performance] [📊 Full Analytics]            │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── REAL-TIME PERFORMANCE ──────────────────────────────────────────────┐  │
│ │ Last 4 Hours:                                                          │  │
│ │ 📈 Reach: 1.2M (+23% vs prediction)                                   │  │
│ │ 💗 Engagement: 89K (7.4% rate)                                        │  │
│ │ 🔄 Shares: 12.3K (viral coefficient: 1.8)                             │  │
│ │ 💬 Sentiment: 🟢 87% Positive                                          │  │
│ │ 🎯 Top Platform: TikTok (67% of engagement)                           │  │
│ │                                                                        │  │
│ │ [🚨 Set Alerts] [📱 Mobile Notifications] [📧 Email Reports]          │  │
│ └────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Feedback Areas for Distribution Phase:**

- **Platform Performance**: "Which distribution channels work best?"
- **Timing Optimization**: "Are our posting schedules optimal?"
- **Audience Response**: "How can we improve audience engagement?"
- **Attribution Tracking**: "How accurate is our performance attribution?"

## Phase 5: Analytics & Learning Interface

### Performance Analytics Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 📊 PERFORMANCE ANALYTICS & LEARNING                   [💬 Phase Feedback]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── CAMPAIGN PERFORMANCE ──────────────────────────────────────────────────┐│
│ │ "Mental Strength, Physical Power" - Final Results                        ││
│ │                                                                           ││
│ │ 📈 Total Reach: 3.7M (185% of target)  💗 Engagement Rate: 8.9%         ││
│ │ 🔄 Share Rate: 2.3%                    💬 Comments: 47K                  ││
│ │ 🎯 Conversions: 12.4K                  💰 ROAS: 4.2x                     ││
│ │ 📊 Brand Lift: +23%                    🧠 Sentiment: 91% Positive        ││
│ │                                                                           ││
│ │ ┌─ TOP PERFORMERS ──────────┐ ┌─ LEARNING INSIGHTS ────────────────────┐ ││
│ │ │ 🥇 TikTok Video #2        │ │ ✨ Mental health messaging resonated  │ ││
│ │ │    2.1M views, 12% engage │ │ ✨ Athlete authenticity drove shares   │ ││
│ │ │ 🥈 Instagram Post #3      │ │ ✨ 4-6PM posting time optimal          │ ││
│ │ │    890K reach, 9.4% engage│ │ ⚠️ LinkedIn underperformed expectations │ ││
│ │ │ 🥉 Twitter Thread        │ │ ⚠️ Video ads needed more diversity     │ ││
│ │ │    445K impressions       │ │ 💡 Expand to YouTube Shorts next time  │ ││
│ │ └───────────────────────────┘ └─────────────────────────────────────────┘ ││
│ └───────────────────────────────────────────────────────────────────────────┘│
│                                                                             │
│ ┌─── AI LEARNING INTEGRATION ───────────────────────────────────────────────┐│
│ │ 🤖 Model Updates Applied:                                                 ││
│ │ ✅ Trend detection improved for mental health topics (+12% accuracy)      ││
│ │ ✅ Creative generation biased toward authentic athlete content            ││
│ │ ✅ TikTok timing algorithms updated with new optimal windows              ││
│ │ ✅ Brand voice model enhanced with positive mental health language        ││
│ │                                                                           ││
│ │ 🔮 Predictions for Next Campaign:                                         ││
│ │ • Similar authenticity-focused campaigns: 89% success probability        ││
│ │ • Mental health topics: High relevance for Nike (predicted +31% lift)    ││
│ │ • Recommended budget allocation: 45% TikTok, 30% Instagram, 25% other    ││
│ │                                                                           ││
│ │ [📚 View Full Learning Report] [🎯 Apply to New Campaign]                ││
│ └───────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

**Feedback Areas for Analytics Phase:**

- **Reporting Accuracy**: "Are our performance metrics capturing everything?"
- **Learning Application**: "How can we better apply insights to future campaigns?"
- **Prediction Quality**: "How accurate are our performance predictions?"
- **Cross-Campaign Insights**: "What patterns do you see across campaigns?"

## Collaborative Feedback System

### Universal Feedback Modal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 💬 Add Feedback: Detection Phase                              [✕ Close]    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ Feedback Category: [General ▼] [Bug Report] [Feature Request] [Process]    │
│                                                                             │
│ ┌─── YOUR FEEDBACK ──────────────────────────────────────────────────────┐  │
│ │ We should add Reddit monitoring for niche communities. The current     │  │
│ │ trend detection misses underground movements that often predict        │  │
│ │ mainstream trends by 2-3 days.                                        │  │
│ │                                                                        │  │
│ │ @sarah-creative @mike-data what do you think about this?              │  │
│ └────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ 📎 Attachments: [Upload File] [Screenshot] [Link]                          │
│ 🏷️ Tags: [#improvement] [#data-sources] [#reddit]                          │
│ ⭐ Priority: [Low] [●Medium] [High] [Critical]                             │
│ 👥 Visibility: [Team] [●Stakeholders] [Public]                            │
│                                                                             │
│ ┌─── SIMILAR FEEDBACK ───────────────────────────────────────────────────┐  │
│ │ 💬 "We need more diverse data sources" - Alex (2 days ago) 👍 5        │  │
│ │ 💬 "Discord monitoring would be valuable too" - Sam (1 week ago) 👍 3  │  │
│ │ [View All Related] [Merge with Existing]                               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ [📤 Submit Feedback] [💾 Save Draft] [🔄 AI Suggestions] [Cancel]          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Feedback Management Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 💬 Team Feedback Center                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── ACTIVE DISCUSSIONS ─────────────────────────────────────────────────┐  │
│ │ 🔥 "Add Reddit monitoring" (Detection Phase) 👍 8 💬 12                │  │
│ │    Status: Under Review | Priority: High | Owner: @mike-data           │  │
│ │                                                                         │  │
│ │ 💡 "Improve concept quality" (Ideation Phase) 👍 15 💬 8               │  │
│ │    Status: In Progress | Priority: Medium | Owner: @ai-team            │  │
│ │                                                                         │  │
│ │ ⚡ "Faster asset generation" (Creation Phase) 👍 6 💬 4                │  │
│ │    Status: Planned | Priority: High | Owner: @dev-team                 │  │
│ │                                                                         │  │
│ │ [View All] [Filter by Phase] [My Feedback] [Priority Items]            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌─── FEEDBACK ANALYTICS ─────────────────────────────────────────────────┐  │
│ │ This Week: 47 new feedback items | 23 resolved | 12 in progress        │  │
│ │ Top Categories: Data Sources (15), AI Quality (12), UX Issues (8)      │  │
│ │ Most Active Phase: Detection (23 items) | Ideation (18 items)          │  │
│ │ Team Participation: 94% (32/34 team members contributed)               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Responsive Design

### Mobile Dashboard (Portrait)

```
┌─────────────────┐
│ ZENO 🐝 HIVE    │
│ Client: Nike ▼  │
├─────────────────┤
│ 📡 DETECTION    │
│ 12 Active Trends│
│ [View All]      │
├─────────────────┤
│ 🧠 IDEATION     │
│ 8 Concepts      │
│ 3 Need Review   │
│ [Review Now]    │
├─────────────────┤
│ ✨ CREATION     │
│ 5 In Production │
│ 12 Ready        │
│ [Preview Assets]│
├─────────────────┤
│ 🚀 LIVE         │
│ 3 Campaigns     │
│ 89% Performance │
│ [View Metrics]  │
├─────────────────┤
│ 💬 Feedback: 15 │
│ [Add Feedback]  │
└─────────────────┘
```

## Technical Implementation Notes

### Frontend Framework

- **React 18** with TypeScript for type safety
- **Next.js 14** for server-side rendering and performance
- **Tailwind CSS** for consistent design system
- **Framer Motion** for smooth animations and transitions

### Real-Time Features

- **WebSocket connections** for live updates across all phases
- **Socket.io** for reliable real-time communication
- **Redis** for real-time data caching and session management
- **Server-Sent Events** for live notifications and alerts

### Data Visualization

- **D3.js** for complex trend charts and analytics
- **Chart.js** for standard performance metrics
- **React-Spring** for animated data transitions
- **Plotly.js** for interactive analytical dashboards

### Collaboration Features

- **Real-time commenting** with live cursors and presence indicators
- **@mention system** with email and in-app notifications
- **File sharing** with drag-and-drop support
- **Version control** for all feedback and asset iterations

### Performance Optimization

- **Lazy loading** for asset previews and large datasets
- **Virtual scrolling** for long lists of trends and assets
- **Image optimization** with automatic WebP conversion
- **Progressive loading** with skeleton screens during data fetching

## Accessibility Standards

### WCAG 2.1 AA Compliance

- **Keyboard navigation** for all interactive elements
- **Screen reader support** with semantic HTML and ARIA labels
- **Color contrast** meeting 4.5:1 ratio requirements
- **Focus indicators** with clear visual feedback
- **Alternative text** for all images and visual content

### Inclusive Design

- **High contrast mode** option for better visibility
- **Font size adjustment** with zoom support up to 200%
- **Motion reduction** settings for users with vestibular disorders
- **Simple language** with clear, concise interface copy

This UI specification provides a comprehensive foundation for building HIVE 3.0 v1 with integrated feedback systems across all phases of the cultural moment marketing pipeline. The design prioritizes collaboration, real-time updates, and user-friendly interfaces while maintaining the professional aesthetics appropriate for enterprise software.

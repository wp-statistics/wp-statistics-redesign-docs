---
title: "Examples"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 4
---

# MCP Examples

Real-world examples of using WP Statistics MCP abilities with AI assistants.

---

## Daily Analytics Check

### Conversation

**User:** "How's my site doing today compared to yesterday?"

**AI uses:** `wp-statistics/get-summary` with `compare: true`

**AI Response:**

> "Here's your daily snapshot:
>
> **Today so far:**
> - 423 visitors (↑ 12% vs yesterday)
> - 1,245 page views (↑ 8%)
> - 38.2% bounce rate (improved from 41.5%)
>
> **Notable:** Your traffic is trending up, likely due to the blog post you published yesterday getting traction on social media."

---

## Weekly Performance Report

### Conversation

**User:** "Give me a weekly report of my site's performance"

**AI uses:** Multiple abilities:
1. `wp-statistics/get-summary` - Overall metrics
2. `wp-statistics/get-top-pages` - Best content
3. `wp-statistics/get-countries` - Geographic breakdown
4. `wp-statistics/get-referrers` - Traffic sources

**AI Response:**

> "**Weekly Performance Report (Dec 22-29, 2024)**
>
> **Overview:**
> - Total Visitors: 8,450 (+15% vs previous week)
> - Page Views: 23,800 (+12%)
> - Avg. Session Duration: 3:15 (+8%)
> - Bounce Rate: 42.3% (improved from 45.1%)
>
> **Top Performing Content:**
> 1. 'Complete Guide to Analytics' - 2,340 views
> 2. 'Getting Started Tutorial' - 1,890 views
> 3. 'Advanced Tips & Tricks' - 1,245 views
>
> **Traffic Sources:**
> - Organic Search: 45% (Google 92%, Bing 5%)
> - Direct: 28%
> - Social: 18% (Twitter 45%, LinkedIn 32%)
> - Referral: 9%
>
> **Geographic Highlights:**
> - US traffic up 22% (your top market)
> - New growth from Germany (+45%)
>
> **Recommendations:**
> - Your tutorial content is performing well - consider creating more
> - Twitter is outperforming other social channels - focus your efforts there"

---

## Content Performance Analysis

### Conversation

**User:** "Which of my blog posts performed best this month and why?"

**AI uses:**
1. `wp-statistics/get-top-pages` with `post_type: "post"`
2. `wp-statistics/get-page-stats` for top posts

**AI Response:**

> "**Top Blog Posts This Month:**
>
> | Rank | Post | Views | Avg. Time | Bounce |
> |------|------|-------|-----------|--------|
> | 1 | Complete Analytics Guide | 5,420 | 4:32 | 28% |
> | 2 | Beginner's Tutorial | 3,890 | 3:15 | 35% |
> | 3 | Advanced Configuration | 2,150 | 5:45 | 22% |
>
> **Why they're performing well:**
>
> 1. **Complete Analytics Guide** - Getting 65% of traffic from Google. It ranks well for 'website analytics guide'. High engagement (4:32 avg time) suggests quality content.
>
> 2. **Beginner's Tutorial** - Strong social sharing (820 visits from Twitter). Good entry point for new users.
>
> 3. **Advanced Configuration** - Lowest bounce rate (22%) indicates highly relevant content for returning users. Most traffic is from direct and email sources.
>
> **Suggestions:**
> - Create a follow-up to the Analytics Guide - it's your strongest performer
> - Consider updating the Beginner's Tutorial with recent screenshots
> - The Advanced Configuration post would benefit from internal links to drive more traffic"

---

## Traffic Source Deep Dive

### Conversation

**User:** "I want to understand where my traffic is coming from and how to get more"

**AI uses:**
1. `wp-statistics/get-referrers` - All sources
2. `wp-statistics/get-search-engines` - Search breakdown
3. `wp-statistics/get-campaigns` - Campaign data

**AI Response:**

> "**Traffic Source Analysis:**
>
> **Organic Search (45% of traffic)**
> - Google: 4,200 visitors
> - Bing: 380 visitors
> - DuckDuckGo: 120 visitors
>
> Your top ranking pages are tutorials and how-to guides. These have low bounce rates (32%) showing good intent match.
>
> **Direct Traffic (28%)**
> 2,600 visitors coming directly. This indicates good brand awareness and returning users.
>
> **Social Media (18%)**
> - Twitter: 850 visitors (bounce: 45%)
> - LinkedIn: 520 visitors (bounce: 38%)
> - Facebook: 280 visitors (bounce: 52%)
>
> LinkedIn has the lowest bounce rate - your B2B content resonates there.
>
> **Campaigns (9%)**
> Your 'holiday-sale' campaign drove 420 visitors with a 35% bounce rate - well above average.
>
> **Recommendations to increase traffic:**
>
> 1. **Double down on SEO** - Your organic content performs best. Create more long-form guides.
>
> 2. **Focus on LinkedIn** - Lower bounce rate than other social channels. Share more professional content.
>
> 3. **Reduce Facebook spend** - High bounce rate suggests audience mismatch.
>
> 4. **Create email campaigns** - You're missing this channel entirely."

---

## Issue Detection

### Conversation

**User:** "Are there any problems with my site I should know about?"

**AI uses:**
1. `wp-statistics/get-404-pages` - Broken links
2. `wp-statistics/get-top-pages` sorted by bounce_rate
3. `wp-statistics/get-devices` - Device performance

**AI Response:**

> "**Site Health Check - Issues Found:**
>
> **🔴 Critical: Broken Links (404 Errors)**
>
> 156 visitors hit 404 pages this month:
> - `/old-pricing/` - 47 hits (referrer: google.com)
> - `/product-discontinued/` - 32 hits
> - `/blog/deleted-post/` - 28 hits
>
> *Action needed:* Set up redirects for these URLs. The /old-pricing/ page is being indexed by Google - update your sitemap.
>
> **🟡 Warning: High Bounce Rate Pages**
>
> These pages may have issues:
> - `/landing-page-1/` - 85% bounce rate (possible slow load or irrelevant content)
> - `/category/misc/` - 78% bounce rate
> - `/about/team/` - 72% bounce rate
>
> **🟡 Warning: Mobile Experience**
>
> Your mobile visitors have:
> - 52% bounce rate (vs 38% desktop)
> - 2.1 pages/session (vs 3.4 desktop)
> - 1:45 avg session (vs 3:15 desktop)
>
> *Action needed:* Review your mobile site experience. Consider a mobile UX audit.
>
> **✅ Good News**
>
> - No server errors detected
> - Your top 10 pages all have healthy bounce rates
> - Organic search traffic is growing steadily"

---

## Geographic Expansion Analysis

### Conversation

**User:** "I'm thinking about expanding into Europe. What does my data say?"

**AI uses:**
1. `wp-statistics/get-countries` with `continent: "EU"`
2. `wp-statistics/get-regions` for top EU countries

**AI Response:**

> "**European Market Analysis:**
>
> **Current EU Traffic:** 2,450 visitors (21% of total)
>
> **Top European Countries:**
>
> | Country | Visitors | Bounce Rate | Pages/Session |
> |---------|----------|-------------|---------------|
> | UK | 680 | 38% | 3.2 |
> | Germany | 520 | 35% | 3.5 |
> | France | 340 | 42% | 2.8 |
> | Netherlands | 280 | 32% | 3.8 |
> | Spain | 195 | 48% | 2.4 |
>
> **Key Insights:**
>
> 1. **Germany & Netherlands** show the best engagement (low bounce, high pages/session). These markets are ready for more focus.
>
> 2. **UK traffic** is your largest EU market but has average engagement. There may be untapped potential here.
>
> 3. **Spain** has the highest bounce rate - content may need localization.
>
> **Recommendations for EU Expansion:**
>
> - Start with Germany and Netherlands - your content already resonates there
> - Consider German language content - it could significantly boost engagement
> - UK is saturated but not optimized - A/B test landing pages for this market
> - Spain needs localized content before pushing traffic there
>
> **Traffic Sources in EU:**
> - 62% organic search (similar to overall)
> - 18% direct
> - 12% social (LinkedIn performs best in EU)
> - 8% referral"

---

## Real-Time Monitoring

### Conversation

**User:** "Who's on my site right now?" *(Requires Data Plus)*

**AI uses:** `wp-statistics/get-online-visitors`

**AI Response:**

> "**Currently Online: 23 visitors**
>
> **Active Sessions:**
>
> | Location | Page | Duration | Source |
> |----------|------|----------|--------|
> | New York, US | /pricing/ | 3:45 | google.com |
> | London, UK | /features/ | 2:12 | direct |
> | Berlin, DE | /blog/guide/ | 5:30 | twitter.com |
> | Toronto, CA | /docs/api/ | 8:15 | github.com |
>
> **Device Breakdown:**
> - Desktop: 18 visitors
> - Mobile: 4 visitors
> - Tablet: 1 visitor
>
> **Interesting Activity:**
> - A visitor from Toronto has been reading your API docs for 8 minutes - might be a potential developer user
> - 3 visitors are currently on your pricing page
> - Your blog guide from Twitter is getting good engagement"

---

## Tips for AI Conversations

### Be Specific

❌ "How's my traffic?"
✅ "Compare my traffic this week to last week"

### Ask for Insights

❌ "Show me my countries"
✅ "Which countries should I focus my marketing on based on engagement?"

### Request Actions

❌ "What's my bounce rate?"
✅ "What's causing my high bounce rate and how can I fix it?"

### Combine Data Points

❌ "Show me pages" then "Show me devices"
✅ "Are certain pages performing worse on mobile?"

---

*Last Updated: 2025-12-29*

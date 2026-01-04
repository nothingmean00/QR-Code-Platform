export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "qr-code-size-guide-print",
    title: "QR Code Size Guide: How Big Should Your QR Code Be for Print?",
    excerpt: "Learn the optimal QR code sizes for business cards, posters, billboards, and packaging. Avoid the #1 mistake that makes QR codes unscannable.",
    content: `
## The Golden Rule of QR Code Sizing

The minimum size for a QR code depends on the scanning distance. Here's the formula:

**Minimum QR Size = Scanning Distance ÷ 10**

So if someone will scan from 10 feet away, your QR code needs to be at least 1 foot (12 inches) wide.

## Size Guide by Use Case

### Business Cards
- **Size:** 0.8 x 0.8 inches (2 x 2 cm)
- **Scanning distance:** 3-6 inches
- **Tip:** Use high error correction (Level H) to handle small sizes

### Flyers & Brochures
- **Size:** 1 x 1 inch minimum
- **Scanning distance:** 6-12 inches
- **Tip:** Place in lower-right corner with clear CTA

### Posters
- **Size:** 2-4 inches depending on placement
- **Scanning distance:** 1-3 feet
- **Tip:** Test from expected viewing distance before printing

### Billboards & Large Signage
- **Size:** 12+ inches
- **Scanning distance:** 10+ feet
- **Tip:** Consider if people can actually stop to scan (not ideal for highway billboards)

### Product Packaging
- **Size:** 0.6 x 0.6 inches minimum
- **Scanning distance:** 3-6 inches
- **Tip:** Ensure contrast with packaging colors

## Common Mistakes to Avoid

1. **Making it too small** - If in doubt, go bigger
2. **Low contrast colors** - Black on white works best
3. **Placing on curved surfaces without testing** - Use Level H error correction
4. **No quiet zone** - Leave white space around the code (at least 4 modules)
5. **Forgetting to test** - Always scan before final print

## Error Correction Levels

| Level | Damage Tolerance | Best For |
|-------|------------------|----------|
| L | 7% | Large, clean surfaces |
| M | 15% | General use |
| Q | 25% | Outdoor use |
| H | 30% | Small sizes, logos, curved surfaces |

We use Level H by default for maximum reliability.
    `,
    author: "QR Generator Team",
    publishedAt: "2024-12-15",
    readTime: 5,
    category: "Guides",
    tags: ["print", "sizing", "best practices"],
    featured: true
  },
  {
    slug: "restaurant-qr-code-menu-guide",
    title: "How to Create a QR Code Menu for Your Restaurant (2024 Guide)",
    excerpt: "Step-by-step guide to creating digital menus with QR codes. Includes placement tips, design best practices, and common pitfalls to avoid.",
    content: `
## Why QR Code Menus?

After 2020, QR code menus became standard. Here's why they're here to stay:

- **Cost savings:** No reprinting when prices change
- **Hygiene:** Contactless experience
- **Flexibility:** Update specials instantly
- **Analytics:** Track what customers view

## Step 1: Create Your Digital Menu

You have several options:

1. **PDF menu** - Simple but not mobile-optimized
2. **Website page** - Best experience, requires web hosting
3. **Google Doc** - Free, easy to update, not professional
4. **Menu platforms** - Purpose-built solutions

**Recommendation:** A mobile-optimized webpage gives the best customer experience.

## Step 2: Generate Your QR Code

1. Copy your menu URL
2. Generate a QR code (use our tool!)
3. Download in SVG format for print quality
4. Test the code before printing

## Step 3: Design Your Table Tent or Sticker

Include:
- Your logo
- "Scan for Menu" text
- The QR code (at least 1 inch)
- WiFi info (optional bonus)

## Placement Best Practices

- **Table tents:** Center of table, visible from all seats
- **Stickers:** On table surface, protected from spills
- **Wall signs:** Near entrance for takeout customers
- **Receipts:** For feedback collection

## Common Mistakes

1. **Broken links** - Test monthly
2. **Slow-loading menus** - Optimize images
3. **Not mobile-friendly** - 95% will view on phones
4. **No fallback** - Keep a few paper menus for older customers

## Pro Tips

- Add your WiFi as a second QR code
- Include a "review us" QR code on receipts
- Update your menu URL to track visits in analytics
    `,
    author: "QR Generator Team",
    publishedAt: "2024-12-10",
    readTime: 7,
    category: "Industry",
    tags: ["restaurants", "menus", "hospitality"]
  },
  {
    slug: "qr-code-error-correction-explained",
    title: "QR Code Error Correction: What It Is and Why It Matters",
    excerpt: "Understanding error correction levels (L, M, Q, H) and how they affect your QR code's reliability, size, and scannability.",
    content: `
## What is Error Correction?

QR codes have built-in redundancy that allows them to be scanned even when partially damaged or obscured. This is called error correction.

## The Four Levels

### Level L (Low) - 7% Recovery
- Smallest QR code size
- Best for: Clean, controlled environments
- Use when: Size is critical, code will be protected

### Level M (Medium) - 15% Recovery
- Balanced size and reliability
- Best for: General indoor use
- Use when: Standard applications

### Level Q (Quartile) - 25% Recovery
- Larger code size
- Best for: Outdoor use, some wear expected
- Use when: Code may get dirty or slightly damaged

### Level H (High) - 30% Recovery
- Largest code size
- Best for: Logos in center, harsh conditions
- Use when: Maximum reliability needed

## Visual Comparison

A QR code encoding "https://example.com" at each level:

| Level | Modules | Reliability |
|-------|---------|-------------|
| L | 21x21 | ⭐ |
| M | 25x25 | ⭐⭐ |
| Q | 29x29 | ⭐⭐⭐ |
| H | 33x33 | ⭐⭐⭐⭐ |

## When to Use Level H

We default to Level H because:

1. **Curved surfaces** - Bottles, cans, flexible packaging
2. **Small sizes** - Business cards, product labels
3. **Outdoor use** - Weather exposure
4. **Logo embedding** - Center logos obscure ~10% of code

## The Trade-off

Higher error correction = larger QR code = needs more space

If space is extremely limited and conditions are perfect, Level M may work. But Level H provides peace of mind.

## Our Recommendation

**Always use Level H** unless you have a specific reason not to. The slight size increase is worth the reliability.
    `,
    author: "QR Generator Team",
    publishedAt: "2024-12-05",
    readTime: 4,
    category: "Technical",
    tags: ["error correction", "technical", "reliability"]
  },
  {
    slug: "qr-code-tracking-analytics",
    title: "How to Track QR Code Scans: A Complete Guide to QR Analytics",
    excerpt: "Learn how to measure QR code performance with scan tracking, UTM parameters, and analytics integration.",
    content: `
## Why Track QR Code Scans?

If you're using QR codes for marketing, you need to know:

- How many people scanned?
- When did they scan?
- Where did they scan from?
- What device did they use?

## Method 1: UTM Parameters (Free)

Add tracking parameters to your URL:

\`\`\`
https://yoursite.com/landing?utm_source=flyer&utm_medium=qr&utm_campaign=spring2024
\`\`\`

Then view results in Google Analytics under Acquisition > Campaigns.

**Pros:** Free, works with any analytics tool
**Cons:** No scan-specific data, requires GA setup

## Method 2: URL Shorteners

Services like Bitly or Rebrandly provide:

- Click/scan counts
- Geographic data
- Time-based analytics
- Custom short URLs

**Pros:** Easy setup, basic analytics included
**Cons:** Another service to manage, some features paid

## Method 3: QR Code Analytics Platforms

Dedicated QR analytics (like our Pro plan) provide:

- Real-time scan tracking
- Device and OS breakdown
- GPS location data
- Scan heatmaps
- Unique vs. repeat scans

**Pros:** Most detailed data, purpose-built
**Cons:** Monthly cost

## What Metrics Matter?

### For Marketing Campaigns
- Total scans
- Unique scanners
- Conversion rate (scans to action)
- Geographic distribution

### For Operations (menus, manuals, etc.)
- Scan frequency
- Peak times
- Device types (for optimization)

## Setting Up Tracking

1. **Define your goal** - What action should scanners take?
2. **Choose your method** - UTM, shortener, or analytics platform
3. **Create unique codes** - One per campaign/location
4. **Set up conversion tracking** - Track the end goal, not just scans
5. **Review regularly** - Weekly for campaigns, monthly for evergreen codes

## Pro Tip: A/B Testing with QR Codes

Create two versions of your print material with different QR codes pointing to:
- Same destination with different UTM parameters, or
- Different landing pages

Compare scan rates to optimize your design and placement.
    `,
    author: "QR Generator Team",
    publishedAt: "2024-11-28",
    readTime: 6,
    category: "Marketing",
    tags: ["analytics", "tracking", "marketing"]
  },
  {
    slug: "dynamic-vs-static-qr-codes",
    title: "Dynamic vs Static QR Codes: Which Should You Use?",
    excerpt: "Understand the difference between static and dynamic QR codes, and when to use each type for your business.",
    content: `
## Static QR Codes

A static QR code encodes data directly. The destination is "baked in" and cannot be changed.

### How They Work
The URL or data is encoded directly in the QR pattern. Scanning always goes to the same place.

### Pros
- ✅ No ongoing costs
- ✅ Works offline (for text, vCard, WiFi)
- ✅ No dependency on third-party services
- ✅ Faster (direct link, no redirect)

### Cons
- ❌ Cannot change destination after printing
- ❌ No scan tracking
- ❌ Longer URLs = larger QR codes

### Best For
- WiFi access codes
- Contact cards (vCard)
- Permanent links that won't change
- One-time use cases

## Dynamic QR Codes

A dynamic QR code points to a short URL that redirects to your actual destination. The redirect can be changed anytime.

### How They Work
QR code → short URL → redirect → your destination

### Pros
- ✅ Change destination without reprinting
- ✅ Scan tracking and analytics
- ✅ Shorter URLs = smaller QR codes
- ✅ Can A/B test destinations

### Cons
- ❌ Ongoing subscription cost
- ❌ Dependent on redirect service
- ❌ Slightly slower (redirect hop)
- ❌ Won't work if service goes down

### Best For
- Marketing campaigns
- Menus (change seasonally)
- Product packaging (link to updated manuals)
- Any print material where you might need to update the link

## Quick Decision Guide

| Situation | Recommendation |
|-----------|----------------|
| WiFi password | Static |
| Business card contact | Static |
| Product manual link | Dynamic |
| Marketing campaign | Dynamic |
| Restaurant menu | Either (static if URL is stable) |
| Event tickets | Static (unique per ticket) |

## Our Approach

We generate static QR codes because:

1. **No lock-in** - Your codes work forever, no subscription needed
2. **Reliability** - No redirect service to fail
3. **Privacy** - We don't track your scans (unless you opt into Analytics)

For dynamic functionality, use a URL shortener you control (like Bitly) and encode that short URL in your QR code.
    `,
    author: "QR Generator Team",
    publishedAt: "2024-11-20",
    readTime: 5,
    category: "Guides",
    tags: ["static", "dynamic", "comparison"]
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map(post => post.slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

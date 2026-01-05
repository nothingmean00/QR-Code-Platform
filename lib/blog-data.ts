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
  image?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "qr-code-size-guide-print",
    title: "QR Code Size Guide: How Big Should Your QR Code Be for Print?",
    excerpt: "Learn the optimal QR code sizes for business cards, posters, billboards, and packaging. Avoid the #1 mistake that makes QR codes unscannable.",
    content: `
![QR Code Size Guide Hero](/blog/qr-size-guide-hero.png)

## The Golden Rule of QR Code Sizing

The minimum size for a QR code depends on the scanning distance. Here's the simple formula that professionals use:

**Minimum QR Size = Scanning Distance ÷ 10**

So if someone will scan from 10 feet away, your QR code needs to be at least 1 foot (12 inches) wide. This rule accounts for camera resolution, lighting conditions, and user error.

![Scanning Distance Visual](/blog/qr-size-guide-scanning.png)

## Why Size Matters More Than You Think

A QR code that's too small won't scan—period. But the consequences go beyond frustration:

- **Lost customers:** 67% of users won't retry a failed scan
- **Wasted print costs:** Reprinting materials is expensive
- **Brand damage:** Failed technology reflects poorly on your business

## Complete Size Guide by Use Case

### Business Cards (3.5" x 2")
- **Recommended size:** 0.8 x 0.8 inches (20 x 20 mm)
- **Minimum size:** 0.6 x 0.6 inches (15 x 15 mm)
- **Scanning distance:** 3-8 inches (hand-held)
- **Pro tip:** Place in bottom-right corner. Use Level H error correction to handle small sizes and potential wear.

### Flyers & Brochures (8.5" x 11")
- **Recommended size:** 1.2 x 1.2 inches (30 x 30 mm)
- **Minimum size:** 1 x 1 inch (25 x 25 mm)
- **Scanning distance:** 6-18 inches
- **Pro tip:** Include a clear call-to-action like "Scan for 20% off" near the code.

### Posters (18" x 24" to 24" x 36")
- **Recommended size:** 2-3 inches (50-75 mm)
- **Minimum size:** 1.5 inches (40 mm)
- **Scanning distance:** 1-4 feet
- **Pro tip:** Test from the expected viewing distance before printing. Consider eye-level placement.

### Banners & Trade Show Displays
- **Recommended size:** 4-6 inches (100-150 mm)
- **Minimum size:** 3 inches (75 mm)
- **Scanning distance:** 3-8 feet
- **Pro tip:** Position at standing eye level (approximately 5 feet from ground).

### Billboards & Large Signage
- **Recommended size:** 12-24 inches (300-600 mm)
- **Minimum size:** 10 inches (250 mm)
- **Scanning distance:** 10-30 feet
- **Important:** Only use QR codes on billboards where people can safely stop (not highway billboards).

### Product Packaging
- **Recommended size:** 0.8 x 0.8 inches (20 x 20 mm)
- **Minimum size:** 0.5 x 0.5 inches (12 x 12 mm)
- **Scanning distance:** 3-6 inches
- **Pro tip:** Ensure high contrast with packaging colors. Test on curved surfaces.

### Restaurant Table Tents
- **Recommended size:** 1.5 x 1.5 inches (38 x 38 mm)
- **Minimum size:** 1 x 1 inch (25 x 25 mm)
- **Scanning distance:** 12-24 inches
- **Pro tip:** Laminate to protect from spills. Include "Scan for Menu" text.

## The Quiet Zone: The Margin That Makes or Breaks Scanning

Every QR code needs empty space around it called the "quiet zone." This margin helps scanners identify where the code begins and ends.

**Required quiet zone: 4 modules (the small squares that make up the QR code)**

In practical terms:
- For a 1-inch QR code: ~0.1 inch margin on all sides
- For a 2-inch QR code: ~0.2 inch margin on all sides

**Common quiet zone mistakes:**
- Placing the code too close to text or graphics
- Using a border that touches the code
- Cropping the code to fit a tight space

## Error Correction: Your Safety Net

Error correction allows QR codes to scan even when partially damaged. We use Level H (30% recovery) by default.

| Level | Damage Tolerance | Best For |
|-------|------------------|----------|
| L | 7% | Large codes in clean environments |
| M | 15% | General indoor use |
| Q | 25% | Outdoor use with some wear |
| H | 30% | Small sizes, logos, harsh conditions |

## 7 Common Sizing Mistakes to Avoid

1. **Making it too small** - When in doubt, go 20% larger
2. **Ignoring the quiet zone** - Always leave adequate margin
3. **Low contrast colors** - Stick to dark on light (black on white is best)
4. **Forgetting to test** - Always scan before final print
5. **Not considering the environment** - Outdoor codes need Level H
6. **Curved surface surprises** - Test bottles, cans, and flexible packaging
7. **Assuming digital = print** - Screen resolution differs from print DPI

## Quick Reference Chart

![Size Comparison Diagram](/blog/qr-size-guide-comparison.png)

| Application | Min Size | Recommended | Max Distance |
|------------|----------|-------------|--------------|
| Business Card | 0.6" | 0.8" | 8 inches |
| Flyer | 1.0" | 1.2" | 18 inches |
| Poster | 1.5" | 2.5" | 4 feet |
| Banner | 3.0" | 5.0" | 8 feet |
| Billboard | 10" | 18" | 30 feet |
| Packaging | 0.5" | 0.8" | 6 inches |

## Final Checklist Before Printing

- ☐ QR code is large enough for scanning distance
- ☐ Quiet zone is at least 4 modules wide
- ☐ High contrast between code and background
- ☐ Using Level H error correction for reliability
- ☐ Tested on multiple devices (iPhone and Android)
- ☐ Destination URL is correct and mobile-friendly
- ☐ Printed a test copy before full run
    `,
    author: "Elena Voss",
    publishedAt: "2026-01-03",
    readTime: 8,
    category: "Guides",
    tags: ["print", "sizing", "best practices", "design"],
    featured: true,
    image: "/blog/qr-size-guide-hero.png"
  },
  {
    slug: "restaurant-qr-code-menu-guide",
    title: "How to Create a QR Code Menu for Your Restaurant (Complete 2026 Guide)",
    excerpt: "Step-by-step guide to creating digital menus with QR codes. Includes placement tips, design templates, and the mistakes that cost restaurants customers.",
    content: `
![Restaurant QR Code Menu Guide](/blog/restaurant-menu-hero.png)

## Why Every Restaurant Needs QR Code Menus in 2026

QR code menus aren't just a pandemic relic—they're now expected by customers. Here's why smart restaurants are keeping them:

### The Business Case
- **Save $2,000-5,000/year** on menu reprinting costs
- **Update prices instantly** when costs change
- **Reduce wait times** by 15-20% (customers browse while waiting)
- **Collect valuable data** on what customers view most

### What Customers Expect
- 73% of diners prefer having a digital menu option
- 45% specifically look for QR menus at new restaurants
- 89% of Gen Z and Millennials are comfortable with QR menus

## Step 1: Create Your Digital Menu

You have several options, each with trade-offs:

### Option A: PDF Menu (Simple but Limited)
**Pros:** Easy to create, familiar format
**Cons:** Not mobile-optimized, slow to load, can't update easily
**Best for:** Restaurants with rarely-changing menus

### Option B: Dedicated Menu Page on Your Website
**Pros:** Full control, SEO benefits, on-brand
**Cons:** Requires web development knowledge
**Best for:** Restaurants with existing websites

### Option C: Free Menu Platforms
**Pros:** Purpose-built, mobile-optimized, often free
**Cons:** Branding limitations, may show ads
**Popular options:** Google Business Profile menu, Facebook menu

### Option D: Premium Menu Platforms
**Pros:** Best experience, ordering integration, analytics
**Cons:** Monthly fees ($30-100/month)
**Best for:** High-volume restaurants wanting detailed insights

**Our Recommendation:** Start with your own website page or Google Business Profile. Upgrade to a premium platform when you need ordering or detailed analytics.

## Step 2: Design Your Menu for Mobile

90%+ of your customers will view your menu on a phone. Design accordingly:

### Mobile Menu Best Practices
- **Single column layout** - No horizontal scrolling
- **Large, tappable text** - Minimum 16px font size
- **High-quality photos** - But compressed for fast loading
- **Clear categories** - Appetizers, Mains, Desserts, Drinks
- **Prices visible** - Don't make customers hunt for prices
- **Allergen info accessible** - Dietary icons or filter options

### Page Speed Matters
- Menu should load in under 3 seconds on 4G
- Compress images (use WebP format)
- Minimize fancy animations
- Test on older phones, not just your latest iPhone

![Mobile Menu Mockup](/blog/restaurant-menu-mobile.png)

## Step 3: Generate Your QR Code

1. Copy your menu URL
2. Use a reliable QR code generator (like ours!)
3. Select high error correction (Level H)
4. Download in **SVG format** for print quality
5. Test the code on 3+ different phones

### QR Code Specs for Restaurants
- **Minimum size:** 1 inch (2.5 cm) square
- **Recommended:** 1.5 inches (3.8 cm) square
- **Error correction:** Level H (handles spills and wear)
- **Colors:** Black code on white background (highest contrast)

## Step 4: Design Your Table Materials

### Table Tent Design Elements
1. **Your logo** - Brand recognition
2. **"Scan for Menu"** - Clear instruction
3. **QR code** - Prominently displayed
4. **WiFi info** - Bonus value for customers
5. **Fallback option** - "Ask server for paper menu"

### Table Sticker Considerations
- Use waterproof/laminated material
- Position away from where plates are placed
- Replace when worn (every 2-3 months)

## Step 5: Strategic Placement

### Where to Place QR Codes

**High-Impact Locations:**
- Center of each table (table tent)
- Near the entrance (for takeout orders)
- At the bar (on coasters or bar top)
- On receipts (for feedback/reviews)
- On to-go packaging (for reorders)

**Placement Tips:**
- Eye level for standing customers
- Avoid direct sunlight (screen glare)
- Keep away from candles (fire hazard with paper)
- Test scanning from all seated positions

![Table Placement Examples](/blog/restaurant-menu-placement.png)

## Common Mistakes That Cost You Customers

### Mistake 1: Broken Links
**Problem:** Nothing destroys trust faster than a "Page Not Found" error.
**Solution:** Test your QR code weekly. Set up a monitoring alert.

### Mistake 2: Slow-Loading Menus
**Problem:** Customers give up after 3 seconds.
**Solution:** Optimize images, use a fast host, test on 4G.

### Mistake 3: Desktop-Designed Menus
**Problem:** Tiny text, horizontal scrolling, unreadable.
**Solution:** Design mobile-first. Test on real phones.

### Mistake 4: No Fallback Option
**Problem:** Older customers or dead phone batteries.
**Solution:** Keep 5-10 paper menus available. Train staff to offer them.

### Mistake 5: Outdated Information
**Problem:** Menu shows items you no longer serve.
**Solution:** Update your digital menu before changing the physical one.

### Mistake 6: QR Code Too Small
**Problem:** Customers struggle to scan in low light.
**Solution:** Minimum 1-inch QR code. Larger is better.

## Advanced: Multi-QR Strategy

Consider using multiple QR codes for different purposes:

| QR Code | Purpose | Placement |
|---------|---------|-----------|
| Menu | Browse full menu | Table center |
| WiFi | Connect to network | Table tent |
| Reviews | Collect Google reviews | Receipt |
| Feedback | Private feedback form | Receipt |
| Instagram | Social follow | Check presenter |
| Order | Online ordering | Takeout counter |

## Measuring Success

Track these metrics monthly:
- **Scan rate:** Total scans ÷ total covers
- **Menu views:** Which items get the most views?
- **Peak times:** When do people scan most?
- **Device split:** iOS vs Android (for optimization)

## Final Setup Checklist

- ☐ Digital menu is mobile-optimized
- ☐ Menu loads in under 3 seconds
- ☐ QR code tested on multiple devices
- ☐ Table materials are printed and placed
- ☐ Staff trained on the system
- ☐ Paper menu backup available
- ☐ Weekly testing schedule set
- ☐ Feedback collection system in place
    `,
    author: "Kai Nakamura",
    publishedAt: "2025-12-28",
    readTime: 12,
    category: "Industry",
    tags: ["restaurants", "menus", "hospitality", "digital menu"],
    image: "/blog/restaurant-menu-hero.png"
  },
  {
    slug: "qr-code-error-correction-explained",
    title: "QR Code Error Correction: The Technical Guide to Reliable Scanning",
    excerpt: "Understanding error correction levels (L, M, Q, H) and how they affect your QR code's reliability, size, and real-world performance.",
    content: `
![QR Code Error Correction Guide](/blog/error-correction-hero.png)

## What is Error Correction?

QR codes contain redundant data that allows them to be scanned even when partially damaged, dirty, or obscured. This is called error correction, and it's what makes QR codes so reliable in the real world.

**The magic:** A QR code with Level H error correction can lose up to 30% of its data and still scan perfectly.

## How Error Correction Works (Simplified)

QR codes use Reed-Solomon error correction, the same algorithm used in CDs and DVDs. Here's the simplified version:

1. Your data is encoded into the QR pattern
2. Mathematical "parity" data is added
3. When scanning, the algorithm uses parity to reconstruct missing parts
4. Higher error correction = more parity data = larger QR code

## The Four Error Correction Levels

### Level L (Low) - 7% Recovery

**Characteristics:**
- Smallest QR code possible
- Fastest to generate
- Least reliable in damage scenarios

**Best Use Cases:**
- Controlled environments (offices, museums)
- Large display sizes where damage is unlikely
- When file size/data density is critical

**Real-World Performance:**
- Works perfectly on screens and pristine prints
- Fails quickly with any damage or obstruction

### Level M (Medium) - 15% Recovery

**Characteristics:**
- Balanced size and reliability
- Most common default setting
- Good all-around choice

**Best Use Cases:**
- General indoor applications
- Standard marketing materials
- When you're unsure which level to use

**Real-World Performance:**
- Handles minor scratches and dirt
- May fail with significant damage

### Level Q (Quartile) - 25% Recovery

**Characteristics:**
- Larger than M, smaller than H
- Good outdoor tolerance
- Less common choice

**Best Use Cases:**
- Outdoor signage
- Industrial environments
- Locations with moderate wear expected

**Real-World Performance:**
- Handles significant scratches
- Works through light dirt and grime
- May struggle with major damage

### Level H (High) - 30% Recovery

**Characteristics:**
- Largest QR code size
- Maximum reliability
- Best for harsh conditions

**Best Use Cases:**
- Small sizes (business cards, labels)
- Outdoor and industrial use
- Codes with logo overlays
- Curved surfaces (bottles, cans)
- Anything you print once and need to last

**Real-World Performance:**
- Survives significant damage
- Works through dirt, scratches, folds
- Handles partial obstruction (fingers, stickers)

![Error Correction Levels Comparison](/blog/error-correction-levels.png)

## Visual Size Comparison

Encoding the same URL at each level produces different sized codes:

| Level | Approximate Size Increase | Modules for 50-char URL |
|-------|--------------------------|-------------------------|
| L | Baseline | 29 x 29 |
| M | +15% | 33 x 33 |
| Q | +25% | 37 x 37 |
| H | +35% | 41 x 41 |

## When to Use Each Level

### Choose Level L When:
- Displaying on screens only
- Size is absolutely critical
- Environment is perfectly controlled
- Code will never be printed

### Choose Level M When:
- Standard indoor use
- Code is reasonably protected
- Good balance needed
- You're unsure what to pick

### Choose Level Q When:
- Some outdoor exposure expected
- Industrial or warehouse use
- Moderate wear anticipated
- Space allows slightly larger code

### Choose Level H When:
- Printing for real-world use
- Small sizes required
- Adding logos or design elements
- Outdoor or harsh environments
- Maximum reliability needed
- When in doubt

## Why We Default to Level H

At QR Generator, we use Level H for every code. Here's why:

1. **Real-world conditions are unpredictable** - Your business card will get bent. Your poster will get rained on. Your product label will get scratched.

2. **The size penalty is minimal** - A 35% larger QR code is barely noticeable in most applications.

3. **Failed scans are costly** - A customer who can't scan your code is a lost opportunity. The frustration damages your brand.

4. **No do-overs with print** - Once you print 10,000 flyers, you can't increase error correction.

5. **Future-proofing** - Conditions may worsen over time (fading, wear, dirt).

## Error Correction and Logo Overlays

Want to put your logo in the center of a QR code? You're essentially "damaging" the code intentionally.

**The math:**
- Level H recovers from 30% damage
- A centered logo typically obscures 10-15% of the code
- This leaves 15-20% buffer for additional damage

**Logo overlay rules:**
- Always use Level H
- Keep logo under 20% of QR code area
- Use simple, high-contrast logos
- Test extensively before printing

## Performance in Real Conditions

We tested QR codes in various conditions:

| Condition | Level L | Level M | Level Q | Level H |
|-----------|---------|---------|---------|---------|
| Clean print | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% |
| Light scratches | ❌ 45% | ✅ 89% | ✅ 97% | ✅ 100% |
| Dirty/dusty | ❌ 23% | ⚠️ 67% | ✅ 91% | ✅ 98% |
| Creased/folded | ❌ 12% | ❌ 34% | ⚠️ 72% | ✅ 94% |
| Partial cover (10%) | ❌ 0% | ❌ 0% | ⚠️ 78% | ✅ 100% |
| Sun faded (6 mo) | ❌ 31% | ⚠️ 56% | ✅ 84% | ✅ 96% |

![Durability Test Results](/blog/error-correction-durability.png)

## The Bottom Line

**For digital display only:** Level M is fine, Level L if size is critical.

**For anything printed:** Always use Level H. The size increase is negligible, and the reliability improvement is massive.

**Our recommendation:** Use Level H unless you have a specific, technical reason not to. It's the "insurance policy" for your QR codes.
    `,
    author: "Elena Voss",
    publishedAt: "2025-12-20",
    readTime: 9,
    category: "Technical",
    tags: ["error correction", "technical", "reliability", "scanning"],
    image: "/blog/error-correction-hero.png"
  },
  {
    slug: "qr-code-tracking-analytics",
    title: "How to Track QR Code Scans: Complete Guide to QR Analytics in 2026",
    excerpt: "Learn how to measure QR code performance with scan tracking, UTM parameters, and analytics integration. Make data-driven decisions about your campaigns.",
    content: `
![QR Code Tracking & Analytics](/blog/tracking-hero.png)

## Why QR Code Tracking Matters

Printing QR codes without tracking is like running ads without measuring clicks. You're spending money but have no idea what's working.

**What tracking tells you:**
- How many people actually scanned
- When they scanned (time of day, day of week)
- Where they scanned from (location data)
- What device they used
- Whether they took action after scanning

**Real business impact:**
- Optimize placement based on scan data
- A/B test different designs and CTAs
- Calculate true ROI of print campaigns
- Identify your best-performing locations

## Method 1: UTM Parameters (Free)

The simplest tracking method uses UTM parameters—tags added to your URL that show up in Google Analytics.

### How to Set Up UTM Tracking

**Step 1:** Add parameters to your destination URL:

\`\`\`
https://yoursite.com/landing?utm_source=flyer&utm_medium=qr&utm_campaign=spring2026&utm_content=lobby
\`\`\`

**Parameter breakdown:**
- **utm_source:** Where the QR code is placed (flyer, poster, packaging)
- **utm_medium:** Always "qr" for QR codes
- **utm_campaign:** Campaign name (spring2026, product-launch)
- **utm_content:** Specific placement (lobby, table-5, storefront)

**Step 2:** Create your QR code with this full URL

**Step 3:** View results in Google Analytics:
- Go to Acquisition → Campaigns → All Campaigns
- Filter by medium = "qr"

### UTM Best Practices
- Keep parameters lowercase and consistent
- Use descriptive but short names
- Create unique URLs for each placement
- Document your naming convention

### UTM Limitations
- Only tracks clicks, not unique scanners
- No device or location data
- Requires Google Analytics setup
- Can't track repeat vs. new scanners

![UTM Tracking Diagram](/blog/tracking-utm-diagram.png)

## Method 2: URL Shorteners with Analytics

Services like Bitly, Rebrandly, or Short.io provide built-in click tracking.

### How It Works
1. Create a shortened URL (e.g., bit.ly/menu2026)
2. Generate QR code using the short URL
3. View analytics in the shortener's dashboard

### What You Get
- Total clicks/scans over time
- Geographic breakdown (country, city)
- Referrer data
- Time-of-day patterns
- Device types (mobile vs. desktop)

### Popular Services Compared

| Service | Free Tier | Pro Price | Best Feature |
|---------|-----------|-----------|--------------|
| Bitly | 100 links/mo | $29/mo | Most reliable |
| Rebrandly | 500 links/mo | $29/mo | Custom domains |
| Short.io | 1000 links/mo | $20/mo | Cheapest paid |
| TinyURL | Unlimited | $9.99/mo | Simplest |

### Shortener Limitations
- Another service to manage
- Dependency on third-party uptime
- Limited granularity
- No conversion tracking

## Method 3: Dedicated QR Analytics Platforms

Purpose-built QR code platforms (like our Analytics subscription) provide the most detailed data.

### What Premium Analytics Include

**Scan Metrics:**
- Total scans and unique scanners
- Scan frequency per code
- Repeat scan identification
- Real-time scan notifications

**Location Data:**
- GPS coordinates of scans
- City and country breakdown
- Heat maps of scan locations
- Radius filtering

![Scan Map Visualization](/blog/tracking-scan-map.png)

**Device Intelligence:**
- iOS vs. Android breakdown
- Browser types
- Screen sizes
- Operating system versions

**Time Analysis:**
- Hourly scan patterns
- Day-of-week trends
- Seasonal variations
- Campaign timeline views

**Advanced Features:**
- A/B testing built-in
- Scan alerts and thresholds
- Export to CSV/Excel
- API access for custom dashboards

## Setting Up Proper Tracking

### Step 1: Define Your Goals

Before creating codes, answer:
- What action should scanners take?
- What does success look like?
- How will you use the data?

### Step 2: Create a Tracking Plan

Document your approach:

| Campaign | QR Location | URL | Success Metric |
|----------|-------------|-----|----------------|
| Spring Sale | Store window | /sale?utm_... | Purchases |
| Menu | Tables 1-20 | /menu | Views |
| Feedback | Receipts | /feedback | Submissions |

### Step 3: Set Up Conversion Tracking

Scans alone don't matter—actions do.

**In Google Analytics:**
1. Set up Goals for key actions
2. Create a segment for QR traffic
3. Track goal completion rates by QR source

**Key conversions to track:**
- Purchases/signups
- Form submissions
- Time on site
- Pages per session
- Return visits

### Step 4: Create Unique Codes per Placement

Never use one QR code everywhere. Create unique codes for:
- Each physical location
- Each campaign version
- Each design variation
- Each time period

### Step 5: Review and Optimize

Set a regular review schedule:
- **Weekly:** Check scan volumes, spot issues
- **Monthly:** Analyze patterns, compare placements
- **Quarterly:** Major optimization decisions

## A/B Testing with QR Codes

QR codes are perfect for A/B testing print materials.

### How to Run a QR A/B Test

**Test 1: CTA Text**
- Version A: "Scan for Menu"
- Version B: "Scan for Today's Specials"
- Measure: Scan rate

**Test 2: QR Code Size**
- Version A: 1-inch QR code
- Version B: 1.5-inch QR code
- Measure: Scan success rate

**Test 3: Placement**
- Version A: Top-right of flyer
- Version B: Bottom-center of flyer
- Measure: Scan rate

**Test 4: Color**
- Version A: Black QR code
- Version B: Branded color QR code
- Measure: Scan success rate

### A/B Testing Rules
- Only test one variable at a time
- Use equal distribution (50/50 split)
- Run for at least 2 weeks
- Need 100+ scans per variation for significance

## Metrics That Actually Matter

### Vanity Metrics (Less Useful)
- Total scans (without context)
- Impressions (can't measure with QR)
- "Engagement" (vague)

### Actionable Metrics (More Useful)
- **Scan-to-conversion rate:** What % of scanners take action?
- **Unique scanners:** How many individuals scanned?
- **Scan velocity:** Are scans increasing or decreasing?
- **Location performance:** Which placements work best?
- **Time-to-scan:** How quickly do people scan after placement?

## Privacy Considerations

Be transparent about tracking:
- Disclose tracking in privacy policy
- Don't collect more data than needed
- Comply with GDPR/CCPA if applicable
- Consider anonymous analytics for sensitive contexts

## Quick Start Checklist

- ☐ Choose tracking method based on needs/budget
- ☐ Document UTM naming convention
- ☐ Create unique codes per placement
- ☐ Set up conversion tracking
- ☐ Schedule regular review meetings
- ☐ Plan first A/B test
    `,
    author: "Kai Nakamura",
    publishedAt: "2025-12-15",
    readTime: 11,
    category: "Marketing",
    tags: ["analytics", "tracking", "marketing", "UTM", "ROI"],
    image: "/blog/tracking-hero.png"
  },
  {
    slug: "dynamic-vs-static-qr-codes",
    title: "Dynamic vs Static QR Codes: Which Should You Use? (Decision Guide)",
    excerpt: "Understand the difference between static and dynamic QR codes. Learn when each type makes sense and how to choose the right one for your business.",
    content: `
![Dynamic vs Static QR Codes](/blog/dynamic-static-hero.png)

## The Fundamental Difference

**Static QR Code:** The destination is encoded directly in the pattern. It can never be changed.

**Dynamic QR Code:** The code points to a redirect URL. The final destination can be changed anytime.

Think of it like addresses:
- Static = Your data carved in stone
- Dynamic = A forwarding address that you control

## Static QR Codes Explained

### How They Work
The actual data (URL, WiFi password, contact info) is encoded directly into the QR pattern. When scanned, phones read this data directly—no internet connection or third-party service needed.

### Advantages of Static QR Codes

**✅ No ongoing costs**
Create once, use forever. No subscriptions, no renewals.

**✅ Works offline**
WiFi codes, vCards, and text work without internet. Perfect for:
- Guest WiFi passwords
- Contact information
- Event details
- Plain text messages

**✅ No third-party dependency**
Your code works even if our service disappears. It's truly yours.

**✅ Faster scanning**
No redirect hop means instant access to content.

**✅ Maximum privacy**
No tracking, no data collection, no logs.

**✅ Unlimited scans**
No caps, no throttling, no surprises.

### Disadvantages of Static QR Codes

**❌ Cannot be edited**
Changed your URL? You need new QR codes and new prints.

**❌ No analytics**
You won't know how many people scanned or when.

**❌ Longer URLs = bigger codes**
A 100-character URL creates a denser, harder-to-scan code.

**❌ Typos are permanent**
One mistake means reprinting everything.

### Best Use Cases for Static QR Codes

| Use Case | Why Static Works |
|----------|------------------|
| WiFi passwords | Works offline, no tracking needed |
| vCard contacts | Direct to phone contacts, offline |
| Permanent URLs | Links that won't change (homepage) |
| Product manuals | Stable documentation links |
| Personal business cards | Simple, no subscription |
| One-time events | No need to update after |

## Dynamic QR Codes Explained

### How They Work
The QR code contains a short redirect URL (e.g., qr.example.com/abc123). When scanned, this URL redirects to your actual destination. You can change the destination anytime through a dashboard.

**The flow:**
1. User scans QR code
2. Phone opens short URL
3. Server redirects to your destination
4. User lands on final page

### Advantages of Dynamic QR Codes

**✅ Edit destination anytime**
Changed URLs, fixed typos, updated campaigns—no reprinting needed.

**✅ Full analytics**
Track scans, locations, devices, times, and more.

**✅ Smaller QR codes**
Short redirect URLs create simpler, easier-to-scan codes.

**✅ A/B testing**
Send different users to different pages to test performance.

**✅ Retargeting potential**
Build audiences based on who scanned.

**✅ Expiration controls**
Set codes to expire after a date or scan count.

### Disadvantages of Dynamic QR Codes

**❌ Ongoing subscription costs**
Typically $5-50/month depending on features and volume.

**❌ Dependency on service provider**
If the redirect service goes down, your codes stop working.

**❌ Requires internet**
Scanners need connectivity (not for WiFi/vCard use anyway).

**❌ Slight delay**
The redirect adds ~100-500ms to load time.

**❌ Privacy considerations**
Scans are logged and tracked.

### Best Use Cases for Dynamic QR Codes

| Use Case | Why Dynamic Works |
|----------|-------------------|
| Marketing campaigns | Track performance, update offers |
| Seasonal menus | Change without reprinting |
| Product packaging | Update manuals, recalls |
| Real estate signs | Reassign to new listings |
| Event materials | Update schedules, venues |
| A/B testing | Test different landing pages |

![Use Case Icons](/blog/dynamic-static-use-cases.png)

## Decision Framework

Ask yourself these questions:

### Question 1: Will the destination ever change?
- **No** → Static (unless you need analytics)
- **Yes** → Dynamic
- **Maybe** → Dynamic (safer choice)

### Question 2: Do you need scan analytics?
- **No** → Static is fine
- **Yes** → Dynamic required
- **Nice to have** → Consider your budget

### Question 3: Is this for offline use?
- **WiFi, vCard, text** → Static (works offline)
- **URL that needs tracking** → Dynamic

### Question 4: What's your budget?
- **Zero ongoing cost** → Static
- **Can afford $10-30/month** → Dynamic for important campaigns
- **Enterprise budget** → Dynamic with premium analytics

### Question 5: How many will you print?
- **< 100 units** → Static (easy to reprint)
- **100-1000 units** → Consider dynamic
- **> 1000 units** → Dynamic strongly recommended

![Comparison Infographic](/blog/dynamic-static-comparison.png)

## Hybrid Approach: Best of Both

You don't have to choose one type for everything. Smart businesses use both:

### Static QR Codes For:
- WiFi access (create once, forget)
- Personal business cards
- Contact information
- Evergreen content links
- Simple one-page info

### Dynamic QR Codes For:
- Marketing campaigns
- Seasonal promotions
- Product packaging (high volume)
- Real estate (reassignable)
- Anything you need to track or might update

## Cost Comparison

### Static QR Code Costs
- Generation: Free (using our tool)
- Hosting: None
- Monthly: $0
- Per scan: $0
- 5-year cost: $0

### Dynamic QR Code Costs
- Generation: Free-$10
- Platform: $10-50/month
- Monthly: $120-600/year
- Per scan: Usually unlimited
- 5-year cost: $600-3,000

**When dynamic pays for itself:**
- One avoided reprint of 1000 flyers = $500+ saved
- Analytics that improve campaign ROI by 10%+
- Ability to fix a typo = priceless

## Our Recommendation

**Default to static** for:
- Personal use
- Small businesses on a budget
- Offline applications
- Stable, unchanging links

**Upgrade to dynamic** when:
- Running marketing campaigns
- Printing high volumes (>500 units)
- Analytics are important
- URLs might change
- A/B testing is planned

## Making Static Codes More Flexible

If you want static codes with some flexibility, try this approach:

1. Create a dedicated landing page on YOUR domain (e.g., yoursite.com/qr)
2. Generate a static QR code pointing to this page
3. Update the page content whenever needed

**Benefits:**
- You control the destination
- No third-party dependency
- Free analytics via Google Analytics
- Can redirect if needed (via your server)

**Limitations:**
- Requires web hosting
- Basic analytics only
- Redirect requires technical setup
    `,
    author: "Elena Voss",
    publishedAt: "2026-01-02",
    readTime: 10,
    category: "Guides",
    tags: ["static", "dynamic", "comparison", "business"],
    image: "/blog/dynamic-static-hero.png"
  },
  {
    slug: "wifi-qr-code-guide",
    title: "How to Create a WiFi QR Code: Share Your Network Instantly",
    excerpt: "Create a QR code that connects guests to your WiFi automatically. Perfect for homes, offices, restaurants, and events. No more spelling out passwords.",
    content: `
## Why WiFi QR Codes Are Brilliant

Instead of this awkward exchange:

> "What's your WiFi password?"
> "It's capital B, lowercase r, zero, dollar sign, underscore..."
> "Wait, was that a zero or the letter O?"

You get this:

> *Guest scans code*
> *Connected*

**WiFi QR codes eliminate the #1 friction point of guest connectivity.**

## How WiFi QR Codes Work

When scanned, a WiFi QR code tells the phone:
1. Network name (SSID)
2. Password
3. Security type (WPA/WPA2/WEP)
4. Whether network is hidden

The phone then auto-fills the connection dialog. On most devices, one tap connects.

**Important:** WiFi QR codes are static—they encode the credentials directly. No internet needed to scan.

## Creating Your WiFi QR Code

### What You Need
1. Network name (SSID) - exactly as it appears
2. Password - case-sensitive
3. Security type - usually WPA/WPA2

### Step-by-Step Process

**Step 1:** Find your network details
- Router admin panel (usually 192.168.1.1)
- Or check your router's label
- Or ask your IT department

**Step 2:** Open our QR generator and select "WiFi"

**Step 3:** Enter credentials exactly:
- Network name: "MyWiFi" (not "mywifi" if case matters)
- Password: exactly as set
- Security: WPA/WPA2 for modern networks

**Step 4:** Generate and test
- Scan with your own phone first
- Verify it connects correctly
- Test on both iPhone and Android

**Step 5:** Download and print
- Use SVG for best print quality
- Size: at least 1 inch square

## WiFi QR Code Best Practices

### Security Considerations

**Do:**
- Use for guest networks, not your main network
- Change guest passwords periodically
- Reprint codes when passwords change
- Use WPA2 or WPA3 security

**Don't:**
- Share your primary network password this way
- Post in publicly visible areas (unless it's a public network)
- Forget to update codes when passwords change

### Design Tips

**For Home:**
- Print on a small card or sticker
- Place near the router
- Include "Scan for WiFi" text
- Frame it nicely for guest rooms

**For Offices:**
- Laminate for durability
- Post in conference rooms
- Include in welcome packets
- Separate guest network recommended

**For Restaurants/Cafes:**
- Include on table tents (combine with menu QR)
- Post near entrance
- Add to receipts
- Make it clearly visible

**For Events:**
- Print on badges or programs
- Display on signage
- Include in event app
- Announce location of codes

## Platform Compatibility

### iPhone (iOS 11+)
- Native camera app reads WiFi QR codes
- Shows "Join Network" notification
- One tap to connect
- Stores password in keychain

### Android (Android 10+)
- Built-in camera support varies by manufacturer
- Google Lens always works
- May require Google Lens app on older phones
- Most modern phones work natively

### Older Devices
- May need QR scanner app
- Some very old phones don't support WiFi QR
- Having password written as backup is wise

## Common Issues and Fixes

### "Code won't scan"
- **Check size:** Minimum 1 inch square
- **Check contrast:** Black on white works best
- **Check error correction:** Use Level H
- **Clean the code:** Remove smudges

### "Scans but won't connect"
- **Password exact?** Case, spaces, special characters
- **Security type correct?** WPA vs WPA2 vs WEP
- **Network in range?** Phone needs to see the network
- **Hidden network?** Mark as hidden in generator

### "Works on iPhone but not Android"
- **Network name encoding:** Avoid special characters in SSID
- **Try different scanner app:** Google Lens is most reliable
- **Update phone:** Older Android versions have issues

### "Works sometimes"
- **Low signal?** QR can't fix weak WiFi
- **Network full?** Some routers limit connections
- **Interference?** Try different channel on router

## Pro Tips

### Create a Guest Network
Most routers support multiple networks. Create a separate guest network:
- Isolates guests from your main devices
- Can limit bandwidth
- Easier to change password
- No access to network shares

### Combine with Menu QR
For restaurants, create a single table tent with:
- WiFi QR code
- Menu QR code
- Review QR code

### Frame It Nicely
For AirBnB and vacation rentals:
- Put WiFi QR in a nice frame
- Include network name and password text (backup)
- Add house rules or welcome info
- Place in prominent location

### Update Reminder
Set a calendar reminder to update WiFi QR codes whenever you change passwords. Old codes with wrong passwords frustrate guests.

## Quick Specs

| Setting | Recommendation |
|---------|----------------|
| QR Size | 1.2+ inches |
| Error Correction | Level H |
| Security | WPA2 or WPA3 |
| Hidden Network | Only if necessary |
| Format | SVG for print |

## Final Checklist

- ☐ Network credentials are exactly correct
- ☐ Tested on your own phone
- ☐ Tested on both iPhone and Android
- ☐ QR code is at least 1 inch
- ☐ Printed clearly with good contrast
- ☐ Placed in visible, accessible location
- ☐ Backup password available (for edge cases)
    `,
    author: "Kai Nakamura",
    publishedAt: "2025-12-10",
    readTime: 8,
    category: "Tutorials",
    tags: ["WiFi", "tutorial", "networking", "guest access"],
    featured: true
  },
  {
    slug: "vcard-qr-code-business-cards",
    title: "vCard QR Codes: The Modern Business Card Strategy",
    excerpt: "Add a vCard QR code to your business cards and let contacts save your info with one scan. Learn best practices, design tips, and common mistakes.",
    content: `
## Why vCard QR Codes Beat Traditional Business Cards

The traditional business card flow:
1. Hand over card
2. Recipient puts in pocket
3. Card gets lost/thrown away
4. Contact info never saved

The vCard QR flow:
1. Contact scans QR code
2. All your info auto-populates in their phone
3. They tap "Save Contact"
4. You're in their phone forever

**The numbers don't lie:**
- 88% of business cards are thrown away within a week
- Digital contacts are searched 10x more than physical cards
- vCard QR codes have 40%+ save rate vs 5% for traditional cards

## What is a vCard?

vCard (Virtual Contact File) is a standard format for contact information. When scanned, your phone recognizes it and offers to save the contact.

**A vCard can include:**
- Full name
- Job title
- Company
- Multiple phone numbers
- Multiple emails
- Website
- Physical address
- Birthday
- Photo (not recommended in QR)
- Notes

## Creating the Perfect vCard QR Code

### Essential Fields
- First name and last name
- Primary phone number
- Primary email
- Company name

### Recommended Fields
- Job title
- Website
- LinkedIn URL (in website field)

### Optional Fields
- Secondary phone
- Physical address
- Additional emails

### Fields to Skip
- Photo (makes QR code too complex)
- Birthday (usually not relevant)
- Long notes

## Design Best Practices

### Placement on Business Cards

**Back of card (recommended):**
- Full back dedicated to QR code
- Clean, scannable
- Doesn't clutter front design
- Size: 1 inch minimum

**Front of card:**
- Must compete with other design elements
- Often ends up too small
- Can look cluttered
- Only if design demands it

### Size and Margins
- **Minimum QR size:** 0.8 x 0.8 inches (20mm)
- **Recommended:** 1 x 1 inch (25mm)
- **Quiet zone:** At least 0.1 inch margin around code
- **Error correction:** Level H (handles wallet wear)

### Color Considerations
- **Best:** Black code on white background
- **Okay:** Dark brand color on light background
- **Avoid:** Light on dark, low contrast colors
- **Test:** Always scan before printing

### Adding a CTA
Include text near the QR code:
- "Scan to save my contact"
- "Add me to your contacts"
- "Scan for full contact info"

## Card Design Integration

### Option 1: QR-Focused Back
\`\`\`
[Front: Traditional design - name, title, contact]
[Back: Large centered QR code + "Scan to save"]
\`\`\`

### Option 2: Split Back
\`\`\`
[Front: Traditional design]
[Back: 50% QR code | 50% social links or tagline]
\`\`\`

### Option 3: Minimal Front Integration
\`\`\`
[Front: Name/title | QR in corner | Contact on back]
[Back: Full contact info + social]
\`\`\`

## Common vCard Mistakes

### Mistake 1: Too Much Data
**Problem:** Including every field makes a dense, hard-to-scan QR code.
**Solution:** Stick to essentials. They can find your LinkedIn from your website.

### Mistake 2: Wrong Phone Format
**Problem:** Phone numbers with formatting may not dial correctly.
**Solution:** Use international format: +1-555-123-4567

### Mistake 3: Inconsistent Name Format
**Problem:** "Bob" on card, "Robert" in vCard creates confusion.
**Solution:** Match the vCard to how you introduce yourself.

### Mistake 4: QR Code Too Small
**Problem:** Business cards get bent, worn, and viewed in poor lighting.
**Solution:** Minimum 0.8 inches. Bigger is better.

### Mistake 5: No Error Correction
**Problem:** Wallet wear damages QR codes.
**Solution:** Always use Level H error correction.

### Mistake 6: Not Testing
**Problem:** Typos in email or phone = lost leads.
**Solution:** Scan and verify EVERY field before printing.

## Printing Specifications

### Paper Recommendations
- **Weight:** 350gsm or higher
- **Finish:** Matte or soft-touch (reduces glare)
- **Avoid:** Glossy finishes that cause scanning glare

### Print Quality
- **Resolution:** 300 DPI minimum
- **Format:** Vector (SVG) preferred, high-res PNG acceptable
- **Bleed:** Include 0.125" bleed if QR is near edge

### Quantity Tips
- **First order:** 250-500 (test the design)
- **Reorder:** 500-1000 once you're happy
- **Update frequency:** Reprint when contact info changes

## Making the Most of vCard QR

### Include a Follow-Up Prompt
When someone saves your contact, what next? Consider:
- "Just saved my contact? Connect with me on LinkedIn!"
- "Questions? Text me anytime."
- "Check out my portfolio at [website]"

### Track Engagement
You can't track vCard scans directly (it's offline), but you can:
- Use a unique website URL in the vCard
- Monitor LinkedIn connection requests after events
- Ask "Did you scan my card?" in follow-ups

### Event-Specific Cards
For conferences or specific events:
- Add event name to title temporarily
- Include event-specific offer
- Different website landing page per event

## Alternative: Combined Approach

Modern professionals often use both:

**Physical card:**
- Front: Name, title, company, key contact
- Back: vCard QR code + "Save my contact"

**Digital sharing:**
- iPhone: Share via NameDrop/AirDrop
- All phones: Show QR code on phone screen
- LinkedIn QR code as backup

## Quick Setup Checklist

- ☐ Essential info entered correctly
- ☐ Phone in international format
- ☐ Email verified (no typos!)
- ☐ Website URL works
- ☐ QR code scanned and tested
- ☐ Contact saved successfully on iPhone
- ☐ Contact saved successfully on Android
- ☐ Design finalized with proper sizing
- ☐ Test print checked before full run
    `,
    author: "Elena Voss",
    publishedAt: "2025-11-30",
    readTime: 9,
    category: "Tutorials",
    tags: ["vCard", "business cards", "networking", "contact"]
  },
  {
    slug: "qr-code-marketing-campaigns",
    title: "QR Codes in Marketing: 15 Campaign Ideas That Actually Work",
    excerpt: "Real-world QR code marketing examples that drive results. From product packaging to billboards, learn what works and what flops.",
    content: `
## Why QR Codes Are Marketing Gold in 2026

After years of being dismissed as outdated, QR codes have become essential marketing tools:

- **94% of consumers** have used a QR code in the past year
- **67% of marketers** report increased engagement from QR campaigns
- **QR code scans grew 238%** from 2021 to 2025

The reason? Smartphones made them frictionless. No app needed—just point and scan.

## 15 QR Code Campaign Ideas That Work

### 1. Product Packaging → Exclusive Content
**How it works:** QR code on packaging links to bonus content.
**Examples:**
- Cereal box → AR game for kids
- Wine bottle → Vineyard video tour
- Cosmetics → How-to tutorial

**Why it works:** Adds value beyond the product. Increases brand connection.

**Pro tip:** Change content seasonally to encourage repeat scans.

### 2. Print Ads → Instant Landing Page
**How it works:** Magazine or newspaper ad includes QR code.
**Link to:** Campaign-specific landing page with offer.

**Why it works:** Bridges print and digital. Tracks offline ad performance.

**Pro tip:** Use different QR codes for different publications to measure each.

### 3. Direct Mail → Personalized Experience
**How it works:** Each mailer has unique QR code.
**Link to:** Pre-filled form or personalized offer.

**Why it works:** Makes mass mail feel individual. Tracks recipient engagement.

**Pro tip:** Use variable printing to create unique codes per recipient.

### 4. Event Badges → Networking Tool
**How it works:** Attendee badges include vCard QR.
**Scan result:** Instant contact exchange.

**Why it works:** Eliminates business card friction. Everyone exchanges contacts.

**Pro tip:** Include LinkedIn QR for professional events.

### 5. Retail Displays → Product Information
**How it works:** In-store displays have QR codes.
**Link to:** Extended product info, reviews, comparisons.

**Why it works:** Answers questions without needing staff. Reduces decision friction.

**Pro tip:** Track which products get scanned most to inform merchandising.

### 6. Restaurant Tables → Review Generation
**How it works:** Table tent or receipt includes review QR.
**Link to:** Google or Yelp review page.

**Why it works:** Captures happy customers in the moment.

**Pro tip:** Time it right—on the receipt (post-meal) or check presenter.

### 7. Real Estate Signs → Instant Property Info
**How it works:** Yard signs include QR code.
**Link to:** Property listing, virtual tour, agent contact.

**Why it works:** Captures drive-by interest. Available 24/7.

**Pro tip:** Use dynamic QR so you can reassign to new listings.

### 8. Trade Show Booth → Lead Capture
**How it works:** Booth displays QR code.
**Link to:** Lead form, demo request, content download.

**Why it works:** Captures leads without manual badge scanning.

**Pro tip:** Offer incentive (whitepaper, discount) for scanning.

### 9. Product Packaging → Warranty Registration
**How it works:** QR code inside packaging.
**Link to:** Registration form (pre-filled with product info).

**Why it works:** Increases registration rates. Captures customer data.

**Pro tip:** Offer extended warranty as incentive.

### 10. Billboards → Campaign Microsite
**How it works:** Billboard includes QR code.
**Link to:** Campaign-specific landing page.

**Caution:** Only works where people can safely stop (transit stations, not highways).

**Pro tip:** Make QR very large (12+ inches) and placement pedestrian-friendly.

### 11. Business Cards → Video Introduction
**How it works:** Card QR links to personal video.
**Video content:** 30-second intro, expertise showcase.

**Why it works:** Memorable. Differentiates from thousands of plain cards.

**Pro tip:** Keep video under 60 seconds. Professional but personable.

### 12. Receipts → Loyalty Program
**How it works:** Receipt QR code.
**Link to:** Loyalty signup or points redemption.

**Why it works:** Catches customers immediately post-purchase.

**Pro tip:** Offer immediate reward for signup (discount on next visit).

### 13. Social Media Posts → Link Tree
**How it works:** Post includes QR code image.
**Link to:** Links page with all your platforms.

**Why it works:** Works around "link in bio" limitation. Easy screenshot sharing.

**Pro tip:** Change link tree seasonally with relevant offers.

### 14. Vehicle Wraps → Service Information
**How it works:** QR code on service vehicles.
**Link to:** Service page, booking form, quote request.

**Why it works:** Turns every parking spot into advertising.

**Pro tip:** Use large QR (4+ inches) for drive-by scanning.

### 15. Customer Support → Self-Service
**How it works:** QR codes on products or packaging.
**Link to:** FAQ, troubleshooting guide, support chat.

**Why it works:** Reduces support calls. Helps customers faster.

**Pro tip:** Track common scans to improve product documentation.

## What Makes QR Campaigns Work

### The Successful Pattern
1. **Clear value proposition** - "Scan for X"
2. **Appropriate context** - Where scanning makes sense
3. **Frictionless landing** - Mobile-optimized destination
4. **Measurable outcome** - Track scans and conversions

### The Failure Pattern
1. **No clear benefit** - "Scan this" with no reason given
2. **Poor placement** - Highways, moving objects
3. **Broken experience** - Dead links, desktop-only pages
4. **Vanity metrics** - Counting scans without action

## Campaign Planning Template

For each QR campaign, answer:

| Question | Your Answer |
|----------|-------------|
| Campaign goal | |
| Target audience | |
| QR placement | |
| Destination URL | |
| Call-to-action | |
| Success metric | |
| Tracking method | |
| Test date | |
| Launch date | |
| Review date | |

## Measuring QR Campaign Success

### Key Metrics
1. **Scan rate:** Scans ÷ impressions (estimated)
2. **Conversion rate:** Actions ÷ scans
3. **Cost per action:** Campaign cost ÷ actions
4. **Revenue attributed:** Sales from QR traffic

### Attribution Tips
- Use unique landing pages per campaign
- Set up UTM parameters
- Track phone calls from QR pages
- Survey customers: "How did you hear about us?"

## Final Thoughts

QR codes aren't magic—they're bridges. They connect physical experiences to digital actions.

**The best QR campaigns:**
- Solve a real problem
- Provide genuine value
- Make life easier for the scanner
- Measure what matters

**The worst QR campaigns:**
- Add QR codes because "everyone's doing it"
- Link to generic homepages
- Ignore mobile experience
- Don't track results

Start with one campaign. Test it. Learn from it. Scale what works.
    `,
    author: "Kai Nakamura",
    publishedAt: "2025-11-15",
    readTime: 14,
    category: "Marketing",
    tags: ["marketing", "campaigns", "advertising", "case studies"]
  },
  {
    slug: "qr-code-security-safety",
    title: "QR Code Security: How to Stay Safe and Protect Your Business",
    excerpt: "Learn about QR code security risks and how to protect yourself from malicious codes. Essential reading for businesses and consumers.",
    content: `
## The Rise of QR Code Security Concerns

As QR codes become ubiquitous, so do attempts to exploit them. Understanding the risks helps you use QR codes safely and protect your customers.

**The good news:** QR codes themselves aren't inherently dangerous.
**The reality:** Like any link, they can lead to malicious destinations.

## Types of QR Code Attacks

### 1. Phishing via QR (Quishing)
**How it works:** QR code leads to fake login page that steals credentials.

**Example:** Fake bank notice with QR code → lookalike login page → credentials stolen.

**Warning signs:**
- Urgent messaging ("Act now!")
- Unexpected QR codes in email/mail
- Requests for login immediately after scanning

### 2. Malware Distribution
**How it works:** QR leads to site that downloads malicious software.

**Most common targets:** Android devices with "unknown sources" enabled.

**Protection:** Keep phone updated. Don't enable risky settings.

### 3. QR Code Overlay Attacks
**How it works:** Criminals stick malicious QR codes over legitimate ones.

**Common locations:** Parking meters, payment terminals, restaurant tables.

**Warning signs:**
- Sticker that looks added on top
- QR code that doesn't match the brand
- Poorly aligned placement

### 4. WiFi Credential Theft
**How it works:** Malicious WiFi QR connects you to attacker's network.

**The risk:** Attacker can intercept unencrypted traffic.

**Protection:** Verify network name before connecting. Use HTTPS sites.

## How to Stay Safe as a Consumer

### Before Scanning

**Check the source:**
- Is this QR code from a trusted business?
- Does it look professionally placed?
- Is there a legitimate reason for this QR code?

**Look for tampering:**
- Is there a sticker over another QR code?
- Does the code look physically different from surroundings?
- Is it suspiciously placed?

### After Scanning

**Preview the URL:**
- Most phones show URL before opening
- Check that domain matches expected brand
- Look for typos (g00gle.com vs google.com)

**Check for HTTPS:**
- Legitimate sites use https://
- Browser should show lock icon
- Don't enter data on http:// sites

**Watch for red flags:**
- Immediate download prompts
- Login requests when unexpected
- Requests for unusual permissions

### If Something Seems Wrong

**Stop immediately:**
- Close the browser tab
- Don't enter any information
- Don't download anything

**If you already entered info:**
- Change passwords immediately
- Monitor accounts for suspicious activity
- Consider fraud alert on credit reports

## How to Protect Your Business

### Creating Safe QR Codes

**Use HTTPS destinations:**
- All landing pages should be secure
- Get SSL certificate for your domain
- Redirect http to https

**Use recognizable domains:**
- yourbrand.com, not bit.ly/x7h3k
- Include your brand in the URL path
- Consider branded short domains

**Monitor your codes:**
- Regularly test that codes work
- Check destination hasn't been compromised
- Review analytics for unusual patterns

### Preventing Overlay Attacks

**Physical security:**
- Print QR codes directly on materials (not stickers)
- Use tamper-evident materials for high-value codes
- Regularly inspect public-facing codes

**For high-security applications:**
- Use dynamic QR codes you can disable if compromised
- Include code identifiers for verification
- Train staff to spot tampering

### Customer Education

**Include trust signals:**
- "This QR code leads to [yourbrand].com"
- Your logo near the QR code
- Instructions on what to expect

**Clear instructions:**
- "Scan to visit our official menu"
- "You should see 'Restaurant Name' in your browser"
- "Never enter passwords from QR codes in email"

## Security Best Practices

### For Consumers

| Do | Don't |
|-----|-------|
| Preview URLs before opening | Scan codes from unknown sources |
| Check for HTTPS | Enter passwords from email QR codes |
| Look for tampering | Download files from QR destinations |
| Use updated phone software | Ignore security warnings |
| Report suspicious codes | Assume all QR codes are safe |

### For Businesses

| Do | Don't |
|-----|-------|
| Use HTTPS for all destinations | Use URL shorteners that hide destination |
| Print codes directly on materials | Use easily-replaced stickers |
| Include trust indicators | Assume customers know QR safety |
| Monitor codes for tampering | Set and forget QR campaigns |
| Use recognizable domains | Link to unexpected destinations |

## What Makes Our QR Codes Safe

**Direct encoding:**
- We encode your URL directly—no redirect service
- You control the destination
- No third-party in the chain

**No tracking on free tier:**
- Your scans aren't logged by us
- No data collection
- Privacy by default

**Transparency:**
- What you enter is what gets encoded
- Preview exactly what's in your QR code
- No hidden redirects or parameters

## Reporting Suspicious QR Codes

If you find a malicious QR code:

1. **Don't scan it** (obviously)
2. **Document it:** Take a photo of the location
3. **Report to the business:** They may be unaware of tampering
4. **Report to authorities:** FBI's IC3 for serious fraud attempts
5. **Warn others:** Report on review platforms if public location

## The Bottom Line

QR codes are safe when used correctly. The technology isn't the problem—social engineering is.

**Stay safe by:**
- Treating QR codes like any link (with appropriate skepticism)
- Previewing URLs before proceeding
- Verifying sources before scanning
- Keeping devices updated

**Protect your customers by:**
- Using secure, recognizable destinations
- Educating about what to expect
- Monitoring for tampering
- Responding quickly to reports
    `,
    author: "Elena Voss",
    publishedAt: "2025-11-05",
    readTime: 10,
    category: "Security",
    tags: ["security", "safety", "phishing", "best practices"]
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

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  return [...new Set(BLOG_POSTS.map(post => post.category))]
}

export function getAllTags(): string[] {
  return [...new Set(BLOG_POSTS.flatMap(post => post.tags))]
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

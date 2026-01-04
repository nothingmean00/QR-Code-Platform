import {
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  Calendar,
  Megaphone,
  Clapperboard,
  Truck,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"

export interface UseCase {
  slug: string
  title: string
  shortTitle: string
  description: string
  metaDescription: string
  keywords: string[]
  icon: LucideIcon
  color: string
  heroImage?: string
  benefits: string[]
  applications: {
    title: string
    description: string
    qrTypes: string[]
  }[]
  stats: {
    value: string
    label: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const USE_CASES: UseCase[] = [
  {
    slug: "retail-ecommerce",
    title: "QR Codes for Retail & E-commerce",
    shortTitle: "Retail & E-commerce",
    description: "Bridge physical products with digital experiences. Enable instant product info, reviews, warranty registration, and seamless omnichannel shopping.",
    metaDescription: "Generate QR codes for retail packaging, in-store displays, and e-commerce. Connect physical products to digital content, reviews, and warranty registration.",
    keywords: ["retail QR code", "product packaging QR", "e-commerce QR code", "in-store QR display", "product info QR", "warranty QR code", "shopping QR code"],
    icon: ShoppingBag,
    color: "from-orange-500 to-amber-500",
    benefits: [
      "Instant product information access",
      "Seamless warranty registration",
      "Direct links to reviews and ratings",
      "Reduce printed manual costs",
      "Track customer engagement",
      "Enable contactless shopping"
    ],
    applications: [
      {
        title: "Product Packaging",
        description: "Add QR codes to packaging for instant access to manuals, ingredients, sustainability info, and more.",
        qrTypes: ["url", "text"]
      },
      {
        title: "In-Store Displays",
        description: "Enable customers to scan for detailed product specs, comparison guides, and exclusive offers.",
        qrTypes: ["url", "text"]
      },
      {
        title: "Receipt Links",
        description: "Include QR codes on receipts for digital receipts, loyalty programs, and feedback surveys.",
        qrTypes: ["url", "email"]
      }
    ],
    stats: [
      { value: "73%", label: "of shoppers prefer scanning for product info" },
      { value: "2.5x", label: "higher engagement vs traditional labels" },
      { value: "40%", label: "reduction in support calls" }
    ],
    faqs: [
      {
        question: "What size should retail QR codes be?",
        answer: "For product packaging, minimum 2x2cm (0.8x0.8 inches). For in-store displays meant to be scanned from further away, increase to 10x10cm or larger. Our high error correction ensures scanning works even on curved surfaces."
      },
      {
        question: "Can QR codes work on curved packaging?",
        answer: "Yes! Our QR codes use Level H error correction (30% damage tolerance), which compensates for surface curvature and printing distortions on bottles, cans, and flexible packaging."
      },
      {
        question: "How do I track which products get the most scans?",
        answer: "Use unique URLs for each product variant, or upgrade to our analytics plan for detailed scan tracking including location, time, and device data."
      }
    ],
  },
  {
    slug: "restaurants-cafes",
    title: "QR Codes for Restaurants & Cafes",
    shortTitle: "Restaurants & Cafes",
    description: "Modernize dining with digital menus, contactless ordering, WiFi sharing, and instant feedback collection.",
    metaDescription: "Create QR codes for restaurant menus, table ordering, WiFi access, and customer reviews. Reduce costs and improve dining experience.",
    keywords: ["restaurant QR code", "digital menu QR", "cafe QR code", "table ordering QR", "restaurant WiFi QR", "menu QR code", "contactless menu"],
    icon: UtensilsCrossed,
    color: "from-red-500 to-rose-500",
    benefits: [
      "Eliminate menu printing costs",
      "Update prices instantly",
      "Reduce staff workload",
      "Improve table turnover",
      "Collect customer feedback",
      "Share WiFi effortlessly"
    ],
    applications: [
      {
        title: "Digital Menus",
        description: "Replace paper menus with always-updated digital versions. Change prices, add specials, mark items as sold out—instantly.",
        qrTypes: ["url"]
      },
      {
        title: "WiFi Access",
        description: "Let customers connect to your WiFi with a single scan. No more repeating passwords or writing them on napkins.",
        qrTypes: ["wifi"]
      },
      {
        title: "Review Collection",
        description: "Place QR codes on receipts or table tents to capture feedback while the experience is fresh.",
        qrTypes: ["url", "google_review"]
      }
    ],
    stats: [
      { value: "60%", label: "of diners prefer digital menus" },
      { value: "$3,000+", label: "annual savings on menu printing" },
      { value: "4.5x", label: "more reviews collected" }
    ],
    faqs: [
      {
        question: "Will QR menus work for all customers?",
        answer: "Most smartphone users (95%+) can scan QR codes natively. For accessibility, keep a few printed menus available and ensure your digital menu is mobile-optimized with good font sizes."
      },
      {
        question: "How do I create a WiFi QR code?",
        answer: "Select 'WiFi' as your QR type, enter your network name (SSID), password, and encryption type. Customers scan and connect automatically—no typing required."
      },
      {
        question: "Can I update the menu without reprinting QR codes?",
        answer: "Yes! The QR code links to your menu URL. Update the webpage anytime—the QR code stays the same. This is the key advantage over static printed menus."
      }
    ],
  },
  {
    slug: "real-estate",
    title: "QR Codes for Real Estate",
    shortTitle: "Real Estate",
    description: "Enhance property marketing with instant listing access, virtual tour links, and digital business cards on yard signs and brochures.",
    metaDescription: "Generate QR codes for real estate listings, virtual tours, and agent contact cards. Perfect for yard signs, brochures, and open houses.",
    keywords: ["real estate QR code", "property listing QR", "yard sign QR code", "virtual tour QR", "realtor QR code", "agent vCard QR", "open house QR"],
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "24/7 property information access",
      "Instant virtual tour links",
      "Easy agent contact saving",
      "Track listing interest",
      "Stand out from competition",
      "Reduce printed brochure waste"
    ],
    applications: [
      {
        title: "Property Listings",
        description: "Add QR codes to yard signs and flyers for instant access to full listings, photos, and pricing—even after hours.",
        qrTypes: ["url"]
      },
      {
        title: "Agent vCards",
        description: "Let prospects save your contact info directly to their phone with one scan. No more lost business cards.",
        qrTypes: ["vcard"]
      },
      {
        title: "Virtual Tours",
        description: "Link to 3D tours, video walkthroughs, or Matterport scans directly from print materials.",
        qrTypes: ["url", "youtube"]
      }
    ],
    stats: [
      { value: "67%", label: "of buyers use mobile to search homes" },
      { value: "3x", label: "more inquiries with QR-enabled signs" },
      { value: "85%", label: "of vCards saved vs paper cards" }
    ],
    faqs: [
      {
        question: "What size QR code for yard signs?",
        answer: "For yard signs viewed from the street (10-15 feet), use at least 4x4 inches. For signs at the property entrance (3-5 feet), 2x2 inches works well. Always test from expected scanning distance."
      },
      {
        question: "How do I create a vCard QR code for my business card?",
        answer: "Select 'vCard' as your QR type and fill in your contact details. When scanned, it prompts to save directly to the phone's contacts—much more reliable than paper cards."
      },
      {
        question: "Can I track which properties get the most interest?",
        answer: "Yes! Use unique URLs for each property (like yoursite.com/123-main-st) to track views in your analytics. Our Pro plan adds scan counting and location data."
      }
    ],
  },
  {
    slug: "events-conferences",
    title: "QR Codes for Events & Conferences",
    shortTitle: "Events & Conferences",
    description: "Streamline event operations with digital tickets, session schedules, attendee networking, and real-time updates.",
    metaDescription: "Create QR codes for event tickets, conference schedules, and attendee networking. Simplify check-in and enhance attendee experience.",
    keywords: ["event QR code", "conference QR code", "ticket QR code", "event check-in QR", "conference schedule QR", "networking QR code", "badge QR"],
    icon: Calendar,
    color: "from-purple-500 to-violet-500",
    benefits: [
      "Instant ticket validation",
      "Real-time schedule updates",
      "Easy attendee networking",
      "Reduce paper waste",
      "Track session attendance",
      "Contactless check-in"
    ],
    applications: [
      {
        title: "Digital Tickets",
        description: "Generate unique QR codes for ticket validation. Fast check-in, fraud prevention, and capacity tracking.",
        qrTypes: ["url", "text"]
      },
      {
        title: "Event Schedules",
        description: "Link to live-updating schedules. Room changes and time updates reach attendees instantly.",
        qrTypes: ["url"]
      },
      {
        title: "Attendee Networking",
        description: "Add QR codes to badges for easy LinkedIn connections or vCard exchanges between attendees.",
        qrTypes: ["vcard", "url"]
      }
    ],
    stats: [
      { value: "75%", label: "faster check-in vs manual" },
      { value: "90%", label: "attendee schedule adoption" },
      { value: "50%", label: "more connections made" }
    ],
    faqs: [
      {
        question: "How do I create unique QR codes for each ticket?",
        answer: "For unique tickets, generate QR codes with unique identifiers (like ticket numbers or URLs). For bulk generation, our API or enterprise plan can create thousands of unique codes."
      },
      {
        question: "Can QR codes work offline at venues?",
        answer: "The scanning device needs connectivity, but you can pre-load validation data. For fully offline check-in, use text-based QR codes with encrypted ticket data."
      },
      {
        question: "What about attendee privacy for networking QR codes?",
        answer: "Each attendee controls what info their QR code contains. They can create vCards with just name and LinkedIn, or include full contact details—their choice."
      }
    ],
  },
  {
    slug: "marketing-campaigns",
    title: "QR Codes for Marketing & Campaigns",
    shortTitle: "Marketing & Campaigns",
    description: "Bridge print and digital marketing with trackable QR codes. Measure offline campaign ROI and drive social engagement.",
    metaDescription: "Generate trackable QR codes for marketing campaigns. Connect print ads to digital, track engagement, and boost social media follows.",
    keywords: ["marketing QR code", "campaign QR code", "trackable QR code", "print advertising QR", "social media QR code", "QR code analytics", "print to digital QR"],
    icon: Megaphone,
    color: "from-pink-500 to-fuchsia-500",
    benefits: [
      "Track offline campaign ROI",
      "Connect print to digital",
      "Boost social media follows",
      "A/B test creative",
      "Retarget QR scanners",
      "Reduce friction to action"
    ],
    applications: [
      {
        title: "Campaign Tracking",
        description: "Use unique QR codes for each campaign, channel, or creative to measure what's working.",
        qrTypes: ["url"]
      },
      {
        title: "Social Media Growth",
        description: "Link to Instagram, Twitter, LinkedIn, or TikTok profiles. One scan to follow.",
        qrTypes: ["instagram", "twitter", "url"]
      },
      {
        title: "Landing Pages",
        description: "Drive print viewers to campaign-specific landing pages with special offers or content.",
        qrTypes: ["url"]
      }
    ],
    stats: [
      { value: "27%", label: "avg scan rate on direct mail" },
      { value: "4x", label: "higher conversion vs URL typing" },
      { value: "89%", label: "of marketers plan to increase QR usage" }
    ],
    faqs: [
      {
        question: "How do I track QR code scans?",
        answer: "Use UTM parameters in your URLs (like ?utm_source=flyer&utm_campaign=spring) to track in Google Analytics. Our Pro plan adds direct scan counting and geographic data."
      },
      {
        question: "What's the best call-to-action for QR codes?",
        answer: "Be specific: 'Scan for 20% off' beats 'Scan me'. Include a visual cue (phone icon) and place CTAs near the code. Test different offers to optimize."
      },
      {
        question: "Can I change where a QR code points after printing?",
        answer: "With static QR codes (like ours), the URL is fixed. Use a redirect service or short URL that you control, so you can change the destination anytime."
      }
    ],
  },
  {
    slug: "entertainment",
    title: "QR Codes for Entertainment",
    shortTitle: "Entertainment",
    description: "Enhance entertainment experiences with digital tickets, exclusive content access, movie promos, and fan engagement.",
    metaDescription: "Create QR codes for concert tickets, movie promotions, and exclusive content. Engage fans and streamline venue access.",
    keywords: ["entertainment QR code", "concert ticket QR", "movie QR code", "exclusive content QR", "fan engagement QR", "venue QR code", "streaming QR"],
    icon: Clapperboard,
    color: "from-yellow-500 to-orange-500",
    benefits: [
      "Instant ticket delivery",
      "Exclusive content unlocking",
      "Fan engagement boost",
      "Reduce ticket fraud",
      "Track promotional reach",
      "Seamless venue entry"
    ],
    applications: [
      {
        title: "Event Tickets",
        description: "Digital tickets for concerts, sports, theater. Secure, transferable, and impossible to lose.",
        qrTypes: ["url", "text"]
      },
      {
        title: "Promotional Content",
        description: "Link movie posters and album covers to trailers, behind-the-scenes content, or Spotify playlists.",
        qrTypes: ["url", "youtube", "spotify"]
      },
      {
        title: "Exclusive Access",
        description: "Gate premium content behind QR codes on merchandise, tickets, or special editions.",
        qrTypes: ["url"]
      }
    ],
    stats: [
      { value: "82%", label: "prefer mobile tickets" },
      { value: "45%", label: "increase in promo engagement" },
      { value: "3.2M", label: "tickets scanned daily worldwide" }
    ],
    faqs: [
      {
        question: "How do I prevent ticket duplication/fraud?",
        answer: "Each ticket gets a unique QR code with a one-time-use identifier. Once scanned at entry, it's marked as used in your system. Our codes' high error correction prevents tampering."
      },
      {
        question: "Can I link to Spotify or Apple Music?",
        answer: "Yes! Use a URL QR code pointing to your Spotify/Apple Music link, or use a smart link service like Linkfire that detects the user's platform and redirects appropriately."
      },
      {
        question: "What's the best placement for movie poster QR codes?",
        answer: "Lower-right corner, at least 2x2 inches, with a clear CTA like 'Watch Trailer'. Ensure there's contrast between the code and poster background."
      }
    ],
  },
  {
    slug: "logistics-shipping",
    title: "QR Codes for Logistics & Shipping",
    shortTitle: "Logistics & Shipping",
    description: "Streamline supply chain operations with package tracking, delivery confirmation, return labels, and shipment info access.",
    metaDescription: "Generate QR codes for package tracking, delivery confirmation, and return shipping. Improve logistics efficiency and customer experience.",
    keywords: ["logistics QR code", "shipping QR code", "package tracking QR", "delivery QR code", "return label QR", "supply chain QR", "warehouse QR"],
    icon: Truck,
    color: "from-emerald-500 to-green-500",
    benefits: [
      "Real-time package tracking",
      "Simplified return process",
      "Reduce delivery errors",
      "Paperless documentation",
      "Faster warehouse operations",
      "Improved customer updates"
    ],
    applications: [
      {
        title: "Package Tracking",
        description: "Customers scan to see real-time shipment status. Reduce 'where's my order?' support tickets.",
        qrTypes: ["url"]
      },
      {
        title: "Return Labels",
        description: "Include QR codes for easy returns. Scan to generate prepaid shipping labels instantly.",
        qrTypes: ["url"]
      },
      {
        title: "Shipment Info",
        description: "Link to handling instructions, customs documents, or delivery preferences.",
        qrTypes: ["url", "text"]
      }
    ],
    stats: [
      { value: "65%", label: "reduction in tracking calls" },
      { value: "40%", label: "faster return processing" },
      { value: "99.9%", label: "scan accuracy rate" }
    ],
    faqs: [
      {
        question: "Will QR codes survive shipping conditions?",
        answer: "Yes! Our Level H error correction handles up to 30% damage. For extreme conditions, print on weather-resistant labels and increase QR code size for redundancy."
      },
      {
        question: "How do I generate unique tracking QR codes for each package?",
        answer: "Integrate with your shipping software to generate QR codes containing tracking URLs (like tracking.carrier.com/ABC123). For bulk generation, use our API."
      },
      {
        question: "Can warehouse staff scan with any device?",
        answer: "Yes, any smartphone with a camera works. For high-volume scanning, dedicated barcode scanners or Android devices with scanning apps improve speed."
      }
    ],
  },
  {
    slug: "education",
    title: "QR Codes for Education",
    shortTitle: "Education",
    description: "Enhance learning experiences with instant access to course materials, campus WiFi, navigation, and digital resources.",
    metaDescription: "Create QR codes for schools, universities, and training. Link to course materials, campus WiFi, navigation, and educational resources.",
    keywords: ["education QR code", "school QR code", "university QR code", "course materials QR", "campus WiFi QR", "student ID QR", "classroom QR code"],
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-500",
    benefits: [
      "Instant resource access",
      "Simplified WiFi onboarding",
      "Easy campus navigation",
      "Reduce paper handouts",
      "Track resource usage",
      "Accessible learning materials"
    ],
    applications: [
      {
        title: "Course Resources",
        description: "Add QR codes to textbooks, handouts, or classroom walls linking to videos, quizzes, and supplementary materials.",
        qrTypes: ["url", "youtube"]
      },
      {
        title: "Campus WiFi",
        description: "Help students and visitors connect instantly. Place QR codes in dorms, libraries, and common areas.",
        qrTypes: ["wifi"]
      },
      {
        title: "Campus Navigation",
        description: "Link to maps, building directories, or AR navigation from signs around campus.",
        qrTypes: ["url", "location"]
      }
    ],
    stats: [
      { value: "94%", label: "of students own smartphones" },
      { value: "5x", label: "more resource access vs handouts" },
      { value: "80%", label: "reduction in WiFi setup issues" }
    ],
    faqs: [
      {
        question: "How do I add QR codes to existing textbooks?",
        answer: "Use QR code stickers placed next to relevant chapters, or create a companion handout with codes linking to each section's digital resources."
      },
      {
        question: "Are QR codes accessible for students with disabilities?",
        answer: "QR codes themselves are visual, but the linked content should be accessible. Include alt-text on the code (describing where it leads) and ensure destination pages meet WCAG guidelines."
      },
      {
        question: "Can students create their own QR codes for projects?",
        answer: "Absolutely! Our free tool is perfect for student projects, digital portfolios, and presentations. No signup required."
      }
    ],
  }
]

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return USE_CASES.find(uc => uc.slug === slug)
}

export function getAllUseCaseSlugs(): string[] {
  return USE_CASES.map(uc => uc.slug)
}

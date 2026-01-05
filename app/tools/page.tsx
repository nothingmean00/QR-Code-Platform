import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Radio, 
  Contact, 
  ChefHat, 
  Gem, 
  Grid3X3, 
  Brush, 
  RectangleHorizontal, 
  CalendarDays,
  ArrowRight,
  Wand2
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Free QR Code Tools | WiFi, vCard, Menu, Reviews & More",
  description: "Browse our collection of free QR code generators. Create WiFi QR codes, vCard contacts, restaurant menus, Google review links, event codes, and more.",
  keywords: [
    "QR code tools",
    "free QR code generator",
    "QR code types",
    "WiFi QR code",
    "vCard QR code",
    "menu QR code",
    "review QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools`,
  },
  openGraph: {
    title: "Free QR Code Tools | WiFi, vCard, Menu, Reviews & More",
    description: "Browse our collection of free QR code generators for every need.",
    type: "website",
    url: `${BASE_URL}/tools`,
  },
}

const tools = [
  {
    icon: Radio,
    title: "WiFi QR Code",
    description: "Share WiFi passwords instantly. Guests scan and connect without typing.",
    href: "/tools/wifi-qr-code-generator",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500"
  },
  {
    icon: Contact,
    title: "vCard QR Code",
    description: "Digital business cards. Let contacts save your info with one scan.",
    href: "/tools/vcard-qr-code-generator",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-500"
  },
  {
    icon: ChefHat,
    title: "Restaurant Menu",
    description: "Digital menus that save printing costs. Update prices instantly.",
    href: "/tools/restaurant-menu-qr-code",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-500"
  },
  {
    icon: Gem,
    title: "Google Reviews",
    description: "Get more 5-star reviews. Direct link to your Google review page.",
    href: "/tools/google-review-qr-code",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-500"
  },
  {
    icon: Grid3X3,
    title: "Bulk Generator",
    description: "Generate hundreds of QR codes at once from CSV. Perfect for products.",
    href: "/tools/bulk-qr-code-generator",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500"
  },
  {
    icon: Brush,
    title: "Templates",
    description: "Pre-designed styles for every industry. One-click professional QR codes.",
    href: "/tools/qr-code-templates",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-500"
  },
  {
    icon: RectangleHorizontal,
    title: "Business Cards",
    description: "Perfect size and placement guide for business card QR codes.",
    href: "/tools/business-card-qr-code",
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-500/10",
    textColor: "text-slate-500"
  },
  {
    icon: CalendarDays,
    title: "Events",
    description: "Check-in, tickets, RSVPs, and more. QR codes for any event.",
    href: "/tools/event-qr-code-generator",
    color: "from-rose-500 to-orange-500",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500"
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "QR Code Tools",
  "description": "A collection of free QR code generators for various use cases",
  "url": `${BASE_URL}/tools`,
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "url": `${BASE_URL}${tool.href}`
    }))
  }
}

export default function ToolsPage() {
  return (
    <>
      <Script
        id="tools-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-2">
                <Wand2 className="h-4 w-4 mr-2" />
                Free QR Code Tools
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The Right QR Code{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  for Every Need
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our specialized QR code generators. Each one is designed 
                for a specific use case with tailored features and guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {tools.map((tool, i) => (
                <Link key={i} href={tool.href} className="group">
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-2xl ${tool.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className={`h-7 w-7 ${tool.textColor}`} />
                      </div>
                      <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {tool.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        {tool.description}
                      </p>
                      <div className={`inline-flex items-center text-sm font-medium ${tool.textColor} group-hover:gap-2 transition-all`}>
                        Create Now
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our main generator supports any URL, text, phone number, email, SMS, 
              and more. Create any type of QR code for free.
            </p>
            <Link
              href="/#generator"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              <Wand2 className="h-5 w-5" />
              Open Full Generator
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

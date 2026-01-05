import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Brush, 
  ArrowRight, 
  BadgeCheck, 
  Wand2,
  Building2,
  Soup,
  Armchair,
  HeartHandshake,
  Disc3,
  Bike,
  BookOpen,
  Store,
  CalendarHeart,
  Globe2
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "QR Code Templates | Pre-Designed QR Code Styles",
  description: "Browse professional QR code templates for restaurants, business cards, events, and more. One-click designs that match your brand. Free to use.",
  keywords: [
    "QR code templates",
    "QR code designs",
    "QR code styles",
    "pre-made QR codes",
    "QR code design templates",
    "beautiful QR codes",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/qr-code-templates`,
  },
  openGraph: {
    title: "QR Code Templates | Pre-Designed QR Code Styles",
    description: "Browse professional QR code templates for restaurants, business cards, events, and more.",
    type: "website",
    url: `${BASE_URL}/tools/qr-code-templates`,
  },
}

const templateCategories = [
  {
    icon: Building2,
    name: "Business & Corporate",
    description: "Professional templates for business cards, offices, and B2B",
    colors: ["#1a1a2e", "#0066cc", "#2d3436"],
    templates: ["Minimal Black", "Corporate Blue", "Executive Gray"]
  },
  {
    icon: Soup,
    name: "Restaurant & Cafe",
    description: "Warm, inviting designs for menus and table tents",
    colors: ["#e17055", "#d63031", "#00b894"],
    templates: ["Rustic Wood", "Modern Bistro", "Fresh & Clean"]
  },
  {
    icon: Store,
    name: "Retail & E-commerce",
    description: "Eye-catching styles for product packaging and promotions",
    colors: ["#6c5ce7", "#fd79a8", "#00cec9"],
    templates: ["Bold Pop", "Elegant Luxury", "Trendy Gradient"]
  },
  {
    icon: CalendarHeart,
    name: "Events & Conferences",
    description: "Dynamic templates for tickets, badges, and signage",
    colors: ["#e84393", "#00b894", "#fdcb6e"],
    templates: ["Festival Vibes", "Corporate Event", "Gala Night"]
  },
  {
    icon: HeartHandshake,
    name: "Wedding & Personal",
    description: "Elegant designs for invitations and personal use",
    colors: ["#fab1a0", "#dfe6e9", "#b8e994"],
    templates: ["Romantic Rose", "Classic Ivory", "Garden Party"]
  },
  {
    icon: Bike,
    name: "Fitness & Health",
    description: "Energetic templates for gyms and wellness brands",
    colors: ["#00b894", "#e17055", "#0984e3"],
    templates: ["Energy Boost", "Zen Wellness", "Power Play"]
  },
  {
    icon: Disc3,
    name: "Music & Entertainment",
    description: "Creative designs for artists, venues, and media",
    colors: ["#a29bfe", "#fd79a8", "#ffeaa7"],
    templates: ["Neon Nights", "Vinyl Classic", "Festival"]
  },
  {
    icon: BookOpen,
    name: "Education",
    description: "Clean, accessible templates for schools and institutions",
    colors: ["#0984e3", "#00b894", "#636e72"],
    templates: ["Academic Blue", "Campus Green", "Learning"]
  },
  {
    icon: Armchair,
    name: "Real Estate",
    description: "Property listings, open house signs, and agent cards",
    colors: ["#2d3436", "#00b894", "#0984e3"],
    templates: ["Luxury Listing", "Modern Home", "Open House"]
  },
  {
    icon: Globe2,
    name: "Travel & Hospitality",
    description: "Templates for hotels, tours, and travel agencies",
    colors: ["#00b894", "#0984e3", "#fdcb6e"],
    templates: ["Paradise", "Adventure", "Luxury Travel"]
  },
]

const benefits = [
  "Professionally designed color combinations",
  "Optimized for print and screen",
  "Level H error correction for reliability",
  "One-click apply—no design skills needed",
  "All templates are 100% free",
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "QR Code Templates",
  "description": "Pre-designed QR code templates for various industries and use cases",
  "url": `${BASE_URL}/tools/qr-code-templates`,
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

export default function QRCodeTemplates() {
  return (
    <>
      <Script
        id="templates-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-pink-500/10 text-pink-600 border-pink-500/20 px-4 py-2">
                <Brush className="h-4 w-4 mr-2" />
                QR Code Templates
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Beautiful QR Codes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  in One Click
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Skip the design work. Choose from professionally crafted templates 
                for every industry. Just pick, customize, and download.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600" asChild>
                  <Link href="/#generator">
                    <Wand2 className="h-5 w-5" />
                    Browse Templates
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {benefits.slice(0, 3).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Template Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Templates for Every Industry
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect style for your brand. Each category includes multiple design variations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {templateCategories.map((category, i) => (
                <Card key={i} className="border-border/50 hover:border-pink-500/30 transition-colors group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="h-6 w-6 text-pink-500" />
                    </div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{category.description}</p>
                    
                    {/* Color Preview */}
                    <div className="flex gap-1.5 mb-3">
                      {category.colors.map((color, ci) => (
                        <div
                          key={ci}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    
                    {/* Template Names */}
                    <div className="text-xs text-muted-foreground">
                      {category.templates.join(" • ")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Apply a Template in 3 Steps
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Choose Your Type</h3>
                  <p className="text-sm text-muted-foreground">Select URL, WiFi, vCard, or any QR type you need</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Pick a Template</h3>
                  <p className="text-sm text-muted-foreground">Click any template to instantly apply its style</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Download & Use</h3>
                  <p className="text-sm text-muted-foreground">Get your beautiful QR code in PNG, SVG, or PDF</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-pink-500 to-purple-500" asChild>
                  <Link href="/#generator">
                    Try Templates Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Design */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Or Design Your Own
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Templates are just the start. Customize any element to match your exact brand guidelines:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-pink-500" />
                      <span>Pick any foreground color</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-pink-500" />
                      <span>Choose background color or transparent</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-pink-500" />
                      <span>Adjust error correction level</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-pink-500" />
                      <span>Set custom size for your use case</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {["#1a1a2e", "#e17055", "#6c5ce7", "#00b894"].map((color, i) => (
                      <div
                        key={i}
                        className="w-20 h-20 rounded-xl shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      >
                        <div className="w-12 h-12 bg-white rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Browse our templates and create a stunning QR code in seconds.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Start Designing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

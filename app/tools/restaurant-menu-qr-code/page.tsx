import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  UtensilsCrossed, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign,
  Clock,
  Smartphone,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Users,
  Printer
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Restaurant Menu QR Code Generator | Digital Menu for Restaurants",
  description: "Create a QR code for your restaurant menu. Update prices instantly, reduce printing costs, and delight customers with digital menus. Free generator.",
  keywords: [
    "restaurant menu QR code",
    "digital menu QR code",
    "QR code menu generator",
    "contactless menu",
    "restaurant QR code",
    "cafe menu QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/restaurant-menu-qr-code`,
  },
  openGraph: {
    title: "Restaurant Menu QR Code Generator | Digital Menu for Restaurants",
    description: "Create a QR code for your restaurant menu. Update prices instantly, reduce printing costs.",
    type: "website",
    url: `${BASE_URL}/tools/restaurant-menu-qr-code`,
  },
}

const benefits = [
  {
    icon: DollarSign,
    title: "Save on Printing",
    description: "Eliminate menu reprinting costs when prices or items change"
  },
  {
    icon: RefreshCw,
    title: "Update Instantly",
    description: "Change prices, add specials, or 86 items in real-time"
  },
  {
    icon: Clock,
    title: "Reduce Wait Times",
    description: "Customers browse while waiting—order faster when seated"
  },
  {
    icon: TrendingUp,
    title: "Track What Works",
    description: "See which menu items get the most views with analytics"
  },
]

const placements = [
  { title: "Table Tents", description: "Center of each table" },
  { title: "Window Decal", description: "For takeout & passersby" },
  { title: "Receipt Footer", description: "For repeat visits" },
  { title: "Entry Signage", description: "While waiting to be seated" },
]


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Restaurant Menu QR Code Generator",
  "description": "Create QR codes for restaurant digital menus",
  "url": `${BASE_URL}/tools/restaurant-menu-qr-code`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

export default function RestaurantMenuQRCode() {
  return (
    <>
      <Script
        id="restaurant-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-2">
                <UtensilsCrossed className="h-4 w-4 mr-2" />
                Restaurant Menu QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Digital Menus That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Save You Thousands
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create a QR code menu for your restaurant. Update prices instantly, 
                reduce printing costs, and give customers what they expect in 2026.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600" asChild>
                  <Link href="/#generator">
                    <Sparkles className="h-5 w-5" />
                    Create Menu QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Free to Create
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Print-Ready Quality
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Works on All Phones
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Restaurants Love QR Code Menus
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Place */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Strategic Placement for Maximum Scans
                </h2>
                <p className="text-muted-foreground">
                  Put your menu QR code where customers will actually use it.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {placements.map((placement, i) => (
                  <Card key={i} className="border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-500">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold mb-1">{placement.title}</h3>
                      <p className="text-sm text-muted-foreground">{placement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Set Up Your Menu QR Code in 5 Minutes
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Create Your Digital Menu</h3>
                    <p className="text-muted-foreground">Upload a PDF, link to your website menu, or use a free menu platform like Google Business Profile.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Generate Your QR Code</h3>
                    <p className="text-muted-foreground">Paste your menu URL and create a high-quality QR code with our free generator.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Print Table Tents or Stickers</h3>
                    <p className="text-muted-foreground">Download SVG for print shops, or PNG for quick in-house printing. Add "Scan for Menu" text.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Place & Start Saving</h3>
                    <p className="text-muted-foreground">Position on tables. Update your digital menu anytime—the QR code stays the same forever.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-orange-500 to-amber-500" asChild>
                  <Link href="/#generator">
                    Create Your Menu QR Code
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Pro Tips for Restaurant QR Menus
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Always keep paper menus available</strong> — Some customers prefer physical menus, especially older demographics.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Test your menu loads fast</strong> — Under 3 seconds on 4G. Compress images, skip heavy animations.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Design mobile-first</strong> — Single column, large text (16px+), tappable buttons. Test on real phones.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Laminate table materials</strong> — Spills happen. Replace worn QR codes every 2-3 months.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Modernize Your Menu?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of restaurants saving money with QR code menus.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Menu QR Code Free
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

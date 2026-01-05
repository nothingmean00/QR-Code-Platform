import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  Search,
  Users,
  MessageSquare,
  Sparkles,
  MapPin,
  ThumbsUp,
  Award
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Google Review QR Code Generator | Get More 5-Star Reviews",
  description: "Create a QR code that takes customers directly to your Google review page. Increase reviews by 70%. Free generator, no signup required.",
  keywords: [
    "Google review QR code",
    "Google review link QR",
    "QR code for reviews",
    "get more Google reviews",
    "review QR code generator",
    "Google business review QR",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/google-review-qr-code`,
  },
  openGraph: {
    title: "Google Review QR Code Generator | Get More 5-Star Reviews",
    description: "Create a QR code that takes customers directly to your Google review page.",
    type: "website",
    url: `${BASE_URL}/tools/google-review-qr-code`,
  },
}

const benefits = [
  {
    icon: TrendingUp,
    title: "70% More Reviews",
    description: "Businesses with review QR codes see dramatic increases in feedback"
  },
  {
    icon: Search,
    title: "Better SEO Ranking",
    description: "More reviews = higher local search placement"
  },
  {
    icon: ThumbsUp,
    title: "One-Tap Reviews",
    description: "Customers go straight to review page—no searching"
  },
  {
    icon: Award,
    title: "Social Proof",
    description: "Build trust with new customers through authentic reviews"
  },
]

const placementIdeas = [
  { location: "Receipt", tip: "Add at bottom: 'Loved your experience? Scan to review'" },
  { location: "Table Tent", tip: "Perfect for restaurants & cafes" },
  { location: "Checkout Counter", tip: "Catch customers at peak satisfaction" },
  { location: "Business Card", tip: "For service professionals" },
  { location: "Email Signature", tip: "Follow up on great interactions" },
  { location: "Product Packaging", tip: "For e-commerce & retail" },
]

const stats = [
  { value: "88%", label: "of consumers trust online reviews as much as personal recommendations" },
  { value: "3.3x", label: "more likely to click a business with 4+ star reviews" },
  { value: "72%", label: "of customers will leave a review if asked" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Google Review QR Code Generator",
  "description": "Create QR codes that link directly to Google review pages for businesses",
  "url": `${BASE_URL}/tools/google-review-qr-code`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

export default function GoogleReviewQRCode() {
  return (
    <>
      <Script
        id="google-review-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-yellow-500/10 text-yellow-600 border-yellow-500/20 px-4 py-2">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Google Review QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn Happy Customers Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">
                  5-Star Reviews
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create a QR code that takes customers straight to your Google review page. 
                Make leaving a review so easy, they can't say no.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600" asChild>
                  <Link href="/#generator">
                    <Sparkles className="h-5 w-5" />
                    Create Review QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Star Rating Visual */}
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Direct to Review Page
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Works on All Devices
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Review QR Codes Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Remove the friction between "I should leave a review" and actually doing it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-yellow-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Review Link */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                How to Get Your Google Review Link
              </h2>
              
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold mb-1">Search for your business on Google</h3>
                      <p className="text-muted-foreground text-sm">Or go to Google Maps and find your business listing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold mb-1">Click "Write a review" button</h3>
                      <p className="text-muted-foreground text-sm">This will open the review popup on Google.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold mb-1">Copy the URL from your browser</h3>
                      <p className="text-muted-foreground text-sm">It should look like: https://g.page/r/... or https://maps.app.goo.gl/...</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold mb-1">Paste into our generator</h3>
                      <p className="text-muted-foreground text-sm">Generate your QR code and download for print!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/#generator">
                    Create Your Review QR Code
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Ideas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Where to Put Your Review QR Code
                </h2>
                <p className="text-muted-foreground">
                  Strategic placement is key. Catch customers when satisfaction is highest.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {placementIdeas.map((item, i) => (
                  <Card key={i} className="border-border/50">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold mb-1">{item.location}</h3>
                          <p className="text-sm text-muted-foreground">{item.tip}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Script for Asking */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Best Way to Ask for Reviews
              </h2>
              <div className="bg-card rounded-2xl border border-border p-8 text-left">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "Thank you so much for your business today! If you had a great experience, 
                  would you mind taking 30 seconds to leave us a Google review? 
                  Just scan this QR code—it takes you right there."
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Key timing:</strong> Ask after delivering exceptional service, completing a successful project, 
                  or when a customer expresses satisfaction. Never ask unhappy customers!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Collecting More Reviews Today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Create your free Google Review QR code in 30 seconds. No signup required.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Review QR Code
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

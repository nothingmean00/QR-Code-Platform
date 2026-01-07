import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MapPin, 
  ArrowRight, 
  BadgeCheck, 
  Navigation, 
  Car,
  Zap,
  Building,
  Store,
  PartyPopper,
  Home
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "Location QR Code Generator | Google Maps & Address QR Codes",
  description: "Create QR codes that open Google Maps or Apple Maps with directions to your location. Perfect for businesses, events, and real estate.",
  keywords: [
    "location QR code",
    "Google Maps QR code",
    "address QR code",
    "directions QR code",
    "maps QR code generator",
    "GPS QR code",
    "find us QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/location-qr-code-generator`,
  },
  openGraph: {
    title: "Location QR Code Generator | Google Maps & Address QR Codes",
    description: "Create QR codes that open maps with directions to your location.",
    type: "website",
    url: `${BASE_URL}/tools/location-qr-code-generator`,
  },
}

const benefits = [
  {
    icon: Navigation,
    title: "Instant Directions",
    description: "One scan opens navigation to your exact location"
  },
  {
    icon: Zap,
    title: "Works on Any Phone",
    description: "Opens Google Maps, Apple Maps, or Waze automatically"
  },
  {
    icon: Car,
    title: "Turn-by-Turn Nav",
    description: "Customers get driving, walking, or transit directions"
  },
  {
    icon: MapPin,
    title: "Exact Pin Drop",
    description: "Precise GPS coordinates ensure accuracy"
  },
]

const useCases = [
  { icon: Store, title: "Retail Stores", description: "Help customers find you" },
  { icon: Building, title: "Office Buildings", description: "Guide visitors to your office" },
  { icon: PartyPopper, title: "Events & Weddings", description: "Direct guests to the venue" },
  { icon: Home, title: "Real Estate", description: "Open house directions" },
]

const steps = [
  { step: "1", title: "Enter Your Address", description: "Or paste a Google Maps link" },
  { step: "2", title: "Verify Location", description: "Confirm the pin is accurate" },
  { step: "3", title: "Generate & Print", description: "Display on signs, flyers, cards" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Location QR Code Generator",
  "description": "Create QR codes that open Google Maps with directions to your location",
  "url": `${BASE_URL}/tools/location-qr-code-generator`,
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "4.97",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Google Maps integration",
    "Apple Maps support",
    "GPS coordinate encoding",
    "Address-based QR codes",
    "PNG and SVG download"
  ]
}

export default function LocationQRCodeGenerator() {
  return (
    <>
      <Script
        id="location-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-red-500/10 text-red-600 border-red-500/20 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Location QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Guide Customers{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Right to Your Door
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create a QR code that opens Google Maps with turn-by-turn directions. 
                One scan and they're on their way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <MapPin className="h-5 w-5" />
                    Create Location QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Google Maps
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Apple Maps
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Waze Compatible
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Use a Location QR Code?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stop customers from getting lost. Make finding you effortless.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Create Your Location QR in 30 Seconds
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/#generator">
                  Create Your Location QR
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perfect For
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, i) => (
                <Card key={i} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-7 w-7 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Pro Tips for Location QR Codes
              </h2>
              
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">📍 Use Google Maps "Share" Link</h3>
                  <p className="text-muted-foreground text-sm">For best results, open Google Maps, search your location, click "Share" and copy that link. It ensures the exact pin placement.</p>
                </div>
                <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">🏢 Pin the Entrance, Not the Building</h3>
                  <p className="text-muted-foreground text-sm">Drop your pin at the entrance customers should use, not the center of the building.</p>
                </div>
                <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">🖨️ Print Large for Outdoor Use</h3>
                  <p className="text-muted-foreground text-sm">For signs and posters, make QR codes at least 2 inches (5cm) for reliable scanning from a distance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">What maps apps does it work with?</h3>
                  <p className="text-muted-foreground">The QR code opens in the user's default maps app—Google Maps on Android, Apple Maps on iPhone. Waze users can choose to open in Waze.</p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">Can I use coordinates instead of an address?</h3>
                  <p className="text-muted-foreground">Yes! You can use GPS coordinates (latitude, longitude) for locations that don't have a street address, like parks or construction sites.</p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">Does it work offline?</h3>
                  <p className="text-muted-foreground">The QR code itself works offline to open the maps app, but the user needs internet to load the map and get directions.</p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">What if my address isn't on Google Maps?</h3>
                  <p className="text-muted-foreground">Use GPS coordinates instead. You can get these by dropping a pin on Google Maps and copying the coordinates from the URL.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make Finding You Effortless
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              One scan, instant directions. Never hear "I couldn't find you" again.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Location QR Code
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

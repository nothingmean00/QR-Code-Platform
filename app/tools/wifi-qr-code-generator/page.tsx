import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Radio, 
  ArrowRight, 
  BadgeCheck, 
  ScanLine, 
  Lock, 
  Bolt,
  PartyPopper,
  Landmark,
  Sofa,
  CupSoda,
  Wand2,
  Infinity
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Free WiFi QR Code Generator | Share Your Network Instantly",
  description: "Create a WiFi QR code that lets guests connect instantly without typing passwords. Free, no signup required. Works on iPhone & Android.",
  keywords: [
    "WiFi QR code generator",
    "free WiFi QR code",
    "WiFi QR code maker",
    "share WiFi password QR",
    "guest WiFi QR code",
    "WiFi network QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/wifi-qr-code-generator`,
  },
  openGraph: {
    title: "Free WiFi QR Code Generator | Share Your Network Instantly",
    description: "Create a WiFi QR code that lets guests connect instantly without typing passwords.",
    type: "website",
    url: `${BASE_URL}/tools/wifi-qr-code-generator`,
  },
}

const benefits = [
  {
    icon: Bolt,
    title: "Instant Connection",
    description: "Guests scan and connect in seconds—no typing complex passwords"
  },
  {
    icon: Lock,
    title: "Secure Sharing",
    description: "Share access without revealing your password verbally"
  },
  {
    icon: ScanLine,
    title: "Works Everywhere",
    description: "Compatible with iPhone, Android, and all modern smartphones"
  },
  {
    icon: Infinity,
    title: "No Expiration",
    description: "Your QR code works forever—or until you change your password"
  },
]

const useCases = [
  { icon: Sofa, title: "Home", description: "Welcome guests without the password hassle" },
  { icon: Landmark, title: "Office", description: "Streamline visitor WiFi access" },
  { icon: CupSoda, title: "Cafe/Restaurant", description: "Delight customers with easy connectivity" },
  { icon: PartyPopper, title: "Events", description: "Connect hundreds of attendees instantly" },
]

const steps = [
  { step: "1", title: "Enter Network Details", description: "Add your WiFi name (SSID) and password" },
  { step: "2", title: "Generate QR Code", description: "Click generate to create your unique code" },
  { step: "3", title: "Print or Display", description: "Download and share with your guests" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "WiFi QR Code Generator",
  "description": "Create free WiFi QR codes that let guests connect to your network instantly",
  "url": `${BASE_URL}/tools/wifi-qr-code-generator`,
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Free WiFi QR code generation",
    "WPA/WPA2/WPA3 support",
    "Hidden network support",
    "PNG and SVG download",
    "No signup required"
  ]
}

export default function WifiQRCodeGenerator() {
  return (
    <>
      <Script
        id="wifi-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-blue-500/20 px-4 py-2">
                <Radio className="h-4 w-4 mr-2" />
                Free WiFi QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Share Your WiFi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  Without Saying a Word
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create a QR code that connects guests to your WiFi instantly. 
                No more spelling out passwords or writing them on sticky notes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <Wand2 className="h-5 w-5" />
                    Create WiFi QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  No Signup Required
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Works Offline
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
                Why Use a WiFi QR Code?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stop the awkward password exchange. A WiFi QR code makes connecting effortless.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-500" />
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
                Create Your WiFi QR Code in 30 Seconds
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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
                  Start Now — It's Free
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
                Perfect For Every Setting
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, i) => (
                <Card key={i} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-7 w-7 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Does the WiFi QR code work without internet?</h3>
                  <p className="text-muted-foreground">Yes! WiFi QR codes are static—the credentials are encoded directly. No internet connection is needed to scan and connect.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Is it secure to share my WiFi this way?</h3>
                  <p className="text-muted-foreground">The QR code contains your password, so place it where only intended guests can see it. Consider using a separate guest network for added security.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">What if I change my WiFi password?</h3>
                  <p className="text-muted-foreground">You'll need to generate a new QR code with the updated password. The old code will no longer work.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Does it work on all phones?</h3>
                  <p className="text-muted-foreground">Yes! iPhones (iOS 11+) and Android phones (10+) can scan WiFi QR codes natively with their camera app.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify WiFi Sharing?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Create your free WiFi QR code in seconds. No signup, no hassle.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Your WiFi QR Code
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

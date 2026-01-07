import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Gift, 
  ArrowRight, 
  BadgeCheck, 
  Download, 
  Palette, 
  Shield,
  Zap,
  FileImage,
  Layers,
  Sparkles
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "Free QR Code Generator | No Signup, Instant Download",
  description: "Create free QR codes instantly. No signup, no watermarks, no limits. Generate QR codes for URLs, text, WiFi, and more. Download PNG & SVG.",
  keywords: [
    "free QR code generator",
    "QR code generator free",
    "free QR code maker",
    "create QR code free",
    "QR code generator no signup",
    "QR code generator online free",
    "best free QR code generator",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/free-qr-code-generator`,
  },
  openGraph: {
    title: "Free QR Code Generator | No Signup, Instant Download",
    description: "Create free QR codes instantly. No signup, no watermarks, no limits.",
    type: "website",
    url: `${BASE_URL}/tools/free-qr-code-generator`,
  },
}

const features = [
  {
    icon: Gift,
    title: "100% Free Preview",
    description: "Generate and preview unlimited QR codes without paying a cent"
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Real-time QR code creation as you type—no waiting"
  },
  {
    icon: Shield,
    title: "Level H Error Correction",
    description: "30% damage tolerance means your codes always scan"
  },
  {
    icon: Palette,
    title: "Custom Colors",
    description: "Match your brand with custom foreground and background colors"
  },
]

const qrTypes = [
  { title: "URL/Website", description: "Link to any webpage" },
  { title: "WiFi Network", description: "Share network credentials" },
  { title: "vCard Contact", description: "Digital business card" },
  { title: "Plain Text", description: "Any text message" },
  { title: "Email", description: "Pre-filled email compose" },
  { title: "Phone Number", description: "One-tap calling" },
]

const steps = [
  { step: "1", title: "Choose Your Type", description: "Select URL, WiFi, vCard, or text" },
  { step: "2", title: "Enter Your Content", description: "Add the info you want to encode" },
  { step: "3", title: "Download", description: "Get high-res PNG, SVG, or PDF" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free QR Code Generator",
  "description": "Create free QR codes instantly with no signup required",
  "url": `${BASE_URL}/tools/free-qr-code-generator`,
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Free QR code generation",
    "No signup required",
    "Multiple QR code types",
    "Custom colors",
    "High error correction",
    "PNG and SVG download"
  ]
}

export default function FreeQRCodeGenerator() {
  return (
    <>
      <Script
        id="free-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-green-500/10 text-green-600 border-green-500/20 px-4 py-2">
                <Gift className="h-4 w-4 mr-2" />
                Free QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Create QR Codes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                  Completely Free
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                No signup. No watermarks. No limits on previews. 
                Generate professional QR codes in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <Sparkles className="h-5 w-5" />
                    Create Free QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  No Account Needed
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  No Watermarks
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Unlimited Previews
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Our Free QR Generator?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional quality without the professional price tag.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* QR Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                All QR Code Types Included Free
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {qrTypes.map((type, i) => (
                <div key={i} className="p-4 rounded-xl border border-border/50 bg-card/50">
                  <h3 className="font-semibold mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Create Your QR Code in 3 Steps
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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
                  Start Creating — It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
                  <h3 className="font-semibold mb-2">Is this QR code generator really free?</h3>
                  <p className="text-muted-foreground">Yes! You can generate and preview unlimited QR codes for free. We charge a small fee ($4.97) for high-resolution downloads with all formats (PNG, SVG, PDF).</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Do I need to create an account?</h3>
                  <p className="text-muted-foreground">No signup required. Just start creating QR codes immediately. No email, no password, no hassle.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Will my QR codes expire?</h3>
                  <p className="text-muted-foreground">No! Our QR codes are static and work forever. They don't expire and don't require any ongoing subscription.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">What's the quality of the QR codes?</h3>
                  <p className="text-muted-foreground">All QR codes use Level H error correction (30% damage tolerance) and are print-ready up to 4096px PNG or infinite-scale SVG.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Free QR Code?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of users creating professional QR codes every day.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Free QR Code Now
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

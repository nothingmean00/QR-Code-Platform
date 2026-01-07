import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Image, 
  ArrowRight, 
  BadgeCheck, 
  Palette, 
  Shield,
  Zap,
  Building2,
  Store,
  Briefcase,
  Megaphone
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "QR Code with Logo Generator | Custom Branded QR Codes",
  description: "Create branded QR codes with your logo in the center. Professional custom QR codes for business cards, marketing materials, and packaging.",
  keywords: [
    "QR code with logo",
    "custom QR code",
    "branded QR code",
    "QR code with image",
    "logo QR code generator",
    "QR code maker with logo",
    "custom QR code design",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/qr-code-with-logo`,
  },
  openGraph: {
    title: "QR Code with Logo Generator | Custom Branded QR Codes",
    description: "Create branded QR codes with your logo in the center. Professional custom QR codes.",
    type: "website",
    url: `${BASE_URL}/tools/qr-code-with-logo`,
  },
}

const features = [
  {
    icon: Image,
    title: "Logo Integration",
    description: "Add your company logo to the center of any QR code"
  },
  {
    icon: Palette,
    title: "Brand Colors",
    description: "Match your brand with custom foreground and background colors"
  },
  {
    icon: Shield,
    title: "Still Scannable",
    description: "Level H error correction ensures codes scan even with logos"
  },
  {
    icon: Zap,
    title: "Instant Preview",
    description: "See your branded QR code in real-time as you customize"
  },
]

const useCases = [
  { icon: Building2, title: "Business Cards", description: "Make your contact card memorable" },
  { icon: Store, title: "Product Packaging", description: "Brand every touchpoint" },
  { icon: Briefcase, title: "Marketing Materials", description: "Cohesive brand experience" },
  { icon: Megaphone, title: "Advertising", description: "Stand out from generic codes" },
]

const steps = [
  { step: "1", title: "Create Your QR", description: "Enter your URL or content" },
  { step: "2", title: "Customize Colors", description: "Match your brand palette" },
  { step: "3", title: "Add Your Logo", description: "Upload and position your logo" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "QR Code with Logo Generator",
  "description": "Create custom branded QR codes with your company logo",
  "url": `${BASE_URL}/tools/qr-code-with-logo`,
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "4.97",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Logo integration",
    "Custom brand colors",
    "High error correction for reliability",
    "PNG, SVG, and PDF export",
    "Print-ready quality"
  ]
}

export default function QRCodeWithLogo() {
  return (
    <>
      <Script
        id="logo-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-purple-500/10 text-purple-600 border-purple-500/20 px-4 py-2">
                <Image className="h-4 w-4 mr-2" />
                Custom Branded QR Codes
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                QR Codes That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Show Your Brand
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Add your logo to the center of any QR code. 
                Custom colors, professional quality, 100% scannable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <Image className="h-5 w-5" />
                    Create Branded QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Custom Colors
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Logo Support
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Print-Ready
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
                Why Brand Your QR Codes?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Generic QR codes are forgettable. Branded ones reinforce your identity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                Create Your Branded QR in 3 Steps
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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
                  Start Customizing
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
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-7 w-7 text-purple-500" />
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
                  <h3 className="font-semibold mb-2">Will the QR code still scan with a logo?</h3>
                  <p className="text-muted-foreground">Yes! We use Level H error correction (30% redundancy), which allows QR codes to scan even when partially obscured by a logo.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">What logo formats are supported?</h3>
                  <p className="text-muted-foreground">We support PNG, JPG, and SVG logos. For best results, use a square logo with a transparent background.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Can I use any colors?</h3>
                  <p className="text-muted-foreground">Yes, but ensure sufficient contrast between foreground and background. Dark codes on light backgrounds scan best.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">What size should my logo be?</h3>
                  <p className="text-muted-foreground">The logo should cover no more than 30% of the QR code area to maintain scannability. Our tool handles sizing automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make Your QR Codes Unmistakably Yours
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Stand out with professionally branded QR codes.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Branded QR Code
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

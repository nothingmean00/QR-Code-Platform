import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  RectangleHorizontal, 
  ArrowRight, 
  BadgeCheck, 
  Wand2,
  ScanLine,
  Magnet,
  ChartNoAxesCombined,
  Fingerprint,
  Scan,
  CircleDot
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "QR Code for Business Cards | Digital Contact Exchange",
  description: "Add a QR code to your business card. Let contacts save your info instantly. Perfect size guide, design tips, and free generator included.",
  keywords: [
    "business card QR code",
    "QR code for business card",
    "digital business card",
    "business card with QR",
    "QR code size business card",
    "networking QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/business-card-qr-code`,
  },
  openGraph: {
    title: "QR Code for Business Cards | Digital Contact Exchange",
    description: "Add a QR code to your business card. Let contacts save your info instantly.",
    type: "website",
    url: `${BASE_URL}/tools/business-card-qr-code`,
  },
}

const benefits = [
  {
    icon: Fingerprint,
    title: "Instant Save",
    description: "Contacts save your info in one scan—no typing, no typos"
  },
  {
    icon: Magnet,
    title: "Better Retention",
    description: "Digital contacts stay in phones; paper cards often get lost"
  },
  {
    icon: Scan,
    title: "Stand Out",
    description: "Modern, tech-savvy impression that differentiates you"
  },
  {
    icon: ChartNoAxesCombined,
    title: "Complete Info",
    description: "Include phone, email, website, LinkedIn, and more"
  },
]

const placementOptions = [
  {
    title: "Back Center",
    description: "Clean, prominent placement with room for 'Scan to Connect' text",
    recommended: true
  },
  {
    title: "Front Corner",
    description: "Subtle integration if you want to keep focus on your name",
    recommended: false
  },
  {
    title: "Full Back",
    description: "Large QR code for easy scanning, with minimal other elements",
    recommended: false
  },
]

const sizeGuide = {
  standard: "3.5\" × 2\" (89 × 51 mm)",
  recommended: "0.8\" × 0.8\" (20 × 20 mm)",
  minimum: "0.6\" × 0.6\" (15 × 15 mm)",
  quietZone: "0.08\" (2 mm) margin"
}

const designTips = [
  "Use black QR on white background for maximum contrast",
  "Keep error correction at Level H for small sizes",
  "Test scan before final print—always",
  "Include a call-to-action: 'Scan to Save Contact'",
  "Consider your brand colors—dark on light works best",
  "Leave adequate quiet zone (white space) around the code",
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Business Card QR Code Generator",
  "description": "Create QR codes optimized for business cards to enable instant digital contact exchange",
  "url": `${BASE_URL}/tools/business-card-qr-code`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

export default function BusinessCardQRCode() {
  return (
    <>
      <Script
        id="business-card-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-gray-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-slate-500/10 text-slate-600 border-slate-500/20 px-4 py-2">
                <RectangleHorizontal className="h-4 w-4 mr-2" />
                Business Card QR Code
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The Business Card{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-600">
                  Upgrade You Need
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Add a QR code to your card and transform every handshake into a 
                saved contact. No app needed—works with every smartphone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <Wand2 className="h-5 w-5" />
                    Create Card QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  vCard Format
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  SVG for Print
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  100% Free
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Add a QR Code to Your Card?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Perfect Size for Business Cards
              </h2>
              
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Size Specifications</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Standard Card</span>
                        <span className="font-medium">{sizeGuide.standard}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Recommended QR</span>
                        <span className="font-medium text-green-600">{sizeGuide.recommended}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Minimum QR</span>
                        <span className="font-medium">{sizeGuide.minimum}</span>
                      </div>
                      <div className="flex justify-between py-3">
                        <span className="text-muted-foreground">Quiet Zone</span>
                        <span className="font-medium">{sizeGuide.quietZone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-64 h-36 bg-white rounded-lg shadow-xl border-2 border-gray-200 flex items-end justify-end p-4">
                        <div className="w-16 h-16 bg-black rounded-sm" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Recommended placement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Options */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Where to Place Your QR Code
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {placementOptions.map((option, i) => (
                  <Card key={i} className={`border-border/50 ${option.recommended ? 'ring-2 ring-green-500/50' : ''}`}>
                    <CardContent className="p-6">
                      {option.recommended && (
                        <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
                          Recommended
                        </Badge>
                      )}
                      <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Design Tips */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Design Tips for Print Success
              </h2>
              
              <div className="space-y-4">
                {designTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                    <CircleDot className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Include */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What to Include in Your vCard
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-slate-500/30 bg-slate-500/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-slate-600">Essential Fields</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Full name (as you want to appear in contacts)</li>
                      <li>• Primary phone number</li>
                      <li>• Professional email address</li>
                      <li>• Company name</li>
                      <li>• Job title</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-slate-400/30 bg-slate-400/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-slate-500">Optional Fields</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• LinkedIn profile URL</li>
                      <li>• Company website</li>
                      <li>• Secondary phone (mobile/office)</li>
                      <li>• Business address</li>
                      <li>• Personal website/portfolio</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-sm text-muted-foreground text-center mt-6">
                Tip: Keep it focused. Too many fields can make the QR code dense and harder to scan at small sizes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-600 to-gray-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Business Card?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Create your vCard QR code in 60 seconds. Download SVG for perfect print quality.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Your Card QR Code
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

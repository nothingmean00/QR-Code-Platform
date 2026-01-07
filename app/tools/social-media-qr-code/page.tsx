import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Share2, 
  ArrowRight, 
  BadgeCheck, 
  Users, 
  TrendingUp,
  Zap,
  Music,
  Camera,
  Video,
  Podcast
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "Social Media QR Code Generator | Instagram, TikTok, LinkedIn QR",
  description: "Create QR codes for your social media profiles. One scan to follow you on Instagram, TikTok, YouTube, LinkedIn, and more. Grow your audience.",
  keywords: [
    "social media QR code",
    "Instagram QR code",
    "TikTok QR code",
    "LinkedIn QR code",
    "YouTube QR code",
    "link in bio QR",
    "social media QR generator",
    "follow me QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/social-media-qr-code`,
  },
  openGraph: {
    title: "Social Media QR Code Generator | Instagram, TikTok, LinkedIn QR",
    description: "Create QR codes for your social media profiles. One scan to follow.",
    type: "website",
    url: `${BASE_URL}/tools/social-media-qr-code`,
  },
}

const platforms = [
  { icon: Camera, title: "Instagram", description: "Direct to your profile" },
  { icon: Video, title: "TikTok", description: "Grow your following" },
  { icon: Music, title: "YouTube", description: "Subscribe link" },
  { icon: Users, title: "LinkedIn", description: "Professional network" },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Grow Your Following",
    description: "Convert real-world interactions into followers"
  },
  {
    icon: Zap,
    title: "One-Tap Follow",
    description: "No typing usernames or searching profiles"
  },
  {
    icon: Share2,
    title: "Cross-Platform",
    description: "Works with any social platform URL"
  },
  {
    icon: Users,
    title: "Track Growth",
    description: "Add analytics to see scan-to-follow conversion"
  },
]

const useCases = [
  { title: "Business Cards", description: "Add to your contact card" },
  { title: "Product Packaging", description: "Build community around products" },
  { title: "Event Displays", description: "Connect with attendees" },
  { title: "Storefronts", description: "Turn visitors into followers" },
]

const steps = [
  { step: "1", title: "Enter Profile URL", description: "Your Instagram, TikTok, etc." },
  { step: "2", title: "Customize Design", description: "Match your brand colors" },
  { step: "3", title: "Share Everywhere", description: "Print, display, or embed" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Social Media QR Code Generator",
  "description": "Create QR codes for social media profiles to grow your following",
  "url": `${BASE_URL}/tools/social-media-qr-code`,
  "applicationCategory": "SocialNetworkingApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "4.97",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Instagram QR codes",
    "TikTok QR codes",
    "YouTube QR codes",
    "LinkedIn QR codes",
    "Any social platform support",
    "Custom branding"
  ]
}

export default function SocialMediaQRCode() {
  return (
    <>
      <Script
        id="social-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 border-pink-500/20 px-4 py-2">
                <Share2 className="h-4 w-4 mr-2" />
                Social Media QR Codes
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn Scans Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                  Followers
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create QR codes that link directly to your social profiles. 
                Instagram, TikTok, YouTube, LinkedIn—one scan to follow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <Share2 className="h-5 w-5" />
                    Create Social QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  All Platforms
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Custom Colors
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Print-Ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Works With Every Platform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create QR codes for any social media profile URL.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {platforms.map((platform, i) => (
                <Card key={i} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center mx-auto mb-4">
                      <platform.icon className="h-7 w-7 text-pink-500" />
                    </div>
                    <h3 className="font-semibold mb-1">{platform.title}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Social Media QR Codes?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-pink-500" />
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Create Your Social QR in 3 Steps
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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
                  Start Growing Your Following
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where to Use Social QR Codes
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-4 rounded-xl border border-border/50 bg-card/50 text-center">
                  <h3 className="font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
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
                  <h3 className="font-semibold mb-2">What social platforms are supported?</h3>
                  <p className="text-muted-foreground">Any platform with a profile URL! Instagram, TikTok, YouTube, LinkedIn, Twitter/X, Facebook, Pinterest, Snapchat, Threads, and more.</p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">Can I link to multiple profiles?</h3>
                  <p className="text-muted-foreground">Each QR code links to one URL. For multiple profiles, consider creating a Linktree or similar landing page and linking to that.</p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">Will it work if I change my username?</h3>
                  <p className="text-muted-foreground">The QR code links to the exact URL you provide. If you change your username, you may need to generate a new code.</p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <h3 className="font-semibold mb-2">Can I track how many people scanned it?</h3>
                  <p className="text-muted-foreground">Yes! Add our Analytics subscription ($9/mo) to track scans, locations, devices, and conversion rates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Social Following?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Create a QR code that turns real-world interactions into online followers.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Social Media QR Code
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

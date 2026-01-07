import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MessageCircle, 
  ArrowRight, 
  BadgeCheck, 
  Users, 
  Clock,
  Zap,
  Store,
  Utensils,
  Wrench,
  HeartHandshake
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "WhatsApp QR Code Generator | Direct Message Link QR",
  description: "Create a WhatsApp QR code that lets customers message you instantly. One scan to start a conversation. Perfect for businesses.",
  keywords: [
    "WhatsApp QR code",
    "WhatsApp QR code generator",
    "WhatsApp link QR",
    "wa.me QR code",
    "WhatsApp business QR",
    "click to chat QR code",
    "WhatsApp contact QR",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/whatsapp-qr-code-generator`,
  },
  openGraph: {
    title: "WhatsApp QR Code Generator | Direct Message Link QR",
    description: "Create a WhatsApp QR code that lets customers message you instantly.",
    type: "website",
    url: `${BASE_URL}/tools/whatsapp-qr-code-generator`,
  },
}

const benefits = [
  {
    icon: Zap,
    title: "Instant Connection",
    description: "Customers scan and open WhatsApp chat immediately"
  },
  {
    icon: MessageCircle,
    title: "Pre-filled Messages",
    description: "Set a default message to start the conversation"
  },
  {
    icon: Users,
    title: "No Contact Saving",
    description: "Customers don't need to save your number first"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Accept inquiries anytime, respond when ready"
  },
]

const useCases = [
  { icon: Store, title: "Retail Stores", description: "Quick product inquiries" },
  { icon: Utensils, title: "Restaurants", description: "Reservations & orders" },
  { icon: Wrench, title: "Service Business", description: "Booking & support" },
  { icon: HeartHandshake, title: "Customer Support", description: "Direct help line" },
]

const steps = [
  { step: "1", title: "Enter Phone Number", description: "Your WhatsApp business number" },
  { step: "2", title: "Add Pre-filled Message", description: "Optional greeting to start chat" },
  { step: "3", title: "Generate & Share", description: "Print or display your QR code" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "WhatsApp QR Code Generator",
  "description": "Create WhatsApp QR codes for instant customer messaging",
  "url": `${BASE_URL}/tools/whatsapp-qr-code-generator`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "4.97",
    "priceCurrency": "USD"
  },
  "featureList": [
    "WhatsApp direct link QR codes",
    "Pre-filled message support",
    "International number support",
    "PNG and SVG download",
    "No WhatsApp Business required"
  ]
}

export default function WhatsAppQRCodeGenerator() {
  return (
    <>
      <Script
        id="whatsapp-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-600/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-green-500/10 text-green-600 border-green-500/20 px-4 py-2">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                One Scan to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                  Start a Conversation
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create a QR code that opens WhatsApp and starts a chat with you. 
                Perfect for businesses, support, and sales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/#generator">
                    <MessageCircle className="h-5 w-5" />
                    Create WhatsApp QR
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Works Worldwide
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Pre-filled Messages
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  No App Install Needed
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
                Why Use a WhatsApp QR Code?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Make it effortless for customers to reach you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-green-500" />
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
                Create Your WhatsApp QR in 30 Seconds
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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
                  Get Your WhatsApp QR
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
                Perfect For Every Business
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, i) => (
                <Card key={i} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-7 w-7 text-green-500" />
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
                  <h3 className="font-semibold mb-2">Do I need WhatsApp Business?</h3>
                  <p className="text-muted-foreground">No! WhatsApp QR codes work with both regular WhatsApp and WhatsApp Business accounts.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">What countries does it work in?</h3>
                  <p className="text-muted-foreground">WhatsApp QR codes work globally. Just include your full international phone number with country code.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Can I set a default message?</h3>
                  <p className="text-muted-foreground">Yes! You can pre-fill a message like "Hi, I'm interested in..." that appears when customers scan the code.</p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
                  <h3 className="font-semibold mb-2">Does the customer need to save my number?</h3>
                  <p className="text-muted-foreground">No! The QR code opens a chat directly using wa.me links. Customers can message you without saving your contact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let Customers Reach You Instantly
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              One scan, one tap—and they're chatting with you on WhatsApp.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create WhatsApp QR Code
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

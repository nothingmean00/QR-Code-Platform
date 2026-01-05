import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Zap,
  Building2,
  Briefcase,
  Globe,
  Phone,
  Mail,
  Sparkles,
  Users,
  Star
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Free vCard QR Code Generator | Digital Business Card Creator",
  description: "Create a vCard QR code for your business card. Let contacts save your info with one scan. Free, professional, no signup required.",
  keywords: [
    "vCard QR code generator",
    "digital business card QR",
    "contact QR code",
    "business card QR code maker",
    "free vCard generator",
    "QR code contact card",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/vcard-qr-code-generator`,
  },
  openGraph: {
    title: "Free vCard QR Code Generator | Digital Business Card Creator",
    description: "Create a vCard QR code for your business card. Let contacts save your info with one scan.",
    type: "website",
    url: `${BASE_URL}/tools/vcard-qr-code-generator`,
  },
}

const features = [
  {
    icon: Zap,
    title: "One-Scan Save",
    description: "Contacts save your info instantly—no typing required"
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Compatible with iPhone, Android, and all contact apps"
  },
  {
    icon: Star,
    title: "Professional Image",
    description: "Modern tech-forward impression on every card"
  },
  {
    icon: Users,
    title: "Never Lost",
    description: "Digital contacts outlast paper cards that get thrown away"
  },
]

const fieldsIncluded = [
  { icon: User, label: "Full Name" },
  { icon: Briefcase, label: "Job Title" },
  { icon: Building2, label: "Company" },
  { icon: Phone, label: "Phone Numbers" },
  { icon: Mail, label: "Email Addresses" },
  { icon: Globe, label: "Website & LinkedIn" },
]


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "vCard QR Code Generator",
  "description": "Create free vCard QR codes for business cards and professional networking",
  "url": `${BASE_URL}/tools/vcard-qr-code-generator`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Contact information QR codes",
    "vCard 3.0 format",
    "Multiple phone numbers",
    "Multiple email addresses",
    "Company and title support",
    "PNG and SVG download"
  ]
}

export default function VCardQRCodeGenerator() {
  return (
    <>
      <Script
        id="vcard-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-violet-500/10 text-violet-600 border-violet-500/20 px-4 py-2">
                <User className="h-4 w-4 mr-2" />
                Free vCard QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The Business Card{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                  People Actually Keep
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Add a vCard QR code to your business card and watch your contact info 
                go straight into their phone. No more lost connections.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600" asChild>
                  <Link href="/#generator">
                    <Sparkles className="h-5 w-5" />
                    Create vCard QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  No Signup Required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Print-Ready Quality
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why vCard QR Codes Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transform your networking game with a QR code that actually gets results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-violet-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything in One Scan
                </h2>
                <p className="text-muted-foreground">
                  Your vCard QR code can include all your professional contact information.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {fieldsIncluded.map((field, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                      <field.icon className="h-5 w-5 text-violet-500" />
                    </div>
                    <span className="font-medium">{field.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                How to Add a vCard QR to Your Business Card
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold mb-1">Enter Your Contact Info</h3>
                      <p className="text-muted-foreground text-sm">Fill in your name, title, company, phone, email, and website.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold mb-1">Generate Your QR Code</h3>
                      <p className="text-muted-foreground text-sm">Click generate to create your unique vCard QR code.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold mb-1">Download SVG for Print</h3>
                      <p className="text-muted-foreground text-sm">Use SVG format for crisp, print-ready quality at any size.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold mb-1">Add to Your Card Design</h3>
                      <p className="text-muted-foreground text-sm">Place on the back of your business card with "Scan to Save Contact".</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <User className="h-16 w-16 text-violet-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">Your vCard QR Code</p>
                  </div>
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
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold mb-2">What size should the QR code be on a business card?</h3>
                  <p className="text-muted-foreground">Minimum 0.8 inches (20mm) square. We recommend 1 inch for reliable scanning in various lighting conditions.</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold mb-2">Will it work if my card gets bent or worn?</h3>
                  <p className="text-muted-foreground">Yes! We use Level H error correction which allows the code to scan even with up to 30% damage.</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold mb-2">Can I include my LinkedIn profile?</h3>
                  <p className="text-muted-foreground">Yes, add your LinkedIn URL in the website field. It will be saved with your contact info.</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold mb-2">Do I need to pay for a subscription?</h3>
                  <p className="text-muted-foreground">No! vCard QR codes are completely free and work forever. No subscriptions, no hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upgrade Your Business Card Today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals using vCard QR codes to network smarter.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Your vCard QR Code
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

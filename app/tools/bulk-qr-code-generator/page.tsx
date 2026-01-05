import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Download,
  Table,
  Package,
  Tag,
  Sparkles,
  Clock,
  Settings,
  FileSpreadsheet
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Bulk QR Code Generator | Create Multiple QR Codes at Once",
  description: "Generate hundreds of unique QR codes in seconds. Perfect for product packaging, event badges, asset tracking. CSV upload supported. Free for basic use.",
  keywords: [
    "bulk QR code generator",
    "batch QR codes",
    "multiple QR codes",
    "QR code CSV",
    "mass QR code generator",
    "QR codes from spreadsheet",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/bulk-qr-code-generator`,
  },
  openGraph: {
    title: "Bulk QR Code Generator | Create Multiple QR Codes at Once",
    description: "Generate hundreds of unique QR codes in seconds. Perfect for product packaging, event badges, asset tracking.",
    type: "website",
    url: `${BASE_URL}/tools/bulk-qr-code-generator`,
  },
}

const useCases = [
  {
    icon: Package,
    title: "Product Packaging",
    description: "Unique codes for each SKU linking to product info, warranties, or promotions"
  },
  {
    icon: Tag,
    title: "Asset Tracking",
    description: "Label equipment, inventory, and assets with scannable identifiers"
  },
  {
    icon: Layers,
    title: "Event Badges",
    description: "Generate personalized check-in codes for every attendee"
  },
  {
    icon: Table,
    title: "Marketing Campaigns",
    description: "Unique codes per flyer location to track campaign performance"
  },
]

const features = [
  { icon: FileSpreadsheet, title: "CSV/Excel Upload", description: "Import URLs from spreadsheets" },
  { icon: Download, title: "ZIP Download", description: "Get all codes in one organized file" },
  { icon: Settings, title: "Consistent Styling", description: "Same colors/size across all codes" },
  { icon: Clock, title: "Generate in Seconds", description: "100+ codes in under a minute" },
]

const howItWorks = [
  { step: "1", title: "Prepare Your Data", description: "Create a CSV with URLs or content in a column" },
  { step: "2", title: "Upload to Generator", description: "Select your file and preview the QR codes" },
  { step: "3", title: "Customize Styling", description: "Choose colors, size, and error correction" },
  { step: "4", title: "Download ZIP", description: "Get all codes named and organized" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Bulk QR Code Generator",
  "description": "Generate multiple QR codes at once from CSV files or spreadsheets",
  "url": `${BASE_URL}/tools/bulk-qr-code-generator`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Batch QR code generation",
    "CSV import support",
    "ZIP file download",
    "Consistent styling",
    "SVG and PNG formats"
  ]
}

export default function BulkQRCodeGenerator() {
  return (
    <>
      <Script
        id="bulk-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-4 py-2">
                <Layers className="h-4 w-4 mr-2" />
                Bulk QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Generate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  Hundreds of QR Codes
                </span>{" "}
                in Seconds
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Upload a spreadsheet of URLs and get unique, high-quality QR codes 
                for each one. Perfect for product packaging, events, and asset tracking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" asChild>
                  <Link href="/#generator">
                    <Sparkles className="h-5 w-5" />
                    Start Bulk Generation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  10 Codes Free
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  CSV Upload
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ZIP Download
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perfect For Scale Operations
              </h2>
              <p className="text-muted-foreground">
                When you need more than one QR code, we've got you covered.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                      <useCase.icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Built for Efficiency
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                How Bulk Generation Works
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorks.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/#generator">
                    Try Bulk Generation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CSV Format */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                CSV Format Example
              </h2>
              
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="bg-muted/50 px-6 py-3 border-b border-border">
                  <span className="text-sm font-mono text-muted-foreground">products.csv</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-muted-foreground">url,filename</div>
                  <div>https://example.com/product/001,product-001</div>
                  <div>https://example.com/product/002,product-002</div>
                  <div>https://example.com/product/003,product-003</div>
                  <div className="text-muted-foreground">... (up to 1000 rows)</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                First column is the URL/content, second column (optional) is the output filename.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Simple Volume Pricing
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">Free</div>
                    <div className="text-muted-foreground mb-4">Up to 10 codes</div>
                    <ul className="text-sm text-left space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> PNG & SVG formats</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Basic styling</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> ZIP download</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-emerald-500/50 bg-emerald-500/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">$9</div>
                    <div className="text-muted-foreground mb-4">Up to 100 codes</div>
                    <ul className="text-sm text-left space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Everything in Free</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Custom colors</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> PDF format</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">$29</div>
                    <div className="text-muted-foreground mb-4">Up to 1000 codes</div>
                    <ul className="text-sm text-left space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Everything in $9</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Logo embedding</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Priority support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Generate at Scale?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Start with 10 free codes. No signup required.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Start Bulk Generation
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

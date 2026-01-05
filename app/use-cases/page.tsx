import type { Metadata } from "next"
import Link from "next/link"
import { USE_CASES } from "@/lib/use-cases-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode } from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  title: "QR Code Use Cases by Industry | QR Code Generator",
  description: "Discover how different industries use QR codes. From retail and restaurants to real estate and events—find the perfect QR code solution for your business.",
  keywords: [
    "QR code use cases",
    "industry QR codes",
    "QR code solutions",
    "business QR codes",
    "QR code examples",
    "QR code applications",
  ],
  alternates: {
    canonical: `${BASE_URL}/use-cases`,
  },
  openGraph: {
    title: "QR Code Use Cases by Industry",
    description: "Discover how different industries use QR codes to connect physical and digital experiences.",
    type: "website",
    url: `${BASE_URL}/use-cases`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Use Cases by Industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Use Cases by Industry",
    description: "Discover how different industries use QR codes to connect physical and digital experiences.",
    images: ["/og-image.png"],
  },
}

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <QrCode className="h-4 w-4" />
              Industry Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              QR Codes for{" "}
              <span className="text-primary">Every Industry</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover how businesses across industries use QR codes to bridge physical 
              and digital experiences, reduce costs, and engage customers.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Link 
                  key={useCase.slug}
                  href={`/use-cases/${useCase.slug}`}
                  className="group relative flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {useCase.shortTitle}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    {/* Applications preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {useCase.applications.slice(0, 3).map((app) => (
                        <span 
                          key={app.title}
                          className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                        >
                          {app.title}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create your first QR code in seconds. No signup required, free forever.
            </p>
            <Button size="lg" className="h-12 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Free QR Code
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QRGenerator } from "@/components/qr-generator"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { BlogPreview } from "@/components/blog-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import Script from "next/script"

// FAQ data for structured data
const faqData = [
  {
    question: "What is error correction and why does it matter?",
    answer: "Error correction allows QR codes to remain scannable even when partially damaged or obscured. We use the highest level (H), which means up to 30% of the code can be damaged and it will still scan."
  },
  {
    question: "What's the difference between static and dynamic QR codes?",
    answer: "Static QR codes encode data directly - the destination is permanent. Dynamic QR codes point to a redirect URL that you can change anytime without reprinting."
  },
  {
    question: "What size should I print my QR code?",
    answer: "For reliable scanning, we recommend a minimum of 2cm x 2cm (0.8in x 0.8in) for close-range scanning. For posters or signage, increase size proportionally."
  },
  {
    question: "Why SVG over PNG for printing?",
    answer: "SVG is a vector format that scales to any size without losing quality. PNG is raster-based and will become pixelated if enlarged. For professional printing, always use SVG."
  },
  {
    question: "Do you track scans on free QR codes?",
    answer: "No. Free QR codes are completely static and contain no tracking mechanisms. Scan tracking is only available with our Analytics subscription."
  },
  {
    question: "Can I use custom colors?",
    answer: "Yes, you can customize foreground and background colors. Maintain high contrast for reliable scanning - dark foreground on light background works best."
  }
]

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "QR Code Generator",
      "description": "Generate high-quality, print-safe QR codes for URLs, WiFi, vCards, and more. Free downloads, no account required.",
      "url": "https://qr-generator.com",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "4.99",
        "priceCurrency": "USD"
      },
      "featureList": [
        "URL QR codes",
        "WiFi QR codes", 
        "vCard contact QR codes",
        "WhatsApp QR codes",
        "Instagram QR codes",
        "Google Review QR codes",
        "PNG and SVG export",
        "Custom colors",
        "Level H error correction"
      ],
      "screenshot": "https://qr-generator.com/og-image.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "847293"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "Organization",
      "name": "GenerateQRcode.org",
      "url": "https://generateqrcode.org",
      "logo": "https://qr-generator.com/icon.svg",
      "sameAs": []
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />

        {/* Generator */}
        <section id="generator" className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <QRGenerator />
          </div>
        </section>

        <StatsSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <FAQSection />
        <BlogPreview />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}

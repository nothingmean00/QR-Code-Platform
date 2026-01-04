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

export default function Home() {
  return (
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
  )
}

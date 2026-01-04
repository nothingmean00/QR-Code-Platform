import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { USE_CASES, getUseCaseBySlug, getAllUseCaseSlugs } from "@/lib/use-cases-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  ArrowLeft
} from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static paths for all use cases
export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)
  
  if (!useCase) {
    return {
      title: "Use Case Not Found",
    }
  }

  return {
    title: `${useCase.title} | QR Code Generator`,
    description: useCase.metaDescription,
    keywords: useCase.keywords,
    openGraph: {
      title: useCase.title,
      description: useCase.metaDescription,
      type: "article",
    },
  }
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)

  if (!useCase) {
    notFound()
  }

  const Icon = useCase.icon

  // Find related use cases (exclude current)
  const relatedUseCases = USE_CASES.filter(uc => uc.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/use-cases" className="hover:text-foreground transition-colors">
              Use Cases
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{useCase.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-border relative overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-[0.03]`} />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            {/* Back link */}
            <Link 
              href="/use-cases" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Use Cases
            </Link>

            {/* Icon + Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} text-white`}>
                <Icon className="h-7 w-7" />
              </div>
              <Badge variant="secondary" className="text-sm">
                Industry Guide
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {useCase.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {useCase.description}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-6 gap-2" asChild>
                <Link href="/#generator">
                  <Sparkles className="h-5 w-5" />
                  Create QR Code Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                <a href="#applications">
                  See Applications
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCase.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why {useCase.shortTitle} Businesses Use QR Codes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCase.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Key Applications
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Discover the most effective ways to use QR codes in {useCase.shortTitle.toLowerCase()}.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCase.applications.map((app, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${useCase.color} text-white flex items-center justify-center text-lg font-bold mb-4`}>
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.qrTypes.map((type) => (
                    <Badge key={type} variant="secondary" className="text-xs">
                      {type.replace("_", " ")}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA after applications */}
          <div className="text-center mt-12">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/#generator">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Common questions about QR codes for {useCase.shortTitle.toLowerCase()}.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {useCase.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Explore Other Industries
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedUseCases.map((related) => {
              const RelatedIcon = related.icon
              return (
                <Link
                  key={related.slug}
                  href={`/use-cases/${related.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${related.color} text-white flex items-center justify-center flex-shrink-0`}>
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {related.shortTitle}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {related.applications.length} applications
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to create QR codes for your {useCase.shortTitle.toLowerCase()} business?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Generate professional, print-safe QR codes in seconds. No signup required.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-lg" asChild>
            <Link href="/#generator">
              Create Free QR Code
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

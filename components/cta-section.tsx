"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, Sparkles, CheckCircle2 } from "lucide-react"

export function CTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-40" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-chart-2/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '-2s' }} />
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Ready to get started?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Create QR codes that<br />
            <span className="text-gradient">actually work</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            No sign-up required. Generate your first professional QR code in seconds.
          </p>
          
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg font-semibold gap-2 rounded-full shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]" 
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
            Start Creating Now
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Free to use
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              No account needed
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Instant download
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Sparkles,
  QrCode
} from "lucide-react"

export function HeroSection() {
  const [count, setCount] = useState(0)
  const targetCount = 847293
  const sectionRef = useRef<HTMLElement>(null)

  // Animated counter
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = targetCount / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setCount(targetCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [])

  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10 mesh-gradient" />
      
      {/* Floating orbs - hidden on mobile for performance */}
      <div className="absolute inset-0 -z-10 overflow-hidden hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-chart-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 right-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-accent-warm/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.04] dot-pattern text-foreground"
      />

      <div className="container mx-auto px-4 py-12 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up">
            <Badge 
              variant="secondary" 
              className="gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full shadow-lg shadow-primary/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="tabular-nums font-semibold">{count.toLocaleString()}</span> QR codes created
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up stagger-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] sm:leading-[0.95] mb-4 sm:mb-6">
              <span className="block text-foreground">Create QR codes</span>
              <span className="block mt-1 sm:mt-2 text-gradient">
                that actually work
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 animate-fade-in-up stagger-2">
            Professional QR codes with 
            <span className="text-foreground font-medium"> 30% damage tolerance</span>. 
            Print them anywhere—they'll scan.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 mb-10 sm:mb-14 animate-fade-in-up stagger-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={scrollToGenerator}
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold gap-2 rounded-full shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-primary to-primary/90 w-full sm:w-auto"
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                Create Your QR Code
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToGenerator}
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium gap-2 rounded-full border-2 hover:bg-muted/50 w-full sm:w-auto"
              >
                <QrCode className="h-4 w-4 sm:h-5 sm:w-5" />
                See Examples
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-x-6 sm:gap-y-2 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Print-ready quality</span>
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto animate-fade-in-up stagger-4 px-2 sm:px-0">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs sm:text-sm">Level H Protection</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">30% error correction</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs sm:text-sm">Instant Generation</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Real-time preview</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <QrCode className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs sm:text-sm">PNG & SVG</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Vector for any size</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  )
}

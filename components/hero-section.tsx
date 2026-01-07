"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Sparkles,
  QrCode
} from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            {/* Main Headline */}
            <div className="text-center lg:text-left mb-6 animate-fade-in-up stagger-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
                <span className="block text-foreground">Create QR codes</span>
                <span className="block mt-1 text-gradient">
                  that actually work
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-center lg:text-left text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up stagger-2">
              Professional QR codes with 
              <span className="text-foreground font-medium"> 30% damage tolerance</span>. 
              Print them anywhere—they'll scan.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 mb-8 animate-fade-in-up stagger-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Level H Protection</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">30% error correction</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Instant Generation</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Real-time preview</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <QrCode className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">PNG & SVG</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Vector for any size</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-chart-2/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Image container with styling */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-border/50 bg-card/30 backdrop-blur-sm">
                <Image
                  src="/hero-image.png"
                  alt="Person scanning a QR code with smartphone - demonstrating easy QR code usage"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Floating badge on image */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-card border border-border rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">Scan Success</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Works every time</p>
                  </div>
                </div>
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

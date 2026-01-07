"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Sparkles, Zap, Crown, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Single QR Code",
    price: "$4.97",
    originalPrice: "$9.99",
    period: "per download",
    description: "One professional QR code, all formats",
    icon: Zap,
    features: [
      "High-res PNG (4096px)",
      "SVG (vector, infinite scale)",
      "PDF (print-ready)",
      "Level H error correction",
      "Custom colors",
      "Instant download",
    ],
    cta: "Get My QR Code",
    highlighted: true,
    badge: "50% Off",
  },
  {
    name: "Analytics",
    price: "$9",
    period: "per month",
    description: "Track scans & optimize campaigns",
    icon: Crown,
    features: [
      "Unlimited QR codes",
      "Real-time scan tracking",
      "Geographic insights",
      "Device & browser stats",
      "Edit QR destinations",
      "Export reports",
    ],
    cta: "Start Tracking",
    highlighted: false,
    isSubscription: true,
  },
]

export function PricingSection() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-40" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/15 text-foreground text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            Simple Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            Pay per QR code, <span className="text-gradient">not per month</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            No subscriptions required. Buy what you need, when you need it. 
            Add analytics only if you want tracking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300",
                plan.highlighted 
                  ? "border-primary/50 shadow-2xl shadow-primary/10 sm:scale-105 order-first sm:order-none" 
                  : "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:hover:-translate-y-1",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay for highlighted card */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
              )}
              
              {plan.badge && (
                <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-foreground text-background font-semibold shadow-lg">
                  {plan.badge}
                </Badge>
              )}
              
              <CardContent className="relative p-5 sm:p-6 md:p-8 flex flex-col h-full">
                {/* Icon */}
                <div className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6",
                  plan.highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <plan.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                
                {/* Plan name & description */}
                <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">/{plan.period}</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0",
                        plan.highlighted ? "bg-primary/20" : "bg-muted"
                      )}>
                        <Check className={cn(
                          "h-2.5 w-2.5 sm:h-3 sm:w-3",
                          plan.highlighted ? "text-primary" : "text-muted-foreground"
                        )} />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button 
                  className={cn(
                    "w-full h-10 sm:h-12 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base",
                    plan.highlighted 
                      ? "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30" 
                      : ""
                  )} 
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  onClick={scrollToGenerator}
                >
                  {plan.cta}
                </Button>
                
                {plan.isSubscription && (
                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-2 sm:mt-3">
                    Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col items-center gap-3 mt-8 sm:mt-12">
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" />
              <span>No account required</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Powered by</span>
            <svg className="h-5 w-auto" viewBox="0 0 60 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.9 10.9 0 0 1-4.56 1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.58zm-3.95-3c0-1.42-.73-2.87-2.07-2.87-1.34 0-2.13 1.4-2.2 2.87h4.27zM40.95 5.48c-1.14 0-2.02.27-2.67 1.11l-.18-1.11h-4.4V24l4.98-1.06.01-4.36c.67.49 1.64.84 2.74.84 2.77 0 5.3-2.22 5.3-7.13-.01-4.49-2.58-6.81-5.78-6.81zm-1.02 10.51c-.91 0-1.45-.32-1.83-.72l-.01-5.72c.4-.45.95-.77 1.84-.77 1.41 0 2.39 1.58 2.39 3.6 0 2.07-.97 3.61-2.39 3.61zM28.24 4.66l5-.93V.27l-5 .94v3.45zM28.24 5.61h5v14.08h-5V5.61zM23.13 6.75l-.31-1.14h-4.33v14.08h4.98V9.34c1.18-1.54 3.17-.91 3.79-.6V5.61c-.65-.24-3.02-.69-4.13 1.14zM13.69 1.94l-4.86 1.04-.02 12.88c0 2.38 1.79 4.13 4.17 4.13 1.32 0 2.29-.24 2.82-.53v-3.54c-.51.21-3.02.95-3.02-1.42V9.2h3.02V5.61H10.8l-.01-3.67h2.9zM4.17 10.01c0-.58.48-.8 1.26-.8 1.13 0 2.55.34 3.68.95V6.23A9.78 9.78 0 0 0 5.43 5.48c-2.9 0-4.83 1.51-4.83 4.04 0 3.94 5.43 3.31 5.43 5.01 0 .69-.6.91-1.44.91-1.24 0-2.83-.51-4.08-1.2v3.88c1.39.6 2.8.86 4.08.86 2.97 0 5.01-1.47 5.01-4.03-.01-4.26-5.46-3.5-5.43-5.09z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

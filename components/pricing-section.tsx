"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Single",
    price: "$4.99",
    period: "per QR code",
    description: "Perfect for one-off needs",
    icon: Zap,
    features: [
      "1 QR Code",
      "PNG & SVG Export",
      "Print-safe quality (1024px)",
      "Level H error correction",
      "Custom colors",
      "Instant download",
    ],
    cta: "Create QR Code",
    highlighted: false,
  },
  {
    name: "Pro Pack",
    price: "$24.99",
    period: "10 QR codes",
    description: "Best value for growing businesses",
    icon: Sparkles,
    features: [
      "10 QR Codes",
      "PNG & SVG Export",
      "High-res PNG (4096px)",
      "PDF export (print-ready)",
      "Custom colors",
      "50% savings vs single",
    ],
    cta: "Get Pro Pack",
    highlighted: true,
    badge: "Best Value",
    savings: "50%",
  },
  {
    name: "Analytics",
    price: "$9",
    period: "per month",
    description: "Track scans & optimize campaigns",
    icon: Crown,
    features: [
      "Unlimited QR edits",
      "Real-time scan tracking",
      "Geographic data",
      "Device & browser stats",
      "Time-based analytics",
      "Export reports",
    ],
    cta: "Start Tracking",
    highlighted: false,
    isSubscription: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-40" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Pay per QR code, <span className="text-gradient">not per month</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions required. Buy what you need, when you need it. 
            Add analytics only if you want tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300",
                plan.highlighted 
                  ? "border-primary/50 shadow-2xl shadow-primary/10 scale-[1.02] md:scale-105" 
                  : "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay for highlighted card */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
              )}
              
              {plan.badge && (
                <Badge className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground font-semibold shadow-lg">
                  {plan.badge}
                </Badge>
              )}
              
              <CardContent className="relative p-8 flex flex-col h-full">
                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                  plan.highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <plan.icon className="h-6 w-6" />
                </div>
                
                {/* Plan name & description */}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  {plan.savings && (
                    <Badge variant="secondary" className="ml-3 text-xs bg-success/10 text-success border-success/20">
                      Save {plan.savings}
                    </Badge>
                  )}
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                        plan.highlighted ? "bg-primary/20" : "bg-muted"
                      )}>
                        <Check className={cn(
                          "h-3 w-3",
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
                    "w-full h-12 font-semibold rounded-xl transition-all duration-300",
                    plan.highlighted 
                      ? "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30" 
                      : ""
                  )} 
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
                
                {plan.isSubscription && (
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bundle callout */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                <Crown className="h-6 w-6 text-chart-4" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-semibold mb-1">Need more? We have bundles.</h4>
                <p className="text-sm text-muted-foreground">
                  Business Pack: 25 QR codes for $49.99 (60% savings)
                </p>
              </div>
              <Button variant="outline" className="rounded-xl whitespace-nowrap">
                View All Packs
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Secure payments powered by Stripe. All prices in USD.
        </p>
      </div>
    </section>
  )
}

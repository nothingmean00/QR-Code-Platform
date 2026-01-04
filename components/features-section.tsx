"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Printer, Palette, Zap, Shield, Smartphone, FileCode, RefreshCw, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Printer,
    title: "Print-Safe",
    description:
      "High error correction ensures your QR codes scan reliably even when printed at small sizes or on low-quality paper.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Choose your colors and export in PNG or SVG format. Perfect for matching your brand guidelines.",
    color: "from-chart-4/20 to-chart-4/5",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "QR codes generate in real-time as you type. No waiting, no server processing delays.",
    color: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Free tier QR codes are static and contain no tracking. Your data stays yours.",
    color: "from-success/20 to-success/5",
  },
  {
    icon: Smartphone,
    title: "Universal Compatibility",
    description:
      "Works with all modern smartphones and QR scanners. Tested across iOS, Android, and dedicated scanners.",
    color: "from-chart-5/20 to-chart-5/5",
  },
  {
    icon: FileCode,
    title: "Multiple Formats",
    description: "Download as PNG for quick use or SVG for perfect scaling at any size. Print ready.",
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    icon: RefreshCw,
    title: "Dynamic QR Codes",
    description: "Upgrade to change your QR destination anytime without reprinting. Perfect for marketing campaigns.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: BarChart3,
    title: "Scan Analytics",
    description: "Track scans, locations, and devices with Pro. Get alerts when traffic drops.",
    color: "from-chart-4/20 to-chart-4/5",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">reliability</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every technical decision optimized for real-world scanning success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

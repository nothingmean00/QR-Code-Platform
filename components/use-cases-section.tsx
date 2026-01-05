"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Store, Utensils, Building2, Calendar, Users, Ticket, Package, GraduationCap } from "lucide-react"

const useCases = [
  {
    icon: Store,
    title: "Retail & E-commerce",
    description: "Product packaging, in-store displays, receipt links to digital content",
    tags: ["Product Info", "Reviews", "Warranty"],
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description: "Digital menus, table ordering, feedback collection, WiFi access",
    tags: ["Menu", "WiFi", "Reviews"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property listings, virtual tours, agent contact cards on signage",
    tags: ["Listings", "vCard", "Tours"],
  },
  {
    icon: Calendar,
    title: "Events & Conferences",
    description: "Ticket validation, session schedules, attendee networking",
    tags: ["Tickets", "Schedule", "Networking"],
  },
  {
    icon: Users,
    title: "Marketing & Campaigns",
    description: "Print-to-digital bridges, trackable campaign URLs, social follows",
    tags: ["Tracking", "Social", "Landing Pages"],
  },
  {
    icon: Ticket,
    title: "Entertainment",
    description: "Concert tickets, movie promotions, exclusive content access",
    tags: ["Tickets", "Promo", "Content"],
  },
  {
    icon: Package,
    title: "Logistics & Shipping",
    description: "Package tracking, delivery confirmation, return labels",
    tags: ["Tracking", "Returns", "Info"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Course materials, student IDs, campus navigation, WiFi",
    tags: ["Resources", "WiFi", "Navigation"],
  },
]

export function UseCasesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Built for every industry</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From restaurants to real estate, QR codes bridge physical and digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <useCase.icon className="h-8 w-8 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold text-foreground mb-1">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{useCase.description}</p>
                <div className="flex flex-wrap gap-1">
                  {useCase.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 bg-primary/15 text-foreground border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CalendarDays, 
  ArrowRight, 
  BadgeCheck, 
  Wand2,
  PartyPopper,
  TicketCheck,
  Compass,
  Send,
  Focus,
  CalendarClock,
  BellRing,
  Cake
} from "lucide-react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  title: "Event QR Code Generator | Check-In, Tickets & Registration",
  description: "Create QR codes for events: registration links, ticket scanning, calendar invites, venue info. Perfect for conferences, weddings, and parties. Free generator.",
  keywords: [
    "event QR code",
    "QR code for events",
    "event registration QR",
    "ticket QR code",
    "wedding QR code",
    "conference QR code",
    "party QR code",
  ],
  alternates: {
    canonical: `${BASE_URL}/tools/event-qr-code-generator`,
  },
  openGraph: {
    title: "Event QR Code Generator | Check-In, Tickets & Registration",
    description: "Create QR codes for events: registration links, ticket scanning, calendar invites, venue info.",
    type: "website",
    url: `${BASE_URL}/tools/event-qr-code-generator`,
  },
}

const useCases = [
  {
    icon: TicketCheck,
    title: "Ticket Validation",
    description: "Unique codes for each attendee for quick check-in scanning"
  },
  {
    icon: CalendarClock,
    title: "Calendar Add",
    description: "Let guests add your event to their calendar with one scan"
  },
  {
    icon: Compass,
    title: "Venue Directions",
    description: "Link to Google/Apple Maps for easy navigation"
  },
  {
    icon: Send,
    title: "Social Sharing",
    description: "Event hashtag, photo gallery, or social media links"
  },
  {
    icon: Cake,
    title: "Wedding Registry",
    description: "Direct guests to your registry or event website"
  },
  {
    icon: BellRing,
    title: "Updates & Info",
    description: "Link to schedule changes, speaker bios, or FAQs"
  },
]

const eventTypes = [
  { name: "Corporate Conference", features: ["Registration", "Session Check-in", "Networking App"] },
  { name: "Wedding", features: ["RSVP", "Registry Link", "Photo Gallery", "Venue Map"] },
  { name: "Trade Show", features: ["Booth Info", "Lead Capture", "Product Demos"] },
  { name: "Concert/Festival", features: ["E-Tickets", "Schedule", "Merch Store"] },
  { name: "Birthday/Party", features: ["Invitation Link", "RSVP", "Photos"] },
  { name: "Workshop", features: ["Materials", "Feedback Form", "Certificate"] },
]

const placementIdeas = [
  { location: "Invitation", description: "RSVP or event details" },
  { location: "Entry Badge", description: "Check-in validation" },
  { location: "Table Numbers", description: "Menu or photo sharing" },
  { location: "Stage Backdrop", description: "Social media follow" },
  { location: "Program/Brochure", description: "Speaker bios, schedule" },
  { location: "Thank You Cards", description: "Photo gallery, feedback" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Event QR Code Generator",
  "description": "Create QR codes for event registration, tickets, check-in, and information sharing",
  "url": `${BASE_URL}/tools/event-qr-code-generator`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

export default function EventQRCodeGenerator() {
  return (
    <>
      <Script
        id="event-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-orange-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-rose-500/10 text-rose-600 border-rose-500/20 px-4 py-2">
                <CalendarDays className="h-4 w-4 mr-2" />
                Event QR Code Generator
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Make Every Event{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                  Seamlessly Connected
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From registration to check-in to post-event photos. QR codes 
                streamline every touchpoint of your event experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600" asChild>
                  <Link href="/#generator">
                    <Wand2 className="h-5 w-5" />
                    Create Event QR Code
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Print-Ready
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  Unlimited Scans
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                QR Codes for Every Event Need
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                One scan connects guests to exactly what they need, when they need it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                      <useCase.icon className="h-6 w-6 text-rose-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Perfect For Any Occasion
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventTypes.map((event, i) => (
                  <Card key={i} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">{event.name}</h3>
                      <ul className="space-y-2">
                        {event.features.map((feature, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BadgeCheck className="h-4 w-4 text-rose-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Where to Place */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Strategic Placement Ideas
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {placementIdeas.map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-card border border-border/50">
                    <div className="flex items-start gap-3">
                      <Focus className="h-5 w-5 text-rose-500 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.location}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Create */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Create Your Event QR Code
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Pick Your Link</h3>
                  <p className="text-sm text-muted-foreground">Registration form, calendar event, venue map—whatever you need</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Generate & Style</h3>
                  <p className="text-sm text-muted-foreground">Customize colors to match your event theme and branding</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Print & Place</h3>
                  <p className="text-sm text-muted-foreground">Download high-res files for invitations, signage, and badges</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-rose-500 to-orange-500" asChild>
                  <Link href="/#generator">
                    Start Creating
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Event QR Code Best Practices
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <PartyPopper className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Test before printing</strong> — Scan every QR code on multiple devices before finalizing print materials.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <PartyPopper className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Size for distance</strong> — For signs, use larger codes. Rule: QR size = scanning distance ÷ 10.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <PartyPopper className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Add context</strong> — Include "Scan for..." text so guests know what they'll get.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <PartyPopper className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Mobile-optimize destination</strong> — 95%+ of scans are from phones. Test on mobile.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <PartyPopper className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <p><strong>Have a backup</strong> — For check-in, always have a manual lookup option ready.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-rose-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make Your Next Event Effortless
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Create professional event QR codes in seconds. Free, no signup required.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
              <Link href="/#generator">
                Create Event QR Code
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

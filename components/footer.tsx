import { QrCode } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 bg-muted/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg text-foreground">QR Generator</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Generate high-quality, print-safe QR codes for any use case. Built with precision and reliability in mind.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">QR Types</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/#generator" className="hover:text-primary transition-colors">
                  URL
                </Link>
              </li>
              <li>
                <Link href="/#generator" className="hover:text-primary transition-colors">
                  WiFi
                </Link>
              </li>
              <li>
                <Link href="/#generator" className="hover:text-primary transition-colors">
                  vCard
                </Link>
              </li>
              <li>
                <Link href="/#generator" className="hover:text-primary transition-colors">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/use-cases/retail-ecommerce" className="hover:text-primary transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link href="/use-cases/restaurants-cafes" className="hover:text-primary transition-colors">
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link href="/use-cases/real-estate" className="hover:text-primary transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-primary transition-colors font-medium">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical specs bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 px-4 rounded-2xl bg-card/60 border border-border/50 mb-8 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            Error Correction: Level H
          </span>
          <span>Quiet Zone: 4 modules</span>
          <span>Encoding: UTF-8</span>
          <span>Formats: PNG, SVG</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Built for reliability. No tracking on free tier.</p>
          <p>&copy; {new Date().getFullYear()} QR Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

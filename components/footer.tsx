import { QrCode } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 sm:py-16 bg-muted/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-base sm:text-lg text-foreground">GenerateQR</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
              Generate QR codes instantly for free. Create codes for URLs, WiFi, vCards, and more. No signup required.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">QR Types</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
            <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">Industries</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
            <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3 py-4 sm:py-6 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-card/60 border border-border/50 mb-6 sm:mb-8 text-[10px] sm:text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success" />
            Error Correction: Level H
          </span>
          <span>Quiet Zone: 4 modules</span>
          <span>Encoding: UTF-8</span>
          <span>Formats: PNG, SVG</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-sm text-muted-foreground">
          <p className="text-center sm:text-left">Built for reliability. No tracking on free tier.</p>
          <p>&copy; {new Date().getFullYear()} GenerateQRcode.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

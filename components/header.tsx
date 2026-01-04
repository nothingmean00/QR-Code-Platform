"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-strong">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
              <QrCode className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground tracking-tight">QR Generator</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link href="/#generator">Generator</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link href="/use-cases">Use Cases</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link href="/#pricing">Pricing</Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <KeyboardShortcuts />
          <ThemeToggle />
          <Button size="sm" className="hidden sm:flex ml-2 rounded-full px-4 font-medium shadow-lg shadow-primary/20" asChild>
            <Link href="/#generator">
              Create QR
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

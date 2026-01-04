import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QrCode, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-muted mb-6">
                <QrCode className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-7xl font-bold text-primary mb-2">404</h1>
              <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
              <p className="text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#generator">
                  <QrCode className="mr-2 h-4 w-4" />
                  Create QR Code
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/use-cases" className="text-primary hover:underline">
                  Use Cases
                </Link>
                <Link href="/blog" className="text-primary hover:underline">
                  Blog
                </Link>
                <Link href="/#faq" className="text-primary hover:underline">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

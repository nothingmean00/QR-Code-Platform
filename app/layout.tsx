import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, JetBrains_Mono, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
})

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-display",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap",
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Generate QR Code | Free QR Code Generator Online",
    template: "%s | GenerateQRcode.org"
  },
  description:
    "Generate QR codes instantly for free. Create QR codes for URLs, WiFi, vCards, menus, and more. No signup required. Download as PNG, SVG, or PDF.",
  keywords: [
    "generate QR code",
    "QR code generator",
    "free QR code generator",
    "create QR code",
    "make QR code",
    "QR code maker",
    "QR code creator",
    "online QR generator",
    "WiFi QR code",
    "vCard QR code",
    "menu QR code",
    "QR code for business",
    "custom QR code",
    "print QR code",
    "dynamic QR code",
    "QR code generator free",
  ],
  authors: [{ name: "GenerateQRcode.org" }],
  creator: "GenerateQRcode.org",
  publisher: "GenerateQRcode.org",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Generate QR Code | Free QR Code Generator Online",
    description: "Generate QR codes instantly for free. Create QR codes for URLs, WiFi, vCards, menus, and more. No signup required.",
    type: "website",
    siteName: "GenerateQRcode.org",
    url: BASE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Generate QR Code - Free Online QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate QR Code | Free QR Code Generator Online",
    description: "Generate QR codes instantly for free. Create QR codes for URLs, WiFi, vCards, and more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/icon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.ico",
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1f" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

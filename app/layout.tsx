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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-generator.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "QR Code Generator | Print-Safe, Professional QR Codes",
    template: "%s | QR Generator"
  },
  description:
    "Generate high-quality, print-safe QR codes for URLs, WiFi, vCards, and more. Free downloads, no account required. SVG & PDF exports available.",
  keywords: [
    "QR code",
    "QR generator",
    "print QR code",
    "dynamic QR code",
    "WiFi QR code",
    "vCard QR code",
    "free QR code",
    "QR code maker",
    "create QR code",
  ],
  authors: [{ name: "QR Generator" }],
  creator: "QR Generator",
  publisher: "QR Generator",
  openGraph: {
    title: "QR Code Generator | Print-Safe, Professional QR Codes",
    description: "Generate high-quality, print-safe QR codes. Free downloads, no account required.",
    type: "website",
    siteName: "QR Generator",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator | Print-Safe, Professional QR Codes",
    description: "Generate high-quality, print-safe QR codes. Free downloads, no account required.",
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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

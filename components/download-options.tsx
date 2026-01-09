"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, Check, Shield, Zap, RotateCcw, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { SINGLE_DOWNLOAD_PRICE, ORIGINAL_PRICE, formatPrice } from "@/lib/pricing"

interface DownloadOptionsProps {
  content: string
  disabled?: boolean
  fgColor?: string
  bgColor?: string
  logo?: string | null
  onDownload?: () => void
}

export function DownloadOptions({ content, disabled, fgColor, bgColor, logo }: DownloadOptionsProps) {
  const [loading, setLoading] = useState(false)

  const handleDownloadClick = async () => {
    if (!content || disabled || loading) return

    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          qrData: {
            content,
            fgColor,
            bgColor,
            logo,
          },
          product: 'QR_DOWNLOAD',
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        alert('Failed to create checkout session. Please try again.')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      {/* Main download button with price */}
      <Button 
        onClick={handleDownloadClick} 
        disabled={disabled || loading} 
        className="w-full gap-2 h-14 text-base relative overflow-hidden group" 
        size="lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 group-hover:opacity-90 transition-opacity" />
        <div className="relative flex items-center gap-2">
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Download className="h-5 w-5" />
          )}
          <span>{loading ? 'Redirecting...' : 'Get My QR Code'}</span>
          {!loading && (
            <div className="flex items-center gap-1.5 ml-1">
              <span className="text-white/60 line-through text-sm">{formatPrice(ORIGINAL_PRICE)}</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                {formatPrice(SINGLE_DOWNLOAD_PRICE)}
              </Badge>
            </div>
          )}
        </div>
      </Button>

      {/* What's included */}
      <div className="flex items-center justify-center gap-4 pt-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3" />
          PNG 4096px
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3" />
          SVG vector
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3" />
          PDF print-ready
        </div>
      </div>

      {/* Trust indicators with money-back guarantee */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Secure payment
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Instant download
          </div>
          <div className="flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            Money-back guarantee
          </div>
        </div>
        
        {/* Stripe badge */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
          <span>Powered by</span>
          <span className="font-bold text-sm" style={{ color: '#635BFF' }}>stripe</span>
        </div>
      </div>

      {/* Analytics upsell */}
      <div className="pt-3 border-t border-border">
        <button
          onClick={() => alert("Analytics subscription coming soon!\n\nIncludes scan tracking, geographic insights, device stats, and export reports for $9/month.")}
          disabled={disabled}
          className={cn(
            "w-full flex items-center gap-3 p-3 rounded-xl border transition-all",
            "border-border hover:border-primary/50 hover:bg-muted/50",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1 text-left">
            <span className="text-sm font-medium">Need scan tracking?</span>
            <span className="text-xs text-muted-foreground block">Add Analytics for $9/mo</span>
          </div>
        </button>
      </div>
    </div>
  )
}

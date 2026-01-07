"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, Check, Shield, Zap, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { SINGLE_DOWNLOAD_PRICE, ORIGINAL_PRICE, formatPrice } from "@/lib/pricing"

interface DownloadOptionsProps {
  content: string
  disabled?: boolean
  fgColor?: string
  bgColor?: string
  onDownload?: () => void
}

export function DownloadOptions({ content, disabled }: DownloadOptionsProps) {
  const handleDownloadClick = () => {
    if (!content || disabled) return
    // In production, this would redirect to Stripe checkout
    alert(`Ready to integrate Stripe!\n\nPrice: ${formatPrice(SINGLE_DOWNLOAD_PRICE)}\nFormats: PNG (4096px), SVG, PDF\n\nAdd your Stripe keys to enable payments.`)
  }

  return (
    <div className="space-y-3">
      {/* Main download button with price */}
      <Button 
        onClick={handleDownloadClick} 
        disabled={disabled} 
        className="w-full gap-2 h-14 text-base relative overflow-hidden group" 
        size="lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 group-hover:opacity-90 transition-opacity" />
        <div className="relative flex items-center gap-2">
          <Download className="h-5 w-5" />
          <span>Get My QR Code</span>
          <div className="flex items-center gap-1.5 ml-1">
            <span className="text-white/60 line-through text-sm">{formatPrice(ORIGINAL_PRICE)}</span>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              {formatPrice(SINGLE_DOWNLOAD_PRICE)}
            </Badge>
          </div>
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
        <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground">
          <span>Powered by</span>
          <svg className="h-5 w-auto" viewBox="0 0 60 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.9 10.9 0 0 1-4.56 1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.58zm-3.95-3c0-1.42-.73-2.87-2.07-2.87-1.34 0-2.13 1.4-2.2 2.87h4.27zM40.95 5.48c-1.14 0-2.02.27-2.67 1.11l-.18-1.11h-4.4V24l4.98-1.06.01-4.36c.67.49 1.64.84 2.74.84 2.77 0 5.3-2.22 5.3-7.13-.01-4.49-2.58-6.81-5.78-6.81zm-1.02 10.51c-.91 0-1.45-.32-1.83-.72l-.01-5.72c.4-.45.95-.77 1.84-.77 1.41 0 2.39 1.58 2.39 3.6 0 2.07-.97 3.61-2.39 3.61zM28.24 4.66l5-.93V.27l-5 .94v3.45zM28.24 5.61h5v14.08h-5V5.61zM23.13 6.75l-.31-1.14h-4.33v14.08h4.98V9.34c1.18-1.54 3.17-.91 3.79-.6V5.61c-.65-.24-3.02-.69-4.13 1.14zM13.69 1.94l-4.86 1.04-.02 12.88c0 2.38 1.79 4.13 4.17 4.13 1.32 0 2.29-.24 2.82-.53v-3.54c-.51.21-3.02.95-3.02-1.42V9.2h3.02V5.61H10.8l-.01-3.67h2.9zM4.17 10.01c0-.58.48-.8 1.26-.8 1.13 0 2.55.34 3.68.95V6.23A9.78 9.78 0 0 0 5.43 5.48c-2.9 0-4.83 1.51-4.83 4.04 0 3.94 5.43 3.31 5.43 5.01 0 .69-.6.91-1.44.91-1.24 0-2.83-.51-4.08-1.2v3.88c1.39.6 2.8.86 4.08.86 2.97 0 5.01-1.47 5.01-4.03-.01-4.26-5.46-3.5-5.43-5.09z"/>
          </svg>
        </div>
      </div>

      {/* Analytics upsell */}
      <div className="pt-3 border-t border-border">
        <button
          onClick={() => alert("Analytics subscription: $9/month\n\nIncludes scan tracking, geographic insights, device stats, and export reports.\n\nAdd your Stripe keys to enable payments.")}
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

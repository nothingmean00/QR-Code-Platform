"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Sparkles, TrendingUp, Check, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { PRICING_TIERS, formatPrice } from "@/lib/pricing"
import { PricingModal } from "@/components/pricing-modal"

interface DownloadOptionsProps {
  content: string
  disabled?: boolean
  fgColor?: string
  bgColor?: string
  onDownload?: () => void
}

export function DownloadOptions({ content, disabled, fgColor = "#000000", bgColor = "#ffffff", onDownload }: DownloadOptionsProps) {
  const [showPricing, setShowPricing] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string>("single")

  const handleDownloadClick = () => {
    if (!content || disabled) return
    setShowPricing(true)
  }

  const handleSelectTier = (tier: typeof PRICING_TIERS[0]) => {
    // In production, this would redirect to Stripe checkout
    // For now, show a message about connecting Stripe
    setSelectedTier(tier.id)
    alert(`Ready to integrate Stripe!\n\nTier: ${tier.name}\nPrice: ${formatPrice(tier.price)}\nQR Codes: ${tier.qrCount}\n\nAdd your Stripe keys to enable payments.`)
    setShowPricing(false)
  }

  const singleTier = PRICING_TIERS[0]
  const proTier = PRICING_TIERS.find(t => t.popular)

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
          <span>Download QR Code</span>
          <Badge variant="secondary" className="bg-white/20 text-white border-0 ml-1">
            {formatPrice(singleTier.price)}
          </Badge>
        </div>
      </Button>

      {/* Bundle upsell */}
      {proTier && (
        <button
          onClick={handleDownloadClick}
          disabled={disabled}
          className={cn(
            "w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all",
            "border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{proTier.name}</span>
                <Badge className="bg-green-100 text-green-700 text-[10px]">Save {proTier.savings}%</Badge>
              </div>
              <span className="text-xs text-muted-foreground">
                {proTier.qrCount} QR codes at {formatPrice(proTier.pricePerQr)} each
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-primary">{formatPrice(proTier.price)}</div>
          </div>
        </button>
      )}

      {/* Trust indicators */}
      <div className="flex items-center justify-center gap-4 pt-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          Secure payment
        </div>
        <div className="flex items-center gap-1">
          <Zap className="h-3 w-3" />
          Instant download
        </div>
        <div className="flex items-center gap-1">
          <Check className="h-3 w-3" />
          PNG & SVG
        </div>
      </div>

      {/* Analytics upsell */}
      <div className="pt-3 border-t border-border">
        <button
          onClick={handleDownloadClick}
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

      {/* Pricing Modal */}
      <PricingModal
        open={showPricing}
        onOpenChange={setShowPricing}
        onSelectTier={handleSelectTier}
      />
    </div>
  )
}

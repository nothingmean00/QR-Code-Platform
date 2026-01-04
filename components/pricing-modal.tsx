"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PRICING_TIERS, ANALYTICS_SUBSCRIPTION, formatPrice, type PricingTier } from "@/lib/pricing"
import { Check, Sparkles, TrendingUp, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelectTier: (tier: PricingTier) => void
}

export function PricingModal({ open, onOpenChange, onSelectTier }: PricingModalProps) {
  const [selectedTier, setSelectedTier] = useState<string>("pro")
  const [includeAnalytics, setIncludeAnalytics] = useState(false)

  const handlePurchase = () => {
    const tier = PRICING_TIERS.find(t => t.id === selectedTier)
    if (tier) {
      onSelectTier(tier)
    }
  }

  const selectedPricing = PRICING_TIERS.find(t => t.id === selectedTier)
  const total = (selectedPricing?.price || 0) + (includeAnalytics ? ANALYTICS_SUBSCRIPTION.price : 0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get Your QR Code
          </DialogTitle>
          <DialogDescription className="text-center">
            Professional, print-safe QR codes. Download instantly after purchase.
          </DialogDescription>
        </DialogHeader>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-4 py-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Shield className="h-3.5 w-3.5" />
            Secure checkout
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5" />
            Instant download
          </div>
          <div className="flex items-center gap-1">
            <Check className="h-3.5 w-3.5" />
            Print-ready quality
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
          {PRICING_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={cn(
                "relative flex flex-col items-center p-4 rounded-xl border-2 transition-all text-left",
                selectedTier === tier.id
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border hover:border-primary/50"
              )}
            >
              {tier.popular && (
                <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-[10px]">
                  BEST VALUE
                </Badge>
              )}
              {tier.savings && (
                <Badge variant="secondary" className="absolute -top-2.5 right-2 text-[10px] bg-green-100 text-green-700">
                  -{tier.savings}%
                </Badge>
              )}
              
              <div className="text-2xl font-bold">{tier.qrCount}</div>
              <div className="text-xs text-muted-foreground mb-2">
                {tier.qrCount === 1 ? "QR code" : "QR codes"}
              </div>
              <div className="text-lg font-semibold text-primary">
                {formatPrice(tier.price)}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {formatPrice(tier.pricePerQr)}/each
              </div>
            </button>
          ))}
        </div>

        {/* Analytics upsell */}
        <button
          onClick={() => setIncludeAnalytics(!includeAnalytics)}
          className={cn(
            "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all",
            includeAnalytics
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          )}
        >
          <div className={cn(
            "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
            includeAnalytics ? "bg-primary border-primary" : "border-muted-foreground"
          )}>
            {includeAnalytics && <Check className="h-3 w-3 text-primary-foreground" />}
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-medium">Add Analytics</span>
              <Badge variant="outline" className="text-[10px]">+{formatPrice(ANALYTICS_SUBSCRIPTION.price)}/mo</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Track scans, locations, devices & more for all your QR codes
            </p>
          </div>
        </button>

        {/* Summary & CTA */}
        <div className="bg-muted/50 rounded-xl p-4 mt-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              {selectedPricing?.qrCount} QR code{selectedPricing?.qrCount !== 1 ? "s" : ""}
              {includeAnalytics && " + Analytics"}
            </span>
            <div className="text-right">
              <span className="text-2xl font-bold">{formatPrice(total)}</span>
              {includeAnalytics && <span className="text-xs text-muted-foreground block">then $9/mo</span>}
            </div>
          </div>
          
          <Button 
            className="w-full h-12 text-base gap-2" 
            size="lg"
            onClick={handlePurchase}
          >
            <Sparkles className="h-4 w-4" />
            Purchase & Download
          </Button>
          
          <p className="text-[10px] text-center text-muted-foreground mt-3">
            Secure payment via Stripe. Instant download after purchase.
          </p>
        </div>

        {/* What you get */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs font-medium mb-2">Every QR code includes:</p>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-primary" />
              PNG & SVG formats
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-primary" />
              Print-safe resolution
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-primary" />
              Level H error correction
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-primary" />
              Custom colors
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

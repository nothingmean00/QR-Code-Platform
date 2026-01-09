export interface PricingTier {
  id: string
  name: string
  price: number
  description: string
}

export const SINGLE_DOWNLOAD_PRICE = 4.97
export const ORIGINAL_PRICE = 9.99

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "single",
    name: "Single QR Code",
    price: SINGLE_DOWNLOAD_PRICE,
    description: "High-res PNG, SVG & PDF formats",
  },
]

export const ANALYTICS_SUBSCRIPTION = {
  id: "analytics",
  name: "Analytics",
  price: 9,
  interval: "month" as const,
  features: [
    "Scan tracking for all QR codes",
    "Location & device data",
    "Time-based analytics",
    "Export reports",
  ],
}

export function getPricingTier(id: string): PricingTier | undefined {
  return PRICING_TIERS.find(tier => tier.id === id)
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

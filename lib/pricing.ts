export interface PricingTier {
  id: string
  name: string
  qrCount: number
  price: number
  pricePerQr: number
  savings?: number
  popular?: boolean
  description: string
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "single",
    name: "Single",
    qrCount: 1,
    price: 4.99,
    pricePerQr: 4.99,
    description: "Perfect for a one-time project",
  },
  {
    id: "starter",
    name: "Starter Pack",
    qrCount: 3,
    price: 9.99,
    pricePerQr: 3.33,
    savings: 33,
    description: "Great for small businesses",
  },
  {
    id: "pro",
    name: "Pro Pack",
    qrCount: 10,
    price: 24.99,
    pricePerQr: 2.50,
    savings: 50,
    popular: true,
    description: "Best value for growing businesses",
  },
  {
    id: "business",
    name: "Business Pack",
    qrCount: 25,
    price: 49.99,
    pricePerQr: 2.00,
    savings: 60,
    description: "For teams and agencies",
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

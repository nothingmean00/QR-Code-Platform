import Stripe from 'stripe'

// Lazy initialization to avoid build-time errors
let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
    }
    stripeInstance = new Stripe(secretKey, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    })
  }
  return stripeInstance
}

export const PRODUCTS = {
  QR_DOWNLOAD: {
    name: 'QR Code Download',
    description: 'High-resolution QR code in PNG (4096px), SVG, and PDF formats',
    price: 497, // $4.97 in cents
  },
  ANALYTICS_SUBSCRIPTION: {
    name: 'QR Analytics',
    description: 'Monthly scan tracking, geographic insights, and detailed reports',
    price: 900, // $9.00 in cents
  },
}

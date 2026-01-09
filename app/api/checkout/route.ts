import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PRODUCTS } from '@/lib/stripe'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://generateqrcode.org'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { qrData, product = 'QR_DOWNLOAD' } = body

    if (!qrData) {
      return NextResponse.json(
        { error: 'QR data is required' },
        { status: 400 }
      )
    }

    const productInfo = PRODUCTS[product as keyof typeof PRODUCTS]
    if (!productInfo) {
      return NextResponse.json(
        { error: 'Invalid product' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productInfo.name,
              description: productInfo.description,
            },
            unit_amount: productInfo.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/?canceled=true`,
      metadata: {
        qrData: JSON.stringify(qrData),
        product,
      },
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

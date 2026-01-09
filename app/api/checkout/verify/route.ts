import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json(
      { error: 'Session ID is required' },
      { status: 400 }
    )
  }

  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      )
    }

    // Get QR data from metadata
    const qrDataStr = session.metadata?.qrData
    if (!qrDataStr) {
      return NextResponse.json(
        { error: 'QR data not found' },
        { status: 400 }
      )
    }

    const qrData = JSON.parse(qrDataStr)

    return NextResponse.json({
      success: true,
      qrData,
      customerEmail: session.customer_details?.email,
    })
  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json(
      { error: 'Failed to verify session' },
      { status: 500 }
    )
  }
}

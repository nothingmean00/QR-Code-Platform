"use client"

import { useEffect, useState, Suspense, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Download, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import QRCode from 'qrcode'

interface QRData {
  content: string
  fgColor?: string
  bgColor?: string
  logo?: string | null
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [qrData, setQrData] = useState<QRData | null>(null)
  const [downloading, setDownloading] = useState<string | null>(null)

  useEffect(() => {
    async function verifySession() {
      if (!sessionId) {
        setError('No session ID found')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/checkout/verify?session_id=${sessionId}`)
        const data = await response.json()

        if (data.success && data.qrData) {
          setQrData(data.qrData)
        } else {
          setError(data.error || 'Failed to verify payment')
        }
      } catch (err) {
        console.error('Verification error:', err)
        setError('Failed to verify payment')
      } finally {
        setLoading(false)
      }
    }

    verifySession()
  }, [sessionId])

  const downloadPNG = useCallback(async () => {
    if (!qrData) return
    setDownloading('png')
    
    try {
      const dataUrl = await QRCode.toDataURL(qrData.content, {
        width: 4096,
        margin: 2,
        color: {
          dark: qrData.fgColor || '#000000',
          light: qrData.bgColor || '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      })

      // If there's a logo, composite it
      if (qrData.logo) {
        const canvas = document.createElement('canvas')
        canvas.width = 4096
        canvas.height = 4096
        const ctx = canvas.getContext('2d')
        if (ctx) {
          // Draw QR code
          const qrImg = new Image()
          qrImg.src = dataUrl
          await new Promise(resolve => { qrImg.onload = resolve })
          ctx.drawImage(qrImg, 0, 0)

          // Draw logo
          const logoImg = new Image()
          logoImg.src = qrData.logo
          await new Promise(resolve => { logoImg.onload = resolve })
          const logoSize = 4096 * 0.2
          const logoX = (4096 - logoSize) / 2
          const logoY = (4096 - logoSize) / 2
          
          // White background for logo
          ctx.fillStyle = '#FFFFFF'
          ctx.fillRect(logoX - 20, logoY - 20, logoSize + 40, logoSize + 40)
          ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize)

          const finalDataUrl = canvas.toDataURL('image/png')
          triggerDownload(finalDataUrl, 'qr-code-4096px.png')
        }
      } else {
        triggerDownload(dataUrl, 'qr-code-4096px.png')
      }
    } catch (err) {
      console.error('PNG download error:', err)
      alert('Failed to generate PNG')
    } finally {
      setDownloading(null)
    }
  }, [qrData])

  const downloadSVG = useCallback(async () => {
    if (!qrData) return
    setDownloading('svg')
    
    try {
      const svgString = await QRCode.toString(qrData.content, {
        type: 'svg',
        margin: 2,
        color: {
          dark: qrData.fgColor || '#000000',
          light: qrData.bgColor || '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      })

      const blob = new Blob([svgString], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      triggerDownload(url, 'qr-code.svg')
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('SVG download error:', err)
      alert('Failed to generate SVG')
    } finally {
      setDownloading(null)
    }
  }, [qrData])

  const downloadPDF = useCallback(async () => {
    if (!qrData) return
    setDownloading('pdf')
    
    try {
      // Generate high-res PNG first
      const dataUrl = await QRCode.toDataURL(qrData.content, {
        width: 2048,
        margin: 2,
        color: {
          dark: qrData.fgColor || '#000000',
          light: qrData.bgColor || '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      })

      // Create a simple PDF with the QR code
      // Using a basic PDF structure
      const img = new Image()
      img.src = dataUrl
      await new Promise(resolve => { img.onload = resolve })

      // Create canvas for PDF
      const canvas = document.createElement('canvas')
      const pdfWidth = 595 // A4 width in points
      const pdfHeight = 842 // A4 height in points
      canvas.width = pdfWidth
      canvas.height = pdfHeight
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        // White background
        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(0, 0, pdfWidth, pdfHeight)
        
        // Draw QR code centered
        const qrSize = 400
        const x = (pdfWidth - qrSize) / 2
        const y = (pdfHeight - qrSize) / 2
        ctx.drawImage(img, x, y, qrSize, qrSize)
        
        // For now, download as high-quality PNG (PDF requires a library)
        const finalDataUrl = canvas.toDataURL('image/png', 1.0)
        triggerDownload(finalDataUrl, 'qr-code-print.png')
      }
    } catch (err) {
      console.error('PDF download error:', err)
      alert('Failed to generate PDF')
    } finally {
      setDownloading(null)
    }
  }, [qrData])

  function triggerDownload(dataUrl: string, filename: string) {
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Verifying your payment...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Link href="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Generator
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground">
              Your QR code is ready to download
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <Button 
              className="w-full gap-2" 
              size="lg"
              onClick={downloadPNG}
              disabled={downloading !== null}
            >
              {downloading === 'png' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Download className="h-5 w-5" />
              )}
              Download PNG (4096px)
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={downloadSVG}
                disabled={downloading !== null}
              >
                {downloading === 'svg' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                SVG
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={downloadPDF}
                disabled={downloading !== null}
              >
                {downloading === 'pdf' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                PDF
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground mb-4">
            <p>You can download your QR code multiple times.</p>
            <p className="mt-1">Bookmark this page to access later.</p>
          </div>

          <Link href="/" className="block">
            <Button variant="ghost" className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Create Another QR Code
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

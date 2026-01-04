"use client"

import { useEffect, useRef, useState } from "react"
import QRCodeLib from "qrcode"
import { cn } from "@/lib/utils"
import { Loader2, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QRPreviewProps {
  content: string
  size?: number
  className?: string
  fgColor?: string
  bgColor?: string
}

export function QRPreview({
  content,
  size = 280,
  className,
  fgColor = "#000000",
  bgColor = "#ffffff",
}: QRPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (!content || content.trim() === "") {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, size, size)

        // Draw subtle grid pattern
        ctx.strokeStyle = fgColor === "#000000" ? "#e5e5e5" : "#333333"
        ctx.lineWidth = 1
        const gridSize = 20
        for (let i = 0; i <= size; i += gridSize) {
          ctx.beginPath()
          ctx.moveTo(i, 0)
          ctx.lineTo(i, size)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(0, i)
          ctx.lineTo(size, i)
          ctx.stroke()
        }

        ctx.fillStyle = fgColor === "#000000" ? "#a3a3a3" : "#666666"
        ctx.font = "500 14px Inter, system-ui, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("Enter content to", size / 2, size / 2 - 10)
        ctx.fillText("generate QR code", size / 2, size / 2 + 10)
      }
      setError(null)
      return
    }

    setLoading(true)
    QRCodeLib.toCanvas(canvas, content, {
      width: size,
      margin: 2,
      color: {
        dark: fgColor,
        light: bgColor,
      },
      errorCorrectionLevel: "H",
    })
      .then(() => {
        setError(null)
        setLoading(false)
      })
      .catch(() => {
        setError("Content too long for QR code")
        setLoading(false)
      })
  }, [content, size, fgColor, bgColor])

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2))
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5))

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div
        className="relative bg-card rounded-2xl p-6 border border-border shadow-sm overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${bgColor}08 0%, ${bgColor}15 100%)`,
        }}
      >
        <div className="absolute top-2 right-2 flex gap-1 z-20">
          <Button
            variant="secondary"
            size="icon"
            className="h-7 w-7 rounded-md"
            onClick={handleZoomOut}
            disabled={zoom <= 0.5}
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-7 w-7 rounded-md"
            onClick={handleZoomIn}
            disabled={zoom >= 2}
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>
        </div>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/80 rounded-2xl z-10">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}
        <div
          className="transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
        >
          <canvas
            ref={canvasRef}
            width={size}
            height={size}
            className={cn("rounded-lg transition-opacity duration-200", loading && "opacity-50")}
          />
        </div>
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/95 rounded-2xl">
            <p className="text-sm text-destructive text-center px-4 font-medium">{error}</p>
          </div>
        )}

        {content && !error && (
          <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-foreground/10 backdrop-blur-sm">
            <span className="text-[10px] font-medium text-foreground/70">{Math.round(zoom * 100)}%</span>
          </div>
        )}
      </div>
    </div>
  )
}

export async function generateQRDataURL(
  content: string,
  size = 1024,
  fgColor = "#000000",
  bgColor = "#ffffff",
): Promise<string> {
  if (!content) throw new Error("No content provided")

  return QRCodeLib.toDataURL(content, {
    width: size,
    margin: 2,
    color: {
      dark: fgColor,
      light: bgColor,
    },
    errorCorrectionLevel: "H",
  })
}

export async function generateQRSVG(content: string, fgColor = "#000000", bgColor = "#ffffff"): Promise<string> {
  if (!content) throw new Error("No content provided")

  return QRCodeLib.toString(content, {
    type: "svg",
    margin: 2,
    color: {
      dark: fgColor,
      light: bgColor,
    },
    errorCorrectionLevel: "H",
  })
}

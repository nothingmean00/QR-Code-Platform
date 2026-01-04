"use client"

import { useState, useMemo } from "react"
import { QRTypeSelector } from "@/components/qr-type-selector"
import { QRFormFields } from "@/components/qr-form-fields"
import { QRPreview } from "@/components/qr-preview"
import { DownloadOptions } from "@/components/download-options"
import { QRCustomization } from "@/components/qr-customization"
import { QRHistory, useQRHistory, type HistoryItem } from "@/components/qr-history"
import { QRTemplates } from "@/components/qr-templates"
import { type QRType, type QRPayload, generateQRContent, getDefaultPayload } from "@/lib/qr-types"
import { Card, CardContent } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"
import { Info, Sparkles } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function QRGenerator() {
  const [qrType, setQrType] = useState<QRType>("url")
  const [payload, setPayload] = useState<QRPayload>(getDefaultPayload("url"))
  const [fgColor, setFgColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")

  const { addToHistory } = useQRHistory()

  const handleTypeChange = (type: QRType) => {
    setQrType(type)
    setPayload(getDefaultPayload(type))
  }

  const handleTemplateSelect = (type: QRType, templatePayload: QRPayload) => {
    setQrType(type)
    setPayload(templatePayload)
  }

  const qrContent = useMemo(() => generateQRContent(qrType, payload), [qrType, payload])
  const hasContent = qrContent.trim().length > 0

  const contentSize = new Blob([qrContent]).size

  const getHistoryLabel = (): string => {
    switch (qrType) {
      case "url":
        return (payload as { url: string }).url?.slice(0, 50) || "URL"
      case "wifi":
        return (payload as { ssid: string }).ssid || "WiFi"
      case "text":
        return (payload as { text: string }).text?.slice(0, 50) || "Text"
      case "vcard":
        const vc = payload as { firstName: string; lastName: string }
        return `${vc.firstName} ${vc.lastName}`.trim() || "Contact"
      case "email":
        return (payload as { to: string }).to || "Email"
      case "phone":
        return (payload as { phone: string }).phone || "Phone"
      default:
        return qrType.replace("_", " ")
    }
  }

  const handleDownload = () => {
    if (hasContent) {
      addToHistory(qrType, qrContent, getHistoryLabel(), fgColor, bgColor)
    }
  }

  const handleHistorySelect = (item: HistoryItem) => {
    setQrType(item.type)
    if (item.type === "url") {
      setPayload({ url: item.content })
    } else if (item.type === "text") {
      setPayload({ text: item.content })
    }
  }

  return (
    <TooltipProvider>
      <div className="w-full max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            QR Code Generator
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Start creating in seconds
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Choose a template or enter your own content
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <QRTemplates onSelect={handleTemplateSelect} />
        </div>

        {/* Mobile: Stack preview on top */}
        <div className="flex flex-col lg:hidden gap-6 mb-6">
          {/* QR Preview Card - Mobile */}
          <Card className="overflow-hidden border-border/50 shadow-xl shadow-black/5">
            <CardContent className="p-4 sm:p-6">
              <QRPreview content={qrContent} size={280} fgColor={fgColor} bgColor={bgColor} />

              {hasContent && (
                <div className="flex items-center justify-center gap-2 flex-wrap mt-4 pt-4 border-t border-border/50">
                  <Badge variant="secondary" className="text-xs font-normal rounded-full">
                    {contentSize} bytes
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-normal capitalize rounded-full">
                    {qrType.replace("_", " ")}
                  </Badge>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="text-xs font-normal cursor-help rounded-full">
                        <Info className="h-3 w-3 mr-1" />
                        Level H
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-48">
                        Highest error correction. Recovers data even if 30% of the QR code is damaged.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              )}

              <div className="mt-4 sm:mt-6">
                <DownloadOptions content={qrContent} disabled={!hasContent} fgColor={fgColor} bgColor={bgColor} onDownload={handleDownload} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-[1fr,420px] gap-6 lg:gap-12">
          {/* Left Column - Input */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
              <QRHistory onSelect={handleHistorySelect} />
              <QRCustomization
                fgColor={fgColor}
                bgColor={bgColor}
                onFgColorChange={setFgColor}
                onBgColorChange={setBgColor}
              />
            </div>

            <Card className="overflow-hidden border-border/50 shadow-xl shadow-black/5">
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                <QRTypeSelector selected={qrType} onSelect={handleTypeChange} />
                <div className="border-t border-border/50 pt-4 sm:pt-6">
                  <QRFormFields type={qrType} payload={payload} onChange={setPayload} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview & Download (Desktop only) */}
          <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start space-y-6">
            <Card className="overflow-hidden border-border/50 shadow-xl shadow-black/5">
              <CardContent className="p-6 md:p-8">
                <QRPreview content={qrContent} size={340} fgColor={fgColor} bgColor={bgColor} />

                {hasContent && (
                  <div className="flex items-center justify-center gap-2 flex-wrap mt-6 pt-6 border-t border-border/50">
                    <Badge variant="secondary" className="text-xs font-normal rounded-full">
                      {contentSize} bytes
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-normal capitalize rounded-full">
                      {qrType.replace("_", " ")}
                    </Badge>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="outline" className="text-xs font-normal cursor-help rounded-full">
                          <Info className="h-3 w-3 mr-1" />
                          Level H
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-48">
                          Highest error correction. Recovers data even if 30% of the QR code is damaged.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}

                <div className="mt-6">
                  <DownloadOptions content={qrContent} disabled={!hasContent} fgColor={fgColor} bgColor={bgColor} onDownload={handleDownload} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}

"use client"

import { useRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RotateCcw, Pipette, ImagePlus, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface QRCustomizationProps {
  fgColor: string
  bgColor: string
  logo: string | null
  onFgColorChange: (color: string) => void
  onBgColorChange: (color: string) => void
  onLogoChange: (logo: string | null) => void
}

const PRESET_COLORS = [
  { fg: "#000000", bg: "#ffffff", label: "Classic" },
  { fg: "#1a1a2e", bg: "#eef0f2", label: "Slate" },
  { fg: "#2d3436", bg: "#dfe6e9", label: "Steel" },
  { fg: "#0c3547", bg: "#f8f9fa", label: "Navy" },
  { fg: "#1e3a5f", bg: "#f0f4f8", label: "Ocean" },
  { fg: "#2c2c2c", bg: "#f5f5dc", label: "Cream" },
  { fg: "#1a1a1a", bg: "#fafad2", label: "Lemon" },
  { fg: "#191919", bg: "#ffe4e1", label: "Blush" },
]

const SINGLE_COLORS = [
  "#000000",
  "#1a1a1a",
  "#2d3436",
  "#0c3547",
  "#1e3a5f",
  "#2c3e50",
  "#34495e",
  "#4a4a4a",
  "#ffffff",
  "#f8f9fa",
  "#f0f4f8",
  "#eef0f2",
  "#dfe6e9",
  "#f5f5dc",
  "#fafad2",
  "#ffe4e1",
]

export function QRCustomization({ fgColor, bgColor, logo, onFgColorChange, onBgColorChange, onLogoChange }: QRCustomizationProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    onFgColorChange("#000000")
    onBgColorChange("#ffffff")
    onLogoChange(null)
  }

  const swapColors = () => {
    const temp = fgColor
    onFgColorChange(bgColor)
    onBgColorChange(temp)
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Logo must be under 2MB")
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        onLogoChange(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm border border-border" style={{ backgroundColor: fgColor }} />
            <div className="w-3 h-3 rounded-sm border border-border" style={{ backgroundColor: bgColor }} />
            {logo && <ImagePlus className="h-3 w-3 text-primary" />}
          </div>
          {logo ? "Colors + Logo" : "Colors"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">QR Colors</h4>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={swapColors} className="h-7 px-2 text-xs">
                <Pipette className="h-3 w-3 mr-1" />
                Swap
              </Button>
              <Button variant="ghost" size="sm" onClick={reset} className="h-7 px-2 text-xs">
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>

          <Tabs defaultValue="presets" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="presets" className="flex-1 text-xs">
                Presets
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex-1 text-xs">
                Custom
              </TabsTrigger>
              <TabsTrigger value="logo" className="flex-1 text-xs">
                Logo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="presets" className="mt-3 space-y-3">
              <div className="grid grid-cols-4 gap-2">
                {PRESET_COLORS.map((preset) => {
                  const isActive = fgColor === preset.fg && bgColor === preset.bg
                  return (
                    <button
                      key={preset.label}
                      onClick={() => {
                        onFgColorChange(preset.fg)
                        onBgColorChange(preset.bg)
                      }}
                      className={cn(
                        "flex flex-col items-center gap-1.5 p-2 rounded-lg border transition-all",
                        isActive ? "border-foreground bg-accent" : "border-border hover:bg-accent/50",
                      )}
                      title={preset.label}
                    >
                      <div
                        className="w-8 h-8 rounded-md border border-border/50 flex items-center justify-center"
                        style={{ backgroundColor: preset.bg }}
                      >
                        <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: preset.fg }} />
                      </div>
                      <span className="text-[10px] font-medium">{preset.label}</span>
                    </button>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-3 space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-xs">Foreground (QR pattern)</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={fgColor}
                      onChange={(e) => onFgColorChange(e.target.value)}
                      className="w-12 h-9 p-1 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={fgColor}
                      onChange={(e) => onFgColorChange(e.target.value)}
                      className="flex-1 h-9 font-mono text-xs uppercase"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {SINGLE_COLORS.slice(0, 8).map((color) => (
                      <button
                        key={color}
                        onClick={() => onFgColorChange(color)}
                        className={cn(
                          "w-6 h-6 rounded border transition-all",
                          fgColor === color ? "ring-2 ring-foreground ring-offset-1" : "border-border",
                        )}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs">Background</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={bgColor}
                      onChange={(e) => onBgColorChange(e.target.value)}
                      className="w-12 h-9 p-1 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={bgColor}
                      onChange={(e) => onBgColorChange(e.target.value)}
                      className="flex-1 h-9 font-mono text-xs uppercase"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {SINGLE_COLORS.slice(8).map((color) => (
                      <button
                        key={color}
                        onClick={() => onBgColorChange(color)}
                        className={cn(
                          "w-6 h-6 rounded border transition-all",
                          bgColor === color ? "ring-2 ring-foreground ring-offset-1" : "border-border",
                        )}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-muted-foreground">
                Tip: Maintain high contrast between foreground and background for reliable scanning.
              </p>
            </TabsContent>

            <TabsContent value="logo" className="mt-3 space-y-4">
              <div className="space-y-3">
                <Label className="text-xs">Upload Logo</Label>
                <p className="text-[10px] text-muted-foreground">
                  Add your logo to the center of the QR code. Works best with square images.
                </p>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                
                {logo ? (
                  <div className="relative">
                    <div className="w-full aspect-square max-w-[120px] mx-auto rounded-lg border border-border overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={logo} 
                        alt="Logo preview" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onLogoChange(null)}
                      className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full h-24 flex flex-col gap-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <ImagePlus className="h-6 w-6 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Click to upload logo</span>
                  </Button>
                )}

                {logo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <ImagePlus className="h-3 w-3 mr-2" />
                    Change Logo
                  </Button>
                )}

                <p className="text-[10px] text-muted-foreground">
                  PNG, JPG, SVG, or WebP. Max 2MB. Logo covers up to 20% of QR — still scannable thanks to Level H error correction.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  )
}

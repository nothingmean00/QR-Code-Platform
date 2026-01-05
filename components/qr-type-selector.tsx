"use client"

import type React from "react"
import { QR_TYPES, type QRType } from "@/lib/qr-types"
import { cn } from "@/lib/utils"
import {
  Link,
  Wifi,
  Type,
  User,
  MessageCircle,
  Camera,
  Star,
  Mail,
  Smartphone,
  Phone,
  MapPin,
  Calendar,
  Twitter,
  Youtube,
  Music,
  DollarSign,
} from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  link: Link,
  wifi: Wifi,
  text: Type,
  user: User,
  message: MessageCircle,
  camera: Camera,
  instagram: Camera,
  star: Star,
  mail: Mail,
  smartphone: Smartphone,
  phone: Phone,
  map: MapPin,
  calendar: Calendar,
  twitter: Twitter,
  youtube: Youtube,
  music: Music,
  dollar: DollarSign,
}

interface QRTypeSelectorProps {
  selected: QRType
  onSelect: (type: QRType) => void
}

export function QRTypeSelector({ selected, onSelect }: QRTypeSelectorProps) {
  const [category, setCategory] = useState<"all" | "basic" | "social" | "business">("all")

  const filteredTypes = category === "all" ? QR_TYPES : QR_TYPES.filter((t) => t.category === category)

  const categoryCount = {
    all: QR_TYPES.length,
    basic: QR_TYPES.filter((t) => t.category === "basic").length,
    social: QR_TYPES.filter((t) => t.category === "social").length,
    business: QR_TYPES.filter((t) => t.category === "business").length,
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <label className="text-sm font-medium text-foreground">QR Type</label>
        <div role="tablist" aria-label="QR code categories" className="bg-muted text-muted-foreground inline-flex h-8 w-fit items-center justify-center rounded-lg p-[3px]">
          {(["all", "basic", "social", "business"] as const).map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              aria-controls={`qr-types-panel`}
              onClick={() => setCategory(cat)}
              className={cn(
                "inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors",
                category === cat
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              {cat === "all" && (
                <Badge variant="secondary" className="h-4 px-1 text-[10px] rounded">
                  {categoryCount.all}
                </Badge>
              )}
            </button>
          ))}
        </div>
      </div>

      <div id="qr-types-panel" role="tabpanel" aria-label="QR code types" className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {filteredTypes.map((type) => {
          const Icon = ICONS[type.icon]
          const isSelected = selected === type.id
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={cn(
                "group relative flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200 text-sm",
                "hover:border-foreground/20 hover:bg-accent/50 hover:scale-[1.02]",
                isSelected
                  ? "border-foreground bg-foreground text-background shadow-sm scale-[1.02]"
                  : "border-border text-muted-foreground",
              )}
            >
              <Icon
                className={cn("h-5 w-5 transition-transform group-hover:scale-110", isSelected && "text-background")}
              />
              <span className={cn("font-medium text-xs", isSelected ? "text-background" : "text-foreground")}>
                {type.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Sparkles } from "lucide-react"
import type { QRType, QRPayload } from "@/lib/qr-types"

interface Template {
  id: string
  label: string
  description: string
  type: QRType
  payload: QRPayload
}

const templates: Template[] = [
  {
    id: "portfolio",
    label: "Portfolio",
    description: "Link to your work",
    type: "url",
    payload: { url: "https://yourportfolio.com" },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Professional profile",
    type: "url",
    payload: { url: "https://linkedin.com/in/yourprofile" },
  },
  {
    id: "wifi-guest",
    label: "Guest WiFi",
    description: "Share network access",
    type: "wifi",
    payload: { ssid: "Guest Network", password: "", encryption: "WPA" as const, hidden: false },
  },
  {
    id: "business-card",
    label: "Business Card",
    description: "Contact info",
    type: "vcard",
    payload: { firstName: "", lastName: "", email: "", phone: "", company: "", title: "", website: "" },
  },
  {
    id: "menu",
    label: "Menu",
    description: "Restaurant/cafe menu",
    type: "url",
    payload: { url: "https://yourdomain.com/menu" },
  },
  {
    id: "feedback",
    label: "Feedback Form",
    description: "Collect responses",
    type: "url",
    payload: { url: "https://forms.google.com/..." },
  },
  {
    id: "appointment",
    label: "Book Appointment",
    description: "Scheduling link",
    type: "url",
    payload: { url: "https://calendly.com/yourname" },
  },
  {
    id: "whatsapp-support",
    label: "WhatsApp Support",
    description: "Customer service",
    type: "whatsapp",
    payload: { phone: "", message: "Hi, I need help with..." },
  },
]

interface QRTemplatesProps {
  onSelect: (type: QRType, payload: QRPayload) => void
}

export function QRTemplates({ onSelect }: QRTemplatesProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <Sparkles className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium text-muted-foreground">Quick templates</span>
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2 pb-2">
          {templates.map((template) => (
            <Button
              key={template.id}
              variant="outline"
              size="sm"
              className="flex-shrink-0 h-auto py-2 px-3 bg-transparent"
              onClick={() => onSelect(template.type, template.payload)}
            >
              <div className="text-left">
                <div className="font-medium text-xs">{template.label}</div>
                <div className="text-[10px] text-muted-foreground">{template.description}</div>
              </div>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

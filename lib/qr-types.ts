export type QRType =
  | "url"
  | "wifi"
  | "text"
  | "vcard"
  | "whatsapp"
  | "instagram"
  | "google_review"
  | "email"
  | "sms"
  | "phone"
  | "location"
  | "event"
  | "twitter"
  | "youtube"
  | "spotify"
  | "paypal"

export interface QRTypeConfig {
  id: QRType
  label: string
  description: string
  icon: string
  category: "basic" | "social" | "business"
}

export const QR_TYPES: QRTypeConfig[] = [
  // Basic
  { id: "url", label: "URL", description: "Link to any website", icon: "link", category: "basic" },
  { id: "text", label: "Text", description: "Plain text message", icon: "text", category: "basic" },
  { id: "wifi", label: "WiFi", description: "Share network credentials", icon: "wifi", category: "basic" },
  { id: "email", label: "Email", description: "Compose an email", icon: "mail", category: "basic" },
  { id: "sms", label: "SMS", description: "Send a text message", icon: "smartphone", category: "basic" },
  { id: "phone", label: "Phone", description: "Make a phone call", icon: "phone", category: "basic" },
  // Social
  { id: "whatsapp", label: "WhatsApp", description: "Start a chat", icon: "message", category: "social" },
  { id: "instagram", label: "Instagram", description: "Profile link", icon: "camera", category: "social" },
  { id: "twitter", label: "X / Twitter", description: "Profile or tweet", icon: "twitter", category: "social" },
  { id: "youtube", label: "YouTube", description: "Channel or video", icon: "youtube", category: "social" },
  { id: "spotify", label: "Spotify", description: "Track or playlist", icon: "music", category: "social" },
  // Business
  { id: "vcard", label: "vCard", description: "Contact information", icon: "user", category: "business" },
  { id: "google_review", label: "Google Review", description: "Business reviews", icon: "star", category: "business" },
  { id: "location", label: "Location", description: "Map coordinates", icon: "map", category: "business" },
  { id: "event", label: "Event", description: "Calendar event", icon: "calendar", category: "business" },
  { id: "paypal", label: "PayPal", description: "Payment link", icon: "dollar", category: "business" },
]

export interface TwitterPayload {
  username: string
  tweetText: string
}

export interface YouTubePayload {
  url: string
}

export interface SpotifyPayload {
  url: string
}

export interface PayPalPayload {
  email: string
  amount: string
  currency: string
  description: string
}

export type QRPayload =
  | URLPayload
  | WiFiPayload
  | TextPayload
  | VCardPayload
  | WhatsAppPayload
  | InstagramPayload
  | GoogleReviewPayload
  | EmailPayload
  | SMSPayload
  | PhonePayload
  | LocationPayload
  | EventPayload
  | TwitterPayload
  | YouTubePayload
  | SpotifyPayload
  | PayPalPayload

export interface URLPayload {
  url: string
}

export interface WiFiPayload {
  ssid: string
  password: string
  encryption: "WPA" | "WEP" | "nopass"
  hidden: boolean
}

export interface TextPayload {
  text: string
}

export interface VCardPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  title: string
  website: string
}

export interface WhatsAppPayload {
  phone: string
  message: string
}

export interface InstagramPayload {
  username: string
}

export interface GoogleReviewPayload {
  placeId: string
}

export interface EmailPayload {
  to: string
  subject: string
  body: string
}

export interface SMSPayload {
  phone: string
  message: string
}

export interface PhonePayload {
  phone: string
}

export interface LocationPayload {
  latitude: string
  longitude: string
  label: string
}

export interface EventPayload {
  title: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export function generateQRContent(type: QRType, payload: QRPayload): string {
  switch (type) {
    case "url":
      return (payload as URLPayload).url || ""

    case "wifi": {
      const wifi = payload as WiFiPayload
      const hidden = wifi.hidden ? "H:true" : ""
      return `WIFI:T:${wifi.encryption};S:${wifi.ssid};P:${wifi.password};${hidden};`
    }

    case "text":
      return (payload as TextPayload).text || ""

    case "vcard": {
      const vc = payload as VCardPayload
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${vc.lastName};${vc.firstName}`,
        `FN:${vc.firstName} ${vc.lastName}`,
        vc.email ? `EMAIL:${vc.email}` : "",
        vc.phone ? `TEL:${vc.phone}` : "",
        vc.company ? `ORG:${vc.company}` : "",
        vc.title ? `TITLE:${vc.title}` : "",
        vc.website ? `URL:${vc.website}` : "",
        "END:VCARD",
      ]
        .filter(Boolean)
        .join("\n")
    }

    case "whatsapp": {
      const wa = payload as WhatsAppPayload
      const phone = wa.phone.replace(/\D/g, "")
      const msg = encodeURIComponent(wa.message || "")
      return `https://wa.me/${phone}${msg ? `?text=${msg}` : ""}`
    }

    case "instagram": {
      const ig = payload as InstagramPayload
      return `https://instagram.com/${ig.username.replace("@", "")}`
    }

    case "google_review": {
      const gr = payload as GoogleReviewPayload
      return `https://search.google.com/local/writereview?placeid=${gr.placeId}`
    }

    case "email": {
      const em = payload as EmailPayload
      const params = []
      if (em.subject) params.push(`subject=${encodeURIComponent(em.subject)}`)
      if (em.body) params.push(`body=${encodeURIComponent(em.body)}`)
      return `mailto:${em.to}${params.length ? `?${params.join("&")}` : ""}`
    }

    case "sms": {
      const sms = payload as SMSPayload
      const phone = sms.phone.replace(/\D/g, "")
      return `sms:${phone}${sms.message ? `?body=${encodeURIComponent(sms.message)}` : ""}`
    }

    case "phone": {
      const ph = payload as PhonePayload
      return `tel:${ph.phone.replace(/\D/g, "")}`
    }

    case "location": {
      const loc = payload as LocationPayload
      if (!loc.latitude || !loc.longitude) return ""
      const label = loc.label ? `(${encodeURIComponent(loc.label)})` : ""
      return `geo:${loc.latitude},${loc.longitude}?q=${loc.latitude},${loc.longitude}${label}`
    }

    case "event": {
      const ev = payload as EventPayload
      if (!ev.title || !ev.startDate) return ""
      const formatDate = (d: string) => d.replace(/[-:]/g, "").replace(".000", "")
      return [
        "BEGIN:VEVENT",
        `SUMMARY:${ev.title}`,
        ev.location ? `LOCATION:${ev.location}` : "",
        `DTSTART:${formatDate(ev.startDate)}`,
        ev.endDate ? `DTEND:${formatDate(ev.endDate)}` : "",
        ev.description ? `DESCRIPTION:${ev.description}` : "",
        "END:VEVENT",
      ]
        .filter(Boolean)
        .join("\n")
    }

    case "twitter": {
      const tw = payload as TwitterPayload
      if (tw.tweetText) {
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tw.tweetText)}`
      }
      return `https://twitter.com/${tw.username.replace("@", "")}`
    }

    case "youtube": {
      const yt = payload as YouTubePayload
      return yt.url || ""
    }

    case "spotify": {
      const sp = payload as SpotifyPayload
      return sp.url || ""
    }

    case "paypal": {
      const pp = payload as PayPalPayload
      if (!pp.email) return ""
      let url = `https://www.paypal.com/paypalme/${pp.email}`
      if (pp.amount) {
        url += `/${pp.amount}${pp.currency || "USD"}`
      }
      return url
    }

    default:
      return ""
  }
}

export function getDefaultPayload(type: QRType): QRPayload {
  switch (type) {
    case "url":
      return { url: "" }
    case "wifi":
      return { ssid: "", password: "", encryption: "WPA", hidden: false }
    case "text":
      return { text: "" }
    case "vcard":
      return { firstName: "", lastName: "", email: "", phone: "", company: "", title: "", website: "" }
    case "whatsapp":
      return { phone: "", message: "" }
    case "instagram":
      return { username: "" }
    case "google_review":
      return { placeId: "" }
    case "email":
      return { to: "", subject: "", body: "" }
    case "sms":
      return { phone: "", message: "" }
    case "phone":
      return { phone: "" }
    case "location":
      return { latitude: "", longitude: "", label: "" }
    case "event":
      return { title: "", location: "", startDate: "", endDate: "", description: "" }
    case "twitter":
      return { username: "", tweetText: "" }
    case "youtube":
      return { url: "" }
    case "spotify":
      return { url: "" }
    case "paypal":
      return { email: "", amount: "", currency: "USD", description: "" }
    default:
      return { url: "" }
  }
}

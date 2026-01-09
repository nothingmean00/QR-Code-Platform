"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { isValidEmail, isValidPhone, cn } from "@/lib/utils"
import type {
  QRType,
  QRPayload,
  URLPayload,
  WiFiPayload,
  TextPayload,
  VCardPayload,
  WhatsAppPayload,
  InstagramPayload,
  GoogleReviewPayload,
  EmailPayload,
  SMSPayload,
  PhonePayload,
  LocationPayload,
  EventPayload,
  TwitterPayload,
  YouTubePayload,
  SpotifyPayload,
  PayPalPayload,
} from "@/lib/qr-types"

interface QRFormFieldsProps {
  type: QRType
  payload: QRPayload
  onChange: (payload: QRPayload) => void
}

export function QRFormFields({ type, payload, onChange }: QRFormFieldsProps) {
  switch (type) {
    case "url":
      return <URLForm payload={payload as URLPayload} onChange={onChange} />
    case "wifi":
      return <WiFiForm payload={payload as WiFiPayload} onChange={onChange} />
    case "text":
      return <TextForm payload={payload as TextPayload} onChange={onChange} />
    case "vcard":
      return <VCardForm payload={payload as VCardPayload} onChange={onChange} />
    case "whatsapp":
      return <WhatsAppForm payload={payload as WhatsAppPayload} onChange={onChange} />
    case "instagram":
      return <InstagramForm payload={payload as InstagramPayload} onChange={onChange} />
    case "google_review":
      return <GoogleReviewForm payload={payload as GoogleReviewPayload} onChange={onChange} />
    case "email":
      return <EmailForm payload={payload as EmailPayload} onChange={onChange} />
    case "sms":
      return <SMSForm payload={payload as SMSPayload} onChange={onChange} />
    case "phone":
      return <PhoneForm payload={payload as PhonePayload} onChange={onChange} />
    case "location":
      return <LocationForm payload={payload as LocationPayload} onChange={onChange} />
    case "event":
      return <EventForm payload={payload as EventPayload} onChange={onChange} />
    case "twitter":
      return <TwitterForm payload={payload as TwitterPayload} onChange={onChange} />
    case "youtube":
      return <YouTubeForm payload={payload as YouTubePayload} onChange={onChange} />
    case "spotify":
      return <SpotifyForm payload={payload as SpotifyPayload} onChange={onChange} />
    case "paypal":
      return <PayPalForm payload={payload as PayPalPayload} onChange={onChange} />
    default:
      return null
  }
}

function FormField({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`space-y-2 ${className || ""}`}>{children}</div>
}

function FormHint({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-muted-foreground">{children}</p>
}

function URLForm({ payload, onChange }: { payload: URLPayload; onChange: (p: QRPayload) => void }) {
  return (
    <FormField>
      <Label htmlFor="url">Website URL</Label>
      <Input
        id="url"
        type="text"
        placeholder="example.com"
        value={payload.url}
        onChange={(e) => onChange({ ...payload, url: e.target.value })}
        className="h-11"
      />
      <FormHint>Enter any URL (https:// will be added automatically)</FormHint>
    </FormField>
  )
}

function WiFiForm({ payload, onChange }: { payload: WiFiPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <FormField>
        <Label htmlFor="ssid">Network Name (SSID)</Label>
        <Input
          id="ssid"
          placeholder="My WiFi Network"
          value={payload.ssid}
          onChange={(e) => onChange({ ...payload, ssid: e.target.value })}
          className="h-11"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          value={payload.password}
          onChange={(e) => onChange({ ...payload, password: e.target.value })}
          className="h-11"
        />
      </FormField>
      <FormField>
        <Label htmlFor="encryption">Encryption</Label>
        <Select
          value={payload.encryption}
          onValueChange={(value: "WPA" | "WEP" | "nopass") => onChange({ ...payload, encryption: value })}
        >
          <SelectTrigger id="encryption" className="h-11">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="WPA">WPA/WPA2/WPA3</SelectItem>
            <SelectItem value="WEP">WEP</SelectItem>
            <SelectItem value="nopass">No Password</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <div className="flex items-center gap-2 pt-1">
        <Checkbox
          id="hidden"
          checked={payload.hidden}
          onCheckedChange={(checked) => onChange({ ...payload, hidden: checked === true })}
        />
        <Label htmlFor="hidden" className="text-sm font-normal cursor-pointer">
          Hidden network
        </Label>
      </div>
    </div>
  )
}

function TextForm({ payload, onChange }: { payload: TextPayload; onChange: (p: QRPayload) => void }) {
  return (
    <FormField>
      <div className="flex items-center justify-between">
        <Label htmlFor="text">Text Content</Label>
        <span className="text-xs text-muted-foreground tabular-nums">{payload.text.length} / 2000</span>
      </div>
      <Textarea
        id="text"
        placeholder="Enter your text message..."
        rows={5}
        value={payload.text}
        onChange={(e) => onChange({ ...payload, text: e.target.value })}
        className="resize-none"
      />
    </FormField>
  )
}

function VCardForm({ payload, onChange }: { payload: VCardPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <FormField>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={payload.firstName}
            onChange={(e) => onChange({ ...payload, firstName: e.target.value })}
            className="h-11"
          />
        </FormField>
        <FormField>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={payload.lastName}
            onChange={(e) => onChange({ ...payload, lastName: e.target.value })}
            className="h-11"
          />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={payload.email}
          onChange={(e) => onChange({ ...payload, email: e.target.value })}
          className="h-11"
        />
      </FormField>
      <FormField>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 234 567 8900"
          value={payload.phone}
          onChange={(e) => onChange({ ...payload, phone: e.target.value })}
          className="h-11"
        />
      </FormField>
      <div className="grid grid-cols-2 gap-3">
        <FormField>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Acme Inc."
            value={payload.company}
            onChange={(e) => onChange({ ...payload, company: e.target.value })}
            className="h-11"
          />
        </FormField>
        <FormField>
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            placeholder="Software Engineer"
            value={payload.title}
            onChange={(e) => onChange({ ...payload, title: e.target.value })}
            className="h-11"
          />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          placeholder="https://johndoe.com"
          value={payload.website}
          onChange={(e) => onChange({ ...payload, website: e.target.value })}
          className="h-11"
        />
      </FormField>
    </div>
  )
}

function WhatsAppForm({ payload, onChange }: { payload: WhatsAppPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <FormField>
        <Label htmlFor="waPhone">Phone Number</Label>
        <Input
          id="waPhone"
          type="tel"
          placeholder="+1 234 567 8900"
          value={payload.phone}
          onChange={(e) => onChange({ ...payload, phone: e.target.value })}
          className="h-11"
        />
        <FormHint>Include country code (e.g., +1 for US)</FormHint>
      </FormField>
      <FormField>
        <Label htmlFor="waMessage">Pre-filled Message (optional)</Label>
        <Textarea
          id="waMessage"
          placeholder="Hi! I scanned your QR code..."
          rows={3}
          value={payload.message}
          onChange={(e) => onChange({ ...payload, message: e.target.value })}
          className="resize-none"
        />
      </FormField>
    </div>
  )
}

function InstagramForm({ payload, onChange }: { payload: InstagramPayload; onChange: (p: QRPayload) => void }) {
  return (
    <FormField>
      <Label htmlFor="igUsername">Instagram Username</Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
        <Input
          id="igUsername"
          className="pl-8 h-11"
          placeholder="username"
          value={payload.username.replace("@", "")}
          onChange={(e) => onChange({ ...payload, username: e.target.value.replace("@", "") })}
        />
      </div>
    </FormField>
  )
}

function GoogleReviewForm({ payload, onChange }: { payload: GoogleReviewPayload; onChange: (p: QRPayload) => void }) {
  return (
    <FormField>
      <Label htmlFor="placeId">Google Place ID</Label>
      <Input
        id="placeId"
        placeholder="ChIJ..."
        value={payload.placeId}
        onChange={(e) => onChange({ ...payload, placeId: e.target.value })}
        className="h-11 font-mono text-sm"
      />
      <FormHint>
        Find your Place ID at{" "}
        <a
          href="https://developers.google.com/maps/documentation/places/web-service/place-id"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          Google Place ID Finder
        </a>
      </FormHint>
    </FormField>
  )
}

function EmailForm({ payload, onChange }: { payload: EmailPayload; onChange: (p: QRPayload) => void }) {
  const isValid = isValidEmail(payload.to)
  return (
    <div className="space-y-4">
      <FormField>
        <Label htmlFor="emailTo">Email Address</Label>
        <Input
          id="emailTo"
          type="email"
          placeholder="hello@example.com"
          value={payload.to}
          onChange={(e) => onChange({ ...payload, to: e.target.value })}
          className={cn("h-11", !isValid && "border-destructive focus-visible:ring-destructive")}
        />
        {!isValid && <p className="text-xs text-destructive">Please enter a valid email address</p>}
      </FormField>
      <FormField>
        <Label htmlFor="emailSubject">Subject (optional)</Label>
        <Input
          id="emailSubject"
          placeholder="Inquiry from QR code"
          value={payload.subject}
          onChange={(e) => onChange({ ...payload, subject: e.target.value })}
          className="h-11"
        />
      </FormField>
      <FormField>
        <Label htmlFor="emailBody">Body (optional)</Label>
        <Textarea
          id="emailBody"
          placeholder="Hi, I scanned your QR code and wanted to reach out..."
          rows={3}
          value={payload.body}
          onChange={(e) => onChange({ ...payload, body: e.target.value })}
          className="resize-none"
        />
      </FormField>
    </div>
  )
}

function SMSForm({ payload, onChange }: { payload: SMSPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <FormField>
        <Label htmlFor="smsPhone">Phone Number</Label>
        <Input
          id="smsPhone"
          type="tel"
          placeholder="+1 234 567 8900"
          value={payload.phone}
          onChange={(e) => onChange({ ...payload, phone: e.target.value })}
          className="h-11"
        />
        <FormHint>Include country code</FormHint>
      </FormField>
      <FormField>
        <Label htmlFor="smsMessage">Message (optional)</Label>
        <Textarea
          id="smsMessage"
          placeholder="Pre-filled message content..."
          rows={3}
          value={payload.message}
          onChange={(e) => onChange({ ...payload, message: e.target.value })}
          className="resize-none"
        />
      </FormField>
    </div>
  )
}

function PhoneForm({ payload, onChange }: { payload: PhonePayload; onChange: (p: QRPayload) => void }) {
  const isValid = isValidPhone(payload.phone)
  return (
    <FormField>
      <Label htmlFor="phoneNumber">Phone Number</Label>
      <Input
        id="phoneNumber"
        type="tel"
        placeholder="+1 234 567 8900"
        value={payload.phone}
        onChange={(e) => onChange({ ...payload, phone: e.target.value })}
        className={cn("h-11", !isValid && "border-destructive focus-visible:ring-destructive")}
      />
      {!isValid ? (
        <p className="text-xs text-destructive">Please enter a valid phone number</p>
      ) : (
        <FormHint>Scanning will prompt to call this number</FormHint>
      )}
    </FormField>
  )
}

function LocationForm({ payload, onChange }: { payload: LocationPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <FormField>
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            id="latitude"
            placeholder="37.7749"
            value={payload.latitude}
            onChange={(e) => onChange({ ...payload, latitude: e.target.value })}
            className="h-11 font-mono text-sm"
          />
        </FormField>
        <FormField>
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            id="longitude"
            placeholder="-122.4194"
            value={payload.longitude}
            onChange={(e) => onChange({ ...payload, longitude: e.target.value })}
            className="h-11 font-mono text-sm"
          />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="locationLabel">Label (optional)</Label>
        <Input
          id="locationLabel"
          placeholder="Our Office"
          value={payload.label}
          onChange={(e) => onChange({ ...payload, label: e.target.value })}
          className="h-11"
        />
      </FormField>
      <FormHint>Find coordinates on Google Maps by right-clicking any location</FormHint>
    </div>
  )
}

function EventForm({ payload, onChange }: { payload: EventPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <FormField>
        <Label htmlFor="eventTitle">Event Title</Label>
        <Input
          id="eventTitle"
          placeholder="Team Meeting"
          value={payload.title}
          onChange={(e) => onChange({ ...payload, title: e.target.value })}
          className="h-11"
        />
      </FormField>
      <FormField>
        <Label htmlFor="eventLocation">Location (optional)</Label>
        <Input
          id="eventLocation"
          placeholder="Conference Room A"
          value={payload.location}
          onChange={(e) => onChange({ ...payload, location: e.target.value })}
          className="h-11"
        />
      </FormField>
      <div className="grid grid-cols-2 gap-3">
        <FormField>
          <Label htmlFor="startDate">Start</Label>
          <Input
            id="startDate"
            type="datetime-local"
            value={payload.startDate}
            onChange={(e) => onChange({ ...payload, startDate: e.target.value })}
            className="h-11"
          />
        </FormField>
        <FormField>
          <Label htmlFor="endDate">End</Label>
          <Input
            id="endDate"
            type="datetime-local"
            value={payload.endDate}
            onChange={(e) => onChange({ ...payload, endDate: e.target.value })}
            className="h-11"
          />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="eventDescription">Description (optional)</Label>
        <Textarea
          id="eventDescription"
          placeholder="Event details..."
          rows={2}
          value={payload.description}
          onChange={(e) => onChange({ ...payload, description: e.target.value })}
          className="resize-none"
        />
      </FormField>
    </div>
  )
}

function TwitterForm({ payload, onChange }: { payload: TwitterPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="profile" className="flex-1">
            Profile
          </TabsTrigger>
          <TabsTrigger value="tweet" className="flex-1">
            Compose Tweet
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-4">
          <FormField>
            <Label htmlFor="twUsername">X / Twitter Username</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <Input
                id="twUsername"
                className="pl-8 h-11"
                placeholder="username"
                value={payload.username.replace("@", "")}
                onChange={(e) => onChange({ ...payload, username: e.target.value.replace("@", ""), tweetText: "" })}
              />
            </div>
          </FormField>
        </TabsContent>
        <TabsContent value="tweet" className="mt-4">
          <FormField>
            <Label htmlFor="tweetText">Tweet Text</Label>
            <Textarea
              id="tweetText"
              placeholder="What's happening?"
              rows={3}
              value={payload.tweetText}
              onChange={(e) => onChange({ ...payload, tweetText: e.target.value, username: "" })}
              className="resize-none"
            />
            <FormHint>Opens Twitter with pre-filled text</FormHint>
          </FormField>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function YouTubeForm({ payload, onChange }: { payload: YouTubePayload; onChange: (p: QRPayload) => void }) {
  return (
    <FormField>
      <Label htmlFor="ytUrl">YouTube URL</Label>
      <Input
        id="ytUrl"
        type="url"
        placeholder="https://youtube.com/watch?v=... or https://youtube.com/@channel"
        value={payload.url}
        onChange={(e) => onChange({ ...payload, url: e.target.value })}
        className="h-11"
      />
      <FormHint>Paste any YouTube video, channel, or playlist URL</FormHint>
    </FormField>
  )
}

function SpotifyForm({ payload, onChange }: { payload: SpotifyPayload; onChange: (p: QRPayload) => void }) {
  return (
    <FormField>
      <Label htmlFor="spotifyUrl">Spotify URL</Label>
      <Input
        id="spotifyUrl"
        type="url"
        placeholder="https://open.spotify.com/track/..."
        value={payload.url}
        onChange={(e) => onChange({ ...payload, url: e.target.value })}
        className="h-11"
      />
      <FormHint>Paste any Spotify track, album, playlist, or artist URL</FormHint>
    </FormField>
  )
}

function PayPalForm({ payload, onChange }: { payload: PayPalPayload; onChange: (p: QRPayload) => void }) {
  return (
    <div className="space-y-4">
      <FormField>
        <Label htmlFor="ppEmail">PayPal.me Username or Email</Label>
        <Input
          id="ppEmail"
          placeholder="yourname or email@example.com"
          value={payload.email}
          onChange={(e) => onChange({ ...payload, email: e.target.value })}
          className="h-11"
        />
        <FormHint>Your PayPal.me link identifier</FormHint>
      </FormField>
      <div className="grid grid-cols-2 gap-3">
        <FormField>
          <Label htmlFor="ppAmount">Amount (optional)</Label>
          <Input
            id="ppAmount"
            type="number"
            placeholder="10.00"
            value={payload.amount}
            onChange={(e) => onChange({ ...payload, amount: e.target.value })}
            className="h-11"
          />
        </FormField>
        <FormField>
          <Label htmlFor="ppCurrency">Currency</Label>
          <Select value={payload.currency} onValueChange={(value) => onChange({ ...payload, currency: value })}>
            <SelectTrigger id="ppCurrency" className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="CAD">CAD</SelectItem>
              <SelectItem value="AUD">AUD</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>
    </div>
  )
}

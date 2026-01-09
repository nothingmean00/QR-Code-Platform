import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidUrl(url: string): boolean {
  if (!url) return true // Empty is valid (not filled yet)
  // Auto-accept if it looks like a URL (has a dot and no spaces)
  if (url.includes('.') && !url.includes(' ')) return true
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

export function normalizeUrl(url: string): string {
  if (!url) return url
  url = url.trim()
  // Add https:// if missing protocol
  if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`
  }
  return url
}

export function isValidEmail(email: string): boolean {
  if (!email) return true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return true
  // Allow digits, spaces, dashes, parentheses, and + for country code
  const phoneRegex = /^[\d\s\-+()]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7
}

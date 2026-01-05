"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { History, Trash2, Download, Search } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { QRType } from "@/lib/qr-types"
import { generateQRDataURL } from "@/components/qr-preview"
import { cn } from "@/lib/utils"

export interface HistoryItem {
  id: string
  type: QRType
  content: string
  label: string
  createdAt: number
  fgColor?: string
  bgColor?: string
}

interface QRHistoryProps {
  onSelect: (item: HistoryItem) => void
}

const STORAGE_KEY = "qr-history"
const MAX_HISTORY = 50

export function useQRHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setHistory(JSON.parse(stored))
      } catch {
        // Invalid storage
      }
    }
  }, [])

  const addToHistory = (type: QRType, content: string, label: string, fgColor?: string, bgColor?: string) => {
    if (!content.trim()) return

    const newItem: HistoryItem = {
      id: crypto.randomUUID(),
      type,
      content,
      label: label || content.slice(0, 30),
      createdAt: Date.now(),
      fgColor,
      bgColor,
    }

    setHistory((prev) => {
      // Remove duplicates
      const filtered = prev.filter((item) => item.content !== content)
      const updated = [newItem, ...filtered].slice(0, MAX_HISTORY)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const removeFromHistory = (id: string) => {
    setHistory((prev) => {
      const updated = prev.filter((item) => item.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem(STORAGE_KEY)
  }

  return { history, addToHistory, removeFromHistory, clearHistory }
}

export function QRHistory({ onSelect }: QRHistoryProps) {
  const { history, removeFromHistory, clearHistory } = useQRHistory()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filteredHistory = search
    ? history.filter(
        (item) =>
          item.label.toLowerCase().includes(search.toLowerCase()) ||
          item.type.toLowerCase().includes(search.toLowerCase()),
      )
    : history

  const downloadFromHistory = async (item: HistoryItem) => {
    try {
      const dataUrl = await generateQRDataURL(item.content, 1024, item.fgColor || "#000000", item.bgColor || "#ffffff")
      const link = document.createElement("a")
      link.download = `qr-${item.type}-${Date.now()}.png`
      link.href = dataUrl
      link.click()
    } catch {
      // Handle error
    }
  }

  const groupByDate = (items: HistoryItem[]) => {
    const groups: Record<string, HistoryItem[]> = {}
    const now = new Date()
    const today = now.toDateString()
    const yesterday = new Date(now.getTime() - 86400000).toDateString()

    items.forEach((item) => {
      const date = new Date(item.createdAt).toDateString()
      let label = date
      if (date === today) label = "Today"
      else if (date === yesterday) label = "Yesterday"
      else label = new Date(item.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })

      if (!groups[label]) groups[label] = []
      groups[label].push(item)
    })

    return groups
  }

  const groupedHistory = groupByDate(filteredHistory)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <History className="h-4 w-4" />
          History
          {history.length > 0 && (
            <Badge variant="secondary" className="h-5 px-1.5 text-xs rounded-full">
              {history.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[360px] sm:w-[420px]">
        <SheetHeader className="pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle>History</SheetTitle>
            {history.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearHistory} className="text-muted-foreground text-xs">
                Clear all
              </Button>
            )}
          </div>
        </SheetHeader>

        {history.length > 0 && (
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
        )}

        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <History className="h-8 w-8 text-muted-foreground/50" />
            </div>
            <p className="text-sm font-medium text-foreground">No history yet</p>
            <p className="text-xs text-muted-foreground mt-1 max-w-48">
              Your generated QR codes will appear here for quick access
            </p>
          </div>
        ) : filteredHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm text-muted-foreground">No results found</p>
          </div>
        ) : (
          <ScrollArea className="h-[calc(100vh-180px)]">
            <div className="space-y-6 pr-4">
              {Object.entries(groupedHistory).map(([date, items]) => (
                <div key={date}>
                  <h3 className="text-xs font-medium text-muted-foreground mb-2 sticky top-0 bg-background py-1">
                    {date}
                  </h3>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className={cn(
                          "group flex items-start gap-3 p-3 rounded-xl border border-border",
                          "hover:bg-accent/50 transition-colors cursor-pointer",
                        )}
                        onClick={() => {
                          onSelect(item)
                          setOpen(false)
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg border border-border flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: item.bgColor || "#ffffff" }}
                        >
                          <div className="w-5 h-5 rounded-sm" style={{ backgroundColor: item.fgColor || "#000000" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-[10px] uppercase px-1.5 h-4">
                              {item.type}
                            </Badge>
                            <span className="text-[10px] text-muted-foreground">
                              {new Date(item.createdAt).toLocaleTimeString(undefined, {
                                hour: "numeric",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          <p className="text-sm font-medium truncate mt-1">{item.label}</p>
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            aria-label={`Download QR code: ${item.label}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              downloadFromHistory(item)
                            }}
                          >
                            <Download className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive"
                            aria-label={`Delete QR code: ${item.label}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              removeFromHistory(item.id)
                            }}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  )
}

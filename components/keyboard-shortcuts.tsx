"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Keyboard } from "lucide-react"
import { Button } from "@/components/ui/button"

const shortcuts = [
  { keys: ["Ctrl", "D"], description: "Download PNG" },
  { keys: ["Ctrl", "Shift", "D"], description: "Download SVG" },
  { keys: ["Ctrl", "C"], description: "Copy to clipboard" },
  { keys: ["Ctrl", "H"], description: "Toggle history" },
  { keys: ["Ctrl", "/"], description: "Show shortcuts" },
  { keys: ["Esc"], description: "Close dialogs" },
]

interface KeyboardShortcutsProps {
  onDownloadPNG?: () => void
  onDownloadSVG?: () => void
  onCopy?: () => void
  onToggleHistory?: () => void
}

export function KeyboardShortcuts({ onDownloadPNG, onDownloadSVG, onCopy, onToggleHistory }: KeyboardShortcutsProps) {
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + /  - Show shortcuts
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault()
        setShowDialog(true)
      }

      // Ctrl + D - Download PNG
      if (e.ctrlKey && !e.shiftKey && e.key === "d") {
        e.preventDefault()
        onDownloadPNG?.()
      }

      // Ctrl + Shift + D - Download SVG
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        e.preventDefault()
        onDownloadSVG?.()
      }

      // Ctrl + H - Toggle history
      if (e.ctrlKey && e.key === "h") {
        e.preventDefault()
        onToggleHistory?.()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onDownloadPNG, onDownloadSVG, onCopy, onToggleHistory])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 hidden md:flex"
        onClick={() => setShowDialog(true)}
        title="Keyboard shortcuts"
      >
        <Keyboard className="h-4 w-4" />
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Keyboard shortcuts</DialogTitle>
            <DialogDescription>Quick actions to speed up your workflow.</DialogDescription>
          </DialogHeader>
          <div className="space-y-2 pt-2">
            {shortcuts.map((shortcut) => (
              <div key={shortcut.description} className="flex items-center justify-between py-2">
                <span className="text-sm">{shortcut.description}</span>
                <div className="flex items-center gap-1">
                  {shortcut.keys.map((key, i) => (
                    <span key={i}>
                      <Badge variant="outline" className="font-mono text-xs px-2">
                        {key}
                      </Badge>
                      {i < shortcut.keys.length - 1 && <span className="text-muted-foreground mx-1">+</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

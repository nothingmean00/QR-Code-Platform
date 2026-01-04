export function TrustIndicators() {
  const indicators = [
    { label: "Print-safe", description: "High error correction" },
    { label: "No account required", description: "Download instantly" },
    { label: "Privacy-first", description: "No tracking on free tier" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
      {indicators.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          {index > 0 && <span className="hidden sm:inline text-border">•</span>}
          <span className="font-medium text-foreground">{item.label}</span>
          <span className="hidden sm:inline">— {item.description}</span>
        </div>
      ))}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

interface StatProps {
  value: number
  suffix?: string
  label: string
}

function AnimatedStat({ value, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value={847293} label="QR codes generated" />
          <AnimatedStat value={16} label="QR code types" />
          <AnimatedStat value={99.9} suffix="%" label="Scan success rate" />
          <AnimatedStat value={0} suffix="$" label="Free tier cost" />
        </div>
      </div>
    </section>
  )
}

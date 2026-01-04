"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is error correction and why does it matter?",
    answer:
      "Error correction allows QR codes to remain scannable even when partially damaged or obscured. We use the highest level (H), which means up to 30% of the code can be damaged and it will still scan. This is crucial for printed materials that may get folded, stained, or worn.",
  },
  {
    question: "What's the difference between static and dynamic QR codes?",
    answer:
      "Static QR codes encode data directly - the destination is permanent. Dynamic QR codes point to a redirect URL that you can change anytime. If you're printing QR codes for a campaign, dynamic codes let you update the destination without reprinting.",
  },
  {
    question: "What size should I print my QR code?",
    answer:
      "For reliable scanning, we recommend a minimum of 2cm x 2cm (0.8in x 0.8in) for close-range scanning (within 30cm). For posters or signage meant to be scanned from further away, increase size proportionally - roughly 1cm per 10cm of scanning distance.",
  },
  {
    question: "Why SVG over PNG for printing?",
    answer:
      "SVG is a vector format, meaning it scales to any size without losing quality. PNG is raster-based and will become pixelated if enlarged beyond its original resolution. For professional printing, always use SVG.",
  },
  {
    question: "Do you track scans on free QR codes?",
    answer:
      "No. Free QR codes are completely static and contain no tracking mechanisms. They encode the destination directly. Scan tracking is only available on Pro accounts with dynamic QR codes.",
  },
  {
    question: "Can I use custom colors?",
    answer:
      "Yes, you can customize foreground and background colors. However, maintain high contrast for reliable scanning. Dark foreground on light background works best. Avoid low-contrast combinations like yellow on white.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-muted-foreground">Technical details that matter for print reliability.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

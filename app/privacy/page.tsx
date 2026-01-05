import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | GenerateQRcode.org",
  description: "Learn how GenerateQRcode.org collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  GenerateQRcode.org ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our QR code generation service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect information you provide directly to us:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Account Information:</strong> Email address and payment information when you purchase QR codes</li>
                  <li><strong>QR Code Content:</strong> URLs, text, WiFi credentials, contact information, or other data you encode in QR codes</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our service</li>
                  <li><strong>Analytics Data (Pro subscribers only):</strong> Scan counts, approximate location, device types, and timestamps</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Generate and deliver QR codes</li>
                  <li>Process payments and send receipts</li>
                  <li>Provide analytics services (for Pro subscribers)</li>
                  <li>Send service-related communications</li>
                  <li>Improve and optimize our service</li>
                  <li>Detect and prevent fraud or abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>QR Code Content:</strong> We do not store the content you encode in static QR codes. The data is processed in your browser and converted directly to a QR code image. For dynamic QR codes (Pro Analytics), redirect URLs are stored as long as your subscription is active.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Payment Information:</strong> Payment details are processed and stored securely by Stripe, our payment processor. We do not store your full credit card number.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> Stripe (payments), cloud hosting providers</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use essential cookies to maintain your session and preferences. We do not use third-party advertising cookies. Analytics cookies are only used for Pro subscribers who opt into scan tracking.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  To exercise these rights, contact us at privacy@qrgenerator.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in compliance with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using TLS/SSL.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our service is not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy or our data practices, please contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Email: privacy@qrgenerator.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

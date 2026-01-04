import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | QR Generator",
  description: "Terms and conditions for using the QR Generator service.",
}

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using QR Generator ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  QR Generator provides a platform for creating QR codes that encode various types of data including URLs, text, WiFi credentials, contact information, and other content. We offer both one-time purchases and subscription services for enhanced features.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to use the Service only for lawful purposes. You are solely responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The content you encode in QR codes</li>
                  <li>Ensuring your QR codes do not link to illegal, harmful, or misleading content</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Maintaining the security of your account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not use the Service to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Create QR codes linking to malware, phishing sites, or fraudulent content</li>
                  <li>Distribute spam or unsolicited communications</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Engage in any activity that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Resell or redistribute the Service without authorization</li>
                  <li>Create QR codes for illegal products or services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Payments and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>One-Time Purchases:</strong> QR code purchases are final and non-refundable once the QR code has been generated and downloaded. If you experience technical issues preventing download, contact us within 24 hours for assistance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Subscriptions:</strong> Pro Analytics subscriptions are billed monthly. You may cancel at any time, and your subscription will remain active until the end of the current billing period. No partial refunds are provided for unused portions of billing periods.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Payment Processing:</strong> All payments are processed securely by Stripe. By making a purchase, you also agree to Stripe's terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Our IP:</strong> The Service, including its design, features, and content (excluding user-generated content), is owned by QR Generator and protected by intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Your Content:</strong> You retain ownership of any content you encode in QR codes. By using the Service, you grant us a limited license to process this content solely for the purpose of generating your QR codes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. QR Code Ownership and License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon purchase, you receive a perpetual, non-exclusive license to use the generated QR code images for any lawful commercial or personal purpose. QR codes generated through our Service may be used in print materials, digital media, product packaging, and marketing materials without attribution.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain high availability but do not guarantee uninterrupted access to the Service. We may modify, suspend, or discontinue any aspect of the Service at any time. For Pro Analytics subscribers, we will provide reasonable notice before discontinuing core features.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT QR CODES WILL BE SCANNABLE BY ALL DEVICES OR IN ALL CONDITIONS.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, QR GENERATOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE TWELVE MONTHS PRECEDING THE CLAIM.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless QR Generator and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">12. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to the Service immediately, without prior notice, for any violation of these Terms or for any other reason at our sole discretion. Upon termination, your right to use the Service ceases immediately, but QR codes you have already downloaded will continue to function.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">13. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">14. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">15. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Email: legal@qrgenerator.com
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

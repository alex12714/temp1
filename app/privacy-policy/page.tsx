import Link from "next/link"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050A1A]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#050A1A]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">OnFire Messenger</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-white">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-12 max-w-4xl">
          <div className="bg-[#0A1535] rounded-xl border border-blue-800 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

            <div className="space-y-8 text-slate-300">
              <div>
                <p className="text-slate-400 mb-6">
                  <strong>Effective Date:</strong> January 28, 2025
                  <br />
                  <strong>Last Updated:</strong> January 28, 2025
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="mb-4">
                  OnFire Messenger Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your
                  personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our OnFire Messenger platform and services.
                </p>
                <p>Our registered address is: 254 Chapman Rd, Ste 208 #22498, Newark, Delaware 19702, US.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">2.1 Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Account information (name, email address, username, password)</li>
                  <li>Profile information (bio, profile picture, preferences)</li>
                  <li>Contact information (phone number, if provided)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-xl font-medium text-orange-500 mb-3">2.2 Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Messages and communications within the platform</li>
                  <li>Community interactions and content creation</li>
                  <li>Learning progress and course completion data</li>
                  <li>Marketplace transactions and activity</li>
                </ul>

                <h3 className="text-xl font-medium text-orange-500 mb-3">2.3 Technical Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage analytics and performance data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and maintain our messaging, education, and marketplace services</li>
                  <li>Process transactions and payments</li>
                  <li>Personalize your experience and content recommendations</li>
                  <li>Communicate with you about updates, features, and support</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Improve our services through analytics and research</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell your personal information. We may share your information in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>With your consent:</strong> When you explicitly agree to share information
                  </li>
                  <li>
                    <strong>Service providers:</strong> Third-party vendors who help us operate our platform
                  </li>
                  <li>
                    <strong>Legal requirements:</strong> When required by law or to protect our rights
                  </li>
                  <li>
                    <strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales
                  </li>
                  <li>
                    <strong>Community features:</strong> Information you choose to make public in communities
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
                <p className="mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of your personal data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your data in a portable format
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications
                  </li>
                  <li>
                    <strong>Restriction:</strong> Limit how we process your data
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services, comply with
                  legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will
                  delete or anonymize your personal information within 30 days, except where retention is required by
                  law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure appropriate safeguards are in place to protect your personal information in
                  accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected personal information
                  from a child under 13, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on our platform and updating the "Last Updated" date. Your continued
                  use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <p>
                    <strong>OnFire Messenger Inc.</strong>
                  </p>
                  <p>254 Chapman Rd, Ste 208 #22498</p>
                  <p>Newark, Delaware 19702, US</p>
                  <p>Email: privacy@onfiremessenger.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#071230] border-t border-blue-900/30 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} OnFire Messenger Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-orange-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-400 hover:text-orange-500 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-slate-400 hover:text-orange-500 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

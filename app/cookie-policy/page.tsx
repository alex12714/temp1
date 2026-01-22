import Link from "next/link"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
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
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

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
                  This Cookie Policy explains how OnFire Messenger Inc. ("we," "our," or "us") uses cookies and similar
                  tracking technologies on our platform. This policy should be read alongside our Privacy Policy.
                </p>
                <p>Our registered address is: 254 Chapman Rd, Ste 208 #22498, Newark, Delaware 19702, US.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. What Are Cookies</h2>
                <p className="mb-4">
                  Cookies are small text files that are stored on your device when you visit our platform. They help us
                  provide you with a better experience by remembering your preferences, keeping you logged in, and
                  analyzing how you use our services.
                </p>
                <p>
                  Similar technologies include web beacons, pixels, and local storage, which serve similar purposes to
                  cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>

                <h3 className="text-xl font-medium text-orange-500 mb-3">3.1 Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are necessary for our platform to function properly. They enable core functionality such
                  as security, network management, and accessibility.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Authentication and login status</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance</li>
                  <li>User interface preferences</li>
                </ul>

                <h3 className="text-xl font-medium text-orange-500 mb-3">3.2 Functional Cookies</h3>
                <p className="mb-4">
                  These cookies enhance your experience by remembering your choices and preferences.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Language and region preferences</li>
                  <li>Theme and display settings</li>
                  <li>Community and content preferences</li>
                  <li>Notification settings</li>
                </ul>

                <h3 className="text-xl font-medium text-orange-500 mb-3">3.3 Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies help us understand how users interact with our platform so we can improve our services.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Usage statistics and patterns</li>
                  <li>Feature adoption and engagement</li>
                  <li>Performance monitoring</li>
                  <li>Error tracking and debugging</li>
                </ul>

                <h3 className="text-xl font-medium text-orange-500 mb-3">3.4 Marketing Cookies</h3>
                <p className="mb-4">
                  These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing
                  campaigns.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Targeted advertising</li>
                  <li>Campaign performance tracking</li>
                  <li>Cross-platform attribution</li>
                  <li>Retargeting and remarketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
                <p className="mb-4">We may use third-party services that set their own cookies. These include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Analytics providers:</strong> Google Analytics, Mixpanel
                  </li>
                  <li>
                    <strong>Payment processors:</strong> Stripe, PayPal
                  </li>
                  <li>
                    <strong>Customer support:</strong> Intercom, Zendesk
                  </li>
                  <li>
                    <strong>Content delivery:</strong> Cloudflare, AWS
                  </li>
                  <li>
                    <strong>Social media:</strong> Facebook, Twitter, LinkedIn
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Cookie Duration</h2>
                <p className="mb-4">Cookies can be categorized by how long they remain on your device:</p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">5.1 Session Cookies</h3>
                <p className="mb-4">
                  These are temporary cookies that are deleted when you close your browser. They help maintain your
                  session while you navigate our platform.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">5.2 Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. They remember your
                  preferences across multiple visits to our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Managing Your Cookie Preferences</h2>
                <p className="mb-4">You have several options for managing cookies:</p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">6.1 Browser Settings</h3>
                <p className="mb-4">Most browsers allow you to control cookies through their settings. You can:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>

                <h3 className="text-xl font-medium text-orange-500 mb-3">6.2 Platform Settings</h3>
                <p className="mb-4">
                  You can manage your cookie preferences through your account settings on our platform. This allows you
                  to opt out of non-essential cookies while maintaining core functionality.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">6.3 Opt-Out Tools</h3>
                <p>
                  You can opt out of targeted advertising through industry opt-out tools such as the Digital Advertising
                  Alliance's opt-out page or the Network Advertising Initiative's opt-out page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Impact of Disabling Cookies</h2>
                <p className="mb-4">
                  While you can disable cookies, please note that this may affect your experience on our platform:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You may need to log in repeatedly</li>
                  <li>Your preferences may not be saved</li>
                  <li>Some features may not work properly</li>
                  <li>Content may not be personalized</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of any material changes by posting the updated policy on our platform and
                  updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Cookie Policy or our use of cookies, please contact us at:
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
              <Link href="/privacy-policy" className="text-slate-400 hover:text-orange-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-400 hover:text-orange-500 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-orange-500 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

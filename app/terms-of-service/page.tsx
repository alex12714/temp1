import Link from "next/link"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

            <div className="space-y-8 text-slate-300">
              <div>
                <p className="text-slate-400 mb-6">
                  <strong>Effective Date:</strong> January 28, 2025
                  <br />
                  <strong>Last Updated:</strong> January 28, 2025
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  Welcome to OnFire Messenger! These Terms of Service ("Terms") govern your use of the OnFire Messenger
                  platform and services provided by OnFire Messenger Inc. ("Company," "we," "our," or "us").
                </p>
                <p className="mb-4">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                  Terms, please do not use our services.
                </p>
                <p>Our registered address is: 254 Chapman Rd, Ste 208 #22498, Newark, Delaware 19702, US.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  OnFire Messenger is an AI-powered, all-in-one platform that combines messaging, education, and
                  marketplace functionality. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Messaging and communication tools</li>
                  <li>Community creation and management</li>
                  <li>Educational content and courses</li>
                  <li>Marketplace for digital and physical products</li>
                  <li>AI-powered assistance and automation</li>
                  <li>Analytics and business tools</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts and Registration</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">3.1 Account Creation</h3>
                <p className="mb-4">
                  To use our services, you must create an account and provide accurate, complete, and current
                  information. You are responsible for maintaining the confidentiality of your account credentials.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">3.2 Eligibility</h3>
                <p className="mb-4">
                  You must be at least 13 years old to use our services. If you are under 18, you must have parental
                  consent. By using our services, you represent that you meet these requirements.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">3.3 Account Security</h3>
                <p>
                  You are responsible for all activities that occur under your account. You must notify us immediately
                  of any unauthorized use of your account or any security breach.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use Policy</h2>
                <p className="mb-4">You agree not to use our services to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Distribute spam, malware, or harmful content</li>
                  <li>Engage in fraudulent or deceptive practices</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for illegal activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Content and Intellectual Property</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">5.1 User Content</h3>
                <p className="mb-4">
                  You retain ownership of content you create and share on our platform. By posting content, you grant us
                  a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in
                  connection with our services.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">5.2 Platform Content</h3>
                <p className="mb-4">
                  Our platform, including its design, features, and underlying technology, is protected by intellectual
                  property laws. You may not copy, modify, or reverse engineer our platform.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">5.3 Content Moderation</h3>
                <p>
                  We reserve the right to review, moderate, and remove content that violates these Terms or our
                  community guidelines. We may also suspend or terminate accounts that repeatedly violate our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Payment and Billing</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">6.1 Subscription Plans</h3>
                <p className="mb-4">
                  We offer various subscription plans with different features and pricing. You can choose between
                  income-sharing and flat-fee payment models.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">6.2 Payment Processing</h3>
                <p className="mb-4">
                  Payments are processed through secure third-party payment processors. You agree to provide accurate
                  payment information and authorize us to charge your chosen payment method.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">6.3 Refunds</h3>
                <p>
                  Refund policies vary by subscription type and are detailed in your account settings. Generally, we
                  offer prorated refunds for annual subscriptions canceled within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Creator and Marketplace Terms</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">7.1 Creator Revenue</h3>
                <p className="mb-4">
                  Creators can monetize their content through our platform. We take a percentage of revenue as outlined
                  in your creator agreement, with rates varying based on your plan and tenure.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">7.2 Marketplace Transactions</h3>
                <p className="mb-4">
                  Our marketplace facilitates transactions between buyers and sellers. We are not responsible for the
                  quality, safety, or legality of products sold through our platform.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">7.3 Tax Responsibilities</h3>
                <p>
                  You are responsible for all applicable taxes related to your use of our services, including income
                  from creator activities and marketplace transactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data Protection</h2>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  personal information. By using our services, you consent to our privacy practices as described in our
                  Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimers and Limitations of Liability</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">9.1 Service Availability</h3>
                <p className="mb-4">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access. Our
                  services are provided "as is" without warranties of any kind.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">9.2 Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
                  or consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
                <p className="mb-4">
                  Either party may terminate these Terms at any time. We may suspend or terminate your account for
                  violations of these Terms. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your access to our services will cease</li>
                  <li>You may download your data within 30 days</li>
                  <li>We may delete your account and data after the grace period</li>
                  <li>Outstanding payments remain due</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Dispute Resolution</h2>
                <h3 className="text-xl font-medium text-orange-500 mb-3">11.1 Governing Law</h3>
                <p className="mb-4">
                  These Terms are governed by the laws of the State of Delaware, without regard to conflict of law
                  principles.
                </p>

                <h3 className="text-xl font-medium text-orange-500 mb-3">11.2 Arbitration</h3>
                <p>
                  Any disputes arising from these Terms will be resolved through binding arbitration in accordance with
                  the rules of the American Arbitration Association, conducted in Delaware.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. We will notify you of material changes by email or
                  through our platform. Your continued use of our services after such changes constitutes acceptance of
                  the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
                <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <p>
                    <strong>OnFire Messenger Inc.</strong>
                  </p>
                  <p>254 Chapman Rd, Ste 208 #22498</p>
                  <p>Newark, Delaware 19702, US</p>
                  <p>Email: legal@onfiremessenger.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
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
              <Link href="/terms-of-service" className="text-orange-500 text-sm">
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

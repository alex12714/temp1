"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import {
  Flame,
  Search,
  MessageSquare,
  Settings,
  CreditCard,
  Shield,
  Users,
  ShoppingBag,
  BookOpen,
  Trash2,
  ChevronRight,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react"

const helpCategories = [
  {
    title: "Getting Started",
    icon: <BookOpen className="h-5 w-5" />,
    articles: [
      { title: "Creating Your Account", href: "/help/getting-started/create-account" },
      { title: "Setting Up Your Profile", href: "/help/getting-started/setup-profile" },
      { title: "First Steps Guide", href: "/help/getting-started/first-steps" },
      { title: "Mobile App Setup", href: "/help/getting-started/mobile-setup" },
    ],
  },
  {
    title: "Messaging & Communication",
    icon: <MessageSquare className="h-5 w-5" />,
    articles: [
      { title: "Sending Messages", href: "/help/messaging/sending-messages" },
      { title: "Voice & Video Calls", href: "/help/messaging/voice-video" },
      { title: "Group Conversations", href: "/help/messaging/group-chats" },
      { title: "Message Settings", href: "/help/messaging/settings" },
    ],
  },
  {
    title: "Communities",
    icon: <Users className="h-5 w-5" />,
    articles: [
      { title: "Joining Communities", href: "/help/communities/joining" },
      { title: "Creating Communities", href: "/help/communities/creating" },
      { title: "Community Management", href: "/help/communities/management" },
      { title: "Monetizing Your Community", href: "/help/communities/monetization" },
    ],
  },
  {
    title: "Marketplace",
    icon: <ShoppingBag className="h-5 w-5" />,
    articles: [
      { title: "Buying Products", href: "/help/marketplace/buying" },
      { title: "Selling Products", href: "/help/marketplace/selling" },
      { title: "Shopify Integration", href: "/help/marketplace/shopify" },
      { title: "Payment Processing", href: "/help/marketplace/payments" },
    ],
  },
  {
    title: "Account & Settings",
    icon: <Settings className="h-5 w-5" />,
    articles: [
      { title: "Account Settings", href: "/help/account/settings" },
      { title: "Privacy Controls", href: "/help/account/privacy" },
      { title: "Notification Preferences", href: "/help/account/notifications" },
      { title: "Two-Factor Authentication", href: "/help/account/2fa" },
    ],
  },
  {
    title: "Billing & Subscriptions",
    icon: <CreditCard className="h-5 w-5" />,
    articles: [
      { title: "Subscription Plans", href: "/help/billing/plans" },
      { title: "Payment Methods", href: "/help/billing/payment-methods" },
      { title: "Billing History", href: "/help/billing/history" },
      { title: "Refunds & Cancellations", href: "/help/billing/refunds" },
    ],
  },
  {
    title: "Privacy & Security",
    icon: <Shield className="h-5 w-5" />,
    articles: [
      { title: "Data Protection", href: "/help/privacy/data-protection" },
      { title: "Request Data Deletion", href: "/help/privacy/data-deletion" },
      { title: "Security Best Practices", href: "/help/privacy/security" },
      { title: "Report Abuse", href: "/help/privacy/report-abuse" },
    ],
  },
]

const popularArticles = [
  { title: "How to Create Your First Community", href: "/help/communities/creating", category: "Communities" },
  { title: "Setting Up Shopify Integration", href: "/help/marketplace/shopify", category: "Marketplace" },
  { title: "Understanding Subscription Plans", href: "/help/billing/plans", category: "Billing" },
  { title: "Request Data Deletion", href: "/help/privacy/data-deletion", category: "Privacy" },
  { title: "Enabling Two-Factor Authentication", href: "/help/account/2fa", category: "Security" },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = helpCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.articles.some((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase())),
  )

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
          <MobileNav />
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-white">
              Login
            </Button>
            <Link href="https://refer.onfire.so/">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-[#050A1A] via-[#071230] to-[#050A1A]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How can we help you?</h1>
              <p className="text-xl text-slate-300 mb-8">
                Find answers to your questions and get the most out of OnFire Messenger
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-[#0A1535] border-blue-800 text-white text-lg rounded-xl focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Help Categories */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Help Categories</h2>
                <div className="space-y-2">
                  {filteredCategories.map((category, index) => (
                    <div key={index}>
                      <button
                        onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                          selectedCategory === category.title
                            ? "bg-orange-500/10 border border-orange-500/30 text-orange-500"
                            : "bg-[#0A1535] border border-blue-800 text-white hover:border-orange-500/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <span className="font-medium">{category.title}</span>
                        </div>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            selectedCategory === category.title ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Articles */}
                      {selectedCategory === category.title && (
                        <div className="mt-2 ml-4 space-y-1">
                          {category.articles.map((article, articleIndex) => (
                            <Link
                              key={articleIndex}
                              href={article.href}
                              className="block p-2 text-slate-300 hover:text-orange-500 hover:bg-blue-900/30 rounded transition-all"
                            >
                              <div className="flex items-center gap-2">
                                {article.title === "Request Data Deletion" && (
                                  <Trash2 className="h-4 w-4 text-red-400" />
                                )}
                                {article.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {!searchQuery ? (
                <>
                  {/* Popular Articles */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Popular Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {popularArticles.map((article, index) => (
                        <Link key={index} href={article.href}>
                          <Card className="bg-[#0A1535] border-blue-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-white mb-2">{article.title}</h3>
                                  <p className="text-sm text-orange-500">{article.category}</p>
                                </div>
                                <ChevronRight className="h-5 w-5 text-slate-400" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>

                  {/* Quick Actions */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link href="/help/privacy/data-deletion">
                        <Card className="bg-[#0A1535] border-blue-800 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                          <CardContent className="p-6 text-center">
                            <Trash2 className="h-8 w-8 text-red-400 mx-auto mb-3" />
                            <h3 className="font-semibold text-white mb-2">Request Data Deletion</h3>
                            <p className="text-sm text-slate-400">Delete your account and personal data</p>
                          </CardContent>
                        </Card>
                      </Link>

                      <Link href="/help/account/settings">
                        <Card className="bg-[#0A1535] border-blue-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
                          <CardContent className="p-6 text-center">
                            <Settings className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                            <h3 className="font-semibold text-white mb-2">Account Settings</h3>
                            <p className="text-sm text-slate-400">Manage your account preferences</p>
                          </CardContent>
                        </Card>
                      </Link>

                      <Link href="/help/billing/plans">
                        <Card className="bg-[#0A1535] border-blue-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
                          <CardContent className="p-6 text-center">
                            <CreditCard className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                            <h3 className="font-semibold text-white mb-2">Billing Help</h3>
                            <p className="text-sm text-slate-400">Manage subscriptions and payments</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </section>

                  {/* Contact Support */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Still Need Help?</h2>
                    <Card className="bg-[#0A1535] border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-orange-500" />
                          Contact Our Support Team
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-6">
                          Can't find what you're looking for? Our support team is here to help you 24/7.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 p-4 bg-blue-900/30 rounded-lg">
                            <Mail className="h-5 w-5 text-orange-500" />
                            <div>
                              <p className="text-white font-medium">Email Support</p>
                              <p className="text-slate-400 text-sm">support@onfiremessenger.com</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-4 bg-blue-900/30 rounded-lg">
                            <Phone className="h-5 w-5 text-orange-500" />
                            <div>
                              <p className="text-white font-medium">Phone Support</p>
                              <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                            Contact Support
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </>
              ) : (
                /* Search Results */
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6">Search Results for "{searchQuery}"</h2>
                  <div className="space-y-4">
                    {filteredCategories.map((category) =>
                      category.articles
                        .filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((article, index) => (
                          <Link key={index} href={article.href}>
                            <Card className="bg-[#0A1535] border-blue-800 hover:border-orange-500/50 transition-all">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h3 className="font-semibold text-white mb-1">{article.title}</h3>
                                    <p className="text-sm text-orange-500">{category.title}</p>
                                  </div>
                                  <ChevronRight className="h-5 w-5 text-slate-400" />
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        )),
                    )}
                  </div>
                </section>
              )}
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

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Check, ShoppingBag, ArrowRight } from "lucide-react"

export default function ShopifyConnectedPage() {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

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
            <Link href="https://refer.onfire.so/">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-2xl">
          <Card className="bg-[#0A1535] border-blue-800 shadow-2xl">
            <CardContent className="p-12 text-center">
              {/* Animated Success Icon */}
              <div className="relative mb-8">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background pulse */}
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
                  <div className="absolute inset-2 rounded-full bg-green-500 animate-pulse opacity-30"></div>

                  {/* Checkmark with animation */}
                  <Check
                    className={`h-16 w-16 text-white relative z-10 transition-all duration-1000 ${
                      showAnimation ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{
                      animation: showAnimation ? "checkmark 0.8s ease-in-out" : "none",
                    }}
                  />
                </div>

                {/* Success particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-8 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-green-300 rounded-full animate-ping delay-500"></div>
                  <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-8 right-10 w-1 h-1 bg-green-400 rounded-full animate-bounce delay-900"></div>
                </div>
              </div>

              {/* Success Message */}
              <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Shopify Store Connected!</h1>
                <p className="text-lg text-slate-300">
                  Your Shopify store has been successfully connected to OnFire Messenger.
                </p>
                <p className="text-slate-400">
                  You can now manage your products, orders, and customers directly through the OnFire platform.
                </p>
              </div>

              {/* Features List */}
              <div className="bg-blue-900/30 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-orange-500" />
                  What's Next?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Sync your product catalog with OnFire communities</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Enable direct sales through messenger conversations</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Set up automated order notifications and updates</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Access integrated analytics and sales insights</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-slate-700 bg-transparent hover:bg-slate-800"
                >
                  View Integration Settings
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-blue-800">
                <p className="text-sm text-slate-400">
                  Need help? Check out our{" "}
                  <Link href="https://developers.onfire.so" className="text-orange-500 hover:text-orange-400">
                    integration documentation
                  </Link>{" "}
                  or contact our support team.
                </p>
              </div>
            </CardContent>
          </Card>
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

      {/* Custom CSS for checkmark animation */}
      <style jsx>{`
        @keyframes checkmark {
          0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

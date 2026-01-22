"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#0A1535] border-blue-800 w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/#features"
            className="text-lg text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-blue-900/30"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#communities"
            className="text-lg text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-blue-900/30"
            onClick={() => setOpen(false)}
          >
            Communities
          </Link>
          <Link
            href="/#marketplace"
            className="text-lg text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-blue-900/30"
            onClick={() => setOpen(false)}
          >
            Marketplace
          </Link>
          <Link
            href="/#pricing"
            className="text-lg text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-blue-900/30"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="https://developers.onfire.so"
            className="text-lg text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-blue-900/30"
            onClick={() => setOpen(false)}
          >
            Developers
          </Link>
          <Link
            href="/fireproof"
            className="text-lg text-orange-500 hover:text-orange-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-orange-500/10"
            onClick={() => setOpen(false)}
          >
            🔥 FireProof
          </Link>
          <Link
            href="/investors"
            className="text-lg text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-blue-900/30"
            onClick={() => setOpen(false)}
          >
            Investors
          </Link>
          <div className="border-t border-blue-800 pt-4 mt-4 space-y-4">
            <Button variant="ghost" className="w-full text-white justify-start" onClick={() => setOpen(false)}>
              Login
            </Button>
            <Link href="https://refer.onfire.so/" onClick={() => setOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InvestorContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData.entries())

    try {
      // Send data to webhook
      const response = await fetch("https://hook.eu1.make.com/s4msn5kv40va3y05p53v6mvrss5v2o4w", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <div className="mx-auto w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-medium mb-2">Thank You!</h3>
        <p className="text-slate-300 text-sm">We've received your request. Check your email for more information.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" name="firstName" required className="bg-blue-900/50 border-blue-800 text-white" />
      </div>

      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" name="lastName" required className="bg-blue-900/50 border-blue-800 text-white" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="bg-blue-900/50 border-blue-800 text-white" />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
      >
        {isSubmitting ? "Submitting..." : "Request Investor Information"}
      </Button>
    </form>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InvestorFullForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData.entries())

    // Handle checkbox value (checkboxes don't appear in formData when unchecked)
    const ndaCheckbox = document.getElementById("nda") as HTMLInputElement
    formValues.nda = ndaCheckbox ? ndaCheckbox.checked : false

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
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-xl font-medium mb-2">Thank You for Your Interest!</h3>
        <p className="text-slate-300">We've received your inquiry. Check your email for more information.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullFirstName">First Name</Label>
          <Input id="fullFirstName" name="firstName" required className="bg-blue-900/50 border-blue-800 text-white" />
        </div>

        <div>
          <Label htmlFor="fullLastName">Last Name</Label>
          <Input id="fullLastName" name="lastName" required className="bg-blue-900/50 border-blue-800 text-white" />
        </div>
      </div>

      <div>
        <Label htmlFor="fullEmail">Email</Label>
        <Input
          id="fullEmail"
          name="email"
          type="email"
          required
          className="bg-blue-900/50 border-blue-800 text-white"
        />
      </div>

      <div>
        <Label htmlFor="interestLevel">Investment Interest Level</Label>
        <Select name="interestLevel">
          <SelectTrigger className="bg-blue-900/50 border-blue-800 text-white">
            <SelectValue placeholder="Select your interest level" />
          </SelectTrigger>
          <SelectContent className="bg-blue-900 border-blue-800">
            <SelectItem value="high">Very Interested</SelectItem>
            <SelectItem value="medium">Somewhat Interested</SelectItem>
            <SelectItem value="low">Just Exploring</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="comments">Questions or Comments</Label>
        <Textarea
          id="comments"
          name="comments"
          rows={4}
          className="bg-blue-900/50 border-blue-800 text-white resize-none"
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="nda" name="nda" />
        <Label htmlFor="nda" className="text-sm font-normal cursor-pointer">
          I would like to receive the full investor package under NDA
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { PricingToggle } from "./pricing-toggle"

interface PricingPlan {
  name: string
  incomeShare: string
  flatFeeMonthly: string
  flatFeeAnnual: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

export function PricingSection() {
  const [pricingModel, setPricingModel] = useState<"income" | "flat">("income")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      incomeShare: "5%",
      flatFeeMonthly: "$97",
      flatFeeAnnual: "$77",
      description: "Perfect for individuals just getting started",
      features: ["Basic messaging", "Join up to 5 communities", "Basic learning tools", "Mobile app access"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      incomeShare: "5%",
      flatFeeMonthly: "$97",
      flatFeeAnnual: "$77",
      description: "Ideal for active community members",
      features: [
        "Unlimited messaging",
        "Join unlimited communities",
        "Create 1 community",
        "Advanced learning tools",
        "AI-powered assistance",
        "Basic monetization tools",
      ],
      cta: "Get Premium",
      popular: true,
    },
    {
      name: "Enterprise",
      incomeShare: "5%",
      flatFeeMonthly: "$97",
      flatFeeAnnual: "$77",
      description: "For community leaders and businesses",
      features: [
        "Everything in Premium",
        "Create unlimited communities",
        "Advanced monetization tools",
        "Marketplace integration",
        "Analytics dashboard",
        "Priority support",
        "Custom branding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const getPrice = (plan: PricingPlan) => {
    if (pricingModel === "income") {
      return plan.incomeShare
    } else {
      return billingPeriod === "monthly" ? plan.flatFeeMonthly : plan.flatFeeAnnual
    }
  }

  const getPriceLabel = (plan: PricingPlan) => {
    if (pricingModel === "income") {
      return "of revenue"
    } else {
      return billingPeriod === "monthly" ? "/ month" : "/ month, billed annually"
    }
  }

  return (
    <section id="pricing" className="py-20 bg-[#071230]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-6">
          Choose the pricing model that works best for your community.
        </p>

        <div className="flex justify-center mb-16">
          <PricingToggle onPricingModelChange={setPricingModel} onBillingPeriodChange={setBillingPeriod} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#0A1535] rounded-xl p-8 border relative",
                plan.popular ? "border-orange-500 shadow-lg shadow-orange-500/20" : "border-[#0F1C40]",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{getPrice(plan)}</span>
                <span className="text-slate-400"> {getPriceLabel(plan)}</span>
              </div>
              <p className="text-slate-300 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "w-full",
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    : "bg-[#0F1C40] text-white hover:bg-[#132252]",
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

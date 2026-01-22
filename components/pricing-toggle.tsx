"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PricingToggleProps {
  onPricingModelChange: (model: "income" | "flat") => void
  onBillingPeriodChange: (period: "monthly" | "annual") => void
}

export function PricingToggle({ onPricingModelChange, onBillingPeriodChange }: PricingToggleProps) {
  const [pricingModel, setPricingModel] = useState<"income" | "flat">("income")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const handlePricingModelChange = (model: "income" | "flat") => {
    setPricingModel(model)
    onPricingModelChange(model)
  }

  const handleBillingPeriodChange = (period: "monthly" | "annual") => {
    setBillingPeriod(period)
    onBillingPeriodChange(period)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-[#0A1535] p-1 rounded-lg inline-flex">
        <Button
          type="button"
          variant={pricingModel === "income" ? "default" : "ghost"}
          className={pricingModel === "income" ? "bg-orange-500 hover:bg-orange-600 text-white" : "text-slate-300"}
          onClick={() => handlePricingModelChange("income")}
        >
          Income Share
        </Button>
        <Button
          type="button"
          variant={pricingModel === "flat" ? "default" : "ghost"}
          className={pricingModel === "flat" ? "bg-orange-500 hover:bg-orange-600 text-white" : "text-slate-300"}
          onClick={() => handlePricingModelChange("flat")}
        >
          Flat Fee
        </Button>
      </div>
      <div className="bg-[#0A1535] p-1 rounded-lg inline-flex">
        <Button
          type="button"
          variant={billingPeriod === "monthly" ? "default" : "ghost"}
          className={billingPeriod === "monthly" ? "bg-orange-500 hover:bg-orange-600 text-white" : "text-slate-300"}
          onClick={() => handleBillingPeriodChange("monthly")}
        >
          Monthly
        </Button>
        <Button
          type="button"
          variant={billingPeriod === "annual" ? "default" : "ghost"}
          className={billingPeriod === "annual" ? "bg-orange-500 hover:bg-orange-600 text-white" : "text-slate-300"}
          onClick={() => handleBillingPeriodChange("annual")}
        >
          Annual (Save 20%)
        </Button>
      </div>
    </div>
  )
}

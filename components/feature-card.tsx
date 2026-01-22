import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-900 rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}

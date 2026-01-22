interface MetricCardProps {
  value: string
  label: string
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-blue-900/30 rounded-xl p-6 text-center border border-blue-800">
      <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{value}</div>
      <div className="text-slate-300">{label}</div>
    </div>
  )
}

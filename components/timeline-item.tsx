interface TimelineItemProps {
  date: string
  title: string
  description: string
  position: "left" | "right"
}

export function TimelineItem({ date, title, description, position }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Circle in the middle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>

      <div
        className={`flex ${position === "left" ? "justify-start md:justify-end" : "justify-start"} md:w-1/2 ${position === "left" ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}
      >
        <div className="bg-[#0A1535] rounded-xl p-6 border border-blue-800 shadow-md w-full max-w-md">
          <div className="text-orange-500 font-bold mb-2">{date}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

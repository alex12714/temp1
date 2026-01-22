import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="bg-[#0A1535] rounded-xl overflow-hidden border border-blue-800 shadow-xl">
      <div className="aspect-square relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover filter grayscale" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-orange-500 mb-4">{role}</p>
        <p className="text-slate-300 text-sm">{bio}</p>
      </div>
    </div>
  )
}

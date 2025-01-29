import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
  city: string
  state?: string
  country?: string
  savings: string
  description: string
}

export default function CaseStudyCard({ city, state, country, savings, description }: CaseStudyCardProps) {
  const location = state ? `${city}, ${state}` : `${city}, ${country}`
  const slug = city.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{location}</h3>
      <p className="text-2xl font-bold text-pictonBlue-600 mb-2">{savings}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={`/case-studies/${slug}`}
        className="text-pictonBlue-600 font-semibold hover:text-pictonBlue-700 inline-flex items-center"
      >
        Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  )
}


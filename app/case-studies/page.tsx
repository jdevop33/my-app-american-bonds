import Link from "next/link"
import { ArrowRight, Lightbulb } from "lucide-react"

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
        Lighting Up the Future: Cities Leading the Way
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Discover how innovative cities around the world have implemented LED street light replacement projects, reducing
        their carbon footprint and saving millions in energy costs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cities.map((city, index) => (
          <CityCard key={index} {...city} />
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">The Global Impact of LED Street Lights</h2>
        <p className="text-muted-foreground mb-4">
          LED street lights are revolutionizing urban infrastructure worldwide, offering significant energy savings,
          reduced maintenance costs, and improved environmental outcomes. Cities across America and around the globe are
          leading the charge in sustainable lighting solutions.
        </p>
        <Link href="/about" className="text-primary font-semibold hover:underline inline-flex items-center">
          Learn More About LED Technology <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Ready to Illuminate Your City's Future?</h2>
        <Link href="/contact" className="btn-primary">
          Get Started with Bright America Bonds
        </Link>
      </div>
    </div>
  )
}

const CityCard = ({
  name,
  state,
  country,
  projectDetails,
  savings,
  link,
}: { name: string; state?: string; country: string; projectDetails: string; savings: string; link: string }) => (
  <div className="bg-background p-6 rounded-lg shadow-md border border-border">
    <Lightbulb className="w-12 h-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-foreground">
      {name}, {state || country}
    </h3>
    <p className="text-muted-foreground mb-4">{projectDetails}</p>
    <p className="text-lg font-bold text-primary mb-4">{savings}</p>
    <Link href={link} className="text-primary font-semibold hover:underline inline-flex items-center">
      Read More <ArrowRight className="ml-2 w-4 h-4" />
    </Link>
  </div>
)

const cities = [
  {
    name: "Edinburgh",
    country: "UK",
    projectDetails: "Upgrading 64,000 streetlights to smart LED systems",
    savings: "£1.5 million saved annually",
    link: "/case-studies/edinburgh",
  },
  {
    name: "Ann Arbor",
    state: "MI",
    country: "USA",
    projectDetails: "Pioneering LED streetlight program with innovative funding and technology",
    savings: "Over $100,000 saved annually",
    link: "/case-studies/ann-arbor",
  },
  {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    projectDetails: "Completed world's largest LED retrofit, converting 140,000+ street lights",
    savings: "$9 million saved annually",
    link: "/case-studies/los-angeles",
  },
  {
    name: "Portland",
    state: "OR",
    country: "USA",
    projectDetails: "Converted 50,000+ streetlights to LED in a three-year project",
    savings: "$1.5 million saved annually",
    link: "/case-studies/portland",
  },
  {
    name: "Cleveland",
    state: "OH",
    country: "USA",
    projectDetails: "Upgrading 61,000 street lights with integrated smart cameras",
    savings: "Improved safety and efficiency",
    link: "/case-studies",
  },
  {
    name: "Chicago",
    state: "IL",
    country: "USA",
    projectDetails: "Committed to upgrading 270,000 street lights by 2021",
    savings: "Significant energy reduction",
    link: "/case-studies",
  },
  {
    name: "San Francisco",
    state: "CA",
    country: "USA",
    projectDetails: "Replacing 18,500 high-pressure sodium lights with warm white LEDs",
    savings: "Enhanced visibility and energy savings",
    link: "/case-studies",
  },
  {
    name: "Boston",
    state: "MA",
    country: "USA",
    projectDetails: "Early adopter since 2010, replacing mercury vapor and sodium lights",
    savings: "60% reduction in energy use and emissions",
    link: "/case-studies",
  },
  {
    name: "New York",
    state: "NY",
    country: "USA",
    projectDetails: "70% of street lights converted to LED as of 2017",
    savings: "$87 million projected annual savings",
    link: "/case-studies",
  },
  {
    name: "Austin",
    state: "TX",
    country: "USA",
    projectDetails: "Implemented Dark Sky and Streetlight Automation Project",
    savings: "Reduced light pollution and remote management",
    link: "/case-studies",
  },
  {
    name: "Yonkers",
    state: "NY",
    country: "USA",
    projectDetails: "Replacing all 12,000 city street lights with LED lamps",
    savings: "$18 million saved over 10 years",
    link: "/case-studies",
  },
  {
    name: "Tacoma",
    state: "WA",
    country: "USA",
    projectDetails: "Replacing 75% of city street lights with LED fixtures",
    savings: "Significant reduction in energy usage",
    link: "/case-studies",
  },
]


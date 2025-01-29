import Link from "next/link"
import { ArrowLeft, Lightbulb, DollarSign, Leaf, Zap } from "lucide-react"

export default function PortlandCaseStudy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link href="/case-studies" className="text-primary font-semibold hover:underline inline-flex items-center mb-8">
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
      </Link>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
        Portland: Illuminating Sustainability and Safety
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        How the City of Roses bloomed with energy efficiency through a comprehensive LED streetlight conversion project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FactCard
          icon={<Lightbulb className="w-12 h-12 text-primary" />}
          title="50,000+"
          description="Streetlights converted to LED"
        />
        <FactCard
          icon={<DollarSign className="w-12 h-12 text-primary" />}
          title="$1.5 Million"
          description="Annual savings in energy and maintenance costs"
        />
        <FactCard
          icon={<Leaf className="w-12 h-12 text-primary" />}
          title="10,500 Tons"
          description="Annual reduction in carbon pollution"
        />
      </div>

      <div className="prose max-w-none mb-12">
        <h2>Project Overview</h2>
        <p>
          In 2012, the Portland Bureau of Transportation (PBOT) initiated an ambitious LED streetlight conversion
          project. Over three years, the city successfully updated more than 50,000 streetlights, including both cobra
          head and ornamental fixtures, marking a significant step towards energy efficiency and sustainability.
        </p>

        <h2>Key Achievements</h2>
        <ul>
          <li>Converted over 50,000 streetlights to LED technology</li>
          <li>Achieved annual savings of approximately $1.5 million in energy and maintenance costs</li>
          <li>Reduced energy consumption by about 50% compared to previous high-pressure sodium (HPS) lights</li>
          <li>Decreased electrical usage by 20 million kilowatt-hours annually</li>
          <li>Eliminated around 10,500 tons of carbon pollution each year</li>
        </ul>

        <h2>Environmental and Community Impact</h2>
        <p>
          The new LED fixtures were designed to reduce light pollution, resulting in clearer night skies for residents.
          However, the project also highlighted the importance of balancing energy efficiency with community needs, as
          some residents expressed concerns about the brightness and color temperature of the new lights.
        </p>

        <h2>Reinvestment in Safety</h2>
        <p>
          PBOT developed an innovative plan to reinvest the savings from the LED conversion. The funds are being used to
          enhance street lighting in areas identified as high-risk for traffic incidents, particularly within the High
          Crash Network. This initiative aims to improve safety and equity in lighting infrastructure across the city.
        </p>

        <h2>Lessons Learned</h2>
        <p>
          Portland's LED streetlight conversion project demonstrates the potential for significant energy and cost
          savings while also highlighting the importance of community engagement and adaptive planning. The city's
          approach to reinvesting savings into safety improvements showcases how infrastructure upgrades can have
          far-reaching benefits beyond initial goals.
        </p>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How Bright America Bonds Can Help</h2>
        <p className="text-muted-foreground mb-4">
          Bright America Bonds can provide the financing needed for cities to implement large-scale LED street light
          conversion projects like Portland's. Our innovative funding model allows cities to modernize their
          infrastructure without upfront costs, using the energy savings to repay the bonds over time. We can also help
          cities develop strategies for reinvesting savings into further improvements, enhancing the overall impact of
          the project.
        </p>
        <Link href="/for-cities" className="text-primary font-semibold hover:underline inline-flex items-center">
          Learn More About Our Solutions for Cities <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Ready to Illuminate Your City's Future?</h2>
        <Link href="/contact" className="btn-primary">
          Contact Us to Get Started
        </Link>
      </div>
    </div>
  )
}

const FactCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-background p-6 rounded-lg shadow-md border border-border text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
)


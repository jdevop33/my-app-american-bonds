import Link from "next/link"
import { ArrowLeft, Lightbulb, DollarSign, Leaf, Clock, ThumbsUp } from "lucide-react"

export default function EdinburghCaseStudy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link href="/case-studies" className="text-primary font-semibold hover:underline inline-flex items-center mb-8">
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
      </Link>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
        Edinburgh: Illuminating a Historic City with Modern Technology
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        How Scotland's capital is leading the way in smart LED street lighting, balancing heritage preservation with
        cutting-edge efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FactCard
          icon={<Lightbulb className="w-12 h-12 text-primary" />}
          title="64,000"
          description="Streetlights upgraded to smart LED systems"
        />
        <FactCard
          icon={<DollarSign className="w-12 h-12 text-primary" />}
          title="£1.5 Million"
          description="Annual savings from LED streetlights"
        />
        <FactCard
          icon={<Leaf className="w-12 h-12 text-primary" />}
          title="50%"
          description="Reduction in energy usage"
        />
      </div>

      <div className="prose max-w-none mb-12">
        <h2>Project Overview</h2>
        <p>
          The City of Edinburgh Council embarked on an ambitious project to upgrade approximately 64,000 streetlights to
          smart LED systems. This large-scale initiative aimed to significantly reduce energy consumption and associated
          costs while improving lighting quality across the historic city.
        </p>

        <h2>Key Achievements</h2>
        <ul>
          <li>Upgrading 64,000 streetlights to smart LED systems</li>
          <li>50% reduction in energy usage</li>
          <li>£1.5 million in annual savings</li>
          <li>Projected savings of £54 million over a 20-year period</li>
          <li>Improved lighting quality and control</li>
        </ul>

        <h2>Smart Technology Integration</h2>
        <p>
          Edinburgh's new LED streetlights are equipped with smart technology, allowing for remote control and
          monitoring. This system enables the city to adjust lighting levels based on time of day, weather conditions,
          and other factors, further enhancing energy efficiency and reducing light pollution.
        </p>

        <h2>Environmental Impact</h2>
        <p>
          The significant reduction in energy usage translates to a substantial decrease in the city's carbon footprint.
          This aligns with Edinburgh's broader sustainability goals and contributes to Scotland's national efforts to
          combat climate change.
        </p>

        <h2>Public Reception</h2>
        <p>A survey conducted during the pilot phase revealed overwhelming public support for the new LED lighting:</p>
        <ul>
          <li>89% of residents were satisfied with the new lighting</li>
          <li>83% felt the brightness was appropriate</li>
        </ul>
        <p>
          The city has been proactive in addressing concerns about brightness and color temperature through careful
          design and community engagement.
        </p>

        <h2>Financial Analysis</h2>
        <p>The project's financial benefits are substantial:</p>
        <ul>
          <li>Annual savings of £1.5 million</li>
          <li>Projected savings of £54 million over 20 years</li>
          <li>Reduced maintenance costs due to longer lifespan of LED lights</li>
        </ul>
        <p>
          These savings allow Edinburgh to reinvest in other critical infrastructure and services, benefiting residents
          across the city.
        </p>

        <h2>Lessons Learned</h2>
        <p>
          Edinburgh's success demonstrates the potential for large-scale LED street light conversions in historic
          cities. Key takeaways include:
        </p>
        <ul>
          <li>Importance of community engagement and feedback</li>
          <li>Balance between energy efficiency and preserving the city's unique character</li>
          <li>Long-term financial benefits of investing in smart, energy-efficient infrastructure</li>
        </ul>

        <h2>Broader Impact</h2>
        <p>
          Edinburgh's project is part of a larger trend across the UK. The Scottish Futures Trust reported that a £298
          million investment in LED street lighting across Scotland could generate potential savings of approximately
          £1.3 billion over a 20-year period. This highlights the immense potential for other cities to achieve similar
          results.
        </p>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How Bright America Bonds Can Help</h2>
        <p className="text-muted-foreground mb-4">
          While Bright America Bonds primarily focuses on U.S. cities, Edinburgh's success story offers valuable
          insights for our projects. We can help American cities implement similar large-scale LED street light
          conversion projects, providing the necessary funding and expertise. Our innovative financing model allows
          cities to modernize their infrastructure without upfront costs, using the energy savings to repay the bonds
          over time.
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


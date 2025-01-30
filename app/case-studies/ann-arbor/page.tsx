import Link from "next/link";
import {
  ArrowLeft,
  DollarSign,
  Leaf,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function AnnArborCaseStudy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link
        href="/case-studies"
        className="text-primary font-semibold hover:underline inline-flex items-center mb-8"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
      </Link>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
        Ann Arbor: Pioneering Smart Lighting Solutions
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        How the City of Ann Arbor implemented an innovative LED streetlight
        program, setting new standards for energy efficiency and urban lighting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FactCard
          icon={<DollarSign className="w-12 h-12 text-primary" />}
          title="$100,000+"
          description="Annual savings from retrofitted lights"
        />
        <FactCard
          icon={<Leaf className="w-12 h-12 text-primary" />}
          title="2,200 Tonnes"
          description="Potential annual CO2e reduction citywide"
        />
        <FactCard
          icon={<Clock className="w-12 h-12 text-primary" />}
          title="4.4 Years"
          description="Payback period for downtown project"
        />
      </div>

      <div className="prose max-w-none mb-12">
        <h2>Project Overview</h2>
        <p>
          Ann Arbor&apos;s LED Streetlight Program stands out as a model of
          innovation in urban lighting. Starting with a downtown retrofit of
          1,000 lights, the city has demonstrated significant energy savings,
          cost reductions, and environmental benefits.
        </p>

        <h2>Key Achievements</h2>
        <ul>
          <li>50% reduction in energy consumption per LED fixture</li>
          <li>Over $100,000 in annual savings from retrofitted lights</li>
          <li>
            267 tonnes of CO2e emissions reduced annually from the initial
            downtown retrofit
          </li>
          <li>
            Potential for over 2,200 tonnes of CO2e reduction annually with full
            citywide implementation
          </li>
          <li>
            Significant reduction in maintenance costs due to longer LED
            lifespan (10 years vs. 2 years for conventional bulbs)
          </li>
        </ul>

        <h2>Innovative Approach</h2>
        <h3>Funding and Implementation</h3>
        <p>
          The program kicked off with a $630,000 grant from the Downtown
          Development Authority (DDA), funding the first phase of 1,000 downtown
          light retrofits. This initial investment paved the way for a
          self-sustaining upgrade cycle, where savings from retrofitted lights
          fund further upgrades.
        </p>

        <h3>Technology Partnerships</h3>
        <p>
          Ann Arbor partnered with lighting control companies to test
          cutting-edge features like motion sensors and dimming capabilities,
          pushing the boundaries of energy efficiency in urban lighting.
        </p>

        <h2>Overcoming Challenges</h2>
        <p>
          The city faced initial hurdles with early LED technologies in 2005,
          which had poor light output and high costs. However, rapid industry
          improvements made LED adoption viable within just two years. The team
          also focused on effective heat management to ensure the LEDs achieved
          their projected 10-year lifespan.
        </p>

        <h2>Community Impact</h2>
        <p>
          Public reception was overwhelmingly positive, with residents
          appreciating the reduced light pollution and better-focused
          illumination on streets and sidewalks. The program also aligns with
          the Dark Skies Initiative, minimizing light pollution and improving
          environmental compliance.
        </p>

        <h2>Financial Analysis</h2>
        <p>
          A lifecycle cost analysis revealed that over 10 years, each LED bulb
          saved $962 in energy and maintenance costs, making it significantly
          more cost-effective than traditional bulbs. The 4.4-year payback
          period for the downtown project demonstrates the quick financial
          returns of LED retrofitting.
        </p>

        <h2>Future Potential</h2>
        <p>
          Ann Arbor&apos;s approach of reinvesting savings into further retrofits
          ensures a sustainable, long-term improvement in the city&apos;s lighting
          infrastructure. This model not only continues to generate cost savings
          but also progressively reduces the city&apos;s carbon footprint.
        </p>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          How Bright America Bonds Can Help
        </h2>
        <p className="text-muted-foreground mb-4">
          Bright America Bonds can provide the initial funding needed for cities
          to implement large-scale LED street light conversion projects like Ann
          Arbor&apos;s. Our innovative funding model allows cities to modernize their
          infrastructure without upfront costs, using the energy savings to
          repay the bonds over time. We can also help cities develop strategies
          for reinvesting savings into further improvements, creating a
          sustainable cycle of upgrades and savings.
        </p>
        <Link
          href="/for-cities"
          className="text-primary font-semibold hover:underline inline-flex items-center"
        >
          Learn More About Our Solutions for Cities{" "}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
          Ready to Illuminate Your City&apos;s Future?
        </h2>
        <Link href="/contact" className="btn-primary">
          Contact Us to Get Started
        </Link>
      </div>
    </div>
  );
}

const FactCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-background p-6 rounded-lg shadow-md border border-border text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

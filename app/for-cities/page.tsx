import Link from "next/link";
import { DollarSign, Zap, Users, BarChart2 } from "lucide-react";

export default function ForCities() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-pictonBlue-800 mb-6">
        For City Managers: Modernize Without the Burden
      </h1>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        Upgrade your city's infrastructure, reduce costs, and create jobs
        without raising taxes or burdening your budget.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<DollarSign className="w-12 h-12 text-pictonBlue-600" />}
          title="No Upfront Costs"
          description="Modernize infrastructure without burdening taxpayers. Bright America Bonds provide the capital you need."
        />
        <FeatureCard
          icon={<Zap className="w-12 h-12 text-pictonBlue-600" />}
          title="Immediate Savings"
          description="LED upgrades and other efficiency improvements start saving money from Year 1, creating positive cash flow."
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-pictonBlue-600" />}
          title="Job Creation and Training"
          description="Workforce development initiatives address labor shortages in public works departments and boost local employment."
        />
        <FeatureCard
          icon={<BarChart2 className="w-12 h-12 text-pictonBlue-600" />}
          title="Broad Municipal Benefits"
          description="Reduce energy and maintenance costs by up to 75%, enhance public safety, and meet environmental mandates."
        />
      </div>

      <div className="bg-pictonBlue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-pictonBlue-800 mb-4">
          Easy Implementation
        </h2>
        <p className="text-gray-700 mb-4">
          Bright America Bonds come with bundled financing, performance
          guarantees, and streamlined underwriting, making it simple for cities
          to adopt and implement infrastructure modernization projects.
        </p>
        <Link
          href="/implementation-guide"
          className="text-pictonBlue-600 font-semibold hover:text-pictonBlue-700 hover:underline"
        >
          View Implementation Guide →
        </Link>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-pictonBlue-800 mb-6">
          Ready to Brighten Your City's Future?
        </h2>
        <Link href="/contact" className="btn-pictonBlue inline-block">
          Request a Consultation
        </Link>
      </div>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-pictonBlue-100">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-pictonBlue-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

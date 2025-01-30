import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Leaf,
  BarChart2,
  DollarSign,
  Clock,
} from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { FactCard } from "@/components/FactCard";

interface InvestorFact {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const facts: InvestorFact[] = [
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "$100,000+",
    description: "Annual savings from retrofitted lights",
  },
  {
    icon: <Leaf className="w-12 h-12 text-primary" />,
    title: "2,200 Tonnes",
    description: "Potential annual CO2e reduction citywide",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "4.4 Years",
    description: "Payback period for downtown project",
  },
];

export const metadata = {
  title: "Investor Information | Bright America Bonds",
  description:
    "Discover the financial benefits of investing in Bright America Bonds. Compare yields, understand our self-funding model, and see how we stack up against traditional municipal and corporate bonds.",
};

export default function InvestorInformation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12 font-serif">
          Investor Information
        </h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-700 mb-8">
            Bright America Bonds offer a unique investment opportunity that
            combines the stability of municipal bonds with the growth potential
            of sustainable infrastructure projects. Here&apos;s why they stand
            out:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {facts.map((fact, index) => (
            <FactCard
              key={index}
              icon={fact.icon}
              title={fact.title}
              description={fact.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Taxable-Equivalent Yields (TEYs)
            </h2>
            <Image
              src="/images/tey-comparison-chart.png"
              alt="Taxable-Equivalent Yields Comparison"
              width={500}
              height={300}
              className="rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700">
              In high-tax states like California, our A-rated bonds offer TEYs
              of nearly 7%, outpacing many higher-risk investments.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Safety Metrics</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>
                  <strong>Low Default Rate:</strong> Only 0.10% for
                  investment-grade municipal bonds (Moody&apos;s)
                </span>
              </li>
              <li className="flex items-start">
                <BarChart2 className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>
                  <strong>Balanced Budgets:</strong> Municipalities are required
                  by law to maintain balanced budgets
                </span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>
                  <strong>Rainy Day Funds:</strong> State rainy day funds
                  average 13% of general fund spending
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Comparison to Traditional Bonds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ComparisonCard
              title="Bright America Bonds"
              features={[
                "Self-funding through energy savings",
                "ESG-aligned investments",
                "Competitive TEYs",
                "Low default risk",
              ]}
            />
            <ComparisonCard
              title="Traditional Municipal Bonds"
              features={[
                "Backed by tax revenues",
                "Tax-exempt interest",
                "Generally low risk",
                "May not align with ESG goals",
              ]}
            />
            <ComparisonCard
              title="Corporate Bonds"
              features={[
                "Backed by company assets",
                "Taxable interest",
                "Higher risk than munis",
                "Potentially higher yields",
              ]}
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
            Ready to Invest in America&apos;s Future?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join us in modernizing America&apos;s infrastructure while securing
            your financial future with Bright America Bonds.
          </p>
          <Link href="/contact?type=investor" className="btn-primary">
            Contact Us to Invest
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
            Expert Opinions
          </h2>
          <blockquote className="italic text-gray-700 mb-4">
            &quot;Municipal bonds represent one of the safest asset classes in
            the world, offering consistent returns and supporting vital
            infrastructure projects.&quot;
          </blockquote>
          <p className="text-right">— JP Morgan Asset Management</p>
          <blockquote className="italic text-gray-700 mb-4 mt-8">
            &quot;The savings generated by LED streetlights provide a reliable
            and predictable funding source for bond repayment.&quot;
          </blockquote>
          <p className="text-right">— Case Study, City of Portland</p>
        </div>
        <CallToAction />
      </div>
    </div>
  );
}

const ComparisonCard = ({
  title,
  features,
}: {
  title: string;
  features: string[];
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <ArrowRight className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

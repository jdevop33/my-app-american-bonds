import Link from "next/link";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Leaf,
  BarChart2,
  DollarSign,
} from "lucide-react";

export const metadata = {
  title:
    "Why Invest in Bright America Bonds | Secure and Sustainable Infrastructure Financing",
  description:
    "Discover why Bright America Bonds offer a unique investment opportunity with low risk, attractive yields, and alignment with ESG goals. Learn about our self-funding model backed by energy savings.",
};

export default function WhyInvest() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
          Why Invest in Bright America Bonds?
        </h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-700 mb-8">
            Bright America Bonds offer a unique investment opportunity that
            combines the stability of municipal bonds with the growth potential
            of sustainable infrastructure projects. Here&apos;s why they stand
            out:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-green-600" />}
            title="Exceptionally Low Risk"
            description="With a default rate of only 0.10% for investment-grade municipal bonds (Moody's), Bright America Bonds offer one of the safest fixed-income investments available."
          />
          <FeatureCard
            icon={<TrendingUp className="w-12 h-12 text-green-600" />}
            title="Attractive Yields"
            description="In high-tax states like California, our A-rated bonds offer taxable-equivalent yields of nearly 7%, outpacing many higher-risk investments."
          />
          <FeatureCard
            icon={<Leaf className="w-12 h-12 text-green-600" />}
            title="ESG Alignment"
            description="Meet growing demand for sustainable investments by supporting green infrastructure projects that have a measurable positive impact on communities and the environment."
          />
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-green-600" />}
            title="Backed by Energy Savings"
            description="Our bonds are secured by engineered energy savings, with LED infrastructure projects typically achieving 50%-75% reductions in energy costs."
          />
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            What Makes Bright America Bonds Special
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>
                <strong>Self-Funding Model:</strong> Repayment is secured
                through measurable savings in energy costs, reducing reliance on
                traditional tax revenues.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>
                <strong>Predictable Returns:</strong> With a taxable-equivalent
                yield comparable to high-grade corporate bonds, Bright America
                Bonds deliver consistent, tax-advantaged returns.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>
                <strong>Win-Win for All:</strong> Municipalities modernize
                infrastructure without upfront costs, while investors benefit
                from low-risk, tax-advantaged returns.
              </span>
            </li>
          </ul>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            Financial Stability
          </h2>
          <p className="text-gray-700 mb-4">
            Bright America Bonds are backed by more than just energy savings.
            State and local governments have significantly improved their
            financial positions in recent years:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <DollarSign className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>
                State rainy day funds have grown to an average of 13% of general
                fund spending, providing a robust financial cushion.
              </span>
            </li>
            <li className="flex items-start">
              <DollarSign className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>
                Municipalities are required by law to maintain balanced budgets,
                unlike federal government debt.
              </span>
            </li>
          </ul>
          <p className="text-gray-700">
            These factors contribute to the overall stability and attractiveness
            of Bright America Bonds as an investment option.
          </p>
        </div>
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
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

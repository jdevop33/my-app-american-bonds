import Link from "next/link";
import {
  ArrowRight,
  LightbulbIcon as LightBulb,
  BarChart,
  Users,
  Leaf,
  DollarSign,
  Building,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import SavingsCalculator from "@/components/SavingsCalculator";
import CaseStudyCard from "@/components/CaseStudyCard";
import CrosswalkTreatmentTable from "@/components/CrosswalkTreatmentTable";

export default function MarketingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pictonBlue-700 to-pictonBlue-500 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Invest in America&apos;s Future: Bright America Bonds
            </h1>
            <p className="mt-6 text-xl">
              Smart financing for sustainable cities. Upgrade infrastructure
              without upfront costs.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="#learn-more" className="btn-pictonBlue">
                Learn More
              </Link>
              <Link href="/contact" className="btn-pictonBlue-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section id="learn-more" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Infrastructure That Pays for Itself
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Bright America Bonds provide municipalities with the capital to
              upgrade critical infrastructure—starting with energy-efficient
              street lighting—without upfront costs. These bonds are repaid
              through guaranteed energy savings, creating a win-win situation
              for cities, investors, and local communities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<BarChart className="w-12 h-12 text-pictonBlue-600" />}
              title="For Financial Institutions"
              benefits={[
                "Low-Risk Investment",
                "High Demand",
                "ESG and Green Investment Alignment",
              ]}
            />
            <BenefitCard
              icon={<Building className="w-12 h-12 text-pictonBlue-600" />}
              title="For Municipal Leaders"
              benefits={[
                "No New Taxes or Budget Increases",
                "Immediate Modernization",
                "Community Impact",
              ]}
            />
            <BenefitCard
              icon={<Users className="w-12 h-12 text-pictonBlue-600" />}
              title="For Residents and Advocates"
              benefits={[
                "Brighter, Safer Streets",
                "Sustainable and Efficient",
                "Job Creation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              icon={<DollarSign className="w-12 h-12 text-pictonBlue-600" />}
              title="Issue the Bond"
              description="Municipalities issue Bright America Bonds to finance infrastructure upgrades. Capital is raised through investors interested in stable, low-risk returns."
            />
            <ProcessStep
              icon={<LightBulb className="w-12 h-12 text-pictonBlue-600" />}
              title="Upgrade Infrastructure"
              description="Funds are used to implement energy-efficient projects, such as LED streetlight conversions. Projects are managed by reputable Energy Service Companies (ESCOs) with guaranteed performance outcomes."
            />
            <ProcessStep
              icon={<Leaf className="w-12 h-12 text-pictonBlue-600" />}
              title="Realize Savings"
              description="Energy savings start immediately and are tracked throughout the project lifecycle. Savings are used to pay back the bondholders over the bond's term, typically 5-10 years."
            />
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Economic Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                $1M Investment Example
              </h3>
              <p className="text-gray-600">
                A $1 million bond can upgrade an entire city&apos;s street
                lighting system, leading to $300,000 in annual savings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Job Creation</h3>
              <p className="text-gray-600">
                Each project includes local workforce training and development,
                creating jobs and building a skilled labor pool.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              &quot;Bright America Bonds empower municipalities to take control
              of their infrastructure needs, align with sustainability goals,
              and drive local economic growth—all with minimal financial
              risk.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Pedestrian LED Crosswalk Control Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Enhancing Safety with Pedestrian LED Crosswalk Control Treatments
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Bright America Bonds can help finance advanced pedestrian safety
              solutions, such as LED crosswalk control treatments. These systems
              not only enhance safety but also contribute to energy savings and
              smart city initiatives.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Increased pedestrian safety at crosswalks</li>
                <li>Energy-efficient LED technology</li>
                <li>Customizable solutions for various urban environments</li>
                <li>Integration with smart city infrastructure</li>
                <li>Significant improvement in driver compliance</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              A study in British Columbia, Canada, provides insights into the
              costs and effectiveness of various pedestrian crosswalk
              treatments:
            </p>
            <CrosswalkTreatmentTable />
            <div className="mt-8 bg-pictonBlue-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-pictonBlue-600 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  After standard signs and markings, solar-powered RRFB systems
                  were found to be the most cost-effective to install and
                  operate when compared to overhead beacons. These systems can
                  significantly reduce both installation and long-term
                  operational costs.
                </p>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-pictonBlue-600 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  The study showed that driver compliance at crosswalks
                  increased significantly after implementing smart crosswalk
                  systems. In-Road Warning Lights (IRWL) systems improved
                  compliance by 25-45%, while Rectangular Rapid Flashing Beacons
                  (RRFBs) increased compliance by 14-34%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Calculate Your Savings
          </h2>
          <SavingsCalculator />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              city="Ann Arbor"
              state="MI"
              savings="$100,000+"
              description="Annual savings from LED streetlight program"
              metrics={[]}
            />
            <CaseStudyCard
              city="Edinburgh"
              country="UK"
              savings="£1.5 Million"
              description="Annual savings from 64,000 smart LED streetlights"
              metrics={[]}
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="btn-pictonBlue">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pictonBlue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Brighten Your City&apos;s Future?
          </h2>
          <p className="text-xl mb-8">
            Learn how Bright America Bonds can transform your municipality or
            investment portfolio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact?type=municipality"
              className="btn-pictonBlue-outline"
            >
              For Municipalities
            </Link>
            <Link
              href="/contact?type=investor"
              className="btn-pictonBlue-outline"
            >
              For Investors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const BenefitCard = ({
  icon,
  title,
  benefits,
}: {
  icon: React.ReactNode;
  title: string;
  benefits: string[];
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <ArrowRight className="w-5 h-5 text-pictonBlue-600 mr-2 flex-shrink-0 mt-1" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

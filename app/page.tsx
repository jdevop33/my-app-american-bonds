import Link from "next/link";
import Image from "next/image";
import SavingsCalculator from "@/components/SavingsCalculator";
import CaseStudyCard from "@/components/CaseStudyCard";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ChaRt from "@/components/Test";

export const metadata = {
  title:
    "Bright America Bonds - Secure, Sustainable, Self-Funding Infrastructure Financing",
  description:
    "Empower cities to modernize infrastructure without raising taxes. Discover how Bright America Bonds offer secure, sustainable, and self-funding solutions for municipal projects.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Bright America Bonds",
            url: "https://www.brightamericabonds.com",
            logo: "https://www.brightamericabonds.com/logo.png",
            sameAs: [
              "https://www.facebook.com/brightamericabonds",
              "https://www.linkedin.com/company/bright-america-bonds",
              "https://twitter.com/brightambonds",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer service",
            },
            description:
              "Bright America Bonds provides innovative financing solutions for municipal infrastructure upgrades, focusing on energy-efficient projects that pay for themselves through cost savings.",
          }),
        }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/led.jpg"
            alt="City at night with LED streetlights"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute z-0"
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Secure. Sustainable. Self-Funding.
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bright America Bonds empower cities to modernize without raising
              taxes.
            </p>
            <Link href="#how-it-works" className="btn-primary text-lg">
              Discover How It Works
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
              How It Works
            </h2>
            <HowItWorks />
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CaseStudyCard
                city="Portland"
                state="OR"
                savings="$1.5 Million"
                description="Annual energy savings"
                metrics={[
                  { label: "Payback Period", value: "5 years" },
                  { label: "CO2 Reduction", value: "10,500 tons/year" },
                ]}
              />
              <CaseStudyCard
                city="Ann Arbor"
                state="MI"
                savings="$100,000+"
                description="Annual energy savings"
                metrics={[
                  { label: "Payback Period", value: "4.4 years" },
                  { label: "CO2 Reduction", value: "2,200 tons/year" },
                ]}
              />
              <CaseStudyCard
                city="Edinburgh"
                country="UK"
                savings="£1.5 Million"
                description="Annual energy savings"
                metrics={[
                  { label: "Payback Period", value: "7 years" },
                  { label: "Energy Reduction", value: "50%" },
                ]}
              />
            </div>
            <div className="mt-12 text-center">
              <Link href="/case-studies" className="btn-primary">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Financial Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
              Financial Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Competitive Yields
                </h3>
                <ChaRt
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Self-Funding Model
                </h3>
                <Image
                  src="/images/self-funding-infographic.png"
                  alt="Infographic explaining how the bonds are self-funded via energy savings"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
              What People Are Saying
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* Savings Calculator Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
              Calculate Your Savings
            </h2>
            <SavingsCalculator />
            <div className="mt-8 text-center">
              <Link href="/savings-calculator" className="btn-primary">
                Detailed Savings Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-green-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 font-serif">
              Let&apos;s Light the Way to a Brighter Future
            </h2>
            <p className="text-xl mb-8">
              Ready to modernize your city&apos;s infrastructure or invest in
              America&apos;s future?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact?type=municipality" className="btn-primary">
                For Municipalities
              </Link>
              <Link href="/investor-information" className="btn-outline">
                For Investors
              </Link>
            </div>
          </div>
        </section>
        <CallToAction />
      </div>
    </>
  );
}

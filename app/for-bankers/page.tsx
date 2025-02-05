import Link from "next/link";
import { Shield, TrendingUp, Leaf, BarChart } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export default function ForBankers() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
        For Bankers: Why Bright America Bonds Matter
      </h1>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        Discover a low-risk, high-impact investment opportunity that aligns with
        ESG goals and opens access to a broader pool of investors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-primary" />}
          title="Low-Risk Investment"
          description="Repayments are backed by engineered energy savings and municipal creditworthiness, ensuring stable returns."
        />
        <FeatureCard
          icon={<Leaf className="w-12 h-12 text-primary" />}
          title="ESG and Green Finance Alignment"
          description="Meet the growing demand for Environmental, Social, and Governance (ESG) investments and green bond standards."
        />
        <FeatureCard
          icon={<TrendingUp className="w-12 h-12 text-primary" />}
          title="Scalable and Replicable"
          description="Tailored for cities across North America, from small towns to large metropolitan areas, offering growth potential."
        />
        <FeatureCard
          icon={<BarChart className="w-12 h-12 text-primary" />}
          title="Win-Win for All Stakeholders"
          description="Strengthen municipal relationships while earning stable returns and seeing measurable impact and financial growth."
        />
      </div>

      <div className="text-center">
        <Link href="/contact?type=banker" className="btn-primary text-lg">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

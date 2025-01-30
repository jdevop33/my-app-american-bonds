import Link from "next/link";
import { Shield, TrendingUp, Leaf, BarChart } from "lucide-react";

export default function ForBankers() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
        For Bankers: Why Bright America Bonds Matter
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
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

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Case Study: Calgary's $5M Annual Savings
        </h2>
        <p className="text-muted-foreground mb-4">
          Calgary's implementation of LED streetlight upgrades, financed through
          a model similar to Bright America Bonds, resulted in $5 million annual
          savings. This case study demonstrates the potential for significant
          returns and positive environmental impact.
        </p>
        <Link
          href="/case-studies/calgary"
          className="text-primary font-semibold hover:underline"
        >
          Read Full Case Study →
        </Link>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
          Ready to Invest in America's Future?
        </h2>
        <Link href="/contact" className="btn-primary">
          Schedule a Consultation
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
  <div className="bg-background p-6 rounded-lg shadow-md border border-border">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

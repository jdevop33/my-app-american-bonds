import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Savings Calculator | Bright America Bonds",
  description:
    "Calculate potential energy savings, payback periods, and CO2 reductions for your city's infrastructure projects with our interactive savings calculator.",
};

export default function SavingsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

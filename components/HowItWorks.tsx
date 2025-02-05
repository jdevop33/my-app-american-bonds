import { DollarSign, LightbulbIcon, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <DollarSign className="w-12 h-12 text-green-600" />,
    title: "Issue Bonds",
    description: "Funding is secured through Bright America Bonds.",
  },
  {
    icon: <LightbulbIcon className="w-12 h-12 text-green-600" />,
    title: "Upgrade Infrastructure",
    description: "Energy-efficient LED streetlights are installed.",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    title: "Generate Savings",
    description: "Reduced energy costs pay back the bonds.",
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <div className="mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-green-600">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
          {index < steps.length - 1 && (
            <div className="hidden md:block text-green-600 text-4xl font-bold mt-4">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


interface CaseStudyCardProps {
  city: string;
  state?: string;
  country?: string;
  savings: string;
  description: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

const CaseStudyCard = ({
  city,
  state,
  country,
  savings,
  description,
  metrics,
}: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">
          {city}, {state || country}
        </h3>
        <div className="mt-2">
          <span className="text-xl font-semibold text-primary">{savings}</span>
          <span className="text-gray-600 ml-2">{description}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600">{metric.label}</span>
            <span className="font-medium">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;

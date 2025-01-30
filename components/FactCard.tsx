interface FactCardProps {
  icon: React.ReactNode;

  title: string;

  description: string;
}

export const FactCard = ({ icon, title, description }: FactCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      <p className="text-gray-700">{description}</p>
    </div>
  );
};

import React from "react";

const treatments = [
  {
    treatment: "Sign and Markings",
    cost: "Less than $10,000",
    compliance: "Baseline",
  },
  {
    treatment: "Solar RRFB system",
    cost: "$35,000",
    compliance: "14% to 34% increase",
  },
  {
    treatment: "AC RRFB system",
    cost: "Line power location dependent + operation cost",
    compliance: "14% to 34% increase",
  },
  {
    treatment: "Solar IRWL + RRFB",
    cost: "$50,000",
    compliance: "25% to 45% increase",
  },
  {
    treatment: "AC IRWL + RRFB",
    cost: "Line power location dependent + operation cost",
    compliance: "25% to 45% increase",
  },
  {
    treatment: "Overhead Beacons or RRFBs (mast arms)",
    cost: "$60,000 + operation cost",
    compliance: "10% to 30% increase",
  },
  {
    treatment: "Overhead Beacons + IRWL (solar may be available)",
    cost: "$80,000 + operation cost",
    compliance: "25% to 45% increase",
  },
  {
    treatment: "Pedestrian or half signal",
    cost: "$125,000 + operation cost",
    compliance: "Varies",
  },
];

export default function CrosswalkTreatmentTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-pictonBlue-50">
            <th className="py-2 px-4 border-b text-left">Treatment</th>
            <th className="py-2 px-4 border-b text-left">Initial Cost</th>
            <th className="py-2 px-4 border-b text-left">
              Driver Compliance Improvement
            </th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="py-2 px-4 border-b">{item.treatment}</td>
              <td className="py-2 px-4 border-b">{item.cost}</td>
              <td className="py-2 px-4 border-b">{item.compliance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

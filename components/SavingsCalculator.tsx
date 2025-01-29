"use client"

import { useState } from "react"
import { BarChart, DollarSign, Leaf } from "lucide-react"
import Link from "next/link"

export default function SavingsCalculator() {
  const [numLights, setNumLights] = useState(1000)

  const calculateSavings = () => {
    const annualEnergySavings = numLights * 0.1 * 4380 * 0.12 * 0.5
    const annualMaintenanceSavings = numLights * 50 * 0.75
    const totalAnnualSavings = annualEnergySavings + annualMaintenanceSavings
    const paybackPeriod = (numLights * 400) / totalAnnualSavings
    const co2Reduction = numLights * 0.1 * 4380 * 0.0007

    return {
      totalAnnualSavings,
      paybackPeriod,
      co2Reduction,
    }
  }

  const savings = calculateSavings()

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center">Quick Savings Estimate</h3>
      <div className="mb-6">
        <label htmlFor="numLights" className="block text-sm font-medium text-gray-700 mb-2">
          Number of Streetlights
        </label>
        <input
          type="number"
          id="numLights"
          value={numLights}
          onChange={(e) => setNumLights(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResultCard
          icon={<DollarSign className="w-6 h-6 text-green-600" />}
          title="Annual Savings"
          value={`$${savings.totalAnnualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
        />
        <ResultCard
          icon={<BarChart className="w-6 h-6 text-green-600" />}
          title="Payback Period"
          value={`${savings.paybackPeriod.toFixed(1)} years`}
        />
        <ResultCard
          icon={<Leaf className="w-6 h-6 text-green-600" />}
          title="Annual CO2 Reduction"
          value={`${savings.co2Reduction.toFixed(1)} tons`}
        />
      </div>
      <div className="mt-6 text-center">
        <Link href="/savings-calculator" className="text-green-600 hover:text-green-700 font-semibold">
          Use Detailed Calculator
        </Link>
      </div>
    </div>
  )
}

const ResultCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <div className="bg-green-50 p-4 rounded-lg text-center">
    <div className="flex items-center justify-center mb-2">
      {icon}
      <h4 className="text-lg font-semibold ml-2">{title}</h4>
    </div>
    <p className="text-xl font-bold text-green-600">{value}</p>
  </div>
)


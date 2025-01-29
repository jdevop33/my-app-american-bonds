"use client"

import { useState } from "react"
import { BarChart, DollarSign, Leaf } from "lucide-react"
import CallToAction from "@/components/CallToAction"

export default function SavingsCalculator() {
  const [numLights, setNumLights] = useState(1000)
  const [currentEnergyCost, setCurrentEnergyCost] = useState(0.12)
  const [currentMaintenanceCost, setCurrentMaintenanceCost] = useState(50)

  const calculateSavings = () => {
    const annualEnergySavings = numLights * 0.1 * 4380 * currentEnergyCost * 0.5
    const annualMaintenanceSavings = numLights * currentMaintenanceCost * 0.75
    const totalAnnualSavings = annualEnergySavings + annualMaintenanceSavings
    const paybackPeriod = (numLights * 400) / totalAnnualSavings
    const co2Reduction = numLights * 0.1 * 4380 * 0.0007

    return {
      annualEnergySavings,
      annualMaintenanceSavings,
      totalAnnualSavings,
      paybackPeriod,
      co2Reduction,
    }
  }

  const savings = calculateSavings()

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">Interactive Savings Calculator</h1>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
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
          <div>
            <label htmlFor="currentEnergyCost" className="block text-sm font-medium text-gray-700 mb-2">
              Current Energy Cost ($/kWh)
            </label>
            <input
              type="number"
              id="currentEnergyCost"
              value={currentEnergyCost}
              onChange={(e) => setCurrentEnergyCost(Number(e.target.value))}
              step="0.01"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="currentMaintenanceCost" className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Maintenance Cost per Light ($)
            </label>
            <input
              type="number"
              id="currentMaintenanceCost"
              value={currentMaintenanceCost}
              onChange={(e) => setCurrentMaintenanceCost(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResultCard
            icon={<DollarSign className="w-8 h-8 text-green-600" />}
            title="Annual Savings"
            value={`$${savings.totalAnnualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
          />
          <ResultCard
            icon={<BarChart className="w-8 h-8 text-green-600" />}
            title="Payback Period"
            value={`${savings.paybackPeriod.toFixed(1)} years`}
          />
          <ResultCard
            icon={<Leaf className="w-8 h-8 text-green-600" />}
            title="Annual CO2 Reduction"
            value={`${savings.co2Reduction.toFixed(1)} tons`}
          />
        </div>
        <CallToAction />
      </div>
    </div>
  )
}

const ResultCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-green-600">{value}</p>
  </div>
)


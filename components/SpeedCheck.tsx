"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, ShieldCheck, Clock, Bolt, Phone } from "lucide-react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ✅ Fix Chart.js error by registering required scales
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 📌 Panels for the storytelling section
const panels = [
  {
    title: "🚦 The Problem: Dangerous Roads",
    icon: <AlertTriangle className="text-red-500 w-16 h-16 md:w-20 md:h-20" />,
    description: "Speeding drivers put lives at risk. How can cities make roads safer?",
    bg: "bg-red-50 dark:bg-red-900 text-gray-900 dark:text-white",
  },
  {
    title: "⚡ The Solution: SpeedCheck® Radar Signs",
    icon: <ShieldCheck className="text-green-500 w-16 h-16 md:w-20 md:h-20" />,
    description: "SpeedCheck® signs slow drivers by up to 9 mph—proven traffic calming.",
    bg: "bg-green-50 dark:bg-green-900 text-gray-900 dark:text-white",
  },
  {
    title: "🛠️ Easy to Deploy, Built to Last",
    icon: <Bolt className="text-yellow-500 w-16 h-16 md:w-20 md:h-20" />,
    description: "Lightweight, no tools required, built-in diagnostics.",
    bg: "bg-yellow-50 dark:bg-yellow-900 text-gray-900 dark:text-white",
  },
  {
    title: "📊 Real Impact, Measurable Results",
    icon: <Clock className="text-blue-500 w-16 h-16 md:w-20 md:h-20" />,
    description: "Real-time data tracking to measure success.",
    bg: "bg-blue-50 dark:bg-blue-900 text-gray-900 dark:text-white",
  },
  {
    title: "📞 Ready to Make an Impact?",
    icon: <Phone className="text-indigo-500 w-16 h-16 md:w-20 md:h-20" />,
    description: "Let's talk! Find out how SpeedCheck® can improve your roads today.",
    bg: "bg-indigo-50 dark:bg-indigo-900 text-gray-900 dark:text-white",
  },
];

export default function SpeedCheckLanding() {
  const [speed, setSpeed] = useState(0);
  const [index, setIndex] = useState(0);

  // 🔥 Color-based speed display logic
  const getSpeedColor = (speed: number): string => {
    if (speed <= 25) return "text-green-500";
    if (speed <= 40) return "text-yellow-500";
    return "text-red-500 animate-pulse";
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      {/* 🚀 Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">SPEEDCHECK-12</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          The portable radar speed sign that slows drivers and collects data
        </p>
        <motion.div
          className="mt-8 bg-black p-6 rounded-lg inline-block shadow-lg"
          animate={{ scale: [0.9, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <span className="text-white text-lg">Your Speed</span>
          <h2 className={`text-6xl font-extrabold ${getSpeedColor(speed)}`}>{speed} mph</h2>
        </motion.div>
        <input
          type="range"
          min="0"
          max="60"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
          className="mt-4 w-64"
        />
      </section>

      {/* 🎭 Interactive Storytelling Section */}
      <section className="flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold mb-6">🚀 How SpeedCheck® Transforms Roads</h2>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-lg md:max-w-2xl p-6 md:p-8 rounded-xl shadow-xl ${panels[index].bg}`}
        >
          <div className="flex flex-col items-center text-center">
            {panels[index].icon}
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">{panels[index].title}</h2>
            <p className="text-lg md:text-xl mt-2">{panels[index].description}</p>
          </div>
        </motion.div>

        {/* ⏭️ Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          <Button variant="outline" onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}>
            ⬅️ Back
          </Button>
          <Button variant="default" onClick={() => setIndex(Math.min(panels.length - 1, index + 1))}>
            Next ➡️
          </Button>
        </div>
      </section>

      {/* 📊 Data Analytics Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">📈 Speed Data Insights</h2>
        <div className="max-w-4xl mx-auto">
          <Bar
            data={{
              labels: ["School Zone", "Residential Area", "Work Zone", "Highway"],
              datasets: [
                {
                  label: "Average Speed (mph)",
                  data: [25, 38, 29, 55],
                  backgroundColor: ["#34D399", "#FACC15", "#EF4444", "#3B82F6"],
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </section>

      {/* 📞 Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">Get a Free Quote</h2>
        <Input placeholder="Enter your email" className="mt-4 w-80 mx-auto" />
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Request a Demo
        </Button>
      </section>
    </div>
  );
}

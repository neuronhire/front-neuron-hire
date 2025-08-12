"use client";

import { motion } from "framer-motion";
import { Layers, Shield, Target, Users, Volume2, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "We build lasting bonds between engineers and businesses.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Target,
    title: "Cost Optimization",
    description:
      "Optimized global talent with matching quality without sacrificing quality.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Volume2,
    title: "Precision Over Volume",
    description:
      "We focus on quality matches, not flooding pipelines with noise.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Layers,
    title: "Flexibility",
    description: "From full-time to project work, we adapt to your needs.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    title: "Efficiency and Speed",
    description:
      "Fast, structured hiring without compromising quality or depth of vetting.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Honesty and Integrity",
    description:
      "We are transparent with your best interests at the forefront.",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export function HowWeCanHelpSection() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neuronhire-red-lines mb-6 body-mackinac">
            A frictionless hiring engine
            <br />
            made for speed and certainty.
          </h2>
          <p className="text-lg xl:text-xl text-neuronhire-red-lines max-w-3xl mx-auto body-satoshi">
            We don&apos;t waste your time. We ensure top tier brightest minds for
            long-term excellence. Join 150+ teams that say no to outdated
            hiring. Time to evolve.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow ${
                  index === 3
                    ? "md:col-span-2 lg:col-span-1 relative overflow-hidden"
                    : ""
                }`}
              >
                {index === 3 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-50"></div>
                )}

                <div
                  className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 mb-3 body-mackinac relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 body-satoshi relative z-10">
                  {feature.description}
                </p>

                {index === 3 && (
                  <div className="absolute bottom-4 right-4 opacity-20">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">TECH</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

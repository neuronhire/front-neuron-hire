"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Globe,
  MapPin,
  MessageCircle,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { FlagsMarquee } from "./flags-marquee";

const features = [
  {
    icon: Clock,
    text: "+5k hours delivered",
    color: "text-neuronhire-primary",
  },
  {
    icon: BadgeCheck,
    text: "97% match accuracy",
    color: "text-neuronhire-primary",
  },
  { icon: MapPin, text: "LATAM-based", color: "text-neuronhire-primary" },
  {
    icon: Globe,
    text: "US/EU timezone aligned",
    color: "text-neuronhire-primary",
  },
  {
    icon: Users,
    text: "+1000 engineers indexed",
    color: "text-neuronhire-primary",
  },
  {
    icon: Shield,
    text: "All core stacks covered",
    color: "text-neuronhire-primary",
  },
  {
    icon: Zap,
    text: "Used by funded startups",
    color: "text-neuronhire-primary",
  },
  {
    icon: MessageCircle,
    text: "English-ready talent",
    color: "text-neuronhire-primary",
  },
];

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whoYouNeedToHire: "",
    howManyPeople: "",
    howCanWeHelpYou: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-neuronhire-bg-main via-purple-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-neuronhire-black-100 mb-6 body-mackinac leading-tight">
                Let's build your tech team!
              </h1>

              <div className="space-y-4 text-lg text-neuronhire-black-100 body-satoshi">
                <p>Fill out the form and book your call.</p>
                <p>We'll get back to you within 24 hours with next steps.</p>
              </div>
            </div>

            <div className="space-y-4 text-neuronhire-black-100 body-satoshi">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 bg-neuronhire-primary rounded-full"></span>
                Speak with a tech-savvy specialist who understands your stack
                and team culture
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 bg-neuronhire-primary rounded-full"></span>
                Get a personalized hiring plan focused on top LATAM senior
                talent
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 bg-neuronhire-primary rounded-full"></span>
                Risk-free, you only pay when you hire. Full replacement
                guarantee included
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-neuronhire-black-100 body-satoshi font-medium"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-neuronhire-black-100 body-satoshi font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neuronhire-green-100 rounded-full"></span>
                Pre-Vetted Talent.
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neuronhire-primary rounded-full"></span>
                No Long-Term Contracts.
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neuronhire-orange-100 rounded-full"></span>
                Full-Time Hiring.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-30"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neuronhire-gray-12">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 bg-neuronhire-gray-6 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-semibold text-neuronhire-black-100 body-satoshi">
                    Contato
                  </span>
                  <span className="text-sm text-neuronhire-gray-64 body-satoshi">
                    Agendar
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neuronhire-gray-24 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neuronhire-gray-24 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neuronhire-gray-24 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={formData.whoYouNeedToHire}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whoYouNeedToHire: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-neuronhire-gray-24 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white text-neuronhire-gray-40"
                  >
                    <option value="" disabled>
                      Who you need to hire?
                    </option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="mobile">Mobile Developer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="qa">QA Engineer</option>
                    <option value="designer">UI/UX Designer</option>
                    <option value="pm">Product Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <select
                    value={formData.howManyPeople}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        howManyPeople: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-neuronhire-gray-24 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white text-neuronhire-gray-40"
                  >
                    <option value="" disabled>
                      How many people do you need to hire?
                    </option>
                    <option value="1">1 person</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-15">6-15 people</option>
                    <option value="16-50">16-50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>

                <div>
                  <textarea
                    value={formData.howCanWeHelpYou}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        howCanWeHelpYou: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-neuronhire-gray-24 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi resize-none bg-white placeholder-neuronhire-gray-40"
                    placeholder="How can we help you?"
                  />
                </div>

                <div
                  className="inline-block p-0.5 rounded-full w-full"
                  style={{ background: "var(--neuronhire-gradient-2)" }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-neuronhire-black-100 text-white py-4 text-lg font-semibold rounded-full hover:bg-neuronhire-gray-80 transition-colors body-satoshi border-0"
                  >
                    Book a Call
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-24 left-0 right-0 z-10">
          <FlagsMarquee />
        </div>
      </section>
    </>
  );
}

"use client";

import { cn } from "@/lib/utils";
import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface RoleItem {
  title: string;
  description: string;
  icon: string;
}

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const textItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const sectionStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const rowStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const pillItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const stackItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

const roles_map: Record<string, RoleItem[]> = {
  Engineering: [
    {
      title: "Frontend Engineer",
      description:
        "Builds seamless, high-performance user interfaces using frameworks",
      icon: "/assets/icons/roles/braces.svg",
    },
    {
      title: "Backend Engineer",
      description:
        "Architects and maintains scalable APIs, databases, and services.",
      icon: "/assets/icons/roles/database.svg",
    },
    {
      title: "Fullstack Engineer",
      description:
        "Bridges frontend and backend with clean, end-to-end solutions.",
      icon: "/assets/icons/roles/codesandbox.svg",
    },
    {
      title: "Mobile Developer",
      description:
        "Crafts smooth, responsive mobile apps. Focused on UX, performance, and cross-platform consistency.",
      icon: "/assets/icons/roles/smartphone.svg",
    },
    {
      title: "DevOps / Cloud Engineer",
      description:
        "Automates infrastructure, CI/CD pipelines, and cloud environments (AWS, GCP, Azure)",
      icon: "/assets/icons/roles/cloud-check.svg",
    },
    {
      title: "QA Engineer",
      description:
        "Ensures software quality with automated testing, performance checks, and CI integration.",
      icon: "/assets/icons/roles/bug.svg",
    },
    {
      title: "Embedded Systems Engineer",
      description: "Develops low-level code for hardware and IoT devices.",
      icon: "/assets/icons/roles/braces.svg",
    },
  ],
  "Data & AI": [
    {
      title: "Data Analyst",
      description:
        "Transforms data into insights to guide decision-making processes.",
      icon: "/assets/icons/roles/database.svg",
    },
    {
      title: "Data Engineer",
      description:
        "Designs and builds data pipelines, ensuring reliable data flow.",
      icon: "/assets/icons/roles/cloud-check.svg",
    },
    {
      title: "Machine Learning Engineer",
      description:
        "Develops models that enable intelligent behavior in applications.",
      icon: "/assets/icons/roles/codesandbox.svg",
    },
    {
      title: "AI Researcher",
      description:
        "Explores cutting-edge AI techniques and their applications.",
      icon: "/assets/icons/roles/bug.svg",
    },
  ],
  "Product & Design": [
    {
      title: "Product Designer",
      description:
        "Designs intuitive and engaging user experiences across products.",
      icon: "/assets/icons/roles/smartphone.svg",
    },
    {
      title: "UX Researcher",
      description:
        "Studies user behavior to inform product and design decisions.",
      icon: "/assets/icons/roles/bug.svg",
    },
    {
      title: "UI Designer",
      description:
        "Crafts visually appealing interfaces aligned with product goals.",
      icon: "/assets/icons/roles/braces.svg",
    },
  ],
  "Product & Strategy": [
    {
      title: "Product Manager",
      description:
        "Defines product vision, aligns teams, and drives execution.",
      icon: "/assets/icons/roles/cloud-check.svg",
    },
    {
      title: "Business Analyst",
      description:
        "Analyzes business needs and aligns solutions with strategic goals.",
      icon: "/assets/icons/roles/database.svg",
    },
    {
      title: "Strategy Analyst",
      description:
        "Drives company direction through data-driven insights and planning.",
      icon: "/assets/icons/roles/codesandbox.svg",
    },
  ],
  Leadership: [
    {
      title: "Engineering Manager",
      description:
        "Leads engineering teams, fosters growth, and ensures technical excellence.",
      icon: "/assets/icons/roles/braces.svg",
    },
    {
      title: "Product Lead",
      description:
        "Oversees product strategy and ensures value delivery across teams.",
      icon: "/assets/icons/roles/smartphone.svg",
    },
    {
      title: "CTO / Tech Lead",
      description:
        "Guides technology vision, architecture, and high-level technical decisions.",
      icon: "/assets/icons/roles/cloud-check.svg",
    },
    {
      title: "Design Lead",
      description:
        "Shapes design culture, standards, and user experience strategy.",
      icon: "/assets/icons/roles/bug.svg",
    },
  ],
};

const stacks: { name: string; icon: string }[] = [
  { name: "ReactJS", icon: "/assets/icons/tech/react.svg" },
  { name: "Vue.JS", icon: "/assets/icons/tech/vue.svg" },
  { name: "Angular", icon: "/assets/icons/tech/angular.svg" },
  { name: "SVELTE", icon: "/assets/icons/tech/svelte.svg" },
  { name: "Node.JS", icon: "/assets/icons/tech/node.svg" },
  { name: "Python", icon: "/assets/icons/tech/python.svg" },
  { name: "Golang", icon: "/assets/icons/tech/golang.svg" },
  { name: "Java", icon: "/assets/icons/tech/java.svg" },
  { name: "Go", icon: "/assets/icons/tech/go.svg" },
  { name: ".NET Core", icon: "/assets/icons/tech/dotnet.svg" },
  { name: "PHP", icon: "/assets/icons/tech/php.svg" },
  { name: "PostgreSQL", icon: "/assets/icons/tech/postgres.svg" },
];

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize)
    res.push(arr.slice(i, i + chunkSize));
  return res;
}

export function RolesAndStacksSection() {
  const [selectedTab, setSelectedTab] = useState("Engineering");

  return (
    <motion.section
      className="py-24 px-6 bg-[#FCF4F8]"
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          variants={textItem}
          className="body-mackinac text-sm font-normal uppercase tracking-wide text-neuronhire-red-lines mb-2"
        >
          Hire with ease
        </motion.p>

        <motion.h2
          variants={textItem}
          className="body-mackinac text-3xl font-medium md:text-5xl text-neuronhire-red-lines mb-6"
        >
          Organized by what really <br /> matters.
        </motion.h2>

        <motion.h3
          variants={textItem}
          className="body-mackinac text-left text-4xl font-bold text-neuronhire-red-lines py-3"
        >
          Roles
        </motion.h3>

        <motion.div variants={rowStagger} className="flex text-left">
          <span className="p-1 gap-2 mb-10 rounded-sm">
            {Object.keys(roles_map).map((key, index) => (
              <motion.button
                key={key}
                variants={pillItem}
                onClick={() => setSelectedTab(key)}
                whileHover={{
                  y: -2,
                  transition: { type: "spring", stiffness: 240, damping: 18 },
                }}
                className={cn(
                  "body-mackinac px-4 py-1 rounded-sm text-sm font-normal",
                  index !== 0 && "ml-2",
                  selectedTab === key
                    ? "bg-black text-white"
                    : "bg-white border border-neutral-300 text-[var(--neuronhire-red-lines-60)]"
                )}
              >
                {key}
              </motion.button>
            ))}
          </span>
        </motion.div>

        {roles_map[selectedTab] && roles_map[selectedTab].length > 0 && (
          <motion.div
            key={selectedTab}
            variants={rowStagger}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            {chunkArray(roles_map[selectedTab], 4).map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                variants={rowStagger}
                className={cn(
                  "grid gap-2 mb-2",
                  "grid-cols-1",
                  row.length === 1 && "md:grid-cols-1",
                  row.length === 2 && "md:grid-cols-2",
                  row.length === 3 && "md:grid-cols-3",
                  row.length === 4 && "md:grid-cols-4"
                )}
              >
                {row.map((role) => (
                  <motion.div
                    key={role.title}
                    variants={cardItem}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                      },
                    }}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={role.icon}
                        alt={role.title}
                        width={40}
                        height={40}
                        className="mb-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                      />
                      <h4 className="text-md text-left text-xl text-neuronhire-red-lines font-bold">
                        {role.title}
                      </h4>
                    </div>
                    <p className="text-[var(--neuronhire-red-lines-70)] text-sm text-left font-medium break-words">
                      {role.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.h3
          variants={textItem}
          className="body-mackinac text-left text-4xl font-bold text-neuronhire-red-lines py-5"
        >
          Tech Stacks
        </motion.h3>

        {chunkArray(stacks, 4).map((row, rowIndex, allRows) => {
          const isLast = rowIndex === allRows.length - 1;
          const colSpan =
            isLast && row.length < 4 ? Math.floor(4 / row.length) : 1;

          return (
            <motion.div
              key={rowIndex}
              variants={rowStagger}
              className={cn(
                "grid gap-2 mb-2",
                "grid-cols-1",
                "sm:grid-cols-2",
                "md:grid-cols-4"
              )}
            >
              {row.map((stack) => (
                <motion.div
                  key={stack.name}
                  variants={stackItem}
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 280, damping: 22 },
                  }}
                  className={cn(
                    "flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition",
                    `col-span-${colSpan}`
                  )}
                >
                  <Image
                    src={stack.icon}
                    alt={stack.name}
                    width={40}
                    height={40}
                  />
                  <span className="body-mackinac font-semibold text-neuronhire-red-lines text-sm">
                    {stack.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

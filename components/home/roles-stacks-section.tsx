"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const roles = [
  {
    title: "Frontend Engineer",
    description:
      "Builds seamless, high-performance user interfaces using frameworks",
    icon: "/icons/frontend.png",
  },
  {
    title: "Backend Engineer",
    description:
      "Architects and maintains scalable APIs, databases, and services.",
    icon: "/icons/backend.png",
  },
  {
    title: "Fullstack Engineer",
    description:
      "Bridges frontend and backend with clean, end-to-end solutions.",
    icon: "/icons/fullstack.png",
  },
  {
    title: "Mobile Developer",
    description:
      "Crafts smooth, responsive mobile apps. Focused on UX, performance, and cross-platform consistency.",
    icon: "/icons/mobile.png",
  },
  {
    title: "DevOps / Cloud Engineer",
    description:
      "Automates infrastructure, CI/CD pipelines, and cloud environments (AWS, GCP, Azure)",
    icon: "/icons/devops.png",
  },
  {
    title: "QA Engineer",
    description:
      "Ensures software quality with automated testing, performance checks, and CI integration.",
    icon: "/icons/qa.png",
  },
  {
    title: "Embedded Systems Engineer",
    description: "Develops low-level code for hardware and IoT devices.",
    icon: "/icons/embedded.png",
  },
];

const stacks = [
  { name: "ReactJS", icon: "/assets/icons/tech/react.png" },
  { name: "Vue.JS", icon: "/assets/icons/tech/vue.png" },
  { name: "Angular", icon: "/assets/icons/tech/angular.png" },
  { name: "SVELTE", icon: "/assets/icons/tech/svelte.png" },
  { name: "Node.JS", icon: "/assets/icons/tech/node.png" },
  { name: "Python", icon: "/assets/icons/tech/python.png" },
  { name: "Golang", icon: "/assets/icons/tech/golang.png" },
  { name: "Java", icon: "/assets/icons/tech/java.png" },
  { name: "Go", icon: "/assets/icons/tech/go.png" },
  { name: ".NET Core", icon: "/assets/icons/tech/dotnet.png" },
  { name: "PHP", icon: "/assets/icons/tech/php.png" },
  { name: "PostgreSQL", icon: "/assets/icons/tech/postgres.png" },
];

export function RolesAndStacksSection() {
  const [selectedTab, setSelectedTab] = useState<"role" | "stack">("role");

  return (
    <section className="py-24 px-6 bg-[#fdf4f7]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">
          Hire with ease
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          Organized by what really <br /> matters.
        </h2>

        <div className="flex justify-center mb-10 gap-2">
          <button
            onClick={() => setSelectedTab("role")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium",
              selectedTab === "role"
                ? "bg-black text-white"
                : "bg-white text-neutral-800 border border-neutral-300"
            )}
          >
            Role
          </button>
          <button
            onClick={() => setSelectedTab("stack")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium",
              selectedTab === "stack"
                ? "bg-black text-white"
                : "bg-white text-neutral-800 border border-neutral-300"
            )}
          >
            Tech Stack
          </button>
        </div>

        {selectedTab === "role" && (
          <>
            <h3 className="text-left font-semibold text-lg mb-4 text-neutral-800">
              Engineering
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={role.icon}
                    alt={role.title}
                    width={32}
                    height={32}
                    className="mb-3"
                  />
                  <h4 className="text-md font-semibold text-neutral-900 mb-1">
                    {role.title}
                  </h4>
                  <p className="text-sm text-neutral-600">{role.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedTab === "stack" && (
          <>
            <h3 className="text-left font-semibold text-lg mb-4 text-neutral-800">
              Tech Stacks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-left">
              {stacks.map((stack) => (
                <div
                  key={stack.name}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={stack.icon}
                    alt={stack.name}
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-medium text-neutral-800">
                    {stack.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const roles_map = {
  'Engineering': [
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
  'Data & AI': [],
  'Product & Design': [],
  'Product & Strategy': [],
  'Leadership': [],
}

const roles = [];

const stacks = [
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

// Utility to chunk array into rows of N items
function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
}

export function RolesAndStacksSection() {
  const [selectedTab, setSelectedTab] = useState<>("Engineering");

  return (
    <section className="py-24 px-6 bg-[#fdf4f7]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="body-mackinac text-sm font-thin uppercase tracking-wide text-neuronhire-red-lines mb-2">
          Hire with ease
        </p>
        <h2 className="body-mackinac text-3xl  font-thin md:text-4xl font-bold text-neuronhire-red-lines mb-6">
          Organized by what really <br /> matters.
        </h2>

        <h3 className="body-mackinac text-left text-4xl font-bold text-neuronhire-red-lines py-3">
          Roles
        </h3>

        <div className="flex text-left">
          <span className="p-1 bg-white gap-2 mb-10 rounded-sm">
            {Object.keys(roles_map).map((key, index) => (
              <button
                key={key}
                onClick={() => setSelectedTab(key as keyof typeof roles_map)}
                className={cn(
                  "body-mackinac px-4 py-1 rounded-sm text-sm font-thin",
                  index !== 0 && "ml-2",
                  selectedTab === key
                    ? "bg-black text-white"
                    : "bg-white border border-neutral-300 text-neuronhire-red-lines-60"
                )}
              >
                {key}
              </button>
            ))}
          </span>
        </div>


        {roles_map[selectedTab] && roles_map[selectedTab].length > 0 && (
          <>
            {chunkArray(roles_map[selectedTab], 4).map((row, rowIndex) => {

              return (
                <div key={rowIndex} className={cn(
                    "grid gap-2 mb-2",
                    "grid-cols-1",
                    row.length === 1 && "md:grid-cols-1",
                    row.length === 2 && "md:grid-cols-2",
                    row.length === 3 && "md:grid-cols-3",
                    row.length === 4 && "md:grid-cols-4"
                  )}>
                  {row.map((role) => (
                    <div
                      key={role.title}
                      className={cn(
                        "bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition",
                      )}
                    >
                      <Image
                        src={role.icon}
                        alt={role.title}
                        width={40}
                        height={40}
                        className="mb-3"
                      />
                      <h4 className="text-md text-left text-xl text-neuronhire-red-lines font-bold mb-1">
                        {role.title}
                      </h4>
                      <p className="text-sm text-left text-neuronhire-red-lines-70 font-bold break-words">{role.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </>
        )}

        {(
          <>
            <h3 className="body-mackinac text-left text-4xl font-bold text-neuronhire-red-lines py-5">
              Tech Stacks
            </h3>
            {chunkArray(stacks, 4).map((row, rowIndex, allRows) => {
              const isLast = rowIndex === allRows.length - 1;
              const colSpan = isLast && row.length < 4 ? Math.floor(4 / row.length) : 1;

              return (
                <div key={rowIndex} className={cn(
                    "grid gap-2 mb-2",
                    "grid-cols-1",
                    "sm:grid-cols-2",
                    "md:grid-cols-4"
                  )}>
                  {row.map((stack) => (
                    <div
                      key={stack.name}
                      className={cn(
                        "flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition",
                        `col-span-${colSpan}`
                      )}
                    >
                      <Image src={stack.icon} alt={stack.name} width={40} height={40} />
                      <span className="body-mackinac text-4xl font-semibold text-neuronhire-red-lines text-sm">
                        {stack.name}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}

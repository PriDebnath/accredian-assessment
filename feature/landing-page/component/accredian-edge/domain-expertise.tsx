"use client";

import {
  Banknote,
  Brain,
  BrainCircuit,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  Globe,
  Lightbulb,
  MonitorCog,
  Settings,
  Users,
} from "lucide-react";
import { PAGE_ITEMS } from "@/constants";

const domains = [
  {
    title: "Product & Innovation Hub",
    icon: Lightbulb,
  },
  {
    title: "Gen-AI Mastery",
    icon: Brain,
  },
  {
    title: "Leadership Elevation",
    icon: Users,
  },
  {
    title: "Tech & Data Insights",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Operations Excellence",
    icon: Settings,
  },
  {
    title: "Digital Enterprise",
    icon: Globe,
  },
  {
    title: "Fintech Innovation Lab",
    icon: Banknote,
  },
];

export default function DomainExpertise() {
  return (
    <section
      //   id={PAGE_ITEMS['']}
      className="px-6 py-10 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Our <span className="text-primary">Domain Expertise</span>
          </h2>

          <p className="mt-2 text-lg text-gray-700">
            <span className="text-primary">
              Specialized Programs </span>  Designed for Fuel Innovation
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-8 flex justify-center items-center flex-wrap gap-4">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.title}
                className="
                  w-72 flex flex-col min-h-16 items-center justify-center gap-3  
                  rounded-lg border border-gray-200 bg-white p-4 py-2
                  shadow-[0_2px_8px_rgba(0,0,0,0.12)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <Icon
                  className="h-14 w-14 shrink-0 text-primary"
                  strokeWidth={1.7}
                />

                <span className="text-center text-lg font-semibold text-gray-800 text-nowrap">
                  {domain.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
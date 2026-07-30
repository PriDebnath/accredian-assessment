"use client";

import {
  ChartNoAxesCombined,
  Monitor,
  MonitorPlay,
  Presentation,
} from "lucide-react";
import { PAGE_ITEMS } from "@/constants";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description:
      "Assess team skill gaps and developmental needs.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

export default function HowWeDeliverResults() {
  return (
    <section
      id={PAGE_ITEMS['How It Works']}
      className="my-8 px-6 py-10 md:my-12 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            How We{" "}
            <span className="text-primary">Deliver Results</span>{" "}
            That Matter?
          </h2>

          <p className="mt-3 text-base md:text-lg">
            A Structured Three-Step Approach to{" "}
            <span className="text-primary">Skill Development</span>
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative min-h-[225px] rounded-xl border border-blue-300 bg-blue-50 px-7 pb-8 pt-6 text-center shadow-[0_8px_18px_rgba(0,0,0,0.10)]"
              >
                {/* Left blue bar */}
                <div className="absolute -left-2 top-10 h-36 w-2 rounded-full bg-primary" />

                {/* Right blue bar */}
                <div className="absolute -right-2 top-10 h-36 w-2 rounded-full bg-primary" />

                {/* Number */}
                <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-semibold text-gray-900">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-md">
                  <Icon
                    className="h-8 w-8 text-white"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-5 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
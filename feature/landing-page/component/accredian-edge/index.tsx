"use client";

import {
    Award,
    BrainCircuit,
    ChartNoAxesCombined,
    CircleCheck,
    Lightbulb,
    Rocket,
    ShieldCheck,
} from "lucide-react";
import { PAGE_ITEMS } from "@/constants";
import AccredianEdgeImg from "@/public/images/accredian-edge/accredian-edge-usp-v3.svg";
import Image from "next/image";
import DomainExpertise from "./domain-expertise";
import CourseSegmentation from "./tailored-course-segmentation";
import SkillEnhancement from "./skill-enhancement";

const edgeItems = [
    {
        title: "Tailored Solutions",
        description:
            "Programs customized to your organization's goals and challenges.",
        icon: Lightbulb,
    },
    {
        title: "Innovative Learning",
        description:
            "Proprietary methods to improve application and learning outcomes.",
        icon: BrainCircuit,
    },
    {
        title: "Flexible Delivery",
        description:
            "Courses delivered in formats and schedules that work for your teams.",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Expert Guidance",
        description:
            "Learn directly from industry experts with real-world experience.",
        icon: ShieldCheck,
    },
    {
        title: "Advanced Technology",
        description:
            "State-of-the-art tools that enhance your learning experience.",
        icon: Rocket,
    },
    {
        title: "Proven Impact",
        description:
            "Training backed by measurable results for your organization.",
        icon: Award,
    },
    {
        title: "Flexible Delivery",
        description:
            "Expert support and scalable programs designed for your success.",
        icon: CircleCheck,
    },
];

export default function AccredianEdge() {
    return (
        <section
            id={PAGE_ITEMS['Accredian Edge']}
            className="px-6 py-10 md:px-10 md:py-14"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold md:text-4xl">
                        The <span className="text-primary">Accredian Edge</span>
                    </h2>

                    <p className="mt-2 text-lg text-gray-700 ">
                        Key Aspects of      <span className="text-primary">Our Strategic Training</span>
                    </p>
                </div>

                <div className="relative mt-8 px-12">
                    <Image
                        src={AccredianEdgeImg}
                        alt={`AccredianEdgeImg`}
                        className=" object-contain"
                    />
                </div>
            </div>

            <DomainExpertise/>
            <CourseSegmentation/>
<SkillEnhancement/>
        </section>
    );
}
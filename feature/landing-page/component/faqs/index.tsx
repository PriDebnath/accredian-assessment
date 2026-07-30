"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PAGE_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";

const faqCategories = [
    {
        id: "course",
        title: "About the Course",
        questions: [
            {
                question:
                    "What types of corporate training programs does Accredian offer?",
                answer:
                    "Accredian offers customized corporate training programs across technology, leadership, business, data, AI, and other professional skill areas.",
            },
            {
                question:
                    "What domain specializations are available?",
                answer:
                    "Our programs cover areas such as Gen-AI, technology and data, leadership, digital enterprise, operations, product innovation, and fintech.",
            },
        ],
    },
    {
        id: "delivery",
        title: "About the Delivery",
        questions: [
            {
                question:
                    "What training delivery formats does Accredian provide?",
                answer:
                    "Training can be delivered through flexible formats designed around your organization's needs, including instructor-led and customized corporate learning programs.",
            },
            {
                question:
                    "Can the training program be customized?",
                answer:
                    "Yes. Programs can be customized according to your organization's objectives, audience, industry, skill requirements, and preferred learning format.",
            },
            {
                question:
                    "Can training be delivered to large teams?",
                answer:
                    "Yes. Our learning solutions can be designed and delivered for individual teams, departments, and large enterprise audiences.",
            },
        ],
    },
    {
        id: "miscellaneous",
        title: "Miscellaneous",
        questions: [
            {
                question:
                    "Who can participate in the training programs?",
                answer:
                    "Our programs are designed for professionals across different career stages, including emerging professionals, technology professionals, senior professionals, and non-technical teams.",
            },
            {
                question:
                    "How can I get started with Accredian?",
                answer:
                    "Click the Enquire Now button and connect with our team. We can help identify the right training solution for your organization.",
            },
        ],
    },
];

export default function Faq() {
    const [activeCategory, setActiveCategory] = useState("course");
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const selectedCategory = faqCategories.find(
        (category) => category.id === activeCategory
    );

    const handleCategoryChange = (id: string) => {
        setActiveCategory(id);
        setOpenQuestion(null);
    };

    const handleQuestionClick = (index: number) => {
        setOpenQuestion((current) =>
            current === index ? null : index
        );
    };

    return (
        <section
            id={PAGE_ITEMS['FAQs']}
            className="my-8 px-6 py-8 md:my-12 md:px-10"
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <h2 className="text-3xl font-bold md:text-4xl">
                    Frequently Asked{" "}
                    <span className="text-primary">Questions</span>
                </h2>

                {/* FAQ Content */}
                <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[325px_1fr]">
                    {/* Left Categories */}
                    <div className="flex flex-col gap-6">
                        {faqCategories.map((category) => {
                            const isActive =
                                activeCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() =>
                                        handleCategoryChange(category.id)
                                    }
                                    className={`
                                        flex min-h-[62px] w-full items-center
                                        justify-center rounded-md border px-5
                                        text-base font-semibold
                                        transition-all duration-200
                                        ${
                                            isActive
                                                ? "border-gray-200 bg-white text-primary shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                                                : "border-gray-300 bg-white text-gray-500 hover:border-primary hover:text-primary"
                                        }
                                    `}
                                >
                                    {category.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Questions */}
                    <div className="min-w-0">
                        <div className="divide-y divide-gray-200">
                            {selectedCategory?.questions.map(
                                (item, index) => {
                                    const isOpen =
                                        openQuestion === index;

                                    return (
                                        <div
                                            key={item.question}
                                            className="py-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleQuestionClick(
                                                        index
                                                    )
                                                }
                                                className="flex w-full items-center justify-between gap-6 px-2 py-5 text-left"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="text-base font-semibold text-gray-900 md:text-lg">
                                                    {item.question}
                                                </span>

                                                <ChevronDown
                                                    className={`
                                                        h-5 w-5 shrink-0
                                                        text-gray-500
                                                        transition-transform
                                                        duration-200
                                                        ${
                                                            isOpen
                                                                ? "rotate-180"
                                                                : ""
                                                        }
                                                    `}
                                                />
                                            </button>

                                            {/* Answer */}
                                            <div
                                                className={`
                                                    grid transition-all
                                                    duration-200
                                                    ${
                                                        isOpen
                                                            ? "grid-rows-[1fr] opacity-100"
                                                            : "grid-rows-[0fr] opacity-0"
                                                    }
                                                `}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="px-2 pb-5 text-sm leading-6  ">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center">
                    <Button
                        size="lg"
                        className="px-8 py-5 text-base font-semibold"
                        onClick={() => {
                            document
                                .getElementById("enquire")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                    >
                        Enquire Now
                    </Button>
                </div>
            </div>
        </section>
    );
}
"use client";

import { FormEvent, useState } from "react";
import { PAGE_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";

export default function LeadCaptureForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);

        // TODO: Send form data to your API
        await new Promise((resolve) => setTimeout(resolve, 800));

        setIsSubmitting(false);
    };

    return (
        <section
            className=" "
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid overflow-hidden rounded-2xl bg-blue-50 md:grid-cols-[0.85fr_1.15fr]">
                    {/* Left content */}
                    <div className="flex flex-col justify-center bg-primary px-7 py-10 text-white md:px-10 lg:px-14">
                        <p className="text-sm font-medium text-white/80">
                            Get Started Today
                        </p>

                        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
                            Let&apos;s Build Your
                            <br />
                            <span className="text-white">
                                Learning Solution
                            </span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-6 text-white/85">
                            Tell us about your training requirements and our
                            experts will help you find the right solution for
                            your team.
                        </p>

                        <div className="mt-8 space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                    ✓
                                </span>
                                Customized training programs
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                    ✓
                                </span>
                                Expert-led learning solutions
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                    ✓
                                </span>
                                Flexible enterprise delivery
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white px-7 py-10 md:px-10 lg:px-14">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Enquire Now
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Share your details and our team will get in touch.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-7 space-y-5"
                        >
                            {/* Name + Email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-semibold text-gray-800"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-800"
                                    >
                                        Work Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@company.com"
                                        className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Phone + Company */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-semibold text-gray-800"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                        className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="text-sm font-semibold text-gray-800"
                                    >
                                        Company
                                    </label>

                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        required
                                        placeholder="Company name"
                                        className="mt-2 h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Requirement */}
                            <div>
                                <label
                                    htmlFor="requirement"
                                    className="text-sm font-semibold text-gray-800"
                                >
                                    Training Requirement
                                </label>

                                <select
                                    id="requirement"
                                    name="requirement"
                                    required
                                    defaultValue=""
                                    className="mt-2 h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                >
                                    <option value="" disabled>
                                        Select your requirement
                                    </option>
                                    <option value="technical">
                                        Technical Training
                                    </option>
                                    <option value="leadership">
                                        Leadership Development
                                    </option>
                                    <option value="ai">
                                        AI / Gen-AI Training
                                    </option>
                                    <option value="data">
                                        Data & Analytics
                                    </option>
                                    <option value="digital">
                                        Digital Transformation
                                    </option>
                                    <option value="custom">
                                        Customized Corporate Training
                                    </option>
                                </select>
                            </div>

                            {/* Team Size */}
                            <div>
                                <label
                                    htmlFor="teamSize"
                                    className="text-sm font-semibold text-gray-800"
                                >
                                    Approximate Team Size
                                </label>

                                <select
                                    id="teamSize"
                                    name="teamSize"
                                    required
                                    defaultValue=""
                                    className="mt-2 h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                >
                                    <option value="" disabled>
                                        Select team size
                                    </option>
                                    <option value="1-10">1 - 10</option>
                                    <option value="11-50">11 - 50</option>
                                    <option value="51-200">51 - 200</option>
                                    <option value="201-500">201 - 500</option>
                                    <option value="500+">500+</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-gray-800"
                                >
                                    Tell us more
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your training requirements..."
                                    className="mt-2 w-full resize-none rounded-md border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full text-base font-semibold"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                            </Button>

                            <p className="text-center text-[11px] text-gray-400">
                                By submitting this form, you agree to be contacted
                                regarding our training solutions.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
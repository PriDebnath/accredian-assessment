"use client";

import Image from "next/image";
import { PAGE_ITEMS } from "@/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import AdpLogo from "@/public/images/partners/adp.svg";
import BayerLogo from "@/public/images/partners/bayer.png";
import RelianceLogo from "@/public/images/partners/reliance.png";

const testimonials = [
    {
        company: "ADP",
        logo: AdpLogo,
        message:
            "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
        company: "Bayer",
        logo: BayerLogo,
        message:
            "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    }, 
       {
        company: "Reliance",
        logo: RelianceLogo,
        message:"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."
     },
];

function TestimonialCard({
    logo,
    company,
    message,
}: {
    logo: typeof AdpLogo;
    company: string;
    message: string;
}) {
    return (
        <div className="h-full min-h-[250px] rounded-xl border border-gray-300 bg-white px-8 py-7 md:px-12 md:py-8">
            {/* Logo */}
            <div className="flex h-14 items-center">
                <Image
                    src={logo}
                    alt={`${company} logo`}
                    className="h-auto max-h-14 w-auto max-w-[90px] object-contain"
                />
            </div>

            {/* Testimonial */}
            <p className="mt-8 text-sm leading-6 text-[#172554] md:text-base md:leading-6">
                &quot;{message}&quot;
            </p>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            id={PAGE_ITEMS['Testimonials']}
            className="my-8 px-4 md:my-12 md:px-8"
        >
            <div className="px-4 py-8 md:px-8 md:py-12 lg:px-12">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold md:text-4xl">
                        Testimonials from{" "}
                        <span className="text-primary">
                            Our Partners
                        </span>
                    </h2>

                    <p className="mt-3 text-base md:text-lg text-gray-700">
                        What{" "}
                        <span className="text-primary">
                            Our Clients
                        </span>{" "}
                        Are Saying
                    </p>
                </div>

                 <div className="mt-10  ">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={24}
                        slidesPerView={2}
                        className="testimonials-swiper pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide
                                key={testimonial.company}
                                className="h-auto"
                            >
                                <TestimonialCard {...testimonial} />
                            </SwiperSlide>
                        ))}
                                                                        <div className="h-8"></div>

                    </Swiper>
                </div>
 
            </div>
        </section>
    );
}
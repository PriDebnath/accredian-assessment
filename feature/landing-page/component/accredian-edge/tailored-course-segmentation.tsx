"use client";

import Image from "next/image";
import { PAGE_ITEMS } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ProgramSpecificImg from "@/public/images/accredian-edge/project-management-v2.webp";
import IndustrySpecificImg from "@/public/images/accredian-edge/digital-transformation-v2.webp";
import TopicSpecificImg from "@/public/images/accredian-edge/data-science-v2.webp";
import LevelSpecificImg from "@/public/images/accredian-edge/senior-management-v2.webp";
import CourseCard from "./course-card";

const courses = [
    {
        title: "Program Specific",
        des: "Certificate, Executive, Post Graduate Certificate",
        image: ProgramSpecificImg,
    },
    {
        title: "Industry Specific",
        des: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
        image: IndustrySpecificImg,
    },
    {
        title: "Topic Specific",
        des: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
        image: TopicSpecificImg,
    },
    {
        title: "Level Specific",
        des: "Senior Leadership, Mid-Career Professionals, Freshers",
        image: LevelSpecificImg,
    },
];

export default function CourseSegmentation() {
    return (
        <section
            id={PAGE_ITEMS['CAT']}
            className="my-8 px-4 md:my-12 md:px-8"
        >
            <div
                className="  px-8 py-12 md:px-16 lg:px-18"
            >
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="  text-2xl font-bold md:text-4xl">
                        Tailored  <span className="text-primary"> Course Segmentation</span>
                    </h2>

                    <p className="mt-4 text-base font-normal md:text-lg">
                        Explore  <span className="text-primary"> Custom-fit Courses </span> Designed to Address Every Professional
                        Focus
                    </p>
                </div>

                <div className="hidden lg:block">
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {courses.map((pri) => (
                            <CourseCard key={pri.title} {...pri} />
                        ))}
                    </div>

                </div>
                <div className="block lg:hidden mt-10"
                >
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={24}
                        // slidesPerView={1.15}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="p-6"
                    >
                        {courses.map((pri) => (
                            <SwiperSlide key={pri.title}>
                                <CourseCard {...pri} />

                            </SwiperSlide>
                        ))}
                        <div className="h-8"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}


























  


















 
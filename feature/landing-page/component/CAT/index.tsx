
import Image from "next/image";
import { PAGE_ITEMS } from "@/constants";

import ProgramSpecificImg from "@/public/images/CAT/project-management-v2.webp";
import IndustrySpecificImg from "@/public/images/CAT/digital-transformation-v2.webp";
import   TopicSpecificImg from "@/public/images/CAT/data-science-v2.webp";
import LevelSpecificImg from "@/public/images/CAT/senior-management-v2.webp";

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

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map(({ title, des, image }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-lg border-2 bg-white shadow-md transition-all duration-300   hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-8 py-5 pb-8 text-center ">
                <h3 className="text-2xl py-2 font-semibold text-primary">
                  {title}
                </h3>
                <p className="text-xs text-gray-700">
                    {des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

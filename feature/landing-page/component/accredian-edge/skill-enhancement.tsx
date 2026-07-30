import Image from "next/image";
import {
  BriefcaseBusiness,
  GraduationCap,
  MonitorCheck,
  Users,
  MonitorX,
  Briefcase,
} from "lucide-react";

import { PAGE_ITEMS } from "@/constants";
import SkillImg from "@/public/images/accredian-edge/imagehuman.png";

const audiences = [
  {
    title: "Tech Professionals",
    description:
      "Enhance expertise, embrace tech shifts, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    description:
      "Build digital skills, collaborate better, drive innovation.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    description:
      "Gaining practical skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    description:
      "Stay ahead, lead teams, build future-ready capabilities.",
    icon: Briefcase,
  },
];

export default function SkillEnhancement() {
  return (
    <section
      className="px-4 py-10 md:px-8 md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-md bg-primary px-6   text-white md:px-10 pt-8  ">
          <div className="flex flex-col md:items-center gap-8 md:flex-row">
       
            
            <div className=" flex flex-col  gap-5 md:flex-col ">
                      <div>
                <p className="text-xl font-medium">
                  Who Should Join?
                </p>

                <h2 className="mt-1 text-3xl md:text-5xl font-bold leading-tight ">
                  Strategic Skill Enhancement
                </h2>
              </div>
             
              <div className="w-48 shrink-0 md:w-68 hidden md:block">
                <Image
                  src={SkillImg}
                  alt="Professionals learning together"
                  className="h-auto w-full object-contain"
                />
              </div>

          
            </div>

            {/* Audience Cards */}
            <div className="grid pb-8  grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {audiences.map((audience) => {
                const Icon = audience.icon;

                return (
                  <div
                    key={audience.title}
                    className="flex gap-4"
                  >
                    <div className="flex items-center gap-2"> 
                          <Icon
                      className="my-1 h-8 md:h-16 w-8  md:w-16 shrink-0 text-white"
                      strokeWidth={1.6}
                    />
                    <div>
                            <h3 className="text-sm md:text-lg font-bold">
                        {audience.title}
                      </h3>

                      <p className="mt-1 max-w-xs text-xs md:text-sm leading-relaxed text-white/90">
                        {audience.description}
                      </p>
                    </div>
                  
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
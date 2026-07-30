
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Lightbulb,
  LineChart,
  Target,
  Users,
} from "lucide-react";
import { CheckedSvg } from "./svg";
import { PAGE_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";
import CorporateImg from "@/public/images/corporate-big-hero-v4.webp"

const highlights = [
  {
    title: "Tailored Solutions",
  },
  {
    title: "Industry Insights",
  },
  {
    title: "Expert Guidance",
  },
];

export default function Home() {
  return (
    <section id={PAGE_ITEMS.home} className=" md:my-8 md:p-4 ">
      <div className="px-12 py-4 md:py-0 flex items-center flex-col-reverse md:flex-row bg-blue-50 rounded-2xl"
        style={{ boxShadow: '0px 0px 4rem rgba(0,0,0,0.35)' }}>
        <div className="  w-full text-center md:text-left">

          <h1 className="text-2xl md:text-4xl mt-2 lg:text-5xl font-bold justify-center  text-nowrap md:block flex gap-2 ">
            <div className=" text-nowrap">
              Next-Gen
              <span className="text-primary"> Expertise</span>
            </div>

            <div className=" text-nowrap">
              For Your
              <span className="text-primary"> Enterprise</span>
            </div>
          </h1>

          <p className="mt-4   text-base font-normal ">
            Cultivate high-performance teams through  expert learning.
          </p>

          <div className="mt-4 flex items-center gap-6 flex-wrap ">
            {highlights.map(({ title }) => (
              <div
                key={title}
                className="flex  gap-2 items-center text-nowrap  "
              >
                <CheckedSvg />
                <span className="  font-medium  ">
                  {title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button size={'lg'} className={'text-xl px-10 py-6 w-full md:w-fit '}>
              Enquire Now

            </Button>
          </div>
        </div>

        <div className="w-full ">
          <Image src={CorporateImg} alt="CorporateImg" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

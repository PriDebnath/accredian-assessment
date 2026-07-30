import {
  BookOpen,
  Lightbulb,
  Wrench,
} from "lucide-react";

import { PAGE_ITEMS } from "@/constants";
import Image from "next/image";
import CATImg from "@/public/images/CAT/catV2.svg";
 

export default function CatFramework() {
  return (
    <section
      id={PAGE_ITEMS['CAT']}
      className="px-6 py-10 md:px-10 md:py-14"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Our <span className="text-primary">CAT Framework</span>
          </h2>

          <p className="mt-2 text-lg text-gray-700">
Our Proven Approach to 
<span className="text-primary">
    Learning Excellence
</span>
          </p>
        </div>

        {/* Framework */}
        <div className="relative mt-12">
              <Image
                                   src={CATImg}
                                   alt={`CATImg`}
                                   className=" object-contain"
                               />
        </div>
      </div>
    </section>
  );
}
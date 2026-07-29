import Image from "next/image";
import { PAGE_ITEMS } from "@/constants";

import RelianceLogo from "@/public/images/partners/reliance.png";
import HclLogo from "@/public/images/partners/hcl.png";
import IbmLogo from "@/public/images/partners/ibm.png";
import LtimindtreeLogo from "@/public/images/partners/ltimindtree.png";
import AdpLogo from "@/public/images/partners/adp.svg";
import BayerLogo from "@/public/images/partners/bayer.png";

const partnerships = [
  {
    name: "Reliance",
    image: RelianceLogo,
  },
  {
    name: "HCL",
    image: HclLogo,
  },
  {
    name: "IBM",
    image: IbmLogo,
  },
  {
    name: "LTIMindtree",
    image: LtimindtreeLogo,
  },
  {
    name: "ADP",
    image: AdpLogo,
  },
  {
    name: "Bayer",
    image: BayerLogo,
  },
];

export default function Partnerships() {
  return (
    <section
      id={PAGE_ITEMS.Clients}
      className="px-6 py-10 md:px-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Our Proven <span className="text-primary">Partnerships</span>
          </h2>

          <p className="mt-2 ">
            Successful Collaborations With the 
            <span className="text-primary">Industry&apos;s Best</span>
          </p>
        </div>

        {/* Logos */}
        <div className="animate-marquee  mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6 md:gap-10">
          {[...partnerships,...partnerships].map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 items-center justify-center"
            >
              <Image
                src={partner.image}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import RelianceLogo from "@/public/images/partners/reliance.png";
import HclLogo from "@/public/images/partners/hcl.png";
import IbmLogo from "@/public/images/partners/ibm.png";
import LtimindtreeLogo from "@/public/images/partners/ltimindtree.png";
import AdpLogo from "@/public/images/partners/adp.svg";
import BayerLogo from "@/public/images/partners/bayer.png";
import Image from "next/image";

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


function Logos() {
    return (
        <div className="flex shrink-0 items-center gap-16 px-8 md:gap-24">
            {partnerships.map((partner) => (
                <div
                    key={partner.name}
                    className="flex h-16 w-24 shrink-0 items-center justify-center"
                >
                    <Image
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        className="max-h-12 w-auto max-w-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
}

export default function LogoGroup() {

    return (
        <div className="relative mt-10 w-full overflow-hidden">
            <div className="animate-marquee flex w-max">
                <Logos />
                <Logos />
            </div>
        </div>
    )
}
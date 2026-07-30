import Image from "next/image";
import LogoGroup from "./logo-group";
import { PAGE_ITEMS } from "@/constants";


export default function Partnerships() {
    return (
        <section
            id={PAGE_ITEMS.Clients}
            className="overflow-hidden px-6 py-10 md:px-10 md:py-14"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
          <div className="text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Our Proven <span className="text-primary">Partnerships</span>
          </h2>

          <p className="mt-2 text-lg">
            Successful Collaborations With the 
            <span className="text-primary"> Industry&apos;s Best</span>
          </p>
        </div>

                <LogoGroup />
            </div>
        </section>
    );
}
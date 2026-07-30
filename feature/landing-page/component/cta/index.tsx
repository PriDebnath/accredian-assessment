import { Headphones, ChevronRight } from "lucide-react";
import { PAGE_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";

export default function TrainingSolutionsCta() {
  return (
    <section
      // id={PAGE_ITEMS.contact}
      className="px-6 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[210px] overflow-hidden rounded-xl bg-primary px-6 py-8 md:px-12">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[600px] -translate-x-1/2 rounded-full border-[70px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-44 left-1/2 h-[320px] w-[460px] -translate-x-1/2 rounded-full border-[55px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full border-[45px] border-white/5" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-between gap-7 md:flex-row">
            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-4 border-white/40 bg-white">
              <Headphones
                className="h-12 w-12 text-primary"
                strokeWidth={2}
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                Want to Learn More About Our Training Solutions?
              </h2>

              <p className="mt-2 text-base font-medium text-white">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>

            {/* Button */}
            <Button
              // asChild
              variant="secondary"
              className="h-14 min-w-[200px] rounded-lg px-8 text-base font-semibold text-primary shadow-none"
            >
              <a href="#enquire">
                Contact Us
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
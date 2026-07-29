
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
import { PAGE_ITEMS } from "@/constants";

const highlights = [
  {
    icon: Target,
    title: "Tailored Solutions",
  },
  {
    icon: LineChart,
    title: "Industry Insights",
  },
  {
    icon: Users,
    title: "Expert Guidance",
  },
  {
    icon: Lightbulb,
    title: "Measurable Impact",
  },
];

export default function Home() {
  return (
    <section id={PAGE_ITEMS.home} className="relative overflow-hidden bg-[#f7f9fc]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff6b35]/10 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/20 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ff6b35]" />
            <span className="text-sm font-medium text-[#172033]">
              Enterprise Learning Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#101828] sm:text-5xl lg:text-6xl xl:text-[68px]">
            Next-Gen Expertise
            <span className="block text-[#ff6b35]">
              for Your Enterprise
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            Cultivate high-performance teams through expert learning.
          </p>

          {/* Highlights */}
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff6b35]/10 text-[#ff6b35]">
                  <Icon size={16} strokeWidth={2.2} />
                </span>

                <span className="text-sm font-medium text-[#344054]">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="#enquire"
              className="group inline-flex items-center gap-3 rounded-full bg-[#ff6b35] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ff6b35]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e85b2a] hover:shadow-xl"
            >
              Enquire Now

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Main visual container */}
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#10233f] shadow-2xl">
            {/* Replace this with the actual Accredian hero image */}
            <Image
              src="/images/enterprise-hero.jpg"
              alt="Accredian enterprise learning"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/60 via-transparent to-transparent" />

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:w-[280px]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6b35]/10 text-[#ff6b35]">
                  <Check size={19} strokeWidth={2.5} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#101828]">
                    Built for Enterprise
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667085]">
                    Practical learning designed around real business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-full border-[16px] border-[#ff6b35]/10"
          />

          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 -z-10 h-20 w-20 rounded-full bg-[#ff6b35]/10"
          />
        </div>
      </div>
    </section>
  );
}

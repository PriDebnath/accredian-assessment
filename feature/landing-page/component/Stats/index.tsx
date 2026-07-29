import { PAGE_ITEMS } from "@/constants";
import  StatCard  from "./StatCard";

const stats = [
  {
    value: "10K+",
    label: "Professionals Trained",
  },
  {
    value: "200+",
    label: "Learning Sessions Delivered",
  },
  {
    value: "5K+",
    label: "Active Learners",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20" id={PAGE_ITEMS.stats}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-[#ff6b35]">
            Track Record
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#10233f] md:text-5xl">
            Trusted by Growing Teams
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We partner with organizations to build future-ready talent through
            industry-driven learning experiences.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
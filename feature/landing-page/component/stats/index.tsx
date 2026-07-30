import { PAGE_ITEMS } from "@/constants";

const trackRecords = [
  {
    value: "10K+",
    title: "Professionals Trained for Exceptional Career Success",
  },
  {
    value: "200+",
    title: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    title: "Active Learners Engaged in Dynamic Courses",
  },
];

export default function Stats() {
  return (
    <section
      id={PAGE_ITEMS.stats}
      className="px-6 py-20 md:px-16 md:py-22"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-3xl">
            Our <span className="text-primary">Track Record</span>
          </h2>

          <p className="mt-2  ">
            The Numbers Behind <span className="text-primary"> Our Success</span>
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10  flex flex-col md:flex-row  gap-4 px-16">
          {trackRecords.map((record, index) => (
            <div
              key={record.value}
              className={`
                flex flex-raw md:flex-col  gap-2 items-center  py-6 text-center
                ${index !== 0 ? "border-t md:border-l md:border-t-0 border-gray-200" : ""}
              `}
            >
              <div 
              className="flex h-10 min-w-16 items-center justify-center rounded-full bg-blue-100 px-4 text-2xl font-bold text-primary">
                {record.value}
              </div>

              <p className=" leading-relaxed ">
                {record.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
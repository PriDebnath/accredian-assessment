type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-4xl font-bold tracking-tight text-[#10233f] md:text-5xl">
        {value}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
        {label}
      </p>
    </div>
  );
}
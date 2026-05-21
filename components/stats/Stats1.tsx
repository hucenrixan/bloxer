const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2.4B", label: "Processed" },
  { value: "140+", label: "Countries" },
];

export default function Stats1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Trusted at Scale</h2>
        <p className="text-gray-500 mb-12">Numbers that speak for themselves.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-indigo-600 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

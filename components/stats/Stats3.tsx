const stats = [
  { icon: "👥", value: "10,000+", label: "Active Users" },
  { icon: "⚡", value: "99.9%", label: "Uptime SLA" },
  { icon: "💳", value: "$2.4B", label: "Processed" },
  { icon: "🌍", value: "140+", label: "Countries" },
];

export default function Stats3() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <span className="text-3xl">{stat.icon}</span>
              <p className="text-3xl font-black text-gray-900 mt-3 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

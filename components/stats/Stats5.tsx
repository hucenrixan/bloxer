const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2.4B", label: "Processed" },
  { value: "140+", label: "Countries" },
];

export default function Stats5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Teams That Move Fast</h2>
            <p className="text-gray-600 leading-relaxed mb-6">We've helped thousands of teams ship faster, scale confidently, and spend less time on infrastructure. Our platform handles the complexity so you can focus on building.</p>
            <a href="#" className="text-indigo-600 font-medium hover:underline text-sm">Read our customer stories →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-3xl font-black text-indigo-600 mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

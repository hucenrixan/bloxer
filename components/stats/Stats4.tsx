const stats = [
  { value: "10,000+", label: "Active Users", from: "indigo" },
  { value: "99.9%", label: "Uptime SLA", from: "purple" },
  { value: "$2.4B", label: "Processed", from: "pink" },
  { value: "140+", label: "Countries", from: "emerald" },
];

export default function Stats4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Impact</h2>
        <p className="text-gray-500 mb-12">Growing every day with teams worldwide.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10,000+", label: "Active Users", gradient: "from-indigo-600 to-purple-600" },
            { value: "99.9%", label: "Uptime SLA", gradient: "from-purple-600 to-pink-600" },
            { value: "$2.4B", label: "Processed", gradient: "from-pink-600 to-rose-600" },
            { value: "140+", label: "Countries", gradient: "from-emerald-600 to-teal-600" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

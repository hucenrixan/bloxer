export default function Features4() {
  const features = [
    {
      icon: "⚡",
      color: "bg-yellow-500",
      title: "Edge Deployment",
      desc: "Deploy to 300+ edge locations worldwide. Latency under 30ms anywhere on the planet.",
    },
    {
      icon: "🔒",
      color: "bg-blue-500",
      title: "Zero Trust Security",
      desc: "Every request is verified. No implicit trust, no exposed attack surface, no compromises.",
    },
    {
      icon: "📊",
      color: "bg-emerald-500",
      title: "Live Metrics",
      desc: "Real-time dashboards with p99 latency, error rates, and throughput at a glance.",
    },
    {
      icon: "🔄",
      color: "bg-violet-500",
      title: "Auto Rollback",
      desc: "Bad deploy? We detect it and roll back automatically before your users even notice.",
    },
    {
      icon: "🔧",
      color: "bg-orange-500",
      title: "Custom Runtimes",
      desc: "Node, Bun, Python, Go, Rust — deploy any language with zero config changes.",
    },
    {
      icon: "📦",
      color: "bg-pink-500",
      title: "Container Native",
      desc: "Bring your own Docker images. We handle orchestration, scaling, and networking.",
    },
  ];

  return (
    <section className="w-full bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Infrastructure that does the hard work
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Built for engineers who demand reliability, performance, and full control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-200 hover:scale-105 cursor-default"
            >
              <div className={`w-10 h-10 ${f.color} rounded-lg flex items-center justify-center text-lg mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

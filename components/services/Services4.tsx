const services = [
  { icon: "🎨", title: "UI/UX Design", desc: "User-centered interfaces that convert." },
  { icon: "💻", title: "Web Development", desc: "Fast, scalable apps with modern tech." },
  { icon: "📱", title: "Mobile Apps", desc: "iOS and Android native experiences." },
  { icon: "☁️", title: "Cloud Services", desc: "Infrastructure and DevOps at any scale." },
  { icon: "📊", title: "Analytics", desc: "Dashboards and insights that matter." },
  { icon: "🔒", title: "Security", desc: "Audits and secure-by-default systems." },
];

export default function Services4() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">What We Offer</h2>
        <p className="text-gray-400 text-center mb-12">Expert services across design, engineering, and growth.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group border border-gray-700 rounded-2xl p-6 hover:border-indigo-500 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white mt-3 mb-1">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

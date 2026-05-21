const services = [
  { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, user-centered interfaces crafted to convert visitors into customers." },
  { icon: "💻", title: "Web Development", desc: "Fast, scalable websites and web apps built with modern technology." },
  { icon: "📱", title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
  { icon: "☁️", title: "Cloud Services", desc: "Infrastructure, deployment, and DevOps tailored to your needs." },
  { icon: "📊", title: "Analytics", desc: "Data pipelines, dashboards, and insights that drive better decisions." },
  { icon: "🔒", title: "Security", desc: "Penetration testing, audits, and secure-by-default architecture." },
];

export default function Services1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">What We Do</h2>
        <p className="text-gray-500 text-center mb-12">End-to-end services to help you build and grow.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-bold text-gray-900 mt-3 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

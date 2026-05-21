const services = [
  { title: "UI/UX Design", desc: "We create user-centered interfaces that are beautiful and effective. Our design process starts with research, moves through wireframing, and ends with pixel-perfect delivery.", color: "bg-indigo-200" },
  { title: "Web Development", desc: "From landing pages to complex web apps, we build fast, scalable, and maintainable software using modern frameworks and best practices.", color: "bg-purple-200" },
  { title: "Cloud & DevOps", desc: "We set up and manage cloud infrastructure, CI/CD pipelines, and monitoring so your team can deploy with confidence every time.", color: "bg-emerald-200" },
];

export default function Services2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
        <p className="text-gray-500 mb-12">Deep expertise across the full stack.</p>
        <div className="flex flex-col gap-12">
          {services.map((s, i) => (
            <div key={s.title} className={`flex gap-10 items-center ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
              <div className={`${s.color} rounded-2xl flex-1 h-52`} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "UI/UX Design", desc: "Beautiful, user-centered interfaces crafted to convert visitors into customers." },
  { title: "Web Development", desc: "Fast, scalable websites and web apps built with modern technology and best practices." },
  { title: "Cloud Services", desc: "Infrastructure, deployment, and DevOps solutions tailored to your scale." },
  { title: "Analytics & Data", desc: "Pipelines, dashboards, and insights that drive smarter business decisions." },
];

export default function Services3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Services</h2>
        <div className="flex flex-col gap-10">
          {services.map((s, i) => (
            <div key={s.title} className="flex gap-8 items-start border-t border-gray-100 pt-8">
              <span className="text-6xl font-black text-gray-100 leading-none select-none w-20 flex-shrink-0 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

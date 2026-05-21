const items = [
  { color: "bg-indigo-200", title: "Brand Identity", tag: "Branding" },
  { color: "bg-purple-200", title: "Mobile App UI", tag: "UI Design" },
  { color: "bg-pink-200", title: "E-commerce Site", tag: "Web Design" },
  { color: "bg-emerald-200", title: "Dashboard Design", tag: "Product" },
  { color: "bg-orange-200", title: "Marketing Campaign", tag: "Marketing" },
  { color: "bg-cyan-200", title: "Logo Design", tag: "Branding" },
];

export default function Gallery4() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Our Projects</h2>
        <p className="text-gray-500 text-center mb-10">Creative work that speaks for itself.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className={`${item.color} aspect-video rounded-xl overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300`} />
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{item.tag}</span>
              <h3 className="font-semibold text-gray-900 mt-1.5">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

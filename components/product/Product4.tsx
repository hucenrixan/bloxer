export default function Product4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Built for Modern Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Real-time Collaboration", desc: "Work together live, see each other's changes instantly.", color: "bg-indigo-50 border-indigo-100" },
            { title: "Smart Notifications", desc: "Only get pinged when it actually matters to you.", color: "bg-purple-50 border-purple-100" },
            { title: "Powerful Search", desc: "Find anything across your entire workspace in milliseconds.", color: "bg-emerald-50 border-emerald-100" },
          ].map(f => (
            <div key={f.title} className={`${f.color} border rounded-2xl p-6`}>
              <div className="h-32 bg-white/60 rounded-xl mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

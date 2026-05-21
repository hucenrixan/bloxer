export default function Features2() {
  const rows = [
    {
      title: "Unified project timeline",
      desc: "Visualize every milestone, dependency, and deadline in a single Gantt-style view. Drag to reschedule, click to reassign — managing complex projects has never been this intuitive.",
      badge: "Planning",
      flip: false,
    },
    {
      title: "Real-time collaborative editing",
      desc: "Multiple team members can work on the same document, plan, or board simultaneously. See cursors, comments, and changes as they happen, with full version history backed up automatically.",
      badge: "Collaboration",
      flip: true,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for how modern teams actually work
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Deep features, thoughtful UX. Meridian fits right into your team's existing workflow.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {rows.map((r) => (
            <div
              key={r.title}
              className={`flex flex-col ${r.flip ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              <div className="flex-1 w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">{r.badge} preview</span>
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">{r.badge}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{r.title}</h3>
                <p className="text-gray-500 leading-relaxed">{r.desc}</p>
                <a href="#" className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

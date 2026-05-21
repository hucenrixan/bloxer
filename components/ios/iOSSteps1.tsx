const steps = [
  { n: "1", title: "Download the app", desc: "Free on the App Store. Installs in seconds.", icon: "⬇️" },
  { n: "2", title: "Create your account", desc: "Sign in with Apple for instant, secure setup.", icon: "🔑" },
  { n: "3", title: "Set up your workspace", desc: "Choose a template or start from scratch.", icon: "🎨" },
  { n: "4", title: "Start your day", desc: "Add the widget and make it yours.", icon: "🚀" },
];

export default function iOSSteps1() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full">Get Started</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-2 tracking-tight">Up and running in minutes</h2>
        </div>
        <div className="relative">
          <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gray-200" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start relative">
                <div className="w-11 h-11 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0 z-10 shadow-sm">{s.n}</div>
                <div className="bg-white rounded-2xl p-4 flex-1 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{s.icon}</span>
                    <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-colors">
          Download Free — Get Started
        </button>
      </div>
    </section>
  );
}

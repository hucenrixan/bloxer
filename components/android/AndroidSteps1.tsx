const steps = [
  { n: "1", title: "Download the app", desc: "Free on Google Play. Installs in seconds.", icon: "⬇️" },
  { n: "2", title: "Sign in with Google", desc: "One tap — your account is ready instantly.", icon: "🔑" },
  { n: "3", title: "Set up your workspace", desc: "Pick a theme or let Material You choose.", icon: "🎨" },
  { n: "4", title: "Start your day", desc: "Add the widget and make it yours.", icon: "🚀" },
];

export default function AndroidSteps1() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Get Started</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-2 tracking-tight">Up and running in minutes</h2>
        </div>
        <div className="relative">
          <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gray-200" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start relative">
                <div className="w-11 h-11 bg-white border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm flex-shrink-0 z-10 shadow-sm">{s.n}</div>
                <div className="bg-white rounded-3xl p-4 flex-1 shadow-sm border border-gray-100">
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
        <button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-purple-200 transition-colors">
          Get it on Google Play
        </button>
      </div>
    </section>
  );
}

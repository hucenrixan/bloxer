const steps = [
  { title: "Sign Up", desc: "Free account, no card needed.", icon: "✍️" },
  { title: "Onboard", desc: "Guided setup in under 5 min.", icon: "🗺️" },
  { title: "Integrate", desc: "Connect your stack instantly.", icon: "🔗" },
  { title: "Launch", desc: "Ship to production with ease.", icon: "🚀" },
];

export default function Steps5() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Simple Setup</h2>
        <p className="text-gray-500 mb-14">Everything you need, nothing you don't.</p>
        <div className="flex flex-col md:flex-row items-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex md:flex-col items-center gap-4 md:gap-2 flex-1">
              <div className="flex items-center gap-4 md:flex-col md:gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-indigo-200 shadow-sm flex items-center justify-center text-2xl">{step.icon}</div>
                {i < steps.length - 1 && (
                  <div className="md:hidden w-8 h-px bg-indigo-200" />
                )}
              </div>
              <div className="text-left md:text-center">
                <h3 className="font-bold text-gray-900 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="hidden md:block h-px w-full bg-indigo-200 absolute" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

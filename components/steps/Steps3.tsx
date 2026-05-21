const steps = [
  { title: "Sign Up", desc: "Create your free account in under 60 seconds." },
  { title: "Configure", desc: "Set up your workspace with our guided onboarding." },
  { title: "Integrate", desc: "Connect your existing tools and data sources." },
  { title: "Launch", desc: "Go live and start seeing results immediately." },
];

export default function Steps3() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Get Started in Minutes</h2>
        <p className="text-gray-400 text-center mb-14">No complex setup. No engineering required.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 relative">
              <span className="text-5xl font-black text-gray-700 absolute top-4 right-4 leading-none select-none">{i + 1}</span>
              <h3 className="font-bold text-white mb-2 mt-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

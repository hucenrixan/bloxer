const steps = [
  { title: "Create your account", desc: "Sign up in seconds. No credit card required to get started." },
  { title: "Connect your data", desc: "Import from any source. We support 50+ integrations out of the box." },
  { title: "Invite your team", desc: "Add teammates and set permissions. Collaborate in real time." },
  { title: "Go live", desc: "Launch with one click. We handle the infrastructure so you don't have to." },
];

export default function Steps1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">How It Works</h2>
        <p className="text-gray-500 text-center mb-14">Up and running in four simple steps.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">{i + 1}</div>
              {i < steps.length - 1 && <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-px bg-indigo-200" />}
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: "🔐", title: "Create your account", desc: "Sign up in seconds. No credit card required to get started with our free plan." },
  { icon: "🔗", title: "Connect your data", desc: "Import from any source using our 50+ native integrations or REST API." },
  { icon: "👥", title: "Invite your team", desc: "Add teammates, assign roles, and collaborate in real time on any project." },
  { icon: "🚀", title: "Go live", desc: "Launch with one click. We handle the infrastructure, scaling, and uptime for you." },
];

export default function Steps2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
        <p className="text-gray-500 mb-12">Four steps to get your team up and running.</p>
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-2xl">{step.icon}</div>
                {i < steps.length - 1 && <div className="w-px h-10 bg-gray-200 my-1" />}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

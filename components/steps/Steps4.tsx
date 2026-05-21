const steps = [
  { step: "01", title: "Create your account", desc: "Sign up for free. No credit card. No commitment." },
  { step: "02", title: "Set up your workspace", desc: "Customize your workspace and invite your team members." },
  { step: "03", title: "Connect your tools", desc: "Integrate with Slack, GitHub, Jira, and 50+ other tools." },
  { step: "04", title: "Ship faster", desc: "Start building and deploy with a single command." },
];

export default function Steps4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Up and Running in Minutes</h2>
            <p className="text-gray-600 leading-relaxed">We've designed every step to be as simple as possible. Most teams are fully operational within their first session.</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-4 items-start">
                <span className="text-2xl font-black text-indigo-100 w-10 flex-shrink-0">{step.step}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

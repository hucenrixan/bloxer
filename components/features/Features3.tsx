export default function Features3() {
  const features = [
    {
      num: "01",
      title: "Instant onboarding",
      desc: "Import your existing data from Jira, Notion, or Asana in minutes. Your team is up and running the same day.",
    },
    {
      num: "02",
      title: "Smart task routing",
      desc: "AI-powered assignment engine suggests the right person for each task based on workload, skills, and availability.",
    },
    {
      num: "03",
      title: "Custom reporting",
      desc: "Build reports with drag-and-drop. Schedule them to arrive in your inbox every Monday morning, automatically.",
    },
    {
      num: "04",
      title: "Granular permissions",
      desc: "Control exactly who can see, edit, or share any resource. SSO, SCIM, and role-based access included.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Four reasons teams choose Crestline
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Simple pricing. Powerful features. Exceptional support. Everything you need, nothing you don't.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((f) => (
            <div key={f.num} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="text-5xl font-black text-gray-100 leading-none select-none">{f.num}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const groups = [
  { label: "Communication", items: ["Slack","Zoom","Teams","Discord"] },
  { label: "Development", items: ["GitHub","GitLab","Jira","Linear"] },
  { label: "Design", items: ["Figma","Framer","Zeplin","Canva"] },
];

export default function Integrations3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">100+ Integrations</h2>
        <p className="text-gray-500 text-center mb-12">Connect the tools your team already loves.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.label} className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">{g.label}</h3>
              <div className="flex flex-col gap-3">
                {g.items.map(name => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex-shrink-0" />
                    <span className="text-sm text-gray-700">{name}</span>
                    <span className="ml-auto text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Connected</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logos = ["Slack","GitHub","Stripe","Figma","Notion","Linear"];

export default function Integrations5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Integrations</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Connect everything in your stack</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Our open API and native integrations let you connect any tool. Build automations, sync data, and keep your team in flow.</p>
            <a href="#" className="text-indigo-600 font-medium hover:underline text-sm">Browse all integrations →</a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {logos.map((name) => (
              <div key={name} className="border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-100 rounded-xl" />
                <span className="text-xs text-gray-600 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

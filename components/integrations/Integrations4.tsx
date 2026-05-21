const logos = ["Slack","GitHub","Stripe","Figma","Notion","Linear","Vercel","Jira","Zoom","HubSpot","Zapier","Salesforce"];

export default function Integrations4() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Plug into your workflow</h2>
        <p className="text-gray-400 mb-12">100+ integrations. Setup in seconds, no code required.</p>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {logos.map((name) => (
            <div key={name} className="border border-gray-700 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-indigo-500 transition-colors group">
              <div className="w-10 h-10 bg-gray-700 group-hover:bg-indigo-900 rounded-xl transition-colors" />
              <span className="text-xs text-gray-500 group-hover:text-gray-300 font-medium transition-colors">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-8">Don't see your tool? <a href="#" className="text-indigo-400 hover:underline">Request an integration</a></p>
      </div>
    </section>
  );
}

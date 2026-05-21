const logos = ["Slack","GitHub","Stripe","Figma","Notion","Linear","Vercel","Jira","Zoom","HubSpot","Zapier","Salesforce"];

export default function Integrations1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Works with your stack</h2>
        <p className="text-gray-500 mb-12">Connect the tools you already use. 100+ integrations available.</p>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {logos.map((name) => (
            <div key={name} className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-md hover:border-indigo-200 transition-all">
              <div className="w-10 h-10 bg-gray-100 rounded-xl" />
              <span className="text-xs text-gray-600 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

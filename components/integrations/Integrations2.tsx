const logos = ["Slack","GitHub","Stripe","Figma","Notion","Linear","Vercel","Jira"];

export default function Integrations2() {
  return (
    <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted integrations</p>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded-lg" />
              <span className="font-semibold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

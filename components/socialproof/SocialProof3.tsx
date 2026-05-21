const logos = ["Airbnb","Stripe","Shopify","Notion","Linear","GitHub","Vercel","Figma","Slack","Zoom"];

export default function SocialProof3() {
  return (
    <section className="py-14 px-6 bg-indigo-50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold text-indigo-400 mb-8">10,000+ companies use our platform</p>
        <div className="grid grid-cols-5 gap-4">
          {logos.map(name => (
            <div key={name} className="bg-white border border-indigo-100 rounded-xl py-3 px-4 flex items-center justify-center">
              <span className="text-gray-400 font-bold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logos = ["Airbnb","Stripe","Shopify","Notion","Linear","GitHub","Vercel","Figma"];

export default function SocialProof1() {
  return (
    <section className="py-14 px-6 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by teams at world-class companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map(name => (
            <span key={name} className="text-gray-300 font-black text-xl tracking-tight hover:text-gray-500 transition-colors cursor-default">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

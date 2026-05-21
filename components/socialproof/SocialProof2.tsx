const logos = ["Airbnb","Stripe","Shopify","Notion","Linear","GitHub"];

export default function SocialProof2() {
  return (
    <section className="py-14 px-6 bg-gray-900 border-y border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">Powering teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map(name => (
            <span key={name} className="text-gray-600 font-black text-xl tracking-tight hover:text-gray-300 transition-colors cursor-default">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

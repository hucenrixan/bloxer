const logos = ["Airbnb","Stripe","Shopify","Notion","Linear","GitHub","Vercel","Figma","Slack","Zoom","Intercom","Atlassian"];

export default function SocialProof5() {
  return (
    <section className="py-14 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by 10,000+ teams worldwide</p>
        <div className="flex gap-10 overflow-x-auto pb-2 scrollbar-hide">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="text-gray-200 font-black text-xl whitespace-nowrap hover:text-gray-400 transition-colors cursor-default flex-shrink-0">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

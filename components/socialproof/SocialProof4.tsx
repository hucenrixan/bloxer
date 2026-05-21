const stats = [
  { value: "10,000+", label: "Companies" },
  { value: "140+", label: "Countries" },
  { value: "4.9★", label: "Avg Rating" },
];
const logos = ["Airbnb","Stripe","Shopify","Notion","Linear","GitHub"];

export default function SocialProof4() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 rounded-3xl p-8">
          <div className="flex gap-10">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="h-8 w-px bg-gray-200 hidden md:block" />
          <div className="flex flex-wrap gap-5 justify-center">
            {logos.map(name => (
              <span key={name} className="text-gray-300 font-black text-lg">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

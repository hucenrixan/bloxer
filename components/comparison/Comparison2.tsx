export default function Comparison2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Why Switch to Us?</h2>
        <p className="text-gray-500 text-center mb-12">See how we compare to the competition.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 rounded-2xl p-8 opacity-60">
            <h3 className="font-bold text-gray-500 text-lg mb-6 flex items-center gap-2"><span>😐</span> Competitors</h3>
            {["Complex setup & onboarding","Hidden fees and overages","Slow support response times","Limited API access","No real-time collaboration"].map(f => (
              <div key={f} className="flex items-center gap-3 py-3 border-b border-gray-300 last:border-0">
                <span className="text-red-400 font-bold">✕</span>
                <span className="text-gray-600 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="bg-indigo-600 rounded-2xl p-8 shadow-lg">
            <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2"><span>😊</span> Our Platform</h3>
            {["5-minute setup, no engineers needed","Transparent, flat-rate pricing","24/7 live support on all plans","Full API + webhooks included","Real-time collaboration built-in"].map(f => (
              <div key={f} className="flex items-center gap-3 py-3 border-b border-indigo-500 last:border-0">
                <span className="text-green-300 font-bold">✓</span>
                <span className="text-white text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

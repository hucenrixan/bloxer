const before = ["Hours of manual setup","Spreadsheets everywhere","Missed deadlines","No team visibility","Scattered tools"];
const after = ["Deploy in 5 minutes","Unified dashboard","Automated reminders","Real-time updates","Everything in one place"];

export default function Comparison5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Before vs After</h2>
        <p className="text-gray-500 text-center mb-12">See the difference our platform makes.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
            <h3 className="font-bold text-red-700 mb-5 flex items-center gap-2"><span>😩</span> Before</h3>
            <div className="flex flex-col gap-3">
              {before.map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-red-600">
                  <span className="font-bold">✕</span> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
            <h3 className="font-bold text-emerald-700 mb-5 flex items-center gap-2"><span>😊</span> After</h3>
            <div className="flex flex-col gap-3">
              {after.map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-emerald-700">
                  <span className="font-bold">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const rows = [
  { name: "Pro Plan", mrr: "$4,200", users: "142", churn: "2.1%", growth: "+12%" },
  { name: "Starter Plan", mrr: "$1,800", users: "298", churn: "4.5%", growth: "+8%" },
  { name: "Enterprise", mrr: "$12,000", users: "18", churn: "0.5%", growth: "+22%" },
];

export default function DataTable3() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-6">Revenue by Plan</h2>
        <div className="border border-gray-700 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-700 bg-gray-800">
              <tr>{["Plan","MRR","Users","Churn Rate","Growth"].map(h => <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {rows.map(r => (
                <tr key={r.name} className="hover:bg-gray-800 transition-colors">
                  <td className="px-4 py-4 font-semibold text-white">{r.name}</td>
                  <td className="px-4 py-4 text-emerald-400 font-bold">{r.mrr}</td>
                  <td className="px-4 py-4 text-gray-300">{r.users}</td>
                  <td className="px-4 py-4 text-red-400">{r.churn}</td>
                  <td className="px-4 py-4 text-emerald-400 font-semibold">{r.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

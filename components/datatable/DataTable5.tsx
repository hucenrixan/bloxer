const rows = [
  { rank: 1, page: "/home", views: "48,200", bounce: "32%", time: "2:14" },
  { rank: 2, page: "/pricing", views: "22,100", bounce: "45%", time: "1:42" },
  { rank: 3, page: "/docs", views: "18,900", bounce: "28%", time: "4:05" },
  { rank: 4, page: "/blog", views: "12,400", bounce: "55%", time: "1:10" },
  { rank: 5, page: "/contact", views: "8,300", bounce: "60%", time: "0:58" },
];

export default function DataTable5() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Top Pages This Month</h2>
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100">
              <tr>{["#","Page","Views","Bounce Rate","Avg Time"].map(h => <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-400">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {rows.map(r => (
                <tr key={r.page} className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 text-gray-300 font-bold w-8">{r.rank}</td>
                  <td className="px-5 py-3.5 font-mono text-indigo-600 font-medium">{r.page}</td>
                  <td className="px-5 py-3.5 font-semibold text-gray-900">{r.views}</td>
                  <td className="px-5 py-3.5 text-gray-500">{r.bounce}</td>
                  <td className="px-5 py-3.5 text-gray-500">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

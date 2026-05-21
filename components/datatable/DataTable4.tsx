const rows = [
  { invoice: "#INV-001", client: "Acme Corp", amount: "$3,200", status: "Paid", date: "May 1, 2026" },
  { invoice: "#INV-002", client: "Veritas Inc", amount: "$1,500", status: "Pending", date: "May 5, 2026" },
  { invoice: "#INV-003", client: "Blue Sky Ltd", amount: "$5,800", status: "Paid", date: "May 8, 2026" },
  { invoice: "#INV-004", client: "Delta Works", amount: "$920", status: "Overdue", date: "Apr 28, 2026" },
];

export default function DataTable4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-xl font-bold text-gray-900">Invoices</h2><p className="text-sm text-gray-400">4 invoices this month</p></div>
          <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Export CSV</button>
        </div>
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>{["Invoice","Client","Amount","Status","Date"].map(h => <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map(r => (
                <tr key={r.invoice} className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-mono text-gray-600 text-xs">{r.invoice}</td>
                  <td className="px-5 py-3.5 font-medium text-gray-900">{r.client}</td>
                  <td className="px-5 py-3.5 font-bold text-gray-900">{r.amount}</td>
                  <td className="px-5 py-3.5"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${r.status==="Paid"?"bg-emerald-50 text-emerald-700":r.status==="Pending"?"bg-yellow-50 text-yellow-700":"bg-red-50 text-red-700"}`}>{r.status}</span></td>
                  <td className="px-5 py-3.5 text-gray-400">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

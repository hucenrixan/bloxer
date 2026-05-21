const rows = [
  { project: "Website Redesign", status: "In Progress", priority: "High", due: "May 20", owner: "AM" },
  { project: "Mobile App v2", status: "Review", priority: "Medium", due: "Jun 1", owner: "SC" },
  { project: "API Integration", status: "Done", priority: "Low", due: "May 10", owner: "JP" },
  { project: "Marketing Campaign", status: "Blocked", priority: "High", due: "May 25", owner: "LH" },
];
const statusColors: Record<string,string> = { "In Progress":"bg-blue-50 text-blue-700", "Review":"bg-purple-50 text-purple-700", "Done":"bg-emerald-50 text-emerald-700", "Blocked":"bg-red-50 text-red-700" };
const priorityColors: Record<string,string> = { "High":"text-red-500","Medium":"text-yellow-600","Low":"text-gray-400" };

export default function DataTable2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Projects</h2>
          <div className="flex gap-2">
            <input className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search..." />
            <button className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors">+ New</button>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200">
              <tr>{["Project","Status","Priority","Due Date","Owner"].map(h => <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {rows.map(r => (
                <tr key={r.project} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-gray-900">{r.project}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[r.status]}`}>{r.status}</span></td>
                  <td className={`px-4 py-3 font-semibold text-xs ${priorityColors[r.priority]}`}>{r.priority}</td>
                  <td className="px-4 py-3 text-gray-500">{r.due}</td>
                  <td className="px-4 py-3"><div className="w-7 h-7 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center font-bold">{r.owner}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

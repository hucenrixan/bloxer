const rows = [
  { name: "Alex Morgan", email: "alex@company.com", role: "Admin", status: "Active", joined: "Jan 3, 2026" },
  { name: "Sara Chen", email: "sara@company.com", role: "Editor", status: "Active", joined: "Jan 15, 2026" },
  { name: "James Park", email: "james@company.com", role: "Viewer", status: "Pending", joined: "Feb 2, 2026" },
  { name: "Layla Hassan", email: "layla@company.com", role: "Editor", status: "Active", joined: "Feb 20, 2026" },
  { name: "Tom Reeves", email: "tom@company.com", role: "Admin", status: "Inactive", joined: "Mar 5, 2026" },
];

export default function DataTable1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">+ Invite</button>
        </div>
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>{["Name","Email","Role","Status","Joined"].map(h => <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map(r => (
                <tr key={r.email} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{r.name}</td>
                  <td className="px-4 py-3 text-gray-500">{r.email}</td>
                  <td className="px-4 py-3 text-gray-600">{r.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === "Active" ? "bg-emerald-50 text-emerald-700" : r.status === "Pending" ? "bg-yellow-50 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>{r.status}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{r.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

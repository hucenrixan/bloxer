const depts = [
  { name: "Engineering", count: 5, color: "bg-indigo-100 text-indigo-700", jobs: ["Senior Frontend","Backend Lead","DevOps Engineer","Mobile Dev","QA Engineer"] },
  { name: "Design", count: 2, color: "bg-pink-100 text-pink-700", jobs: ["Product Designer","Design Systems Lead"] },
  { name: "Marketing", count: 3, color: "bg-emerald-100 text-emerald-700", jobs: ["Growth Marketer","Content Writer","SEO Specialist"] },
];

export default function Careers2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">We're Hiring</h2>
        <p className="text-gray-500 mb-10">Browse open roles by department.</p>
        <div className="flex flex-col gap-4">
          {depts.map(d => (
            <div key={d.name} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${d.color}`}>{d.name}</span>
                  <span className="text-gray-500 text-sm">{d.count} open roles</span>
                </div>
                <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">View all →</a>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {d.jobs.map(j => (
                  <div key={j} className="text-sm text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors py-1">→ {j}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const jobs = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote", salary: "$140–180k" },
  { title: "Product Designer", dept: "Design", location: "Remote", salary: "$120–150k" },
  { title: "Growth Marketer", dept: "Marketing", location: "NYC", salary: "$90–120k" },
  { title: "Customer Success Manager", dept: "Support", location: "Remote", salary: "$80–100k" },
];

export default function Careers4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Positions</h2>
          <p className="text-gray-500">We're transparent about compensation. All salaries listed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map(j => (
            <div key={j.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{j.dept}</span>
                <span className="text-xs text-gray-500">{j.location}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{j.title}</h3>
              <p className="text-emerald-600 text-sm font-semibold">{j.salary}</p>
              <button className="mt-4 text-xs text-indigo-600 font-medium hover:underline">Apply now →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

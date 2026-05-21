const jobs = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "San Francisco", type: "Full-time" },
  { title: "Growth Marketer", dept: "Marketing", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Support", location: "New York", type: "Full-time" },
];

export default function Careers1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Positions</h2>
        <p className="text-gray-500 mb-10">Join our team and help build the future of work.</p>
        <div className="flex flex-col divide-y divide-gray-100">
          {jobs.map(j => (
            <div key={j.title} className="py-5 flex items-center justify-between group cursor-pointer hover:bg-gray-50 -mx-4 px-4 rounded-xl transition-colors">
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{j.title}</h3>
                <div className="flex gap-3 mt-1">
                  <span className="text-xs text-gray-500">{j.dept}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-500">{j.location}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-500">{j.type}</span>
                </div>
              </div>
              <span className="text-gray-400 group-hover:text-indigo-600 transition-colors text-lg">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

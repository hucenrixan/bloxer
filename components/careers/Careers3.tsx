const perks = ["Remote-first culture","Competitive salary","Health & dental","$2k learning budget","Generous PTO","Team retreats"];
const jobs = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote" },
  { title: "Product Designer", dept: "Design", location: "Remote" },
  { title: "Growth Marketer", dept: "Marketing", location: "NYC" },
];

export default function Careers3() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Come Work With Us</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">We're a remote-first team building tools that millions of people use. We care about craft, autonomy, and impact.</p>
            <div className="grid grid-cols-2 gap-3">
              {perks.map(p => (
                <div key={p} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-emerald-400">✓</span>{p}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Open Roles</h3>
            <div className="flex flex-col gap-3">
              {jobs.map(j => (
                <div key={j.title} className="border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors cursor-pointer group">
                  <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">{j.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{j.dept} · {j.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

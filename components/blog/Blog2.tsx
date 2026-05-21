const featured = { tag: "Engineering", title: "How We Reduced Load Time by 80% Using Edge Caching", excerpt: "A deep dive into the performance optimizations we made to our core platform, including edge caching, image optimization, and code splitting strategies that cut our load times dramatically.", author: "Sara Chen", date: "May 2, 2026", color: "bg-indigo-200" };
const side = [
  { tag: "Product", title: "Introducing Our New Dashboard", date: "Apr 18, 2026", color: "bg-purple-200" },
  { tag: "Company", title: "We Raised $12M Series A", date: "Apr 5, 2026", color: "bg-emerald-200" },
  { tag: "Design", title: "Redesigning Our Onboarding Flow", date: "Mar 22, 2026", color: "bg-pink-200" },
];

export default function Blog2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Latest Articles</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 border border-gray-200 bg-white rounded-2xl overflow-hidden">
            <div className={`${featured.color} h-56`} />
            <div className="p-6">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{featured.tag}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{featured.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{featured.excerpt}</p>
              <p className="text-xs text-gray-400">{featured.author} · {featured.date}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {side.map((post) => (
              <div key={post.title} className="border border-gray-200 bg-white rounded-xl overflow-hidden flex gap-3 p-3 hover:shadow-sm transition-shadow">
                <div className={`${post.color} w-16 h-16 rounded-lg flex-shrink-0`} />
                <div>
                  <span className="text-xs font-semibold text-indigo-600">{post.tag}</span>
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug mt-0.5">{post.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

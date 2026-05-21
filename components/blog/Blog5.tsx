const posts = [
  { tag: "Engineering", title: "How We Reduced Load Time by 80%", excerpt: "Edge caching strategies that transformed our performance.", date: "May 2, 2026", color: "bg-indigo-200" },
  { tag: "Product", title: "Introducing Our New Dashboard", excerpt: "Built around how teams actually work every day.", date: "Apr 18, 2026", color: "bg-purple-200" },
  { tag: "Company", title: "We Raised $12M Series A", excerpt: "Accelerating the roadmap and expanding globally.", date: "Apr 5, 2026", color: "bg-emerald-200" },
  { tag: "Design", title: "Redesigning Our Onboarding Flow", excerpt: "Cut time-to-first-value by 60% with a focused redesign.", date: "Mar 22, 2026", color: "bg-pink-200" },
  { tag: "Engineering", title: "Why We Chose Rust for Our Core", excerpt: "Performance and reliability at scale with Rust.", date: "Mar 10, 2026", color: "bg-orange-200" },
  { tag: "Product", title: "2026 Product Roadmap Preview", excerpt: "A look at what we're building over the next 12 months.", date: "Feb 28, 2026", color: "bg-cyan-200" },
];

export default function Blog5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
            <p className="text-gray-500 mt-1">Stories and updates from the team.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <div key={post.title} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className={`${post.color} h-36`} />
              <div className="p-4">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{post.tag}</span>
                <h3 className="font-bold text-gray-900 mt-2 mb-1 text-sm leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-xs mb-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Load More Posts</button>
        </div>
      </div>
    </section>
  );
}

const posts = [
  { tag: "Engineering", title: "How We Reduced Load Time by 80%", excerpt: "A deep dive into edge caching, image optimization, and code splitting.", date: "May 2, 2026", color: "bg-indigo-800" },
  { tag: "Product", title: "Introducing Our New Dashboard", excerpt: "Built around how teams actually work, completely redesigned.", date: "Apr 18, 2026", color: "bg-purple-800" },
  { tag: "Company", title: "We Raised $12M Series A", excerpt: "Accelerating our roadmap and expanding the team globally.", date: "Apr 5, 2026", color: "bg-slate-700" },
];

export default function Blog4() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">From the Blog</h2>
        <p className="text-gray-400 mb-10">Stories and updates from our team.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-colors group cursor-pointer">
              <div className={`${post.color} h-44 group-hover:opacity-90 transition-opacity`} />
              <div className="p-5">
                <span className="text-xs font-semibold text-indigo-400">{post.tag}</span>
                <h3 className="font-bold text-white mt-2 mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

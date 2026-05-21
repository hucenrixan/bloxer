const posts = [
  { tag: "Engineering", title: "How We Reduced Load Time by 80%", excerpt: "A deep dive into the performance optimizations we made to our core platform.", author: "Sara Chen", date: "May 2, 2026", color: "bg-indigo-200" },
  { tag: "Product", title: "Introducing Our New Dashboard", excerpt: "A completely redesigned interface built around how teams actually work.", author: "James Park", date: "Apr 18, 2026", color: "bg-purple-200" },
  { tag: "Company", title: "We Raised $12M Series A", excerpt: "Today we're excited to announce our Series A to accelerate our roadmap.", author: "Alex Morgan", date: "Apr 5, 2026", color: "bg-emerald-200" },
];

export default function Blog1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">From the Blog</h2>
        <p className="text-gray-500 mb-10">Thoughts, news, and updates from the team.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className={`${post.color} h-44`} />
              <div className="p-5">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{post.tag}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

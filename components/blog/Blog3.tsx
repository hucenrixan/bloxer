const posts = [
  { date: "May 2, 2026", tag: "Engineering", title: "How We Reduced Load Time by 80%", excerpt: "A deep dive into the performance optimizations that cut our load times dramatically." },
  { date: "Apr 18, 2026", tag: "Product", title: "Introducing Our New Dashboard", excerpt: "A completely redesigned interface built around how teams actually work day to day." },
  { date: "Apr 5, 2026", tag: "Company", title: "We Raised $12M Series A", excerpt: "Today we're excited to announce our Series A round to accelerate our product roadmap." },
  { date: "Mar 22, 2026", tag: "Design", title: "Redesigning Our Onboarding Flow", excerpt: "We cut time-to-first-value by 60% through a focused redesign of the onboarding experience." },
];

export default function Blog3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Writing</h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {posts.map((post) => (
            <div key={post.title} className="py-6 flex gap-8 items-start hover:bg-gray-50 -mx-4 px-4 rounded-xl transition-colors cursor-pointer">
              <div className="text-sm text-gray-400 w-28 flex-shrink-0 pt-1">{post.date}</div>
              <div>
                <span className="text-xs font-semibold text-indigo-600">{post.tag}</span>
                <h3 className="font-semibold text-gray-900 mt-1 mb-1.5">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

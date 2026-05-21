const tweets = [
  { name: "Taylor W.", handle: "@taylormakes", avatar: "TW", color: "bg-sky-400", text: "Been using this daily for 3 months. The iCloud sync is instantaneous. Nothing else comes close on iOS.", likes: "142", time: "2h" },
  { name: "Dev Patel", handle: "@devbuilds", avatar: "DP", color: "bg-orange-400", text: "Switched from Notion and never looked back. The widget on my Lock Screen is the first thing I see every morning.", likes: "89", time: "5h" },
  { name: "Claire N.", handle: "@claire_nx", avatar: "CN", color: "bg-rose-400", text: "5 stars because they ACTUALLY listen to feedback. My requested feature shipped in the next update. Rare.", likes: "203", time: "1d" },
];

export default function iOSTestimonials2() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">People love it</h2>
          <p className="text-gray-500 text-sm">Real users, real opinions.</p>
        </div>
        <div className="flex flex-col gap-4">
          {tweets.map(t => (
            <div key={t.handle} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>{t.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.handle}</p>
                </div>
                <span className="text-blue-400 text-lg">𝕏</span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">{t.text}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>♡ {t.likes}</span>
                <span>{t.time} ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

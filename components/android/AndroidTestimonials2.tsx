const reviews = [
  { name: "Riya M.", handle: "@riyamakes", avatar: "RM", color: "bg-violet-400", text: "The Material You theming felt like magic on my Pixel. It matched my wallpaper instantly and the widgets are beautiful.", likes: "118", time: "3h" },
  { name: "Ben O.", handle: "@beno_dev", avatar: "BO", color: "bg-blue-400", text: "Came from iOS and honestly this Android version is better. The bottom sheet UI feels so natural.", likes: "74", time: "6h" },
  { name: "Fatima K.", handle: "@fatimak", avatar: "FK", color: "bg-amber-400", text: "Google Drive sync is instant. I moved between my Pixel phone and tablet without missing a beat.", likes: "196", time: "1d" },
];

export default function AndroidTestimonials2() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Android users love it</h2>
          <p className="text-gray-500 text-sm">Real users, real opinions.</p>
        </div>
        <div className="flex flex-col gap-4">
          {reviews.map(t => (
            <div key={t.handle} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
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

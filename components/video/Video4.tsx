const videos = [
  { title: "Getting Started", duration: "2:15", color: "bg-indigo-200" },
  { title: "Team Features", duration: "3:42", color: "bg-purple-200" },
  { title: "Advanced Settings", duration: "5:10", color: "bg-emerald-200" },
];

export default function Video4() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Video Tutorials</h2>
        <p className="text-gray-500 mb-10">Learn at your own pace with our short video guides.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map(v => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
              <div className={`${v.color} aspect-video flex items-center justify-center relative`}>
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow">
                  <span className="text-gray-800 ml-0.5">▶</span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">{v.duration}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="text-xs text-gray-400 mt-1">Watch tutorial</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

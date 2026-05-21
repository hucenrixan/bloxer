export default function Video3() {
  return (
    <section className="py-0 bg-gray-900">
      <div className="relative aspect-video max-h-[600px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-indigo-900/30" />
        <button className="relative z-20 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
          <span className="text-white text-3xl ml-1 group-hover:scale-110 transition-transform">▶</span>
        </button>
        <div className="absolute bottom-8 left-8 z-20">
          <h2 className="text-3xl font-bold text-white mb-1">See the Full Demo</h2>
          <p className="text-gray-300 text-sm">3 minutes · No signup required</p>
        </div>
      </div>
    </section>
  );
}

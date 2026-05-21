const colors = ["bg-indigo-200","bg-purple-200","bg-pink-200","bg-emerald-200","bg-orange-200","bg-cyan-200","bg-yellow-200","bg-rose-200","bg-teal-200"];

export default function Gallery1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Our Work</h2>
        <p className="text-gray-500 text-center mb-10">A selection of our best projects.</p>
        <div className="grid grid-cols-3 gap-3">
          {colors.map((color, i) => (
            <div key={i} className={`group relative aspect-square ${color} rounded-xl overflow-hidden cursor-pointer`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1.5 rounded-full">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

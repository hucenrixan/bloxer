const colors = ["bg-indigo-200","bg-purple-300","bg-pink-200","bg-emerald-200","bg-orange-200","bg-cyan-200","bg-yellow-200","bg-rose-200"];

export default function Gallery5() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Gallery</h2>
        <p className="text-gray-500 mb-8">Scroll to explore our work.</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory">
        {colors.map((color, i) => (
          <div key={i} className={`flex-shrink-0 w-72 h-48 ${color} rounded-2xl snap-start`} />
        ))}
      </div>
    </section>
  );
}

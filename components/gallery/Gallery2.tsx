const left = ["bg-indigo-200","bg-purple-300","bg-pink-200"];
const right = ["bg-emerald-200","bg-orange-200","bg-cyan-300","bg-yellow-200"];

export default function Gallery2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Portfolio</h2>
        <p className="text-gray-500 text-center mb-10">Explore our creative work.</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {left.map((color, i) => (
              <div key={i} className={`${color} rounded-xl ${i === 1 ? "h-52" : "h-36"} w-full`} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {right.map((color, i) => (
              <div key={i} className={`${color} rounded-xl ${i === 2 ? "h-52" : "h-32"} w-full`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

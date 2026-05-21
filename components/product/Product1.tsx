export default function Product1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">A Better Way to Work</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">Everything in one place. No more switching tabs, losing context, or missing updates.</p>
        <div className="bg-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
            <div className="flex-1 bg-gray-100 rounded-md h-6 mx-4" />
          </div>
          <div className="p-6 grid grid-cols-4 gap-4 min-h-64">
            <div className="col-span-1 bg-white rounded-xl p-3 flex flex-col gap-3">
              {[1,2,3,4,5].map(i => <div key={i} className={`h-3 rounded bg-gray-${i === 1 ? "900" : "200"} w-${i === 1 ? "full" : "3/4"}`} />)}
            </div>
            <div className="col-span-3 bg-white rounded-xl p-4 flex flex-col gap-3">
              <div className="h-4 bg-gray-900 rounded w-1/3" />
              <div className="grid grid-cols-3 gap-3 mt-2">
                {["bg-indigo-100","bg-purple-100","bg-emerald-100"].map((c,i) => <div key={i} className={`${c} rounded-lg h-20`} />)}
              </div>
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-4/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

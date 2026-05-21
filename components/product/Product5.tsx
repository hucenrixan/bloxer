export default function Product5() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-600 to-indigo-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3">See the Full Picture</h2>
        <p className="text-indigo-200 mb-12">Every metric, every project, every teammate — all in one view.</p>
        <div className="bg-white/10 border border-white/20 rounded-3xl p-2 backdrop-blur-sm">
          <div className="bg-indigo-950/80 rounded-2xl p-6 flex flex-col gap-4 min-h-64">
            <div className="flex items-center justify-between">
              <div className="h-3 bg-white/20 rounded w-32" />
              <div className="flex gap-2">
                {["bg-white/10","bg-indigo-500","bg-white/10"].map((c,i) => <div key={i} className={`${c} rounded-lg w-16 h-7`} />)}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {["bg-indigo-800","bg-purple-800","bg-indigo-700","bg-blue-800"].map((c,i) => (
                <div key={i} className={`${c} rounded-xl p-3`}>
                  <div className="h-2 bg-white/20 rounded mb-2 w-2/3" />
                  <div className="h-5 bg-white/30 rounded w-1/2" />
                </div>
              ))}
            </div>
            <div className="bg-indigo-900/50 rounded-xl h-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Banner3() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now Available
        </div>
        <h2 className="text-4xl font-black text-white mb-4">Introducing Pro Workspaces</h2>
        <p className="text-indigo-100 text-lg mb-8">Collaborate with your team in real-time, manage permissions, and ship faster with our new Pro workspace experience.</p>
        <div className="flex gap-3 justify-center">
          <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors">Get Early Access</button>
          <button className="px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">Learn More</button>
        </div>
      </div>
    </section>
  );
}

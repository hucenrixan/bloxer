export default function ComingSoon2() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <span className="text-xs font-semibold text-indigo-400 bg-indigo-900/60 border border-indigo-800 px-4 py-1.5 rounded-full">Launching Soon</span>
        <h1 className="text-5xl font-black text-white mt-6 mb-4 leading-tight">The Wait Is Almost Over</h1>
        <p className="text-gray-400 mb-10">We're putting the final touches on something you're going to love. Join the waitlist for early access.</p>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <input className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="Enter your email" />
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-colors">Join the Waitlist</button>
        </div>
        <p className="text-gray-600 text-xs mt-4">1,240 people already on the list</p>
      </div>
    </section>
  );
}

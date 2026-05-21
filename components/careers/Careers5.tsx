export default function Careers5() {
  return (
    <section className="py-20 px-6 bg-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Don't See Your Role?</h2>
        <p className="text-indigo-200 mb-8 max-w-md mx-auto">We're always looking for exceptional people. Send us your resume and tell us how you'd contribute.</p>
        <div className="bg-white/10 border border-white/20 rounded-3xl p-8 max-w-md mx-auto">
          <div className="flex flex-col gap-3">
            <input className="w-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your name" />
            <input className="w-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="Email address" />
            <input className="w-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="LinkedIn or portfolio URL" />
            <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">Send Application</button>
          </div>
        </div>
      </div>
    </section>
  );
}

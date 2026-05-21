export default function Contact4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gray-200 min-h-72 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-sm font-medium">Map Placeholder</p>
              <p className="text-xs">123 Market St, San Francisco</p>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Name</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Email</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Message</label><textarea className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" rows={4} placeholder="How can we help?" /></div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

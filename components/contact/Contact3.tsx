export default function Contact3() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
        <p className="text-gray-400 mb-10">Fill out the form and our team will be in touch within 24 hours.</p>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm font-medium text-gray-300 block mb-1">First Name</label><input className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="Alex" /></div>
            <div><label className="text-sm font-medium text-gray-300 block mb-1">Last Name</label><input className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="Morgan" /></div>
          </div>
          <div><label className="text-sm font-medium text-gray-300 block mb-1">Email</label><input className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="alex@company.com" /></div>
          <div><label className="text-sm font-medium text-gray-300 block mb-1">Message</label><textarea className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 resize-none" rows={5} placeholder="Tell us what you're working on..." /></div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors">Send Message</button>
        </div>
      </div>
    </section>
  );
}

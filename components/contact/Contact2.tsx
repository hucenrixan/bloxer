export default function Contact2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">Contact Us</h2>
          <p className="text-gray-500 text-sm text-center mb-8">We'll get back to you within one business day.</p>
          <div className="flex flex-col gap-4">
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Your Name</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Alex Morgan" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Email Address</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="alex@company.com" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Message</label><textarea className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" rows={5} placeholder="What's on your mind?" /></div>
            <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors">Send Message</button>
            <p className="text-xs text-gray-400 text-center">By submitting, you agree to our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

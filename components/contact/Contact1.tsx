export default function Contact1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-500 mb-8">We'd love to hear from you. Send us a message and we'll get back within 24 hours.</p>
            <div className="flex flex-col gap-5">
              {[
                { icon: "📍", label: "Address", value: "123 Market St, San Francisco, CA 94105" },
                { icon: "✉️", label: "Email", value: "hello@company.com" },
                { icon: "📞", label: "Phone", value: "+1 (555) 000-0000" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{label}</p>
                    <p className="text-gray-500 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-sm font-medium text-gray-700 block mb-1">First Name</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Alex" /></div>
              <div><label className="text-sm font-medium text-gray-700 block mb-1">Last Name</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Morgan" /></div>
            </div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Email</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="alex@company.com" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Subject</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Message</label><textarea className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" rows={4} placeholder="Tell us more..." /></div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

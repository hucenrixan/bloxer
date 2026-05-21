export default function Contact5() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Contact Us</h2>
        <p className="text-gray-500 text-center mb-8">Tell us about your project and we'll be in touch.</p>
        <div className="flex gap-2 justify-center mb-8">
          {["1 Details", "2 Message", "3 Send"].map((step, i) => (
            <div key={step} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${i === 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"}`}>
              {step}
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h3 className="font-semibold text-gray-900 mb-5">Your Message</h3>
          <div className="flex flex-col gap-4">
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Subject</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What's this about?" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Message</label><textarea className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" rows={5} placeholder="Describe your project or question..." /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Attach File (optional)</label><div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-400 text-sm cursor-pointer hover:border-indigo-400 transition-colors">Drop a file here or click to browse</div></div>
            <div className="flex gap-3 justify-between">
              <button className="px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">Back</button>
              <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors">Continue →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

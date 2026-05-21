const features = [
  { label: "Dashboard", color: "bg-indigo-100" },
  { label: "Analytics", color: "bg-purple-100" },
  { label: "Settings", color: "bg-emerald-100" },
];

export default function Product3() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Powerful. Simple. Beautiful.</h2>
        <p className="text-gray-500 mb-12">Every feature designed to make your work easier.</p>
        <div className="grid grid-cols-3 gap-4">
          {features.map(f => (
            <div key={f.label} className="bg-white border border-gray-200 rounded-2xl p-4">
              <div className={`${f.color} rounded-xl h-40 mb-4`} />
              <h3 className="font-semibold text-gray-900">{f.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

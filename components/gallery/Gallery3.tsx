export default function Gallery3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Work</h2>
        <p className="text-gray-500 mb-10">Handpicked highlights from our portfolio.</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-96">
          <div className="col-span-2 row-span-2 bg-indigo-200 rounded-2xl" />
          <div className="bg-purple-200 rounded-2xl" />
          <div className="bg-pink-200 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

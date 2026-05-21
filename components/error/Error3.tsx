export default function Error3() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">We lost that page</h1>
        <p className="text-gray-500 mb-8">It seems like the page you're looking for has gone missing. Let's get you back on track.</p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <a href="#" className="w-full px-5 py-3 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors text-sm text-center">Take me home</a>
          <a href="#" className="w-full px-5 py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors text-sm text-center">Report this issue</a>
        </div>
      </div>
    </section>
  );
}

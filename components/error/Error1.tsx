export default function Error1() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black text-gray-100 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <a href="#" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors text-sm">Go home</a>
          <a href="#" className="px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm">Contact support</a>
        </div>
      </div>
    </section>
  );
}

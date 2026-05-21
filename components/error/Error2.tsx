export default function Error2() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg">
        <p className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 leading-none">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Oops! Page not found</h1>
        <p className="text-gray-400 mb-8">The page you were looking for doesn't exist. It may have been moved or deleted.</p>
        <a href="#" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors">Back to Home</a>
      </div>
    </section>
  );
}

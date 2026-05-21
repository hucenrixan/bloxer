export default function Auth4() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm text-center">
        <div className="w-12 h-12 bg-gray-900 rounded-2xl mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot your password?</h1>
        <p className="text-gray-500 text-sm mb-8">Enter your email and we'll send a reset link within a minute.</p>
        <div className="flex flex-col gap-4">
          <input className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@company.com" />
          <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors">Send Reset Link</button>
        </div>
        <a href="#" className="text-indigo-600 text-sm hover:underline mt-6 inline-block">← Back to sign in</a>
      </div>
    </div>
  );
}

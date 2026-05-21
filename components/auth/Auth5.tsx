export default function Auth5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 w-full max-w-sm p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Get started free</h1>
          <p className="text-gray-500 text-sm mt-1">No credit card required.</p>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <span className="font-bold text-blue-500">G</span> Continue with Google
          </button>
          <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <span>🍎</span> Continue with Apple
          </button>
        </div>
        <div className="relative mb-4"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div><div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-gray-400">or with email</span></div></div>
        <div className="flex flex-col gap-3">
          <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Email address" />
          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold py-2.5 rounded-xl transition-opacity">Continue</button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-5">Already have an account? <a href="#" className="text-indigo-600 hover:underline font-medium">Sign in</a></p>
      </div>
    </div>
  );
}

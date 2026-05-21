export default function Auth1() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm p-8">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-6">Sign in to your account to continue.</p>
        <div className="flex flex-col gap-4">
          <div><label className="text-sm font-medium text-gray-700 block mb-1">Email</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" /></div>
          <div><label className="text-sm font-medium text-gray-700 block mb-1">Password</label><input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" /></div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600"><input type="checkbox" className="rounded" /> Remember me</label>
            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors">Sign In</button>
          <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div><div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-gray-400">or continue with</span></div></div>
          <button className="w-full border border-gray-300 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-2">
            <span>G</span> Google
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">No account? <a href="#" className="text-indigo-600 hover:underline font-medium">Sign up free</a></p>
      </div>
    </div>
  );
}

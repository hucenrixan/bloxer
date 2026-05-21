export default function Auth3() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-500 rounded-2xl mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-1">Create an account</h1>
          <p className="text-gray-400 text-sm">Start your 14-day free trial today.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="text-sm font-medium text-gray-300 block mb-1">First name</label><input className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="Alex" /></div>
            <div><label className="text-sm font-medium text-gray-300 block mb-1">Last name</label><input className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="Morgan" /></div>
          </div>
          <div><label className="text-sm font-medium text-gray-300 block mb-1">Email</label><input className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="you@company.com" /></div>
          <div><label className="text-sm font-medium text-gray-300 block mb-1">Password</label><input type="password" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="Min. 8 characters" /></div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition-colors">Create Account</button>
          <p className="text-xs text-gray-500 text-center">By signing up you agree to our <a href="#" className="text-indigo-400 hover:underline">Terms</a> and <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>.</p>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">Already have an account? <a href="#" className="text-indigo-400 hover:underline font-medium">Sign in</a></p>
      </div>
    </div>
  );
}

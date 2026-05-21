export default function Auth2() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-indigo-600 flex-col justify-between p-12">
        <div className="w-10 h-10 bg-white/20 rounded-xl" />
        <div>
          <p className="text-white text-2xl font-bold leading-snug mb-4">"This platform has completely transformed how our team collaborates."</p>
          <p className="text-indigo-200 text-sm">— Sarah Chen, CTO at Veritas</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-8 bg-white">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h1>
          <p className="text-gray-500 text-sm mb-8">Enter your credentials to access your account.</p>
          <div className="flex flex-col gap-4">
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Email</label><input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" /></div>
            <div><label className="text-sm font-medium text-gray-700 block mb-1">Password</label><input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" /></div>
            <a href="#" className="text-indigo-600 text-sm hover:underline text-right">Forgot password?</a>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors">Sign In</button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">No account? <a href="#" className="text-indigo-600 hover:underline font-medium">Create one</a></p>
        </div>
      </div>
    </div>
  );
}

export default function AppDownload5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Try it on your phone</h2>
        <p className="text-gray-500 mb-8">Scan the QR code or download directly from your app store.</p>
        <div className="flex items-center justify-center gap-10">
          <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-400 text-xs">QR Code</div>
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors text-sm">
              <span className="text-xl">🍎</span> <div className="text-left"><p className="text-xs text-gray-400">Download on the</p><p className="font-semibold">App Store</p></div>
            </button>
            <button className="flex items-center gap-3 bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors text-sm">
              <span className="text-xl">▶️</span> <div className="text-left"><p className="text-xs text-gray-400">Get it on</p><p className="font-semibold">Google Play</p></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

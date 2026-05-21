export default function Banner5() {
  return (
    <div className="bg-amber-500 text-white">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-center gap-4 flex-wrap">
        <span className="text-lg">🔥</span>
        <span className="text-sm font-semibold">Summer Sale is LIVE — 40% off all Pro plans.</span>
        <span className="bg-amber-700 text-amber-100 text-xs font-bold px-2.5 py-0.5 rounded-full">Ends Soon</span>
        <a href="#" className="text-sm font-bold underline hover:no-underline">Claim Offer</a>
      </div>
    </div>
  );
}

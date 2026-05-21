export default function Testimonials2() {
  return (
    <section className="w-full bg-stone-50 py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-8xl font-black text-stone-200 leading-none mb-4 select-none">"</div>
        <blockquote className="text-2xl md:text-3xl font-light text-stone-800 italic leading-snug mb-10">
          Switching to Crestline was the single best operational decision we made this year. Our team is happier, faster, and more aligned than ever.
        </blockquote>
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
            JL
          </div>
          <div>
            <div className="font-semibold text-stone-900">Jessica Liu</div>
            <div className="text-sm text-stone-500">Head of Product, Meridian Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "How do I get started with the platform?", a: "Sign up for a free account. The onboarding wizard walks you through your first project in under 5 minutes." },
  { q: "What plans are available?", a: "We offer Free, Pro ($29/mo), and Enterprise (custom pricing) plans tailored to different team sizes." },
  { q: "Is my data secure?", a: "All data is encrypted at rest and in transit. We are SOC 2 Type II certified and GDPR compliant." },
  { q: "Can I migrate from another tool?", a: "Yes. We provide migration tools and a dedicated onboarding specialist for Pro and Enterprise customers." },
];

export default function FAQ3() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Questions &amp; Answers</h2>
        <div className="flex flex-col gap-12">
          {faqs.map((faq, i) => (
            <div key={i} className="flex gap-8">
              <span className="text-5xl font-black text-gray-100 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

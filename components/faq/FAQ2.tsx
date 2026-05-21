const faqs = [
  { q: "How do I get started?", a: "Sign up for a free account and follow the onboarding steps. You'll be up and running in minutes." },
  { q: "Is there a free plan?", a: "Yes, our free plan includes 3 projects, 5GB storage, and core features with no credit card required." },
  { q: "Can I cancel anytime?", a: "Absolutely. Cancel at any time and your data stays accessible until the billing period ends." },
  { q: "How does billing work?", a: "Monthly or annual billing available. Annual plans include a 20% discount and auto-invoicing." },
  { q: "Do you offer team accounts?", a: "Yes. Team plans start at 5 seats with shared workspaces and admin controls." },
  { q: "What support options are available?", a: "Email for all plans, live chat for Pro, and a dedicated manager for Enterprise." },
];

export default function FAQ2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Got Questions?</h2>
        <p className="text-gray-500 text-center mb-12">We have answers. Here are the most common ones.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

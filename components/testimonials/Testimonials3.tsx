export default function Testimonials3() {
  const col1 = [
    {
      quote: "Finally, a project tool our design team actually wants to use. The interface is clean and the shortcuts are incredible.",
      name: "Ava Torres",
      role: "Lead Designer, Chromatic Studio",
      initials: "AT",
      color: "bg-pink-400",
    },
    {
      quote: "We migrated from three separate tools to Crestline and our productivity went up 40%. The integrations are seamless.",
      name: "Ben Nakamura",
      role: "Engineering Manager, Orion Labs",
      initials: "BN",
      color: "bg-blue-400",
    },
    {
      quote: "Customer support is genuinely exceptional. A real human responds in minutes, not days.",
      name: "Clara West",
      role: "Founder, Waveform AI",
      initials: "CW",
      color: "bg-amber-400",
    },
  ];

  const col2 = [
    {
      quote: "The reporting features are more powerful than tools we were paying 5x as much for.",
      name: "Dev Sharma",
      role: "Data Analyst, Pulsewave",
      initials: "DS",
      color: "bg-emerald-400",
    },
    {
      quote: "Rolling out Crestline to our 200-person team took a weekend. The SSO and SCIM setup was painless and our IT team was genuinely impressed by the documentation.",
      name: "Elena Moreau",
      role: "IT Director, Centrix Group",
      initials: "EM",
      color: "bg-violet-400",
    },
    {
      quote: "The mobile app is just as good as the desktop. I can run my team from anywhere.",
      name: "Frank Adler",
      role: "Operations Lead, Tradelane",
      initials: "FA",
      color: "bg-orange-400",
    },
  ];

  const Card = ({ t }: { t: typeof col1[0] }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 break-inside-avoid">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {t.initials}
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-900">{t.name}</div>
          <div className="text-xs text-gray-400">{t.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What our users say</h2>
          <p className="text-gray-500">Real stories from real teams.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {col1.map((t) => <Card key={t.name} t={t} />)}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((t) => <Card key={t.name} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

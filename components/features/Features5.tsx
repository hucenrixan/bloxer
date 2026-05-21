export default function Features5() {
  const stats = [
    { value: "12k+", label: "Active teams" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "4.2M", label: "Tasks completed" },
  ];

  const featureList = [
    "Unlimited projects and workspaces",
    "Role-based access control",
    "Advanced reporting and exports",
    "Slack, GitHub & Jira integrations",
    "Priority 24/7 support",
    "SAML SSO and SCIM provisioning",
    "Custom fields and templates",
    "API access with 500 req/min",
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-start">
        {/* Stats side */}
        <div className="md:w-80 flex-shrink-0">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-8">By the numbers</p>
          <div className="flex flex-col gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-black text-gray-900 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Feature list side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Included in every plan
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We don't hide essential features behind paywalls. Every Crestline customer gets access to the full platform from day one.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featureList.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

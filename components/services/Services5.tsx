"use client";
import { useState } from "react";

const services = [
  { title: "UI/UX Design", desc: "We create user-centered interfaces that are beautiful and effective. Our process starts with research, moves through wireframing, and ends with pixel-perfect delivery that delights users.", color: "bg-indigo-200" },
  { title: "Web Development", desc: "From landing pages to complex platforms, we build fast and scalable web apps using Next.js, TypeScript, and modern infrastructure that performs at any scale.", color: "bg-purple-200" },
  { title: "Mobile Apps", desc: "Native and cross-platform apps for iOS and Android using React Native and Flutter. We handle everything from design to App Store submission.", color: "bg-pink-200" },
  { title: "Cloud & DevOps", desc: "We set up CI/CD pipelines, containerized deployments, and monitoring dashboards so your team can ship with confidence every single day.", color: "bg-emerald-200" },
];

export default function Services5() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
        <p className="text-gray-500 mb-10">Click a service to learn more.</p>
        <div className="grid grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-gray-200">
          <div className="col-span-1 border-r border-gray-200">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 text-sm font-medium border-b border-gray-100 last:border-0 transition-colors ${active === i ? "bg-indigo-50 text-indigo-700 border-l-2 border-l-indigo-600" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {s.title}
              </button>
            ))}
          </div>
          <div className="col-span-3 p-8 flex gap-6 items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{services[active].title}</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{services[active].desc}</p>
              <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors">Get Started</button>
            </div>
            <div className={`${services[active].color} w-40 h-28 rounded-xl flex-shrink-0`} />
          </div>
        </div>
      </div>
    </section>
  );
}

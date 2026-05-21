import type { ProjectType } from "./projects";

export type TemplateSection = { name: string; file: string };

export type Template = {
  id: string;
  name: string;
  desc: string;
  platform: ProjectType;
  emoji: string;
  tags: string[];
  pages: { name: string; sections: TemplateSection[] }[];
};

export const TEMPLATES: Template[] = [
  // ── Web ──────────────────────────────────────────────────────────────────
  {
    id: "web-saas",
    name: "SaaS Startup",
    desc: "Full landing page for a software product",
    platform: "web",
    emoji: "🚀",
    tags: ["popular"],
    pages: [{
      name: "Home",
      sections: [
        { name: "Navbar 1 — Minimal", file: "navbars/Navbar1.tsx" },
        { name: "Hero 1 — Centered", file: "heroes/Hero1.tsx" },
        { name: "Social Proof 1", file: "socialproof/SocialProof1.tsx" },
        { name: "Features 1 — Icon grid", file: "features/Features1.tsx" },
        { name: "Pricing 1 — 3 tiers", file: "pricing/Pricing1.tsx" },
        { name: "Testimonials 1 — Grid", file: "testimonials/Testimonials1.tsx" },
        { name: "CTA 1 — Banner", file: "cta/CTA1.tsx" },
        { name: "Footer 1 — 4-column", file: "footer/Footer1.tsx" },
      ],
    }],
  },
  {
    id: "web-agency",
    name: "Agency",
    desc: "Creative agency with portfolio and services",
    platform: "web",
    emoji: "🎨",
    tags: [],
    pages: [
      {
        name: "Home",
        sections: [
          { name: "Navbar 3 — Ghost button", file: "navbars/Navbar3.tsx" },
          { name: "Hero 3 — Dark blobs", file: "heroes/Hero3.tsx" },
          { name: "Services 1", file: "services/Services1.tsx" },
          { name: "Gallery 1", file: "gallery/Gallery1.tsx" },
          { name: "Team 1", file: "team/Team1.tsx" },
          { name: "Testimonials 3 — Masonry", file: "testimonials/Testimonials3.tsx" },
          { name: "CTA 3 — Gradient", file: "cta/CTA3.tsx" },
          { name: "Footer 3 — Newsletter", file: "footer/Footer3.tsx" },
        ],
      },
      {
        name: "Contact",
        sections: [
          { name: "Navbar 3 — Ghost button", file: "navbars/Navbar3.tsx" },
          { name: "CTA 2 — Split form", file: "cta/CTA2.tsx" },
          { name: "Footer 3 — Newsletter", file: "footer/Footer3.tsx" },
        ],
      },
    ],
  },
  {
    id: "web-portfolio",
    name: "Portfolio",
    desc: "Personal portfolio for designers and developers",
    platform: "web",
    emoji: "💼",
    tags: [],
    pages: [{
      name: "Home",
      sections: [
        { name: "Navbar 2 — Classic CTA", file: "navbars/Navbar2.tsx" },
        { name: "Hero 4 — Typographic", file: "heroes/Hero4.tsx" },
        { name: "Gallery 2", file: "gallery/Gallery2.tsx" },
        { name: "Stats 1", file: "stats/Stats1.tsx" },
        { name: "Testimonials 2 — Quote", file: "testimonials/Testimonials2.tsx" },
        { name: "CTA 2 — Split form", file: "cta/CTA2.tsx" },
        { name: "Footer 2 — Centered", file: "footer/Footer2.tsx" },
      ],
    }],
  },
  {
    id: "web-startup",
    name: "Startup — Dark",
    desc: "Bold dark-mode landing for a tech startup",
    platform: "web",
    emoji: "⚡",
    tags: ["dark"],
    pages: [{
      name: "Home",
      sections: [
        { name: "Navbar 5 — Dark", file: "navbars/Navbar5.tsx" },
        { name: "Hero 3 — Dark blobs", file: "heroes/Hero3.tsx" },
        { name: "Features 4 — Dark cards", file: "features/Features4.tsx" },
        { name: "Stats 3", file: "stats/Stats3.tsx" },
        { name: "Pricing 5 — Dark neon", file: "pricing/Pricing5.tsx" },
        { name: "Testimonials 5 — Stars", file: "testimonials/Testimonials5.tsx" },
        { name: "CTA 4 — Image bg", file: "cta/CTA4.tsx" },
        { name: "Footer 5 — Rich dark", file: "footer/Footer5.tsx" },
      ],
    }],
  },
  {
    id: "web-blog",
    name: "Blog",
    desc: "Content-focused blog or newsletter",
    platform: "web",
    emoji: "✍️",
    tags: [],
    pages: [
      {
        name: "Home",
        sections: [
          { name: "Navbar 1 — Minimal", file: "navbars/Navbar1.tsx" },
          { name: "Hero 2 — Split", file: "heroes/Hero2.tsx" },
          { name: "Blog 1", file: "blog/Blog1.tsx" },
          { name: "Newsletter 1", file: "newsletter/Newsletter1.tsx" },
          { name: "Footer 2 — Centered", file: "footer/Footer2.tsx" },
        ],
      },
      {
        name: "About",
        sections: [
          { name: "Navbar 1 — Minimal", file: "navbars/Navbar1.tsx" },
          { name: "Team 1", file: "team/Team1.tsx" },
          { name: "Stats 2", file: "stats/Stats2.tsx" },
          { name: "Footer 2 — Centered", file: "footer/Footer2.tsx" },
        ],
      },
    ],
  },
  {
    id: "web-product",
    name: "Product Launch",
    desc: "Single product or app launch page",
    platform: "web",
    emoji: "📦",
    tags: ["popular"],
    pages: [{
      name: "Home",
      sections: [
        { name: "Navbar 1 — Minimal", file: "navbars/Navbar1.tsx" },
        { name: "Hero 5 — Split-screen", file: "heroes/Hero5.tsx" },
        { name: "Features 3 — Numbered", file: "features/Features3.tsx" },
        { name: "Comparison 1", file: "comparison/Comparison1.tsx" },
        { name: "Testimonials 4 — Side photo", file: "testimonials/Testimonials4.tsx" },
        { name: "Pricing 2 — Toggle", file: "pricing/Pricing2.tsx" },
        { name: "FAQ 1 — Accordion", file: "faq/FAQ1.tsx" },
        { name: "CTA 5 — Minimal", file: "cta/CTA5.tsx" },
        { name: "Footer 1 — 4-column", file: "footer/Footer1.tsx" },
      ],
    }],
  },

  // ── iOS ──────────────────────────────────────────────────────────────────
  {
    id: "ios-full",
    name: "iOS App — Full",
    desc: "Complete App Store landing page",
    platform: "ios",
    emoji: "",
    tags: ["popular"],
    pages: [{
      name: "App Landing",
      sections: [
        { name: "iOS Navbar 1 — Frosted glass", file: "ios/iOSNavbar1.tsx" },
        { name: "iOS Hero 1 — App Store", file: "ios/iOSHero1.tsx" },
        { name: "iOS Screenshots 1 — 3-up preview", file: "ios/iOSScreenshots1.tsx" },
        { name: "iOS Features 3 — Interactive tabs", file: "ios/iOSFeatures3.tsx" },
        { name: "iOS Stats 1 — 2×2 grid", file: "ios/iOSStats1.tsx" },
        { name: "iOS Pricing 1 — Free & Pro", file: "ios/iOSPricing1.tsx" },
        { name: "iOS Testimonials 3 — Carousel", file: "ios/iOSTestimonials3.tsx" },
        { name: "iOS Steps 1 — Onboarding timeline", file: "ios/iOSSteps1.tsx" },
        { name: "iOS FAQ 1 — Accordion", file: "ios/iOSFAQ1.tsx" },
        { name: "iOS CTA 1 — Gradient card", file: "ios/iOSCTA1.tsx" },
      ],
    }],
  },
  {
    id: "ios-minimal",
    name: "iOS App — Minimal",
    desc: "Clean, focused App Store page",
    platform: "ios",
    emoji: "",
    tags: [],
    pages: [{
      name: "App Landing",
      sections: [
        { name: "iOS Hero 2 — Dark minimal", file: "ios/iOSHero2.tsx" },
        { name: "iOS Features 2 — Dark 3-col", file: "ios/iOSFeatures2.tsx" },
        { name: "iOS Stats 2 — Progress bars", file: "ios/iOSStats2.tsx" },
        { name: "iOS CTA 2 — App Store badge", file: "ios/iOSCTA2.tsx" },
      ],
    }],
  },
  {
    id: "ios-subscription",
    name: "iOS App — Subscription",
    desc: "Optimised for converting to paid subscriptions",
    platform: "ios",
    emoji: "💳",
    tags: [],
    pages: [{
      name: "App Landing",
      sections: [
        { name: "iOS Navbar 1 — Frosted glass", file: "ios/iOSNavbar1.tsx" },
        { name: "iOS Hero 1 — App Store", file: "ios/iOSHero1.tsx" },
        { name: "iOS Features 1 — Icon grid", file: "ios/iOSFeatures1.tsx" },
        { name: "iOS Testimonials 1 — App Store reviews", file: "ios/iOSTestimonials1.tsx" },
        { name: "iOS Pricing 2 — All-in-one annual", file: "ios/iOSPricing2.tsx" },
        { name: "iOS FAQ 1 — Accordion", file: "ios/iOSFAQ1.tsx" },
        { name: "iOS CTA 1 — Gradient card", file: "ios/iOSCTA1.tsx" },
      ],
    }],
  },

  // ── Android ──────────────────────────────────────────────────────────────
  {
    id: "android-full",
    name: "Android App — Full",
    desc: "Complete Google Play landing page",
    platform: "android",
    emoji: "🤖",
    tags: ["popular"],
    pages: [{
      name: "App Landing",
      sections: [
        { name: "Android Navbar 1 — Material You", file: "android/AndroidNavbar1.tsx" },
        { name: "Android Hero 1 — Material You", file: "android/AndroidHero1.tsx" },
        { name: "Android Screenshots 1 — 3-up preview", file: "android/AndroidScreenshots1.tsx" },
        { name: "Android Features 3 — Interactive tabs", file: "android/AndroidFeatures3.tsx" },
        { name: "Android Stats 1 — 2×2 grid", file: "android/AndroidStats1.tsx" },
        { name: "Android Pricing 1 — Free & Pro", file: "android/AndroidPricing1.tsx" },
        { name: "Android Testimonials 3 — Carousel", file: "android/AndroidTestimonials3.tsx" },
        { name: "Android Steps 1 — Onboarding timeline", file: "android/AndroidSteps1.tsx" },
        { name: "Android FAQ 1 — Accordion", file: "android/AndroidFAQ1.tsx" },
        { name: "Android CTA 1 — Gradient card", file: "android/AndroidCTA1.tsx" },
      ],
    }],
  },
  {
    id: "android-minimal",
    name: "Android App — Minimal",
    desc: "Clean dark Material You page",
    platform: "android",
    emoji: "🤖",
    tags: ["dark"],
    pages: [{
      name: "App Landing",
      sections: [
        { name: "Android Hero 2 — Dark minimal", file: "android/AndroidHero2.tsx" },
        { name: "Android Features 2 — Dark 3-col", file: "android/AndroidFeatures2.tsx" },
        { name: "Android Stats 2 — Progress bars", file: "android/AndroidStats2.tsx" },
        { name: "Android CTA 2 — Play badge", file: "android/AndroidCTA2.tsx" },
      ],
    }],
  },
];

export function getTemplates(platform?: ProjectType): Template[] {
  if (!platform) return TEMPLATES;
  return TEMPLATES.filter(t => t.platform === platform);
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import JSZip from "jszip";
import { saveProject, listProjects, cloudSaveProject } from "@/lib/projects";

// ─── Imports ──────────────────────────────────────────────────────────────────
import Navbar1 from "@/components/navbars/Navbar1";
import Navbar2 from "@/components/navbars/Navbar2";
import Navbar3 from "@/components/navbars/Navbar3";
import Navbar4 from "@/components/navbars/Navbar4";
import Navbar5 from "@/components/navbars/Navbar5";
import Hero1 from "@/components/heroes/Hero1";
import Hero2 from "@/components/heroes/Hero2";
import Hero3 from "@/components/heroes/Hero3";
import Hero4 from "@/components/heroes/Hero4";
import Hero5 from "@/components/heroes/Hero5";
import Features1 from "@/components/features/Features1";
import Features2 from "@/components/features/Features2";
import Features3 from "@/components/features/Features3";
import Features4 from "@/components/features/Features4";
import Features5 from "@/components/features/Features5";
import Pricing1 from "@/components/pricing/Pricing1";
import Pricing2 from "@/components/pricing/Pricing2";
import Pricing3 from "@/components/pricing/Pricing3";
import Pricing4 from "@/components/pricing/Pricing4";
import Pricing5 from "@/components/pricing/Pricing5";
import Testimonials1 from "@/components/testimonials/Testimonials1";
import Testimonials2 from "@/components/testimonials/Testimonials2";
import Testimonials3 from "@/components/testimonials/Testimonials3";
import Testimonials4 from "@/components/testimonials/Testimonials4";
import Testimonials5 from "@/components/testimonials/Testimonials5";
import CTA1 from "@/components/cta/CTA1";
import CTA2 from "@/components/cta/CTA2";
import CTA3 from "@/components/cta/CTA3";
import CTA4 from "@/components/cta/CTA4";
import CTA5 from "@/components/cta/CTA5";
import Footer1 from "@/components/footer/Footer1";
import Footer2 from "@/components/footer/Footer2";
import Footer3 from "@/components/footer/Footer3";
import Footer4 from "@/components/footer/Footer4";
import Footer5 from "@/components/footer/Footer5";
import FAQ1 from "@/components/faq/FAQ1";
import FAQ2 from "@/components/faq/FAQ2";
import FAQ3 from "@/components/faq/FAQ3";
import FAQ4 from "@/components/faq/FAQ4";
import FAQ5 from "@/components/faq/FAQ5";
import Team1 from "@/components/team/Team1";
import Team2 from "@/components/team/Team2";
import Team3 from "@/components/team/Team3";
import Team4 from "@/components/team/Team4";
import Team5 from "@/components/team/Team5";
import Contact1 from "@/components/contact/Contact1";
import Contact2 from "@/components/contact/Contact2";
import Contact3 from "@/components/contact/Contact3";
import Contact4 from "@/components/contact/Contact4";
import Contact5 from "@/components/contact/Contact5";
import Gallery1 from "@/components/gallery/Gallery1";
import Gallery2 from "@/components/gallery/Gallery2";
import Gallery3 from "@/components/gallery/Gallery3";
import Gallery4 from "@/components/gallery/Gallery4";
import Gallery5 from "@/components/gallery/Gallery5";
import Blog1 from "@/components/blog/Blog1";
import Blog2 from "@/components/blog/Blog2";
import Blog3 from "@/components/blog/Blog3";
import Blog4 from "@/components/blog/Blog4";
import Blog5 from "@/components/blog/Blog5";
import Stats1 from "@/components/stats/Stats1";
import Stats2 from "@/components/stats/Stats2";
import Stats3 from "@/components/stats/Stats3";
import Stats4 from "@/components/stats/Stats4";
import Stats5 from "@/components/stats/Stats5";
import Services1 from "@/components/services/Services1";
import Services2 from "@/components/services/Services2";
import Services3 from "@/components/services/Services3";
import Services4 from "@/components/services/Services4";
import Services5 from "@/components/services/Services5";
import Banner1 from "@/components/banner/Banner1";
import Banner2 from "@/components/banner/Banner2";
import Banner3 from "@/components/banner/Banner3";
import Banner4 from "@/components/banner/Banner4";
import Banner5 from "@/components/banner/Banner5";
import Auth1 from "@/components/auth/Auth1";
import Auth2 from "@/components/auth/Auth2";
import Auth3 from "@/components/auth/Auth3";
import Auth4 from "@/components/auth/Auth4";
import Auth5 from "@/components/auth/Auth5";
import Steps1 from "@/components/steps/Steps1";
import Steps2 from "@/components/steps/Steps2";
import Steps3 from "@/components/steps/Steps3";
import Steps4 from "@/components/steps/Steps4";
import Steps5 from "@/components/steps/Steps5";
import Newsletter1 from "@/components/newsletter/Newsletter1";
import Newsletter2 from "@/components/newsletter/Newsletter2";
import Newsletter3 from "@/components/newsletter/Newsletter3";
import Newsletter4 from "@/components/newsletter/Newsletter4";
import Newsletter5 from "@/components/newsletter/Newsletter5";
import AppDownload1 from "@/components/appdownload/AppDownload1";
import AppDownload2 from "@/components/appdownload/AppDownload2";
import AppDownload3 from "@/components/appdownload/AppDownload3";
import AppDownload4 from "@/components/appdownload/AppDownload4";
import AppDownload5 from "@/components/appdownload/AppDownload5";
import Integrations1 from "@/components/integrations/Integrations1";
import Integrations2 from "@/components/integrations/Integrations2";
import Integrations3 from "@/components/integrations/Integrations3";
import Integrations4 from "@/components/integrations/Integrations4";
import Integrations5 from "@/components/integrations/Integrations5";
import Error1 from "@/components/error/Error1";
import Error2 from "@/components/error/Error2";
import Error3 from "@/components/error/Error3";
import Error4 from "@/components/error/Error4";
import Error5 from "@/components/error/Error5";
import Comparison1 from "@/components/comparison/Comparison1";
import Comparison2 from "@/components/comparison/Comparison2";
import Comparison3 from "@/components/comparison/Comparison3";
import Comparison4 from "@/components/comparison/Comparison4";
import Comparison5 from "@/components/comparison/Comparison5";
import Timeline1 from "@/components/timeline/Timeline1";
import Timeline2 from "@/components/timeline/Timeline2";
import Timeline3 from "@/components/timeline/Timeline3";
import Timeline4 from "@/components/timeline/Timeline4";
import Timeline5 from "@/components/timeline/Timeline5";
import SocialProof1 from "@/components/socialproof/SocialProof1";
import SocialProof2 from "@/components/socialproof/SocialProof2";
import SocialProof3 from "@/components/socialproof/SocialProof3";
import SocialProof4 from "@/components/socialproof/SocialProof4";
import SocialProof5 from "@/components/socialproof/SocialProof5";
import Video1 from "@/components/video/Video1";
import Video2 from "@/components/video/Video2";
import Video3 from "@/components/video/Video3";
import Video4 from "@/components/video/Video4";
import Video5 from "@/components/video/Video5";
import Careers1 from "@/components/careers/Careers1";
import Careers2 from "@/components/careers/Careers2";
import Careers3 from "@/components/careers/Careers3";
import Careers4 from "@/components/careers/Careers4";
import Careers5 from "@/components/careers/Careers5";
import ComingSoon1 from "@/components/comingsoon/ComingSoon1";
import ComingSoon2 from "@/components/comingsoon/ComingSoon2";
import ComingSoon3 from "@/components/comingsoon/ComingSoon3";
import ComingSoon4 from "@/components/comingsoon/ComingSoon4";
import ComingSoon5 from "@/components/comingsoon/ComingSoon5";
import Product1 from "@/components/product/Product1";
import Product2 from "@/components/product/Product2";
import Product3 from "@/components/product/Product3";
import Product4 from "@/components/product/Product4";
import Product5 from "@/components/product/Product5";
import DataTable1 from "@/components/datatable/DataTable1";
import DataTable2 from "@/components/datatable/DataTable2";
import DataTable3 from "@/components/datatable/DataTable3";
import DataTable4 from "@/components/datatable/DataTable4";
import DataTable5 from "@/components/datatable/DataTable5";
import Profile1 from "@/components/profile/Profile1";
import Profile2 from "@/components/profile/Profile2";
import Profile3 from "@/components/profile/Profile3";
import Profile4 from "@/components/profile/Profile4";
import Profile5 from "@/components/profile/Profile5";
import iOSHero1 from "@/components/ios/iOSHero1";
import iOSHero2 from "@/components/ios/iOSHero2";
import iOSFeatures1 from "@/components/ios/iOSFeatures1";
import iOSFeatures2 from "@/components/ios/iOSFeatures2";
import iOSFeatures3 from "@/components/ios/iOSFeatures3";
import iOSPricing1 from "@/components/ios/iOSPricing1";
import iOSPricing2 from "@/components/ios/iOSPricing2";
import iOSTestimonials1 from "@/components/ios/iOSTestimonials1";
import iOSTestimonials2 from "@/components/ios/iOSTestimonials2";
import iOSTestimonials3 from "@/components/ios/iOSTestimonials3";
import iOSCTA1 from "@/components/ios/iOSCTA1";
import iOSCTA2 from "@/components/ios/iOSCTA2";
import iOSStats1 from "@/components/ios/iOSStats1";
import iOSStats2 from "@/components/ios/iOSStats2";
import iOSNavbar1 from "@/components/ios/iOSNavbar1";
import iOSFAQ1 from "@/components/ios/iOSFAQ1";
import iOSSteps1 from "@/components/ios/iOSSteps1";
import iOSScreenshots1 from "@/components/ios/iOSScreenshots1";
import AndroidHero1 from "@/components/android/AndroidHero1";
import AndroidHero2 from "@/components/android/AndroidHero2";
import AndroidFeatures1 from "@/components/android/AndroidFeatures1";
import AndroidFeatures2 from "@/components/android/AndroidFeatures2";
import AndroidFeatures3 from "@/components/android/AndroidFeatures3";
import AndroidPricing1 from "@/components/android/AndroidPricing1";
import AndroidPricing2 from "@/components/android/AndroidPricing2";
import AndroidTestimonials1 from "@/components/android/AndroidTestimonials1";
import AndroidTestimonials2 from "@/components/android/AndroidTestimonials2";
import AndroidTestimonials3 from "@/components/android/AndroidTestimonials3";
import AndroidCTA1 from "@/components/android/AndroidCTA1";
import AndroidCTA2 from "@/components/android/AndroidCTA2";
import AndroidStats1 from "@/components/android/AndroidStats1";
import AndroidStats2 from "@/components/android/AndroidStats2";
import AndroidNavbar1 from "@/components/android/AndroidNavbar1";
import AndroidFAQ1 from "@/components/android/AndroidFAQ1";
import AndroidSteps1 from "@/components/android/AndroidSteps1";
import AndroidScreenshots1 from "@/components/android/AndroidScreenshots1";

// ─── Types ────────────────────────────────────────────────────────────────────
type Entry = { name: string; file: string; component: React.ComponentType };
type Platform = "web" | "ios" | "android";
type SectionLink = { nth: number; tag: string; text: string; href: string };
type TextOverride = { nth: number; text: string };
type CanvasSection = Entry & { uid: string; html?: string; sectionBg?: string; sectionGradient?: string; paddingY?: number; sectionLinks?: SectionLink[]; textOverrides?: TextOverride[] };
type PageMeta = { title?: string; description?: string; ogImage?: string };
type RouteType = "public" | "auth" | "redirect";
type Redirect = { from: string; to: string };
type Page = { id: string; name: string; sections: CanvasSection[]; meta?: PageMeta; routeType?: RouteType; redirectTo?: string };
type BlockShadow = { x: number; y: number; blur: number; spread: number; color: string; inset: boolean };
type BlockBorder = { width: number; color: string; style: "solid" | "dashed" | "dotted" };
type Block = {
  id: string; html: string; x: number; y: number;
  w?: number; h?: number; rotate?: number; flipH?: boolean; flipV?: boolean;
  zIndex?: number; locked?: boolean; hidden?: boolean; blockName?: string;
  blockBg?: string; blockRadius?: number; blockPadding?: number; blockOpacity?: number;
  shadow?: BlockShadow | null; border?: BlockBorder | null; blendMode?: string;
};
type CanvasMode = "desktop" | "tablet" | "mobile";
type ResizeHandle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";
type SnapGuide = { type: "v" | "h"; pos: number };

// ─── Pure helpers ─────────────────────────────────────────────────────────────
function shadowToCss(s: BlockShadow): string {
  return `${s.inset ? "inset " : ""}${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`;
}
function borderToCss(b: BlockBorder): string {
  return `${b.width}px ${b.style} ${b.color}`;
}
function blockTransformCss(b: Pick<Block, "rotate" | "flipH" | "flipV">): string | undefined {
  const p: string[] = [];
  if (b.flipH) p.push("scaleX(-1)");
  if (b.flipV) p.push("scaleY(-1)");
  if (b.rotate) p.push(`rotate(${b.rotate}deg)`);
  return p.length ? p.join(" ") : undefined;
}
function resizeHandleStyle(h: ResizeHandle): React.CSSProperties {
  const cx: React.CSSProperties = { left: "50%", transform: "translateX(-50%)" };
  const cy: React.CSSProperties = { top: "50%", transform: "translateY(-50%)" };
  if (h === "nw") return { top: -5, left: -5 };
  if (h === "n")  return { top: -5, ...cx };
  if (h === "ne") return { top: -5, right: -5 };
  if (h === "e")  return { right: -5, ...cy };
  if (h === "se") return { bottom: -5, right: -5 };
  if (h === "s")  return { bottom: -5, ...cx };
  if (h === "sw") return { bottom: -5, left: -5 };
  return { left: -5, ...cy };
}

// ─── BlankSection ─────────────────────────────────────────────────────────────
function BlankSection() {
  return (
    <div style={{ minHeight: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: 32 }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, border: "2px dashed #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#d1d5db", fontSize: 20 }}>+</div>
      <p style={{ color: "#d1d5db", fontSize: "0.75rem", textAlign: "center", userSelect: "none", margin: 0 }}>Blank section — click ✏️ Edit to add elements</p>
    </div>
  );
}

// ─── BlockDiv ─────────────────────────────────────────────────────────────────
const BlockDiv = React.memo(function BlockDiv({ blockId, initialHtml, onRef }: {
  blockId: string; initialHtml: string;
  onRef: (id: string, el: HTMLDivElement | null) => void;
}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (divRef.current) divRef.current.innerHTML = initialHtml;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      ref={el => { divRef.current = el; onRef(blockId, el); }}
      contentEditable suppressContentEditableWarning
      className="outline-none flex-1"
      style={{ cursor: "text", minHeight: 20 }}
    />
  );
});

// ─── Constants ────────────────────────────────────────────────────────────────
const SNAP = 20;
const SNAP_EL = 6;
const CANVAS_WIDTHS: Record<CanvasMode, number> = { desktop: 1280, tablet: 768, mobile: 390 };
const FIT_ZOOM: Record<CanvasMode, number> = { desktop: 75, tablet: 90, mobile: 100 };
const BLEND_MODES = ["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"];
const RESIZE_HANDLES: ResizeHandle[] = ["nw","n","ne","e","se","s","sw","w"];

const FONTS = [
  { label: "Default", value: "inherit" },
  { label: "Inter", value: "Inter, sans-serif" },
  { label: "Roboto", value: "Roboto, sans-serif" },
  { label: "Poppins", value: "Poppins, sans-serif" },
  { label: "Montserrat", value: "Montserrat, sans-serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
];

// ─── Component Library ────────────────────────────────────────────────────────
const LIBRARY: { section: string; platform?: Platform; items: Entry[] }[] = [
  { section: "Navbar", items: [
    { name: "Navbar 1 — Minimal", file: "navbars/Navbar1.tsx", component: Navbar1 },
    { name: "Navbar 2 — Classic CTA", file: "navbars/Navbar2.tsx", component: Navbar2 },
    { name: "Navbar 3 — Ghost button", file: "navbars/Navbar3.tsx", component: Navbar3 },
    { name: "Navbar 4 — Transparent", file: "navbars/Navbar4.tsx", component: Navbar4 },
    { name: "Navbar 5 — Dark", file: "navbars/Navbar5.tsx", component: Navbar5 },
  ]},
  { section: "Hero", items: [
    { name: "Hero 1 — Centered", file: "heroes/Hero1.tsx", component: Hero1 },
    { name: "Hero 2 — Split", file: "heroes/Hero2.tsx", component: Hero2 },
    { name: "Hero 3 — Dark blobs", file: "heroes/Hero3.tsx", component: Hero3 },
    { name: "Hero 4 — Typographic", file: "heroes/Hero4.tsx", component: Hero4 },
    { name: "Hero 5 — Split-screen", file: "heroes/Hero5.tsx", component: Hero5 },
  ]},
  { section: "Features", items: [
    { name: "Features 1 — Icon grid", file: "features/Features1.tsx", component: Features1 },
    { name: "Features 2 — Alternating", file: "features/Features2.tsx", component: Features2 },
    { name: "Features 3 — Numbered", file: "features/Features3.tsx", component: Features3 },
    { name: "Features 4 — Dark cards", file: "features/Features4.tsx", component: Features4 },
    { name: "Features 5 — Stats list", file: "features/Features5.tsx", component: Features5 },
  ]},
  { section: "Pricing", items: [
    { name: "Pricing 1 — 3 tiers", file: "pricing/Pricing1.tsx", component: Pricing1 },
    { name: "Pricing 2 — Toggle", file: "pricing/Pricing2.tsx", component: Pricing2 },
    { name: "Pricing 3 — 2 tiers", file: "pricing/Pricing3.tsx", component: Pricing3 },
    { name: "Pricing 4 — Comparison", file: "pricing/Pricing4.tsx", component: Pricing4 },
    { name: "Pricing 5 — Dark neon", file: "pricing/Pricing5.tsx", component: Pricing5 },
  ]},
  { section: "Testimonials", items: [
    { name: "Testimonials 1 — Grid", file: "testimonials/Testimonials1.tsx", component: Testimonials1 },
    { name: "Testimonials 2 — Quote", file: "testimonials/Testimonials2.tsx", component: Testimonials2 },
    { name: "Testimonials 3 — Masonry", file: "testimonials/Testimonials3.tsx", component: Testimonials3 },
    { name: "Testimonials 4 — Side photo", file: "testimonials/Testimonials4.tsx", component: Testimonials4 },
    { name: "Testimonials 5 — Stars", file: "testimonials/Testimonials5.tsx", component: Testimonials5 },
  ]},
  { section: "CTA", items: [
    { name: "CTA 1 — Banner", file: "cta/CTA1.tsx", component: CTA1 },
    { name: "CTA 2 — Split form", file: "cta/CTA2.tsx", component: CTA2 },
    { name: "CTA 3 — Gradient", file: "cta/CTA3.tsx", component: CTA3 },
    { name: "CTA 4 — Image bg", file: "cta/CTA4.tsx", component: CTA4 },
    { name: "CTA 5 — Minimal", file: "cta/CTA5.tsx", component: CTA5 },
  ]},
  { section: "Footer", items: [
    { name: "Footer 1 — 4-column", file: "footer/Footer1.tsx", component: Footer1 },
    { name: "Footer 2 — Centered", file: "footer/Footer2.tsx", component: Footer2 },
    { name: "Footer 3 — Newsletter", file: "footer/Footer3.tsx", component: Footer3 },
    { name: "Footer 4 — Single line", file: "footer/Footer4.tsx", component: Footer4 },
    { name: "Footer 5 — Rich dark", file: "footer/Footer5.tsx", component: Footer5 },
  ]},
  { section: "FAQ", items: [
    { name: "FAQ 1 — Accordion", file: "faq/FAQ1.tsx", component: FAQ1 },
    { name: "FAQ 2 — Two column", file: "faq/FAQ2.tsx", component: FAQ2 },
    { name: "FAQ 3 — Numbered", file: "faq/FAQ3.tsx", component: FAQ3 },
    { name: "FAQ 4 — Dark", file: "faq/FAQ4.tsx", component: FAQ4 },
    { name: "FAQ 5 — Tabbed", file: "faq/FAQ5.tsx", component: FAQ5 },
  ]},
  { section: "Team", items: [
    { name: "Team 1 — Avatar grid", file: "team/Team1.tsx", component: Team1 },
    { name: "Team 2 — Leadership", file: "team/Team2.tsx", component: Team2 },
    { name: "Team 3 — List", file: "team/Team3.tsx", component: Team3 },
    { name: "Team 4 — Dark hover", file: "team/Team4.tsx", component: Team4 },
    { name: "Team 5 — CEO + grid", file: "team/Team5.tsx", component: Team5 },
  ]},
  { section: "Contact", items: [
    { name: "Contact 1 — Split", file: "contact/Contact1.tsx", component: Contact1 },
    { name: "Contact 2 — Card", file: "contact/Contact2.tsx", component: Contact2 },
    { name: "Contact 3 — Dark", file: "contact/Contact3.tsx", component: Contact3 },
    { name: "Contact 4 — Map", file: "contact/Contact4.tsx", component: Contact4 },
    { name: "Contact 5 — Steps", file: "contact/Contact5.tsx", component: Contact5 },
  ]},
  { section: "Gallery", items: [
    { name: "Gallery 1 — Grid", file: "gallery/Gallery1.tsx", component: Gallery1 },
    { name: "Gallery 2 — Masonry", file: "gallery/Gallery2.tsx", component: Gallery2 },
    { name: "Gallery 3 — Featured", file: "gallery/Gallery3.tsx", component: Gallery3 },
    { name: "Gallery 4 — Cards", file: "gallery/Gallery4.tsx", component: Gallery4 },
    { name: "Gallery 5 — Scroll", file: "gallery/Gallery5.tsx", component: Gallery5 },
  ]},
  { section: "Blog", items: [
    { name: "Blog 1 — Card grid", file: "blog/Blog1.tsx", component: Blog1 },
    { name: "Blog 2 — Featured", file: "blog/Blog2.tsx", component: Blog2 },
    { name: "Blog 3 — List", file: "blog/Blog3.tsx", component: Blog3 },
    { name: "Blog 4 — Dark", file: "blog/Blog4.tsx", component: Blog4 },
    { name: "Blog 5 — Load more", file: "blog/Blog5.tsx", component: Blog5 },
  ]},
  { section: "Stats", items: [
    { name: "Stats 1 — Big numbers", file: "stats/Stats1.tsx", component: Stats1 },
    { name: "Stats 2 — Dark strip", file: "stats/Stats2.tsx", component: Stats2 },
    { name: "Stats 3 — Icons", file: "stats/Stats3.tsx", component: Stats3 },
    { name: "Stats 4 — Gradient", file: "stats/Stats4.tsx", component: Stats4 },
    { name: "Stats 5 — Split", file: "stats/Stats5.tsx", component: Stats5 },
  ]},
  { section: "Services", items: [
    { name: "Services 1 — Cards", file: "services/Services1.tsx", component: Services1 },
    { name: "Services 2 — Alternating", file: "services/Services2.tsx", component: Services2 },
    { name: "Services 3 — Numbered", file: "services/Services3.tsx", component: Services3 },
    { name: "Services 4 — Dark", file: "services/Services4.tsx", component: Services4 },
    { name: "Services 5 — Tabbed", file: "services/Services5.tsx", component: Services5 },
  ]},
  { section: "Banner", items: [
    { name: "Banner 1 — Top bar", file: "banner/Banner1.tsx", component: Banner1 },
    { name: "Banner 2 — Cookie", file: "banner/Banner2.tsx", component: Banner2 },
    { name: "Banner 3 — Section", file: "banner/Banner3.tsx", component: Banner3 },
    { name: "Banner 4 — Slide-in", file: "banner/Banner4.tsx", component: Banner4 },
    { name: "Banner 5 — Sale strip", file: "banner/Banner5.tsx", component: Banner5 },
  ]},
  { section: "Auth", items: [
    { name: "Auth 1 — Login card", file: "auth/Auth1.tsx", component: Auth1 },
    { name: "Auth 2 — Split screen", file: "auth/Auth2.tsx", component: Auth2 },
    { name: "Auth 3 — Register form", file: "auth/Auth3.tsx", component: Auth3 },
    { name: "Auth 4 — Dark form", file: "auth/Auth4.tsx", component: Auth4 },
    { name: "Auth 5 — OTP code", file: "auth/Auth5.tsx", component: Auth5 },
  ]},
  { section: "Steps", items: [
    { name: "Steps 1 — Numbered", file: "steps/Steps1.tsx", component: Steps1 },
    { name: "Steps 2 — Horizontal", file: "steps/Steps2.tsx", component: Steps2 },
    { name: "Steps 3 — Icon cards", file: "steps/Steps3.tsx", component: Steps3 },
    { name: "Steps 4 — Timeline", file: "steps/Steps4.tsx", component: Steps4 },
    { name: "Steps 5 — Dark", file: "steps/Steps5.tsx", component: Steps5 },
  ]},
  { section: "Newsletter", items: [
    { name: "Newsletter 1 — Centered", file: "newsletter/Newsletter1.tsx", component: Newsletter1 },
    { name: "Newsletter 2 — Split", file: "newsletter/Newsletter2.tsx", component: Newsletter2 },
    { name: "Newsletter 3 — Minimal", file: "newsletter/Newsletter3.tsx", component: Newsletter3 },
    { name: "Newsletter 4 — With image", file: "newsletter/Newsletter4.tsx", component: Newsletter4 },
    { name: "Newsletter 5 — Dark", file: "newsletter/Newsletter5.tsx", component: Newsletter5 },
  ]},
  { section: "App Download", items: [
    { name: "App Download 1 — Centered", file: "appdownload/AppDownload1.tsx", component: AppDownload1 },
    { name: "App Download 2 — Split", file: "appdownload/AppDownload2.tsx", component: AppDownload2 },
    { name: "App Download 3 — Dark", file: "appdownload/AppDownload3.tsx", component: AppDownload3 },
    { name: "App Download 4 — Badges", file: "appdownload/AppDownload4.tsx", component: AppDownload4 },
    { name: "App Download 5 — Mockup", file: "appdownload/AppDownload5.tsx", component: AppDownload5 },
  ]},
  { section: "Integrations", items: [
    { name: "Integrations 1 — Logo grid", file: "integrations/Integrations1.tsx", component: Integrations1 },
    { name: "Integrations 2 — Cards", file: "integrations/Integrations2.tsx", component: Integrations2 },
    { name: "Integrations 3 — List", file: "integrations/Integrations3.tsx", component: Integrations3 },
    { name: "Integrations 4 — Dark", file: "integrations/Integrations4.tsx", component: Integrations4 },
    { name: "Integrations 5 — Hub", file: "integrations/Integrations5.tsx", component: Integrations5 },
  ]},
  { section: "Error", items: [
    { name: "Error 1 — 404", file: "error/Error1.tsx", component: Error1 },
    { name: "Error 2 — 500", file: "error/Error2.tsx", component: Error2 },
    { name: "Error 3 — Dark", file: "error/Error3.tsx", component: Error3 },
    { name: "Error 4 — Minimal", file: "error/Error4.tsx", component: Error4 },
    { name: "Error 5 — Illustrated", file: "error/Error5.tsx", component: Error5 },
  ]},
  { section: "Comparison", items: [
    { name: "Comparison 1 — Table", file: "comparison/Comparison1.tsx", component: Comparison1 },
    { name: "Comparison 2 — Cards", file: "comparison/Comparison2.tsx", component: Comparison2 },
    { name: "Comparison 3 — Toggle", file: "comparison/Comparison3.tsx", component: Comparison3 },
    { name: "Comparison 4 — Dark", file: "comparison/Comparison4.tsx", component: Comparison4 },
    { name: "Comparison 5 — VS", file: "comparison/Comparison5.tsx", component: Comparison5 },
  ]},
  { section: "Timeline", items: [
    { name: "Timeline 1 — Vertical", file: "timeline/Timeline1.tsx", component: Timeline1 },
    { name: "Timeline 2 — Horizontal", file: "timeline/Timeline2.tsx", component: Timeline2 },
    { name: "Timeline 3 — Numbered", file: "timeline/Timeline3.tsx", component: Timeline3 },
    { name: "Timeline 4 — Dark", file: "timeline/Timeline4.tsx", component: Timeline4 },
    { name: "Timeline 5 — Minimal", file: "timeline/Timeline5.tsx", component: Timeline5 },
  ]},
  { section: "Social Proof", items: [
    { name: "Social Proof 1 — Logos", file: "socialproof/SocialProof1.tsx", component: SocialProof1 },
    { name: "Social Proof 2 — Stats", file: "socialproof/SocialProof2.tsx", component: SocialProof2 },
    { name: "Social Proof 3 — Quote strip", file: "socialproof/SocialProof3.tsx", component: SocialProof3 },
    { name: "Social Proof 4 — Dark", file: "socialproof/SocialProof4.tsx", component: SocialProof4 },
    { name: "Social Proof 5 — Badges", file: "socialproof/SocialProof5.tsx", component: SocialProof5 },
  ]},
  { section: "Video", items: [
    { name: "Video 1 — Centered", file: "video/Video1.tsx", component: Video1 },
    { name: "Video 2 — Split", file: "video/Video2.tsx", component: Video2 },
    { name: "Video 3 — Background", file: "video/Video3.tsx", component: Video3 },
    { name: "Video 4 — Gallery", file: "video/Video4.tsx", component: Video4 },
    { name: "Video 5 — Dark", file: "video/Video5.tsx", component: Video5 },
  ]},
  { section: "Careers", items: [
    { name: "Careers 1 — Job list", file: "careers/Careers1.tsx", component: Careers1 },
    { name: "Careers 2 — Cards", file: "careers/Careers2.tsx", component: Careers2 },
    { name: "Careers 3 — With filter", file: "careers/Careers3.tsx", component: Careers3 },
    { name: "Careers 4 — Dark", file: "careers/Careers4.tsx", component: Careers4 },
    { name: "Careers 5 — Culture", file: "careers/Careers5.tsx", component: Careers5 },
  ]},
  { section: "Coming Soon", items: [
    { name: "Coming Soon 1 — Countdown", file: "comingsoon/ComingSoon1.tsx", component: ComingSoon1 },
    { name: "Coming Soon 2 — Email capture", file: "comingsoon/ComingSoon2.tsx", component: ComingSoon2 },
    { name: "Coming Soon 3 — Dark", file: "comingsoon/ComingSoon3.tsx", component: ComingSoon3 },
    { name: "Coming Soon 4 — Minimal", file: "comingsoon/ComingSoon4.tsx", component: ComingSoon4 },
    { name: "Coming Soon 5 — Illustrated", file: "comingsoon/ComingSoon5.tsx", component: ComingSoon5 },
  ]},
  { section: "Product", items: [
    { name: "Product 1 — Highlight", file: "product/Product1.tsx", component: Product1 },
    { name: "Product 2 — Gallery", file: "product/Product2.tsx", component: Product2 },
    { name: "Product 3 — Specs", file: "product/Product3.tsx", component: Product3 },
    { name: "Product 4 — Dark showcase", file: "product/Product4.tsx", component: Product4 },
    { name: "Product 5 — Comparison", file: "product/Product5.tsx", component: Product5 },
  ]},
  { section: "Data Table", items: [
    { name: "Data Table 1 — Basic", file: "datatable/DataTable1.tsx", component: DataTable1 },
    { name: "Data Table 2 — Sortable", file: "datatable/DataTable2.tsx", component: DataTable2 },
    { name: "Data Table 3 — With actions", file: "datatable/DataTable3.tsx", component: DataTable3 },
    { name: "Data Table 4 — Dark", file: "datatable/DataTable4.tsx", component: DataTable4 },
    { name: "Data Table 5 — Dashboard", file: "datatable/DataTable5.tsx", component: DataTable5 },
  ]},
  { section: "Profile", items: [
    { name: "Profile 1 — Card", file: "profile/Profile1.tsx", component: Profile1 },
    { name: "Profile 2 — Cover photo", file: "profile/Profile2.tsx", component: Profile2 },
    { name: "Profile 3 — Dark sidebar", file: "profile/Profile3.tsx", component: Profile3 },
    { name: "Profile 4 — Two panel", file: "profile/Profile4.tsx", component: Profile4 },
    { name: "Profile 5 — Team list", file: "profile/Profile5.tsx", component: Profile5 },
  ]},
  { section: "iOS Navbar", platform: "ios", items: [
    { name: "iOS Navbar 1 — Frosted glass", file: "ios/iOSNavbar1.tsx", component: iOSNavbar1 },
  ]},
  { section: "iOS Hero", platform: "ios", items: [
    { name: "iOS Hero 1 — App Store", file: "ios/iOSHero1.tsx", component: iOSHero1 },
    { name: "iOS Hero 2 — Dark minimal", file: "ios/iOSHero2.tsx", component: iOSHero2 },
  ]},
  { section: "iOS Screenshots", platform: "ios", items: [
    { name: "iOS Screenshots 1 — 3-up preview", file: "ios/iOSScreenshots1.tsx", component: iOSScreenshots1 },
  ]},
  { section: "iOS Features", platform: "ios", items: [
    { name: "iOS Features 1 — Icon grid", file: "ios/iOSFeatures1.tsx", component: iOSFeatures1 },
    { name: "iOS Features 2 — Dark 3-col", file: "ios/iOSFeatures2.tsx", component: iOSFeatures2 },
    { name: "iOS Features 3 — Interactive tabs", file: "ios/iOSFeatures3.tsx", component: iOSFeatures3 },
  ]},
  { section: "iOS Pricing", platform: "ios", items: [
    { name: "iOS Pricing 1 — Free & Pro", file: "ios/iOSPricing1.tsx", component: iOSPricing1 },
    { name: "iOS Pricing 2 — All-in-one annual", file: "ios/iOSPricing2.tsx", component: iOSPricing2 },
  ]},
  { section: "iOS Testimonials", platform: "ios", items: [
    { name: "iOS Testimonials 1 — App Store reviews", file: "ios/iOSTestimonials1.tsx", component: iOSTestimonials1 },
    { name: "iOS Testimonials 2 — Tweet cards", file: "ios/iOSTestimonials2.tsx", component: iOSTestimonials2 },
    { name: "iOS Testimonials 3 — Carousel", file: "ios/iOSTestimonials3.tsx", component: iOSTestimonials3 },
  ]},
  { section: "iOS Steps", platform: "ios", items: [
    { name: "iOS Steps 1 — Onboarding timeline", file: "ios/iOSSteps1.tsx", component: iOSSteps1 },
  ]},
  { section: "iOS Stats", platform: "ios", items: [
    { name: "iOS Stats 1 — 2×2 grid", file: "ios/iOSStats1.tsx", component: iOSStats1 },
    { name: "iOS Stats 2 — Progress bars", file: "ios/iOSStats2.tsx", component: iOSStats2 },
  ]},
  { section: "iOS FAQ", platform: "ios", items: [
    { name: "iOS FAQ 1 — Accordion", file: "ios/iOSFAQ1.tsx", component: iOSFAQ1 },
  ]},
  { section: "iOS CTA", platform: "ios", items: [
    { name: "iOS CTA 1 — Gradient card", file: "ios/iOSCTA1.tsx", component: iOSCTA1 },
    { name: "iOS CTA 2 — App Store badge", file: "ios/iOSCTA2.tsx", component: iOSCTA2 },
  ]},
  { section: "Android Navbar", platform: "android", items: [
    { name: "Android Navbar 1 — Material You", file: "android/AndroidNavbar1.tsx", component: AndroidNavbar1 },
  ]},
  { section: "Android Hero", platform: "android", items: [
    { name: "Android Hero 1 — Material You", file: "android/AndroidHero1.tsx", component: AndroidHero1 },
    { name: "Android Hero 2 — Dark minimal", file: "android/AndroidHero2.tsx", component: AndroidHero2 },
  ]},
  { section: "Android Screenshots", platform: "android", items: [
    { name: "Android Screenshots 1 — 3-up preview", file: "android/AndroidScreenshots1.tsx", component: AndroidScreenshots1 },
  ]},
  { section: "Android Features", platform: "android", items: [
    { name: "Android Features 1 — Icon grid", file: "android/AndroidFeatures1.tsx", component: AndroidFeatures1 },
    { name: "Android Features 2 — Dark 3-col", file: "android/AndroidFeatures2.tsx", component: AndroidFeatures2 },
    { name: "Android Features 3 — Interactive tabs", file: "android/AndroidFeatures3.tsx", component: AndroidFeatures3 },
  ]},
  { section: "Android Pricing", platform: "android", items: [
    { name: "Android Pricing 1 — Free & Pro", file: "android/AndroidPricing1.tsx", component: AndroidPricing1 },
    { name: "Android Pricing 2 — All-in-one annual", file: "android/AndroidPricing2.tsx", component: AndroidPricing2 },
  ]},
  { section: "Android Testimonials", platform: "android", items: [
    { name: "Android Testimonials 1 — Play reviews", file: "android/AndroidTestimonials1.tsx", component: AndroidTestimonials1 },
    { name: "Android Testimonials 2 — Tweet cards", file: "android/AndroidTestimonials2.tsx", component: AndroidTestimonials2 },
    { name: "Android Testimonials 3 — Carousel", file: "android/AndroidTestimonials3.tsx", component: AndroidTestimonials3 },
  ]},
  { section: "Android Steps", platform: "android", items: [
    { name: "Android Steps 1 — Onboarding timeline", file: "android/AndroidSteps1.tsx", component: AndroidSteps1 },
  ]},
  { section: "Android Stats", platform: "android", items: [
    { name: "Android Stats 1 — 2×2 grid", file: "android/AndroidStats1.tsx", component: AndroidStats1 },
    { name: "Android Stats 2 — Progress bars", file: "android/AndroidStats2.tsx", component: AndroidStats2 },
  ]},
  { section: "Android FAQ", platform: "android", items: [
    { name: "Android FAQ 1 — Accordion", file: "android/AndroidFAQ1.tsx", component: AndroidFAQ1 },
  ]},
  { section: "Android CTA", platform: "android", items: [
    { name: "Android CTA 1 — Gradient card", file: "android/AndroidCTA1.tsx", component: AndroidCTA1 },
    { name: "Android CTA 2 — Play badge", file: "android/AndroidCTA2.tsx", component: AndroidCTA2 },
  ]},
];

// ─── Elements ─────────────────────────────────────────────────────────────────
const S = (obj: Record<string, string>) => Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(";");
const ELEMENTS: { category: string; items: { label: string; icon: string; html: string }[] }[] = [
  { category: "Text", items: [
    { label: "Heading 1", icon: "H1", html: `<h1 style="${S({"font-size":"2.5rem","font-weight":"800","color":"#111827","margin":"16px 0","line-height":"1.2"})}">Heading 1</h1>` },
    { label: "Heading 2", icon: "H2", html: `<h2 style="${S({"font-size":"1.875rem","font-weight":"700","color":"#111827","margin":"14px 0","line-height":"1.3"})}">Heading 2</h2>` },
    { label: "Heading 3", icon: "H3", html: `<h3 style="${S({"font-size":"1.25rem","font-weight":"600","color":"#1f2937","margin":"12px 0"})}">Heading 3</h3>` },
    { label: "Heading 4", icon: "H4", html: `<h4 style="${S({"font-size":"1rem","font-weight":"600","color":"#374151","margin":"10px 0"})}">Heading 4</h4>` },
    { label: "Paragraph", icon: "¶",  html: `<p style="${S({"color":"#4b5563","line-height":"1.75","margin":"12px 0"})}">Your text goes here. Click to edit.</p>` },
    { label: "Small text", icon: "Aa", html: `<p style="${S({"font-size":"0.875rem","color":"#9ca3af","margin":"4px 0"})}">Small text</p>` },
    { label: "Caption", icon: "cc", html: `<p style="${S({"font-size":"0.75rem","color":"#6b7280","margin":"4px 0","letter-spacing":"0.05em","text-transform":"uppercase","font-weight":"600"})}">CAPTION TEXT</p>` },
    { label: "Quote", icon: "❝", html: `<blockquote style="${S({"border-left":"4px solid #818cf8","padding-left":"16px","font-style":"italic","color":"#4b5563","margin":"16px 0"})}">"Your quote here."</blockquote>` },
    { label: "Code", icon: "</>", html: `<code style="${S({"display":"block","background":"#1e1e2e","color":"#a5f3fc","font-family":"monospace","font-size":"0.875rem","padding":"16px 20px","border-radius":"12px","margin":"16px 0","white-space":"pre"})}">const hello = "world";</code>` },
    { label: "Bullet list", icon: "•", html: `<ul style="${S({"color":"#4b5563","line-height":"2","margin":"12px 0","padding-left":"24px"})}"><li>First item</li><li>Second item</li><li>Third item</li></ul>` },
    { label: "Numbered list", icon: "1.", html: `<ol style="${S({"color":"#4b5563","line-height":"2","margin":"12px 0","padding-left":"24px"})}"><li>First item</li><li>Second item</li><li>Third item</li></ol>` },
    { label: "Gradient text", icon: "G", html: `<h2 style="${S({"font-size":"2rem","font-weight":"800","background":"linear-gradient(135deg,#6366f1,#ec4899)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent","backgroundClip":"text","margin":"16px 0","line-height":"1.2"})}">Gradient Heading</h2>` },
    { label: "Highlighted", icon: "Hl", html: `<p style="${S({"color":"#1f2937","line-height":"1.75","margin":"12px 0"})}">Text with a <mark style="background:#fef08a;padding:0 4px;border-radius:4px;">highlighted</mark> word inside.</p>` },
    { label: "Label", icon: "lb", html: `<label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin":"0 0 4px"})}">Field label</label>` },
  ]},
  { category: "Buttons", items: [
    { label: "Primary", icon: "●", html: `<button style="${S({"display":"inline-block","background":"#4f46e5","color":"#fff","font-weight":"600","padding":"12px 24px","border-radius":"12px","border":"none","cursor":"pointer","margin":"8px 0"})}">Get started</button>` },
    { label: "Secondary", icon: "○", html: `<button style="${S({"display":"inline-block","background":"#f3f4f6","color":"#111827","font-weight":"600","padding":"12px 24px","border-radius":"12px","border":"none","cursor":"pointer","margin":"8px 0"})}">Learn more</button>` },
    { label: "Outline", icon: "◯", html: `<button style="${S({"display":"inline-block","background":"transparent","color":"#4f46e5","font-weight":"600","padding":"12px 24px","border-radius":"12px","border":"2px solid #4f46e5","cursor":"pointer","margin":"8px 0"})}">Learn more</button>` },
    { label: "Ghost", icon: "◻", html: `<button style="${S({"display":"inline-block","background":"transparent","color":"#6b7280","font-weight":"600","padding":"12px 24px","border-radius":"12px","border":"none","cursor":"pointer","margin":"8px 0"})}">Cancel</button>` },
    { label: "Destructive", icon: "✕", html: `<button style="${S({"display":"inline-block","background":"#ef4444","color":"#fff","font-weight":"600","padding":"12px 24px","border-radius":"12px","border":"none","cursor":"pointer","margin":"8px 0"})}">Delete</button>` },
    { label: "Pill", icon: "⬭", html: `<button style="${S({"display":"inline-block","background":"#4f46e5","color":"#fff","font-weight":"600","padding":"10px 28px","border-radius":"9999px","border":"none","cursor":"pointer","margin":"8px 0"})}">Get started</button>` },
    { label: "Dark", icon: "◼", html: `<button style="${S({"display":"inline-block","background":"#111827","color":"#fff","font-weight":"600","padding":"12px 24px","border-radius":"12px","border":"none","cursor":"pointer","margin":"8px 0"})}">Get started</button>` },
    { label: "Gradient", icon: "◈", html: `<button style="${S({"display":"inline-block","background":"linear-gradient(135deg,#6366f1,#8b5cf6)","color":"#fff","font-weight":"600","padding":"12px 28px","border-radius":"12px","border":"none","cursor":"pointer","margin":"8px 0","box-shadow":"0 4px 15px rgba(99,102,241,0.4)"})}">Get started</button>` },
    { label: "Link →", icon: "→", html: `<a href="#" style="${S({"color":"#4f46e5","font-weight":"600","text-decoration":"none","display":"inline-flex","align-items":"center","gap":"6px","margin":"8px 0"})}">Learn more →</a>` },
    { label: "Button group", icon: "⬚⬚", html: `<div style="${S({"display":"inline-flex","border":"1px solid #e5e7eb","border-radius":"12px","overflow":"hidden","margin":"8px 0"})}"><button style="${S({"background":"#4f46e5","color":"#fff","font-weight":"600","padding":"10px 20px","border":"none","cursor":"pointer"})}">Save</button><button style="${S({"background":"#f9fafb","color":"#374151","font-weight":"600","padding":"10px 20px","border-left":"1px solid #e5e7eb","border-top":"none","border-right":"none","border-bottom":"none","cursor":"pointer"})}">Cancel</button></div>` },
    { label: "Social CTA", icon: "★", html: `<div style="${S({"display":"flex","gap":"12px","flex-wrap":"wrap","margin":"8px 0"})}"><button style="${S({"background":"#1da1f2","color":"#fff","font-weight":"600","padding":"10px 20px","border-radius":"10px","border":"none","cursor":"pointer"})}">Twitter</button><button style="${S({"background":"#0a66c2","color":"#fff","font-weight":"600","padding":"10px 20px","border-radius":"10px","border":"none","cursor":"pointer"})}">LinkedIn</button><button style="${S({"background":"#25d366","color":"#fff","font-weight":"600","padding":"10px 20px","border-radius":"10px","border":"none","cursor":"pointer"})}">WhatsApp</button></div>` },
  ]},
  { category: "Layout", items: [
    { label: "2 Columns", icon: "▌▌", html: `<div style="${S({"display":"grid","grid-template-columns":"1fr 1fr","gap":"24px","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"24px","min-height":"80px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Column 1</div><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"24px","min-height":"80px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Column 2</div></div>` },
    { label: "3 Columns", icon: "▌▌▌", html: `<div style="${S({"display":"grid","grid-template-columns":"1fr 1fr 1fr","gap":"20px","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"20px","min-height":"80px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Col 1</div><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"20px","min-height":"80px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Col 2</div><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"20px","min-height":"80px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Col 3</div></div>` },
    { label: "4 Columns", icon: "||||", html: `<div style="${S({"display":"grid","grid-template-columns":"1fr 1fr 1fr 1fr","gap":"16px","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","min-height":"64px","color":"#9ca3af","font-size":"0.75rem","display":"flex","align-items":"center","justify-content":"center"})}">1</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","min-height":"64px","color":"#9ca3af","font-size":"0.75rem","display":"flex","align-items":"center","justify-content":"center"})}">2</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","min-height":"64px","color":"#9ca3af","font-size":"0.75rem","display":"flex","align-items":"center","justify-content":"center"})}">3</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","min-height":"64px","color":"#9ca3af","font-size":"0.75rem","display":"flex","align-items":"center","justify-content":"center"})}">4</div></div>` },
    { label: "2/3 + 1/3", icon: "▌▌▌", html: `<div style="${S({"display":"grid","grid-template-columns":"2fr 1fr","gap":"24px","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"24px","min-height":"100px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Main content</div><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"24px","min-height":"100px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Sidebar</div></div>` },
    { label: "Sidebar left", icon: "▌│", html: `<div style="${S({"display":"grid","grid-template-columns":"200px 1fr","gap":"24px","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"20px","min-height":"200px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Sidebar</div><div style="${S({"background":"#f9fafb","border-radius":"12px","padding":"20px","color":"#9ca3af","font-size":"0.875rem","display":"flex","align-items":"center","justify-content":"center"})}">Main content</div></div>` },
    { label: "Card", icon: "▭", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","padding":"24px","box-shadow":"0 1px 3px rgba(0,0,0,0.08)","margin":"16px 0"})}"><h3 style="${S({"font-weight":"600","color":"#111827","margin":"0 0 8px"})}">Card Title</h3><p style="${S({"color":"#6b7280","font-size":"0.875rem","margin":"0"})}">Card content goes here.</p></div>` },
    { label: "Dark card", icon: "▬", html: `<div style="${S({"background":"#1e1e2e","border":"1px solid #374151","border-radius":"16px","padding":"24px","margin":"16px 0"})}"><h3 style="${S({"font-weight":"600","color":"#f9fafb","margin":"0 0 8px"})}">Card Title</h3><p style="${S({"color":"#9ca3af","font-size":"0.875rem","margin":"0"})}">Card content goes here.</p></div>` },
    { label: "Centered box", icon: "⬜", html: `<div style="${S({"max-width":"640px","margin":"32px auto","background":"#fff","border":"1px solid #e5e7eb","border-radius":"20px","padding":"40px","text-align":"center","box-shadow":"0 4px 20px rgba(0,0,0,0.06)"})}"><h2 style="${S({"font-weight":"700","color":"#111827","margin":"0 0 12px"})}">Centered content</h2><p style="${S({"color":"#6b7280","margin":"0"})}">Supporting text goes here.</p></div>` },
    { label: "Stack", icon: "☰", html: `<div style="${S({"display":"flex","flex-direction":"column","gap":"12px","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","color":"#6b7280","font-size":"0.875rem"})}">Row 1</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","color":"#6b7280","font-size":"0.875rem"})}">Row 2</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px","color":"#6b7280","font-size":"0.875rem"})}">Row 3</div></div>` },
    { label: "Flex row", icon: "⬚⬚⬚", html: `<div style="${S({"display":"flex","gap":"16px","flex-wrap":"wrap","align-items":"center","margin":"16px 0"})}"><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px 24px","color":"#6b7280","font-size":"0.875rem"})}">Item 1</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px 24px","color":"#6b7280","font-size":"0.875rem"})}">Item 2</div><div style="${S({"background":"#f9fafb","border-radius":"10px","padding":"16px 24px","color":"#6b7280","font-size":"0.875rem"})}">Item 3</div></div>` },
    { label: "Section wrapper", icon: "⬛", html: `<div style="${S({"background":"#f9fafb","border-radius":"20px","padding":"48px 40px","margin":"16px 0","text-align":"center"})}"><h2 style="${S({"font-weight":"700","color":"#111827","margin":"0 0 12px"})}">Section Title</h2><p style="${S({"color":"#6b7280","max-width":"480px","margin":"0 auto"})}">Describe what this section is about.</p></div>` },
  ]},
  { category: "Cards", items: [
    { label: "Feature card", icon: "★", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","padding":"24px","margin":"8px 0"})}"><div style="${S({"width":"44px","height":"44px","background":"#eef2ff","border-radius":"12px","display":"flex","align-items":"center","justify-content":"center","font-size":"1.25rem","margin-bottom":"16px"})}">⚡</div><h3 style="${S({"font-weight":"600","color":"#111827","margin":"0 0 8px"})}">Feature Title</h3><p style="${S({"color":"#6b7280","font-size":"0.875rem","line-height":"1.6","margin":"0"})}">Short description of this feature.</p></div>` },
    { label: "Pricing card", icon: "$", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"20px","padding":"32px","margin":"8px 0","text-align":"center"})}"><p style="${S({"font-size":"0.875rem","font-weight":"600","color":"#6b7280","margin":"0 0 8px","text-transform":"uppercase","letter-spacing":"0.05em"})}">Pro</p><p style="${S({"font-size":"2.5rem","font-weight":"800","color":"#111827","margin":"0 0 4px"})}">$49<span style="${S({"font-size":"1rem","font-weight":"400","color":"#9ca3af"})}">/mo</span></p><p style="${S({"color":"#6b7280","font-size":"0.875rem","margin":"0 0 24px"})}">Everything you need to grow.</p><ul style="${S({"text-align":"left","color":"#374151","font-size":"0.875rem","line-height":"2","padding-left":"20px","margin":"0 0 24px"})}"><li>Unlimited projects</li><li>Priority support</li><li>Advanced analytics</li></ul><button style="${S({"width":"100%","background":"#4f46e5","color":"#fff","font-weight":"600","padding":"12px","border-radius":"12px","border":"none","cursor":"pointer"})}">Get started</button></div>` },
    { label: "Testimonial", icon: "❝", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","padding":"24px","margin":"8px 0"})}"><p style="${S({"color":"#374151","font-size":"0.9375rem","line-height":"1.7","font-style":"italic","margin":"0 0 20px"})}">"This product changed the way we work. Incredibly well-designed and a joy to use."</p><div style="${S({"display":"flex","align-items":"center","gap":"12px"})}"><div style="${S({"width":"40px","height":"40px","background":"#818cf8","border-radius":"9999px","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-weight":"700","flex-shrink":"0"})}">JD</div><div><p style="${S({"font-weight":"600","color":"#111827","margin":"0","font-size":"0.875rem"})}">Jane Doe</p><p style="${S({"color":"#9ca3af","font-size":"0.75rem","margin":"0"})}">CEO, Acme Inc.</p></div></div></div>` },
    { label: "Team card", icon: "👤", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","padding":"24px","margin":"8px 0","text-align":"center"})}"><div style="${S({"width":"64px","height":"64px","background":"linear-gradient(135deg,#6366f1,#a5b4fc)","border-radius":"9999px","margin":"0 auto 12px","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-weight":"700","font-size":"1.25rem"})}">AM</div><h3 style="${S({"font-weight":"600","color":"#111827","margin":"0 0 4px"})}">Alex Morgan</h3><p style="${S({"color":"#6b7280","font-size":"0.875rem","margin":"0"})}">Head of Design</p></div>` },
    { label: "Stat card", icon: "📊", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","padding":"24px","margin":"8px 0"})}"><p style="${S({"font-size":"0.75rem","font-weight":"600","color":"#9ca3af","text-transform":"uppercase","letter-spacing":"0.05em","margin":"0 0 8px"})}">Total Revenue</p><p style="${S({"font-size":"2rem","font-weight":"800","color":"#111827","margin":"0 0 4px"})}">$128,400</p><p style="${S({"font-size":"0.875rem","color":"#10b981","font-weight":"500","margin":"0"})}">↑ 12.5% from last month</p></div>` },
    { label: "Blog card", icon: "📝", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","overflow":"hidden","margin":"8px 0"})}"><div style="${S({"background":"linear-gradient(135deg,#6366f1,#a5b4fc)","height":"140px","display":"flex","align-items":"center","justify-content":"center","color":"rgba(255,255,255,0.4)","font-size":"2rem"})}">📰</div><div style="${S({"padding":"20px"})}"><p style="${S({"font-size":"0.75rem","color":"#9ca3af","margin":"0 0 8px"})}">May 8, 2026 · 5 min read</p><h3 style="${S({"font-weight":"700","color":"#111827","margin":"0 0 8px","font-size":"1rem"})}">Article title goes here</h3><p style="${S({"color":"#6b7280","font-size":"0.875rem","margin":"0"})}">Short description of the article.</p></div></div>` },
    { label: "Product card", icon: "🛍", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"16px","overflow":"hidden","margin":"8px 0","width":"220px"})}"><div style="${S({"background":"#f3f4f6","height":"160px","display":"flex","align-items":"center","justify-content":"center","color":"#d1d5db","font-size":"2rem"})}">🖼</div><div style="${S({"padding":"16px"})}"><h3 style="${S({"font-weight":"600","color":"#111827","font-size":"0.9375rem","margin":"0 0 4px"})}">Product Name</h3><p style="${S({"color":"#9ca3af","font-size":"0.75rem","margin":"0 0 12px"})}">Short description</p><div style="${S({"display":"flex","align-items":"center","justify-content":"space-between"})}"><span style="${S({"font-weight":"700","color":"#111827"})}">$29.00</span><button style="${S({"background":"#4f46e5","color":"#fff","border":"none","border-radius":"8px","padding":"6px 14px","font-size":"0.75rem","font-weight":"600","cursor":"pointer"})}">Add</button></div></div></div>` },
    { label: "Notification", icon: "🔔", html: `<div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"14px","padding":"14px 16px","margin":"8px 0","display":"flex","align-items":"flex-start","gap":"12px","box-shadow":"0 4px 12px rgba(0,0,0,0.08)"})}"><div style="${S({"width":"36px","height":"36px","background":"#eef2ff","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","font-size":"1rem","flex-shrink":"0"})}">🔔</div><div style="${S({"flex":"1"})}"><p style="${S({"font-weight":"600","color":"#111827","font-size":"0.875rem","margin":"0 0 2px"})}">New message</p><p style="${S({"color":"#6b7280","font-size":"0.8125rem","margin":"0"})}">Alex sent you a message.</p></div><span style="${S({"font-size":"0.75rem","color":"#9ca3af","white-space":"nowrap"})}">2m ago</span></div>` },
    { label: "Comparison", icon: "⇄", html: `<div style="${S({"display":"grid","grid-template-columns":"1fr 1fr","gap":"16px","margin":"16px 0"})}"><div style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"14px","padding":"20px"})}"><p style="${S({"font-size":"0.75rem","font-weight":"600","color":"#9ca3af","text-transform":"uppercase","letter-spacing":"0.05em","margin":"0 0 12px"})}">Before</p><ul style="${S({"color":"#ef4444","font-size":"0.875rem","line-height":"2","padding-left":"20px","margin":"0"})}"><li>Slow processes</li><li>Manual work</li><li>High costs</li></ul></div><div style="${S({"background":"#eef2ff","border":"1px solid #c7d2fe","border-radius":"14px","padding":"20px"})}"><p style="${S({"font-size":"0.75rem","font-weight":"600","color":"#4f46e5","text-transform":"uppercase","letter-spacing":"0.05em","margin":"0 0 12px"})}">After</p><ul style="${S({"color":"#10b981","font-size":"0.875rem","line-height":"2","padding-left":"20px","margin":"0"})}"><li>Instant results</li><li>Automated</li><li>Cost-effective</li></ul></div></div>` },
  ]},
  { category: "Forms", items: [
    { label: "Text input", icon: "[]", html: `<div style="${S({"margin":"12px 0"})}"><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Your name</label><input type="text" placeholder="John Doe" style="${S({"display":"block","width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","color":"#111827","background":"#fff","box-sizing":"border-box","outline":"none"})}" /></div>` },
    { label: "Email input", icon: "@", html: `<div style="${S({"margin":"12px 0"})}"><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Email address</label><input type="email" placeholder="you@example.com" style="${S({"display":"block","width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","color":"#111827","background":"#fff","box-sizing":"border-box","outline":"none"})}" /></div>` },
    { label: "Password", icon: "••", html: `<div style="${S({"margin":"12px 0"})}"><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Password</label><input type="password" placeholder="••••••••" style="${S({"display":"block","width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","color":"#111827","background":"#fff","box-sizing":"border-box","outline":"none"})}" /></div>` },
    { label: "Textarea", icon: "≡", html: `<div style="${S({"margin":"12px 0"})}"><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Message</label><textarea placeholder="Write your message..." rows="4" style="${S({"display":"block","width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","color":"#111827","background":"#fff","box-sizing":"border-box","outline":"none","resize":"vertical","font-family":"inherit"})}" /></div>` },
    { label: "Select", icon: "▾", html: `<div style="${S({"margin":"12px 0"})}"><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Country</label><select style="${S({"display":"block","width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","color":"#111827","background":"#fff","box-sizing":"border-box","outline":"none","appearance":"auto"})}"><option>United States</option><option>United Kingdom</option><option>Australia</option></select></div>` },
    { label: "Checkbox", icon: "☑", html: `<label style="${S({"display":"flex","align-items":"center","gap":"10px","cursor":"pointer","margin":"8px 0","font-size":"0.9375rem","color":"#374151"})}"><input type="checkbox" style="${S({"width":"18px","height":"18px","accent-color":"#4f46e5","cursor":"pointer"})}" /> I agree to the terms and conditions</label>` },
    { label: "Radio group", icon: "◉", html: `<div style="${S({"margin":"12px 0"})}"><p style="${S({"font-size":"0.875rem","font-weight":"600","color":"#374151","margin":"0 0 10px"})}">Choose a plan</p><label style="${S({"display":"flex","align-items":"center","gap":"10px","cursor":"pointer","margin-bottom":"8px","font-size":"0.9375rem","color":"#374151"})}"><input type="radio" name="plan" style="${S({"accent-color":"#4f46e5"})}" /> Starter</label><label style="${S({"display":"flex","align-items":"center","gap":"10px","cursor":"pointer","margin-bottom":"8px","font-size":"0.9375rem","color":"#374151"})}"><input type="radio" name="plan" style="${S({"accent-color":"#4f46e5"})}" /> Pro</label><label style="${S({"display":"flex","align-items":"center","gap":"10px","cursor":"pointer","font-size":"0.9375rem","color":"#374151"})}"><input type="radio" name="plan" style="${S({"accent-color":"#4f46e5"})}" /> Enterprise</label></div>` },
    { label: "Toggle", icon: "⬭", html: `<label style="${S({"display":"flex","align-items":"center","gap":"12px","cursor":"pointer","margin":"8px 0"})}"><div style="${S({"position":"relative","width":"44px","height":"24px","background":"#4f46e5","border-radius":"9999px","flex-shrink":"0"})}"><div style="${S({"position":"absolute","right":"3px","top":"3px","width":"18px","height":"18px","background":"#fff","border-radius":"9999px","box-shadow":"0 1px 3px rgba(0,0,0,0.2)"})}"></div></div><span style="${S({"font-size":"0.9375rem","color":"#374151","font-weight":"500"})}">Enable notifications</span></label>` },
    { label: "Search", icon: "🔍", html: `<div style="${S({"position":"relative","margin":"12px 0"})}"><span style="${S({"position":"absolute","left":"12px","top":"50%","transform":"translateY(-50%)","color":"#9ca3af","font-size":"1rem"})}">🔍</span><input type="search" placeholder="Search..." style="${S({"display":"block","width":"100%","padding":"10px 14px 10px 40px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","color":"#111827","background":"#fff","box-sizing":"border-box","outline":"none"})}" /></div>` },
    { label: "Contact form", icon: "✉", html: `<form style="${S({"background":"#fff","border":"1px solid #e5e7eb","border-radius":"20px","padding":"32px","margin":"16px 0"})}"><h3 style="${S({"font-weight":"700","color":"#111827","margin":"0 0 20px","font-size":"1.25rem"})}">Get in touch</h3><div style="${S({"display":"grid","grid-template-columns":"1fr 1fr","gap":"16px","margin-bottom":"16px"})}"><div><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Name</label><input placeholder="Your name" style="${S({"width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","box-sizing":"border-box","outline":"none"})}" /></div><div><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Email</label><input type="email" placeholder="you@example.com" style="${S({"width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","box-sizing":"border-box","outline":"none"})}" /></div></div><div style="${S({"margin-bottom":"20px"})}"><label style="${S({"display":"block","font-size":"0.875rem","font-weight":"600","color":"#374151","margin-bottom":"6px"})}">Message</label><textarea placeholder="Your message..." rows="4" style="${S({"width":"100%","padding":"10px 14px","border":"1.5px solid #d1d5db","border-radius":"10px","font-size":"0.9375rem","box-sizing":"border-box","outline":"none","resize":"vertical","font-family":"inherit"})}" /></div><button style="${S({"width":"100%","background":"#4f46e5","color":"#fff","font-weight":"600","padding":"12px","border-radius":"12px","border":"none","cursor":"pointer","font-size":"1rem"})}">Send message</button></form>` },
    { label: "Newsletter signup", icon: "📩", html: `<div style="${S({"background":"linear-gradient(135deg,#eef2ff,#f5f3ff)","border":"1px solid #c7d2fe","border-radius":"20px","padding":"32px","margin":"16px 0","text-align":"center"})}"><h3 style="${S({"font-weight":"700","color":"#111827","margin":"0 0 8px"})}">Stay in the loop</h3><p style="${S({"color":"#6b7280","font-size":"0.9375rem","margin":"0 0 20px"})}">Get the latest updates delivered to your inbox.</p><div style="${S({"display":"flex","gap":"8px","max-width":"400px","margin":"0 auto"})}"><input type="email" placeholder="your@email.com" style="${S({"flex":"1","padding":"10px 14px","border":"1.5px solid #c7d2fe","border-radius":"10px","font-size":"0.9375rem","background":"#fff","outline":"none","box-sizing":"border-box"})}" /><button style="${S({"background":"#4f46e5","color":"#fff","font-weight":"600","padding":"10px 20px","border-radius":"10px","border":"none","cursor":"pointer","white-space":"nowrap"})}">Subscribe</button></div></div>` },
  ]},
  { category: "Media", items: [
    { label: "Image block", icon: "🖼", html: `<div style="${S({"background":"#f3f4f6","border-radius":"12px","width":"100%","height":"240px","display":"flex","align-items":"center","justify-content":"center","color":"#9ca3af","font-size":"0.875rem","margin":"16px 0","border":"2px dashed #d1d5db"})}">Click 📷 Image in toolbar to add photo</div>` },
    { label: "Image + caption", icon: "🖼+", html: `<figure style="${S({"margin":"16px 0"})}"><div style="${S({"background":"#f3f4f6","border-radius":"12px","width":"100%","height":"220px","display":"flex","align-items":"center","justify-content":"center","color":"#9ca3af","font-size":"0.875rem","border":"2px dashed #d1d5db"})}">Add image from toolbar</div><figcaption style="${S({"text-align":"center","color":"#9ca3af","font-size":"0.8125rem","margin-top":"8px"})}">Image caption here</figcaption></figure>` },
    { label: "Avatar", icon: "👤", html: `<div style="${S({"display":"flex","align-items":"center","gap":"12px","margin":"8px 0"})}"><div style="${S({"width":"48px","height":"48px","background":"linear-gradient(135deg,#6366f1,#a5b4fc)","border-radius":"9999px","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-weight":"700","font-size":"1rem","flex-shrink":"0"})}">AM</div><div><p style="${S({"font-weight":"600","color":"#111827","margin":"0","font-size":"0.9375rem"})}">Alex Morgan</p><p style="${S({"color":"#9ca3af","font-size":"0.8125rem","margin":"0"})}">CEO, Acme Inc.</p></div></div>` },
    { label: "Avatar group", icon: "👥", html: `<div style="${S({"display":"flex","align-items":"center","gap":"-4px","margin":"8px 0"})}"><div style="${S({"width":"36px","height":"36px","background":"#6366f1","border-radius":"9999px","border":"2px solid #fff","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-size":"0.75rem","font-weight":"700","margin-right":"-10px"})}">AM</div><div style="${S({"width":"36px","height":"36px","background":"#ec4899","border-radius":"9999px","border":"2px solid #fff","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-size":"0.75rem","font-weight":"700","margin-right":"-10px"})}">SC</div><div style="${S({"width":"36px","height":"36px","background":"#f59e0b","border-radius":"9999px","border":"2px solid #fff","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-size":"0.75rem","font-weight":"700","margin-right":"-10px"})}">JP</div><div style="${S({"width":"36px","height":"36px","background":"#e5e7eb","border-radius":"9999px","border":"2px solid #fff","display":"flex","align-items":"center","justify-content":"center","color":"#6b7280","font-size":"0.75rem","font-weight":"600"})}">+8</div><span style="${S({"margin-left":"16px","color":"#6b7280","font-size":"0.875rem"})}">12 members</span></div>` },
    { label: "Video player", icon: "▶", html: `<div style="${S({"position":"relative","padding-bottom":"56.25%","background":"#111827","border-radius":"16px","margin":"16px 0","overflow":"hidden"})}"><div style="${S({"position":"absolute","inset":"0","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","gap":"12px"})}"><div style="${S({"width":"60px","height":"60px","background":"rgba(255,255,255,0.15)","border-radius":"9999px","display":"flex","align-items":"center","justify-content":"center","color":"#fff","font-size":"1.5rem","cursor":"pointer"})}">▶</div><p style="${S({"color":"rgba(255,255,255,0.5)","font-size":"0.875rem","margin":"0"})}">Click to play video</p></div></div>` },
    { label: "YouTube embed", icon: "YT", html: `<div style="${S({"position":"relative","padding-bottom":"56.25%","background":"linear-gradient(135deg,#1a1a2e,#16213e)","border-radius":"16px","margin":"16px 0","overflow":"hidden"})}"><div style="${S({"position":"absolute","inset":"0","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","gap":"8px"})}"><div style="${S({"background":"#ff0000","border-radius":"8px","padding":"8px 12px","color":"#fff","font-weight":"700","font-size":"0.875rem"})}">▶ YouTube</div><p style="${S({"color":"rgba(255,255,255,0.4)","font-size":"0.75rem","margin":"0"})}">Paste YouTube URL to embed</p></div></div>` },
    { label: "Logo banner", icon: "⬡⬡", html: `<div style="${S({"background":"#f9fafb","border-radius":"16px","padding":"24px 32px","margin":"16px 0"})}"><p style="${S({"text-align":"center","color":"#9ca3af","font-size":"0.75rem","font-weight":"600","text-transform":"uppercase","letter-spacing":"0.1em","margin":"0 0 20px"})}">Trusted by</p><div style="${S({"display":"flex","align-items":"center","justify-content":"center","gap":"40px","flex-wrap":"wrap"})}"><span style="${S({"font-size":"1.25rem","font-weight":"800","color":"#d1d5db"})}">Stripe</span><span style="${S({"font-size":"1.25rem","font-weight":"800","color":"#d1d5db"})}">Figma</span><span style="${S({"font-size":"1.25rem","font-weight":"800","color":"#d1d5db"})}">Vercel</span><span style="${S({"font-size":"1.25rem","font-weight":"800","color":"#d1d5db"})}">Linear</span><span style="${S({"font-size":"1.25rem","font-weight":"800","color":"#d1d5db"})}">Notion</span></div></div>` },
    { label: "Map placeholder", icon: "📍", html: `<div style="${S({"background":"linear-gradient(135deg,#dbeafe,#ede9fe)","border-radius":"16px","height":"260px","margin":"16px 0","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","gap":"12px","border":"1px solid #c7d2fe"})}"><span style="${S({"font-size":"2.5rem"})}">📍</span><p style="${S({"color":"#6b7280","font-size":"0.875rem","margin":"0","text-align":"center"})}">123 Market Street<br/>San Francisco, CA 94105</p></div>` },
  ]},
  { category: "UI", items: [
    { label: "Divider", icon: "—", html: `<hr style="${S({"border":"none","border-top":"1px solid #e5e7eb","margin":"32px 0"})}" />` },
    { label: "Dashed divider", icon: "- -", html: `<hr style="${S({"border":"none","border-top":"2px dashed #e5e7eb","margin":"32px 0"})}" />` },
    { label: "Spacer S", icon: "↕S", html: `<div style="height:32px"></div>` },
    { label: "Spacer M", icon: "↕M", html: `<div style="height:64px"></div>` },
    { label: "Spacer L", icon: "↕L", html: `<div style="height:120px"></div>` },
    { label: "Badge", icon: "⬡", html: `<span style="${S({"display":"inline-flex","background":"#eef2ff","color":"#4338ca","font-size":"0.75rem","font-weight":"600","padding":"4px 12px","border-radius":"9999px","border":"1px solid #c7d2fe","margin":"8px 0"})}">Badge</span>` },
    { label: "Green badge", icon: "⬡", html: `<span style="${S({"display":"inline-flex","background":"#d1fae5","color":"#065f46","font-size":"0.75rem","font-weight":"600","padding":"4px 12px","border-radius":"9999px","border":"1px solid #6ee7b7","margin":"8px 0"})}">Active</span>` },
    { label: "Tag list", icon: "#", html: `<div style="${S({"display":"flex","flex-wrap":"wrap","gap":"8px","margin":"8px 0"})}"><span style="${S({"background":"#f3f4f6","color":"#374151","font-size":"0.8125rem","padding":"4px 12px","border-radius":"9999px","font-weight":"500"})}">Design</span><span style="${S({"background":"#f3f4f6","color":"#374151","font-size":"0.8125rem","padding":"4px 12px","border-radius":"9999px","font-weight":"500"})}">Development</span><span style="${S({"background":"#f3f4f6","color":"#374151","font-size":"0.8125rem","padding":"4px 12px","border-radius":"9999px","font-weight":"500"})}">Product</span><span style="${S({"background":"#f3f4f6","color":"#374151","font-size":"0.8125rem","padding":"4px 12px","border-radius":"9999px","font-weight":"500"})}">Marketing</span></div>` },
    { label: "Alert info", icon: "ℹ", html: `<div style="${S({"background":"#eff6ff","border":"1px solid #bfdbfe","color":"#1e40af","border-radius":"12px","padding":"12px 16px","font-size":"0.875rem","margin":"16px 0","display":"flex","gap":"10px","align-items":"flex-start"})}"><span>ℹ️</span><span>This is an informational alert message.</span></div>` },
    { label: "Alert warning", icon: "⚠", html: `<div style="${S({"background":"#fffbeb","border":"1px solid #fcd34d","color":"#92400e","border-radius":"12px","padding":"12px 16px","font-size":"0.875rem","margin":"16px 0","display":"flex","gap":"10px","align-items":"flex-start"})}"><span>⚠️</span><span>Warning: please review before continuing.</span></div>` },
    { label: "Alert success", icon: "✓", html: `<div style="${S({"background":"#f0fdf4","border":"1px solid #bbf7d0","color":"#166534","border-radius":"12px","padding":"12px 16px","font-size":"0.875rem","margin":"16px 0","display":"flex","gap":"10px","align-items":"flex-start"})}"><span>✅</span><span>Your changes have been saved successfully.</span></div>` },
    { label: "Alert error", icon: "✕", html: `<div style="${S({"background":"#fef2f2","border":"1px solid #fecaca","color":"#991b1b","border-radius":"12px","padding":"12px 16px","font-size":"0.875rem","margin":"16px 0","display":"flex","gap":"10px","align-items":"flex-start"})}"><span>❌</span><span>Something went wrong. Please try again.</span></div>` },
    { label: "Progress bar", icon: "▬", html: `<div style="${S({"margin":"16px 0"})}"><div style="${S({"display":"flex","justify-content":"space-between","margin-bottom":"6px"})}"><span style="${S({"font-size":"0.875rem","font-weight":"600","color":"#374151"})}">Progress</span><span style="${S({"font-size":"0.875rem","color":"#6b7280"})}">72%</span></div><div style="${S({"background":"#e5e7eb","border-radius":"9999px","height":"8px"})}"><div style="${S({"background":"linear-gradient(90deg,#4f46e5,#818cf8)","height":"8px","border-radius":"9999px","width":"72%"})}"></div></div></div>` },
    { label: "Star rating", icon: "★★", html: `<div style="${S({"display":"flex","align-items":"center","gap":"8px","margin":"8px 0"})}"><div style="${S({"display":"flex","gap":"2px","color":"#f59e0b","font-size":"1.25rem"})}">★★★★★</div><span style="${S({"color":"#374151","font-weight":"600","font-size":"0.9375rem"})}">4.9</span><span style="${S({"color":"#9ca3af","font-size":"0.875rem"})}">( 2,148 reviews)</span></div>` },
    { label: "Tabs", icon: "⊡", html: `<div style="${S({"margin":"16px 0"})}"><div style="${S({"display":"flex","border-bottom":"2px solid #e5e7eb","gap":"0"})}"><button style="${S({"padding":"10px 20px","font-weight":"600","color":"#4f46e5","border-bottom":"2px solid #4f46e5","margin-bottom":"-2px","background":"none","border-top":"none","border-left":"none","border-right":"none","cursor":"pointer","font-size":"0.9375rem"})}">Overview</button><button style="${S({"padding":"10px 20px","font-weight":"500","color":"#6b7280","background":"none","border":"none","cursor":"pointer","font-size":"0.9375rem"})}">Features</button><button style="${S({"padding":"10px 20px","font-weight":"500","color":"#6b7280","background":"none","border":"none","cursor":"pointer","font-size":"0.9375rem"})}">Pricing</button></div><div style="${S({"padding":"20px 0","color":"#6b7280","font-size":"0.9375rem"})}">Tab content goes here.</div></div>` },
    { label: "Accordion", icon: "▼", html: `<div style="${S({"border":"1px solid #e5e7eb","border-radius":"14px","overflow":"hidden","margin":"16px 0"})}"><div style="${S({"padding":"16px 20px","font-weight":"600","color":"#111827","display":"flex","justify-content":"space-between","align-items":"center","cursor":"pointer","background":"#f9fafb"})}"><span>Is there a free trial?</span><span style="${S({"color":"#6b7280"})}">▼</span></div><div style="${S({"padding":"16px 20px","color":"#6b7280","font-size":"0.9375rem","border-top":"1px solid #e5e7eb"})}">Yes, you can try for 14 days with no credit card required.</div></div>` },
    { label: "Tooltip", icon: "ℹ", html: `<div style="${S({"display":"inline-block","position":"relative","margin":"32px 16px"})}"><button style="${S({"background":"#f3f4f6","color":"#374151","border":"1px solid #e5e7eb","padding":"8px 16px","border-radius":"8px","cursor":"pointer","font-size":"0.875rem"})}">Hover me</button><div style="${S({"position":"absolute","bottom":"calc(100% + 8px)","left":"50%","transform":"translateX(-50%)","background":"#111827","color":"#fff","font-size":"0.75rem","padding":"6px 12px","border-radius":"8px","white-space":"nowrap","pointer-events":"none"})}">This is a tooltip<div style="${S({"position":"absolute","top":"100%","left":"50%","transform":"translateX(-50%)","border":"6px solid transparent","border-top-color":"#111827"})}"></div></div></div>` },
    { label: "Breadcrumb", icon: ">", html: `<nav style="${S({"display":"flex","align-items":"center","gap":"8px","font-size":"0.875rem","margin":"8px 0"})}"><a href="#" style="${S({"color":"#4f46e5","text-decoration":"none"})}">Home</a><span style="${S({"color":"#9ca3af"})}">›</span><a href="#" style="${S({"color":"#4f46e5","text-decoration":"none"})}">Products</a><span style="${S({"color":"#9ca3af"})}">›</span><span style="${S({"color":"#6b7280","font-weight":"500"})}">Analytics</span></nav>` },
    { label: "Pagination", icon: "◁▷", html: `<div style="${S({"display":"flex","align-items":"center","gap":"4px","margin":"16px 0"})}"><button style="${S({"padding":"8px 12px","border":"1px solid #e5e7eb","border-radius":"8px","background":"#fff","color":"#374151","cursor":"pointer","font-size":"0.875rem"})}">‹</button><button style="${S({"padding":"8px 14px","border":"1px solid #4f46e5","border-radius":"8px","background":"#4f46e5","color":"#fff","cursor":"pointer","font-size":"0.875rem","font-weight":"600"})}">1</button><button style="${S({"padding":"8px 14px","border":"1px solid #e5e7eb","border-radius":"8px","background":"#fff","color":"#374151","cursor":"pointer","font-size":"0.875rem"})}">2</button><button style="${S({"padding":"8px 14px","border":"1px solid #e5e7eb","border-radius":"8px","background":"#fff","color":"#374151","cursor":"pointer","font-size":"0.875rem"})}">3</button><button style="${S({"padding":"8px 12px","border":"1px solid #e5e7eb","border-radius":"8px","background":"#fff","color":"#374151","cursor":"pointer","font-size":"0.875rem"})}">›</button></div>` },
    { label: "Step indicator", icon: "①②③", html: `<div style="${S({"display":"flex","align-items":"center","margin":"16px 0"})}"><div style="${S({"display":"flex","align-items":"center","justify-content":"center","width":"32px","height":"32px","background":"#4f46e5","border-radius":"9999px","color":"#fff","font-weight":"700","font-size":"0.875rem","flex-shrink":"0"})}">1</div><div style="${S({"flex":"1","height":"2px","background":"#4f46e5","margin":"0 4px"})}"></div><div style="${S({"display":"flex","align-items":"center","justify-content":"center","width":"32px","height":"32px","background":"#4f46e5","border-radius":"9999px","color":"#fff","font-weight":"700","font-size":"0.875rem","flex-shrink":"0"})}">2</div><div style="${S({"flex":"1","height":"2px","background":"#e5e7eb","margin":"0 4px"})}"></div><div style="${S({"display":"flex","align-items":"center","justify-content":"center","width":"32px","height":"32px","background":"#e5e7eb","border-radius":"9999px","color":"#9ca3af","font-weight":"700","font-size":"0.875rem","flex-shrink":"0"})}">3</div></div>` },
  ]},
  { category: "Shapes", items: [
    { label: "Circle", icon: "●", html: `<div style="${S({"width":"80px","height":"80px","background":"#eef2ff","border-radius":"9999px","margin":"16px 0","border":"2px solid #c7d2fe"})}"></div>` },
    { label: "Filled circle", icon: "⬤", html: `<div style="${S({"width":"80px","height":"80px","background":"linear-gradient(135deg,#6366f1,#a5b4fc)","border-radius":"9999px","margin":"16px 0"})}"></div>` },
    { label: "Rectangle", icon: "▬", html: `<div style="${S({"width":"100%","height":"80px","background":"#eef2ff","border-radius":"12px","margin":"16px 0","border":"2px solid #c7d2fe"})}"></div>` },
    { label: "Gradient blob", icon: "☁", html: `<div style="${S({"width":"200px","height":"200px","background":"linear-gradient(135deg,rgba(99,102,241,0.3),rgba(168,85,247,0.3))","border-radius":"60% 40% 30% 70% / 60% 30% 70% 40%","margin":"16px auto","filter":"blur(1px)"})}"></div>` },
    { label: "Dot grid", icon: "⠿", html: `<div style="${S({"width":"100%","height":"120px","margin":"16px 0","background-image":"radial-gradient(circle,#d1d5db 1px,transparent 1px)","background-size":"20px 20px","border-radius":"12px","opacity":"0.6"})}"></div>` },
    { label: "Line H", icon: "─", html: `<div style="${S({"width":"100%","height":"2px","background":"linear-gradient(90deg,transparent,#6366f1,transparent)","margin":"32px 0"})}"></div>` },
    { label: "Line V", icon: "│", html: `<div style="${S({"width":"2px","height":"80px","background":"linear-gradient(180deg,transparent,#6366f1,transparent)","margin":"16px auto"})}"></div>` },
    { label: "Arrow →", icon: "→", html: `<div style="${S({"display":"flex","align-items":"center","gap":"8px","margin":"8px 0","color":"#6366f1","font-size":"1.5rem"})}">→</div>` },
    { label: "Diagonal line", icon: "╱", html: `<div style="${S({"width":"100%","height":"2px","background":"#e5e7eb","transform":"rotate(3deg)","margin":"32px 0","transform-origin":"left"})}"></div>` },
    { label: "Highlight box", icon: "▩", html: `<div style="${S({"background":"linear-gradient(135deg,#fef9c3,#fef3c7)","border":"1px solid #fcd34d","border-radius":"12px","padding":"16px 20px","margin":"16px 0"})}"><p style="${S({"color":"#78350f","font-weight":"600","margin":"0","font-size":"0.9375rem"})}">💡 Pro tip: This is a highlighted callout box.</p></div>` },
    { label: "Gradient card", icon: "◈", html: `<div style="${S({"background":"linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)","border-radius":"20px","padding":"32px","margin":"16px 0","color":"#fff"})}"><h3 style="${S({"font-weight":"700","margin":"0 0 8px","font-size":"1.25rem"})}">Gradient card</h3><p style="${S({"opacity":"0.85","margin":"0","font-size":"0.9375rem"})}">Beautiful gradient background.</p></div>` },
    { label: "Glass card", icon: "◻", html: `<div style="${S({"background":"rgba(255,255,255,0.15)","backdrop-filter":"blur(12px)","border":"1px solid rgba(255,255,255,0.2)","border-radius":"20px","padding":"32px","margin":"16px 0","box-shadow":"0 8px 32px rgba(0,0,0,0.1)","background-color":"#6366f1"})}"><h3 style="${S({"font-weight":"700","color":"#fff","margin":"0 0 8px","font-size":"1.25rem"})}">Glass morphism</h3><p style="${S({"color":"rgba(255,255,255,0.8)","margin":"0","font-size":"0.9375rem"})}">Frosted glass effect.</p></div>` },
  ]},

  // ── iOS 26 UI Kit (Liquid Glass) ─────────────────────────────────────────────
  { category: "iOS — Navigation", items: [
    { label: "Status Bar", icon: "📶", html: `<div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","padding":"14px 24px 6px","font-family":"system-ui,-apple-system","font-size":"15px","font-weight":"600","color":"#000","background":"transparent"})}"><span>9:41</span><div style="${S({"display":"flex","gap":"5px","align-items":"center"})}"><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline"><rect x="0" y="3" width="3" height="9" rx="1" fill="#000"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill="#000"/><rect x="9" y="0" width="3" height="12" rx="1" fill="#000"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="#000" opacity=".3"/></svg><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline"><path d="M8 2.4C10.8 2.4 13.3 3.5 15.1 5.3L16 4.4C13.9 2.3 11.1 1 8 1C4.9 1 2.1 2.3 0 4.4L0.9 5.3C2.7 3.5 5.2 2.4 8 2.4Z" fill="#000"/><path d="M8 5.2C10 5.2 11.8 6 13.1 7.3L14 6.4C12.4 4.8 10.3 3.8 8 3.8C5.7 3.8 3.6 4.8 2 6.4L2.9 7.3C4.2 6 6 5.2 8 5.2Z" fill="#000"/><path d="M8 8C9.1 8 10.1 8.5 10.8 9.2L11.8 8.2C10.8 7.2 9.5 6.6 8 6.6C6.5 6.6 5.2 7.2 4.2 8.2L5.2 9.2C5.9 8.5 6.9 8 8 8Z" fill="#000"/><circle cx="8" cy="11" r="1" fill="#000"/></svg><div style="${S({"display":"flex","align-items":"center","gap":"2px","font-size":"13px","font-weight":"600"})}"><svg width="25" height="12" viewBox="0 0 25 12" style="display:inline"><rect x="0" y="1" width="22" height="10" rx="2.5" stroke="#000" stroke-width="1" fill="none"/><rect x="1.5" y="2.5" width="17" height="7" rx="1.5" fill="#000"/><rect x="23" y="4" width="2" height="4" rx="1" fill="#000" opacity=".4"/></svg></div></div></div>` },
    { label: "Nav Bar Large", icon: "🔝", html: `<div style="${S({"background":"#f2f2f7","font-family":"system-ui,-apple-system","padding":"0 20px 8px"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","padding":"14px 0 4px","font-size":"15px","font-weight":"600","color":"#007aff"})}"><span>Cancel</span><span style="${S({"color":"#000"})}"></span><span>Save</span></div><h1 style="${S({"font-size":"34px","font-weight":"700","color":"#000","margin":"8px 0 12px","letter-spacing":"-0.5px"})}">Messages</h1><div style="${S({"background":"#e5e5ea","border-radius":"10px","padding":"7px 12px","display":"flex","align-items":"center","gap":"8px","margin-bottom":"12px"})}"><span style="${S({"color":"#8e8e93","font-size":"15px"})}">🔍</span><span style="${S({"color":"#8e8e93","font-size":"17px"})}">Search</span></div></div>` },
    { label: "Nav Bar Standard", icon: "⬆", html: `<div style="${S({"background":"rgba(242,242,247,0.92)","backdrop-filter":"blur(20px)","font-family":"system-ui,-apple-system","padding":"0 16px","border-bottom":"0.5px solid #c6c6c8"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","height":"44px"})}"><span style="${S({"color":"#007aff","font-size":"17px"})}">‹ Back</span><span style="${S({"font-size":"17px","font-weight":"600","color":"#000"})}">Title</span><span style="${S({"color":"#007aff","font-size":"17px"})}">Edit</span></div></div>` },
    { label: "Tab Bar", icon: "⬛", html: `<div style="${S({"background":"rgba(249,249,249,0.94)","backdrop-filter":"blur(20px)","border-top":"0.5px solid #c6c6c8","font-family":"system-ui,-apple-system","padding":"8px 0 20px","display":"flex","justify-content":"space-around"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px"})}"><span style="${S({"font-size":"24px"})}">🏠</span><span style="${S({"font-size":"10px","color":"#007aff","font-weight":"500"})}">Home</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px"})}"><span style="${S({"font-size":"24px"})}">🔍</span><span style="${S({"font-size":"10px","color":"#8e8e93","font-weight":"500"})}">Search</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px"})}"><span style="${S({"font-size":"24px"})}">♥</span><span style="${S({"font-size":"10px","color":"#8e8e93","font-weight":"500"})}">Favorites</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px"})}"><span style="${S({"font-size":"24px"})}">👤</span><span style="${S({"font-size":"10px","color":"#8e8e93","font-weight":"500"})}">Profile</span></div></div>` },
    { label: "Search Bar", icon: "🔍", html: `<div style="${S({"background":"#f2f2f7","padding":"8px 16px","font-family":"system-ui,-apple-system"})}"><div style="${S({"background":"rgba(118,118,128,0.12)","border-radius":"10px","padding":"7px 12px","display":"flex","align-items":"center","gap":"8px"})}"><span style="${S({"color":"#8e8e93","font-size":"15px"})}">🔍</span><span style="${S({"color":"#8e8e93","font-size":"17px","flex":"1"})}">Search</span><span style="${S({"color":"#8e8e93","font-size":"15px"})}">⊗</span></div></div>` },
    { label: "Toolbar", icon: "🔧", html: `<div style="${S({"background":"rgba(249,249,249,0.94)","backdrop-filter":"blur(20px)","border-top":"0.5px solid #c6c6c8","font-family":"system-ui,-apple-system","padding":"8px 24px 28px","display":"flex","justify-content":"space-between","align-items":"center"})}"><span style="${S({"font-size":"22px","color":"#007aff"})}">↩</span><span style="${S({"font-size":"22px","color":"#007aff"})}">↪</span><span style="${S({"font-size":"22px","color":"#007aff"})}">⬆</span><span style="${S({"font-size":"22px","color":"#007aff"})}">⤢</span><span style="${S({"font-size":"22px","color":"#007aff"})}">☰</span></div>` },
    { label: "Home Indicator", icon: "—", html: `<div style="${S({"display":"flex","justify-content":"center","padding":"8px 0 4px","background":"#fff"})}"><div style="${S({"width":"134px","height":"5px","background":"#000","border-radius":"3px","opacity":"0.2"})}"></div></div>` },
  ]},

  { category: "iOS — Controls", items: [
    { label: "Button Filled", icon: "●", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><button style="${S({"display":"block","width":"100%","background":"#007aff","color":"#fff","font-size":"17px","font-weight":"600","padding":"15px 20px","border-radius":"14px","border":"none","cursor":"pointer","text-align":"center","letter-spacing":"-0.2px"})}">Continue</button></div>` },
    { label: "Button Gray", icon: "○", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><button style="${S({"display":"block","width":"100%","background":"rgba(118,118,128,0.12)","color":"#007aff","font-size":"17px","font-weight":"600","padding":"15px 20px","border-radius":"14px","border":"none","cursor":"pointer","text-align":"center"})}">Cancel</button></div>` },
    { label: "Button Tinted", icon: "◉", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><button style="${S({"display":"block","width":"100%","background":"rgba(0,122,255,0.12)","color":"#007aff","font-size":"17px","font-weight":"600","padding":"15px 20px","border-radius":"14px","border":"none","cursor":"pointer","text-align":"center"})}">Add to cart</button></div>` },
    { label: "Button Destructive", icon: "✕", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><button style="${S({"display":"block","width":"100%","background":"#ff3b30","color":"#fff","font-size":"17px","font-weight":"600","padding":"15px 20px","border-radius":"14px","border":"none","cursor":"pointer","text-align":"center"})}">Delete Account</button></div>` },
    { label: "Toggle On", icon: "🔛", html: `<div style="${S({"display":"flex","align-items":"center","justify-content":"space-between","font-family":"system-ui,-apple-system","padding":"2px 0"})}"><span style="${S({"font-size":"17px","color":"#000"})}">Notifications</span><div style="${S({"width":"51px","height":"31px","background":"#34c759","border-radius":"16px","position":"relative","cursor":"pointer","flex-shrink":"0"})}"><div style="${S({"width":"27px","height":"27px","background":"#fff","border-radius":"50%","position":"absolute","top":"2px","right":"2px","box-shadow":"0 2px 6px rgba(0,0,0,0.25)"})}"></div></div></div>` },
    { label: "Toggle Off", icon: "⭕", html: `<div style="${S({"display":"flex","align-items":"center","justify-content":"space-between","font-family":"system-ui,-apple-system","padding":"2px 0"})}"><span style="${S({"font-size":"17px","color":"#000"})}">Dark Mode</span><div style="${S({"width":"51px","height":"31px","background":"rgba(120,120,128,0.16)","border-radius":"16px","position":"relative","cursor":"pointer","flex-shrink":"0"})}"><div style="${S({"width":"27px","height":"27px","background":"#fff","border-radius":"50%","position":"absolute","top":"2px","left":"2px","box-shadow":"0 2px 6px rgba(0,0,0,0.25)"})}"></div></div></div>` },
    { label: "Segmented Control", icon: "▬▬", html: `<div style="${S({"background":"rgba(118,118,128,0.12)","border-radius":"9px","padding":"2px","display":"flex","font-family":"system-ui,-apple-system","font-size":"13px","font-weight":"600"})}"><div style="${S({"flex":"1","background":"#fff","border-radius":"7px","padding":"6px 0","text-align":"center","color":"#000","box-shadow":"0 1px 3px rgba(0,0,0,0.1)"})}">All</div><div style="${S({"flex":"1","padding":"6px 0","text-align":"center","color":"#000"})}">Active</div><div style="${S({"flex":"1","padding":"6px 0","text-align":"center","color":"#000"})}">Closed</div></div>` },
    { label: "Slider", icon: "⇔", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><span style="${S({"font-size":"13px","color":"#8e8e93"})}">🔇</span><div style="${S({"flex":"1","height":"4px","background":"#e5e5ea","border-radius":"2px","position":"relative"})}"><div style="${S({"width":"60%","height":"100%","background":"#007aff","border-radius":"2px"})}"></div><div style="${S({"width":"22px","height":"22px","background":"#fff","border-radius":"50%","position":"absolute","top":"-9px","left":"calc(60% - 11px)","box-shadow":"0 2px 8px rgba(0,0,0,0.25)"})}"></div></div><span style="${S({"font-size":"13px","color":"#8e8e93"})}">🔊</span></div></div>` },
    { label: "Stepper", icon: "−+", html: `<div style="${S({"display":"inline-flex","align-items":"center","background":"rgba(118,118,128,0.12)","border-radius":"9px","overflow":"hidden","font-family":"system-ui,-apple-system"})}"><button style="${S({"padding":"7px 16px","font-size":"22px","font-weight":"300","color":"#007aff","background":"none","border":"none","cursor":"pointer","line-height":"1"})}">−</button><div style="${S({"width":"1px","height":"30px","background":"rgba(118,118,128,0.3)"})}"></div><button style="${S({"padding":"7px 16px","font-size":"22px","font-weight":"300","color":"#007aff","background":"none","border":"none","cursor":"pointer","line-height":"1"})}">+</button></div>` },
    { label: "Page Control", icon: "• • •", html: `<div style="${S({"display":"flex","justify-content":"center","gap":"8px","padding":"8px 0","font-family":"system-ui,-apple-system"})}"><div style="${S({"width":"8px","height":"8px","border-radius":"50%","background":"#000","opacity":"0.9"})}"></div><div style="${S({"width":"8px","height":"8px","border-radius":"50%","background":"#000","opacity":"0.3"})}"></div><div style="${S({"width":"8px","height":"8px","border-radius":"50%","background":"#000","opacity":"0.3"})}"></div><div style="${S({"width":"8px","height":"8px","border-radius":"50%","background":"#000","opacity":"0.3"})}"></div></div>` },
    { label: "Activity Indicator", icon: "⟳", html: `<div style="${S({"display":"flex","align-items":"center","gap":"12px","font-family":"system-ui,-apple-system","color":"#8e8e93","font-size":"15px"})}"><div style="${S({"width":"20px","height":"20px","border":"2.5px solid #e5e5ea","border-top-color":"#8e8e93","border-radius":"50%"})}"></div><span>Loading…</span></div>` },
    { label: "Progress Bar", icon: "▰▱", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"height":"4px","background":"#e5e5ea","border-radius":"2px","overflow":"hidden"})}"><div style="${S({"width":"65%","height":"100%","background":"#007aff","border-radius":"2px"})}"></div></div></div>` },
  ]},

  { category: "iOS — Inputs", items: [
    { label: "Text Field", icon: "✎", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"background":"#fff","border-radius":"10px","border":"0.5px solid #c6c6c8","padding":"11px 16px","font-size":"17px","color":"#8e8e93"})}">Placeholder text</div></div>` },
    { label: "Text Field Filled", icon: "✏", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"background":"rgba(118,118,128,0.12)","border-radius":"10px","padding":"11px 16px","font-size":"17px","color":"#000"})}">john@example.com</div></div>` },
    { label: "Text Field Labeled", icon: "🏷", html: `<div style="${S({"font-family":"system-ui,-apple-system"})}"><div style="${S({"background":"#fff","border":"0.5px solid #c6c6c8","border-radius":"10px","padding":"10px 16px 8px"})}"><p style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93","margin":"0 0 2px","text-transform":"uppercase","letter-spacing":"0.5px"})}">Email</p><p style="${S({"font-size":"17px","color":"#000","margin":"0"})}">user@example.com</p></div></div>` },
    { label: "Search Field", icon: "🔍", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"background":"rgba(118,118,128,0.12)","border-radius":"10px","padding":"8px 12px","display":"flex","align-items":"center","gap":"8px"})}"><span style="${S({"font-size":"15px","color":"#8e8e93"})}">🔍</span><span style="${S({"font-size":"17px","color":"#8e8e93","flex":"1"})}">Search Messages</span></div></div>` },
    { label: "Secure Field", icon: "🔒", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"background":"#fff","border-radius":"10px","border":"0.5px solid #c6c6c8","padding":"11px 16px","display":"flex","align-items":"center","justify-content":"space-between"})}"><span style="${S({"font-size":"17px","color":"#000","letter-spacing":"4px"})}">••••••••</span><span style="${S({"font-size":"17px","color":"#8e8e93"})}">👁</span></div></div>` },
    { label: "Text Area", icon: "≡", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"4px 0"})}"><div style="${S({"background":"#fff","border-radius":"10px","border":"0.5px solid #c6c6c8","padding":"12px 16px","min-height":"90px","font-size":"17px","color":"#8e8e93","line-height":"1.5"})}">Add a note…</div></div>` },
    { label: "Picker Row", icon: "⊞", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"13px 16px","display":"flex","align-items":"center","justify-content":"space-between","border-bottom":"0.5px solid #e5e5ea"})}"><span style="${S({"font-size":"17px","color":"#000"})}">Country</span><div style="${S({"display":"flex","align-items":"center","gap":"4px"})}"><span style="${S({"font-size":"17px","color":"#8e8e93"})}">United States</span><span style="${S({"color":"#c6c6c8","font-size":"17px"})}">›</span></div></div>` },
  ]},

  { category: "iOS — Lists", items: [
    { label: "List Item Basic", icon: "☰", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"13px 16px","display":"flex","align-items":"center","border-bottom":"0.5px solid #e5e5ea"})}"><span style="${S({"font-size":"17px","color":"#000","flex":"1"})}">List item</span><span style="${S({"color":"#c6c6c8","font-size":"20px"})}">›</span></div>` },
    { label: "List Item Detail", icon: "☰→", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"13px 16px","display":"flex","align-items":"center","gap":"12px","border-bottom":"0.5px solid #e5e5ea"})}"><div style="${S({"width":"29px","height":"29px","background":"#ff3b30","border-radius":"7px","display":"flex","align-items":"center","justify-content":"center","flex-shrink":"0","font-size":"16px"})}">🔔</div><div style="${S({"flex":"1"})}"><p style="${S({"margin":"0","font-size":"17px","color":"#000"})}">Notifications</p></div><span style="${S({"color":"#c6c6c8","font-size":"20px"})}">›</span></div>` },
    { label: "List Item Value", icon: "☰=", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"13px 16px","display":"flex","align-items":"center","justify-content":"space-between","border-bottom":"0.5px solid #e5e5ea"})}"><span style="${S({"font-size":"17px","color":"#000"})}">Language</span><div style="${S({"display":"flex","align-items":"center","gap":"4px"})}"><span style="${S({"font-size":"17px","color":"#8e8e93"})}">English</span><span style="${S({"color":"#c6c6c8","font-size":"20px"})}">›</span></div></div>` },
    { label: "List Item Toggle", icon: "☰⊡", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"13px 16px","display":"flex","align-items":"center","justify-content":"space-between","border-bottom":"0.5px solid #e5e5ea"})}"><span style="${S({"font-size":"17px","color":"#000"})}">Airplane Mode</span><div style="${S({"width":"51px","height":"31px","background":"#34c759","border-radius":"16px","position":"relative","cursor":"pointer","flex-shrink":"0"})}"><div style="${S({"width":"27px","height":"27px","background":"#fff","border-radius":"50%","position":"absolute","top":"2px","right":"2px","box-shadow":"0 2px 6px rgba(0,0,0,0.25)"})}"></div></div></div>` },
    { label: "List Group", icon: "▤", html: `<div style="${S({"font-family":"system-ui,-apple-system","margin":"20px 0"})}"><p style="${S({"font-size":"13px","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0 0 8px 20px","font-weight":"400"})}">Account</p><div style="${S({"background":"#fff","border-radius":"10px","overflow":"hidden","margin":"0 0 0 0"})}"><div style="${S({"padding":"13px 16px","display":"flex","justify-content":"space-between","align-items":"center","border-bottom":"0.5px solid #e5e5ea"})}"><span style="${S({"font-size":"17px"})}">Full Name</span><span style="${S({"color":"#8e8e93","font-size":"17px"})}">Alex Morgan</span></div><div style="${S({"padding":"13px 16px","display":"flex","justify-content":"space-between","align-items":"center","border-bottom":"0.5px solid #e5e5ea"})}"><span style="${S({"font-size":"17px"})}">Email</span><span style="${S({"color":"#8e8e93","font-size":"17px"})}">alex@example.com</span></div><div style="${S({"padding":"13px 16px","display":"flex","justify-content":"space-between","align-items":"center"})}"><span style="${S({"font-size":"17px"})}">Phone</span><span style="${S({"color":"#8e8e93","font-size":"17px"})}">+1 555 0100</span></div></div></div>` },
    { label: "Swipe Actions", icon: "←⬛→", html: `<div style="${S({"font-family":"system-ui,-apple-system","display":"flex","overflow":"hidden","border-radius":"10px"})}"><div style="${S({"background":"#ff3b30","color":"#fff","font-size":"15px","font-weight":"600","padding":"0 20px","display":"flex","align-items":"center"})}">Delete</div><div style="${S({"flex":"1","background":"#fff","padding":"14px 16px","display":"flex","justify-content":"space-between","align-items":"center","border-bottom":"0.5px solid #e5e5ea"})}"><div><p style="${S({"margin":"0","font-size":"17px","font-weight":"600"})}">Message title</p><p style="${S({"margin":"2px 0 0","font-size":"15px","color":"#8e8e93"})}">Preview text here...</p></div><span style="${S({"font-size":"13px","color":"#8e8e93"})}">Now</span></div><div style="${S({"background":"#007aff","color":"#fff","font-size":"15px","font-weight":"600","padding":"0 20px","display":"flex","align-items":"center"})}">More</div></div>` },
    { label: "Section Header", icon: "§", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#f2f2f7","padding":"6px 20px 4px"})}"><p style="${S({"font-size":"13px","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0","font-weight":"400"})}">General</p></div>` },
    { label: "Section Footer", icon: "↓§", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#f2f2f7","padding":"4px 20px 16px"})}"><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"0","line-height":"1.4"})}">Your account info is used to personalise your experience.</p></div>` },
  ]},

  { category: "iOS — Cards & Sheets", items: [
    { label: "App Card", icon: "📱", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"16px","overflow":"hidden","box-shadow":"0 2px 20px rgba(0,0,0,0.08)"})}"><div style="${S({"height":"140px","background":"linear-gradient(135deg,#007aff,#5ac8fa)","display":"flex","align-items":"center","justify-content":"center","font-size":"56px"})}">🎵</div><div style="${S({"padding":"14px 16px"})}"><p style="${S({"font-size":"17px","font-weight":"600","color":"#000","margin":"0 0 4px"})}">Music</p><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"0 0 12px"})}">Stream millions of songs</p><button style="${S({"background":"#007aff","color":"#fff","font-size":"15px","font-weight":"600","padding":"8px 22px","border-radius":"20px","border":"none","cursor":"pointer"})}">GET</button></div></div>` },
    { label: "Content Card", icon: "🗒", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"14px","padding":"16px","box-shadow":"0 2px 12px rgba(0,0,0,0.08)"})}"><p style="${S({"font-size":"11px","font-weight":"600","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"1px","margin":"0 0 6px"})}">LATEST NEWS</p><h3 style="${S({"font-size":"19px","font-weight":"700","color":"#000","margin":"0 0 8px","line-height":"1.3"})}">Apple announces new AI features for iPhone</h3><p style="${S({"font-size":"15px","color":"#8e8e93","margin":"0","line-height":"1.5"})}">The company revealed a suite of intelligence features powered by on-device models.</p></div>` },
    { label: "Bottom Sheet", icon: "⬆", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"16px 16px 0 0","padding":"8px 0 20px","box-shadow":"0 -4px 40px rgba(0,0,0,0.16)"})}"><div style="${S({"display":"flex","justify-content":"center","padding":"8px 0 16px"})}"><div style="${S({"width":"36px","height":"5px","background":"rgba(60,60,67,0.18)","border-radius":"3px"})}"></div></div><h3 style="${S({"font-size":"17px","font-weight":"600","color":"#000","text-align":"center","margin":"0 0 16px","padding":"0 20px"})}">Share</h3><div style="${S({"display":"flex","gap":"20px","padding":"0 20px 16px","overflow-x":"auto"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"8px","min-width":"60px"})}"><div style="${S({"width":"56px","height":"56px","background":"#007aff","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">💬</div><span style="${S({"font-size":"11px","color":"#000","text-align":"center"})}">Messages</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"8px","min-width":"60px"})}"><div style="${S({"width":"56px","height":"56px","background":"#1da1f2","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">🐦</div><span style="${S({"font-size":"11px","color":"#000","text-align":"center"})}">Twitter</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"8px","min-width":"60px"})}"><div style="${S({"width":"56px","height":"56px","background":"#34c759","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">📋</div><span style="${S({"font-size":"11px","color":"#000","text-align":"center"})}">Copy</span></div></div></div>` },
    { label: "Alert", icon: "⚠", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(255,255,255,0.95)","backdrop-filter":"blur(40px)","border-radius":"14px","overflow":"hidden","width":"270px","margin":"0 auto","box-shadow":"0 4px 40px rgba(0,0,0,0.3)"})}"><div style="${S({"padding":"20px 16px 8px","text-align":"center"})}"><h3 style="${S({"font-size":"17px","font-weight":"700","color":"#000","margin":"0 0 4px"})}">Delete item?</h3><p style="${S({"font-size":"13px","color":"#000","margin":"0","line-height":"1.4","opacity":"0.8"})}">This action cannot be undone. The item will be permanently deleted.</p></div><div style="${S({"border-top":"0.5px solid rgba(0,0,0,0.15)","display":"flex"})}"><button style="${S({"flex":"1","padding":"11px","font-size":"17px","color":"#007aff","background":"none","border":"none","border-right":"0.5px solid rgba(0,0,0,0.15)","cursor":"pointer"})}">Cancel</button><button style="${S({"flex":"1","padding":"11px","font-size":"17px","color":"#ff3b30","background":"none","border":"none","cursor":"pointer","font-weight":"700"})}">Delete</button></div></div>` },
    { label: "Action Sheet", icon: "≡", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"0 8px 8px"})}"><div style="${S({"background":"rgba(255,255,255,0.95)","backdrop-filter":"blur(40px)","border-radius":"14px","overflow":"hidden","margin-bottom":"8px"})}"><div style="${S({"padding":"16px","text-align":"center","border-bottom":"0.5px solid rgba(0,0,0,0.12)"})}"><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"0"})}">Save to your library or share with friends</p></div><button style="${S({"display":"block","width":"100%","padding":"14px","font-size":"17px","color":"#007aff","background":"none","border":"none","border-bottom":"0.5px solid rgba(0,0,0,0.12)","cursor":"pointer","text-align":"center"})}">Save to Library</button><button style="${S({"display":"block","width":"100%","padding":"14px","font-size":"17px","color":"#007aff","background":"none","border":"none","border-bottom":"0.5px solid rgba(0,0,0,0.12)","cursor":"pointer","text-align":"center"})}">Share…</button><button style="${S({"display":"block","width":"100%","padding":"14px","font-size":"17px","color":"#ff3b30","background":"none","border":"none","cursor":"pointer","text-align":"center"})}">Delete</button></div><div style="${S({"background":"rgba(255,255,255,0.95)","backdrop-filter":"blur(40px)","border-radius":"14px","overflow":"hidden"})}"><button style="${S({"display":"block","width":"100%","padding":"14px","font-size":"17px","font-weight":"600","color":"#007aff","background":"none","border":"none","cursor":"pointer","text-align":"center"})}">Cancel</button></div></div>` },
    { label: "Notification", icon: "🔔", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(255,255,255,0.95)","backdrop-filter":"blur(40px)","border-radius":"16px","padding":"14px 16px","box-shadow":"0 4px 20px rgba(0,0,0,0.15)","display":"flex","gap":"12px","align-items":"flex-start"})}"><div style="${S({"width":"40px","height":"40px","background":"#007aff","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","font-size":"20px","flex-shrink":"0"})}">💬</div><div style="${S({"flex":"1"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"flex-start","margin-bottom":"2px"})}"><span style="${S({"font-size":"15px","font-weight":"600","color":"#000"})}">Messages</span><span style="${S({"font-size":"13px","color":"#8e8e93"})}">now</span></div><p style="${S({"font-size":"15px","color":"#000","margin":"0","line-height":"1.4"})}">Alex: Hey, are you coming to the meeting?</p></div></div>` },
  ]},

  { category: "iOS — Widgets", items: [
    { label: "Small Widget", icon: "□", html: `<div style="${S({"font-family":"system-ui,-apple-system","width":"155px","height":"155px","background":"linear-gradient(135deg,#007aff,#5ac8fa)","border-radius":"22px","padding":"16px","display":"flex","flex-direction":"column","justify-content":"space-between","box-shadow":"0 4px 20px rgba(0,122,255,0.3)"})}"><div style="${S({"font-size":"24px"})}">🌤</div><div><p style="${S({"font-size":"28px","font-weight":"700","color":"#fff","margin":"0","line-height":"1"})}">72°</p><p style="${S({"font-size":"14px","color":"rgba(255,255,255,0.8)","margin":"2px 0 0"})}">San Francisco</p></div></div>` },
    { label: "Medium Widget", icon: "⬛", html: `<div style="${S({"font-family":"system-ui,-apple-system","width":"329px","height":"155px","background":"#1c1c1e","border-radius":"22px","padding":"16px 20px","display":"flex","flex-direction":"column","justify-content":"space-between","box-shadow":"0 4px 20px rgba(0,0,0,0.3)"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center"})}"><div><p style="${S({"font-size":"12px","color":"rgba(255,255,255,0.5)","margin":"0","text-transform":"uppercase","letter-spacing":"0.5px","font-weight":"600"})}">Activity</p><p style="${S({"font-size":"22px","font-weight":"700","color":"#fff","margin":"4px 0 0"})}">856 cal</p></div><div style="${S({"width":"52px","height":"52px","border-radius":"50%","background":"conic-gradient(#ff375f 0% 68%, #30d158 68% 84%, #007aff 84% 100%)","display":"flex","align-items":"center","justify-content":"center"})}"><div style="${S({"width":"38px","height":"38px","border-radius":"50%","background":"#1c1c1e"})}"></div></div></div><div style="${S({"display":"flex","gap":"20px"})}"><div><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"0"})}">Move</p><p style="${S({"font-size":"15px","font-weight":"600","color":"#ff375f","margin":"2px 0 0"})}">856 / 860</p></div><div><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"0"})}">Exercise</p><p style="${S({"font-size":"15px","font-weight":"600","color":"#30d158","margin":"2px 0 0"})}">28 / 30 min</p></div><div><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"0"})}">Stand</p><p style="${S({"font-size":"15px","font-weight":"600","color":"#007aff","margin":"2px 0 0"})}">10 / 12 hrs</p></div></div></div>` },
    { label: "App Icon", icon: "🔲", html: `<div style="${S({"display":"inline-flex","flex-direction":"column","align-items":"center","gap":"6px","font-family":"system-ui,-apple-system"})}"><div style="${S({"width":"60px","height":"60px","background":"linear-gradient(135deg,#007aff,#5856d6)","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"32px","box-shadow":"0 2px 10px rgba(0,0,0,0.15)"})}">📸</div><p style="${S({"font-size":"11px","color":"#000","margin":"0","text-align":"center","max-width":"72px","overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"})}">Camera</p></div>` },
    { label: "App Grid", icon: "⊞", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(0,0,0,0.4)","border-radius":"24px","padding":"24px 20px"})}"><div style="${S({"display":"grid","grid-template-columns":"repeat(4,1fr)","gap":"24px 20px"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px"})}"><div style="${S({"width":"60px","height":"60px","background":"linear-gradient(135deg,#007aff,#34aadc)","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">📞</div><p style="${S({"font-size":"11px","color":"#fff","margin":"0","text-shadow":"0 1px 3px rgba(0,0,0,0.4)"})}">Phone</p></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px"})}"><div style="${S({"width":"60px","height":"60px","background":"linear-gradient(135deg,#34c759,#32ade6)","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">💬</div><p style="${S({"font-size":"11px","color":"#fff","margin":"0","text-shadow":"0 1px 3px rgba(0,0,0,0.4)"})}">Messages</p></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px"})}"><div style="${S({"width":"60px","height":"60px","background":"linear-gradient(135deg,#ff9500,#ff3b30)","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">📷</div><p style="${S({"font-size":"11px","color":"#fff","margin":"0","text-shadow":"0 1px 3px rgba(0,0,0,0.4)"})}">Camera</p></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px"})}"><div style="${S({"width":"60px","height":"60px","background":"linear-gradient(135deg,#5856d6,#007aff)","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">🗺</div><p style="${S({"font-size":"11px","color":"#fff","margin":"0","text-shadow":"0 1px 3px rgba(0,0,0,0.4)"})}">Maps</p></div></div></div>` },
    { label: "Lock Screen", icon: "🔒", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"linear-gradient(180deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)","padding":"48px 20px 32px","text-align":"center","min-height":"200px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","gap":"8px"})}"><p style="${S({"font-size":"17px","color":"rgba(255,255,255,0.7)","margin":"0","font-weight":"400"})}">Friday, 8 May</p><p style="${S({"font-size":"72px","font-weight":"200","color":"#fff","margin":"0","line-height":"1","letter-spacing":"-3px"})}">9:41</p></div>` },
    { label: "Dynamic Island", icon: "◉", html: `<div style="${S({"display":"flex","justify-content":"center","padding":"12px 0"})}"><div style="${S({"background":"#000","border-radius":"20px","padding":"8px 16px","display":"flex","align-items":"center","gap":"12px","min-width":"120px","justify-content":"center"})}"><div style="${S({"width":"10px","height":"10px","background":"#1c1c1e","border-radius":"50%"})}"></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><span style="${S({"font-size":"13px","font-weight":"600","color":"#fff","font-family":"system-ui,-apple-system"})}">Music playing…</span></div><div style="${S({"width":"20px","height":"20px","background":"linear-gradient(135deg,#ff2d55,#ff9500)","border-radius":"6px"})}"></div></div></div>` },
  ]},

  { category: "iOS 26 — Liquid Glass", items: [
    { label: "Floating Tab Bar", icon: "⊟", html: `<div style="${S({"font-family":"system-ui,-apple-system","display":"flex","justify-content":"center","padding":"12px 0 28px","background":"linear-gradient(180deg,#c8d8f8 0%,#e8d0fa 100%)"})}"><div style="${S({"background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border":"0.5px solid rgba(255,255,255,0.8)","border-radius":"28px","padding":"10px 12px","display":"flex","gap":"2px","align-items":"center","box-shadow":"0 4px 32px rgba(0,0,0,0.12),inset 0 1px 0 rgba(255,255,255,0.7)"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px","padding":"6px 16px","background":"rgba(0,122,255,0.15)","border-radius":"18px"})}"><span style="${S({"font-size":"22px"})}">🏠</span><span style="${S({"font-size":"10px","font-weight":"600","color":"#007aff"})}">Home</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px","padding":"6px 16px"})}"><span style="${S({"font-size":"22px","opacity":"0.5"})}">🔍</span><span style="${S({"font-size":"10px","font-weight":"500","color":"#8e8e93"})}">Search</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px","padding":"6px 16px"})}"><span style="${S({"font-size":"22px","opacity":"0.5"})}">♥</span><span style="${S({"font-size":"10px","font-weight":"500","color":"#8e8e93"})}">Saved</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"3px","padding":"6px 16px"})}"><span style="${S({"font-size":"22px","opacity":"0.5"})}">👤</span><span style="${S({"font-size":"10px","font-weight":"500","color":"#8e8e93"})}">Profile</span></div></div></div>` },
    { label: "Glass Nav Bar", icon: "⬆", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border-bottom":"0.5px solid rgba(255,255,255,0.6)","padding":"0 20px","box-shadow":"0 1px 16px rgba(0,0,0,0.08)"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","height":"44px"})}"><span style="${S({"color":"#007aff","font-size":"17px"})}">‹ Back</span><span style="${S({"font-size":"17px","font-weight":"600","color":"#000"})}">Discover</span><span style="${S({"color":"#007aff","font-size":"17px"})}">⊕</span></div></div>` },
    { label: "Glass Pill Button", icon: "●", html: `<div style="${S({"font-family":"system-ui,-apple-system","padding":"8px 0","display":"flex","gap":"10px","flex-wrap":"wrap"})}"><button style="${S({"background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border":"0.5px solid rgba(255,255,255,0.7)","color":"#007aff","font-size":"17px","font-weight":"600","padding":"13px 28px","border-radius":"50px","cursor":"pointer","box-shadow":"0 2px 12px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.6)"})}">Continue</button><button style="${S({"background":"rgba(0,122,255,0.85)","backdrop-filter":"blur(40px)","border":"0.5px solid rgba(0,122,255,0.4)","color":"#fff","font-size":"17px","font-weight":"600","padding":"13px 28px","border-radius":"50px","cursor":"pointer","box-shadow":"0 2px 16px rgba(0,122,255,0.35)"})}">Get Started</button></div>` },
    { label: "Glass Icon Buttons", icon: "◉", html: `<div style="${S({"font-family":"system-ui,-apple-system","display":"flex","gap":"12px","padding":"8px 0","align-items":"center"})}"><div style="${S({"width":"44px","height":"44px","background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border":"0.5px solid rgba(255,255,255,0.7)","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","font-size":"20px","cursor":"pointer","box-shadow":"0 2px 12px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.6)"})}">←</div><div style="${S({"width":"44px","height":"44px","background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border":"0.5px solid rgba(255,255,255,0.7)","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","font-size":"20px","cursor":"pointer","box-shadow":"0 2px 12px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.6)"})}">⊕</div><div style="${S({"width":"44px","height":"44px","background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border":"0.5px solid rgba(255,255,255,0.7)","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","font-size":"18px","cursor":"pointer","box-shadow":"0 2px 12px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.6)"})}">⤢</div><div style="${S({"width":"44px","height":"44px","background":"rgba(255,0,0,0.12)","backdrop-filter":"blur(40px)","border":"0.5px solid rgba(255,59,48,0.3)","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","font-size":"18px","cursor":"pointer","color":"#ff3b30"})}">✕</div></div>` },
    { label: "Glass Card", icon: "◻", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(255,255,255,0.55)","backdrop-filter":"blur(40px) saturate(180%)","border":"0.5px solid rgba(255,255,255,0.7)","border-radius":"20px","padding":"20px","box-shadow":"0 4px 24px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.8)"})}"><div style="${S({"display":"flex","align-items":"center","gap":"12px","margin-bottom":"12px"})}"><div style="${S({"width":"44px","height":"44px","background":"linear-gradient(135deg,#007aff,#5856d6)","border-radius":"12px","display":"flex","align-items":"center","justify-content":"center","font-size":"22px"})}">🎵</div><div><p style="${S({"font-size":"17px","font-weight":"600","color":"#000","margin":"0"})}">Now Playing</p><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"2px 0 0"})}">Blinding Lights · The Weeknd</p></div></div><div style="${S({"height":"3px","background":"rgba(0,0,0,0.08)","border-radius":"2px","overflow":"hidden"})}"><div style="${S({"width":"42%","height":"100%","background":"#007aff","border-radius":"2px"})}"></div></div></div>` },
    { label: "Glass Context Menu", icon: "☰", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(255,255,255,0.72)","backdrop-filter":"blur(40px) saturate(200%)","border":"0.5px solid rgba(255,255,255,0.6)","border-radius":"14px","overflow":"hidden","width":"220px","box-shadow":"0 8px 40px rgba(0,0,0,0.18)"})}"><button style="${S({"display":"flex","align-items":"center","justify-content":"space-between","width":"100%","padding":"13px 16px","font-size":"17px","color":"#000","background":"none","border":"none","border-bottom":"0.5px solid rgba(0,0,0,0.08)","cursor":"pointer","text-align":"left"})}"><span>Copy</span><span>⊞</span></button><button style="${S({"display":"flex","align-items":"center","justify-content":"space-between","width":"100%","padding":"13px 16px","font-size":"17px","color":"#000","background":"none","border":"none","border-bottom":"0.5px solid rgba(0,0,0,0.08)","cursor":"pointer","text-align":"left"})}"><span>Share…</span><span>⬆</span></button><button style="${S({"display":"flex","align-items":"center","justify-content":"space-between","width":"100%","padding":"13px 16px","font-size":"17px","color":"#000","background":"none","border":"none","border-bottom":"0.5px solid rgba(0,0,0,0.08)","cursor":"pointer","text-align":"left"})}"><span>Bookmark</span><span>🔖</span></button><button style="${S({"display":"flex","align-items":"center","justify-content":"space-between","width":"100%","padding":"13px 16px","font-size":"17px","color":"#ff3b30","background":"none","border":"none","cursor":"pointer","text-align":"left"})}"><span>Delete</span><span>🗑</span></button></div>` },
  ]},

  { category: "iOS — Pickers", items: [
    { label: "Date Wheel", icon: "⊙", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"14px","overflow":"hidden","position":"relative"})}"><div style="${S({"position":"absolute","top":"50%","left":"0","right":"0","height":"44px","transform":"translateY(-50%)","background":"rgba(118,118,128,0.1)","pointer-events":"none","z-index":"1","border-top":"0.5px solid rgba(0,0,0,0.1)","border-bottom":"0.5px solid rgba(0,0,0,0.1)"})}"></div><div style="${S({"display":"grid","grid-template-columns":"1.4fr 0.8fr 1fr","text-align":"center","height":"180px"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","justify-content":"center"})}"><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">March</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">April</div><div style="${S({"padding":"11px 0","font-size":"19px","font-weight":"600","color":"#000"})}">May</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">June</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">July</div></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","justify-content":"center"})}"><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">6</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">7</div><div style="${S({"padding":"11px 0","font-size":"19px","font-weight":"600","color":"#000"})}">8</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">9</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">10</div></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","justify-content":"center"})}"><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">2024</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">2025</div><div style="${S({"padding":"11px 0","font-size":"19px","font-weight":"600","color":"#000"})}">2026</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.4"})}">2027</div></div></div></div>` },
    { label: "Calendar", icon: "📅", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"14px","padding":"16px"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","margin-bottom":"16px"})}"><button style="${S({"background":"none","border":"none","font-size":"20px","color":"#007aff","cursor":"pointer","padding":"0"})}">‹</button><p style="${S({"font-size":"17px","font-weight":"600","color":"#000","margin":"0"})}">May 2026</p><button style="${S({"background":"none","border":"none","font-size":"20px","color":"#007aff","cursor":"pointer","padding":"0"})}">›</button></div><div style="${S({"display":"grid","grid-template-columns":"repeat(7,1fr)","gap":"4px","text-align":"center"})}"><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">S</span><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">M</span><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">T</span><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">W</span><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">T</span><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">F</span><span style="${S({"font-size":"12px","font-weight":"600","color":"#8e8e93"})}">S</span><span></span><span></span><span></span><span></span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">1</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">2</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">3</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">4</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">5</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">6</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">7</span><div style="${S({"width":"30px","height":"30px","background":"#007aff","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","font-size":"15px","font-weight":"600","color":"#fff","margin":"0 auto"})}">8</div><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">9</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">10</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">11</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">12</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">13</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">14</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">15</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">16</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">17</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">18</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">19</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">20</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">21</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">22</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">23</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">24</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">25</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">26</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">27</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">28</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">29</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">30</span><span style="${S({"font-size":"15px","color":"#000","padding":"4px 0"})}">31</span></div></div>` },
    { label: "Time Picker", icon: "🕐", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"14px","overflow":"hidden","position":"relative"})}"><div style="${S({"position":"absolute","top":"50%","left":"0","right":"0","height":"44px","transform":"translateY(-50%)","background":"rgba(118,118,128,0.1)","pointer-events":"none","z-index":"1","border-top":"0.5px solid rgba(0,0,0,0.1)","border-bottom":"0.5px solid rgba(0,0,0,0.1)"})}"></div><div style="${S({"display":"grid","grid-template-columns":"1fr 0.4fr 1fr 1fr","text-align":"center","height":"160px"})}"><div style="${S({"display":"flex","flex-direction":"column","justify-content":"center","align-items":"center"})}"><div style="${S({"padding":"10px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">11</div><div style="${S({"padding":"10px 0","font-size":"19px","font-weight":"600","color":"#000"})}">12</div><div style="${S({"padding":"10px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">1</div></div><div style="${S({"display":"flex","align-items":"center","justify-content":"center","font-size":"22px","font-weight":"700","color":"#000"})}">:</div><div style="${S({"display":"flex","flex-direction":"column","justify-content":"center","align-items":"center"})}"><div style="${S({"padding":"10px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">58</div><div style="${S({"padding":"10px 0","font-size":"19px","font-weight":"600","color":"#000"})}">00</div><div style="${S({"padding":"10px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">01</div></div><div style="${S({"display":"flex","flex-direction":"column","justify-content":"center","align-items":"center"})}"><div style="${S({"padding":"10px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">PM</div><div style="${S({"padding":"10px 0","font-size":"19px","font-weight":"600","color":"#000"})}">AM</div><div style="${S({"padding":"10px 0","font-size":"17px","color":"#8e8e93","opacity":"0.5"})}">PM</div></div></div></div>` },
    { label: "Wheel Picker", icon: "⊙", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"14px","overflow":"hidden","position":"relative"})}"><div style="${S({"position":"absolute","top":"50%","left":"8px","right":"8px","height":"44px","transform":"translateY(-50%)","background":"rgba(118,118,128,0.12)","pointer-events":"none","z-index":"1","border-radius":"8px"})}"></div><div style="${S({"text-align":"center","height":"180px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center"})}"><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.4"})}">Large</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">Medium</div><div style="${S({"padding":"11px 0","font-size":"19px","font-weight":"600","color":"#000"})}">Small</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.7"})}">X-Small</div><div style="${S({"padding":"11px 0","font-size":"17px","color":"#8e8e93","opacity":"0.4"})}">XX-Small</div></div></div>` },
    { label: "Color Picker", icon: "🎨", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","border-radius":"14px","padding":"16px"})}"><p style="${S({"font-size":"13px","font-weight":"600","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0 0 12px"})}">Color</p><div style="${S({"display":"grid","grid-template-columns":"repeat(7,1fr)","gap":"8px","margin-bottom":"12px"})}"><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#ff3b30","box-shadow":"0 0 0 3px #fff,0 0 0 5px #007aff"})}"></div><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#ff9500"})}"></div><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#ffcc00"})}"></div><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#34c759"})}"></div><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#007aff"})}"></div><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#5856d6"})}"></div><div style="${S({"width":"32px","height":"32px","border-radius":"50%","background":"#ff2d55"})}"></div></div><div style="${S({"height":"12px","border-radius":"6px","background":"linear-gradient(90deg,#ff3b30,#ff9500,#ffcc00,#34c759,#007aff,#5856d6,#ff2d55)"})}"></div></div>` },
  ]},

  { category: "iOS — Keyboard", items: [
    { label: "QWERTY Light", icon: "⌨", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#d1d5db","padding":"8px 4px 4px","border-radius":"0 0 16px 16px"})}"><div style="${S({"display":"flex","justify-content":"center","gap":"5px","margin-bottom":"8px"})}"><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">Q</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">W</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">E</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">R</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">T</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">Y</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">U</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">I</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">O</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">P</div></div><div style="${S({"display":"flex","justify-content":"center","gap":"5px","margin-bottom":"8px"})}"><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">A</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">S</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">D</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">F</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">G</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">H</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">J</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">K</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">L</div></div><div style="${S({"display":"flex","justify-content":"center","gap":"5px","margin-bottom":"8px","align-items":"center"})}"><div style="${S({"background":"#adb5bd","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">⇧</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">Z</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">X</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">C</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">V</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">B</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">N</div><div style="${S({"background":"#fff","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">M</div><div style="${S({"background":"#adb5bd","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">⌫</div></div><div style="${S({"display":"flex","justify-content":"center","gap":"5px","padding-bottom":"4px"})}"><div style="${S({"background":"#adb5bd","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"12px","color":"#000","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">123</div><div style="${S({"background":"#adb5bd","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"18px","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">😊</div><div style="${S({"background":"#fff","border-radius":"5px","flex":"1","max-width":"150px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"15px","color":"#8e8e93","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">space</div><div style="${S({"background":"#007aff","border-radius":"5px","width":"76px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"15px","font-weight":"600","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.4)"})}">return</div></div></div>` },
    { label: "QWERTY Dark", icon: "⌨", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#1c1c1e","padding":"8px 4px 4px","border-radius":"0 0 16px 16px"})}"><div style="${S({"display":"flex","justify-content":"center","gap":"5px","margin-bottom":"8px"})}"><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">Q</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">W</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">E</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">R</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">T</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">Y</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">U</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">I</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">O</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">P</div></div><div style="${S({"display":"flex","justify-content":"center","gap":"5px","margin-bottom":"8px"})}"><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">A</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">S</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">D</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">F</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">G</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">H</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">J</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">K</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">L</div></div><div style="${S({"display":"flex","justify-content":"center","gap":"5px","margin-bottom":"8px","align-items":"center"})}"><div style="${S({"background":"#636366","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">⇧</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">Z</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">X</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">C</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">V</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">B</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">N</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","width":"31px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">M</div><div style="${S({"background":"#636366","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"16px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">⌫</div></div><div style="${S({"display":"flex","justify-content":"center","gap":"5px","padding-bottom":"4px"})}"><div style="${S({"background":"#636366","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"12px","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">123</div><div style="${S({"background":"#636366","border-radius":"5px","width":"42px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"18px","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">😊</div><div style="${S({"background":"#3a3a3c","border-radius":"5px","flex":"1","max-width":"150px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"15px","color":"#8e8e93","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">space</div><div style="${S({"background":"#007aff","border-radius":"5px","width":"76px","height":"42px","display":"flex","align-items":"center","justify-content":"center","font-size":"15px","font-weight":"600","color":"#fff","box-shadow":"0 1px 0 rgba(0,0,0,0.6)"})}">return</div></div></div>` },
    { label: "Number Pad", icon: "#", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#d1d5db","padding":"8px 4px","border-radius":"0 0 16px 16px"})}"><div style="${S({"display":"grid","grid-template-columns":"repeat(3,1fr)","gap":"10px 10px","padding":"0 8px"})}"><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">1</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">2</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">ABC</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">3</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">DEF</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">4</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">GHI</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">5</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">JKL</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">6</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">MNO</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">7</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">PQRS</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">8</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">TUV</span></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"22px","color":"#000","font-weight":"300"})}">9</span><span style="${S({"font-size":"9px","color":"#000","letter-spacing":"1px","opacity":"0.6"})}">WXYZ</span></div><div style="${S({"border-radius":"10px","height":"54px"})}"></div><div style="${S({"background":"#fff","border-radius":"10px","height":"54px","display":"flex","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)"})}"><span style="${S({"font-size":"28px","color":"#000","font-weight":"300"})}">0</span></div><div style="${S({"background":"#adb5bd","border-radius":"10px","height":"54px","display":"flex","align-items":"center","justify-content":"center","cursor":"pointer","box-shadow":"0 1px 0 rgba(0,0,0,0.35)","font-size":"22px","color":"#000"})}">⌫</div></div></div>` },
    { label: "Keyboard Toolbar", icon: "⬆", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(242,242,247,0.95)","backdrop-filter":"blur(20px)","border-top":"0.5px solid #c6c6c8","padding":"8px 16px","display":"flex","align-items":"center","justify-content":"space-between","height":"44px"})}"><div style="${S({"display":"flex","gap":"20px","align-items":"center"})}"><span style="${S({"font-size":"22px","color":"#8e8e93"})}">←</span><span style="${S({"font-size":"22px","color":"#8e8e93"})}">→</span></div><div style="${S({"display":"flex","gap":"16px","align-items":"center"})}"><span style="${S({"font-size":"15px","color":"#007aff"})}">Paste</span><span style="${S({"font-size":"15px","color":"#007aff"})}">Bold</span><span style="${S({"font-size":"15px","color":"#007aff"})}">Italic</span></div><span style="${S({"font-size":"15px","color":"#007aff","font-weight":"600"})}">Done</span></div>` },
  ]},

  { category: "iOS — Live Activities", items: [
    { label: "D.I. Compact Music", icon: "◉", html: `<div style="${S({"font-family":"system-ui,-apple-system","display":"flex","justify-content":"center","padding":"12px 0","background":"#000","border-radius":"20px"})}"><div style="${S({"background":"#000","border-radius":"20px","padding":"8px 20px","display":"flex","align-items":"center","gap":"10px","box-shadow":"0 0 0 1.5px #1c1c1e"})}"><div style="${S({"width":"8px","height":"8px","background":"#1c1c1e","border-radius":"50%"})}"></div><div style="${S({"width":"24px","height":"24px","background":"linear-gradient(135deg,#1db954,#191414)","border-radius":"6px","display":"flex","align-items":"center","justify-content":"center","font-size":"14px"})}">♪</div><div><p style="${S({"font-size":"12px","font-weight":"600","color":"#fff","margin":"0","line-height":"1"})}">Blinding Lights</p><p style="${S({"font-size":"10px","color":"rgba(255,255,255,0.6)","margin":"1px 0 0"})}">The Weeknd</p></div><div style="${S({"display":"flex","gap":"12px","margin-left":"8px"})}"><span style="${S({"color":"#fff","font-size":"18px"})}">⏸</span><span style="${S({"color":"#fff","font-size":"18px"})}">⏭</span></div></div></div>` },
    { label: "D.I. Expanded Music", icon: "◉", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#000","border-radius":"40px","padding":"20px","max-width":"360px","margin":"0 auto"})}"><div style="${S({"display":"flex","align-items":"center","justify-content":"space-between","margin-bottom":"16px"})}"><div style="${S({"display":"flex","align-items":"center","gap":"10px"})}"><div style="${S({"width":"40px","height":"40px","background":"linear-gradient(135deg,#1db954,#191414)","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","font-size":"20px"})}">♪</div><div><p style="${S({"font-size":"15px","font-weight":"600","color":"#fff","margin":"0"})}">Blinding Lights</p><p style="${S({"font-size":"13px","color":"rgba(255,255,255,0.6)","margin":"2px 0 0"})}">The Weeknd · After Hours</p></div></div><span style="${S({"color":"rgba(255,255,255,0.4)","font-size":"13px"})}">Spotify</span></div><div style="${S({"height":"3px","background":"rgba(255,255,255,0.15)","border-radius":"2px","margin-bottom":"8px"})}"><div style="${S({"width":"42%","height":"100%","background":"#fff","border-radius":"2px"})}"></div></div><div style="${S({"display":"flex","justify-content":"space-between","font-size":"12px","color":"rgba(255,255,255,0.5)","margin-bottom":"16px"})}"><span>1:47</span><span>4:12</span></div><div style="${S({"display":"flex","justify-content":"center","gap":"28px","align-items":"center"})}"><span style="${S({"color":"#fff","font-size":"22px"})}">⏮</span><div style="${S({"width":"52px","height":"52px","background":"#fff","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","font-size":"24px","color":"#000"})}">⏸</div><span style="${S({"color":"#fff","font-size":"22px"})}">⏭</span></div></div>` },
    { label: "Live Activity Run", icon: "⏱", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(30,30,30,0.95)","backdrop-filter":"blur(40px)","border-radius":"20px","padding":"16px","box-shadow":"0 4px 24px rgba(0,0,0,0.4)"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"flex-start","margin-bottom":"12px"})}"><div style="${S({"display":"flex","gap":"10px","align-items":"center"})}"><div style="${S({"width":"36px","height":"36px","background":"linear-gradient(135deg,#ff375f,#ff9500)","border-radius":"9px","display":"flex","align-items":"center","justify-content":"center","font-size":"18px"})}">🏃</div><div><p style="${S({"font-size":"13px","font-weight":"600","color":"#fff","margin":"0"})}">Outdoor Run</p><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"2px 0 0"})}">Fitness · In Progress</p></div></div><p style="${S({"font-size":"24px","font-weight":"700","color":"#30d158","margin":"0"})}">24:31</p></div><div style="${S({"display":"grid","grid-template-columns":"1fr 1fr 1fr","gap":"8px","text-align":"center"})}"><div><p style="${S({"font-size":"18px","font-weight":"700","color":"#fff","margin":"0"})}">3.2</p><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"2px 0 0"})}">km</p></div><div><p style="${S({"font-size":"18px","font-weight":"700","color":"#fff","margin":"0"})}">5:43</p><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"2px 0 0"})}">/km</p></div><div><p style="${S({"font-size":"18px","font-weight":"700","color":"#fff","margin":"0"})}">284</p><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"2px 0 0"})}">cal</p></div></div></div>` },
    { label: "Live Activity Delivery", icon: "📦", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(255,255,255,0.95)","backdrop-filter":"blur(40px)","border-radius":"20px","padding":"16px","box-shadow":"0 4px 24px rgba(0,0,0,0.15)"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","margin-bottom":"12px"})}"><div style="${S({"display":"flex","gap":"10px","align-items":"center"})}"><div style="${S({"width":"36px","height":"36px","background":"linear-gradient(135deg,#ff9500,#ff3b30)","border-radius":"9px","display":"flex","align-items":"center","justify-content":"center","font-size":"18px"})}">📦</div><div><p style="${S({"font-size":"15px","font-weight":"600","color":"#000","margin":"0"})}">Package Arriving</p><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"2px 0 0"})}">2 stops away · ~8 min</p></div></div></div><div style="${S({"display":"flex","align-items":"center","gap":"8px","margin-bottom":"8px"})}"><div style="${S({"width":"12px","height":"12px","background":"#34c759","border-radius":"50%","flex-shrink":"0"})}"></div><div style="${S({"flex":"1","height":"4px","background":"#e5e5ea","border-radius":"2px","overflow":"hidden"})}"><div style="${S({"width":"75%","height":"100%","background":"#34c759","border-radius":"2px"})}"></div></div><div style="${S({"width":"12px","height":"12px","border":"2px solid #e5e5ea","border-radius":"50%","flex-shrink":"0"})}"></div></div><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"0","text-align":"center"})}">Est. delivery: 3:45 PM</p></div>` },
  ]},

  { category: "iOS — System", items: [
    { label: "Control Center", icon: "⊞", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(28,28,30,0.92)","backdrop-filter":"blur(40px)","border-radius":"32px","padding":"20px","display":"grid","grid-template-columns":"1fr 1fr","gap":"12px","max-width":"280px"})}"><div style="${S({"background":"rgba(255,255,255,0.15)","border-radius":"18px","padding":"14px","display":"flex","align-items":"center","gap":"10px","grid-column":"span 2"})}"><div style="${S({"width":"8px","height":"8px","background":"#34c759","border-radius":"50%"})}"></div><div style="${S({"flex":"1","height":"3px","background":"rgba(255,255,255,0.3)","border-radius":"2px"})}"><div style="${S({"width":"70%","height":"100%","background":"#fff","border-radius":"2px"})}"></div></div><span style="${S({"font-size":"13px","color":"#fff","font-weight":"500"})}">WiFi</span></div><div style="${S({"background":"rgba(0,122,255,0.8)","border-radius":"18px","padding":"16px","display":"flex","flex-direction":"column","justify-content":"space-between","min-height":"80px"})}"><span style="${S({"font-size":"22px"})}">📶</span><p style="${S({"font-size":"12px","font-weight":"600","color":"#fff","margin":"0"})}">Cellular</p></div><div style="${S({"background":"rgba(255,255,255,0.1)","border-radius":"18px","padding":"16px","display":"flex","flex-direction":"column","justify-content":"space-between","min-height":"80px"})}"><span style="${S({"font-size":"22px","opacity":"0.4"})}">✈</span><p style="${S({"font-size":"12px","font-weight":"600","color":"rgba(255,255,255,0.5)","margin":"0"})}">Airplane</p></div><div style="${S({"background":"rgba(255,255,255,0.1)","border-radius":"18px","padding":"16px","display":"flex","flex-direction":"column","justify-content":"space-between","min-height":"80px"})}"><span style="${S({"font-size":"22px"})}">🔆</span><p style="${S({"font-size":"12px","font-weight":"600","color":"#fff","margin":"0"})}">Brightness</p></div><div style="${S({"background":"rgba(255,199,0,0.8)","border-radius":"18px","padding":"16px","display":"flex","flex-direction":"column","justify-content":"space-between","min-height":"80px"})}"><span style="${S({"font-size":"22px"})}">🔦</span><p style="${S({"font-size":"12px","font-weight":"600","color":"#000","margin":"0"})}">Torch</p></div><div style="${S({"background":"rgba(255,255,255,0.1)","border-radius":"18px","padding":"14px","display":"flex","align-items":"center","gap":"10px","grid-column":"span 2"})}"><span style="${S({"font-size":"20px"})}">🔊</span><div style="${S({"flex":"1","height":"3px","background":"rgba(255,255,255,0.2)","border-radius":"2px"})}"><div style="${S({"width":"60%","height":"100%","background":"#fff","border-radius":"2px"})}"></div></div></div></div>` },
    { label: "Spotlight Search", icon: "🔍", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"rgba(0,0,0,0.6)","backdrop-filter":"blur(20px)","padding":"56px 16px 16px","border-radius":"16px"})}"><div style="${S({"background":"rgba(255,255,255,0.15)","border-radius":"14px","padding":"10px 14px","display":"flex","align-items":"center","gap":"8px","margin-bottom":"16px"})}"><span style="${S({"font-size":"18px","color":"rgba(255,255,255,0.7)"})}">🔍</span><span style="${S({"font-size":"17px","color":"rgba(255,255,255,0.5)","flex":"1"})}">Search</span><span style="${S({"font-size":"15px","color":"rgba(255,255,255,0.6)"})}">Cancel</span></div><div style="${S({"display":"grid","grid-template-columns":"1fr 1fr","gap":"10px","margin-bottom":"16px"})}"><div style="${S({"background":"rgba(255,255,255,0.12)","border-radius":"14px","padding":"12px","display":"flex","align-items":"center","gap":"10px"})}"><div style="${S({"width":"36px","height":"36px","background":"#007aff","border-radius":"9px","display":"flex","align-items":"center","justify-content":"center","font-size":"18px","flex-shrink":"0"})}">⚙</div><div><p style="${S({"font-size":"13px","font-weight":"600","color":"#fff","margin":"0"})}">Settings</p><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"2px 0 0"})}">App</p></div></div><div style="${S({"background":"rgba(255,255,255,0.12)","border-radius":"14px","padding":"12px","display":"flex","align-items":"center","gap":"10px"})}"><div style="${S({"width":"36px","height":"36px","background":"#ffcc00","border-radius":"9px","display":"flex","align-items":"center","justify-content":"center","font-size":"18px","flex-shrink":"0"})}">📒</div><div><p style="${S({"font-size":"13px","font-weight":"600","color":"#fff","margin":"0"})}">Notes</p><p style="${S({"font-size":"11px","color":"rgba(255,255,255,0.5)","margin":"2px 0 0"})}">App</p></div></div></div><p style="${S({"font-size":"12px","font-weight":"600","color":"rgba(255,255,255,0.4)","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0 0 8px"})}">Siri Suggestions</p><div style="${S({"display":"flex","gap":"12px"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"60px"})}"><div style="${S({"width":"56px","height":"56px","background":"#34c759","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">💬</div><span style="${S({"font-size":"11px","color":"rgba(255,255,255,0.7)"})}">Messages</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"60px"})}"><div style="${S({"width":"56px","height":"56px","background":"#ff3b30","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">📺</div><span style="${S({"font-size":"11px","color":"rgba(255,255,255,0.7)"})}">TV</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"60px"})}"><div style="${S({"width":"56px","height":"56px","background":"#fc3c44","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"28px"})}">🎵</div><span style="${S({"font-size":"11px","color":"rgba(255,255,255,0.7)"})}">Music</span></div></div></div>` },
    { label: "App Switcher", icon: "⊟", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"linear-gradient(180deg,#1a1a2e,#0f3460)","padding":"40px 0 20px","min-height":"200px","border-radius":"20px","overflow":"hidden"})}"><div style="${S({"display":"flex","gap":"16px","overflow-x":"auto","padding":"0 40px"})}"><div style="${S({"min-width":"160px","border-radius":"18px","overflow":"hidden","box-shadow":"0 8px 32px rgba(0,0,0,0.4)","flex-shrink":"0"})}"><div style="${S({"height":"100px","background":"linear-gradient(135deg,#007aff,#5856d6)","display":"flex","align-items":"center","justify-content":"center","font-size":"40px"})}">📸</div><div style="${S({"padding":"10px","background":"#f2f2f7"})}"><p style="${S({"font-size":"13px","font-weight":"600","margin":"0","color":"#000"})}">Camera</p></div></div><div style="${S({"min-width":"160px","border-radius":"18px","overflow":"hidden","box-shadow":"0 8px 32px rgba(0,0,0,0.4)","flex-shrink":"0","opacity":"0.95","transform":"scale(0.95)"})}"><div style="${S({"height":"100px","background":"linear-gradient(135deg,#34c759,#32ade6)","display":"flex","align-items":"center","justify-content":"center","font-size":"40px"})}">💬</div><div style="${S({"padding":"10px","background":"#f2f2f7"})}"><p style="${S({"font-size":"13px","font-weight":"600","margin":"0","color":"#000"})}">Messages</p></div></div><div style="${S({"min-width":"160px","border-radius":"18px","overflow":"hidden","box-shadow":"0 8px 32px rgba(0,0,0,0.4)","flex-shrink":"0","opacity":"0.9","transform":"scale(0.9)"})}"><div style="${S({"height":"100px","background":"linear-gradient(135deg,#fc3c44,#ff2d55)","display":"flex","align-items":"center","justify-content":"center","font-size":"40px"})}">🎵</div><div style="${S({"padding":"10px","background":"#f2f2f7"})}"><p style="${S({"font-size":"13px","font-weight":"600","margin":"0","color":"#000"})}">Music</p></div></div></div></div>` },
    { label: "Notification Center", icon: "🔔", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"linear-gradient(180deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4))","backdrop-filter":"blur(20px)","padding":"56px 16px 16px","border-radius":"20px"})}"><p style="${S({"font-size":"13px","font-weight":"600","color":"rgba(255,255,255,0.5)","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0 0 10px"})}">Earlier</p><div style="${S({"display":"flex","flex-direction":"column","gap":"8px"})}"><div style="${S({"background":"rgba(255,255,255,0.88)","backdrop-filter":"blur(40px)","border-radius":"16px","padding":"14px 16px","display":"flex","gap":"12px"})}"><div style="${S({"width":"40px","height":"40px","background":"#007aff","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","font-size":"20px","flex-shrink":"0"})}">💬</div><div style="${S({"flex":"1"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","margin-bottom":"2px"})}"><span style="${S({"font-size":"15px","font-weight":"600","color":"#000"})}">Messages</span><span style="${S({"font-size":"13px","color":"#8e8e93"})}">9:41 AM</span></div><p style="${S({"font-size":"15px","color":"#000","margin":"0","line-height":"1.4"})}">Sara: Are you coming tonight?</p></div></div><div style="${S({"background":"rgba(255,255,255,0.88)","backdrop-filter":"blur(40px)","border-radius":"16px","padding":"14px 16px","display":"flex","gap":"12px"})}"><div style="${S({"width":"40px","height":"40px","background":"#ff3b30","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","font-size":"20px","flex-shrink":"0"})}">🔔</div><div style="${S({"flex":"1"})}"><div style="${S({"display":"flex","justify-content":"space-between","align-items":"center","margin-bottom":"2px"})}"><span style="${S({"font-size":"15px","font-weight":"600","color":"#000"})}">Reminders</span><span style="${S({"font-size":"13px","color":"#8e8e93"})}">8:00 AM</span></div><p style="${S({"font-size":"15px","color":"#000","margin":"0"})}">Call dentist</p></div></div></div></div>` },
    { label: "Share Sheet", icon: "⬆", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#f2f2f7","border-radius":"16px 16px 0 0"})}"><div style="${S({"background":"rgba(255,255,255,0.95)","backdrop-filter":"blur(40px)","border-radius":"16px 16px 0 0","padding":"12px 16px 16px"})}"><div style="${S({"display":"flex","justify-content":"center","margin-bottom":"16px"})}"><div style="${S({"width":"36px","height":"5px","background":"rgba(60,60,67,0.18)","border-radius":"3px"})}"></div></div><div style="${S({"display":"flex","gap":"16px","padding-bottom":"16px","border-bottom":"0.5px solid #e5e5ea","overflow-x":"auto"})}"><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"64px"})}"><div style="${S({"width":"56px","height":"56px","background":"#34c759","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"26px"})}">💬</div><span style="${S({"font-size":"11px","color":"#000"})}">Messages</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"64px"})}"><div style="${S({"width":"56px","height":"56px","background":"#007aff","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"26px"})}">📧</div><span style="${S({"font-size":"11px","color":"#000"})}">Mail</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"64px"})}"><div style="${S({"width":"56px","height":"56px","background":"#e5e5ea","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"26px"})}">📋</div><span style="${S({"font-size":"11px","color":"#000"})}">Copy</span></div><div style="${S({"display":"flex","flex-direction":"column","align-items":"center","gap":"6px","min-width":"64px"})}"><div style="${S({"width":"56px","height":"56px","background":"#ff9500","border-radius":"14px","display":"flex","align-items":"center","justify-content":"center","font-size":"26px"})}">🔖</div><span style="${S({"font-size":"11px","color":"#000"})}">Save</span></div></div><button style="${S({"display":"block","width":"100%","padding":"14px 16px","font-size":"17px","color":"#000","background":"none","border":"none","border-bottom":"0.5px solid #e5e5ea","cursor":"pointer","text-align":"left"})}">Add Bookmark</button><button style="${S({"display":"block","width":"100%","padding":"14px 16px","font-size":"17px","color":"#000","background":"none","border":"none","cursor":"pointer","text-align":"left"})}">Add to Reading List</button></div><button style="${S({"display":"block","width":"calc(100% - 32px)","margin":"8px 16px 0","padding":"14px","font-size":"17px","font-weight":"600","color":"#007aff","background":"#fff","border":"none","border-radius":"14px","cursor":"pointer","text-align":"center"})}">Cancel</button></div>` },
  ]},

  { category: "iOS — Typography", items: [
    { label: "SF Text Styles", icon: "Aa", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"20px","border-radius":"14px"})}"><p style="${S({"font-size":"34px","font-weight":"700","color":"#000","margin":"0 0 4px","letter-spacing":"-0.5px","line-height":"1.1"})}">Large Title</p><p style="${S({"font-size":"28px","font-weight":"700","color":"#000","margin":"0 0 4px","letter-spacing":"-0.3px"})}">Title 1</p><p style="${S({"font-size":"22px","font-weight":"700","color":"#000","margin":"0 0 4px"})}">Title 2</p><p style="${S({"font-size":"20px","font-weight":"600","color":"#000","margin":"0 0 4px"})}">Title 3</p><p style="${S({"font-size":"17px","font-weight":"600","color":"#000","margin":"0 0 4px"})}">Headline</p><p style="${S({"font-size":"17px","font-weight":"400","color":"#000","margin":"0 0 4px","line-height":"1.5"})}">Body — The quick brown fox jumps over the lazy dog.</p><p style="${S({"font-size":"16px","color":"#000","margin":"0 0 4px"})}">Callout</p><p style="${S({"font-size":"15px","color":"#000","margin":"0 0 4px"})}">Subheadline</p><p style="${S({"font-size":"13px","color":"#8e8e93","margin":"0 0 4px"})}">Footnote</p><p style="${S({"font-size":"12px","color":"#8e8e93","margin":"0 0 4px"})}">Caption 1</p><p style="${S({"font-size":"11px","color":"#8e8e93","margin":"0"})}">Caption 2</p></div>` },
    { label: "SF System Colors", icon: "🎨", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"16px","border-radius":"14px"})}"><p style="${S({"font-size":"13px","font-weight":"600","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0 0 12px"})}">System Colors</p><div style="${S({"display":"grid","grid-template-columns":"1fr 1fr","gap":"8px"})}"><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#007aff","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Blue #007AFF</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#34c759","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Green #34C759</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#ff3b30","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Red #FF3B30</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#ff9500","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Orange #FF9500</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#ffcc00","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Yellow #FFCC00</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#5856d6","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Purple #5856D6</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#ff2d55","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Pink #FF2D55</span></div><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"width":"28px","height":"28px","background":"#8e8e93","border-radius":"7px"})}"></div><span style="${S({"font-size":"13px","color":"#000"})}">Gray #8E8E93</span></div></div></div>` },
    { label: "SF Symbols", icon: "⊙", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"16px","border-radius":"14px"})}"><p style="${S({"font-size":"13px","font-weight":"600","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0 0 12px"})}">Common Symbols</p><div style="${S({"display":"grid","grid-template-columns":"repeat(6,1fr)","gap":"12px","text-align":"center"})}"><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">⚙</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">gear</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">🔍</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">magnify</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">🏠</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">house</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">⭐</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">star</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">❤</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">heart</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">🔖</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">bookmark</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">📤</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">share</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">⊕</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">plus.circle</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">✏</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">pencil</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">🗑</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">trash</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">👤</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">person</span></div><div style="${S({"display":"flex","flex-direction":"column","gap":"4px","align-items":"center"})}"><span style="${S({"font-size":"24px","color":"#007aff"})}">🔔</span><span style="${S({"font-size":"9px","color":"#8e8e93"})}">bell</span></div></div></div>` },
    { label: "Inline Tags", icon: "T", html: `<div style="${S({"font-family":"system-ui,-apple-system","background":"#fff","padding":"16px","border-radius":"14px"})}"><p style="${S({"font-size":"17px","font-weight":"700","color":"#000","margin":"0 0 8px"})}">Bold heading</p><p style="${S({"font-size":"17px","color":"#000","margin":"0 0 16px","line-height":"1.6"})}">Regular body. <em>Italic emphasis.</em> <strong>Bold inline.</strong></p><div style="${S({"display":"flex","gap":"8px","flex-wrap":"wrap"})}"><span style="${S({"background":"rgba(0,122,255,0.1)","color":"#007aff","font-size":"13px","font-weight":"600","padding":"4px 10px","border-radius":"20px"})}">Design</span><span style="${S({"background":"rgba(52,199,89,0.1)","color":"#34c759","font-size":"13px","font-weight":"600","padding":"4px 10px","border-radius":"20px"})}">iOS 26</span><span style="${S({"background":"rgba(255,59,48,0.1)","color":"#ff3b30","font-size":"13px","font-weight":"600","padding":"4px 10px","border-radius":"20px"})}">HIG</span><span style="${S({"background":"rgba(88,86,214,0.1)","color":"#5856d6","font-size":"13px","font-weight":"600","padding":"4px 10px","border-radius":"20px"})}">Swift</span></div></div>` },
  ]},

  // ── macOS UI Kit ──────────────────────────────────────────────────────────────
  { category: "macOS — Controls", items: [
    { label: "Button Default", icon: "⬜", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","padding":"2px 0"})}"><button style="${S({"background":"rgba(0,0,0,0.06)","color":"#000","font-size":"13px","font-weight":"400","padding":"3px 14px","border-radius":"6px","border":"0.5px solid rgba(0,0,0,0.15)","cursor":"pointer","height":"22px","line-height":"1"})}">Cancel</button></div>` },
    { label: "Button Primary", icon: "⬛", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","padding":"2px 0"})}"><button style="${S({"background":"#007aff","color":"#fff","font-size":"13px","font-weight":"400","padding":"3px 14px","border-radius":"6px","border":"none","cursor":"pointer","height":"22px","line-height":"1"})}">OK</button></div>` },
    { label: "Checkbox On", icon: "☑", html: `<div style="${S({"display":"flex","align-items":"center","gap":"7px","font-family":"-apple-system,BlinkMacSystemFont","font-size":"13px","cursor":"pointer"})}"><div style="${S({"width":"14px","height":"14px","background":"#007aff","border-radius":"3px","display":"flex","align-items":"center","justify-content":"center","flex-shrink":"0"})}"><span style="${S({"color":"#fff","font-size":"10px","font-weight":"700"})}">✓</span></div><span style="${S({"color":"#000"})}">Enable feature</span></div>` },
    { label: "Checkbox Off", icon: "☐", html: `<div style="${S({"display":"flex","align-items":"center","gap":"7px","font-family":"-apple-system,BlinkMacSystemFont","font-size":"13px","cursor":"pointer"})}"><div style="${S({"width":"14px","height":"14px","background":"#fff","border":"1px solid #c6c6c8","border-radius":"3px","flex-shrink":"0"})}"></div><span style="${S({"color":"#000"})}">Enable feature</span></div>` },
    { label: "Radio On", icon: "●", html: `<div style="${S({"display":"flex","align-items":"center","gap":"7px","font-family":"-apple-system,BlinkMacSystemFont","font-size":"13px","cursor":"pointer"})}"><div style="${S({"width":"14px","height":"14px","background":"#fff","border":"1px solid #007aff","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","flex-shrink":"0"})}"><div style="${S({"width":"7px","height":"7px","background":"#007aff","border-radius":"50%"})}"></div></div><span style="${S({"color":"#000"})}">Option 1</span></div>` },
    { label: "Toggle macOS", icon: "⊡", html: `<div style="${S({"display":"flex","align-items":"center","gap":"8px","font-family":"-apple-system,BlinkMacSystemFont","font-size":"13px"})}"><div style="${S({"width":"38px","height":"22px","background":"#34c759","border-radius":"11px","position":"relative","cursor":"pointer","flex-shrink":"0"})}"><div style="${S({"width":"18px","height":"18px","background":"#fff","border-radius":"50%","position":"absolute","top":"2px","right":"2px","box-shadow":"0 1px 3px rgba(0,0,0,0.25)"})}"></div></div><span>Enabled</span></div>` },
    { label: "Segmented macOS", icon: "▬", html: `<div style="${S({"display":"inline-flex","font-family":"-apple-system,BlinkMacSystemFont","font-size":"13px","background":"rgba(0,0,0,0.05)","border-radius":"6px","padding":"2px","gap":"1px"})}"><button style="${S({"background":"#fff","border":"0.5px solid rgba(0,0,0,0.1)","border-radius":"5px","padding":"3px 14px","font-size":"13px","cursor":"pointer","color":"#000","box-shadow":"0 1px 2px rgba(0,0,0,0.08)"})}">Grid</button><button style="${S({"background":"none","border":"none","border-radius":"4px","padding":"3px 14px","font-size":"13px","cursor":"pointer","color":"#000"})}">List</button><button style="${S({"background":"none","border":"none","border-radius":"4px","padding":"3px 14px","font-size":"13px","cursor":"pointer","color":"#000"})}">Columns</button></div>` },
    { label: "Text Field macOS", icon: "✎", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","padding":"2px 0"})}"><div style="${S({"background":"#fff","border":"1px solid rgba(0,0,0,0.2)","border-radius":"5px","padding":"3px 8px","font-size":"13px","color":"#8e8e93","display":"flex","align-items":"center","height":"22px"})}">Search…</div></div>` },
    { label: "Dropdown macOS", icon: "▾", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","padding":"2px 0"})}"><div style="${S({"background":"rgba(0,0,0,0.04)","border":"0.5px solid rgba(0,0,0,0.15)","border-radius":"6px","padding":"3px 10px","font-size":"13px","color":"#000","display":"inline-flex","align-items":"center","gap":"24px","cursor":"pointer","height":"22px"})}"><span>Medium</span><span style="${S({"font-size":"10px","color":"#8e8e93"})}">▾</span></div></div>` },
    { label: "Slider macOS", icon: "⇔", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","padding":"8px 0"})}"><div style="${S({"display":"flex","align-items":"center","gap":"8px"})}"><div style="${S({"flex":"1","height":"3px","background":"#e5e5ea","border-radius":"1.5px","position":"relative"})}"><div style="${S({"width":"55%","height":"100%","background":"#007aff","border-radius":"1.5px"})}"></div><div style="${S({"width":"14px","height":"14px","background":"#fff","border-radius":"50%","position":"absolute","top":"-5.5px","left":"calc(55% - 7px)","box-shadow":"0 1px 4px rgba(0,0,0,0.3)"})}"></div></div></div></div>` },
  ]},
  { category: "macOS — Layout", items: [
    { label: "Window Chrome", icon: "⬜", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","background":"#ebebeb","border-radius":"10px","overflow":"hidden","box-shadow":"0 4px 40px rgba(0,0,0,0.25)"})}"><div style="${S({"background":"linear-gradient(180deg,#f6f6f6,#e8e8e8)","padding":"10px 16px","display":"flex","align-items":"center","gap":"12px","border-bottom":"0.5px solid #c8c8c8"})}"><div style="${S({"display":"flex","gap":"8px"})}"><div style="${S({"width":"12px","height":"12px","background":"#ff5f57","border-radius":"50%"})}"></div><div style="${S({"width":"12px","height":"12px","background":"#febc2e","border-radius":"50%"})}"></div><div style="${S({"width":"12px","height":"12px","background":"#28c840","border-radius":"50%"})}"></div></div><div style="${S({"flex":"1","display":"flex","justify-content":"center"})}"><div style="${S({"background":"#fff","border":"0.5px solid #c8c8c8","border-radius":"5px","padding":"3px 12px","font-size":"12px","color":"#8e8e93","min-width":"200px","text-align":"center"})}">myapp.com</div></div></div><div style="${S({"height":"80px","background":"#fff","display":"flex","align-items":"center","justify-content":"center","color":"#d1d5db","font-size":"13px"})}">Content area</div></div>` },
    { label: "Sidebar", icon: "◫", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","background":"rgba(246,246,246,0.92)","padding":"8px 0","width":"200px"})}"><div style="${S({"padding":"4px 12px","margin":"0 0 4px"})}"><p style="${S({"font-size":"11px","font-weight":"700","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px","margin":"0","padding":"0 4px"})}">Library</p></div><div style="${S({"background":"#007aff","border-radius":"6px","padding":"5px 10px","margin":"0 8px 2px","display":"flex","align-items":"center","gap":"8px","color":"#fff","font-size":"13px"})}"><span>🏠</span><span>Home</span></div><div style="${S({"padding":"5px 10px","margin":"0 8px 2px","display":"flex","align-items":"center","gap":"8px","color":"#000","font-size":"13px"})}"><span>⭐</span><span>Favorites</span></div><div style="${S({"padding":"5px 10px","margin":"0 8px 2px","display":"flex","align-items":"center","gap":"8px","color":"#000","font-size":"13px"})}"><span>📁</span><span>Documents</span></div><div style="${S({"padding":"5px 10px","margin":"0 8px 2px","display":"flex","align-items":"center","gap":"8px","color":"#000","font-size":"13px"})}"><span>🗑</span><span>Trash</span></div></div>` },
    { label: "Menu Bar", icon: "▬", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","background":"rgba(236,236,236,0.85)","backdrop-filter":"blur(20px)","padding":"0 12px","height":"28px","display":"flex","align-items":"center","gap":"16px","font-size":"13px","color":"#000"})}"><span style="${S({"font-weight":"800","font-size":"15px"})}">&#9670;</span><span style="${S({"font-weight":"600"})}">File</span><span>Edit</span><span>View</span><span>Window</span><span>Help</span><div style="${S({"margin-left":"auto","display":"flex","gap":"12px","align-items":"center","color":"#000"})}"><span>📶</span><span>🔋</span><span>🔍</span><span>9:41 AM</span></div></div>` },
    { label: "Popover", icon: "💬", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","background":"rgba(255,255,255,0.98)","border-radius":"8px","box-shadow":"0 8px 40px rgba(0,0,0,0.2)","padding":"12px","width":"200px","border":"0.5px solid rgba(0,0,0,0.12)"})}"><p style="${S({"font-size":"13px","font-weight":"600","color":"#000","margin":"0 0 8px"})}">Sort by</p><div style="${S({"space-y":"4px"})}"><label style="${S({"display":"flex","align-items":"center","gap":"8px","padding":"4px 0","font-size":"13px","cursor":"pointer"})}"><span style="${S({"width":"14px","height":"14px","border-radius":"50%","border":"1px solid #007aff","display":"inline-flex","align-items":"center","justify-content":"center"})}"><span style="${S({"width":"7px","height":"7px","background":"#007aff","border-radius":"50%","display":"block"})}"></span></span>Date modified</label><label style="${S({"display":"flex","align-items":"center","gap":"8px","padding":"4px 0","font-size":"13px","cursor":"pointer"})}"><span style="${S({"width":"14px","height":"14px","border-radius":"50%","border":"1px solid #c6c6c8","display":"inline-flex"})}"></span>Name</label><label style="${S({"display":"flex","align-items":"center","gap":"8px","padding":"4px 0","font-size":"13px","cursor":"pointer"})}"><span style="${S({"width":"14px","height":"14px","border-radius":"50%","border":"1px solid #c6c6c8","display":"inline-flex"})}"></span>Size</label></div></div>` },
    { label: "Table Row", icon: "⊟", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","background":"#fff","border-bottom":"0.5px solid #e5e5ea"})}"><div style="${S({"display":"grid","grid-template-columns":"2fr 1fr 1fr 80px","gap":"0","align-items":"center","height":"32px","padding":"0 16px","font-size":"13px","color":"#000"})}"><span>document.pdf</span><span style="${S({"color":"#8e8e93"})}">Today, 9:41 AM</span><span style="${S({"color":"#8e8e93"})}">2.4 MB</span><span style="${S({"color":"#007aff","text-align":"right"})}">Open</span></div></div>` },
    { label: "Table Header", icon: "⊟⬛", html: `<div style="${S({"font-family":"-apple-system,BlinkMacSystemFont","background":"rgba(0,0,0,0.04)","border-bottom":"0.5px solid #c6c6c8"})}"><div style="${S({"display":"grid","grid-template-columns":"2fr 1fr 1fr 80px","gap":"0","align-items":"center","height":"28px","padding":"0 16px","font-size":"11px","font-weight":"600","color":"#8e8e93","text-transform":"uppercase","letter-spacing":"0.5px"})}"><span>Name</span><span>Modified</span><span>Size</span><span style="${S({"text-align":"right"})}">Actions</span></div></div>` },
  ]},
];

// ─── Storage ──────────────────────────────────────────────────────────────────
type StoredSection = { uid: string; name: string; file: string; html?: string; sectionBg?: string; sectionGradient?: string; paddingY?: number; sectionLinks?: SectionLink[]; textOverrides?: TextOverride[] };
type StoredPage = { id: string; name: string; sections: StoredSection[]; meta?: PageMeta; routeType?: RouteType; redirectTo?: string };
const LEGACY_KEY = "layout-builder-v2";
function getProjectId() {
  if (typeof window === "undefined") return "default";
  return new URLSearchParams(window.location.search).get("id") ?? "default";
}
function storageKey() { return `lsk-project-${getProjectId()}`; }

function findComponent(file: string): React.ComponentType | undefined {
  if (file === "__blank__") return BlankSection;
  for (const g of LIBRARY) {
    const f = g.items.find(i => i.file === file);
    if (f) return f.component;
  }
}

function serialize(pages: Page[]): StoredPage[] {
  return pages.map(p => ({
    id: p.id, name: p.name, meta: p.meta, routeType: p.routeType, redirectTo: p.redirectTo,
    sections: p.sections.map(s => ({ uid: s.uid, name: s.name, file: s.file, html: s.html, sectionBg: s.sectionBg, sectionGradient: s.sectionGradient, paddingY: s.paddingY, sectionLinks: s.sectionLinks, textOverrides: s.textOverrides })),
  }));
}

function deserialize(stored: StoredPage[]): Page[] {
  return stored.map(p => ({
    id: p.id, name: p.name, meta: p.meta, routeType: p.routeType, redirectTo: p.redirectTo,
    sections: p.sections.flatMap(s => {
      const component = findComponent(s.file);
      if (!component) return [];
      return [{ uid: s.uid, name: s.name, file: s.file, component, html: s.html, sectionBg: s.sectionBg, sectionGradient: s.sectionGradient, paddingY: s.paddingY, sectionLinks: s.sectionLinks, textOverrides: s.textOverrides }];
    }),
  }));
}

const genId = () => Math.random().toString(36).slice(2);

function blockToHtml(block: Block): string {
  const meta = JSON.stringify({
    x: Math.round(block.x), y: Math.round(block.y), w: block.w, h: block.h,
    rot: block.rotate, fh: block.flipH, fv: block.flipV,
    z: block.zIndex, locked: block.locked, hidden: block.hidden, nm: block.blockName,
    bg: block.blockBg, r: block.blockRadius, p: block.blockPadding, o: block.blockOpacity,
    sh: block.shadow, bd: block.border, bm: block.blendMode,
  });
  const styles: string[] = [];
  if (block.blockBg) styles.push(`background:${block.blockBg}`);
  if (block.blockRadius) styles.push(`border-radius:${block.blockRadius}px`);
  if (block.blockPadding) styles.push(`padding:${block.blockPadding}px`);
  if (block.blockOpacity !== undefined && block.blockOpacity < 100) styles.push(`opacity:${block.blockOpacity / 100}`);
  if (block.shadow) styles.push(`box-shadow:${shadowToCss(block.shadow)}`);
  if (block.border) styles.push(`border:${borderToCss(block.border)}`);
  if (block.blendMode && block.blendMode !== "normal") styles.push(`mix-blend-mode:${block.blendMode}`);
  const tf = blockTransformCss(block); if (tf) styles.push(`transform:${tf}`);
  if (block.hidden) styles.push("display:none");
  const st = styles.join(";");
  return `<div data-blk='${meta}'${st ? ` style="${st}"` : ""}>${block.html}</div>`;
}

function parseBlocks(html: string): Block[] {
  if (!html.trim()) return [{ id: genId(), html: "", x: 40, y: 40 }];
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  const blocks: Block[] = [];
  let y = 40;
  tmp.childNodes.forEach(node => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as Element;
    const ms = el.getAttribute("data-blk");
    if (ms) {
      try {
        const m = JSON.parse(ms);
        blocks.push({ id: genId(), html: el.innerHTML, x: m.x ?? 40, y: m.y ?? y, w: m.w, h: m.h, rotate: m.rot, flipH: m.fh, flipV: m.fv, zIndex: m.z, locked: m.locked, hidden: m.hidden, blockName: m.nm, blockBg: m.bg, blockRadius: m.r, blockPadding: m.p, blockOpacity: m.o, shadow: m.sh, border: m.bd, blendMode: m.bm });
        y = (m.y ?? y) + 80;
      } catch { blocks.push({ id: genId(), html: el.outerHTML, x: 40, y }); y += 80; }
    } else { blocks.push({ id: genId(), html: el.outerHTML, x: 40, y }); y += 80; }
  });
  return blocks.length ? blocks : [{ id: genId(), html: "", x: 40, y: 40 }];
}

// ─── Builder ──────────────────────────────────────────────────────────────────
export default function Builder() {
  // ── History
  const historyRef = useRef<{ stack: Page[][]; idx: number }>({ stack: [[{ id: "p1", name: "Page 1", sections: [] }]], idx: 0 });
  const [pages, setPages] = useState<Page[]>(() => {
    if (typeof window === "undefined") return [{ id: "p1", name: "Page 1", sections: [] }];
    try {
      const raw = localStorage.getItem(storageKey()) ?? localStorage.getItem(LEGACY_KEY);
      if (raw) { const r = deserialize(JSON.parse(raw)); if (r.length) return r; }
    } catch {}
    return [{ id: "p1", name: "Page 1", sections: [] }];
  });
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  function commitPages(newPages: Page[]) {
    const { stack, idx } = historyRef.current;
    const newStack = [...stack.slice(0, idx + 1), newPages].slice(-60);
    historyRef.current = { stack: newStack, idx: newStack.length - 1 };
    setPages(newPages); setCanUndo(newStack.length > 1); setCanRedo(false);
  }
  function undo() { const { stack, idx } = historyRef.current; if (idx <= 0) return; historyRef.current.idx = idx - 1; setPages(stack[idx - 1]); setCanUndo(idx - 1 > 0); setCanRedo(true); }
  function redo() { const { stack, idx } = historyRef.current; if (idx >= stack.length - 1) return; historyRef.current.idx = idx + 1; setPages(stack[idx + 1]); setCanUndo(true); setCanRedo(idx + 1 < stack.length - 1); }

  // ── UI state
  const [activePageId, setActivePageId] = useState(() => { if (typeof window === "undefined") return "p1"; try { const raw = localStorage.getItem(storageKey()) ?? localStorage.getItem(LEGACY_KEY); if (raw) return JSON.parse(raw)[0]?.id ?? "p1"; } catch {} return "p1"; });
  const [renamingPageId, setRenamingPageId] = useState<string | null>(null);
  const [sidebarTab, setSidebarTab] = useState<"components" | "elements">("components");
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState<Platform | "all">("all");
  const [preview, setPreview] = useState<Entry | null>(null);
  const [canvasMode, setCanvasMode] = useState<CanvasMode>("desktop");
  const [zoom, setZoom] = useState(FIT_ZOOM["desktop"]);
  const [snapGrid, setSnapGrid] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [pagesOverview, setPagesOverview] = useState(false);
  const [overviewSelId, setOverviewSelId] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<"select" | "rect" | "ellipse" | "line" | "text" | "frame" | "pan">("select");
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving">("saved");
  const [codeState, setCodeState] = useState<"idle" | "done">("idle");
  const [rnState, setRnState] = useState<"idle" | "done">("idle");
  const [rnCopied, setRnCopied] = useState(false);
  const [rnDeviceMode, setRnDeviceMode] = useState(false);
  const [rnProjectState, setRnProjectState] = useState<"idle" | "done">("idle");
  const [webProjectState, setWebProjectState] = useState<"idle" | "done">("idle");
  const [inspectorTab, setInspectorTab] = useState<"inspect" | "layers">("inspect");

  // ── Command palette
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState("");
  const [cmdIdx, setCmdIdx] = useState(0);
  const cmdRef = useRef<HTMLInputElement>(null);

  // ── Project settings
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [brandColor, setBrandColor] = useState("#6366f1");
  const [brandSecondary, setBrandSecondary] = useState("#10b981");
  const [brandFont, setBrandFont] = useState("");
  const [canvasBg, setCanvasBg] = useState("#f9fafb");
  const [customCSS, setCustomCSS] = useState("");

  // ── Copy section to page
  const [copyMenuUid, setCopyMenuUid] = useState<string | null>(null);

  // ── Shortcuts panel
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  // ── Section link editor
  const [linkEditorUid, setLinkEditorUid] = useState<string | null>(null);
  const [linkEditorItems, setLinkEditorItems] = useState<{ nth: number; tag: string; text: string; current: string }[]>([]);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // ── Text editor
  const [textEditorUid, setTextEditorUid] = useState<string | null>(null);
  const [textEditorItems, setTextEditorItems] = useState<{ nth: number; tag: string; text: string; current: string }[]>([]);


  // ── Routing panel
  const [routingOpen, setRoutingOpen] = useState(false);
  const [redirects, setRedirects] = useState<Redirect[]>([]);
  const [routingTab, setRoutingTab] = useState<"pages" | "redirects" | "links">("pages");
  const [editingMetaId, setEditingMetaId] = useState<string | null>(null);

  // ── Edit state
  const [editingUid, setEditingUid] = useState<string | null>(null);
  const [editingBlocks, setEditingBlocks] = useState<Block[] | null>(null);
  const [selectedBlockIds, setSelectedBlockIds] = useState<Set<string>>(new Set());
  const [lassoRect, setLassoRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [snapGuides, setSnapGuides] = useState<SnapGuide[]>([]);
  const [renamingBlockId, setRenamingBlockId] = useState<string | null>(null);
  const [shadowEnabled, setShadowEnabled] = useState(false);
  const [borderEnabled, setBorderEnabled] = useState(false);

  // ── Section drag
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);
  const dragIndex = useRef<number | null>(null);
  const dragOverIndex = useRef<number | null>(null);

  // ── Image popover
  const [imagePopover, setImagePopover] = useState(false);
  const [imageTab, setImageTab] = useState<"upload" | "url" | "library">("upload");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [libraryImages, setLibraryImages] = useState<{id:number;url:string;name:string}[]>([]);
  const [libraryLoading, setLibraryLoading] = useState(false);

  // ── Refs
  const savedRange = useRef<Range | null>(null);
  const textColorRef = useRef<HTMLInputElement>(null);
  const bgColorRef = useRef<HTMLInputElement>(null);
  const sectionContentRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const artboardRef = useRef<HTMLDivElement | null>(null);
  const canvasScrollRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const blockWrapperRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const zoomRef = useRef(75);
  const snapRef = useRef(false);
  const isPanningRef = useRef(false);
  const clipboardRef = useRef<Block[]>([]);
  const freeDragState = useRef<{
    blockIds: string[]; primaryId: string;
    startMouseX: number; startMouseY: number;
    startPositions: Map<string, { x: number; y: number }>;
    currentPositions: Map<string, { x: number; y: number }>;
    els: Map<string, HTMLDivElement | null>;
  } | null>(null);
  const resizeDragState = useRef<{
    blockId: string; handle: ResizeHandle;
    startMouseX: number; startMouseY: number;
    startX: number; startY: number; startW: number; startH: number;
    currentX: number; currentY: number; currentW: number; currentH: number;
    el: HTMLDivElement | null;
  } | null>(null);
  const rotateDragState = useRef<{ blockId: string; centerPageX: number; centerPageY: number } | null>(null);
  const lassoDragState = useRef<{ startCanvasX: number; startCanvasY: number; startClientX: number; startClientY: number } | null>(null);
  const panDragState = useRef<{ startMouseX: number; startMouseY: number; startScrollLeft: number; startScrollTop: number } | null>(null);
  const drawDragState = useRef<{ tool: string; startCanvasX: number; startCanvasY: number; startMouseX: number; startMouseY: number; x: number; y: number; w: number; h: number } | null>(null);
  const [drawRect, setDrawRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const activeToolRef = useRef<string>("select");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [elemPopup, setElemPopup] = useState<{ html: string; label: string; top: number } | null>(null);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const elemPopupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stateRef = useRef({ editingUid: null as string | null, selectedBlockIds: new Set<string>(), editingBlocks: null as Block[] | null });

  // ── Computed
  const activePage = pages.find(p => p.id === activePageId) ?? pages[0];
  const canvas = activePage?.sections ?? [];
  const selBlocks = (editingBlocks || []).filter(b => selectedBlockIds.has(b.id));
  const selBlock = selBlocks.length === 1 ? selBlocks[0] : null;
  const canvasWidth = CANVAS_WIDTHS[canvasMode];
  const layersSorted = [...(editingBlocks || [])].sort((a, b) => (b.zIndex ?? 0) - (a.zIndex ?? 0));
  useEffect(() => { activeToolRef.current = activeTool; }, [activeTool]);

  // ── Effects
  useEffect(() => {
    const link = document.createElement("link"); link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;700&family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&display=swap";
    document.head.appendChild(link); return () => { document.head.removeChild(link); };
  }, []);
  // Auto-configure canvas for project platform
  useEffect(() => {
    const id = getProjectId();
    if (id === "default") return;
    const meta = listProjects().find(p => p.id === id);
    if (meta?.type === "ios" || meta?.type === "android") {
      setCanvasMode("mobile");
      setRnDeviceMode(true);
      setPlatformFilter(meta.type);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setSaveStatus("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        const data = serialize(pages);
        const key = storageKey();
        localStorage.setItem(key, JSON.stringify(data));
        const id = getProjectId();
        if (id !== "default") {
          const meta = listProjects().find(p => p.id === id);
          saveProject(id, data, { name: meta?.name, type: meta?.type, pageCount: pages.length });
          if (meta) cloudSaveProject(id, data, { ...meta, pageCount: pages.length });
        }
      } catch {}
      setSaveStatus("saved");
    }, 600);
  }, [pages]);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);
  useEffect(() => { snapRef.current = snapGrid; }, [snapGrid]);
  // Auto fit-to-screen on mount and canvas mode change
  useEffect(() => {
    const container = canvasScrollRef.current;
    if (!container) return;
    function doFit() {
      if (!container) return;
      const available = container.clientWidth - 96;
      const computed = Math.floor((available / CANVAS_WIDTHS[canvasMode]) * 100);
      setZoom(Math.max(20, Math.min(200, computed)));
    }
    doFit();
    const ro = new ResizeObserver(doFit);
    ro.observe(container);
    return () => ro.disconnect();
  }, [canvasMode]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { stateRef.current = { editingUid, selectedBlockIds, editingBlocks }; });
  useEffect(() => { if (selBlock) { setShadowEnabled(!!selBlock.shadow); setBorderEnabled(!!selBlock.border); } }, [selBlock?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Command palette shortcut (Cmd/Ctrl+K) + ? for shortcuts
  useEffect(() => {
    function onGlobalKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement).isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setCmdOpen(o => !o); setCmdQuery(""); setCmdIdx(0); }
      if (e.key === "?" && !isInput) { e.preventDefault(); setShortcutsOpen(o => !o); }
      if (e.key === "Escape") { setCmdOpen(false); setSettingsOpen(false); setShortcutsOpen(false); setRoutingOpen(false); setCopyMenuUid(null); }
    }
    window.addEventListener("keydown", onGlobalKey);
    return () => window.removeEventListener("keydown", onGlobalKey);
  }, []);

  // Focus command palette input when opened
  useEffect(() => { if (cmdOpen) setTimeout(() => cmdRef.current?.focus(), 30); }, [cmdOpen]);

  // Apply section links + text overrides after render
  useEffect(() => {
    for (const sec of canvas) {
      if (sec.sectionLinks?.length) applySectionLinks(sec.uid);
      if (sec.textOverrides?.length) applyTextOverrides(sec.uid);
    }
  }); // runs every render — intentional, keeps overrides applied after React re-renders

  // Spacebar = pan mode
  useEffect(() => {
    function kd(e: KeyboardEvent) {
      if (e.key === " " && !e.repeat && !(e.target as HTMLElement).isContentEditable && (e.target as HTMLElement).tagName !== "INPUT" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
        e.preventDefault(); isPanningRef.current = true;
        if (canvasScrollRef.current) canvasScrollRef.current.style.cursor = "grab";
      }
    }
    function ku(e: KeyboardEvent) { if (e.key === " ") { isPanningRef.current = false; if (canvasScrollRef.current) canvasScrollRef.current.style.cursor = ""; } }
    window.addEventListener("keydown", kd); window.addEventListener("keyup", ku);
    return () => { window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); };
  }, []);

  // Unified mouse handler
  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      // Draw tool
      const dd = drawDragState.current;
      if (dd) {
        const scale = zoomRef.current / 100;
        const dx = (e.clientX - dd.startMouseX) / scale; const dy = (e.clientY - dd.startMouseY) / scale;
        const x = dx >= 0 ? dd.startCanvasX : dd.startCanvasX + dx;
        const y = dy >= 0 ? dd.startCanvasY : dd.startCanvasY + dy;
        const w = Math.abs(dx); const h = Math.abs(dy);
        dd.x = x; dd.y = y; dd.w = w; dd.h = h;
        setDrawRect({ x, y, w, h });
        return;
      }
      // Pan
      const pan = panDragState.current;
      if (pan && canvasScrollRef.current) { canvasScrollRef.current.scrollLeft = pan.startScrollLeft - (e.clientX - pan.startMouseX); canvasScrollRef.current.scrollTop = pan.startScrollTop - (e.clientY - pan.startMouseY); return; }
      // Rotate
      const rot = rotateDragState.current;
      if (rot) { const dx = e.clientX - rot.centerPageX; const dy = e.clientY - rot.centerPageY; const angle = Math.round(Math.atan2(dx, -dy) * 180 / Math.PI); setEditingBlocks(prev => prev?.map(b => b.id === rot.blockId ? { ...b, rotate: angle } : b) ?? prev); return; }
      // Resize
      const rs = resizeDragState.current;
      if (rs) {
        const scale = zoomRef.current / 100;
        const dx = (e.clientX - rs.startMouseX) / scale; const dy = (e.clientY - rs.startMouseY) / scale;
        let x = rs.startX, y = rs.startY, w = rs.startW, h = rs.startH;
        const hd = rs.handle;
        if (hd.includes("e")) w = Math.max(40, rs.startW + dx);
        if (hd.includes("s")) h = Math.max(20, rs.startH + dy);
        if (hd.includes("w")) { w = Math.max(40, rs.startW - dx); x = rs.startX + rs.startW - w; }
        if (hd.includes("n")) { h = Math.max(20, rs.startH - dy); y = rs.startY + rs.startH - h; }
        rs.currentX = Math.max(0, x); rs.currentY = Math.max(0, y); rs.currentW = w; rs.currentH = h;
        if (rs.el) { rs.el.style.left = `${rs.currentX}px`; rs.el.style.top = `${rs.currentY}px`; rs.el.style.width = `${w}px`; rs.el.style.height = `${h}px`; }
        return;
      }
      // Free drag
      const fd = freeDragState.current;
      if (fd) {
        const scale = zoomRef.current / 100;
        const dx = (e.clientX - fd.startMouseX) / scale; const dy = (e.clientY - fd.startMouseY) / scale;
        const psp = fd.startPositions.get(fd.primaryId)!;
        let nx = Math.max(0, psp.x + dx); let ny = Math.max(0, psp.y + dy);
        if (snapRef.current) { nx = Math.round(nx / SNAP) * SNAP; ny = Math.round(ny / SNAP) * SNAP; }
        // Element snap guides
        const guides: SnapGuide[] = [];
        if (!snapRef.current) {
          const allBlocks = stateRef.current.editingBlocks || [];
          const pb = allBlocks.find(b => b.id === fd.primaryId);
          if (pb) {
            const pw = blockWrapperRefs.current.get(fd.primaryId)?.offsetWidth ?? pb.w ?? 200;
            const ph = blockWrapperRefs.current.get(fd.primaryId)?.offsetHeight ?? pb.h ?? 100;
            outer: for (const sb of allBlocks) {
              if (fd.blockIds.includes(sb.id)) continue;
              const sw = blockWrapperRefs.current.get(sb.id)?.offsetWidth ?? sb.w ?? 200;
              const sh = blockWrapperRefs.current.get(sb.id)?.offsetHeight ?? sb.h ?? 100;
              const xChecks: [number, number, number][] = [[nx, sb.x, sb.x],[nx+pw/2, sb.x+sw/2, sb.x+sw/2],[nx+pw, sb.x+sw, sb.x+sw],[nx, sb.x+sw, sb.x+sw],[nx+pw, sb.x, sb.x]];
              for (const [a, b_, pos] of xChecks) { if (Math.abs(a - b_) < SNAP_EL) { nx = pos - (a - nx); guides.push({ type: "v", pos }); break; } }
              const yChecks: [number, number, number][] = [[ny, sb.y, sb.y],[ny+ph/2, sb.y+sh/2, sb.y+sh/2],[ny+ph, sb.y+sh, sb.y+sh],[ny, sb.y+sh, sb.y+sh],[ny+ph, sb.y, sb.y]];
              for (const [a, b_, pos] of yChecks) { if (Math.abs(a - b_) < SNAP_EL) { ny = pos - (a - ny); guides.push({ type: "h", pos }); break outer; } }
            }
          }
        }
        setSnapGuides(guides);
        const ox = nx - psp.x; const oy = ny - psp.y;
        for (const id of fd.blockIds) {
          const sp = fd.startPositions.get(id)!;
          const bx = Math.max(0, sp.x + ox); const by = Math.max(0, sp.y + oy);
          fd.currentPositions.set(id, { x: bx, y: by });
          const el = fd.els.get(id); if (el) { el.style.left = `${bx}px`; el.style.top = `${by}px`; }
        }
        return;
      }
      // Lasso
      const ls = lassoDragState.current;
      if (ls) {
        const scale = zoomRef.current / 100;
        const cx = ls.startCanvasX + (e.clientX - ls.startClientX) / scale;
        const cy = ls.startCanvasY + (e.clientY - ls.startClientY) / scale;
        setLassoRect({ x: Math.min(ls.startCanvasX, cx), y: Math.min(ls.startCanvasY, cy), w: Math.abs(cx - ls.startCanvasX), h: Math.abs(cy - ls.startCanvasY) });
      }
    }
    function onMouseUp() {
      // Draw tool commit
      const dd = drawDragState.current;
      if (dd) {
        drawDragState.current = null; setDrawRect(null);
        if (dd.w < 5 && dd.h < 5) return;
        const id = genId();
        const isLine = dd.tool === "line";
        let html = "";
        if (dd.tool === "rect" || dd.tool === "frame") html = `<div style="width:100%;height:100%;background:#e5e7eb;border-radius:4px;"></div>`;
        else if (dd.tool === "ellipse") html = `<div style="width:100%;height:100%;background:#e5e7eb;border-radius:50%;"></div>`;
        else if (dd.tool === "line") html = `<div style="width:100%;height:2px;background:#374151;"></div>`;
        else if (dd.tool === "text") html = `<p style="font-size:16px;color:#111827;font-family:inherit;margin:0;line-height:1.5;">Text</p>`;
        const nb: Block = { id, html, x: Math.round(dd.x), y: Math.round(dd.y), w: Math.round(Math.max(dd.w, 20)), h: isLine ? 2 : Math.round(Math.max(dd.h, 20)) };
        setEditingBlocks(prev => [...(prev ?? []), nb]);
        setSelectedBlockIds(new Set([id]));
        setActiveTool("select");
        return;
      }
      if (panDragState.current) { panDragState.current = null; return; }
      if (rotateDragState.current) { rotateDragState.current = null; return; }
      const rs = resizeDragState.current;
      if (rs) { resizeDragState.current = null; setEditingBlocks(prev => prev?.map(b => b.id === rs.blockId ? { ...b, x: rs.currentX, y: rs.currentY, w: rs.currentW, h: rs.currentH } : b) ?? prev); return; }
      const fd = freeDragState.current;
      if (fd) { freeDragState.current = null; setSnapGuides([]); setEditingBlocks(prev => prev?.map(b => { const p = fd.currentPositions.get(b.id); return p ? { ...b, x: p.x, y: p.y } : b; }) ?? prev); return; }
      const ls = lassoDragState.current;
      if (ls) {
        lassoDragState.current = null;
        setLassoRect(prev => {
          if (prev && (prev.w > 5 || prev.h > 5)) {
            const sel = new Set<string>();
            for (const b of stateRef.current.editingBlocks || []) {
              const bw = blockWrapperRefs.current.get(b.id)?.offsetWidth ?? b.w ?? 200;
              const bh = blockWrapperRefs.current.get(b.id)?.offsetHeight ?? b.h ?? 100;
              if (b.x < prev.x + prev.w && b.x + bw > prev.x && b.y < prev.y + prev.h && b.y + bh > prev.y) sel.add(b.id);
            }
            setSelectedBlockIds(sel);
          }
          return null;
        });
      }
    }
    window.addEventListener("mousemove", onMouseMove); window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const { editingUid, selectedBlockIds, editingBlocks } = stateRef.current;
      const mod = e.metaKey || e.ctrlKey;
      if (mod && !e.shiftKey && e.key === "z") { e.preventDefault(); undo(); return; }
      if (mod && (e.key === "y" || (e.shiftKey && e.key === "z"))) { e.preventDefault(); redo(); return; }
      if (!editingUid) return;
      const target = e.target as HTMLElement;
      const inEdit = target.isContentEditable || target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT";
      if (e.key === "Escape") {
        if (selectedBlockIds.size > 0) setSelectedBlockIds(new Set());
        else { setEditingUid(null); setEditingBlocks(null); setSelectedBlockIds(new Set()); blockRefs.current.clear(); blockWrapperRefs.current.clear(); }
        return;
      }
      if (mod && e.key === "a" && !inEdit) { e.preventDefault(); setSelectedBlockIds(new Set((editingBlocks || []).map(b => b.id))); return; }
      if (mod && e.key === "c" && !inEdit) { clipboardRef.current = (editingBlocks || []).filter(b => selectedBlockIds.has(b.id)).map(b => { const el = blockRefs.current.get(b.id); return el ? { ...b, html: el.innerHTML } : b; }); return; }
      if (mod && e.key === "v" && !inEdit) {
        e.preventDefault();
        if (!clipboardRef.current.length) return;
        const pasted = clipboardRef.current.map(b => ({ ...b, id: genId(), x: b.x + 20, y: b.y + 20 }));
        setEditingBlocks(prev => [...(prev || []), ...pasted]); setSelectedBlockIds(new Set(pasted.map(p => p.id))); return;
      }
      if (mod && e.key === "d" && !inEdit) {
        e.preventDefault();
        const sb = (editingBlocks || []).filter(b => selectedBlockIds.has(b.id));
        if (!sb.length) return;
        const dupes = sb.map(b => { const el = blockRefs.current.get(b.id); return { ...b, id: genId(), html: el ? el.innerHTML : b.html, x: b.x + 20, y: b.y + 20 }; });
        setEditingBlocks(prev => [...(prev || []), ...dupes]); setSelectedBlockIds(new Set(dupes.map(d => d.id))); return;
      }
      if (!inEdit && selectedBlockIds.size > 0 && (e.key === "Delete" || e.key === "Backspace")) {
        e.preventDefault();
        const synced = (editingBlocks || []).map(b => { const el = blockRefs.current.get(b.id); return el ? { ...b, html: el.innerHTML } : b; }).filter(b => !selectedBlockIds.has(b.id));
        selectedBlockIds.forEach(id => { blockRefs.current.delete(id); blockWrapperRefs.current.delete(id); });
        setSelectedBlockIds(new Set()); setEditingBlocks(synced.length ? synced : [{ id: genId(), html: "", x: 40, y: 40 }]); return;
      }
      if (!inEdit && selectedBlockIds.size > 0 && ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
        e.preventDefault(); const delta = e.shiftKey ? 10 : 1;
        setEditingBlocks(prev => prev?.map(b => !selectedBlockIds.has(b.id) ? b : { ...b, x: e.key === "ArrowLeft" ? Math.max(0, b.x - delta) : e.key === "ArrowRight" ? b.x + delta : b.x, y: e.key === "ArrowUp" ? Math.max(0, b.y - delta) : e.key === "ArrowDown" ? b.y + delta : b.y }) ?? prev);
      }
      // Tool shortcuts
      if (!inEdit && !e.metaKey && !e.ctrlKey) {
        if (e.key === "v" || e.key === "V") setActiveTool("select");
        if (e.key === "r" || e.key === "R") setActiveTool("rect");
        if (e.key === "e" || e.key === "E") setActiveTool("ellipse");
        if (e.key === "l" || e.key === "L") setActiveTool("line");
        if (e.key === "t" || e.key === "T") setActiveTool("text");
        if (e.key === "f" || e.key === "F") setActiveTool("frame");
        if (e.key === "h" || e.key === "H") setActiveTool("pan");
        if (e.key === "Escape") setActiveTool("select");
      }
    }
    window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Canvas helpers
  function setCanvas(updater: CanvasSection[] | ((prev: CanvasSection[]) => CanvasSection[])) {
    commitPages(pages.map(p => { if (p.id !== activePageId) return p; const next = typeof updater === "function" ? updater(p.sections) : updater; return { ...p, sections: next }; }));
  }
  function add(entry: Entry) { setCanvas(prev => [...prev, { ...entry, uid: genId() }]); }
  function addBlank() { setCanvas(prev => [...prev, { name: "Blank Section", file: "__blank__", component: BlankSection, uid: genId() }]); }
  function remove(uid: string) { setCanvas(prev => prev.filter(i => i.uid !== uid)); }
  function moveUp(idx: number) { if (idx === 0) return; setCanvas(prev => { const n = [...prev]; [n[idx-1],n[idx]]=[n[idx],n[idx-1]]; return n; }); }
  function moveDown(idx: number) { setCanvas(prev => { if (idx >= prev.length-1) return prev; const n=[...prev]; [n[idx],n[idx+1]]=[n[idx+1],n[idx]]; return n; }); }
  function duplicateSection(uid: string) { const s = canvas.find(i => i.uid === uid); if (!s) return; const idx = canvas.indexOf(s); const copy = { ...s, uid: genId() }; setCanvas(prev => { const n = [...prev]; n.splice(idx + 1, 0, copy); return n; }); }
  function pageSlug(name: string, idx: number) { return idx === 0 ? "/" : `/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`; }
  function updatePageMeta(id: string, meta: PageMeta) { commitPages(pages.map(p => p.id === id ? { ...p, meta: { ...p.meta, ...meta } } : p)); }
  function updateRouteType(id: string, rt: RouteType, redirectTo?: string) { commitPages(pages.map(p => p.id === id ? { ...p, routeType: rt, redirectTo } : p)); }

  function copySectionToPage(uid: string, targetPageId: string) {
    const s = canvas.find(i => i.uid === uid); if (!s) return;
    commitPages(pages.map(p => p.id !== targetPageId ? p : { ...p, sections: [...p.sections, { ...s, uid: genId() }] }));
    setCopyMenuUid(null);
  }
  function onDragStart(idx: number) { dragIndex.current = idx; }
  function onDragOver(e: React.DragEvent, idx: number) { e.preventDefault(); dragOverIndex.current = idx; setDragOverIdx(idx); }
  function onDrop() { const from = dragIndex.current, to = dragOverIndex.current; setDragOverIdx(null); if (from === null || to === null || from === to) return; setCanvas(prev => { const n=[...prev]; const [item]=n.splice(from,1); n.splice(to,0,item); return n; }); dragIndex.current = null; dragOverIndex.current = null; }
  const [styleMenuUid, setStyleMenuUid] = useState<string | null>(null);
  function setSectionBg(uid: string, color: string) { setPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, sectionBg: color || undefined } : s) })); }
  function commitSectionBg(uid: string, color: string) { commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, sectionBg: color || undefined } : s) })); }
  function commitSectionGradient(uid: string, gradient: string | undefined) { commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, sectionGradient: gradient, sectionBg: gradient ? undefined : s.sectionBg } : s) })); }
  function setSectionPadding(uid: string, paddingY: number) { setPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, paddingY: paddingY || undefined } : s) })); }
  function resetSectionStyle(uid: string) { commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, sectionBg: undefined, sectionGradient: undefined, paddingY: undefined } : s) })); }

  // ── Section link helpers
  function openLinkEditor(uid: string) {
    const el = sectionRefs.current.get(uid);
    if (!el) return;
    const section = canvas.find(s => s.uid === uid);
    const all = Array.from(el.querySelectorAll<HTMLElement>('a, button, [role="button"]'))
      .filter(el => (el.textContent?.trim() || el.title || el.getAttribute('aria-label')) && !el.closest('[data-block-wrapper]'));
    const items = all.map((node, nth) => ({
      nth,
      tag: node.tagName.toLowerCase(),
      text: (node.textContent?.trim() || node.title || node.getAttribute('aria-label') || `(${node.tagName.toLowerCase()})`).slice(0, 50),
      current: section?.sectionLinks?.find(l => l.nth === nth)?.href ?? (node.getAttribute('href') || ''),
    }));
    setLinkEditorItems(items);
    setLinkEditorUid(uid);
  }
  function saveSectionLinks(uid: string, links: { nth: number; tag: string; text: string; href: string }[]) {
    const filtered = links.filter(l => l.href.trim());
    commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, sectionLinks: filtered.length ? filtered : undefined } : s) }));
  }
  function applySectionLinks(uid: string) {
    const el = sectionRefs.current.get(uid);
    const section = canvas.find(s => s.uid === uid);
    if (!el || !section?.sectionLinks?.length) return;
    const all = Array.from(el.querySelectorAll<HTMLElement>('a, button, [role="button"]'))
      .filter(el => !el.closest('[data-block-wrapper]'));
    for (const link of section.sectionLinks) {
      const node = all[link.nth];
      if (!node || !link.href) continue;
      if (node.tagName === 'A') {
        (node as HTMLAnchorElement).href = link.href;
        (node as HTMLAnchorElement).target = link.href.startsWith('http') ? '_blank' : '_self';
      } else {
        node.style.cursor = 'pointer';
        node.onclick = (e) => { e.preventDefault(); link.href.startsWith('http') ? window.open(link.href, '_blank') : (window.location.href = link.href); };
      }
    }
  }

  // ── Text override helpers
  function openTextEditor(uid: string) {
    const el = sectionRefs.current.get(uid);
    if (!el) return;
    const section = canvas.find(s => s.uid === uid);
    const all = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,h6,p,span,button,a,li,label'))
      .filter(node => node.childElementCount === 0 && (node.textContent?.trim()) && !node.closest('[data-block-wrapper]'));
    const items = all.map((node, nth) => ({
      nth,
      tag: node.tagName.toLowerCase(),
      text: (node.textContent?.trim() || '').slice(0, 60),
      current: section?.textOverrides?.find(o => o.nth === nth)?.text ?? (node.textContent?.trim() || ''),
    }));
    setTextEditorItems(items);
    setTextEditorUid(uid);
  }
  function saveTextOverrides(uid: string, items: { nth: number; text: string; tag: string; current: string }[]) {
    const filtered: TextOverride[] = items
      .filter((it, idx) => it.current !== it.text)
      .map(it => ({ nth: it.nth, text: it.current }));
    commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, textOverrides: filtered.length ? filtered : undefined } : s) }));
  }
  function applyTextOverrides(uid: string) {
    const el = sectionRefs.current.get(uid);
    const section = canvas.find(s => s.uid === uid);
    if (!el || !section?.textOverrides?.length) return;
    const all = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,h6,p,span,button,a,li,label'))
      .filter(node => node.childElementCount === 0 && !node.closest('[data-block-wrapper]'));
    for (const ov of section.textOverrides) {
      const node = all[ov.nth];
      if (node && node.textContent !== ov.text) node.textContent = ov.text;
    }
  }

  // ── Block helpers
  function syncBlocksFromDom(): Block[] { return (editingBlocks || []).map(b => { const el = blockRefs.current.get(b.id); return el ? { ...b, html: el.innerHTML } : b; }); }
  function startEdit(uid: string) {
    const item = canvas.find(i => i.uid === uid); if (!item) return;
    let html = item.html;
    if (html === undefined) { html = item.file === "__blank__" ? "" : (sectionContentRefs.current.get(uid)?.innerHTML ?? ""); setPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, html: html ?? "" } : s) })); }
    setEditingBlocks(parseBlocks(html || "")); setEditingUid(uid); setSelectedBlockIds(new Set());
  }
  function stopEdit(uid: string) {
    const sorted = [...syncBlocksFromDom()].sort((a, b) => a.y - b.y || a.x - b.x);
    commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, html: sorted.map(blockToHtml).join("") } : s) }));
    setEditingUid(null); setEditingBlocks(null); setSelectedBlockIds(new Set()); blockRefs.current.clear(); blockWrapperRefs.current.clear(); setSnapGuides([]);
  }
  function resetEdit(uid: string) {
    commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === uid ? { ...s, html: undefined } : s) }));
    setEditingUid(null); setEditingBlocks(null); setSelectedBlockIds(new Set()); blockRefs.current.clear(); blockWrapperRefs.current.clear();
  }
  function insertElement(html: string) {
    if (!editingUid) return;
    const synced = syncBlocksFromDom(); const maxY = synced.length ? Math.max(...synced.map(b => b.y)) + 80 : 40;
    const nb: Block = { id: genId(), html, x: 40, y: maxY };
    setEditingBlocks([...synced, nb]); setSelectedBlockIds(new Set([nb.id]));
  }
  function updateBlock(id: string, updates: Partial<Block>) { setEditingBlocks(prev => prev?.map(b => b.id === id ? { ...b, ...updates } : b) ?? prev); }
  function deleteBlock(id: string) {
    const synced = syncBlocksFromDom().filter(b => b.id !== id);
    blockRefs.current.delete(id); blockWrapperRefs.current.delete(id);
    setSelectedBlockIds(prev => { const n = new Set(prev); n.delete(id); return n; });
    setEditingBlocks(synced.length ? synced : [{ id: genId(), html: "", x: 40, y: 40 }]);
  }
  function duplicateBlock(block: Block) {
    const synced = syncBlocksFromDom(); const el = blockRefs.current.get(block.id);
    const clone: Block = { ...block, id: genId(), html: el ? el.innerHTML : block.html, x: block.x + 20, y: block.y + 20 };
    setEditingBlocks([...synced, clone]); setSelectedBlockIds(new Set([clone.id]));
  }
  function startBlockDrag(e: React.MouseEvent, block: Block) {
    if (block.locked) return; e.preventDefault(); e.stopPropagation();
    const ids = selectedBlockIds.has(block.id) ? [...selectedBlockIds].filter(id => !(editingBlocks || []).find(b => b.id === id)?.locked) : [block.id];
    if (!selectedBlockIds.has(block.id)) setSelectedBlockIds(new Set([block.id]));
    const sPos = new Map<string, { x: number; y: number }>(); const cPos = new Map<string, { x: number; y: number }>(); const els = new Map<string, HTMLDivElement | null>();
    for (const id of ids) { const b = (editingBlocks || []).find(b => b.id === id); if (b) { sPos.set(id, { x: b.x, y: b.y }); cPos.set(id, { x: b.x, y: b.y }); } els.set(id, blockWrapperRefs.current.get(id) ?? null); }
    freeDragState.current = { blockIds: ids, primaryId: block.id, startMouseX: e.clientX, startMouseY: e.clientY, startPositions: sPos, currentPositions: cPos, els };
  }
  function startResize(e: React.MouseEvent, block: Block, handle: ResizeHandle) {
    e.preventDefault(); e.stopPropagation();
    const el = blockWrapperRefs.current.get(block.id) ?? null;
    const w = el?.offsetWidth ?? block.w ?? 200; const h = el?.offsetHeight ?? block.h ?? 100;
    resizeDragState.current = { blockId: block.id, handle, startMouseX: e.clientX, startMouseY: e.clientY, startX: block.x, startY: block.y, startW: w, startH: h, currentX: block.x, currentY: block.y, currentW: w, currentH: h, el };
  }
  function startRotate(e: React.MouseEvent, block: Block) {
    e.preventDefault(); e.stopPropagation();
    const el = blockWrapperRefs.current.get(block.id); if (!el) return;
    const rect = el.getBoundingClientRect();
    rotateDragState.current = { blockId: block.id, centerPageX: rect.left + rect.width / 2, centerPageY: rect.top + rect.height / 2 };
  }
  function alignBlocks(dir: "left" | "center" | "right" | "top" | "middle" | "bottom") {
    const blocks = selBlocks.length > 1 ? selBlocks : selBlock ? [selBlock] : []; if (!blocks.length) return;
    if (["left","center","right"].includes(dir)) {
      const pairs = blocks.map(b => ({ b, w: blockWrapperRefs.current.get(b.id)?.offsetWidth ?? b.w ?? 200 }));
      const minX = Math.min(...pairs.map(p => p.b.x)); const maxRight = Math.max(...pairs.map(p => p.b.x + p.w));
      setEditingBlocks(prev => prev?.map(b => { if (!selectedBlockIds.has(b.id)) return b; const bw = blockWrapperRefs.current.get(b.id)?.offsetWidth ?? b.w ?? 200; const x = dir === "left" ? minX : dir === "right" ? maxRight - bw : (minX + maxRight - bw) / 2; return { ...b, x: Math.max(0, Math.round(x)) }; }) ?? prev);
    } else {
      const pairs = blocks.map(b => ({ b, h: blockWrapperRefs.current.get(b.id)?.offsetHeight ?? b.h ?? 100 }));
      const minY = Math.min(...pairs.map(p => p.b.y)); const maxBot = Math.max(...pairs.map(p => p.b.y + p.h));
      setEditingBlocks(prev => prev?.map(b => { if (!selectedBlockIds.has(b.id)) return b; const bh = blockWrapperRefs.current.get(b.id)?.offsetHeight ?? b.h ?? 100; const y = dir === "top" ? minY : dir === "bottom" ? maxBot - bh : (minY + maxBot - bh) / 2; return { ...b, y: Math.max(0, Math.round(y)) }; }) ?? prev);
    }
  }
  function distributeBlocks(axis: "h" | "v") {
    if (selBlocks.length < 3) return;
    const sorted = [...selBlocks].sort((a, b) => axis === "h" ? a.x - b.x : a.y - b.y);
    const first = sorted[0]; const last = sorted[sorted.length - 1];
    const fw = blockWrapperRefs.current.get(first.id)?.offsetWidth ?? first.w ?? 200; const fh = blockWrapperRefs.current.get(first.id)?.offsetHeight ?? first.h ?? 100;
    const lw = blockWrapperRefs.current.get(last.id)?.offsetWidth ?? last.w ?? 200; const lh = blockWrapperRefs.current.get(last.id)?.offsetHeight ?? last.h ?? 100;
    const totalSpan = axis === "h" ? (last.x + lw) - first.x : (last.y + lh) - first.y;
    const totalSize = sorted.reduce((s, b) => s + (axis === "h" ? (blockWrapperRefs.current.get(b.id)?.offsetWidth ?? b.w ?? 200) : (blockWrapperRefs.current.get(b.id)?.offsetHeight ?? b.h ?? 100)), 0);
    const gap = (totalSpan - totalSize) / (sorted.length - 1);
    let cur = axis === "h" ? first.x : first.y;
    const pos: Record<string, number> = {};
    for (const b of sorted) { pos[b.id] = cur; cur += (axis === "h" ? (blockWrapperRefs.current.get(b.id)?.offsetWidth ?? b.w ?? 200) : (blockWrapperRefs.current.get(b.id)?.offsetHeight ?? b.h ?? 100)) + gap; }
    setEditingBlocks(prev => prev?.map(b => selectedBlockIds.has(b.id) && pos[b.id] !== undefined ? { ...b, ...(axis === "h" ? { x: Math.round(pos[b.id]) } : { y: Math.round(pos[b.id]) }) } : b) ?? prev);
  }
  function bringToFront(block: Block) { updateBlock(block.id, { zIndex: Math.max(0, ...(editingBlocks || []).map(b => b.zIndex ?? 0)) + 1 }); }
  function sendToBack(block: Block) { updateBlock(block.id, { zIndex: Math.min(0, ...(editingBlocks || []).map(b => b.zIndex ?? 0)) - 1 }); }

  // ── Format helpers
  function saveSelection() { const sel = window.getSelection(); if (sel && sel.rangeCount > 0) savedRange.current = sel.getRangeAt(0).cloneRange(); }
  function restoreSelection() {
    if (!savedRange.current) return;
    const c = savedRange.current.startContainer; const el = c.nodeType === Node.ELEMENT_NODE ? c as HTMLElement : (c as Text).parentElement;
    (el?.closest("[contenteditable]") as HTMLElement | null)?.focus();
    const sel = window.getSelection(); sel?.removeAllRanges(); sel?.addRange(savedRange.current);
  }
  function execFormat(cmd: string, val?: string) { restoreSelection(); document.execCommand(cmd, false, val); }
  function applyTextColor(color: string) { restoreSelection(); document.execCommand("foreColor", false, color); }
  function applyFont(font: string) { restoreSelection(); document.execCommand("fontName", false, font); }
  function applyFontSize(size: number) { restoreSelection(); document.execCommand("fontSize", false, String(size)); }
  function insertImage(src: string) { if (!src.trim()) return; restoreSelection(); document.execCommand("insertHTML", false, `<img src="${src.trim()}" style="max-width:100%;height:auto;display:block;" />`); setImagePopover(false); setImageUrlInput(""); }
  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return;
    e.target.value = "";
    const form = new FormData(); form.append("file", f);
    const res = await fetch("/api/images", { method: "POST", body: form });
    const data = await res.json();
    if (data.url) { insertImage(data.url); setLibraryImages(prev => [{ id: data.id ?? Date.now(), url: data.url, name: data.name ?? f.name }, ...prev]); }
  }
  async function loadLibrary() {
    setLibraryLoading(true);
    try { const res = await fetch("/api/images"); const { images } = await res.json(); setLibraryImages(images ?? []); } catch { /* ignore */ }
    setLibraryLoading(false);
  }

  // ── Page helpers
  function switchPage(id: string) {
    if (id === activePageId) return;
    if (editingUid && editingBlocks) { const s = [...syncBlocksFromDom()].sort((a,b) => a.y-b.y||a.x-b.x); setPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s2 => s2.uid === editingUid ? { ...s2, html: s.map(blockToHtml).join("") } : s2) })); }
    setEditingUid(null); setEditingBlocks(null); setSelectedBlockIds(new Set()); blockRefs.current.clear(); blockWrapperRefs.current.clear(); setActivePageId(id);
  }
  function addPage() { const id = genId(); commitPages([...pages, { id, name: `Page ${pages.length + 1}`, sections: [] }]); setActivePageId(id); setEditingUid(null); setEditingBlocks(null); }
  function deletePage(id: string) { if (pages.length <= 1) return; const idx = pages.findIndex(p => p.id === id); const next = pages[idx-1] ?? pages[idx+1]; commitPages(pages.filter(p => p.id !== id)); if (activePageId === id) { setActivePageId(next.id); setEditingUid(null); setEditingBlocks(null); } }
  function renamePage(id: string, name: string) { if (name.trim()) commitPages(pages.map(p => p.id === id ? { ...p, name: name.trim() } : p)); setRenamingPageId(null); }

  // ── Export helpers
  function buildHtmlDoc(title: string, body: string) { return `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n  <title>${title}</title>\n  <script src="https://cdn.tailwindcss.com"><\/script>\n</head>\n<body>\n${body}\n</body>\n</html>`; }
  function getCleanArtboard() { const a = artboardRef.current; if (!a) return null; const c = a.cloneNode(true) as HTMLElement; c.querySelectorAll(".builder-control").forEach(el => el.remove()); c.querySelectorAll("[data-blk]").forEach(el => el.removeAttribute("data-blk")); c.style.zoom = ""; c.style.width = ""; c.style.boxShadow = ""; c.style.minHeight = ""; return c; }
  function downloadHTML() { const c = getCleanArtboard(); if (!c) return; const blob = new Blob([buildHtmlDoc(activePage.name, c.innerHTML)], { type: "text/html" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `${activePage.name.toLowerCase().replace(/\s+/g,"-")}.html`; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); setCodeState("done"); setTimeout(() => setCodeState("idle"), 2000); }

  function blockToRNStyle(block: Block): string {
    const lines: string[] = [];
    lines.push(`    position: 'absolute',`);
    lines.push(`    left: ${block.x},`);
    lines.push(`    top: ${block.y},`);
    if (block.w) lines.push(`    width: ${block.w},`);
    if (block.h) lines.push(`    height: ${block.h},`);
    if (block.blockBg) lines.push(`    backgroundColor: '${block.blockBg}',`);
    if (block.blockRadius) lines.push(`    borderRadius: ${block.blockRadius},`);
    if (block.blockPadding) lines.push(`    padding: ${block.blockPadding},`);
    if (block.blockOpacity !== undefined && block.blockOpacity < 100) lines.push(`    opacity: ${(block.blockOpacity / 100).toFixed(2)},`);
    if (block.zIndex) lines.push(`    zIndex: ${block.zIndex},`);
    if (block.shadow) {
      const s = block.shadow;
      const opacity = s.color.startsWith("rgba") ? parseFloat(s.color.split(",")[3] ?? "0.1") : 0.15;
      lines.push(`    shadowColor: '#000',`);
      lines.push(`    shadowOffset: { width: ${s.x}, height: ${s.y} },`);
      lines.push(`    shadowOpacity: ${opacity.toFixed(2)},`);
      lines.push(`    shadowRadius: ${s.blur},`);
      lines.push(`    elevation: ${Math.max(1, Math.round(s.blur / 2))},`);
    }
    if (block.border) {
      lines.push(`    borderWidth: ${block.border.width},`);
      lines.push(`    borderColor: '${block.border.color}',`);
      lines.push(`    borderStyle: '${block.border.style}',`);
    }
    const transforms: string[] = [];
    if (block.rotate) transforms.push(`{ rotate: '${block.rotate}deg' }`);
    if (block.flipH) transforms.push(`{ scaleX: -1 }`);
    if (block.flipV) transforms.push(`{ scaleY: -1 }`);
    if (transforms.length) lines.push(`    transform: [${transforms.join(", ")}],`);
    return lines.join("\n");
  }

  function htmlToRN(html: string, indent = 4): string {
    const pad = (n: number) => " ".repeat(n);
    const div = document.createElement("div");
    div.innerHTML = html;
    const usedImports = new Set<string>(["View", "Text"]);

    function styleAttrToRN(el: HTMLElement): string {
      const props: string[] = [];
      const s = el.style;
      const num = (v: string) => parseFloat(v.replace("px", ""));
      if (s.color) props.push(`color: '${s.color}'`);
      if (s.backgroundColor) props.push(`backgroundColor: '${s.backgroundColor}'`);
      if (s.fontSize) props.push(`fontSize: ${num(s.fontSize)}`);
      if (s.fontWeight) props.push(`fontWeight: '${s.fontWeight}'`);
      if (s.fontStyle) props.push(`fontStyle: '${s.fontStyle}'`);
      if (s.textAlign) props.push(`textAlign: '${s.textAlign}'`);
      if (s.marginTop) props.push(`marginTop: ${num(s.marginTop)}`);
      if (s.marginBottom) props.push(`marginBottom: ${num(s.marginBottom)}`);
      if (s.marginLeft) props.push(`marginLeft: ${num(s.marginLeft)}`);
      if (s.marginRight) props.push(`marginRight: ${num(s.marginRight)}`);
      if (s.paddingTop) props.push(`paddingTop: ${num(s.paddingTop)}`);
      if (s.paddingBottom) props.push(`paddingBottom: ${num(s.paddingBottom)}`);
      if (s.paddingLeft) props.push(`paddingLeft: ${num(s.paddingLeft)}`);
      if (s.paddingRight) props.push(`paddingRight: ${num(s.paddingRight)}`);
      if (s.borderRadius) props.push(`borderRadius: ${num(s.borderRadius)}`);
      if (s.borderWidth) props.push(`borderWidth: ${num(s.borderWidth)}`);
      if (s.borderColor) props.push(`borderColor: '${s.borderColor}'`);
      if (s.lineHeight) props.push(`lineHeight: ${num(s.lineHeight)}`);
      if (s.letterSpacing) props.push(`letterSpacing: ${num(s.letterSpacing)}`);
      if (s.opacity) props.push(`opacity: ${parseFloat(s.opacity)}`);
      if (s.flexDirection) props.push(`flexDirection: '${s.flexDirection}'`);
      if (s.alignItems) props.push(`alignItems: '${s.alignItems}'`);
      if (s.justifyContent) props.push(`justifyContent: '${s.justifyContent}'`);
      if (s.gap) props.push(`gap: ${num(s.gap)}`);
      if (s.width && !s.width.includes("%")) props.push(`width: ${num(s.width)}`);
      if (s.height && !s.height.includes("%")) props.push(`height: ${num(s.height)}`);
      return props.length ? `{{ ${props.join(", ")} }}` : "";
    }

    function nodeToJSX(node: Node, depth: number): string {
      const p = pad(depth);
      if (node.nodeType === Node.TEXT_NODE) {
        const t = (node.textContent ?? "").trim().replace(/"/g, "'");
        return t ? `${p}<Text>${t}</Text>` : "";
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return "";
      const el = node as HTMLElement;
      const tag = el.tagName.toLowerCase();
      const kids = Array.from(el.childNodes).map(c => nodeToJSX(c, depth + 2)).filter(Boolean).join("\n");
      const style = styleAttrToRN(el);
      const styleStr = style ? ` style={${style}}` : "";

      if (["h1","h2","h3","h4","h5","h6","p","span","strong","em","b","i","label","small","li"].includes(tag)) {
        const text = el.textContent?.trim().replace(/"/g, "'") ?? "";
        return `${p}<Text${styleStr}>${text}</Text>`;
      }
      if (tag === "img") {
        usedImports.add("Image");
        const src = el.getAttribute("src") ?? "";
        const w = el.getAttribute("width");
        const h = el.getAttribute("height");
        const dims = w && h ? `, width: ${w}, height: ${h}` : ", width: '100%', height: 200";
        return `${p}<Image source={{ uri: '${src}' }} style={{ resizeMode: 'cover'${dims} }} />`;
      }
      if (tag === "button" || (tag === "a" && el.textContent?.trim())) {
        usedImports.add("TouchableOpacity");
        const text = el.textContent?.trim().replace(/"/g, "'") ?? "";
        return `${p}<TouchableOpacity onPress={() => {}}${styleStr}>\n${p}  <Text>${text}</Text>\n${p}</TouchableOpacity>`;
      }
      if (tag === "input" || tag === "textarea") {
        usedImports.add("TextInput");
        const ph = el.getAttribute("placeholder") ?? "";
        return `${p}<TextInput placeholder="${ph}"${styleStr} />`;
      }
      if (tag === "ul" || tag === "ol") {
        return kids ? `${p}<View${styleStr}>\n${kids}\n${p}</View>` : "";
      }
      if (tag === "hr") return `${p}<View style={{ height: 1, backgroundColor: '#e5e7eb', marginVertical: 8 }} />`;
      if (tag === "br") return "";
      // div, section, article, nav, header, footer, form, figure, etc.
      if (!kids) return "";
      return `${p}<View${styleStr}>\n${kids}\n${p}</View>`;
    }

    const jsx = Array.from(div.childNodes).map(n => nodeToJSX(n, indent)).filter(Boolean).join("\n");
    return { jsx, imports: Array.from(usedImports) } as unknown as string;
  }

  function exportRN() {
    if (!editingBlocks) return;
    const name = activePage.name.replace(/[^a-zA-Z0-9]/g, "");
    const allImports = new Set(["View", "Text", "StyleSheet", "ScrollView"]);
    const entries = editingBlocks.map((b, i) => {
      const key = `block${i + 1}${b.blockName ? "_" + b.blockName.replace(/[^a-zA-Z0-9]/g, "_") : ""}`;
      const result = htmlToRN(b.html, 8) as unknown as { jsx: string; imports: string[] };
      result.imports.forEach(imp => allImports.add(imp));
      return { key, block: b, jsx: result.jsx || `        <View />` };
    });
    const importLine = `import { ${Array.from(allImports).join(", ")} } from 'react-native';`;
    const code = `import React from 'react';
${importLine}

export default function ${name || "MyScreen"}Screen() {
  return (
    <ScrollView>
      <View style={styles.container}>
${entries.map(({ key, block, jsx }) =>
`        {/* ${block.blockName || key} */}
        <View style={styles.${key}}>
${jsx}
        </View>`).join("\n")}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minHeight: 600,
    backgroundColor: '#ffffff',
  },
${entries.map(({ key, block }) => `  ${key}: {\n${blockToRNStyle(block)}\n  },`).join("\n")}
});
`;
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name || "MyScreen"}Screen.tsx`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setRnState("done"); setTimeout(() => setRnState("idle"), 2000);
  }

  function copyBlockAsRN(block: Block) {
    const result = htmlToRN(block.html, 4) as unknown as { jsx: string; imports: string[] };
    const imports = [...new Set(["View", "Text", "StyleSheet", ...result.imports])];
    const code = `import { ${imports.join(", ")} } from 'react-native';

{/* ${block.blockName || "Block"} */}
<View style={styles.block}>
${result.jsx || "  <View />"}
</View>

const styles = StyleSheet.create({
  block: {
${blockToRNStyle(block)}
  },
});`;
    navigator.clipboard.writeText(code);
    setRnCopied(true); setTimeout(() => setRnCopied(false), 2000);
  }


  async function exportWebProject() {
    const zip = new JSZip();
    const allPages = pages;
    const appName = allPages[0]?.name || "MyApp";
    const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const pascalCase = (s: string) => s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toUpperCase());

    // ── app/layout.tsx ───────────────────────────────────────────────────────
    zip.file("app/layout.tsx", `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "${appName}",
  description: "Built with Bloxer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`);

    // ── app/globals.css ──────────────────────────────────────────────────────
    zip.file("app/globals.css", `@import "tailwindcss";

:root {
  --brand: ${brandColor};
  --brand2: ${brandSecondary};
}
${brandFont ? `\nbody { font-family: '${brandFont}', system-ui, sans-serif; }\n` : ""}
${customCSS ? `\n/* Custom CSS */\n${customCSS}\n` : ""}`);

    // ── Each page as an app route ────────────────────────────────────────────
    for (let pi = 0; pi < allPages.length; pi++) {
      const page = allPages[pi];
      const name = pascalCase(page.name.replace(/[^a-zA-Z0-9 ]/g, "")) || "Page";
      const routeDir = pi === 0 ? "app" : `app/${slug(page.name)}`;
      const sectionImports: string[] = [];
      const sectionJsx: string[] = [];

      // Collect all section links across this page for the client patch script
      const allPageLinks: { sectionIdx: number; links: SectionLink[] }[] = [];
      for (let si = 0; si < page.sections.length; si++) {
        const sec = page.sections[si];
        if (sec.sectionLinks?.length) allPageLinks.push({ sectionIdx: si, links: sec.sectionLinks });
        const compName = pascalCase(sec.name.replace(/[^a-zA-Z0-9 ]/g, ""));
        const importPath = `@/components/${sec.file.replace(/\.tsx$/, "")}`;
        if (!sectionImports.find(l => l.includes(importPath))) {
          sectionImports.push(`import ${compName} from "${importPath}";`);
        }
        sectionJsx.push(`      <${compName} />`);
      }

      const pageMeta = page.meta ?? {};
      const metaTitle = pageMeta.title || (pi === 0 ? appName : `${page.name} — ${appName}`);
      const metaDesc = pageMeta.description || "";
      const metaOg = pageMeta.ogImage || "";
      const metadataBlock = `export const metadata: Metadata = {
  title: ${JSON.stringify(metaTitle)},${metaDesc ? `\n  description: ${JSON.stringify(metaDesc)},` : ""}${metaOg ? `\n  openGraph: { images: [${JSON.stringify(metaOg)}] },` : ""}
};`;

      // If this page has section links, generate a client wrapper
      const needsLinkPatch = allPageLinks.length > 0;
      const linkPatchScript = needsLinkPatch ? `
"use client";
import { useEffect } from "react";
function LinkPatcher() {
  useEffect(() => {
    const sections = document.querySelectorAll("main > *");
    const map: { sectionIdx: number; nth: number; href: string }[] = ${JSON.stringify(
      allPageLinks.flatMap(({ sectionIdx, links }) => links.map(l => ({ sectionIdx, nth: l.nth, href: l.href })))
    )};
    for (const { sectionIdx, nth, href } of map) {
      const sec = sections[sectionIdx];
      if (!sec) continue;
      const clickables = Array.from(sec.querySelectorAll<HTMLElement>("a, button, [role='button']"));
      const el = clickables[nth];
      if (!el || !href) continue;
      if (el.tagName === "A") {
        (el as HTMLAnchorElement).href = href;
        (el as HTMLAnchorElement).target = href.startsWith("http") ? "_blank" : "_self";
      } else {
        el.style.cursor = "pointer";
        el.addEventListener("click", e => { e.preventDefault(); href.startsWith("http") ? window.open(href, "_blank") : (window.location.href = href); });
      }
    }
  }, []);
  return null;
}` : "";

      zip.file(`${routeDir}/page.tsx`, `import React from "react";
import type { Metadata } from "next";
${sectionImports.join("\n")}
${needsLinkPatch ? '\nimport { useEffect } from "react";' : ""}
${metadataBlock}
${needsLinkPatch ? linkPatchScript : ""}
export default function ${name}Page() {
  return (
    <main>
${sectionJsx.join("\n") || "      {/* Add sections here */}"}${needsLinkPatch ? "\n      <LinkPatcher />" : ""}
    </main>
  );
}
`);
    }

    // ── app/api/example/route.ts ─────────────────────────────────────────────
    zip.file("app/api/example/route.ts", `import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/example
export async function GET() {
  // const items = await db.item.findMany();
  return NextResponse.json({ message: "Hello from your API", items: [] });
}

// POST /api/example
export async function POST(req: Request) {
  const body = await req.json();
  // const item = await db.item.create({ data: body });
  return NextResponse.json({ success: true, received: body });
}
`);

    // ── lib/db.ts ────────────────────────────────────────────────────────────
    zip.file("lib/db.ts", `import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
`);

    // ── prisma/schema.prisma ─────────────────────────────────────────────────
    zip.file("prisma/schema.prisma", `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Project {
  id        String   @id @default(cuid())
  name      String
  data      Json
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
`);

    // ── .env.example ─────────────────────────────────────────────────────────
    zip.file(".env.example", `# PostgreSQL connection string
# Get a free database at https://neon.tech or https://supabase.com
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
`);

    // ── package.json ─────────────────────────────────────────────────────────
    zip.file("package.json", JSON.stringify({
      name: slug(appName),
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
        "db:push": "prisma db push",
        "db:studio": "prisma studio",
      },
      dependencies: {
        next: "^15.0.0",
        react: "^19.0.0",
        "react-dom": "^19.0.0",
        "@prisma/client": "^6.0.0",
        prisma: "^6.0.0",
      },
      devDependencies: {
        "@types/node": "^22.0.0",
        "@types/react": "^19.0.0",
        "@types/react-dom": "^19.0.0",
        typescript: "^5.0.0",
        tailwindcss: "^4.0.0",
      },
    }, null, 2));

    // ── next.config.ts ───────────────────────────────────────────────────────
    const hasRedirects = redirects.length > 0;
    const redirectsCode = hasRedirects
      ? `  async redirects() {
    return [
${redirects.map(r => `      { source: ${JSON.stringify(r.from)}, destination: ${JSON.stringify(r.to)}, permanent: true },`).join("\n")}
    ];
  },`
      : "";
    zip.file("next.config.ts", `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
${redirectsCode}
};

export default nextConfig;
`);

    // ── tsconfig.json ────────────────────────────────────────────────────────
    zip.file("tsconfig.json", JSON.stringify({
      compilerOptions: {
        target: "ES2017",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "bundler",
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: "preserve",
        incremental: true,
        plugins: [{ name: "next" }],
        paths: { "@/*": ["./*"] },
      },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      exclude: ["node_modules"],
    }, null, 2));

    // ── README.md ────────────────────────────────────────────────────────────
    zip.file("README.md", `# ${appName}

## Quick Start

\`\`\`bash
npm install

# 1. Copy .env.example → .env and fill in your DATABASE_URL
cp .env.example .env

# 2. Push schema to your database
npm run db:push

# 3. Start the dev server
npm run dev
\`\`\`

## Project Structure

\`\`\`
app/                  Next.js App Router pages
  api/example/        Example API route (GET + POST)
components/           UI section components
lib/db.ts             Prisma client
prisma/schema.prisma  Database schema (User + Project models)
\`\`\`

## Database

This project uses **Prisma** with **PostgreSQL**.

Get a free database at:
- https://neon.tech (recommended)
- https://supabase.com

## Deploy

Push to GitHub, then deploy at https://vercel.com — set \`DATABASE_URL\` in environment variables.
\`\`\`
`);

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug(appName)}-nextjs-project.zip`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setWebProjectState("done"); setTimeout(() => setWebProjectState("idle"), 3000);
  }

  async function exportRNProject() {
    const zip = new JSZip();
    const allPages = pages;
    const appName = allPages[0]?.name || "MyApp";
    const sl = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const pc = (s: string) => s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toUpperCase());

    const allFiles = allPages.flatMap(p => p.sections.map(s => s.file));
    const isAndroid = allFiles.some(f => f.startsWith("android/"));
    const accent = isAndroid ? "#6200ea" : "#5856d6";
    const accentLight = isAndroid ? "#f3e5f5" : "#eef0fb";
    const radius = isAndroid ? 28 : 20;
    const fontFamily = isAndroid ? "'Google Sans', 'Roboto', sans-serif" : "-apple-system, 'SF Pro Display', sans-serif";

    function sectionType(file: string) {
      const f = file.toLowerCase();
      if (f.includes("navbar")) return "navbar";
      if (f.includes("hero")) return "hero";
      if (f.includes("screenshot")) return "screenshots";
      if (f.includes("feature")) return "features";
      if (f.includes("pric")) return "pricing";
      if (f.includes("testimonial")) return "testimonials";
      if (f.includes("stat")) return "stats";
      if (f.includes("step")) return "steps";
      if (f.includes("faq")) return "faq";
      if (f.includes("cta")) return "cta";
      if (f.includes("footer")) return "footer";
      return "generic";
    }

    // ── RN section component templates ────────────────────────────────────────
    const rnComponents: Record<string, string> = {
      navbar: `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
export default function NavbarSection() {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={s.wrap}>
      <View style={s.row}>
        <Text style={s.logo}>${appName}</Text>
        <TouchableOpacity onPress={() => setOpen(o => !o)} style={s.menuBtn}>
          <View style={[s.bar, { marginBottom: 5 }]} /><View style={s.bar} /><View style={[s.bar, { marginTop: 5 }]} />
        </TouchableOpacity>
      </View>
      {open && (
        <View style={s.menu}>
          {['Home','Features','Pricing','Contact'].map(item => (
            <TouchableOpacity key={item} style={s.menuItem}>
              <Text style={s.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  wrap: { backgroundColor: '${isAndroid ? "#fff" : "rgba(255,255,255,0.95)"}', borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 14 },
  logo: { fontSize: 18, fontWeight: '800', color: '${accent}' },
  menuBtn: { padding: 4 },
  bar: { width: 22, height: 2, backgroundColor: '#374151', borderRadius: 2 },
  menu: { paddingHorizontal: 20, paddingBottom: 12 },
  menuItem: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  menuText: { fontSize: 15, color: '#374151', fontWeight: '500' },
});`,

      hero: `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
export default function HeroSection() {
  return (
    <View style={s.wrap}>
      <SafeAreaView style={s.inner}>
        <View style={s.badge}><Text style={s.badgeText}>New · Version 2.0</Text></View>
        <Text style={s.title}>The app that{'\n'}changes everything</Text>
        <Text style={s.sub}>Beautiful, fast, and built for ${isAndroid ? "Android" : "iOS"}. Join thousands of happy users today.</Text>
        <TouchableOpacity style={s.btn}><Text style={s.btnText}>Download Free</Text></TouchableOpacity>
        <TouchableOpacity style={s.btnOut}><Text style={s.btnOutText}>See how it works</Text></TouchableOpacity>
        <View style={s.stats}>
          {[['50K+','Users'],['4.9★','Rating'],['#1','App']].map(([v,l]) => (
            <View key={l} style={s.stat}>
              <Text style={s.statV}>{v}</Text><Text style={s.statL}>{l}</Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { backgroundColor: '${accent}', minHeight: 520 },
  inner: { padding: 32, alignItems: 'center', paddingTop: 60 },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6, marginBottom: 24 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  title: { fontSize: 36, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 14, lineHeight: 44 },
  sub: { fontSize: 16, color: 'rgba(255,255,255,0.85)', textAlign: 'center', lineHeight: 25, marginBottom: 32 },
  btn: { backgroundColor: '#fff', borderRadius: ${radius}, paddingVertical: 16, width: '100%', alignItems: 'center', marginBottom: 12 },
  btnText: { color: '${accent}', fontSize: 16, fontWeight: '700' },
  btnOut: { borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)', borderRadius: ${radius}, paddingVertical: 14, width: '100%', alignItems: 'center' },
  btnOutText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  stats: { flexDirection: 'row', gap: 36, marginTop: 40 },
  stat: { alignItems: 'center' },
  statV: { fontSize: 22, fontWeight: '800', color: '#fff' },
  statL: { fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
});`,

      screenshots: `import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const screens = [
  { label: 'Dashboard', color: '${accent}' },
  { label: 'Profile', color: '#10b981' },
  { label: 'Settings', color: '#f59e0b' },
];
export default function ScreenshotsSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>See it in action</Text>
      <Text style={s.sub}>Beautifully designed for ${isAndroid ? "Android" : "iOS"}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.row}>
        {screens.map(sc => (
          <View key={sc.label} style={[s.phone, { backgroundColor: sc.color }]}>
            <View style={s.notch} />
            <Text style={s.phoneLabel}>{sc.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', marginBottom: 8, textAlign: 'center' },
  sub: { fontSize: 15, color: '#6b7280', marginBottom: 28, textAlign: 'center' },
  row: { paddingHorizontal: 8, gap: 16 },
  phone: { width: 140, height: 280, borderRadius: 28, padding: 16, alignItems: 'center', justifyContent: 'flex-end', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 20, elevation: 10 },
  notch: { position: 'absolute', top: 12, width: 40, height: 6, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 3 },
  phoneLabel: { color: '#fff', fontWeight: '700', fontSize: 13 },
});`,

      features: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimised performance on every device.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'End-to-end encrypted with zero data retention.' },
  { icon: '☁️', title: 'Cloud Sync', desc: 'All your data synced across devices instantly.' },
  { icon: '🎨', title: 'Customisable', desc: 'Adapt the look and feel to your brand.' },
  { icon: '📊', title: 'Analytics', desc: 'Real-time insights and detailed reports.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Work together with your team in real time.' },
];
export default function FeaturesSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>Why people love it</Text>
      <Text style={s.sub}>Everything you need, nothing you don't.</Text>
      <View style={s.grid}>
        {features.map(f => (
          <View key={f.title} style={s.card}>
            <Text style={s.icon}>{f.icon}</Text>
            <Text style={s.cardTitle}>{f.title}</Text>
            <Text style={s.cardDesc}>{f.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#f9fafb' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', textAlign: 'center', marginBottom: 8 },
  sub: { fontSize: 15, color: '#6b7280', textAlign: 'center', marginBottom: 28 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { width: '47%', backgroundColor: '#fff', borderRadius: ${radius}, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 },
  icon: { fontSize: 28, marginBottom: 12 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 6 },
  cardDesc: { fontSize: 13, color: '#6b7280', lineHeight: 19 },
});`,

      pricing: `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const plans = [
  { name: 'Free', price: '$0', period: 'forever', features: ['5 projects', '1 GB storage', 'Basic analytics', 'Email support'], cta: 'Get started', highlight: false },
  { name: 'Pro', price: '$9', period: '/month', features: ['Unlimited projects', '50 GB storage', 'Advanced analytics', 'Priority support', 'Custom domain'], cta: 'Start free trial', highlight: true },
];
export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  return (
    <View style={s.wrap}>
      <Text style={s.title}>Simple pricing</Text>
      <View style={s.toggle}>
        {['Monthly', 'Annual'].map((t, i) => (
          <TouchableOpacity key={t} onPress={() => setAnnual(i === 1)} style={[s.tab, annual === (i === 1) && s.tabActive]}>
            <Text style={[s.tabText, annual === (i === 1) && s.tabTextActive]}>{t}{i === 1 ? '  −20%' : ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {plans.map(p => (
        <View key={p.name} style={[s.card, p.highlight && s.cardHL]}>
          {p.highlight && <View style={s.popularBadge}><Text style={s.popularText}>Most popular</Text></View>}
          <Text style={[s.planName, p.highlight && s.hlText]}>{p.name}</Text>
          <Text style={[s.price, p.highlight && s.hlText]}>{p.price}<Text style={s.period}>{p.period}</Text></Text>
          {p.features.map(f => (
            <View key={f} style={s.featureRow}>
              <Text style={[s.check, p.highlight && s.hlText]}>✓ </Text>
              <Text style={[s.featureText, p.highlight && s.hlText]}>{f}</Text>
            </View>
          ))}
          <TouchableOpacity style={[s.btn, p.highlight && s.btnHL]}>
            <Text style={[s.btnText, p.highlight && s.btnHLText]}>{p.cta}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', textAlign: 'center', marginBottom: 20 },
  toggle: { flexDirection: 'row', backgroundColor: '#f3f4f6', borderRadius: 12, padding: 4, marginBottom: 24 },
  tab: { flex: 1, paddingVertical: 8, borderRadius: 10, alignItems: 'center' },
  tabActive: { backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  tabText: { fontSize: 13, fontWeight: '600', color: '#6b7280' },
  tabTextActive: { color: '#111827' },
  card: { borderWidth: 1.5, borderColor: '#e5e7eb', borderRadius: ${radius}, padding: 24, marginBottom: 16 },
  cardHL: { backgroundColor: '${accent}', borderColor: '${accent}' },
  popularBadge: { position: 'absolute', top: -12, right: 20, backgroundColor: '#fbbf24', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
  popularText: { fontSize: 11, fontWeight: '700', color: '#78350f' },
  planName: { fontSize: 16, fontWeight: '700', color: '#374151', marginBottom: 8 },
  price: { fontSize: 34, fontWeight: '800', color: '#111827', marginBottom: 20 },
  period: { fontSize: 15, fontWeight: '400', color: '#9ca3af' },
  featureRow: { flexDirection: 'row', marginBottom: 8 },
  check: { color: '${accent}', fontWeight: '700', fontSize: 14 },
  featureText: { fontSize: 14, color: '#374151', flex: 1 },
  btn: { marginTop: 20, borderWidth: 1.5, borderColor: '${accent}', borderRadius: 14, paddingVertical: 14, alignItems: 'center' },
  btnHL: { backgroundColor: '#fff', borderColor: '#fff' },
  btnText: { fontSize: 15, fontWeight: '700', color: '${accent}' },
  btnHLText: { color: '${accent}' },
  hlText: { color: '#fff' },
});`,

      testimonials: `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
const reviews = [
  { name: 'Alex Morgan', role: 'Product Designer', rating: 5, text: 'This app completely changed my workflow. I use it every single day and it never lets me down.' },
  { name: 'Sarah Chen', role: 'Software Engineer', rating: 5, text: 'Incredibly well-designed and a joy to use. The performance is outstanding on my device.' },
  { name: 'Jake Patel', role: 'Startup Founder', rating: 5, text: 'Best app in its category. The team ships updates regularly and actually listens to feedback.' },
];
export default function TestimonialsSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>What users say</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.row}>
        {reviews.map(r => (
          <View key={r.name} style={s.card}>
            <Text style={s.stars}>{'★'.repeat(r.rating)}</Text>
            <Text style={s.text}>{r.text}</Text>
            <View style={s.author}>
              <View style={s.avatar}><Text style={s.avatarText}>{r.name.split(' ').map(n=>n[0]).join('')}</Text></View>
              <View>
                <Text style={s.name}>{r.name}</Text>
                <Text style={s.role}>{r.role}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { paddingVertical: 32, backgroundColor: '#f9fafb' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', textAlign: 'center', marginBottom: 20, paddingHorizontal: 32 },
  row: { paddingHorizontal: 20, gap: 14 },
  card: { width: 260, backgroundColor: '#fff', borderRadius: ${radius}, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 3 },
  stars: { color: '#f59e0b', fontSize: 16, marginBottom: 12 },
  text: { fontSize: 14, color: '#374151', lineHeight: 22, marginBottom: 16, fontStyle: 'italic' },
  author: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '${accent}', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  name: { fontSize: 13, fontWeight: '700', color: '#111827' },
  role: { fontSize: 12, color: '#9ca3af' },
});`,

      stats: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const stats = [
  { value: '50K+', label: 'Active users', icon: '👤' },
  { value: '4.9', label: 'App store rating', icon: '⭐' },
  { value: '99.9%', label: 'Uptime SLA', icon: '⚡' },
  { value: '180+', label: 'Countries', icon: '🌍' },
];
export default function StatsSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>Trusted worldwide</Text>
      <View style={s.grid}>
        {stats.map(st => (
          <View key={st.label} style={s.card}>
            <Text style={s.icon}>{st.icon}</Text>
            <Text style={s.value}>{st.value}</Text>
            <Text style={s.label}>{st.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', textAlign: 'center', marginBottom: 24 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { width: '47%', backgroundColor: '${accentLight}', borderRadius: ${radius}, padding: 20, alignItems: 'center' },
  icon: { fontSize: 28, marginBottom: 8 },
  value: { fontSize: 28, fontWeight: '800', color: '${accent}', marginBottom: 4 },
  label: { fontSize: 12, color: '#6b7280', textAlign: 'center', fontWeight: '500' },
});`,

      steps: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const steps = [
  { n: '1', title: 'Download the app', desc: 'Get it free from the App Store or Google Play.' },
  { n: '2', title: 'Create your account', desc: 'Sign up in seconds with your email or social login.' },
  { n: '3', title: 'Set up your profile', desc: 'Personalise your experience in just a few taps.' },
  { n: '4', title: 'Start using it', desc: 'You are all set. Enjoy the full experience.' },
];
export default function StepsSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>Get started in minutes</Text>
      {steps.map((step, i) => (
        <View key={step.n} style={s.row}>
          <View style={[s.num, { backgroundColor: '${accent}' }]}><Text style={s.numText}>{step.n}</Text></View>
          <View style={[s.line, i === steps.length - 1 && s.lineHide]} />
          <View style={s.content}>
            <Text style={s.stepTitle}>{step.title}</Text>
            <Text style={s.stepDesc}>{step.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', marginBottom: 32, textAlign: 'center' },
  row: { flexDirection: 'row', marginBottom: 28 },
  num: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  numText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  line: { position: 'absolute', left: 19, top: 40, width: 2, height: 40, backgroundColor: '#e5e7eb' },
  lineHide: { opacity: 0 },
  content: { marginLeft: 16, flex: 1 },
  stepTitle: { fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 4 },
  stepDesc: { fontSize: 14, color: '#6b7280', lineHeight: 20 },
});`,

      faq: `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const faqs = [
  { q: 'Is there a free plan?', a: 'Yes! The free plan includes everything you need to get started, with no credit card required.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time from your account settings.' },
  { q: 'Is my data secure?', a: 'Your data is encrypted end-to-end and stored in ISO 27001 certified data centers.' },
  { q: 'Do you offer a student discount?', a: 'Yes, students get 50% off any paid plan. Verify with your .edu email address.' },
  { q: 'How do I export my data?', a: 'You can export all your data at any time from Settings → Data → Export.' },
];
export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <View style={s.wrap}>
      <Text style={s.title}>Frequently asked questions</Text>
      {faqs.map((faq, i) => (
        <TouchableOpacity key={i} onPress={() => setOpen(open === i ? null : i)} style={s.item}>
          <View style={s.row}>
            <Text style={s.q}>{faq.q}</Text>
            <Text style={[s.chevron, open === i && s.chevronOpen]}>›</Text>
          </View>
          {open === i && <Text style={s.a}>{faq.a}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#f9fafb' },
  title: { fontSize: 26, fontWeight: '800', color: '#111827', textAlign: 'center', marginBottom: 24 },
  item: { backgroundColor: '#fff', borderRadius: ${Math.round(radius * 0.7)}, padding: 18, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  q: { fontSize: 15, fontWeight: '600', color: '#111827', flex: 1, marginRight: 12 },
  chevron: { fontSize: 22, color: '#9ca3af', transform: [{ rotate: '0deg' }] },
  chevronOpen: { transform: [{ rotate: '90deg' }] },
  a: { fontSize: 14, color: '#6b7280', lineHeight: 22, marginTop: 12 },
});`,

      cta: `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function CTASection() {
  return (
    <View style={s.wrap}>
      <View style={s.card}>
        <Text style={s.emoji}>🚀</Text>
        <Text style={s.title}>Ready to get started?</Text>
        <Text style={s.sub}>Join over 50,000 users who love the app. Free forever, no credit card needed.</Text>
        <TouchableOpacity style={s.btn}><Text style={s.btnText}>Download Free</Text></TouchableOpacity>
        <TouchableOpacity style={s.btnOut}><Text style={s.btnOutText}>View on ${isAndroid ? "Google Play" : "App Store"}</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 24, backgroundColor: '#fff' },
  card: { backgroundColor: '${accent}', borderRadius: ${radius + 4}, padding: 32, alignItems: 'center' },
  emoji: { fontSize: 48, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 10 },
  sub: { fontSize: 15, color: 'rgba(255,255,255,0.85)', textAlign: 'center', lineHeight: 23, marginBottom: 28 },
  btn: { backgroundColor: '#fff', borderRadius: 14, paddingVertical: 16, paddingHorizontal: 40, marginBottom: 12, width: '100%', alignItems: 'center' },
  btnText: { color: '${accent}', fontSize: 16, fontWeight: '700' },
  btnOut: { borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)', borderRadius: 14, paddingVertical: 14, width: '100%', alignItems: 'center' },
  btnOutText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});`,

      footer: `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const links = ['Privacy Policy', 'Terms of Service', 'Contact', 'Support'];
export default function FooterSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.brand}>${appName}</Text>
      <Text style={s.sub}>Building the future, one app at a time.</Text>
      <View style={s.links}>
        {links.map(l => (
          <TouchableOpacity key={l}><Text style={s.link}>{l}</Text></TouchableOpacity>
        ))}
      </View>
      <Text style={s.copy}>© ${new Date().getFullYear()} ${appName}. All rights reserved.</Text>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#111827', alignItems: 'center' },
  brand: { fontSize: 20, fontWeight: '800', color: '#fff', marginBottom: 8 },
  sub: { fontSize: 13, color: '#9ca3af', marginBottom: 24, textAlign: 'center' },
  links: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center', marginBottom: 24 },
  link: { fontSize: 13, color: '#6b7280' },
  copy: { fontSize: 12, color: '#4b5563' },
});`,

      generic: `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function GenericSection() {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>Section Title</Text>
      <Text style={s.sub}>Edit this section to add your own content.</Text>
      <TouchableOpacity style={s.btn}><Text style={s.btnText}>Learn more</Text></TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 32, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '800', color: '#111827', textAlign: 'center', marginBottom: 10 },
  sub: { fontSize: 15, color: '#6b7280', textAlign: 'center', lineHeight: 23, marginBottom: 24 },
  btn: { borderWidth: 1.5, borderColor: '${accent}', borderRadius: 14, paddingVertical: 13, paddingHorizontal: 28 },
  btnText: { fontSize: 15, fontWeight: '700', color: '${accent}' },
});`,
    };

    // ── Collect used section types ─────────────────────────────────────────────
    const usedTypes = new Set<string>();
    for (const page of allPages) {
      for (const sec of page.sections) usedTypes.add(sectionType(sec.file));
    }

    // Emit component files
    for (const type of usedTypes) {
      const code = rnComponents[type] ?? rnComponents.generic;
      zip.file(`components/sections/${pc(type)}Section.tsx`, code);
    }

    // ── Per-page screens ───────────────────────────────────────────────────────
    for (let pi = 0; pi < allPages.length; pi++) {
      const page = allPages[pi];
      const name = pc(page.name.replace(/[^a-zA-Z0-9 ]/g, "")) || "Home";
      const seenTypes = new Set<string>();
      const imports: string[] = [];
      const jsx: string[] = [];

      for (const sec of page.sections) {
        const type = sectionType(sec.file);
        const comp = `${pc(type)}Section`;
        if (!seenTypes.has(type)) {
          seenTypes.add(type);
          imports.push(`import ${comp} from '@/components/sections/${pc(type)}Section';`);
        }
        jsx.push(`      <${comp} />`);
      }

      const fileRoute = pi === 0 ? "app/index.tsx" : `app/${sl(page.name)}.tsx`;
      zip.file(fileRoute, `import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
${imports.join("\n")}

export default function ${name}Screen() {
  return (
    <>
      <Stack.Screen options={{ title: '${page.name}', headerShown: ${pi === 0 ? "false" : "true"} }} />
      <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
${jsx.join("\n")}
      </ScrollView>
    </>
  );
}
const s = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff' } });
`);
    }

    // ── app/_layout.tsx ────────────────────────────────────────────────────────
    zip.file("app/_layout.tsx", `import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="${isAndroid ? "light" : "auto"}" />
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#fff' }, headerTintColor: '${accent}', headerTitleStyle: { fontWeight: '700' } }} />
    </>
  );
}
`);

    // ── app.json ───────────────────────────────────────────────────────────────
    zip.file("app.json", JSON.stringify({
      expo: {
        name: appName,
        slug: sl(appName),
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "automatic",
        splash: { image: "./assets/splash.png", resizeMode: "contain", backgroundColor: isAndroid ? "#6200ea" : "#5856d6" },
        ios: { supportsTablet: true, bundleIdentifier: `com.example.${sl(appName)}` },
        android: { adaptiveIcon: { foregroundImage: "./assets/adaptive-icon.png", backgroundColor: "#ffffff" }, package: `com.example.${sl(appName)}` },
        plugins: ["expo-router"],
        scheme: sl(appName),
      },
    }, null, 2));

    // ── package.json ───────────────────────────────────────────────────────────
    zip.file("package.json", JSON.stringify({
      name: sl(appName),
      version: "1.0.0",
      main: "expo-router/entry",
      scripts: { start: "expo start", android: "expo run:android", ios: "expo run:ios", web: "expo start --web" },
      dependencies: {
        "expo": "~52.0.0",
        "expo-router": "~4.0.0",
        "expo-status-bar": "~2.0.0",
        "expo-linear-gradient": "~14.0.0",
        "react": "18.3.1",
        "react-native": "0.76.5",
      },
      devDependencies: {
        "@babel/core": "^7.24.0",
        "@types/react": "~18.3.0",
        "typescript": "^5.3.0",
      },
    }, null, 2));

    // ── tsconfig.json ──────────────────────────────────────────────────────────
    zip.file("tsconfig.json", JSON.stringify({ extends: "expo/tsconfig.base", compilerOptions: { strict: true, paths: { "@/*": ["./*"] } } }, null, 2));

    // ── babel.config.js ────────────────────────────────────────────────────────
    zip.file("babel.config.js", `module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'] };
};
`);

    // ── assets placeholder ─────────────────────────────────────────────────────
    zip.file("assets/.gitkeep", "");

    // ── eas.json ───────────────────────────────────────────────────────────────
    zip.file("eas.json", JSON.stringify({
      cli: { version: ">= 7.0.0" },
      build: {
        development: { developmentClient: true, distribution: "internal" },
        preview: { distribution: "internal", android: { buildType: "apk" } },
        production: { android: { buildType: "app-bundle" }, ios: { resourceClass: "m-medium" } },
        local: { android: { buildType: "app-bundle" }, local: true },
      },
      submit: {
        production: {},
      },
    }, null, 2));

    // ── scripts/build-android.sh ───────────────────────────────────────────────
    zip.file("scripts/build-android.sh", `#!/bin/bash
# ─────────────────────────────────────────────
#  Local Android AAB build for ${appName}
#  Produces: android/app/build/outputs/bundle/release/app-release.aab
# ─────────────────────────────────────────────
set -e

echo ""
echo "▶ Checking prerequisites..."

# Java
if ! command -v java &> /dev/null; then
  echo "✗ Java not found."
  echo "  Install JDK 17 from: https://adoptium.net"
  exit 1
fi
echo "✓ Java: $(java -version 2>&1 | head -1)"

# Android SDK
if [ -z "$ANDROID_HOME" ] && [ -z "$ANDROID_SDK_ROOT" ]; then
  echo "✗ ANDROID_HOME not set."
  echo "  Install Android Studio, then add to your shell profile:"
  echo "  export ANDROID_HOME=\\$HOME/Library/Android/sdk"
  echo "  export PATH=\\$PATH:\\$ANDROID_HOME/platform-tools"
  exit 1
fi
echo "✓ Android SDK: \${ANDROID_HOME:-\$ANDROID_SDK_ROOT}"

# Node
if ! command -v node &> /dev/null; then
  echo "✗ Node.js not found. Install from: https://nodejs.org"
  exit 1
fi
echo "✓ Node: $(node --version)"

echo ""
echo "▶ Installing dependencies..."
npm install

echo ""
echo "▶ Generating native Android project..."
npx expo prebuild --platform android --clean

echo ""
echo "▶ Setting up release keystore..."
KEYSTORE_PATH="android/app/release.keystore"
if [ ! -f "\\$KEYSTORE_PATH" ]; then
  echo "  Generating new keystore (save the passwords shown below)..."
  keytool -genkey -v \\
    -keystore "\\$KEYSTORE_PATH" \\
    -alias release \\
    -keyalg RSA \\
    -keysize 2048 \\
    -validity 10000 \\
    -storepass android \\
    -keypass android \\
    -dname "CN=${appName}, OU=Mobile, O=${appName}, L=City, S=State, C=US"
  echo "✓ Keystore created at \\$KEYSTORE_PATH"
  echo "  Store password: android"
  echo "  Key password:   android"
  echo "  ⚠ Change these passwords before publishing to Google Play!"
fi

echo ""
echo "▶ Writing signing config..."
GRADLE_PROPS="android/gradle.properties"
if ! grep -q "MYAPP_RELEASE_STORE_FILE" "\\$GRADLE_PROPS"; then
  cat >> "\\$GRADLE_PROPS" << 'EOF'

# Release signing
MYAPP_RELEASE_STORE_FILE=release.keystore
MYAPP_RELEASE_KEY_ALIAS=release
MYAPP_RELEASE_STORE_PASSWORD=android
MYAPP_RELEASE_KEY_PASSWORD=android
EOF
fi

# Patch build.gradle to use signing config if not already patched
BUILD_GRADLE="android/app/build.gradle"
if ! grep -q "MYAPP_RELEASE_STORE_FILE" "\\$BUILD_GRADLE"; then
  sed -i.bak '/signingConfigs {/a\\
        release {\\
            storeFile file(MYAPP_RELEASE_STORE_FILE)\\
            storePassword MYAPP_RELEASE_STORE_PASSWORD\\
            keyAlias MYAPP_RELEASE_KEY_ALIAS\\
            keyPassword MYAPP_RELEASE_KEY_PASSWORD\\
        }' "\\$BUILD_GRADLE"
  sed -i.bak 's/signingConfig signingConfigs.debug/signingConfig signingConfigs.release/' "\\$BUILD_GRADLE"
fi

echo ""
echo "▶ Building AAB (this takes 3–8 minutes first time)..."
cd android
./gradlew bundleRelease --no-daemon

echo ""
echo "═══════════════════════════════════════════"
echo "✅  Build complete!"
echo ""
echo "📦 AAB file:"
echo "   android/app/build/outputs/bundle/release/app-release.aab"
echo ""
echo "📋 Next steps:"
echo "   1. Go to play.google.com/console"
echo "   2. Create app → Production → Upload AAB"
echo "═══════════════════════════════════════════"
`);

    // ── scripts/build-apk.sh ──────────────────────────────────────────────────
    zip.file("scripts/build-apk.sh", `#!/bin/bash
# Local debug APK for testing on a real device (no Play Store needed)
set -e

echo "▶ Installing dependencies..."
npm install

echo "▶ Generating native Android project..."
npx expo prebuild --platform android

echo "▶ Building debug APK..."
cd android
./gradlew assembleDebug --no-daemon

echo ""
echo "✅ APK ready:"
echo "   android/app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "📱 Install on connected device:"
echo "   adb install android/app/build/outputs/apk/debug/app-debug.apk"
`);

    // ── scripts/build-ios.sh ──────────────────────────────────────────────────
    zip.file("scripts/build-ios.sh", `#!/bin/bash
# Local iOS IPA build — requires macOS + Xcode
set -e

# Check macOS
if [[ "\\$OSTYPE" != "darwin"* ]]; then
  echo "✗ iOS builds require macOS."
  echo "  Use EAS cloud instead: eas build --platform ios --profile production"
  exit 1
fi

# Check Xcode
if ! command -v xcodebuild &> /dev/null; then
  echo "✗ Xcode not found."
  echo "  Install from: https://developer.apple.com/xcode/"
  exit 1
fi
echo "✓ Xcode: $(xcodebuild -version | head -1)"

echo ""
echo "▶ Installing dependencies..."
npm install
npx pod-install  2>/dev/null || true

echo ""
echo "▶ Generating native iOS project..."
npx expo prebuild --platform ios --clean

echo ""
echo "▶ Installing CocoaPods..."
cd ios && pod install && cd ..

echo ""
echo "▶ Building iOS archive..."
cd ios
xcodebuild -workspace ${appName}.xcworkspace \\
  -scheme ${appName} \\
  -sdk iphoneos \\
  -configuration Release \\
  -archivePath build/${appName}.xcarchive \\
  archive

echo ""
echo "▶ Exporting IPA..."
xcodebuild -exportArchive \\
  -archivePath build/${appName}.xcarchive \\
  -exportPath build/ \\
  -exportOptionsPlist ExportOptions.plist 2>/dev/null || echo "  ⚠ Add ExportOptions.plist for App Store export (see README)"

echo ""
echo "✅ Archive ready: ios/build/${appName}.xcarchive"
echo "   Open in Xcode Organizer to distribute to App Store."
`);

    // ── ExportOptions.plist ────────────────────────────────────────────────────
    zip.file("ios/ExportOptions.plist", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>method</key>
  <string>app-store</string>
  <key>uploadSymbols</key>
  <true/>
  <key>compileBitcode</key>
  <false/>
</dict>
</plist>
`);

    // ── README ─────────────────────────────────────────────────────────────────
    zip.file("README.md", `# ${appName} — React Native (Expo)

## Quick Start (Expo Go)

\`\`\`bash
npm install
npx expo start
\`\`\`
Scan the QR code with **Expo Go** on your phone.

---

## Build Android AAB locally (Google Play)

**Requirements:** JDK 17, Android Studio

\`\`\`bash
chmod +x scripts/build-android.sh
./scripts/build-android.sh
\`\`\`

Output: \`android/app/build/outputs/bundle/release/app-release.aab\`
Upload this file to Google Play Console → Production.

---

## Build APK locally (direct install, no Play Store)

\`\`\`bash
chmod +x scripts/build-apk.sh
./scripts/build-apk.sh

# Install on connected Android device:
adb install android/app/build/outputs/apk/debug/app-debug.apk
\`\`\`

---

## Build iOS locally (macOS + Xcode only)

\`\`\`bash
chmod +x scripts/build-ios.sh
./scripts/build-ios.sh
\`\`\`

Output: \`ios/build/${appName}.xcarchive\` — open in Xcode Organizer to submit to App Store.

---

## Build with EAS Cloud (no local tools needed)

\`\`\`bash
npm install -g eas-cli
eas login
eas build:configure

# Android AAB
eas build --platform android --profile production

# iOS IPA
eas build --platform ios --profile production
\`\`\`

---

## Structure

\`\`\`
app/
  _layout.tsx            Root navigation
  index.tsx              Home screen
${allPages.slice(1).map(p => `  ${sl(p.name)}.tsx           ${p.name} screen`).join("\n")}
components/sections/     Edit these — one file per section
scripts/
  build-android.sh       Local AAB build
  build-apk.sh           Local debug APK
  build-ios.sh           Local iOS build (macOS only)
\`\`\`

## Customise accent colour

Find & replace \`${isAndroid ? "#6200ea" : "#5856d6"}\` across \`components/sections/\` to change the brand colour.

## Navigation between screens

\`\`\`tsx
import { router } from 'expo-router';

<TouchableOpacity onPress={() => router.push('/${allPages[1] ? sl(allPages[1].name) : "pricing"}')}>
  <Text>Go to ${allPages[1]?.name || "Pricing"}</Text>
</TouchableOpacity>
\`\`\`
`);

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${sl(appName)}-expo-project.zip`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setRnProjectState("done"); setTimeout(() => setRnProjectState("idle"), 3000);
  }

  function previewPage() { const c = getCleanArtboard(); if (!c) return; const blob = new Blob([buildHtmlDoc(activePage.name, c.innerHTML)], { type: "text/html" }); const url = URL.createObjectURL(blob); window.open(url, "_blank"); setTimeout(() => URL.revokeObjectURL(url), 10000); }
  function exportProject() { const blob = new Blob([JSON.stringify(serialize(pages), null, 2)], { type: "application/json" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "builder-project.json"; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); }
  function importProject(e: React.ChangeEvent<HTMLInputElement>) { const f = e.target.files?.[0]; if (!f) return; const r = new FileReader(); r.onload = ev => { try { const d = deserialize(JSON.parse(ev.target?.result as string)); if (d.length) { commitPages(d); setActivePageId(d[0].id); setEditingUid(null); setEditingBlocks(null); } } catch { alert("Could not read project file."); } }; r.readAsText(f); e.target.value = ""; }

  // ── Misc
  const filtered = LIBRARY
    .filter(g => platformFilter === "all" ? !g.platform : g.platform === platformFilter)
    .map(g => search.trim() ? { ...g, items: g.items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())) } : g)
    .filter(g => g.items.length);

  const cmdResults = cmdQuery.trim()
    ? LIBRARY.flatMap(g => g.items.filter(i => i.name.toLowerCase().includes(cmdQuery.toLowerCase())).map(i => ({ ...i, section: g.section })))
    : LIBRARY.flatMap(g => g.items.map(i => ({ ...i, section: g.section }))).slice(0, 24);
  function showPreview(item: Entry) { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); setPreview(item); }
  function hidePreview() { hoverTimeout.current = setTimeout(() => setPreview(null), 120); }
  function zoomIn() { setZoom(z => Math.min(z + 10, 200)); }
  function zoomOut() { setZoom(z => Math.max(z - 10, 20)); }
  function fitZoom() {
    const container = canvasScrollRef.current;
    if (!container) { setZoom(FIT_ZOOM[canvasMode]); return; }
    const available = container.clientWidth - 96; // 48px padding each side
    const computed = Math.floor((available / CANVAS_WIDTHS[canvasMode]) * 100);
    setZoom(Math.max(20, Math.min(200, computed)));
  }
  const editingItem = canvas.find(i => i.uid === editingUid);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* ── LEFT SIDEBAR ── */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-gray-100 flex-shrink-0">
          <a href="/" className="flex items-center gap-1.5 mb-3 group w-fit">
            <svg className="text-gray-400 group-hover:text-indigo-500 transition-colors" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <rect x="15" y="2"  width="15" height="15" rx="4" fill="#c4b5fd"/>
              <rect x="8"  y="8"  width="15" height="15" rx="4" fill="#818cf8"/>
              <rect x="2"  y="15" width="15" height="15" rx="4" fill="#6366f1"/>
            </svg>
            <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 tracking-tight transition-colors">Bloxer</span>
          </a>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-gray-900 text-sm">Pages</h2>
            <button onClick={addPage} className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold px-2 py-0.5 rounded-md">+ New</button>
          </div>
          <div className="space-y-0.5">
            {pages.map(page => (
              <div key={page.id} className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 group/page transition-colors ${page.id === activePageId ? "bg-indigo-50" : "hover:bg-gray-50 cursor-pointer"}`}>
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${page.id === activePageId ? "bg-indigo-500" : "bg-gray-300"}`} />
                {renamingPageId === page.id ? (
                  <input autoFocus defaultValue={page.name} onBlur={e => renamePage(page.id, e.target.value)} onKeyDown={e => { if (e.key === "Enter") renamePage(page.id, e.currentTarget.value); if (e.key === "Escape") setRenamingPageId(null); }} className="flex-1 text-xs bg-transparent border-b border-indigo-400 outline-none min-w-0" />
                ) : (
                  <span onClick={() => switchPage(page.id)} onDoubleClick={() => setRenamingPageId(page.id)} className={`flex-1 text-xs truncate select-none ${page.id === activePageId ? "text-indigo-700 font-semibold" : "text-gray-600"}`}>{page.name}</span>
                )}
                <span className="text-xs text-gray-300 tabular-nums">{page.sections.length}</span>
                {pages.length > 1 && renamingPageId !== page.id && <button onClick={() => deletePage(page.id)} className="opacity-0 group-hover/page:opacity-100 text-gray-300 hover:text-red-400 text-xs">✕</button>}
              </div>
            ))}
          </div>
        </div>

        <div className="px-3 pt-3 pb-2 flex-shrink-0">
          <div className="flex gap-1 bg-gray-100 p-0.5 rounded-lg">
            {(["components","elements"] as const).map(tab => (
              <button key={tab} onClick={() => setSidebarTab(tab)} className={`flex-1 text-xs font-semibold py-1.5 rounded-md capitalize ${sidebarTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>{tab}</button>
            ))}
          </div>
        </div>

        {sidebarTab === "components" ? (
          <>
            <div className="px-3 pb-2 flex-shrink-0 space-y-2">
              <div className="flex gap-1 bg-gray-100 p-0.5 rounded-lg">
                {(["all", "ios", "android"] as const).map(p => (
                  <button key={p} onClick={() => { setPlatformFilter(p); setSearch(""); setPreview(null); }}
                    className={`flex-1 text-[10px] font-semibold py-1 rounded-md capitalize ${platformFilter === p ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
                    {p === "all" ? "Web" : p === "ios" ? "iOS" : "Android"}
                  </button>
                ))}
              </div>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              {filtered.map(group => (
                <div key={group.section} className="mb-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">{group.section}</p>
                  {group.items.map(item => (
                    <button key={item.file} onClick={() => { add(item); setPreview(null); }} onMouseEnter={() => showPreview(item)} onMouseLeave={hidePreview}
                      className={`w-full text-left text-xs px-3 py-2 rounded-lg flex items-center justify-between group ${preview?.file === item.file ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                      <span>{item.name}</span>
                      <span className={`text-indigo-400 font-bold ${preview?.file === item.file ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>+</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="px-3 pb-2 flex-shrink-0">
              <button onClick={addBlank} className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-xl py-3 text-gray-400 hover:text-indigo-600 text-xs font-semibold">+ Add Blank Section</button>
            </div>
            {!editingUid && <div className="mx-3 mb-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex-shrink-0"><p className="text-xs text-amber-700 font-medium">Click ✏️ Edit on a section to add elements.</p></div>}
            <div className="flex-1 overflow-y-auto p-2">
              {ELEMENTS.map(group => (
                <div key={group.category} className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-1">{group.category}</p>
                  <div className="grid grid-cols-2 gap-1">
                    {group.items.map(el => (
                      <button key={el.label} onMouseDown={e => e.preventDefault()} onClick={() => insertElement(el.html)} disabled={!editingUid}
                        onMouseEnter={e => {
                          if (elemPopupTimer.current) clearTimeout(elemPopupTimer.current);
                          const r = e.currentTarget.getBoundingClientRect();
                          setElemPopup({ html: el.html, label: el.label, top: r.top });
                        }}
                        onMouseLeave={() => { elemPopupTimer.current = setTimeout(() => setElemPopup(null), 180); }}
                        className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl border text-center ${editingUid ? "border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer" : "border-gray-100 opacity-40 cursor-not-allowed"}`}>
                        <span className="text-lg leading-none">{el.icon}</span>
                        <span className="text-xs text-gray-600 font-medium leading-tight">{el.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </aside>

      {/* ── Command Palette (Cmd+K) ── */}
      {cmdOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24 px-4" onClick={() => setCmdOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <span className="text-gray-400 text-lg">⌘</span>
              <input ref={cmdRef} value={cmdQuery} onChange={e => { setCmdQuery(e.target.value); setCmdIdx(0); }}
                onKeyDown={e => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setCmdIdx(i => Math.min(i + 1, cmdResults.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setCmdIdx(i => Math.max(i - 1, 0)); }
                  if (e.key === "Enter") { const r = cmdResults[cmdIdx]; if (r) { add(r); setCmdOpen(false); } }
                  if (e.key === "Escape") setCmdOpen(false);
                }}
                placeholder="Search sections to add…" className="flex-1 text-sm outline-none bg-transparent" />
              <kbd className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">ESC</kbd>
            </div>
            <div className="overflow-y-auto max-h-72 py-1">
              {cmdResults.length === 0 && <p className="text-xs text-gray-400 text-center py-8">No sections found</p>}
              {cmdResults.map((item, i) => (
                <button key={item.file} onClick={() => { add(item); setCmdOpen(false); }}
                  onMouseEnter={() => setCmdIdx(i)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${i === cmdIdx ? "bg-indigo-50" : "hover:bg-gray-50"}`}>
                  <div>
                    <p className={`text-sm font-medium ${i === cmdIdx ? "text-indigo-700" : "text-gray-800"}`}>{item.name}</p>
                    <p className="text-xs text-gray-400">{item.section}</p>
                  </div>
                  <span className={`text-xs font-bold ${i === cmdIdx ? "text-indigo-400" : "text-gray-300"}`}>+ Add</span>
                </button>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 flex items-center gap-4 text-xs text-gray-400">
              <span>↑↓ navigate</span><span>↵ add section</span><span>⌘K toggle</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Project Settings Panel ── */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setSettingsOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Project Settings</h3>
              <button onClick={() => setSettingsOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl">×</button>
            </div>
            <div className="p-5 space-y-5 max-h-[80vh] overflow-y-auto">

              {/* Brand Colors */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Brand Colors</label>
                {/* Palette presets */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {[
                    { name:"Indigo",   p:"#6366f1", s:"#10b981" },
                    { name:"Blue",     p:"#3b82f6", s:"#f59e0b" },
                    { name:"Rose",     p:"#f43f5e", s:"#8b5cf6" },
                    { name:"Violet",   p:"#7c3aed", s:"#06b6d4" },
                    { name:"Orange",   p:"#f97316", s:"#3b82f6" },
                    { name:"Emerald",  p:"#10b981", s:"#6366f1" },
                    { name:"Pink",     p:"#ec4899", s:"#f59e0b" },
                    { name:"Slate",    p:"#475569", s:"#38bdf8" },
                  ].map(({ name, p, s }) => (
                    <button key={name} title={name} onClick={() => { setBrandColor(p); setBrandSecondary(s); }}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg border border-gray-200 hover:border-gray-400 transition-all text-xs text-gray-600">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: p }} />
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: s }} />
                      {name}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1.5">Primary</p>
                    <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-2 py-1.5">
                      <input type="color" value={brandColor} onChange={e => setBrandColor(e.target.value)} className="w-7 h-7 rounded-lg border-0 cursor-pointer p-0" />
                      <input value={brandColor} onChange={e => setBrandColor(e.target.value)} className="flex-1 text-xs font-mono outline-none min-w-0" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1.5">Secondary</p>
                    <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-2 py-1.5">
                      <input type="color" value={brandSecondary} onChange={e => setBrandSecondary(e.target.value)} className="w-7 h-7 rounded-lg border-0 cursor-pointer p-0" />
                      <input value={brandSecondary} onChange={e => setBrandSecondary(e.target.value)} className="flex-1 text-xs font-mono outline-none min-w-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Font */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Brand Font</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: "System", value: "" },
                    { label: "Inter", value: "Inter" },
                    { label: "Geist", value: "Geist" },
                    { label: "Roboto", value: "Roboto" },
                    { label: "Poppins", value: "Poppins" },
                    { label: "Nunito", value: "Nunito" },
                    { label: "Playfair", value: "Playfair Display" },
                    { label: "Merriweather", value: "Merriweather" },
                  ].map(f => (
                    <button key={f.value} onClick={() => setBrandFont(f.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${brandFont === f.value ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-200 text-gray-600 hover:border-gray-400"}`}
                      style={{ fontFamily: f.value || "system-ui" }}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas Background */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Canvas Background</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-2 py-1.5">
                  <input type="color" value={canvasBg} onChange={e => setCanvasBg(e.target.value)} className="w-7 h-7 rounded-lg border-0 cursor-pointer p-0" />
                  <input value={canvasBg} onChange={e => setCanvasBg(e.target.value)} className="flex-1 text-xs font-mono outline-none" />
                </div>
              </div>

              {/* Custom CSS */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Custom CSS <span className="text-gray-300 font-normal normal-case">(injected on export)</span></label>
                <textarea value={customCSS} onChange={e => setCustomCSS(e.target.value)} rows={4}
                  placeholder={`:root { --brand: ${brandColor}; }\n.hero { font-size: 2.5rem; }`}
                  className="w-full text-xs font-mono border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" />
              </div>
            </div>
            <div className="px-5 pb-5">
              <button onClick={() => setSettingsOpen(false)} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">Done</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Advanced Routing Panel ── */}
      {routingOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setRoutingOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col" style={{ maxHeight: "85vh" }} onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Routing & Navigation</h3>
                <p className="text-xs text-gray-400 mt-0.5">{pages.length} pages · {redirects.length} redirects</p>
              </div>
              <button onClick={() => setRoutingOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl leading-none">×</button>
            </div>

            {/* Tabs */}
            <div className="px-5 pt-3 flex gap-1 flex-shrink-0">
              {(["pages", "redirects", "links"] as const).map(t => (
                <button key={t} onClick={() => setRoutingTab(t)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${routingTab === t ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
                  {t === "pages" ? `Pages (${pages.length})` : t === "redirects" ? `Redirects (${redirects.length})` : "Link Helper"}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">

              {/* ── Pages tab ── */}
              {routingTab === "pages" && pages.map((p, i) => (
                <div key={p.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                  {/* Page row */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${i === 0 ? "bg-indigo-100 text-indigo-700" : "bg-gray-200 text-gray-600"}`}>{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                      <p className="text-xs font-mono text-indigo-500">{pageSlug(p.name, i)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select value={p.routeType ?? "public"} onChange={e => updateRouteType(p.id, e.target.value as RouteType)}
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-400">
                        <option value="public">🌐 Public</option>
                        <option value="auth">🔒 Auth Required</option>
                        <option value="redirect">↪ Redirect</option>
                      </select>
                      <button onClick={() => setEditingMetaId(editingMetaId === p.id ? null : p.id)}
                        className={`text-xs px-2 py-1 rounded-lg border transition-colors ${editingMetaId === p.id ? "bg-indigo-50 border-indigo-200 text-indigo-600" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}>
                        {editingMetaId === p.id ? "▲ SEO" : "▼ SEO"}
                      </button>
                    </div>
                  </div>

                  {/* Redirect target */}
                  {p.routeType === "redirect" && (
                    <div className="px-4 py-3 bg-amber-50 border-t border-amber-100 flex items-center gap-2">
                      <span className="text-xs text-amber-700 font-medium flex-shrink-0">Redirect to</span>
                      <input value={p.redirectTo ?? ""} onChange={e => updateRouteType(p.id, "redirect", e.target.value)}
                        placeholder="/new-page" className="flex-1 text-xs font-mono border border-amber-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-400 bg-white" />
                    </div>
                  )}

                  {/* SEO metadata */}
                  {editingMetaId === p.id && (
                    <div className="px-4 py-3 border-t border-gray-100 space-y-3 bg-white">
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Page Title <span className="text-gray-300 font-normal normal-case">(shown in browser tab)</span></label>
                        <input value={p.meta?.title ?? ""} onChange={e => updatePageMeta(p.id, { title: e.target.value })}
                          placeholder={`${p.name} — My App`} className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Meta Description <span className="text-gray-300 font-normal normal-case">(shown in Google results)</span></label>
                        <textarea value={p.meta?.description ?? ""} onChange={e => updatePageMeta(p.id, { description: e.target.value })}
                          rows={2} placeholder="Describe this page in 1-2 sentences…" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400 resize-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">OG Image URL <span className="text-gray-300 font-normal normal-case">(shown when shared on social)</span></label>
                        <input value={p.meta?.ogImage ?? ""} onChange={e => updatePageMeta(p.id, { ogImage: e.target.value })}
                          placeholder="https://…/og-image.png" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* ── Redirects tab ── */}
              {routingTab === "redirects" && (
                <div className="space-y-3">
                  {redirects.length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">No redirects yet. Add one below.</div>
                  )}
                  {redirects.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                      <input value={r.from} onChange={e => setRedirects(rs => rs.map((x, j) => j === i ? { ...x, from: e.target.value } : x))}
                        placeholder="/old-path" className="flex-1 text-xs font-mono border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400 bg-white" />
                      <span className="text-gray-400 text-sm flex-shrink-0">→</span>
                      <input value={r.to} onChange={e => setRedirects(rs => rs.map((x, j) => j === i ? { ...x, to: e.target.value } : x))}
                        placeholder="/new-path" className="flex-1 text-xs font-mono border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400 bg-white" />
                      <button onClick={() => setRedirects(rs => rs.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600 w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 flex-shrink-0">✕</button>
                    </div>
                  ))}
                  <button onClick={() => setRedirects(rs => [...rs, { from: "", to: "" }])}
                    className="w-full py-2.5 border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-xl text-xs font-semibold text-gray-400 hover:text-indigo-600 transition-all">
                    + Add Redirect
                  </button>
                  {redirects.length > 0 && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                      <p className="text-xs text-amber-700 font-medium mb-1">Exported to <code className="bg-amber-100 px-1 rounded">next.config.ts</code></p>
                      <p className="text-xs text-amber-600 leading-relaxed">These redirects are included in the Next.js web export as permanent (308) redirects.</p>
                    </div>
                  )}
                </div>
              )}

              {/* ── Link Helper tab ── */}
              {routingTab === "links" && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 bg-gray-50 rounded-xl p-3">Copy any URL below and paste it into a button or link in your Navbar section.</p>
                  {pages.map((p, i) => {
                    const url = pageSlug(p.name, i);
                    return (
                      <div key={p.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                          <p className="text-xs font-mono text-indigo-500">{url}</p>
                        </div>
                        <button onClick={() => { navigator.clipboard.writeText(url); }}
                          className="text-xs bg-white border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 px-3 py-1.5 rounded-lg transition-colors flex-shrink-0">
                          Copy URL
                        </button>
                      </div>
                    );
                  })}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 space-y-2">
                    <p className="text-xs font-semibold text-indigo-800">How to add a nav link in your Navbar</p>
                    <ol className="text-xs text-indigo-700 space-y-1 list-decimal list-inside">
                      <li>Copy the URL above for the page you want to link to</li>
                      <li>In the builder, click ✏️ Edit on your Navbar section</li>
                      <li>Select the nav link text you want to change</li>
                      <li>In the element editor, click the Link (🔗) button</li>
                      <li>Paste the URL — done!</li>
                    </ol>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Quick HTML link snippets</p>
                    {pages.map((p, i) => (
                      <div key={p.id} className="flex items-center gap-2 mb-2">
                        <code className="flex-1 text-[10px] bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                          {`<a href="${pageSlug(p.name, i)}">${p.name}</a>`}
                        </code>
                        <button onClick={() => navigator.clipboard.writeText(`<a href="${pageSlug(p.name, i)}">${p.name}</a>`)}
                          className="text-xs bg-white border border-gray-200 px-2 py-1.5 rounded-lg hover:border-indigo-300 flex-shrink-0">Copy</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <button onClick={() => setRoutingOpen(false)} className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors">Done</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Keyboard Shortcuts Panel ── */}
      {/* ── Text Editor Panel ── */}
      {textEditorUid && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-4" onClick={() => setTextEditorUid(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Edit Text</h3>
                <p className="text-xs text-gray-400 mt-0.5">{canvas.find(s => s.uid === textEditorUid)?.name} — edit any text in this section</p>
              </div>
              <button onClick={() => setTextEditorUid(null)} className="text-gray-400 hover:text-gray-700 text-xl">×</button>
            </div>
            {textEditorItems.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">No editable text found in this section.</div>
            ) : (
              <div className="max-h-[60vh] overflow-y-auto divide-y divide-gray-50">
                {textEditorItems.map((item, i) => (
                  <div key={i} className="px-5 py-3 flex items-start gap-3">
                    <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 mt-1.5 flex-shrink-0">{item.tag}</span>
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
                        value={textEditorItems[i].current}
                        onChange={e => {
                          const updated = [...textEditorItems];
                          updated[i] = { ...updated[i], current: e.target.value };
                          setTextEditorItems(updated);
                        }}
                      />
                      {item.current !== item.text && (
                        <p className="text-xs text-gray-400 mt-1 truncate">Original: {item.text}</p>
                      )}
                    </div>
                    {textEditorItems[i].current !== textEditorItems[i].text && (
                      <button onClick={() => { const u=[...textEditorItems]; u[i]={...u[i],current:u[i].text}; setTextEditorItems(u); }} title="Reset" className="text-gray-300 hover:text-orange-400 text-sm mt-2 flex-shrink-0">↩</button>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
              <button onClick={() => { saveTextOverrides(textEditorUid, textEditorItems.map(i => ({ ...i, current: i.text }))); setTextEditorUid(null); }} className="text-xs text-red-400 hover:text-red-600">Reset all text</button>
              <div className="flex gap-2">
                <button onClick={() => setTextEditorUid(null)} className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-100">Cancel</button>
                <button onClick={() => { saveTextOverrides(textEditorUid, textEditorItems); setTextEditorUid(null); }} className="text-xs bg-emerald-600 text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-emerald-700">Save text</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Link Editor Panel ── */}
      {linkEditorUid && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-4" onClick={() => setLinkEditorUid(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Section Links</h3>
                <p className="text-xs text-gray-400 mt-0.5">{canvas.find(s => s.uid === linkEditorUid)?.name} — assign a URL to each button or link</p>
              </div>
              <button onClick={() => setLinkEditorUid(null)} className="text-gray-400 hover:text-gray-700 text-xl">×</button>
            </div>
            {linkEditorItems.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">No buttons or links found in this section.</div>
            ) : (
              <div className="max-h-[60vh] overflow-y-auto divide-y divide-gray-50">
                {linkEditorItems.map((item, i) => (
                  <div key={i} className="px-5 py-3 flex items-center gap-3">
                    <span className={`text-xs font-mono px-1.5 py-0.5 rounded flex-shrink-0 ${item.tag === 'a' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>{item.tag}</span>
                    <span className="text-sm text-gray-700 flex-1 truncate min-w-0" title={item.text}>{item.text || '(no text)'}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <select
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 max-w-[100px]"
                        value={pages.some(p => `/${p.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}` === linkEditorItems[i].current || (i === 0 && linkEditorItems[i].current === '/')) ? linkEditorItems[i].current : ''}
                        onChange={e => {
                          const updated = [...linkEditorItems];
                          updated[i] = { ...updated[i], current: e.target.value };
                          setLinkEditorItems(updated);
                        }}
                      >
                        <option value="">Pick page…</option>
                        {pages.map((p, pi) => {
                          const slug = pi === 0 ? '/' : `/${p.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`;
                          return <option key={p.id} value={slug}>{p.name} ({slug})</option>;
                        })}
                      </select>
                      <input
                        type="text"
                        placeholder="or type URL…"
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 w-28 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={linkEditorItems[i].current}
                        onChange={e => {
                          const updated = [...linkEditorItems];
                          updated[i] = { ...updated[i], current: e.target.value };
                          setLinkEditorItems(updated);
                        }}
                      />
                      {linkEditorItems[i].current && (
                        <button onClick={() => { const u=[...linkEditorItems]; u[i]={...u[i],current:''}; setLinkEditorItems(u); }} className="text-gray-300 hover:text-red-400 text-sm">✕</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
              <button onClick={() => { saveSectionLinks(linkEditorUid, linkEditorItems.map(i => ({ nth: i.nth, tag: i.tag, text: i.text, href: '' }))); setLinkEditorUid(null); }} className="text-xs text-red-400 hover:text-red-600">Clear all links</button>
              <div className="flex gap-2">
                <button onClick={() => setLinkEditorUid(null)} className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-100">Cancel</button>
                <button onClick={() => { saveSectionLinks(linkEditorUid, linkEditorItems.map(i => ({ nth: i.nth, tag: i.tag, text: i.text, href: i.current }))); setLinkEditorUid(null); }} className="text-xs bg-indigo-600 text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-indigo-700">Save links</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {shortcutsOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setShortcutsOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Keyboard Shortcuts</h3>
              <button onClick={() => setShortcutsOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl">×</button>
            </div>
            <div className="p-5 space-y-1 max-h-[70vh] overflow-y-auto">
              {[
                ["⌘K", "Command palette — add any section"],
                ["⌘Z", "Undo"],
                ["⌘⇧Z", "Redo"],
                ["⌘C", "Copy selected block"],
                ["⌘V", "Paste block"],
                ["Delete / ⌫", "Delete selected block"],
                ["⌘D", "Duplicate selected block"],
                ["⌘A", "Select all blocks"],
                ["Escape", "Deselect / close panel"],
                ["Space + drag", "Pan the canvas"],
                ["Scroll", "Zoom in / out"],
                ["?", "Show this panel"],
                ["⌘⇧P", "Preview page"],
              ].map(([key, desc]) => (
                <div key={key} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-600">{desc}</span>
                  <kbd className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg font-mono flex-shrink-0 ml-3">{key}</kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Element hover popup */}
      {elemPopup && (
        <div
          className="fixed z-50"
          style={{ left: 268, top: Math.max(8, Math.min(elemPopup.top - 8, (typeof window !== "undefined" ? window.innerHeight : 800) - 360)), width: 300 }}
          onMouseEnter={() => { if (elemPopupTimer.current) clearTimeout(elemPopupTimer.current); }}
          onMouseLeave={() => { elemPopupTimer.current = setTimeout(() => setElemPopup(null), 180); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">{elemPopup.label}</span>
              <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Preview</span>
            </div>
            <div className="p-4 overflow-auto max-h-72 bg-white" dangerouslySetInnerHTML={{ __html: elemPopup.html }} />
          </div>
          {/* Arrow pointing left */}
          <div className="absolute top-4 -left-2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-[-45deg]" />
        </div>
      )}

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* ── Top bar — ROW 1: identity + project actions ── */}
        <div className="bg-white border-b border-gray-100 px-4 py-1.5 flex items-center justify-between flex-shrink-0 gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <a href="/" className="flex items-center gap-1.5 flex-shrink-0 group">
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                <defs><linearGradient id="blg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#4338ca"/></linearGradient></defs>
                <rect width="40" height="40" rx="10" fill="url(#blg)"/>
                <rect x="7" y="7" width="26" height="5" rx="2.5" fill="white" opacity="0.95"/>
                <rect x="7" y="14" width="26" height="8" rx="2" fill="white" opacity="0.75"/>
                <rect x="7" y="24" width="7" height="9" rx="2" fill="white" opacity="0.9"/>
                <rect x="16.5" y="24" width="7" height="9" rx="2" fill="white" opacity="0.9"/>
                <rect x="26" y="24" width="7" height="9" rx="2" fill="white" opacity="0.9"/>
              </svg>
              <span className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">Bloxer</span>
            </a>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-600 font-medium cursor-pointer hover:text-indigo-600" onDoubleClick={() => setRenamingPageId(activePage.id)}>
              {renamingPageId === activePage.id ? (<input autoFocus defaultValue={activePage.name} onBlur={e => renamePage(activePage.id, e.target.value)} onKeyDown={e => { if (e.key === "Enter") renamePage(activePage.id, e.currentTarget.value); if (e.key === "Escape") setRenamingPageId(null); }} className="border-b border-indigo-400 outline-none bg-transparent text-sm font-medium w-28" />) : activePage.name}
            </span>
            <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">{canvas.length}s</span>
            <span className={`text-xs ${saveStatus === "saving" ? "text-amber-500" : "text-gray-300"}`}>{saveStatus === "saving" ? "saving…" : "✓ saved"}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button onClick={exportProject} className="px-2.5 h-7 text-xs text-gray-500 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50">Export</button>
            <label className="px-2.5 h-7 text-xs text-gray-500 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer flex items-center">Import<input type="file" accept=".json" className="hidden" onChange={importProject} /></label>
            <button onClick={() => setRnDeviceMode(s => !s)} title="iPhone frame preview" className={`px-2 h-7 text-xs rounded-lg border transition-colors ${rnDeviceMode ? "bg-gray-900 text-white border-gray-900" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}>📱 Frame</button>
            <button onClick={() => setRoutingOpen(true)} className="px-2.5 h-7 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">Routes</button>
            <button onClick={() => setSettingsOpen(true)} className="px-2.5 h-7 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">⚙ Settings</button>
            <button onClick={() => setShortcutsOpen(true)} className="px-2 h-7 text-xs rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">?</button>
            <div className="w-px h-4 bg-gray-200" />
            <button onClick={exportWebProject} className={`px-3 h-7 text-xs font-semibold rounded-lg border transition-colors ${webProjectState === "done" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"}`}>{webProjectState === "done" ? "✓ Web!" : "⬇ Web"}</button>
            <button onClick={exportRNProject} className={`px-3 h-7 text-xs font-semibold rounded-lg border transition-colors ${rnProjectState === "done" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"}`}>{rnProjectState === "done" ? "✓ RN!" : "⬇ RN"}</button>
          </div>
        </div>

        {/* ── Top bar — ROW 2: canvas tools ── */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-1.5 flex items-center justify-between flex-shrink-0 gap-3">
          <div className="flex items-center gap-1.5">
            <button onClick={undo} disabled={!canUndo} title="Undo (⌘Z)" className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-30 text-sm">↩</button>
            <button onClick={redo} disabled={!canRedo} title="Redo (⌘Y)" className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-30 text-sm">↪</button>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
              {(["desktop","tablet","mobile"] as CanvasMode[]).map((m, i) => (
                <button key={m} onClick={() => setCanvasMode(m)} title={`${m} (${CANVAS_WIDTHS[m]}px)`}
                  className={`px-2.5 h-7 text-xs transition-colors ${canvasMode === m ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-50"} ${i > 0 ? "border-l border-gray-200" : ""}`}>
                  {m === "desktop" ? "🖥 Desktop" : m === "tablet" ? "⬜ Tablet" : "📱 Mobile"}
                </button>
              ))}
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <button onClick={() => setSnapGrid(s => !s)} title="Snap to grid" className={`px-2 h-7 text-xs rounded-lg border transition-colors ${snapGrid ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}`}>⊞ Snap</button>
            <button onClick={() => setShowLabels(s => !s)} title="Section labels" className={`px-2 h-7 text-xs rounded-lg border transition-colors ${showLabels ? "bg-indigo-100 text-indigo-700 border-indigo-200" : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}`}>Labels</button>
            <button onClick={() => { setPagesOverview(s => !s); setEditingUid(null); setEditingBlocks(null); }} title="Pages overview" className={`px-2 h-7 text-xs rounded-lg border transition-colors ${pagesOverview ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"}`}>⊞ Pages</button>
            <button onClick={() => setCmdOpen(true)} title="Command palette (⌘K)" className="px-2.5 h-7 text-xs rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center gap-1">⌘K</button>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {canvas.length > 0 && <>
              <button onClick={previewPage} className="px-3 h-7 text-xs font-semibold rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">Preview</button>
              <button onClick={downloadHTML} className={`px-3 h-7 text-xs font-semibold rounded-lg transition-colors ${codeState === "done" ? "bg-emerald-100 text-emerald-700" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}>{codeState === "done" ? "✓ Downloaded!" : "⬇ HTML"}</button>
              {editingBlocks && <button onClick={exportRN} className={`px-3 h-7 text-xs font-semibold rounded-lg border transition-colors ${rnState === "done" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`}>{rnState === "done" ? "✓ RN!" : "⬇ RN"}</button>}
              <button onClick={() => commitPages(pages.map(p => p.id === activePageId ? { ...p, sections: [] } : p))} className="px-2.5 h-7 text-xs text-gray-500 hover:text-red-600 border border-gray-200 bg-white rounded-lg hover:border-red-200">Clear</button>
              <div className="w-px h-4 bg-gray-200" />
            </>}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button onClick={zoomOut} disabled={zoom <= 20} className="px-2 h-7 text-gray-600 hover:bg-gray-100 disabled:opacity-30 font-bold">−</button>
              <button onClick={fitZoom} title="Fit to screen" className="px-2 h-7 text-xs font-mono text-gray-600 hover:bg-gray-100 min-w-[44px] text-center">{zoom}%</button>
              <button onClick={zoomIn} disabled={zoom >= 200} className="px-2 h-7 text-gray-600 hover:bg-gray-100 disabled:opacity-30 font-bold">+</button>
            </div>
          </div>
        </div>

        {/* Multi-select alignment bar */}
        {editingUid && selBlocks.length > 1 && (
          <div className="bg-indigo-50 border-b border-indigo-100 px-4 py-1.5 flex items-center gap-1.5 flex-shrink-0 flex-wrap">
            <span className="text-xs text-indigo-600 font-semibold mr-1">{selBlocks.length} selected</span>
            {([["left","⬅L"],["center","⬛H"],["right","➡R"],["top","⬆T"],["middle","⬛V"],["bottom","⬇B"]] as [Parameters<typeof alignBlocks>[0], string][]).map(([dir, icon]) => (
              <button key={dir} onClick={() => alignBlocks(dir)} title={`Align ${dir}`} className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-100 text-xs font-bold">{icon}</button>
            ))}
            <div className="w-px h-4 bg-indigo-200 mx-0.5" />
            <button onClick={() => distributeBlocks("h")} className="px-2 h-7 text-xs rounded-md bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-100">↔ Dist H</button>
            <button onClick={() => distributeBlocks("v")} className="px-2 h-7 text-xs rounded-md bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-100">↕ Dist V</button>
            <div className="w-px h-4 bg-indigo-200 mx-0.5" />
            <button onClick={() => { const s = syncBlocksFromDom(); const d = selBlocks.map(b => { const el = blockRefs.current.get(b.id); return { ...b, id: genId(), html: el ? el.innerHTML : b.html, x: b.x+20, y: b.y+20 }; }); setEditingBlocks([...s,...d]); setSelectedBlockIds(new Set(d.map(x=>x.id))); }} className="px-2 h-7 text-xs rounded-md bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-100">⎘ Dup</button>
            <button onClick={() => { const s = syncBlocksFromDom().filter(b => !selectedBlockIds.has(b.id)); selectedBlockIds.forEach(id => { blockRefs.current.delete(id); blockWrapperRefs.current.delete(id); }); setSelectedBlockIds(new Set()); setEditingBlocks(s.length ? s : [{ id: genId(), html: "", x: 40, y: 40 }]); }} className="px-2 h-7 text-xs rounded-md bg-white border border-red-200 text-red-500 hover:bg-red-50">✕ Del</button>
          </div>
        )}

        {/* Formatting toolbar */}
        {editingUid && editingItem && selBlocks.length <= 1 && (
          <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-1.5 flex-shrink-0 flex-wrap">
            <span className="text-xs text-gray-400 font-medium mr-1">Format:</span>
            {[{ cmd:"bold",label:"B",cls:"font-bold" },{ cmd:"italic",label:"I",cls:"italic" },{ cmd:"underline",label:"U",cls:"underline decoration-2" }].map(({ cmd,label,cls }) => (
              <button key={cmd} onMouseDown={e => { e.preventDefault(); saveSelection(); execFormat(cmd); }} className={`w-7 h-7 text-sm rounded-md hover:bg-gray-100 text-gray-700 flex items-center justify-center ${cls}`}>{label}</button>
            ))}
            <div className="w-px h-5 bg-gray-200 mx-0.5" />
            <label className="h-7 px-2 flex items-center gap-1.5 rounded-md hover:bg-gray-100 cursor-pointer border border-gray-200" onMouseDown={e => { e.preventDefault(); saveSelection(); setTimeout(() => textColorRef.current?.click(), 0); }}>
              <span className="text-xs font-bold text-gray-800" style={{ textDecoration:"underline solid #ef4444 2px" }}>A</span>
              <span className="text-xs text-gray-500">Color</span>
              <input ref={textColorRef} type="color" defaultValue="#000000" className="absolute opacity-0 w-0 h-0 pointer-events-none" onChange={e => applyTextColor(e.target.value)} />
            </label>
            <button onMouseDown={e => { e.preventDefault(); saveSelection(); setImageTab("upload"); setImageUrlInput(""); setImagePopover(p => !p); }} className="h-7 px-2 flex items-center gap-1 rounded-md hover:bg-gray-100 border border-gray-200 text-xs text-gray-600">📷 Image</button>
            <div className="w-px h-5 bg-gray-200 mx-0.5" />
            <label className="h-7 px-2 flex items-center gap-1.5 rounded-md hover:bg-gray-100 cursor-pointer border border-gray-200" onMouseDown={e => { e.preventDefault(); setTimeout(() => bgColorRef.current?.click(), 0); }}>
              <span className="w-4 h-4 rounded border border-gray-300 block flex-shrink-0" style={{ background: editingItem.sectionBg || "#ffffff" }} />
              <span className="text-xs text-gray-500">Section BG</span>
              <input ref={bgColorRef} type="color" defaultValue={editingItem.sectionBg || "#ffffff"} className="absolute opacity-0 w-0 h-0 pointer-events-none" onChange={e => setSectionBg(editingItem.uid, e.target.value)} onBlur={e => commitSectionBg(editingItem.uid, e.target.value)} />
            </label>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-md px-2 h-7">
              <span className="text-xs text-gray-500">Pad</span>
              <input type="range" min={0} max={120} step={8} value={editingItem.paddingY ?? 0} className="w-16 accent-indigo-500" onChange={e => setSectionPadding(editingItem.uid, Number(e.target.value))} onMouseUp={e => commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === editingItem.uid ? { ...s, paddingY: Number((e.target as HTMLInputElement).value) || undefined } : s) }))} />
              <span className="text-xs text-gray-400 tabular-nums w-7">{editingItem.paddingY ?? 0}px</span>
            </div>
            <div className="w-px h-5 bg-gray-200 mx-0.5" />
            <select className="h-7 text-xs border border-gray-200 bg-white text-gray-700 rounded-md px-2 outline-none cursor-pointer" defaultValue="inherit" onMouseDown={() => saveSelection()} onChange={e => applyFont(e.target.value)}>
              {FONTS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
            <select className="h-7 text-xs border border-gray-200 bg-white text-gray-700 rounded-md px-2 outline-none cursor-pointer w-20" defaultValue="3" onMouseDown={() => saveSelection()} onChange={e => applyFontSize(Number(e.target.value))}>
              {[1,2,3,4,5,6,7].map((n,i) => <option key={n} value={n}>{["8px","10px","12px","14px","18px","24px","36px"][i]}</option>)}
            </select>
            <button onMouseDown={e => { e.preventDefault(); stopEdit(editingItem.uid); setImagePopover(false); }} className="ml-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 h-7 rounded-lg shadow-sm">Done ✓</button>
          </div>
        )}

        {/* Pages Overview */}
        {pagesOverview && (
          <div className="flex flex-1 overflow-hidden">
            {/* Overview canvas */}
            <div className="flex-1 overflow-auto" style={{ background:"#e8e8e8", backgroundImage:"radial-gradient(circle,#d0d0d0 1px,transparent 1px)", backgroundSize:"24px 24px" }}
              onClick={() => setOverviewSelId(null)}>
              <div className="p-16 flex flex-wrap gap-14 items-start justify-start">
                {pages.map(page => {
                  const SCALE = 0.2;
                  const pw = 1280;
                  const secs = page.sections;
                  const estH = Math.max(900, secs.length * 380);
                  const isSel = overviewSelId === page.id;
                  return (
                    <div key={page.id} className="flex flex-col items-start gap-2">
                      <span className={`text-xs font-semibold tracking-wide ${isSel ? "text-blue-500" : "text-gray-500"}`}>{page.name}</span>
                      <div className="relative">
                        <div
                          className={`bg-white overflow-hidden cursor-pointer shadow-lg transition-all rounded-sm ${isSel ? "ring-2 ring-blue-500 shadow-blue-200" : "hover:ring-2 hover:ring-blue-300 hover:shadow-xl"}`}
                          style={{ width: pw * SCALE, height: estH * SCALE }}
                          onClick={e => { e.stopPropagation(); setOverviewSelId(page.id); }}
                          onDoubleClick={() => { setActivePageId(page.id); setPagesOverview(false); setEditingUid(null); setEditingBlocks(null); setOverviewSelId(null); }}
                          title={`Click to select · Double-click to edit "${page.name}"`}
                        >
                          <div style={{ width: pw, height: estH, transform: `scale(${SCALE})`, transformOrigin: "top left", pointerEvents: "none" }}>
                            {secs.length === 0 ? (
                              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100%", color:"#d1d5db", fontSize:48 }}>✦</div>
                            ) : secs.map(s => {
                              const Comp = s.component ?? findComponent(s.file);
                              return (
                                <div key={s.uid} style={{ background: s.sectionGradient || s.sectionBg || undefined, paddingTop: s.paddingY || undefined, paddingBottom: s.paddingY || undefined }}>
                                  {s.html ? <div dangerouslySetInnerHTML={{ __html: s.html }} /> :
                                   s.file === "__blank__" ? <BlankSection /> :
                                   Comp ? <Comp /> : null}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        {/* Dimensions badge */}
                        {isSel && (
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap select-none">
                            {pw} × {estH}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xs text-transparent font-semibold">—</span>
                  <button
                    onClick={e => { e.stopPropagation(); addPage(); }}
                    className="bg-white/60 hover:bg-white border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-sm flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors"
                    style={{ width: 1280 * 0.2, height: 900 * 0.2 }}
                  >
                    <span className="text-2xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Overview right panel */}
            {overviewSelId && (() => {
              const selPage = pages.find(p => p.id === overviewSelId);
              if (!selPage) return null;
              const estH = Math.max(900, selPage.sections.length * 380);
              return (
                <div className="w-60 border-l border-gray-200 bg-white flex-shrink-0 flex flex-col overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Frame</p>
                  </div>
                  <div className="p-4 space-y-5 text-xs">
                    {/* Name */}
                    <div>
                      <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Page name</p>
                      <input defaultValue={selPage.name} key={selPage.id}
                        onBlur={e => renamePage(selPage.id, e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") e.currentTarget.blur(); }}
                        className="w-full border border-gray-200 rounded-md px-2 py-1.5 text-xs outline-none focus:ring-1 focus:ring-blue-400" />
                    </div>
                    {/* Dimensions */}
                    <div>
                      <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Dimensions</p>
                      <div className="flex gap-2">
                        <label className="flex flex-col gap-0.5 flex-1"><span className="text-gray-500">W</span><input readOnly value={1280} className="w-full border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs text-gray-400 outline-none" /></label>
                        <label className="flex flex-col gap-0.5 flex-1"><span className="text-gray-500">H</span><input readOnly value={estH} className="w-full border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs text-gray-400 outline-none" /></label>
                      </div>
                    </div>
                    {/* Sections */}
                    <div>
                      <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Sections</p>
                      <p className="text-gray-600">{selPage.sections.length} section{selPage.sections.length !== 1 ? "s" : ""}</p>
                    </div>
                    {/* Actions */}
                    <div className="flex flex-col gap-2 pt-1">
                      <button onClick={() => { setActivePageId(selPage.id); setPagesOverview(false); setEditingUid(null); setEditingBlocks(null); setOverviewSelId(null); }}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg text-xs transition-colors">
                        ✏️ Edit page
                      </button>
                      {pages.length > 1 && (
                        <button onClick={() => { deletePage(selPage.id); setOverviewSelId(null); }}
                          className="w-full border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-lg text-xs transition-colors">
                          ✕ Delete page
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Canvas + Right panel */}
        {!pagesOverview && <div className="flex flex-1 overflow-hidden">

          {/* Canvas */}
          <div className="flex-1 relative overflow-hidden" onClick={() => { if (editingUid) setSelectedBlockIds(new Set()); }}>
            {preview && (
              <div className="absolute inset-0 z-20 flex flex-col" style={{ background:"#1e1e2e" }} onMouseEnter={() => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); }} onMouseLeave={hidePreview}>
                <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">{preview.name}</span>
                    <span className="text-xs text-gray-400">Hover preview</span>
                  </div>
                  <button onClick={() => { add(preview); setPreview(null); }} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg">+ Add to Page</button>
                </div>
                <div className="flex-1 overflow-auto p-8 flex justify-center" style={{ backgroundImage:"radial-gradient(circle,#3a3a52 1px,transparent 1px)",backgroundSize:"24px 24px" }}>
                  <div className="bg-white shadow-2xl w-full" style={{ maxWidth:1280 }}><preview.component /></div>
                </div>
              </div>
            )}

            {canvas.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-8" style={{ background:"#1e1e2e",backgroundImage:"radial-gradient(circle,#3a3a52 1px,transparent 1px)",backgroundSize:"24px 24px" }}>
                <div className="text-5xl mb-4">🧩</div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Your page is empty</h3>
                <p className="text-gray-400 text-sm max-w-xs">Hover a component in the left panel to preview it, then click to add.</p>
              </div>
            ) : (
              <div ref={canvasScrollRef} className="h-full overflow-auto"
                style={{ background: canvasBg !== "#f9fafb" ? canvasBg : "#1e1e2e", backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.08) 1px,transparent 1px)", backgroundSize:"24px 24px",
                  cursor: activeTool === "pan" ? "grab" : activeTool === "text" ? "text" : activeTool !== "select" ? "crosshair" : undefined }}
                onClick={() => setStyleMenuUid(null)}
                onMouseDown={e => {
                  if (e.button === 1 || isPanningRef.current || activeToolRef.current === "pan") {
                    e.preventDefault();
                    panDragState.current = { startMouseX: e.clientX, startMouseY: e.clientY, startScrollLeft: (e.currentTarget as HTMLDivElement).scrollLeft, startScrollTop: (e.currentTarget as HTMLDivElement).scrollTop };
                    return;
                  }
                  // Draw tools
                  const tool = activeToolRef.current;
                  if (editingUid && tool !== "select" && (e.target as HTMLElement).closest(".builder-control") === null) {
                    e.preventDefault();
                    const ce = e.currentTarget as HTMLDivElement; const rect = ce.getBoundingClientRect(); const scale = zoomRef.current / 100;
                    const cx = (e.clientX - rect.left + ce.scrollLeft) / scale - 48; const cy = (e.clientY - rect.top + ce.scrollTop) / scale - 48;
                    drawDragState.current = { tool, startCanvasX: cx, startCanvasY: cy, startMouseX: e.clientX, startMouseY: e.clientY, x: cx, y: cy, w: 0, h: 0 };
                    return;
                  }
                  if (editingUid && (e.target as HTMLElement).closest("[data-block-wrapper]") === null && (e.target as HTMLElement).closest(".builder-control") === null) {
                    const ce = e.currentTarget as HTMLDivElement; const rect = ce.getBoundingClientRect(); const scale = zoomRef.current / 100;
                    const cx = (e.clientX - rect.left + ce.scrollLeft) / scale - 48; const cy = (e.clientY - rect.top + ce.scrollTop) / scale - 48;
                    lassoDragState.current = { startCanvasX: cx, startCanvasY: cy, startClientX: e.clientX, startClientY: e.clientY };
                    setSelectedBlockIds(new Set());
                  }
                }}
              >
                <div className="p-12 flex justify-center" style={{ minHeight:"100%",minWidth:"max-content" }}>
                  {/* iPhone frame */}
                  {rnDeviceMode && canvasMode === "mobile" && (
                    <div className="pointer-events-none absolute" style={{ zoom: zoom/100, top: 32, left: "50%", transform: "translateX(-50%)", width: 430, zIndex: 20 }}>
                      <svg viewBox="0 0 430 932" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position:"absolute", top:-24, left:-20, width:470, height:"auto" }}>
                        <rect x="1" y="1" width="428" height="930" rx="54" fill="none" stroke="#1a1a1a" strokeWidth="18"/>
                        <rect x="10" y="10" width="410" height="912" rx="46" fill="none" stroke="#3a3a3a" strokeWidth="4"/>
                        {/* Dynamic Island */}
                        <rect x="155" y="18" width="120" height="34" rx="17" fill="#1a1a1a"/>
                        {/* Side buttons */}
                        <rect x="-4" y="180" width="5" height="60" rx="2.5" fill="#2a2a2a"/>
                        <rect x="-4" y="260" width="5" height="80" rx="2.5" fill="#2a2a2a"/>
                        <rect x="-4" y="360" width="5" height="80" rx="2.5" fill="#2a2a2a"/>
                        <rect x="429" y="240" width="5" height="120" rx="2.5" fill="#2a2a2a"/>
                        {/* Home indicator */}
                        <rect x="165" y="898" width="100" height="5" rx="2.5" fill="#3a3a3a" opacity="0.6"/>
                      </svg>
                    </div>
                  )}
                  <style>{`
                    .bloxer-canvas { --brand: ${brandColor}; --brand2: ${brandSecondary}; ${brandFont ? `font-family: ${brandFont}, system-ui, sans-serif;` : ""} }
                    .bloxer-canvas .bg-indigo-50,.bloxer-canvas .bg-violet-50 { background-color: color-mix(in srgb, var(--brand) 8%, white) !important; }
                    .bloxer-canvas .bg-indigo-100,.bloxer-canvas .bg-violet-100 { background-color: color-mix(in srgb, var(--brand) 15%, white) !important; }
                    .bloxer-canvas .bg-indigo-200,.bloxer-canvas .bg-violet-200 { background-color: color-mix(in srgb, var(--brand) 30%, white) !important; }
                    .bloxer-canvas .bg-indigo-500,.bloxer-canvas .bg-violet-500 { background-color: color-mix(in srgb, var(--brand) 85%, black) !important; }
                    .bloxer-canvas .bg-indigo-600,.bloxer-canvas .bg-violet-600 { background-color: var(--brand) !important; }
                    .bloxer-canvas .bg-indigo-700,.bloxer-canvas .bg-violet-700 { background-color: color-mix(in srgb, var(--brand) 78%, black) !important; }
                    .bloxer-canvas .bg-indigo-800,.bloxer-canvas .bg-violet-800 { background-color: color-mix(in srgb, var(--brand) 62%, black) !important; }
                    .bloxer-canvas .text-indigo-400,.bloxer-canvas .text-violet-400 { color: color-mix(in srgb, var(--brand) 70%, white) !important; }
                    .bloxer-canvas .text-indigo-500,.bloxer-canvas .text-violet-500 { color: color-mix(in srgb, var(--brand) 85%, black) !important; }
                    .bloxer-canvas .text-indigo-600,.bloxer-canvas .text-violet-600 { color: var(--brand) !important; }
                    .bloxer-canvas .text-indigo-700,.bloxer-canvas .text-violet-700 { color: color-mix(in srgb, var(--brand) 78%, black) !important; }
                    .bloxer-canvas .border-indigo-200,.bloxer-canvas .border-violet-200 { border-color: color-mix(in srgb, var(--brand) 30%, white) !important; }
                    .bloxer-canvas .border-indigo-300,.bloxer-canvas .border-violet-300 { border-color: color-mix(in srgb, var(--brand) 50%, white) !important; }
                    .bloxer-canvas .border-indigo-500,.bloxer-canvas .border-violet-500,.bloxer-canvas .border-indigo-600,.bloxer-canvas .border-violet-600 { border-color: var(--brand) !important; }
                    .bloxer-canvas .from-indigo-500,.bloxer-canvas .from-violet-500,.bloxer-canvas .from-indigo-600 { --tw-gradient-from: var(--brand) !important; }
                    .bloxer-canvas .to-indigo-600,.bloxer-canvas .to-violet-600,.bloxer-canvas .to-indigo-700 { --tw-gradient-to: color-mix(in srgb, var(--brand) 78%, black) !important; }
                    .bloxer-canvas .via-violet-500,.bloxer-canvas .via-indigo-500 { --tw-gradient-via: var(--brand) !important; }
                    .bloxer-canvas .hover\\:bg-indigo-50:hover,.bloxer-canvas .hover\\:bg-violet-50:hover { background-color: color-mix(in srgb, var(--brand) 8%, white) !important; }
                    .bloxer-canvas .hover\\:bg-indigo-700:hover,.bloxer-canvas .hover\\:bg-violet-700:hover { background-color: color-mix(in srgb, var(--brand) 78%, black) !important; }
                    .bloxer-canvas .hover\\:text-indigo-600:hover { color: var(--brand) !important; }
                    .bloxer-canvas .focus\\:ring-indigo-400:focus,.bloxer-canvas .focus\\:ring-indigo-500:focus { --tw-ring-color: var(--brand) !important; }
                    .bloxer-canvas .accent-indigo-500 { accent-color: var(--brand) !important; }
                    .bloxer-canvas .ring-indigo-500,.bloxer-canvas .ring-violet-500 { --tw-ring-color: var(--brand) !important; }
                    .bloxer-canvas .bg-emerald-50 { background-color: color-mix(in srgb, var(--brand2) 8%, white) !important; }
                    .bloxer-canvas .bg-emerald-100 { background-color: color-mix(in srgb, var(--brand2) 15%, white) !important; }
                    .bloxer-canvas .bg-emerald-500 { background-color: color-mix(in srgb, var(--brand2) 85%, black) !important; }
                    .bloxer-canvas .bg-emerald-600 { background-color: var(--brand2) !important; }
                    .bloxer-canvas .text-emerald-600 { color: var(--brand2) !important; }
                    .bloxer-canvas .text-emerald-700 { color: color-mix(in srgb, var(--brand2) 78%, black) !important; }
                    .bloxer-canvas .border-emerald-200 { border-color: color-mix(in srgb, var(--brand2) 30%, white) !important; }
                  `}</style>
                  <div ref={artboardRef} className="bloxer-canvas bg-white shadow-2xl divide-y divide-gray-100 origin-top"
                    style={{ zoom:zoom/100, width:canvasWidth, boxShadow:"0 0 0 1px rgba(255,255,255,0.08),0 25px 60px rgba(0,0,0,0.5)", minHeight:200, fontFamily: brandFont || undefined }}>

                    {canvas.map((item, idx) => {
                      const Component = item.component; const isEditing = item.uid === editingUid;
                      const hasLinks = (item.sectionLinks?.length ?? 0) > 0;
                      return (
                        <div key={item.uid}
                          ref={el => { if (el) sectionRefs.current.set(item.uid, el); else sectionRefs.current.delete(item.uid); }}
                          onDragOver={!isEditing ? e => onDragOver(e, idx) : undefined}
                          onDragLeave={!isEditing ? () => setDragOverIdx(null) : undefined}
                          onDrop={!isEditing ? onDrop : undefined}
                          className={`relative group ${isEditing ? "ring-2 ring-inset ring-indigo-500" : ""} ${dragOverIdx === idx && dragIndex.current !== idx ? "ring-2 ring-inset ring-indigo-400" : ""}`}
                          style={{ background: item.sectionGradient || item.sectionBg || undefined, paddingTop: item.paddingY || undefined, paddingBottom: item.paddingY || undefined }}>

                          {dragOverIdx === idx && dragIndex.current !== null && dragIndex.current !== idx && <div className="builder-control absolute top-0 left-0 right-0 h-1 bg-indigo-500 z-20 rounded-full" />}

                          {/* Section label */}
                          {showLabels && (
                            <div className="builder-control absolute -top-6 left-0 select-none pointer-events-none z-10">
                              <span className={`text-xs font-medium px-2 py-0.5 rounded ${isEditing ? "bg-indigo-500 text-white" : "bg-gray-700/80 text-gray-200"}`}>{item.name}</span>
                            </div>
                          )}

                          {isEditing ? (
                            imagePopover && (
                              <div className="builder-control absolute top-14 right-2 z-30 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 w-72">
                                <div className="flex gap-1 mb-3">
                                  {(["upload","url","library"] as const).map(tab => (
                                    <button key={tab} onMouseDown={e => { e.preventDefault(); setImageTab(tab); if (tab === "library" && libraryImages.length === 0) loadLibrary(); }} className={`flex-1 text-xs font-semibold py-1 rounded-md ${imageTab === tab ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
                                      {tab === "upload" ? "Upload" : tab === "url" ? "URL" : "Library"}
                                    </button>
                                  ))}
                                </div>
                                {imageTab === "upload" ? (
                                  <label className="flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-indigo-400 rounded-lg py-4 cursor-pointer"><span className="text-xs text-gray-500">Choose image</span><input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} /></label>
                                ) : imageTab === "url" ? (
                                  <div className="flex gap-1">
                                    <input autoFocus value={imageUrlInput} onChange={e => setImageUrlInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); insertImage(imageUrlInput); } }} placeholder="https://…/photo.jpg" className="flex-1 text-xs border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-0" />
                                    <button onMouseDown={e => { e.preventDefault(); insertImage(imageUrlInput); }} className="bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">Add</button>
                                  </div>
                                ) : (
                                  <div className="h-48 overflow-y-auto">
                                    {libraryLoading ? (
                                      <div className="flex items-center justify-center h-full text-xs text-gray-400">Loading…</div>
                                    ) : libraryImages.length === 0 ? (
                                      <div className="flex items-center justify-center h-full text-xs text-gray-400">No images yet. Upload one first.</div>
                                    ) : (
                                      <div className="grid grid-cols-3 gap-1.5">
                                        {libraryImages.map(img => (
                                          <button key={img.id} onMouseDown={e => { e.preventDefault(); insertImage(img.url); }} className="aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all" title={img.name}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )
                          ) : (
                            <>
                              <div className="builder-control absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-lg shadow-sm">{item.name}{item.html ? " · edited" : ""}</span>
                              </div>
                              <div className="builder-control absolute top-2 right-2 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span draggable onDragStart={() => onDragStart(idx)} onDragEnd={() => { dragIndex.current=null; dragOverIndex.current=null; }} className="bg-white/90 backdrop-blur-sm text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded-lg shadow-sm cursor-grab select-none">⠿ drag</span>
                                <button onClick={() => startEdit(item.uid)} className="bg-white/90 backdrop-blur-sm border border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-xs font-semibold px-2 py-1 rounded-lg shadow-sm">✏️ Edit</button>
                                <div className="relative">
                                  <button onClick={() => setStyleMenuUid(styleMenuUid === item.uid ? null : item.uid)} className={`bg-white/90 backdrop-blur-sm border text-xs font-semibold px-2 py-1 rounded-lg shadow-sm transition-colors ${styleMenuUid === item.uid ? "border-violet-400 text-violet-600 bg-violet-50" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>🎨 Style</button>
                                  {styleMenuUid === item.uid && (
                                    <div className="absolute top-9 left-0 z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 w-64" onClick={e => e.stopPropagation()}>
                                      <p className="text-xs font-bold text-gray-700 mb-3">Section Style</p>
                                      {/* Background presets */}
                                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Background</p>
                                      <div className="grid grid-cols-5 gap-1.5 mb-3">
                                        {[
                                          { label: "White",   v: "#ffffff" },
                                          { label: "Gray",    v: "#f8f8fb" },
                                          { label: "Dark",    v: "#111827" },
                                          { label: "Slate",   v: "#1e293b" },
                                          { label: "Indigo",  v: "#eef2ff" },
                                        ].map(({ label, v }) => (
                                          <button key={v} title={label} onClick={() => { commitSectionGradient(item.uid, undefined); commitSectionBg(item.uid, v); }}
                                            className={`w-9 h-9 rounded-xl border-2 transition-all ${(item.sectionBg === v && !item.sectionGradient) ? "border-indigo-500 scale-110" : "border-gray-200 hover:border-gray-400"}`}
                                            style={{ background: v }} />
                                        ))}
                                      </div>
                                      {/* Gradient presets */}
                                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Gradients</p>
                                      <div className="grid grid-cols-5 gap-1.5 mb-3">
                                        {[
                                          "linear-gradient(135deg,#6366f1,#7c3aed)",
                                          "linear-gradient(135deg,#3b82f6,#6366f1)",
                                          "linear-gradient(135deg,#10b981,#3b82f6)",
                                          "linear-gradient(135deg,#f59e0b,#ef4444)",
                                          "linear-gradient(135deg,#ec4899,#8b5cf6)",
                                          "linear-gradient(135deg,#0f172a,#1e3a5f)",
                                          "linear-gradient(135deg,#f0fdf4,#dcfce7)",
                                          "linear-gradient(135deg,#fdf2f8,#fce7f3)",
                                          "linear-gradient(135deg,#eff6ff,#dbeafe)",
                                          "linear-gradient(135deg,#fefce8,#fef9c3)",
                                        ].map(g => (
                                          <button key={g} title="Apply gradient" onClick={() => commitSectionGradient(item.uid, g)}
                                            className={`w-9 h-9 rounded-xl border-2 transition-all ${item.sectionGradient === g ? "border-indigo-500 scale-110" : "border-gray-200 hover:border-gray-400"}`}
                                            style={{ background: g }} />
                                        ))}
                                      </div>
                                      {/* Custom color */}
                                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Custom Color</p>
                                      <div className="flex items-center gap-2 mb-3">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <span className="w-8 h-8 rounded-xl border-2 border-gray-200 block flex-shrink-0" style={{ background: item.sectionGradient || item.sectionBg || "#ffffff" }} />
                                          <input type="color" defaultValue={item.sectionBg || "#ffffff"} className="absolute opacity-0 w-0 h-0" onChange={e => setSectionBg(item.uid, e.target.value)} onBlur={e => { commitSectionGradient(item.uid, undefined); commitSectionBg(item.uid, e.target.value); }} />
                                          <span className="text-xs text-gray-500">Pick color</span>
                                        </label>
                                      </div>
                                      {/* Padding */}
                                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Vertical Padding</p>
                                      <div className="flex items-center gap-2 mb-3">
                                        <input type="range" min={0} max={160} step={8} value={item.paddingY ?? 0} className="flex-1 accent-indigo-500"
                                          onChange={e => setSectionPadding(item.uid, Number(e.target.value))}
                                          onMouseUp={e => commitPages(pages.map(p => p.id !== activePageId ? p : { ...p, sections: p.sections.map(s => s.uid === item.uid ? { ...s, paddingY: Number((e.target as HTMLInputElement).value) || undefined } : s) }))} />
                                        <span className="text-xs text-gray-500 tabular-nums w-10 text-right">{item.paddingY ?? 0}px</span>
                                      </div>
                                      {/* Reset */}
                                      <button onClick={() => { resetSectionStyle(item.uid); setStyleMenuUid(null); }} className="w-full text-xs text-gray-400 hover:text-red-500 py-1.5 border border-gray-200 hover:border-red-200 rounded-lg transition-colors">Reset style</button>
                                    </div>
                                  )}
                                </div>
                                <button onClick={() => moveUp(idx)} disabled={idx===0} className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 disabled:opacity-30 w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-sm">▲</button>
                                <button onClick={() => moveDown(idx)} disabled={idx===canvas.length-1} className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 disabled:opacity-30 w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-sm">▼</button>
                                <button onClick={() => duplicateSection(item.uid)} title="Duplicate section" className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-gray-50 w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-sm">⊕</button>
                                <button onClick={() => openLinkEditor(item.uid)} title="Assign links" className={`bg-white/90 backdrop-blur-sm border w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-sm ${hasLinks ? "border-indigo-400 text-indigo-600" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>🔗</button>
                                <button onClick={() => openTextEditor(item.uid)} title="Edit text content" className={`bg-white/90 backdrop-blur-sm border w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-xs font-bold ${(item.textOverrides?.length ?? 0) > 0 ? "border-emerald-400 text-emerald-600" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>T</button>
                                {pages.length > 1 && (
                                  <div className="relative">
                                    <button onClick={() => setCopyMenuUid(copyMenuUid === item.uid ? null : item.uid)} title="Copy to page" className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-gray-50 w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-sm">⤴</button>
                                    {copyMenuUid === item.uid && (
                                      <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-30 py-1 min-w-[140px] text-xs">
                                        <p className="px-3 py-1 text-gray-400 font-semibold">Copy to…</p>
                                        {pages.filter(p => p.id !== activePageId).map(p => (
                                          <button key={p.id} onClick={() => copySectionToPage(item.uid, p.id)} className="w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700">{p.name}</button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                                <button onClick={() => remove(item.uid)} className="bg-white/90 backdrop-blur-sm border border-red-200 text-red-500 hover:bg-red-50 w-7 h-7 rounded-lg flex items-center justify-center shadow-sm text-sm">✕</button>
                              </div>
                              {item.html && <div className="builder-control absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"><button onClick={() => resetEdit(item.uid)} className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-500 hover:text-gray-800 text-xs px-2 py-1 rounded-lg shadow-sm">Reset</button></div>}
                            </>
                          )}

                          {isEditing ? (
                            <div className="relative w-full" style={{ minHeight: Math.max(500, ...((editingBlocks||[]).map(b => b.y + (b.h??160)))), backgroundImage:"radial-gradient(circle,#e5e7eb 1px,transparent 1px)", backgroundSize:"20px 20px" }}>
                              {/* Snap guides */}
                              {snapGuides.map((g, i) => (
                                <div key={i} className="pointer-events-none absolute" style={g.type==="v" ? { left:g.pos,top:0,width:1,height:"100%",background:"#6366f1",zIndex:999 } : { top:g.pos,left:0,height:1,width:"100%",background:"#6366f1",zIndex:999 }} />
                              ))}
                              {/* Lasso rect */}
                              {lassoRect && <div className="pointer-events-none absolute border border-indigo-400 bg-indigo-100/20" style={{ left:lassoRect.x,top:lassoRect.y,width:lassoRect.w,height:lassoRect.h,zIndex:998 }} />}
                              {/* Draw preview */}
                              {drawRect && drawRect.w > 2 && drawRect.h > 2 && (
                                <div className="pointer-events-none absolute border-2 border-blue-500 bg-blue-100/30" style={{ left:drawRect.x,top:drawRect.y,width:drawRect.w,height:drawRect.h,zIndex:997,borderRadius:activeTool==="ellipse"?"50%":undefined }} />
                              )}
                              {(!editingBlocks||editingBlocks.length===0) && <p className="absolute inset-0 flex items-center justify-center text-gray-300 text-xs select-none pointer-events-none">Add elements from the left panel, then drag them anywhere</p>}

                              {(editingBlocks||[]).map(block => {
                                const isSel = selectedBlockIds.has(block.id); const isOnlySel = isSel && selectedBlockIds.size === 1;
                                return (
                                  <div key={block.id} data-block-wrapper="true"
                                    ref={el => { if (el) blockWrapperRefs.current.set(block.id, el); else blockWrapperRefs.current.delete(block.id); }}
                                    className="absolute group/blk"
                                    style={{ left:block.x, top:block.y, width:block.w??("fit-content" as React.CSSProperties["width"]), height:block.h??undefined, minWidth:40, zIndex:block.zIndex??0,
                                      opacity: block.hidden ? 0.25 : (block.blockOpacity!==undefined ? block.blockOpacity/100 : undefined),
                                      outline: isSel ? "2px solid #6366f1" : undefined, outlineOffset: isSel ? 2 : undefined,
                                      transformOrigin:"center center", transform:blockTransformCss(block),
                                      background:block.blockBg??undefined, borderRadius:block.blockRadius?`${block.blockRadius}px`:undefined,
                                      padding:block.blockPadding?`${block.blockPadding}px`:undefined,
                                      boxShadow:block.shadow?shadowToCss(block.shadow):undefined,
                                      border:block.border?borderToCss(block.border):undefined,
                                      mixBlendMode:(block.blendMode as React.CSSProperties["mixBlendMode"])||undefined,
                                    }}
                                    onClick={e => { e.stopPropagation(); if (e.shiftKey) setSelectedBlockIds(prev => { const n=new Set(prev); n.has(block.id)?n.delete(block.id):n.add(block.id); return n; }); else setSelectedBlockIds(new Set([block.id])); }}
                                  >
                                    {/* Drag bar */}
                                    <div className={`builder-control absolute -top-6 left-0 right-0 flex items-center gap-0.5 z-10 transition-opacity ${isSel?"opacity-100":"opacity-0 group-hover/blk:opacity-100"}`}>
                                      <span onMouseDown={e => startBlockDrag(e, block)} title={block.locked?"Locked":"Drag"} className={`flex-1 h-5 rounded-t flex items-center justify-center select-none text-xs text-white truncate px-1 ${block.locked?"bg-gray-400 cursor-not-allowed":"bg-indigo-500 cursor-grab active:cursor-grabbing"}`}>{block.locked?"🔒":"⠿"} {block.blockName||""}</span>
                                      <button onMouseDown={e => { e.preventDefault(); e.stopPropagation(); deleteBlock(block.id); }} className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-t text-white text-xs flex items-center justify-center">✕</button>
                                    </div>
                                    {/* Rotation handle */}
                                    {isOnlySel && <>
                                      <div className="builder-control absolute pointer-events-none" style={{ width:1,height:28,background:"#6366f1",left:"50%",top:-34,transform:"translateX(-50%)" }} />
                                      <div className="builder-control absolute w-3 h-3 rounded-full bg-white border-2 border-indigo-500 cursor-crosshair z-20 hover:bg-indigo-50" style={{ left:"50%",top:-46,transform:"translateX(-50%)" }} onMouseDown={e => startRotate(e, block)} />
                                    </>}
                                    {/* Resize handles */}
                                    {isSel && RESIZE_HANDLES.map(h => (
                                      <div key={h} className="builder-control absolute w-2.5 h-2.5 bg-white border-2 border-indigo-500 rounded-sm z-20 hover:bg-indigo-50"
                                        style={{ ...resizeHandleStyle(h), cursor:`${h}-resize` }}
                                        onMouseDown={e => startResize(e, block, h)} />
                                    ))}
                                    {/* Content */}
                                    <div className={`rounded min-h-[20px] ${!isSel?"ring-1 ring-indigo-200 group-hover/blk:ring-indigo-300":""}`}>
                                      <BlockDiv blockId={block.id} initialHtml={block.html} onRef={(id, el) => { if (el) blockRefs.current.set(id, el); else blockRefs.current.delete(id); }} />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : item.html ? (
                            <div dangerouslySetInnerHTML={{ __html: item.html }} />
                          ) : (
                            <div ref={el => { if (el) sectionContentRefs.current.set(item.uid, el); }}><Component /></div>
                          )}
                        </div>
                      );
                    })}

                    <div className="builder-control flex justify-center py-6">
                      <button onClick={addBlank} className="flex items-center gap-2 border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-xl px-6 py-3 text-gray-400 hover:text-indigo-600 text-xs font-semibold">+ Add Blank Section</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ── BOTTOM TOOLBAR ── */}
            {editingUid && (
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 bg-[#2c2c3e] rounded-2xl px-3 py-2 shadow-2xl border border-white/10 select-none">
                {([
                  { id:"select", icon:"↖", title:"Select (V)" },
                  { id:"frame",  icon:"⊞", title:"Frame (F)" },
                  { sep:true },
                  { id:"rect",   icon:"□", title:"Rectangle (R)" },
                  { id:"ellipse",icon:"○", title:"Ellipse (E)" },
                  { id:"line",   icon:"╱", title:"Line (L)" },
                  { sep:true },
                  { id:"text",   icon:"T", title:"Text (T)" },
                  { sep:true },
                  { id:"pan",    icon:"✋", title:"Hand / Pan (H)" },
                ] as ({ id: string; icon: string; title: string; sep?: undefined } | { sep: true; id?: undefined; icon?: undefined; title?: undefined })[]).map((item, i) =>
                  item.sep ? <div key={i} className="w-px h-6 bg-white/10 mx-1" /> : (
                    <button key={item.id} title={item.title}
                      onClick={() => { setActiveTool(item.id as typeof activeTool); }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-colors font-mono ${activeTool === item.id ? "bg-indigo-500 text-white shadow-md" : "text-gray-300 hover:bg-white/10 hover:text-white"}`}>
                      {item.icon}
                    </button>
                  )
                )}
              </div>
            )}

            {/* ── Floating zoom controls ── */}
            {(
              <div className="absolute bottom-4 right-4 z-30 flex items-center gap-0.5 bg-gray-900/85 backdrop-blur-md rounded-xl p-1 shadow-xl border border-white/10 pointer-events-auto">
                <button onClick={zoomOut} disabled={zoom <= 20} title="Zoom out"
                  className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition-all text-[18px] font-light leading-none select-none">
                  −
                </button>
                <button onClick={fitZoom} title="Fit to screen"
                  className="h-7 px-2 text-[11px] font-mono text-white/60 hover:text-white hover:bg-white/15 rounded-lg transition-all min-w-[46px] text-center select-none">
                  {zoom}%
                </button>
                <button onClick={zoomIn} disabled={zoom >= 200} title="Zoom in"
                  className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition-all text-[18px] font-light leading-none select-none">
                  +
                </button>
              </div>
            )}
          </div>

          {/* ── RIGHT PANEL ── */}
          {editingUid && (
            <div className="w-60 border-l border-gray-200 bg-white flex-shrink-0 flex flex-col overflow-hidden">
              <div className="flex border-b border-gray-100 flex-shrink-0">
                {(["layers","inspect"] as const).map(t => (
                  <button key={t} onClick={() => setInspectorTab(t)} className={`flex-1 text-xs font-semibold py-2.5 capitalize transition-colors ${inspectorTab===t ? "text-indigo-600 border-b-2 border-indigo-500 bg-white" : "text-gray-400 hover:text-gray-600 bg-gray-50"}`}>{t}</button>
                ))}
              </div>

              {inspectorTab === "layers" ? (
                <div className="flex-1 overflow-y-auto p-2">
                  {layersSorted.length === 0 && <p className="text-xs text-gray-400 text-center py-8">No elements yet</p>}
                  {layersSorted.map(b => (
                    <div key={b.id} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg cursor-pointer ${selectedBlockIds.has(b.id) ? "bg-indigo-50" : "hover:bg-gray-50"}`}
                      onClick={e => { if (e.shiftKey) setSelectedBlockIds(prev => { const n=new Set(prev); n.has(b.id)?n.delete(b.id):n.add(b.id); return n; }); else setSelectedBlockIds(new Set([b.id])); setInspectorTab("inspect"); }}>
                      <button onClick={e => { e.stopPropagation(); updateBlock(b.id, { hidden: !b.hidden }); }} className={`text-xs flex-shrink-0 leading-none ${b.hidden?"text-gray-300":"text-gray-500"} hover:text-gray-800`} title={b.hidden?"Show":"Hide"}>👁</button>
                      <button onClick={e => { e.stopPropagation(); updateBlock(b.id, { locked: !b.locked }); }} className={`text-xs flex-shrink-0 leading-none ${b.locked?"text-amber-500":"text-gray-300"} hover:text-gray-800`} title={b.locked?"Unlock":"Lock"}>{b.locked?"🔒":"🔓"}</button>
                      {renamingBlockId === b.id ? (
                        <input autoFocus defaultValue={b.blockName||""} placeholder="Layer name" className="flex-1 text-xs border border-indigo-300 rounded px-1 py-0.5 outline-none min-w-0"
                          onBlur={e => { updateBlock(b.id, { blockName: e.target.value || undefined }); setRenamingBlockId(null); }}
                          onKeyDown={e => { if (e.key==="Enter") e.currentTarget.blur(); if (e.key==="Escape") setRenamingBlockId(null); }} />
                      ) : (
                        <span className="flex-1 text-xs text-gray-700 truncate" onDoubleClick={() => setRenamingBlockId(b.id)}>{b.blockName||<span className="text-gray-400 italic">block</span>}</span>
                      )}
                      {selectedBlockIds.has(b.id) && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              ) : !selBlock ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4 gap-2">
                  <div className="text-2xl">👆</div>
                  <p className="text-xs text-gray-400 leading-relaxed">Click any element to inspect and style it</p>
                  <p className="text-xs text-gray-300">Shift+click multi-select · Drag empty area to lasso</p>
                  <p className="text-xs text-gray-300">⌘A all · ⌘C/V copy-paste · ⌘D dup · Space+drag pan</p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">

                  {/* Name */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Name</p>
                    <input value={selBlock.blockName??""} onChange={e => updateBlock(selBlock.id, { blockName: e.target.value||undefined })} placeholder="Layer name" className="w-full border border-gray-200 rounded-md px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-400" />
                  </div>

                  {/* Position */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Position</p>
                    <div className="grid grid-cols-2 gap-2">
                      {(["x","y"] as const).map(k => (
                        <label key={k} className="flex flex-col gap-0.5">
                          <span className="text-gray-500 uppercase">{k}</span>
                          <input type="number" value={Math.round(selBlock[k])} onChange={e => updateBlock(selBlock.id, { [k]: Number(e.target.value) })} className="w-full border border-gray-200 rounded-md px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-400" />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-gray-400 font-semibold uppercase tracking-wider">Size</p>
                      {(selBlock.w || selBlock.h) && <button onClick={() => updateBlock(selBlock.id, { w: undefined, h: undefined })} className="text-indigo-500 hover:text-indigo-700 text-xs font-medium">⤢ Fit</button>}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-0.5"><span className="text-gray-500">W (0=auto)</span><input type="number" min={0} value={selBlock.w??0} onChange={e => updateBlock(selBlock.id, { w: Number(e.target.value)||undefined })} className="w-full border border-gray-200 rounded-md px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-400" /></label>
                      <label className="flex flex-col gap-0.5"><span className="text-gray-500">H (0=auto)</span><input type="number" min={0} value={selBlock.h??0} onChange={e => updateBlock(selBlock.id, { h: Number(e.target.value)||undefined })} className="w-full border border-gray-200 rounded-md px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-400" /></label>
                    </div>
                  </div>

                  {/* Transform */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Transform</p>
                    <label className="flex flex-col gap-0.5 mb-2">
                      <div className="flex justify-between"><span className="text-gray-500">Rotate</span><span className="text-gray-400">{selBlock.rotate??0}°</span></div>
                      <input type="range" min={-180} max={180} step={1} value={selBlock.rotate??0} onChange={e => updateBlock(selBlock.id, { rotate: Number(e.target.value)||undefined })} className="w-full accent-indigo-500" />
                    </label>
                    <div className="flex gap-1.5">
                      <button onClick={() => updateBlock(selBlock.id, { flipH: !selBlock.flipH })} className={`flex-1 border rounded-md py-1.5 text-xs ${selBlock.flipH?"bg-indigo-50 border-indigo-300 text-indigo-700":"border-gray-200 text-gray-600 hover:bg-gray-50"}`}>↔ Flip H</button>
                      <button onClick={() => updateBlock(selBlock.id, { flipV: !selBlock.flipV })} className={`flex-1 border rounded-md py-1.5 text-xs ${selBlock.flipV?"bg-indigo-50 border-indigo-300 text-indigo-700":"border-gray-200 text-gray-600 hover:bg-gray-50"}`}>↕ Flip V</button>
                    </div>
                  </div>

                  {/* Align */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Align on canvas</p>
                    <div className="flex gap-1">
                      {(["left","center","right"] as const).map(dir => (<button key={dir} onClick={() => alignBlocks(dir)} className="flex-1 border border-gray-200 rounded-md py-1.5 hover:bg-indigo-50 hover:border-indigo-300 text-gray-600">{dir==="left"?"⬅":dir==="center"?"⬛":"➡"}</button>))}
                    </div>
                  </div>

                  {/* Layer */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Layer</p>
                    <div className="flex gap-1.5 mb-1.5">
                      <button onClick={() => bringToFront(selBlock)} className="flex-1 border border-gray-200 rounded-md py-1.5 hover:bg-indigo-50 text-gray-600 text-xs">↑ Front</button>
                      <button onClick={() => sendToBack(selBlock)} className="flex-1 border border-gray-200 rounded-md py-1.5 hover:bg-indigo-50 text-gray-600 text-xs">↓ Back</button>
                    </div>
                    <div className="flex gap-1.5">
                      <button onClick={() => updateBlock(selBlock.id, { locked: !selBlock.locked })} className={`flex-1 border rounded-md py-1.5 text-xs ${selBlock.locked?"bg-amber-50 border-amber-300 text-amber-700":"border-gray-200 text-gray-600 hover:bg-gray-50"}`}>{selBlock.locked?"🔒 Locked":"🔓 Lock"}</button>
                      <button onClick={() => updateBlock(selBlock.id, { hidden: !selBlock.hidden })} className={`flex-1 border rounded-md py-1.5 text-xs ${selBlock.hidden?"bg-gray-100 border-gray-300 text-gray-500":"border-gray-200 text-gray-600 hover:bg-gray-50"}`}>{selBlock.hidden?"Hidden":"Visible"}</button>
                    </div>
                  </div>

                  {/* Fill */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Fill</p>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between">
                        <span className="text-gray-500">Background</span>
                        <input type="color" value={selBlock.blockBg||"#ffffff"} onChange={e => updateBlock(selBlock.id, { blockBg: e.target.value==="#ffffff"?undefined:e.target.value })} className="w-8 h-6 border border-gray-200 rounded cursor-pointer p-0.5" />
                      </label>
                      {([{ label:"Radius",key:"blockRadius" as const,min:0,max:48,step:2,unit:"px" },{ label:"Padding",key:"blockPadding" as const,min:0,max:64,step:4,unit:"px" },{ label:"Opacity",key:"blockOpacity" as const,min:10,max:100,step:5,unit:"%" }]).map(({ label,key,min,max,step,unit }) => (
                        <label key={key} className="flex flex-col gap-0.5">
                          <div className="flex justify-between"><span className="text-gray-500">{label}</span><span className="text-gray-400">{selBlock[key]??(key==="blockOpacity"?100:0)}{unit}</span></div>
                          <input type="range" min={min} max={max} step={step} value={selBlock[key]??(key==="blockOpacity"?100:0)} onChange={e => updateBlock(selBlock.id, { [key]: Number(e.target.value)===(key==="blockOpacity"?100:0)?undefined:Number(e.target.value) })} className="w-full accent-indigo-500" />
                        </label>
                      ))}
                      <label className="flex items-center justify-between">
                        <span className="text-gray-500">Blend mode</span>
                        <select value={selBlock.blendMode||"normal"} onChange={e => updateBlock(selBlock.id, { blendMode: e.target.value==="normal"?undefined:e.target.value })} className="text-xs border border-gray-200 rounded-md px-1.5 py-1 outline-none max-w-[120px]">
                          {BLEND_MODES.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Border */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-gray-400 font-semibold uppercase tracking-wider">Border</p>
                      <button onClick={() => { const on=!borderEnabled; setBorderEnabled(on); updateBlock(selBlock.id, { border: on ? { width:1,color:"#e5e7eb",style:"solid" } : null }); }} className={`text-xs px-2 py-0.5 rounded border ${borderEnabled?"bg-indigo-50 border-indigo-300 text-indigo-700":"border-gray-200 text-gray-500"}`}>{borderEnabled?"On":"Off"}</button>
                    </div>
                    {borderEnabled && selBlock.border && (
                      <div className="space-y-1.5">
                        <div className="flex gap-1.5 items-center">
                          <span className="text-gray-500 w-8">W</span>
                          <input type="number" min={0} max={20} value={selBlock.border.width} onChange={e => updateBlock(selBlock.id, { border: { ...selBlock.border!, width: Number(e.target.value) } })} className="w-14 border border-gray-200 rounded-md px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-400" />
                          <input type="color" value={selBlock.border.color} onChange={e => updateBlock(selBlock.id, { border: { ...selBlock.border!, color: e.target.value } })} className="w-8 h-6 border border-gray-200 rounded cursor-pointer p-0.5 ml-auto" />
                        </div>
                        <select value={selBlock.border.style} onChange={e => updateBlock(selBlock.id, { border: { ...selBlock.border!, style: e.target.value as BlockBorder["style"] } })} className="w-full text-xs border border-gray-200 rounded-md px-2 py-1 outline-none">
                          <option value="solid">Solid</option><option value="dashed">Dashed</option><option value="dotted">Dotted</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Shadow */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-gray-400 font-semibold uppercase tracking-wider">Shadow</p>
                      <button onClick={() => { const on=!shadowEnabled; setShadowEnabled(on); updateBlock(selBlock.id, { shadow: on ? { x:0,y:4,blur:12,spread:0,color:"rgba(0,0,0,0.1)",inset:false } : null }); }} className={`text-xs px-2 py-0.5 rounded border ${shadowEnabled?"bg-indigo-50 border-indigo-300 text-indigo-700":"border-gray-200 text-gray-500"}`}>{shadowEnabled?"On":"Off"}</button>
                    </div>
                    {shadowEnabled && selBlock.shadow && (
                      <div className="space-y-1.5">
                        {([["x","X"],["y","Y"],["blur","Blur"],["spread","Spread"]] as [keyof BlockShadow, string][]).map(([k, lbl]) => (
                          <div key={String(k)} className="flex gap-1.5 items-center">
                            <span className="text-gray-500 w-10">{lbl}</span>
                            <input type="number" value={selBlock.shadow![k] as number} onChange={e => updateBlock(selBlock.id, { shadow: { ...selBlock.shadow!, [k]: Number(e.target.value) } })} className="flex-1 border border-gray-200 rounded-md px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-indigo-400" />
                          </div>
                        ))}
                        <div className="flex gap-1.5 items-center">
                          <span className="text-gray-500 w-10">Color</span>
                          <input type="color" value={selBlock.shadow.color.startsWith("rgba")?"#000000":selBlock.shadow.color} onChange={e => updateBlock(selBlock.id, { shadow: { ...selBlock.shadow!, color: e.target.value } })} className="w-8 h-6 border border-gray-200 rounded cursor-pointer p-0.5" />
                          <button onClick={() => updateBlock(selBlock.id, { shadow: { ...selBlock.shadow!, inset: !selBlock.shadow!.inset } })} className={`flex-1 text-xs border rounded-md py-1 ${selBlock.shadow.inset?"bg-indigo-50 border-indigo-300 text-indigo-700":"border-gray-200 text-gray-500"}`}>{selBlock.shadow.inset?"Inset ✓":"Inset"}</button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider mb-1.5">Actions</p>
                    <div className="flex gap-1.5 mb-1.5">
                      <button onMouseDown={e => { e.preventDefault(); duplicateBlock(selBlock); }} className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg py-1.5 text-xs font-medium">⎘ Copy</button>
                      <button onMouseDown={e => { e.preventDefault(); deleteBlock(selBlock.id); }} className="flex-1 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg py-1.5 text-xs font-medium">✕ Delete</button>
                    </div>
                    <button onMouseDown={e => { e.preventDefault(); copyBlockAsRN(selBlock); }} className={`w-full border rounded-lg py-1.5 text-xs font-medium mb-1.5 transition-colors ${rnCopied ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "border-indigo-200 text-indigo-600 hover:bg-indigo-50"}`}>{rnCopied ? "✓ Copied RN!" : "⎘ Copy as React Native"}</button>
                    <button onMouseDown={e => { e.preventDefault(); updateBlock(selBlock.id, { blockBg:undefined,blockRadius:undefined,blockPadding:undefined,blockOpacity:undefined,w:undefined,h:undefined,rotate:undefined,flipH:undefined,flipV:undefined,shadow:null,border:null,blendMode:undefined }); setShadowEnabled(false); setBorderEnabled(false); }} className="w-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg py-1.5 text-xs">Reset styles</button>
                  </div>

                </div>
              )}
            </div>
          )}

        </div>}
      </main>
    </div>
  );
}

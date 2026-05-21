"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  type ProjectMeta, type ProjectType,
  listProjects, createProject, deleteProject, duplicateProject, renameProject, timeAgo,
  syncFromCloud, cloudSaveProject, cloudDeleteProject,
} from "@/lib/projects";
import { TEMPLATES, type Template, getTemplates } from "@/lib/templates";

// ── Logo ──────────────────────────────────────────────────────────────────────
function BloxerLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#4338ca"/>
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#lg)"/>
      <rect x="7" y="7" width="26" height="5" rx="2.5" fill="white" opacity="0.95"/>
      <rect x="7" y="14" width="26" height="8" rx="2" fill="white" opacity="0.75"/>
      <rect x="7" y="24" width="7" height="9" rx="2" fill="white" opacity="0.9"/>
      <rect x="16.5" y="24" width="7" height="9" rx="2" fill="white" opacity="0.9"/>
      <rect x="26" y="24" width="7" height="9" rx="2" fill="white" opacity="0.9"/>
    </svg>
  );
}

// ── Platform SVG icons (replaces emoji) ───────────────────────────────────────
function PlatformIcon({ type, size = 22 }: { type: ProjectType; size?: number }) {
  if (type === "web") return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="8.5" stroke="#6366f1" strokeWidth="1.5"/>
      <ellipse cx="11" cy="11" rx="3.2" ry="8.5" stroke="#6366f1" strokeWidth="1.5"/>
      <path d="M2.5 11h17" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 7h14M4 15h14" stroke="#6366f1" strokeWidth="1.1" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
  if (type === "ios") return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <rect x="5.5" y="1.5" width="11" height="19" rx="3" stroke="#3b82f6" strokeWidth="1.5"/>
      <path d="M9 4.5h4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="11" cy="17.5" r="1" fill="#3b82f6"/>
      <path d="M8.5 9.5c.5-1 2-1.5 3-1s1.5 1.5 1 2.5-2 1.5-2 2.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="10.5" cy="15" r="0.6" fill="#3b82f6"/>
    </svg>
  );
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <rect x="3" y="7" width="16" height="13" rx="2.5" stroke="#10b981" strokeWidth="1.5"/>
      <path d="M7.5 7V5.5a3.5 3.5 0 017 0V7" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="7.5" cy="5" r="0.8" fill="#10b981"/>
      <circle cx="14.5" cy="5" r="0.8" fill="#10b981"/>
      <circle cx="11" cy="15" r="1" fill="#10b981"/>
      <path d="M1.5 10h1.5M19 10h1.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── Wireframe project thumbnail ───────────────────────────────────────────────
function ProjectThumbnail({ p }: { p: ProjectMeta }) {
  const gradients: Record<ProjectType, string> = {
    web:     "from-indigo-500 to-violet-600",
    ios:     "from-blue-500 to-indigo-600",
    android: "from-emerald-500 to-teal-600",
  };
  const isMobile = p.type !== "web";
  return (
    <div className={`h-36 bg-gradient-to-br ${gradients[p.type]} relative overflow-hidden`}>
      <div className={`absolute inset-0 p-3 flex ${isMobile ? "items-center justify-center" : ""}`}>
        {isMobile ? (
          /* Phone wireframe for mobile projects */
          <div className="w-20 h-32 bg-white/10 rounded-2xl border border-white/20 flex flex-col overflow-hidden">
            <div className="h-5 flex items-center justify-center border-b border-white/10 flex-shrink-0">
              <div className="w-8 h-1 bg-white/40 rounded-full" />
            </div>
            <div className="flex-1 p-1.5 space-y-1.5">
              <div className="h-7 bg-white/20 rounded-lg" />
              <div className="h-2 w-3/4 bg-white/40 rounded-full" />
              <div className="h-1.5 w-1/2 bg-white/25 rounded-full" />
              <div className="grid grid-cols-2 gap-1 pt-0.5">
                <div className="h-5 bg-white/15 rounded-md" />
                <div className="h-5 bg-white/15 rounded-md" />
              </div>
            </div>
            <div className="h-4 flex items-center justify-around border-t border-white/10 px-2 flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <div className="w-4 h-1 bg-white/50 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
            </div>
          </div>
        ) : (
          /* Browser wireframe for web projects */
          <div className="bg-white/10 rounded-lg h-full w-full p-2.5 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              </div>
              <div className="h-2 flex-1 bg-white/20 rounded-full mx-1" />
              <div className="h-2 w-5 bg-white/30 rounded" />
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0 border-b border-white/15 pb-1.5">
              <div className="h-1.5 w-8 bg-white/60 rounded-full" />
              <div className="h-1.5 flex-1 bg-white/15 rounded-full" />
              <div className="h-1.5 w-5 bg-white/35 rounded-full" />
              <div className="h-1.5 w-5 bg-white/35 rounded-full" />
            </div>
            <div className="space-y-1 flex-shrink-0">
              <div className="h-2 w-2/3 bg-white/65 rounded-full" />
              <div className="h-1.5 w-5/12 bg-white/35 rounded-full" />
              <div className="flex gap-1.5 pt-1">
                <div className="h-3.5 w-12 bg-white/55 rounded" />
                <div className="h-3.5 w-12 bg-white/22 rounded" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 flex-1">
              <div className="bg-white/15 rounded" />
              <div className="bg-white/15 rounded" />
              <div className="bg-white/15 rounded" />
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-2.5 right-2.5 bg-black/35 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
        {p.pageCount} {p.pageCount === 1 ? "page" : "pages"}
      </div>
    </div>
  );
}

// ── Constants ─────────────────────────────────────────────────────────────────
const TYPE_LABELS: Record<ProjectType, string> = { web: "Web", ios: "iOS", android: "Android" };
const TYPE_COLORS: Record<ProjectType, string> = {
  web:     "bg-indigo-100 text-indigo-700",
  ios:     "bg-blue-100 text-blue-700",
  android: "bg-emerald-100 text-emerald-700",
};
const TYPE_CARD_BORDER: Record<ProjectType, string> = {
  web:     "border-l-indigo-500",
  ios:     "border-l-blue-500",
  android: "border-l-emerald-500",
};
const PLATFORM_BG: Record<ProjectType, string> = {
  web:     "from-indigo-500 to-violet-600",
  ios:     "from-blue-500 to-indigo-600",
  android: "from-emerald-500 to-teal-600",
};

function buildTemplateData(template: Template) {
  const gid = () => Math.random().toString(36).slice(2, 9);
  return template.pages.map((page, i) => ({
    id: i === 0 ? "p1" : gid(),
    name: page.name,
    sections: page.sections.map(s => ({ uid: gid(), name: s.name, file: s.file })),
  }));
}

type Step = "type" | "template" | "name";

export default function Dashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectMeta[]>([]);
  const [showNew, setShowNew] = useState(false);
  const [step, setStep] = useState<Step>("type");
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState<ProjectType>("web");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameVal, setRenameVal] = useState("");
  const [menuId, setMenuId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [cloudStatus, setCloudStatus] = useState<"syncing" | "synced" | "offline">("syncing");
  const newNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setProjects(listProjects());
    syncFromCloud().then(merged => {
      setProjects(merged);
      setCloudStatus("synced");
    }).catch(() => setCloudStatus("offline"));
  }, []);
  useEffect(() => { if (step === "name") setTimeout(() => newNameRef.current?.focus(), 50); }, [step]);

  function refresh() { setProjects(listProjects()); }
  function openNew() { setShowNew(true); setStep("type"); setNewName(""); setSelectedTemplate(null); }
  function closeNew() { setShowNew(false); }

  function handleCreate() {
    const name = newName.trim() || (selectedTemplate?.name ?? "Untitled");
    const data = selectedTemplate ? buildTemplateData(selectedTemplate) : undefined;
    const meta = createProject(name, newType, data);
    closeNew();
    cloudSaveProject(meta.id, data ?? null, meta);
    router.push(`/builder?id=${meta.id}`);
  }

  function handleDuplicate(id: string) {
    const dup = duplicateProject(id);
    if (dup) cloudSaveProject(dup.id, null, dup);
    refresh();
    setMenuId(null);
  }
  function handleDelete(id: string) {
    deleteProject(id);
    cloudDeleteProject(id);
    refresh();
    setConfirmDelete(null);
    setMenuId(null);
  }
  function handleRename(id: string) {
    if (renameVal.trim()) {
      renameProject(id, renameVal.trim());
      const updated = listProjects().find(p => p.id === id);
      if (updated) cloudSaveProject(id, null, updated);
    }
    setRenamingId(null);
    refresh();
  }

  const visible = projects
    .filter(p => filter === "all" || p.type === filter)
    .filter(p => !search.trim() || p.name.toLowerCase().includes(search.toLowerCase()));

  const templates = getTemplates(newType);

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#f8f8fb" }}>

      {/* ── Top accent bar ── */}
      <div className="h-[3px] bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />

      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-15 flex items-center justify-between" style={{ height: 60 }}>
          <div className="flex items-center gap-2.5">
            <BloxerLogo size={27} />
            <span className="font-bold text-gray-900 text-[17px] tracking-tight">Bloxer</span>
            <span className="ml-1 text-[10px] font-bold text-indigo-500 bg-indigo-50 px-1.5 py-0.5 rounded-md tracking-wide">BETA</span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ml-1 ${
              cloudStatus === "synced" ? "bg-emerald-50 text-emerald-600" :
              cloudStatus === "offline" ? "bg-gray-100 text-gray-400" :
              "bg-amber-50 text-amber-500"
            }`}>
              {cloudStatus === "synced" ? "☁ synced" : cloudStatus === "offline" ? "○ offline" : "↻ syncing"}
            </span>
          </div>
          <button onClick={openNew}
            className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-200/60 hover:shadow-lg hover:shadow-indigo-300/50 active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)" }}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            New Project
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">

        {/* ── Platform stats ── */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {(["web", "ios", "android"] as const).map(t => {
            const count = projects.filter(p => p.type === t).length;
            const active = filter === t;
            return (
              <button key={t} onClick={() => setFilter(active ? "all" : t)}
                className={`bg-white border-l-[3px] rounded-2xl p-5 text-left transition-all shadow-sm hover:shadow-md ${TYPE_CARD_BORDER[t]} ${active ? "ring-2 ring-inset ring-indigo-100 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
                style={{ borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderTopColor: active ? "" : "#e5e7eb", borderRightColor: active ? "" : "#e5e7eb", borderBottomColor: active ? "" : "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-4">
                  <PlatformIcon type={t} size={22} />
                  <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full ${TYPE_COLORS[t]}`}>
                    {TYPE_LABELS[t].toUpperCase()}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[32px] font-bold text-gray-900 leading-none tabular-nums">{count}</p>
                    <p className="text-xs text-gray-400 mt-1.5 font-medium">{count === 1 ? "project" : "projects"}</p>
                  </div>
                  {active && (
                    <div className="text-indigo-400 mb-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Section heading ── */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-base font-bold text-gray-900">Projects</h2>
            {projects.length > 0 && (
              <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{projects.length}</span>
            )}
          </div>
        </div>

        {/* ── Filters + Search ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex gap-1 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
            {(["all", "web", "ios", "android"] as const).map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${filter === t ? "bg-indigo-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"}`}>
                {t === "all" ? "All" : TYPE_LABELS[t]}
              </button>
            ))}
          </div>
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects…"
              className="w-full text-[13px] border border-gray-200 bg-white rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-300 shadow-sm transition-all" />
          </div>
        </div>

        {/* ── Empty state ── */}
        {visible.length === 0 && (
          <div className="text-center py-20">
            {search || filter !== "all" ? (
              <div className="w-14 h-14 mx-auto mb-5 bg-gray-100 rounded-2xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="7" stroke="#9ca3af" strokeWidth="1.5"/><path d="M15.5 15.5L20 20" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            ) : (
              <div className="relative w-[68px] h-[68px] mx-auto mb-7">
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-indigo-100 rounded-xl" />
                <div className="absolute bottom-[14px] left-[14px] w-10 h-10 bg-indigo-200 rounded-xl" />
                <div className="absolute bottom-7 left-7 w-10 h-10 bg-indigo-300 rounded-xl" />
              </div>
            )}
            <h2 className="text-[18px] font-bold text-gray-900 mb-2">
              {search || filter !== "all" ? "No matching projects" : "Your canvas is empty"}
            </h2>
            <p className="text-gray-400 text-sm mb-7 max-w-[260px] mx-auto leading-relaxed">
              {search || filter !== "all"
                ? "Try adjusting your search or filter."
                : "Design web and mobile layouts visually, then export clean code."}
            </p>
            {!search && filter === "all" && (
              <button onClick={openNew}
                className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm shadow-md shadow-indigo-200/60 hover:shadow-lg active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)" }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                Create your first project
              </button>
            )}
          </div>
        )}

        {/* ── Project grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map(p => (
            <div key={p.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
              onClick={() => router.push(`/builder?id=${p.id}`)}>
              {/* overflow-hidden only on thumbnail so the dropdown menu isn't clipped */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <ProjectThumbnail p={p} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25">
                  <span className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-xl shadow-lg">Open →</span>
                </div>
              </div>
              <div className="p-4" onClick={e => e.stopPropagation()}>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  {renamingId === p.id ? (
                    <input autoFocus value={renameVal} onChange={e => setRenameVal(e.target.value)}
                      onBlur={() => handleRename(p.id)}
                      onKeyDown={e => { if (e.key === "Enter") handleRename(p.id); if (e.key === "Escape") setRenamingId(null); }}
                      className="flex-1 text-sm font-semibold text-gray-900 bg-transparent border-b border-indigo-400 outline-none min-w-0" />
                  ) : (
                    <h3 onDoubleClick={() => { setRenamingId(p.id); setRenameVal(p.name); }}
                      className="font-semibold text-gray-900 text-[13px] truncate flex-1 cursor-default" title={p.name}>{p.name}</h3>
                  )}
                  <div className="relative flex-shrink-0">
                    <button onClick={() => setMenuId(menuId === p.id ? null : p.id)}
                      className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-lg leading-none">⋯</button>
                    {menuId === p.id && (
                      <div className="absolute right-0 bottom-8 w-44 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 py-1 text-[13px]">
                        <button onClick={() => router.push(`/builder?id=${p.id}`)} className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 font-medium">Open</button>
                        <button onClick={() => { setRenamingId(p.id); setRenameVal(p.name); setMenuId(null); }} className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50">Rename</button>
                        <button onClick={() => handleDuplicate(p.id)} className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50">Duplicate</button>
                        <div className="border-t border-gray-100 my-1" />
                        <button onClick={() => { setConfirmDelete(p.id); setMenuId(null); }} className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-50">Delete</button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${TYPE_COLORS[p.type]}`}>{TYPE_LABELS[p.type]}</span>
                  <span className="text-[11px] text-gray-400 font-medium">{timeAgo(p.updatedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {menuId && <div className="fixed inset-0 z-0" onClick={() => setMenuId(null)} />}

      {/* ── Delete confirm ── */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-100">
            <div className="w-11 h-11 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 6h10M8 6V4h4v2M9 9v5M11 9v5M4 6l1 10h10L16 6" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-bold text-gray-900 text-[17px] mb-1">Delete project?</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              <span className="font-semibold text-gray-700">"{projects.find(p => p.id === confirmDelete)?.name}"</span> will be permanently deleted and cannot be recovered.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={() => handleDelete(confirmDelete)}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ── New project wizard ── */}
      {showNew && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={e => { if (e.target === e.currentTarget) closeNew(); }}>
          <div className="bg-white rounded-2xl w-full shadow-2xl overflow-hidden flex flex-col border border-gray-100"
            style={{ maxWidth: step === "template" ? 680 : 440, maxHeight: "90vh" }}>

            {/* Modal header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                {step !== "type" && (
                  <button onClick={() => setStep(step === "name" ? "template" : "type")}
                    className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg text-sm transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                )}
                <h3 className="font-bold text-gray-900 text-[15px]">
                  {step === "type" && "Choose Platform"}
                  {step === "template" && "Choose Template"}
                  {step === "name" && "Name Your Project"}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center">
                  {(["type", "template", "name"] as Step[]).map((s, i) => {
                    const idx = (["type","template","name"] as Step[]).indexOf(step);
                    return (
                      <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? "w-5 bg-indigo-600" : i < idx ? "w-1.5 bg-indigo-300" : "w-1.5 bg-gray-200"}`} />
                    );
                  })}
                </div>
                <button onClick={closeNew}
                  className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>

            {/* Step 1: Platform */}
            {step === "type" && (
              <div className="p-6">
                <p className="text-[13px] text-gray-500 mb-4">What are you building?</p>
                <div className="grid grid-cols-3 gap-3">
                  {(["web", "ios", "android"] as const).map(t => (
                    <button key={t} onClick={() => { setNewType(t); setSelectedTemplate(null); setStep("template"); }}
                      className="flex flex-col items-center gap-3.5 py-7 px-4 rounded-2xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group">
                      <PlatformIcon type={t} size={36} />
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-sm">{TYPE_LABELS[t]}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {t === "web" ? "Next.js" : t === "ios" ? "iOS 16+" : "Android 10+"}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Template */}
            {step === "template" && (
              <div className="flex-1 overflow-y-auto p-6">
                <button onClick={() => { setSelectedTemplate(null); setStep("name"); }}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 mb-4 transition-all text-left ${!selectedTemplate ? "border-indigo-500 bg-indigo-50" : "border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50"}`}>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Blank project</p>
                    <p className="text-xs text-gray-400 mt-0.5">Start from an empty canvas</p>
                  </div>
                </button>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Templates</p>
                <div className="grid grid-cols-1 gap-2">
                  {templates.map(t => (
                    <button key={t.id} onClick={() => setSelectedTemplate(selectedTemplate?.id === t.id ? null : t)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${selectedTemplate?.id === t.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${PLATFORM_BG[t.platform]} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>{t.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                          {t.tags.includes("popular") && <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-1.5 py-0.5 rounded-full">Popular</span>}
                          {t.tags.includes("dark") && <span className="text-[10px] bg-gray-800 text-gray-200 font-bold px-1.5 py-0.5 rounded-full">Dark</span>}
                        </div>
                        <p className="text-xs text-gray-400">{t.desc}</p>
                        <p className="text-[11px] text-gray-300 mt-0.5">{t.pages.reduce((a, p) => a + p.sections.length, 0)} sections · {t.pages.length} {t.pages.length === 1 ? "page" : "pages"}</p>
                      </div>
                      {selectedTemplate?.id === t.id && (
                        <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === "template" && (
              <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
                <button onClick={() => setStep("name")}
                  className="w-full py-3 text-white font-semibold rounded-xl text-sm transition-all shadow-sm hover:shadow-md active:scale-[0.99]"
                  style={{ background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)" }}>
                  {selectedTemplate ? `Use "${selectedTemplate.name}" →` : "Continue with Blank →"}
                </button>
              </div>
            )}

            {/* Step 3: Name */}
            {step === "name" && (
              <div className="p-6">
                {selectedTemplate && (
                  <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 mb-5">
                    <span className="text-2xl">{selectedTemplate.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-indigo-900">{selectedTemplate.name}</p>
                      <p className="text-xs text-indigo-400 mt-0.5">{selectedTemplate.pages.reduce((a, p) => a + p.sections.length, 0)} sections pre-loaded</p>
                    </div>
                  </div>
                )}
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Project Name</label>
                <input ref={newNameRef} value={newName} onChange={e => setNewName(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") handleCreate(); }}
                  placeholder={selectedTemplate?.name ?? "My App"}
                  className="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-300 mb-5 transition-all" />
                <button onClick={handleCreate}
                  className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-[0.99]"
                  style={{ background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)" }}>
                  Create Project →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

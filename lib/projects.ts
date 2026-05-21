export type ProjectType = "web" | "ios" | "android";

export type ProjectMeta = {
  id: string;
  name: string;
  type: ProjectType;
  pageCount: number;
  createdAt: number;
  updatedAt: number;
};

const INDEX_KEY = "lsk-projects-index";
const projectKey = (id: string) => `lsk-project-${id}`;

function genId() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── localStorage (synchronous, used by builder) ──────────────────────────────

export function listProjects(): ProjectMeta[] {
  try {
    const raw = localStorage.getItem(INDEX_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ProjectMeta[];
  } catch {
    return [];
  }
}

export function getProject(id: string): unknown | null {
  try {
    const raw = localStorage.getItem(projectKey(id));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveProject(id: string, data: unknown, meta: Partial<ProjectMeta>) {
  try {
    localStorage.setItem(projectKey(id), JSON.stringify(data));
    const index = listProjects();
    const existing = index.findIndex(p => p.id === id);
    const now = Date.now();
    if (existing >= 0) {
      index[existing] = { ...index[existing], ...meta, id, updatedAt: now };
    } else {
      index.unshift({ id, name: meta.name ?? "Untitled", type: meta.type ?? "web", pageCount: meta.pageCount ?? 1, createdAt: now, updatedAt: now });
    }
    localStorage.setItem(INDEX_KEY, JSON.stringify(index));
  } catch {}
}

export function createProject(name: string, type: ProjectType, initialData?: unknown): ProjectMeta {
  const id = genId();
  const now = Date.now();
  const pageCount = Array.isArray(initialData) ? (initialData as unknown[]).length : 1;
  const meta: ProjectMeta = { id, name, type, pageCount, createdAt: now, updatedAt: now };
  const index = listProjects();
  index.unshift(meta);
  localStorage.setItem(INDEX_KEY, JSON.stringify(index));
  if (initialData) localStorage.setItem(projectKey(id), JSON.stringify(initialData));
  return meta;
}

export function deleteProject(id: string) {
  try {
    localStorage.removeItem(projectKey(id));
    const index = listProjects().filter(p => p.id !== id);
    localStorage.setItem(INDEX_KEY, JSON.stringify(index));
  } catch {}
}

export function duplicateProject(id: string): ProjectMeta | null {
  const data = getProject(id);
  const index = listProjects();
  const original = index.find(p => p.id === id);
  if (!original) return null;
  const newId = genId();
  const now = Date.now();
  const meta: ProjectMeta = { ...original, id: newId, name: `${original.name} (copy)`, createdAt: now, updatedAt: now };
  if (data) localStorage.setItem(projectKey(newId), JSON.stringify(data));
  index.unshift(meta);
  localStorage.setItem(INDEX_KEY, JSON.stringify(index));
  return meta;
}

export function renameProject(id: string, name: string) {
  const index = listProjects();
  const i = index.findIndex(p => p.id === id);
  if (i >= 0) {
    index[i].name = name;
    index[i].updatedAt = Date.now();
    localStorage.setItem(INDEX_KEY, JSON.stringify(index));
  }
}

export function timeAgo(ts: number): string {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(ts).toLocaleDateString();
}

// ─── Cloud sync (async, proxies through /api/projects) ────────────────────────

export async function cloudListProjects(): Promise<ProjectMeta[]> {
  try {
    const res = await fetch("/api/projects");
    const json = await res.json();
    return (json.projects ?? []) as ProjectMeta[];
  } catch {
    return [];
  }
}

export async function cloudGetProject(id: string): Promise<unknown | null> {
  try {
    const res = await fetch(`/api/projects/${id}`);
    const json = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

export async function cloudSaveProject(id: string, data: unknown, meta: ProjectMeta): Promise<void> {
  try {
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ meta, data }),
    });
  } catch {}
}

export async function cloudDeleteProject(id: string): Promise<void> {
  try {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
  } catch {}
}

// Merge cloud projects into localStorage (cloud wins on conflict)
export async function syncFromCloud(): Promise<ProjectMeta[]> {
  const cloudProjects = await cloudListProjects();
  if (cloudProjects.length === 0) return listProjects();

  const localIndex = listProjects();
  const localMap = new Map(localIndex.map(p => [p.id, p]));

  for (const cp of cloudProjects) {
    const lp = localMap.get(cp.id);
    if (!lp || cp.updatedAt > lp.updatedAt) {
      localMap.set(cp.id, cp);
    }
  }

  const merged = Array.from(localMap.values()).sort((a, b) => b.updatedAt - a.updatedAt);
  localStorage.setItem(INDEX_KEY, JSON.stringify(merged));
  return merged;
}

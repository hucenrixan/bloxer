import { NextResponse } from "next/server";

const URL = process.env.NEXCLOUD_URL!;
const KEY = process.env.NEXCLOUD_API_KEY!;
const SECRET = process.env.NEXCLOUD_API_SECRET!;

function auth() {
  return "Basic " + Buffer.from(`${KEY}:${SECRET}`).toString("base64");
}

async function listFiles(): Promise<{ id: number; original_filename: string; url: string }[]> {
  const res = await fetch(`${URL}/v1/files?limit=500`, { headers: { Authorization: auth() }, cache: "no-store" });
  const json = await res.json();
  return json.files ?? [];
}

async function deleteFile(id: number) {
  await fetch(`${URL}/v1/files/${id}`, { method: "DELETE", headers: { Authorization: auth() } });
}

async function uploadJson(filename: string, content: unknown): Promise<{ id: number; url: string }> {
  const form = new FormData();
  const blob = new Blob([JSON.stringify(content)], { type: "application/json" });
  form.append("file", blob, filename);
  const res = await fetch(`${URL}/v1/upload`, { method: "POST", headers: { Authorization: auth() }, body: form });
  return res.json();
}

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

// GET /api/projects — return the index
export async function GET() {
  try {
    const files = await listFiles();
    const indexFile = files.find(f => f.original_filename === "bloxer-index.json");
    if (!indexFile) return NextResponse.json({ projects: [] });
    const index = await fetchJson(indexFile.url);
    return NextResponse.json({ projects: index });
  } catch {
    return NextResponse.json({ projects: [] });
  }
}

// POST /api/projects — called on create; body: { id, meta, data }
export async function POST(req: Request) {
  try {
    const { id, meta, data } = await req.json();
    const files = await listFiles();

    // Update index
    const indexFile = files.find(f => f.original_filename === "bloxer-index.json");
    let index: unknown[] = [];
    if (indexFile) {
      index = (await fetchJson(indexFile.url)) as unknown[];
      await deleteFile(indexFile.id);
    }
    index = [meta, ...(index as { id: string }[]).filter(p => p.id !== id)];
    await uploadJson("bloxer-index.json", index);

    // Save data file
    const dataFile = files.find(f => f.original_filename === `bloxer-d-${id}.json`);
    if (dataFile) await deleteFile(dataFile.id);
    await uploadJson(`bloxer-d-${id}.json`, data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

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

async function uploadJson(filename: string, content: unknown) {
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

// GET /api/projects/:id — return project data
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const files = await listFiles();
    const dataFile = files.find(f => f.original_filename === `bloxer-d-${id}.json`);
    if (!dataFile) return NextResponse.json({ data: null });
    const data = await fetchJson(dataFile.url);
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ data: null });
  }
}

// PUT /api/projects/:id — upsert project (meta + data)
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const { meta, data } = await req.json();
    const files = await listFiles();

    // Update index
    const indexFile = files.find(f => f.original_filename === "bloxer-index.json");
    let index: { id: string }[] = [];
    if (indexFile) {
      index = (await fetchJson(indexFile.url)) as { id: string }[];
      await deleteFile(indexFile.id);
    }
    index = [meta, ...index.filter(p => p.id !== id)];
    await uploadJson("bloxer-index.json", index);

    // Save data file (only if data provided)
    if (data !== undefined && data !== null) {
      const dataFile = files.find(f => f.original_filename === `bloxer-d-${id}.json`);
      if (dataFile) await deleteFile(dataFile.id);
      await uploadJson(`bloxer-d-${id}.json`, data);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// DELETE /api/projects/:id
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const files = await listFiles();

    // Remove from index
    const indexFile = files.find(f => f.original_filename === "bloxer-index.json");
    if (indexFile) {
      const index = ((await fetchJson(indexFile.url)) as { id: string }[]).filter(p => p.id !== id);
      await deleteFile(indexFile.id);
      await uploadJson("bloxer-index.json", index);
    }

    // Delete data file
    const dataFile = files.find(f => f.original_filename === `bloxer-d-${id}.json`);
    if (dataFile) await deleteFile(dataFile.id);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

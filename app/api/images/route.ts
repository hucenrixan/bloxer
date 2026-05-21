import { NextResponse } from "next/server";

const URL = process.env.NEXCLOUD_URL!;
const KEY = process.env.NEXCLOUD_API_KEY!;
const SECRET = process.env.NEXCLOUD_API_SECRET!;

function auth() {
  return "Basic " + Buffer.from(`${KEY}:${SECRET}`).toString("base64");
}

export async function GET() {
  try {
    const res = await fetch(`${URL}/v1/files?type=image&limit=200`, {
      headers: { Authorization: auth() },
      cache: "no-store",
    });
    const json = await res.json();
    const images = (json.files ?? []).map((f: { id: number; url: string; original_filename: string; bytes: number; created_at: string }) => ({
      id: f.id,
      url: f.url,
      name: f.original_filename,
      bytes: f.bytes,
      createdAt: f.created_at,
    }));
    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "no file" }, { status: 400 });

    const upstream = new FormData();
    upstream.append("file", file, file.name);

    const res = await fetch(`${URL}/v1/upload`, {
      method: "POST",
      headers: { Authorization: auth() },
      body: upstream,
    });
    const data = await res.json();
    if (data.error) return NextResponse.json({ error: data.error }, { status: 500 });

    return NextResponse.json({ url: data.url, id: data.id, name: data.original_filename });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

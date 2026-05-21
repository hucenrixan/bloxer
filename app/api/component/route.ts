import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get("file");
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const safePath = path.join(process.cwd(), "components", file);
  if (!safePath.startsWith(path.join(process.cwd(), "components"))) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  try {
    const content = fs.readFileSync(safePath, "utf-8");
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

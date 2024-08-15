import { NextResponse } from "next/server";

export async function GET(req) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(`${API_URL}?sheet=index`);

  if (!res.ok) {
    return NextResponse.error();
  }

  const data = await res.json();
  return NextResponse.json(data);
}
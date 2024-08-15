import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?sheet=index`);
  const data = await res.json();
  return NextResponse.json(data);
}
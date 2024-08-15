import { NextResponse } from "next/server";

export async function GET(
  req,
  { params }) {
  const res = await fetch(`https://zenn.dev/api/articles?username=${params.username}&order=latest`);
  const data = await res.json();
  return NextResponse.json(data);
}
import { NextResponse } from "next/server";

export async function GET(
  req,
  { params }) {
  const res = await fetch(`https://qiita.com/api/v2/users/${params.username}/items`);
  const data = await res.json();
  return NextResponse.json(data);
}
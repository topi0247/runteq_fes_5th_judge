import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const API_URL = process.env.API_URL || "";
  const res = await fetch(`${API_URL}?sheet=${params.id}`);

  if (!res.ok) {
    return NextResponse.error();
  }

  const data = await res.json();
  let dataJson = {
    ...data,
    lists: [
      data.list1,
      data.list2,
      data.list3
    ]
  }
  return NextResponse.json(dataJson);
}
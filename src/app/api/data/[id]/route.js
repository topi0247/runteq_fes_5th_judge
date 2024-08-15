import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?sheet=${params.id}`);
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
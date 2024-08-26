"use client";

import Card from "@/components/card";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function JudgeShow({ params }) {
  const { data } = useSWR(`/api/data/${params.id}`, fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <article className="w-full md:mt-8">
      <div className="w-full flex justify-center items-center">
        <Card {...data} />
      </div>
    </article>);
}

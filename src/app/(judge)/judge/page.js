"use client"

import Cards from "@/components/cards";
import IndexHeadTag from "@/components/indexHeadTag";
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Judge() {
  const { data } = useSWR("/api/data/list", fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <article className="w-full md:mt-8 flex justify-center items-center flex-col gap-8">
      <div className="w-full">
        <IndexHeadTag headName="アラムナイ賞審査員" description="RUNTEQ卒業生の方々による審査" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {data.filter((data, _) => data.type === "alumni").map((data, i) => <Cards key={i} {...data} />)}
        </div>
      </div>
      <div className="w-full">
        <IndexHeadTag headName="スタッフ賞審査員" description="RUNETQ運営の方々による審査" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {data.filter((data, _) => data.type === "staff").map((data, i) => <Cards key={i} {...data} />)}
        </div>
      </div>
    </article>);
}
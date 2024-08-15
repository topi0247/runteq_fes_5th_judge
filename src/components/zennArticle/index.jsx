"use client"

import Link from "next/link"
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function ZennArticle({ username }) {
  const { data } = useSWR(`/api/zenn/${username}`, fetcher)

  const zennArticles = data?.articles
  if (!zennArticles) return <div>loading...</div>
  return (
    <>
      <h4 className="text-lg">Zenn</h4>
      <div className="flex flex-col gap-2 text-blue-600 justify-center items-start">
        {zennArticles.map((data, i) => (
          <Link key={i} href={`https://zenn.dev${data.path}`} target="_blank" rel="noopener noreferrer">
            <span>{data.emoji}</span>
            {data.title}
          </Link>
        ))}
      </div>
    </>
  )

}
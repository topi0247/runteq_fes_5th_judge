"use client"

import Link from "next/link"
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function QiitaArticle({ username }) {
  const { data } = useSWR(`/api/qiita/${username}`, fetcher)

  const QiitaArticles = data ? data.map((item) => {
    return {
      title: item.title,
      url: item.url
    }
  }) : []
  if (!QiitaArticles) return <div>loading...</div>
  return (
    <>
      <h4 className="text-2xl">Qiita</h4>
      <div className="flex flex-col gap-2 text-blue-600 justify-center items-start">
        {QiitaArticles.map((data, i) => (
          <Link key={i} href={data.url} target="_blank" rel="noopener noreferrer">
            {data.title}
          </Link>
        ))}
      </div>
    </>
  )

}
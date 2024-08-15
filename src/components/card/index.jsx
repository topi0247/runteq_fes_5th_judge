import Image from "next/image";
import LinkButton from "@/components/link";
import Timeline from "@/components/timeline";
import ZennArticle from "@/components/zennArticle";
import QiitaArticle from "@/components/qiitaArticle";

export default function Card({ img, term, name, shortDescription, description, xUrl, timesUrl, zennId, qiitaId, lists, timeline }) {
  return (
    <section className="p-4 max-w-[1000px] w-full">
      <div className="flex flex-col justify-center items-center gap-4 w-full relative">
        <div className="absolute top-0 right-0"><LinkButton href="/judge" addLinkClass="px-2 py-1 text-md">戻る</LinkButton></div>
        <h2 className="text-center text-2xl"><span className="text-base">{term}</span> {name}</h2>
        <div className="max-w-96 w-full">
          <Image src={img} alt="アプリ名" width={1000} height={800} className="object-cover w-full h-full" />
        </div>
        <p>{shortDescription}</p>
        <hr />
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
          <div className="flex justify-center items-center gap-4">
            {xUrl && <LinkButton href={xUrl} addLinkClass="px-4 py-2" target>X</LinkButton>}
            {timesUrl && <LinkButton href={timesUrl} addLinkClass="px-4 py-2" target>times</LinkButton>}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-8 md:flex-row">
          <p className="w-full md:w-1/2 bg-white p-8">{description}</p>
          <div className="md:w-1/2 bg-orange-300 bg-opacity-40 border-orange-500 border p-8 text-slate-800">
            <h3 className="text-2xl">こんな方におすすめ！</h3>
            <ul className="list-disc ml-8 mt-4">
              {lists.map((list, i) => <li key={i}>{list}</li>)}
            </ul>
          </div>
        </div>
        <hr />
        <Timeline data={timeline} />
        <hr />
        {(zennId || qiitaId) &&
          <div className="w-full">
            <div className="flex w-full gap-3 justify-center items-center flex-col">
              {qiitaId &&
                <div className="w-full p-8 border border-green-500 bg-green-400 bg-opacity-20">
                  <QiitaArticle username={qiitaId} />
                </div>
              }
              {zennId &&
                <div className="w-full p-8 border border-blue-500 bg-blue-400 bg-opacity-20">
                  <ZennArticle username={zennId} />
                </div>
              }
            </div>
          </div>
        }
      </div>
      <div className="mt-8"><LinkButton href="/judge" addLinkClass="px-4 py-2">戻る</LinkButton></div>
    </section >
  )
}
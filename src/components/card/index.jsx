import Image from "next/image";
import LinkButton from "@/components/link";
import Timeline from "@/components/timeline";
import ZennArticle from "@/components/zennArticle";
import QiitaArticle from "@/components/qiitaArticle";
import MarkdownComponent from "@/components/markdown";

export default function Card({ img, term, name, shortDescription, description, operationComment, other, xUrl, timesUrl, noteUrl, notionUrl, githubUrl, zennId, qiitaId, lists, timeline }) {
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
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {xUrl && <LinkButton href={xUrl} addLinkClass="px-4 py-2" target>X</LinkButton>}
            {timesUrl && <LinkButton href={timesUrl} addLinkClass="px-4 py-2" target>times</LinkButton>}
            {noteUrl && <LinkButton href={noteUrl} addLinkClass="px-4 py-2" target>Note</LinkButton>}
            {notionUrl && <LinkButton href={notionUrl} addLinkClass="px-4 py-2" target>Notion</LinkButton>}
            {githubUrl && <LinkButton href={githubUrl} addLinkClass="px-4 py-2" target>GitHub</LinkButton>}
          </div>
        </div>
        <div className="w-full grid grid-cols-1  justify-center items-start gap-8 md:flex-row">
          <div className="w-full bg-white p-8">
            <h3 className="text-2xl mb-3"><span className="border-b-2 border-orange-300 px-2">自己紹介</span></h3>
            <MarkdownComponent content={description} />
          </div>
          <div className="w-full bg-white p-8">
            <h3 className="text-2xl mb-3"><span className="border-b-2 border-orange-300 px-2">こんな方にオススメ！</span></h3>
            <ul className="list-disc ml-8 mt-4">
              {lists.map((list, i) => <li key={i}>{list}</li>)}
            </ul>
          </div>
          <div className="w-full bg-white p-8">
            <h3 className="text-2xl mb-3"><span className="border-b-2 border-orange-300 px-2">コメント</span></h3>
            <MarkdownComponent content={other} />
          </div>
          <div className="w-full bg-orange-300 bg-opacity-40 border-orange-500 border p-8 text-slate-800">
            <h3 className="text-2xl mb-3"><span className="border-b-2 border-white px-2">運営コメント</span></h3>
            <MarkdownComponent content={operationComment} />
          </div>
        </div>
        <hr />
        <Timeline data={timeline} />
        {(zennId || qiitaId) &&
          <>
            <hr />
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
          </>
        }
      </div>
      <div className="mt-8"><LinkButton href="/judge" addLinkClass="px-4 py-2">戻る</LinkButton></div>
    </section >
  )
}
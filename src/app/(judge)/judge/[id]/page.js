import Card from "@/components/card";

const Data = {
  img: "https://pbs.twimg.com/media/GUmPNV8XoAA4PXd?format=jpg&name=small",
  term: "校長",
  name: "ひさじゅ校長",
  shortDescription: "言わずと知れた、我らが校長！",
  description: "長めのご紹介文ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキス",
  xUrl: "https://x.com",
  timesUrl: "https://chat.runteq.jp/runteq/channels/times_52a_nishina_kanae",
  zennId: "topi_log",
  qiitaId: "topi_log",
  lists: [
    "こんな方におすすめ！",
    "こんな方におすすめ！",
    "こんな方におすすめ！",
  ],
  timeline: [
    {
      title: "タイトル",
      date: "Apr 7, 2024",
      shortDescription: "簡単な説明",
      description: "2行くらいの説明",
      icon: <svg className="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
      </svg>
    },
    {
      title: "タイトル",
      date: "Apr 7, 2024",
      shortDescription: "簡単な説明",
      description: "2行くらいの説明",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path className="fill-slate-300" d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z" />
        <path className="fill-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z" />
      </svg>
    },
    {
      title: "タイトル",
      date: "Apr 7, 2024",
      shortDescription: "簡単な説明",
      description: "2行くらいの説明",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path className="fill-slate-300" d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z" />
        <path className="fill-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z" />
      </svg>
    },
    {
      title: "タイトル",
      date: "Apr 7, 2024",
      shortDescription: "簡単な説明",
      description: "2行くらいの説明",
      icon: <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
      </svg>
    }
  ]
};

export default function JudgeShow() {

  return (
    <article className="w-full md:mt-8">
      <div className="w-full flex justify-center items-center">
        <Card {...Data} />
      </div>
    </article>);
}
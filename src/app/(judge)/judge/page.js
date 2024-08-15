import Cards from "@/components/cards";
import IndexHeadTag from "@/components/indexHeadTag";


const AlumniData = [
  {
    name: "かっちゃんさん",
    term: "15期",
    img: "https://pbs.twimg.com/media/GUhOtKrXwAENwXq?format=jpg&name=small",
    id: "katchan"
  },
  {
    name: "古川瑛一さん",
    term: "34期",
    img: "https://pbs.twimg.com/media/GUhPAylawAA1_l5?format=jpg&name=small",
    id: "furukawa-eiichi"
  },
  {
    name: "ヨシミ姐さん",
    term: "40期",
    img: "https://pbs.twimg.com/media/GUhPrNQWoAA_bNU?format=jpg&name=small",
    id: "yoshimi"
  }
]

const StaffData = [
  {
    name: "清水講師",
    term: "44期, 講師",
    img: "https://pbs.twimg.com/media/GUmO4-kWUAALwyu?format=jpg&name=small",
    id: "shimizu"
  },
  {
    name: "本多CA",
    term: "CA",
    img: "https://pbs.twimg.com/media/GUmPGO1XsAETHY0?format=jpg&name=small",
    id: "honda"
  },
  {
    name: "ひさじゅ校長",
    term: "校長",
    img: "https://pbs.twimg.com/media/GUmPNV8XoAA4PXd?format=jpg&name=small",
    id: "hisaju"
  }
]

export default function App() {

  return (
    <article className="w-full md:mt-8 flex justify-center items-center flex-col gap-8">
      <div className="w-full">
        <IndexHeadTag headName="アラムナイ賞審査員" description="RUNTEQ卒業生の方々による審査" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {AlumniData.map((data, i) => <Cards key={i} {...data} />)}
        </div>
      </div>
      <div className="w-full">
        <IndexHeadTag headName="スタッフ賞審査員" description="RUNETQ運営の方々による審査" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {StaffData.map((data, i) => <Cards key={i} {...data} />)}
        </div>
      </div>
    </article>);
}
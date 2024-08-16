import TimelineItem from "@/components/timelineItem";
import TimelineIcon from "@/components/timelineIcon";

export default function Timeline({ data }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-8">
        <div className="w-full max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {data.map((item, i) => (
              <TimelineItem key={i} title={item.title} date={item.date} shortDescription={item.shortDescription} description={item.description}>
                <TimelineIcon iconType={item.iconType} />
              </TimelineItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
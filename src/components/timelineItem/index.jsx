import MarkdownComponent from "@/components/markdown";

export default function TimelineItem({ title, date, shortDescription, description, children }) {
  return (
    <div className="relative">
      <div className="md:flex items-center md:space-x-4 mb-3">
        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
            {children}
          </div>
          <time className="text-sm font-medium text-indigo-500 md:w-28">{date}</time>
        </div>
        <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">{title}</span></div>
      </div>
      <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44"><MarkdownComponent content={description} /></div>
    </div>
  )
}

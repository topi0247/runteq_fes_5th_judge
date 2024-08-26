import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function MarkdownComponent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        ul: ({ children }) => <ul className="list-disc ml-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal ml-4">{children}</ol>,
        li: ({ children }) => <li>{children}</li>,
        p: ({ children }) => <p>{children}</p>,
        a: ({ children, href }) => <a className="text-blue-500 underline hover:opacity-50 transition-all break-all" href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
      }}>
      {content}
    </ReactMarkdown>
  );
}

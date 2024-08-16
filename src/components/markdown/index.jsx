import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function MarkdownComponent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        p: ({ children }) => <p>{children}</p>,
        a: ({ children, href }) => <a className="text-blue-500 underline hover:opacity-50 transition-all" href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
      }}>
      {content}
    </ReactMarkdown>
  );
}

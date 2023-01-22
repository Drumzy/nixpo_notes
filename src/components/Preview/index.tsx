import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeProps } from "react-markdown/lib/ast-to-react";
export interface PreviewProps {
  doc: string;
}
function Preview(props: PreviewProps) {
  return (
    <div className="w-[48%] h-full overflow-auto scrollbar-dark scroll-smooth">
      <ReactMarkdown
        className="prose max-w-none p-1"
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ node, ...props }) {
            return <pre {...props} />;
          },
          code({
            node,
            inline,
            className,
            children,
            style,
            ...props
          }: CodeProps) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={prism}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {props.doc}
      </ReactMarkdown>
    </div>
  );
}

export default Preview;

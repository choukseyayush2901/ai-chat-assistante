"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { Copy, Check } from "lucide-react";

import "highlight.js/styles/github-dark.css";

type Props = {
  children: string;
};

function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const code = String(children).replace(/\n$/, "");

  async function copy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="relative my-5 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950">
      <button
        onClick={copy}
        className="absolute right-3 top-3 rounded-lg bg-zinc-800 p-2 transition hover:bg-zinc-700"
      >
        {copied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} />
        )}
      </button>

      <pre className="overflow-x-auto p-5">
        <code className={className}>{code}</code>
      </pre>
    </div>
  );
}

export default function MarkdownRenderer({ children }: Props) {
  return (
    <div
      className="
      prose
      prose-invert
      max-w-none

      prose-headings:text-white
      prose-p:text-zinc-200
      prose-li:text-zinc-200
      prose-strong:text-white

      prose-code:text-violet-300
      prose-pre:bg-transparent
      prose-pre:p-0
    "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code(props) {
            const { className, children } = props;

            const inline = !className;

            if (inline) {
              return (
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-violet-300">
                  {children}
                </code>
              );
            }

            return <CodeBlock className={className}>{children}</CodeBlock>;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

type MarkdownContentProps = {
  content: string
  className?: string
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn("space-y-4 text-base leading-relaxed text-ink-muted", className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h2 className="font-heading text-2xl font-semibold text-ink">{children}</h2>
          ),
          h2: ({ children }) => (
            <h3 className="font-heading text-xl font-semibold text-ink">{children}</h3>
          ),
          h3: ({ children }) => (
            <h4 className="font-heading text-lg font-semibold text-ink">{children}</h4>
          ),
          p: ({ children }) => <p>{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc space-y-1 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-1 pl-5">{children}</ol>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal underline-offset-2 hover:underline"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-ink">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-teal pl-4 italic">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

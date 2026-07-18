/** Lightweight markdown for short CSV/CV snippets — safe for client components. */
export function InlineMarkdown({ text }: { text: string }) {
  const html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-warmGrey px-1 py-0.5 text-[0.9em]">$1</code>',
    )
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");

  return (
    <span
      className="[&_a]:text-teal"
      dangerouslySetInnerHTML={{ __html: `<span>${html}</span>` }}
    />
  );
}

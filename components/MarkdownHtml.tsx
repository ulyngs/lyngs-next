import { markdownToHtml } from "@/lib/markdown";

export default async function MarkdownHtml({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const html = await markdownToHtml(text);
  return (
    <div
      className={`[&_a]:text-teal [&_a]:underline [&_a]:decoration-teal/30 [&_a]:underline-offset-2 hover:[&_a]:decoration-teal [&_p]:mb-3 [&_p:last-child]:mb-0 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

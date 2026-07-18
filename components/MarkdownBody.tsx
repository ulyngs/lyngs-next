import { InlineMarkdown } from "@/lib/inline-markdown";

/** Renders markdown from CSV fields (descriptions, CV where fields, etc.) */
export default function MarkdownBody({
  text,
  className = "",
  as: Tag = "div",
}: {
  text: string;
  className?: string;
  as?: "div" | "p" | "span";
}) {
  return (
    <Tag className={className}>
      <InlineMarkdown text={text} />
    </Tag>
  );
}

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

type MdNode = { type: string; depth?: number; children?: MdNode[] };

/**
 * Push every heading down one level, so a post body written with `#` headings
 * doesn't compete with the page's own <h1>.
 */
function demoteHeadings() {
  return (tree: MdNode) => {
    const walk = (node: MdNode) => {
      if (node.type === "heading" && typeof node.depth === "number") {
        node.depth = Math.min(node.depth + 1, 6);
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export async function markdownToHtml(
  markdown: string,
  { demote = false }: { demote?: boolean } = {},
): Promise<string> {
  const processor = remark().use(remarkGfm);
  if (demote) processor.use(demoteHeadings);
  const result = await processor
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return String(result);
}

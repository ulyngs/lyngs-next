import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import { imageSize } from "@/lib/image-size";

type MdNode = {
  type: string;
  depth?: number;
  url?: string;
  data?: { hProperties?: Record<string, string | number> };
  children?: MdNode[];
};

function walkTree(node: MdNode, visit: (node: MdNode) => void) {
  visit(node);
  node.children?.forEach((child) => walkTree(child, visit));
}

/**
 * Push every heading down one level, so a post body written with `#` headings
 * doesn't compete with the page's own <h1>.
 */
function demoteHeadings() {
  return (tree: MdNode) => {
    walkTree(tree, (node) => {
      if (node.type === "heading" && typeof node.depth === "number") {
        node.depth = Math.min(node.depth + 1, 6);
      }
    });
  };
}

const OPTIMIZABLE = /\.(png|jpe?g)$/i;
const SRCSET_WIDTHS = [640, 828, 1200];
const optimizedSrc = (url: string, width: number) =>
  `/_next/image/?url=${encodeURIComponent(url)}&w=${width}&q=75`;

/**
 * Body images come from markdown, so they can't be next/image components.
 * Point them at the same optimizer endpoint by hand, and give them the
 * dimensions and lazy loading they'd otherwise get for free.
 */
function optimizeImages() {
  return (tree: MdNode) => {
    walkTree(tree, (node) => {
      const url = node.url;
      if (node.type !== "image" || !url?.startsWith("/") || !OPTIMIZABLE.test(url)) {
        return;
      }
      const size = imageSize(url);
      node.data = {
        hProperties: {
          src: optimizedSrc(url, 1200),
          srcSet: SRCSET_WIDTHS.map((w) => `${optimizedSrc(url, w)} ${w}w`).join(", "),
          sizes: "(min-width: 820px) 720px, 100vw",
          loading: "lazy",
          decoding: "async",
          ...(size && { width: size.width, height: size.height }),
        },
      };
    });
  };
}

export async function markdownToHtml(
  markdown: string,
  { postBody = false }: { postBody?: boolean } = {},
): Promise<string> {
  const processor = remark().use(remarkGfm);
  if (postBody) processor.use(demoteHeadings).use(optimizeImages);
  const result = await processor
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return String(result);
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  title: string;
  description: string;
  author: string;
  date: string;
  categories: string[];
  teaser: string | null;
  slug: string;
  aliases: string[];
  year: string;
  month: string;
  day: string;
};

export type Post = PostMeta & {
  content: string;
};

function pad(n: number | string) {
  return String(n).padStart(2, "0");
}

/** Normalize YAML dates (gray-matter often returns Date objects). */
export function toDateString(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    // Already YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) return trimmed.slice(0, 10);
    const parsed = new Date(trimmed);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }
  if (typeof value === "number") {
    return new Date(value).toISOString().slice(0, 10);
  }
  return "1970-01-01";
}

export function formatPostDate(date: string): string {
  const d = new Date(`${toDateString(date)}T12:00:00`);
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Turn leftover knitr image helpers into markdown images. */
function preprocessContent(content: string, teaser: string | null): string {
  const imageDir = teaser ? teaser.replace(/\/[^/]+$/, "/") : null;

  let text = content;

  // ```r\nknitr::include_graphics(str_c(image_path, "file.jpg"))\n```
  text = text.replace(
    /```r\s*\n\s*knitr::include_graphics\(\s*str_c\(\s*image_path\s*,\s*"([^"]+)"\s*\)\s*\)\s*\n```/g,
    (_m, file: string) => {
      if (!imageDir) return "";
      return `\n\n![${file}](${imageDir}${file})\n\n`;
    },
  );

  // Bare knitr calls without fences
  text = text.replace(
    /knitr::include_graphics\(\s*str_c\(\s*image_path\s*,\s*"([^"]+)"\s*\)\s*\)/g,
    (_m, file: string) => {
      if (!imageDir) return "";
      return `![${file}](${imageDir}${file})`;
    },
  );

  // Unescape YAML-ish backslash escapes that leaked into body
  text = text.replace(/\\:/g, ":");

  return text.trim() + "\n";
}

function parsePost(filename: string): Post {
  const fullPath = path.join(postsDirectory, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const date = toDateString(data.date);
  const d = new Date(`${date}T12:00:00`);
  const slug = String(data.slug ?? filename.replace(/\.mdx?$/, ""));
  const teaser = data.teaser ? String(data.teaser) : null;

  let aliases: string[] = [];
  if (Array.isArray(data.aliases)) {
    aliases = data.aliases.map(String);
  } else if (typeof data.aliases === "string") {
    aliases = [data.aliases];
  }

  let categories: string[] = [];
  if (Array.isArray(data.categories)) {
    categories = data.categories.map(String);
  } else if (typeof data.categories === "string") {
    categories = [data.categories];
  }

  const description = String(data.description ?? "")
    .trim()
    .replace(/\\:/g, ":");

  return {
    title: String(data.title ?? slug),
    description,
    author: String(data.author ?? "Ulrik Lyngs"),
    date,
    categories,
    teaser,
    slug,
    aliases,
    year: String(d.getFullYear()),
    month: pad(d.getMonth() + 1),
    day: pad(d.getDate()),
    content: preprocessContent(content, teaser),
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(parsePost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostByParams(
  year: string,
  month: string,
  day: string,
  slug: string,
): Post | undefined {
  return getAllPosts().find(
    (p) =>
      p.year === year && p.month === month && p.day === day && p.slug === slug,
  );
}

export function getAllPostParams() {
  return getAllPosts().map((p) => ({
    year: p.year,
    month: p.month,
    day: p.day,
    slug: p.slug,
  }));
}

export function getAllCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const cat of post.categories) {
      counts.set(cat, (counts.get(cat) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function postPath(post: Pick<PostMeta, "year" | "month" | "day" | "slug">) {
  return `/post/${post.year}/${post.month}/${post.day}/${post.slug}/`;
}

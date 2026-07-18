import type { MetadataRoute } from "next";
import { getAllPosts, postPath } from "@/lib/posts";

const BASE = "https://ulriklyngs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${BASE}${postPath(post)}`,
    lastModified: post.date,
  }));

  return [
    { url: `${BASE}/` },
    { url: `${BASE}/publications/` },
    { url: `${BASE}/cv/` },
    { url: `${BASE}/blog/` },
    ...posts,
  ];
}

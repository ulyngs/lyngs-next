import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  formatPostDate,
  getAllCategories,
  getAllPosts,
  postPath,
} from "@/lib/posts";

function plainText(markdown: string) {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing by Ulrik Lyngs on research, tools, and digital self-control.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
      <PageHeader
        title="Blog"
        description="Notes on digital self-control, reproducible research, and practical tooling."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="grid gap-4 rounded-2xl border border-border bg-white p-4 transition hover:border-teal/40 sm:grid-cols-[200px_1fr] sm:items-start sm:p-5"
            >
              {post.teaser ? (
                <Link
                  href={postPath(post)}
                  className="block overflow-hidden rounded-xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.teaser}
                    alt=""
                    className="aspect-[3/2] w-full object-cover"
                  />
                </Link>
              ) : (
                <div className="aspect-[3/2] rounded-xl bg-warmGrey" />
              )}
              <div>
                <p className="text-xs text-muted">{formatPostDate(post.date)}</p>
                <h2 className="mt-1 font-serif text-xl font-semibold text-navy">
                  <Link href={postPath(post)} className="hover:text-teal">
                    {post.title}
                  </Link>
                </h2>
                {post.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {plainText(post.description)}
                  </p>
                )}
                {post.categories.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-tealSoft px-2.5 py-0.5 text-xs text-teal"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <aside>
          <div className="rounded-2xl border border-border bg-white p-5 lg:sticky lg:top-24">
            <p className="text-[12px] font-semibold tracking-[0.08em] text-muted uppercase">
              Categories
            </p>
            <ul className="mt-3 space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground/90">{cat.name}</span>
                  <span className="text-muted">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

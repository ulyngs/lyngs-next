import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPostDate,
  getAllPostParams,
  getPostByParams,
  postPath,
} from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";

type Params = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export function generateStaticParams() {
  return getAllPostParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year, month, day, slug } = await params;
  const post = getPostByParams(year, month, day, slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year, month, day, slug } = await params;
  const post = getPostByParams(year, month, day, slug);
  if (!post) notFound();

  const [descriptionHtml, bodyHtml] = await Promise.all([
    post.description ? markdownToHtml(post.description) : Promise.resolve(""),
    markdownToHtml(post.content),
  ]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <Link href="/blog/" className="text-sm text-teal hover:underline">
        ← Blog
      </Link>

      <header className="mt-6 mb-10">
        <p className="text-sm text-muted">{formatPostDate(post.date)}</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl">
          {post.title}
        </h1>
        {descriptionHtml && (
          <div
            className="prose prose-lyngs mt-4 max-w-none text-lg leading-relaxed text-muted prose-p:my-0 prose-a:text-teal"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        )}
        {post.categories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
      </header>

      {post.teaser && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.teaser} alt="" className="mb-10 w-full rounded-2xl" />
      )}

      <div
        className="prose prose-lyngs max-w-none prose-headings:font-serif prose-a:text-teal prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      <div className="mt-14 border-t border-border pt-6 text-sm text-muted">
        <Link href="/blog/" className="text-teal hover:underline">
          ← Back to all posts
        </Link>
        <span className="sr-only">{postPath(post)}</span>
      </div>
    </article>
  );
}

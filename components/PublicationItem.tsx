"use client";

import { useState } from "react";
import type { Publication } from "@/lib/publications";

function highlightAuthor(authors: string) {
  return authors.replace(
    /Ulrik Lyngs/g,
    "<strong class='font-semibold text-navy'>Ulrik Lyngs</strong>",
  );
}

export default function PublicationItem({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const awardIsHonourable = pub.award?.toLowerCase().includes("honourable");

  return (
    <article
      id={pub.anchor}
      className="scroll-mt-24 border-b border-border py-6 last:border-b-0"
    >
      <div className="grid gap-4 md:grid-cols-[7rem_1fr_minmax(0,14rem)]">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          {pub.type}
        </p>

        <div className="min-w-0">
          <h3 className="font-serif text-lg leading-snug text-navy">
            {pub.url ? (
              <a
                href={pub.url}
                className="hover:text-teal"
                target="_blank"
                rel="noreferrer"
              >
                {pub.title}
              </a>
            ) : (
              pub.title
            )}
          </h3>
          <p
            className="mt-1 text-sm text-muted"
            dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
          />
          <p className="mt-1 text-sm text-foreground/80">
            {pub.venueAbbrev && (
              <span className="font-medium text-navy">{pub.venueAbbrev}: </span>
            )}
            {pub.venue}
          </p>

          {pub.award && (
            <p className="mt-2 flex items-center gap-2 text-sm text-coral">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {awardIsHonourable ? (
                <img
                  src="/images/ribbon_xs.png"
                  alt=""
                  className="h-4 w-auto"
                />
              ) : (
                <span aria-hidden>★</span>
              )}
              <span>{pub.award}</span>
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
            {pub.pdf && (
              <a href={pub.pdf} className="text-teal hover:underline">
                pdf
              </a>
            )}
            {pub.ebook && (
              <a href={pub.ebook} className="text-teal hover:underline">
                e-book
              </a>
            )}
            {pub.materials && (
              <a
                href={pub.materials}
                className="text-teal hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                materials
              </a>
            )}
            {pub.blog && (
              <a href={pub.blog} className="text-teal hover:underline">
                blog
              </a>
            )}
            {pub.fullTalk && (
              <a
                href={pub.fullTalk}
                className="text-teal hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                full talk
              </a>
            )}
            {pub.bibtex && (
              <a href={pub.bibtex} className="text-teal hover:underline">
                bibtex
              </a>
            )}
            {pub.abstract && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="text-teal hover:underline"
              >
                {open ? "hide abstract" : "abstract"}
              </button>
            )}
          </div>

          {open && pub.abstract && (
            <p className="mt-3 rounded-xl bg-warmGrey px-4 py-3 text-sm leading-relaxed text-muted">
              {pub.abstract}
            </p>
          )}
        </div>

        {pub.teaserVideoEmbed && (
          <div className="overflow-hidden rounded-xl bg-navy/5">
            <div className="aspect-video">
              <iframe
                src={pub.teaserVideoEmbed}
                title={pub.title}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

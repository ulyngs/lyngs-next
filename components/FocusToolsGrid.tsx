"use client";

import Image from "next/image";
import { useState } from "react";

type FocusTool = {
  id: string;
  title: string;
  description: string;
  href?: string;
  githubHref?: string;
  logoSrc: string;
  logoScale?: string;
  videoSrc?: string;
  stillSrc?: string;
  stillInsetSrc?: string;
};

const tools: FocusTool[] = [
  {
    id: "focus",
    title: "Focus",
    description:
      "Our browser extension and app to eliminate addictive features with one click (feeds, Shorts, Reels, …).",
    href: "https://digitalhabits.org/tools/focus",
    githubHref: "https://github.com/ulyngs/digital-habits-focus",
    logoSrc: "/images/tool-logos/logo-reddfocus.svg",
    videoSrc: "/videos/reddfocus.mp4",
  },
  {
    id: "block",
    title: "Blocker",
    description:
      "Our intuitive tool for blocking distracting apps and websites on your computer or phone when you need to focus.",
    href: "https://digitalhabits.org/tools/blocker",
    githubHref: "https://github.com/ulyngs/digital-habits-blocker",
    logoSrc: "/images/tool-logos/logo-reddblocker-shield.svg",
    videoSrc: "/videos/reddblocker.mp4",
  },
  {
    id: "todo",
    title: "To-Do",
    description:
      "Our simple to-do app that keeps your current task visible while you work. Especially helpful for those of us with ADHD.",
    href: "https://digitalhabits.org/tools/to-do",
    githubHref: "https://github.com/ulyngs/digital-habits-to-do",
    logoSrc: "/images/tool-logos/logo-enkelt-no-bg.svg",
    logoScale: "scale-105",
    videoSrc: "/videos/redd-todo.mp4",
  },
  {
    id: "2fa",
    title: "Phone-Free 2FA",
    description:
      "Our simple and secure browser extension that lets you use your computer for 2FA. Keep your phone out of sight, out of mind.",
    href: "https://digitalhabits.org/tools/phone-free-2fa",
    githubHref: "https://github.com/ulyngs/phone-free-2fa",
    logoSrc: "/images/tool-logos/logo-phonefree2fa-no-bg.svg",
    logoScale: "scale-90",
    videoSrc: "/videos/phone-free-2fa.mp4",
  },
  {
    id: "mail",
    title: "Mail",
    description:
      "For everyone who's quietly given up on email. Our minimalistic client that shows email threads as chats and lets you focus on one thing at a time.",
    githubHref: "https://github.com/ulyngs/digital-habits-mail",
    logoSrc: "/images/tool-logos/logo-dh-mail-no-bg.svg",
    stillSrc: "/images/tool-screenshots/mail-inbox.png",
    stillInsetSrc: "/images/tool-screenshots/mail-popout.png",
  },
];

function DemoVideo({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const posterSrc = src.replace(/\.mp4$/, "-poster.jpg");

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      <div className="aspect-video">
        {playing ? (
          <video
            className="h-full w-full object-contain"
            src={src}
            poster={posterSrc}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full overflow-hidden p-0 leading-none"
            aria-label={`Play demo: ${title}`}
          >
            <Image
              className="pointer-events-none h-full w-full object-contain"
              src={posterSrc}
              alt=""
              width={1920}
              height={1080}
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 60vw, 100vw"
            />
            <span className="absolute inset-0 bg-navy/10 transition group-hover:bg-navy/20" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/70 text-white shadow-sm transition group-hover:scale-105 group-hover:bg-teal">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-5 w-5 fill-current"
                  aria-hidden
                >
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

function StillPreview({
  src,
  insetSrc,
  title,
}: {
  src: string;
  insetSrc?: string;
  title: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 60vw, 100vw"
          className="object-cover object-top"
        />
        {insetSrc && (
          <Image
            src={insetSrc}
            alt=""
            width={433}
            height={700}
            className="absolute right-3 bottom-3 h-auto w-[22%] rounded-xl border border-border shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)]"
          />
        )}
      </div>
    </div>
  );
}

export default function FocusToolsGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 items-start gap-4">
      {tools.map((tool) => (
        <div
          key={tool.id}
          className="grid items-start gap-5 overflow-hidden rounded-xl border border-border bg-white p-5 transition hover:border-teal/40 hover:shadow-sm md:grid-cols-[1fr_3fr]"
        >
          <div className="min-w-0">
            <div className="mb-1 flex min-w-0 items-center gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[22%] bg-creamDark p-1.5 shadow-sm ring-1 ring-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logoSrc}
                  alt=""
                  className={`h-full w-full object-contain ${tool.logoScale ?? ""}`}
                />
              </div>
              <h3 className="min-w-0 flex-1 font-serif text-xl font-medium leading-snug text-navy">
                {tool.title}
              </h3>
            </div>
            {(tool.href || tool.githubHref) && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                {tool.href && (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal hover:underline"
                  >
                    Open
                  </a>
                )}
                {tool.githubHref && (
                  <a
                    href={tool.githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tool.description}
            </p>
          </div>

          {tool.videoSrc ? (
            <DemoVideo src={tool.videoSrc} title={tool.title} />
          ) : tool.stillSrc ? (
            <StillPreview
              src={tool.stillSrc}
              insetSrc={tool.stillInsetSrc}
              title={tool.title}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

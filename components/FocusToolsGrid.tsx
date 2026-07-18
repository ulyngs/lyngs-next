"use client";

import { useState } from "react";

type FocusTool = {
  id: string;
  title: string;
  description: string;
  href: string;
  githubHref: string;
  logoSrc: string;
  videoSrc: string;
};

const tools: FocusTool[] = [
  {
    id: "focus",
    title: "ReDD Focus",
    description:
      "Our browser extension and app to eliminate addictive features with one click (feeds, Shorts, Reels, …).",
    href: "https://digitalhabits.org/tools/reddfocus",
    githubHref: "https://github.com/ulyngs/reddfocus-open-source",
    logoSrc: "/images/tool-logos/logo-reddfocus.svg",
    videoSrc: "/videos/reddfocus.mp4",
  },
  {
    id: "block",
    title: "ReDD Blocker",
    description:
      "Our intuitive tool for blocking distracting apps and websites on your computer or phone when you need to focus.",
    href: "https://digitalhabits.org/tools/reddblocker",
    githubHref: "https://github.com/ulyngs/redd-block",
    logoSrc: "/images/tool-logos/logo-reddblocker-shield.svg",
    videoSrc: "/videos/reddblocker.mp4",
  },
  {
    id: "todo",
    title: "ReDD To-Do",
    description:
      "Our simple to-do app that keeps your current task visible while you work. Especially helpful for those of us with ADHD.",
    href: "https://digitalhabits.org/tools/redd-todo",
    githubHref: "https://github.com/ulyngs/redd-todo",
    logoSrc: "/images/tool-logos/logo-enkelt.svg",
    videoSrc: "/videos/redd-todo.mp4",
  },
  {
    id: "2fa",
    title: "Phone-Free 2FA",
    description:
      "Our simple and secure browser extension that lets you use your computer for 2FA. Keep your phone out of sight, out of mind.",
    href: "https://digitalhabits.org/tools/phone-free-2fa",
    githubHref: "https://github.com/ulyngs/redd-phone-free-2fa",
    logoSrc: "/images/tool-logos/logo-phonefree2fa.svg",
    videoSrc: "/videos/phone-free-2fa.mp4",
  },
];

function DemoVideo({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const posterSrc = src.replace(/\.mp4$/, "-poster.jpg");

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-warmGrey">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pointer-events-none h-full w-full object-contain"
              src={posterSrc}
              alt=""
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.logoSrc}
                alt=""
                className="h-10 w-10 shrink-0 object-contain"
              />
              <h3 className="min-w-0 flex-1 truncate font-serif text-xl font-medium text-navy">
                {tool.title}
              </h3>
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="text-teal hover:underline"
              >
                Open
              </a>
              <a
                href={tool.githubHref}
                target="_blank"
                rel="noreferrer"
                className="text-teal hover:underline"
              >
                GitHub
              </a>
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {tool.description}
            </p>
          </div>

          <DemoVideo src={tool.videoSrc} title={tool.title} />
        </div>
      ))}
    </div>
  );
}

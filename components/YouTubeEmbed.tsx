"use client";

import { useState } from "react";

function videoIdFromEmbed(embed: string): string | null {
  try {
    const url = new URL(embed);
    const parts = url.pathname.split("/").filter(Boolean);
    const embedIndex = parts.indexOf("embed");
    if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];
    return url.searchParams.get("v");
  } catch {
    return null;
  }
}

export default function YouTubeEmbed({
  embed,
  title,
}: {
  embed: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoId = videoIdFromEmbed(embed);

  if (!videoId) {
    return (
      <div className="aspect-video bg-navy/5">
        <iframe
          src={embed}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-video bg-navy/5">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden bg-navy/5 text-left"
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        className="h-full w-full object-cover transition group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-navy/15 transition group-hover:bg-navy/25" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/70 text-white shadow-sm transition group-hover:bg-teal group-hover:scale-105">
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
  );
}

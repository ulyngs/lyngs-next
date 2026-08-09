"use client";

import { useEffect, useRef, useState } from "react";
import { CvEntryList } from "@/components/CvSection";
import type { CvEntry } from "@/lib/cv";

export default function DisseminationTabs({
  talks,
  posters,
  media,
}: {
  talks: CvEntry[];
  posters: CvEntry[];
  media: CvEntry[];
}) {
  const [tab, setTab] = useState<"talks" | "posters" | "media">("talks");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(false);

  const tabs = [
    { id: "talks" as const, label: `Research talks (${talks.length})` },
    { id: "posters" as const, label: `Posters (${posters.length})` },
    { id: "media" as const, label: `Media (${media.length})` },
  ];

  const current =
    tab === "talks" ? talks : tab === "posters" ? posters : media;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
      setCanScrollMore(remaining > 8);
    };

    update();
    el.scrollTop = 0;
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [tab, current.length]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-xl px-4 py-2 text-sm transition-colors ${
              tab === t.id
                ? "bg-navy text-white"
                : "bg-warmGrey text-muted hover:bg-hoverWash hover:text-navy"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="dissemination-scroll max-h-[32rem] overflow-y-auto"
        >
          <CvEntryList entries={current} yearKey="yearBegin" />
        </div>
        {canScrollMore && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-gradient-to-t from-cream via-cream/90 to-transparent pb-2"
            aria-hidden
          >
            <span className="text-xs text-muted">Scroll for more</span>
          </div>
        )}
      </div>
    </div>
  );
}

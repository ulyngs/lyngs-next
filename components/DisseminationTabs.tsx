"use client";

import { useState } from "react";
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

  const tabs = [
    { id: "talks" as const, label: `Talks (${talks.length})` },
    { id: "posters" as const, label: `Posters (${posters.length})` },
    { id: "media" as const, label: `Media (${media.length})` },
  ];

  const current =
    tab === "talks" ? talks : tab === "posters" ? posters : media;

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2 border-b border-border pb-3">
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
      <CvEntryList entries={current} yearKey="yearBegin" />
    </div>
  );
}

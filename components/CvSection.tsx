"use client";

import { InlineMarkdown } from "@/lib/inline-markdown";
import type { CvEntry } from "@/lib/cv";
import type { ReactNode } from "react";

function YearCell({
  label,
  hideRepeat,
}: {
  label: string | null;
  hideRepeat?: boolean;
}) {
  if (!label) return <span />;
  return (
    <span
      className={`whitespace-nowrap text-sm tabular-nums text-muted ${
        hideRepeat ? "text-transparent select-none" : ""
      }`}
    >
      {label}
    </span>
  );
}

function Md({ text }: { text: string }) {
  return <InlineMarkdown text={text} />;
}

export function CvEntryList({
  entries,
  yearKey = "yearLabel",
}: {
  entries: CvEntry[];
  yearKey?: "yearLabel" | "yearBegin";
}) {
  let prevYear: string | null = null;

  return (
    <ul className="divide-y divide-border">
      {entries.map((entry, i) => {
        const year =
          yearKey === "yearBegin" ? entry.yearBegin : entry.yearLabel;
        const hideRepeat = Boolean(year && year === prevYear);
        prevYear = year;

        return (
          <li
            key={`${entry.type}-${entry.what}-${entry.date}-${i}`}
            className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 md:grid-cols-[8rem_1fr]"
          >
            <YearCell label={year} hideRepeat={hideRepeat} />
            <div className="min-w-0 text-sm leading-relaxed">
              <EntryBody entry={entry} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function EntryBody({ entry }: { entry: CvEntry }) {
  const title = entry.what ?? "";

  if (entry.type.includes("talk") || entry.type === "poster") {
    return (
      <div>
        {(entry.institution || entry.where) && (
          <p className="font-medium text-navy">
            {[entry.institution, entry.where].filter(Boolean).join(", ")}
            {entry.department ? `, ${entry.department}` : ""}
            {entry.additionalInfo ? `, ${entry.additionalInfo}` : ""}
          </p>
        )}
        <p className="mt-0.5 text-foreground">
          <Md text={title} />
          {entry.whatTranslation && (
            <span className="text-muted"> ({entry.whatTranslation})</span>
          )}
        </p>
        <div className="mt-1 flex gap-3 text-teal">
          {entry.slides && (
            <a href={entry.slides} className="hover:underline">
              Slides
            </a>
          )}
          {entry.video && (
            <a href={entry.video} className="hover:underline">
              Video
            </a>
          )}
        </div>
      </div>
    );
  }

  if (entry.type === "media") {
    return (
      <p>
        <span className="font-medium text-navy">{entry.where}</span>
        {entry.what ? (
          <>
            , <Md text={entry.what} />
          </>
        ) : null}
      </p>
    );
  }

  if (
    entry.type === "teaching" ||
    entry.type === "service" ||
    entry.type === "work" ||
    entry.type === "volunteering"
  ) {
    return (
      <div>
        <p className="font-medium text-navy">
          <Md text={title} />
        </p>
        {entry.where && (
          <p className="mt-0.5 text-muted">
            {entry.url ? (
              <a href={entry.url} className="text-teal hover:underline">
                <Md text={entry.where} />
              </a>
            ) : (
              <Md text={entry.where} />
            )}
          </p>
        )}
        {entry.additionalInfo && (
          <p className="mt-0.5 text-muted">
            <Md text={entry.additionalInfo} />
          </p>
        )}
      </div>
    );
  }

  if (entry.type === "research_positions") {
    return (
      <div>
        <p>
          <span className="font-medium text-navy">{title}</span>
          {entry.institution ? `, ${entry.institution}` : ""}
        </p>
        {entry.where && (
          <p className="mt-0.5 text-muted">
            <Md text={entry.where} />
          </p>
        )}
      </div>
    );
  }

  if (entry.type === "education") {
    return (
      <div>
        <p>
          <span className="font-medium text-navy">{title}</span>
          {entry.where ? (
            <>
              , <Md text={entry.where} />
            </>
          ) : null}
        </p>
        {entry.additionalInfo && (
          <p className="mt-0.5 text-muted">
            <Md text={entry.additionalInfo} />
          </p>
        )}
        {entry.additionalInfo2 && (
          <p className="mt-0.5 text-muted">
            <Md text={entry.additionalInfo2} />
          </p>
        )}
      </div>
    );
  }

  if (entry.type === "technical") {
    return (
      <p>
        <span className="font-medium text-navy">{title}</span>{" "}
        {entry.additionalInfo && <Md text={entry.additionalInfo} />}
      </p>
    );
  }

  // awards, grants, software, prof-dev, default
  return (
    <div>
      <p>
        <span className="font-medium text-navy">
          <Md text={title} />
        </span>
        {entry.where && (
          <>
            , <Md text={entry.where} />
          </>
        )}
      </p>
      {entry.additionalInfo && (
        <p className="mt-0.5 text-muted">
          <Md text={entry.additionalInfo} />
        </p>
      )}
    </div>
  );
}

export function CvHeading({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 scroll-mt-24 font-serif text-2xl font-semibold text-navy first:mt-0"
    >
      {children}
    </h2>
  );
}

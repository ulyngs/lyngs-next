import { cleanValue, isNA, makeCleanName, readCsv } from "./csv";

export type Publication = {
  type: string;
  authors: string;
  date: string;
  year: number;
  title: string;
  venue: string | null;
  abstract: string | null;
  tldr: string | null;
  venueAbbrev: string | null;
  shortTitle: string | null;
  award: string | null;
  url: string | null;
  pdf: string | null;
  materials: string | null;
  ebook: string | null;
  blog: string | null;
  fullTalk: string | null;
  fullTalkEmbed: string | null;
  teaserVideoEmbed: string | null;
  bibtex: string | null;
  image: string | null;
  project: string | null;
  anchor: string;
  weight: number;
};

const TYPE_WEIGHT: Record<string, number> = {
  "conference paper": 1,
  "journal article": 2,
  "extended abstract": 3,
  "book chapter": 4,
  thesis: 5,
  "workshop paper": 6,
  "colloquium paper": 7,
  "research report": 8,
  "magazine article": 9,
};

type RawPub = Record<string, string>;

function parsePublication(row: RawPub): Publication | null {
  if (!isNA(row.exclude) && row.exclude.toLowerCase() === "yes") return null;

  const title = cleanValue(row.title);
  if (!title) return null;

  const shortTitle = cleanValue(row.short_title);
  const date = cleanValue(row.date) ?? "1970-01-01";
  const year = Number(date.slice(0, 4));

  return {
    type: cleanValue(row.type) ?? "other",
    authors: cleanValue(row.authors) ?? "",
    date,
    year,
    title,
    venue: cleanValue(row.venue),
    abstract: cleanValue(row.abstract),
    tldr: cleanValue(row.tldr),
    venueAbbrev: cleanValue(row.venue_abbrev),
    shortTitle,
    award: cleanValue(row.award),
    url: cleanValue(row.url),
    pdf: cleanValue(row.pdf),
    materials: cleanValue(row.materials),
    ebook: cleanValue(row.ebook),
    blog: cleanValue(row.blog),
    fullTalk: cleanValue(row.full_talk),
    fullTalkEmbed: cleanValue(row.full_talk_embed),
    teaserVideoEmbed:
      cleanValue(row.teaser_video_embed) ?? cleanValue(row.full_talk_embed),
    bibtex: cleanValue(row.bibtex),
    image: cleanValue(row.image),
    project: cleanValue(row.project),
    anchor: makeCleanName(shortTitle ?? title),
    weight: TYPE_WEIGHT[cleanValue(row.type) ?? ""] ?? 99,
  };
}

export function getPublications(): Publication[] {
  return readCsv<RawPub>("publications.csv")
    .map(parsePublication)
    .filter((p): p is Publication => p !== null)
    .sort((a, b) => {
      if (Boolean(b.award) !== Boolean(a.award)) return a.award ? -1 : 1;
      if (a.weight !== b.weight) return a.weight - b.weight;
      return b.date.localeCompare(a.date);
    });
}

export function getPublicationsByYear(): { year: number; items: Publication[] }[] {
  const pubs = getPublications();
  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: pubs
      .filter((p) => p.year === year)
      .sort((a, b) => {
        if (Boolean(b.award) !== Boolean(a.award)) return a.award ? -1 : 1;
        if (a.weight !== b.weight) return a.weight - b.weight;
        return b.date.localeCompare(a.date);
      }),
  }));
}

export function getPublicationsForProject(projectId: string): Publication[] {
  return getPublications()
    .filter((p) => p.project?.includes(projectId))
    .sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return a.weight - b.weight;
    });
}

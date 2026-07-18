import { cleanValue, isNA, readCsv } from "./csv";

export type CvEntry = {
  type: string;
  date: string | null;
  dateEnd: string | null;
  yearBegin: string | null;
  yearEnd: string | null;
  yearLabel: string | null;
  what: string | null;
  whatTranslation: string | null;
  institution: string | null;
  department: string | null;
  where: string | null;
  additionalInfo: string | null;
  additionalInfo2: string | null;
  url: string | null;
  slides: string | null;
  video: string | null;
  website: string | null;
};

type RawCv = Record<string, string>;

function parseEntry(row: RawCv): CvEntry | null {
  if (!isNA(row.exclude) && row.exclude.toLowerCase() === "yes") return null;

  const date = cleanValue(row.date);
  const dateEnd = cleanValue(row.date_end);
  const yearBegin = date ? date.slice(0, 4) : null;
  const yearEnd =
    dateEnd === "present"
      ? "present"
      : dateEnd
        ? dateEnd.slice(0, 4)
        : null;
  const yearLabel =
    !yearBegin
      ? null
      : !yearEnd || yearBegin === yearEnd
        ? yearBegin
        : `${yearBegin} — ${yearEnd}`;

  return {
    type: cleanValue(row.type) ?? "",
    date,
    dateEnd,
    yearBegin,
    yearEnd,
    yearLabel,
    what: cleanValue(row.what),
    whatTranslation: cleanValue(row.what_translation),
    institution: cleanValue(row.institution),
    department: cleanValue(row.department),
    where: cleanValue(row.where),
    additionalInfo: cleanValue(row.additional_info),
    additionalInfo2: cleanValue(row.additional_info2),
    url: cleanValue(row.url),
    slides: cleanValue(row.slides),
    video: cleanValue(row.video),
    website: cleanValue(row.website),
  };
}

export function getCvEntries(): CvEntry[] {
  return readCsv<RawCv>("cv_entries.csv")
    .map(parseEntry)
    .filter((e): e is CvEntry => e !== null);
}

export function getCvByType(type: string | RegExp): CvEntry[] {
  const entries = getCvEntries();
  return entries
    .filter((e) =>
      typeof type === "string" ? e.type === type : type.test(e.type),
    )
    .filter((e) => e.website !== "n")
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

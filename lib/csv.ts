import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
import path from "path";

export function isNA(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value !== "string") return false;
  const v = value.trim();
  return v === "" || v === "NA" || v === "na" || v === "N/A";
}

export function cleanValue(value: string | undefined | null): string | null {
  if (isNA(value)) return null;
  return value!.trim();
}

export function readCsv<T extends Record<string, string>>(filename: string): T[] {
  const filePath = path.join(process.cwd(), "data", filename);
  const raw = readFileSync(filePath, "utf8");
  return parse(raw, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
    trim: true,
  }) as T[];
}

/** Hugo/janitor-style clean names for publication anchors */
export function makeCleanName(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");
}

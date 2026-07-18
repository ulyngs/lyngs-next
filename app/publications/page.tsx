import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PublicationItem from "@/components/PublicationItem";
import { getPublicationsByYear } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Academic publications by Ulrik Lyngs.",
};

export default function PublicationsPage() {
  const byYear = getPublicationsByYear();

  return (
    <div className="mx-auto max-w-5xl px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
      <PageHeader
        eyebrow="Research"
        title="Publications"
        description="Papers, extended abstracts, chapters, and other writing."
      />

      <div className="space-y-14">
        {byYear.map(({ year, items }) => (
          <section key={year}>
            <h2 className="mb-2 font-serif text-2xl font-semibold text-navy">
              {year}
            </h2>
            <div className="rounded-2xl border border-border bg-white px-4 md:px-6">
              {items.map((pub) => (
                <PublicationItem key={pub.anchor + pub.date} pub={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

type ResearchTool = {
  id: string;
  title: string;
  description: string;
  href: string;
  githubHref?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc: string;
};

const tools: ResearchTool[] = [
  {
    id: "oxforddown",
    title: "oxforddown",
    description:
      "I wrote my PhD thesis as a reproducible R Markdown document with a traditional Oxford LaTeX template, then open-sourced the materials. Hundreds of students have used it since.",
    href: "https://github.com/ulyngs/oxforddown",
    githubHref: "https://github.com/ulyngs/oxforddown",
    secondaryHref:
      "https://www.youtube.com/playlist?list=PLkIUogDmN_nA6f3UJ0tWHlxGITUjbuldE",
    secondaryLabel: "Tutorials",
    imageSrc: "/images/oxforddown_compiled_pdf_small.jpg",
  },
  {
    id: "pagedownCV",
    title: "pagedownCV",
    description:
      "Keeping an academic CV updated is tedious. These R Markdown templates generate CVs in different formats from entries kept in a spreadsheet.",
    href: "https://github.com/ulyngs/pagedownCV",
    githubHref: "https://github.com/ulyngs/pagedownCV",
    imageSrc: "/images/cv-formats.jpg",
  },
  {
    id: "chi-templates",
    title: "ACM CHI R Markdown templates",
    description:
      "Templates for writing reproducible ACM CHI papers and extended abstracts in R Markdown.",
    href: "/post/2018/10/29/r-packages-for-chi-papers-with-r-markdown/",
    githubHref: "https://github.com/ulyngs/chi-2021-rmd-template",
    secondaryHref:
      "/post/2018/10/29/r-packages-for-chi-papers-with-r-markdown/",
    secondaryLabel: "Blog post",
    imageSrc: "/post/2018-10-29-r-packages-for-chi-papers-with-r-markdown/compiled.jpg",
  },
];

export default function ResearchToolsGrid() {
  return (
    <div className="mt-4 grid grid-cols-1 items-start gap-4 sm:grid-cols-3">
      {tools.map((tool) => (
        <div
          key={tool.id}
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white px-5 pt-5 pb-4 transition hover:border-teal/40 hover:shadow-sm"
        >
          <h3 className="font-serif text-xl font-medium text-navy">
            {tool.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
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
            {tool.secondaryHref && (
              <a
                href={tool.secondaryHref}
                target="_blank"
                rel="noreferrer"
                className="text-teal hover:underline"
              >
                {tool.secondaryLabel}
              </a>
            )}
            {!tool.githubHref && !tool.secondaryHref && (
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="text-teal hover:underline"
              >
                Open
              </a>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {tool.description}
          </p>

          <a
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block overflow-hidden rounded-lg border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.imageSrc}
              alt=""
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

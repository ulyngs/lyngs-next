import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { CvDomain, CvEntryList, CvHeading } from "@/components/CvSection";
import CvToc, { type TocItem } from "@/components/CvToc";
import DisseminationTabs from "@/components/DisseminationTabs";
import { getCvByType } from "@/lib/cv";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Ulrik Lyngs.",
};

const toc: TocItem[] = [
  { id: "summary", label: "Summary" },
  {
    id: "academia",
    label: "Academia",
    children: [
      { id: "positions", label: "Positions" },
      { id: "education", label: "Education" },
      { id: "awards", label: "Awards" },
      { id: "grants", label: "Grants" },
      { id: "dissemination", label: "Dissemination" },
      { id: "teaching", label: "Teaching" },
      { id: "service", label: "Service" },
    ],
  },
  {
    id: "work",
    label: "Work",
    children: [
      { id: "employments", label: "Employments" },
      { id: "development", label: "Development" },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    children: [
      { id: "skills", label: "Skills" },
      { id: "r-packages", label: "R packages" },
      { id: "apps", label: "Apps" },
    ],
  },
  {
    id: "personal",
    label: "Personal",
    children: [
      { id: "volunteering", label: "Skills & volunteering" },
    ],
  },
];

export default function CvPage() {
  const positions = getCvByType("research_positions");
  const education = getCvByType("education");
  const awards = getCvByType("awards");
  const grants = getCvByType("major_grants");
  const talks = getCvByType(/talk/);
  const posters = getCvByType("poster");
  const media = getCvByType("media");
  const teaching = getCvByType("teaching");
  const service = getCvByType("service");
  const work = getCvByType("work").filter((e) => !e.website);
  const profDev = getCvByType("prof-dev");
  const technical = getCvByType("technical");
  const rPackages = getCvByType("software-rstats");
  const apps = getCvByType("software-browser-extensions");
  const volunteering = getCvByType("volunteering");

  return (
    <div className="mx-auto max-w-5xl px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-16">
      <PageHeader
        title="Curriculum vitae"
        description="Academic positions, education, awards, teaching, and more."
      />

      <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.08em] text-muted uppercase">
            On this page
          </p>
          <CvToc items={toc} />
        </aside>

        <div>
          <CvDomain id="summary">Summary</CvDomain>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/90 md:text-base">
            <p>
              I am passionate about using insights from the behavioural
              neurosciences to{" "}
              <strong>
                design digital technology that is sensitive to human limitations
                and biases
              </strong>
              , particularly in relation to attention and self-regulation.
            </p>
            <p>
              My <strong>academic and professional background</strong> is highly
              interdisciplinary, and I try to integrate best practices from many
              work spheres, such as using tools from large-scale event
              management to structure academic projects.
            </p>
            <p>
              My <strong>personal interests</strong> include backpacking,
              samatha meditation, dancing (Cuban salsa and swing), surfing, and
              playing music (often with my concept band the{" "}
              <a
                href="https://karaokecollective.com"
                className="text-teal underline decoration-teal/30 underline-offset-2"
              >
                Karaoke Collective
              </a>
              ).
            </p>
          </div>
          <a
            href="/pdfs/academic_cv.pdf"
            className="mt-6 inline-flex h-11 items-center rounded-xl bg-teal px-6 text-sm font-medium text-white shadow-sm transition hover:bg-teal/90"
          >
            Download academic CV (PDF)
          </a>

          <CvDomain id="academia">Academia</CvDomain>

          <CvHeading id="positions">Research positions</CvHeading>
          <CvEntryList entries={positions} />

          <CvHeading id="education">Education</CvHeading>
          <CvEntryList entries={education} />

          <CvHeading id="awards">Awards and honours</CvHeading>
          <CvEntryList entries={awards} yearKey="yearBegin" />

          <CvHeading id="grants">Major grants and funding</CvHeading>
          <CvEntryList entries={grants} />

          <CvHeading id="dissemination">Research dissemination</CvHeading>
          <DisseminationTabs
            talks={talks}
            posters={posters}
            media={media}
          />

          <CvHeading id="teaching">Teaching experience</CvHeading>
          <CvEntryList entries={teaching} />

          <CvHeading id="service">Service</CvHeading>
          <CvEntryList entries={service} />

          <CvDomain id="work">Work</CvDomain>

          <CvHeading id="employments">Selected employments</CvHeading>
          <CvEntryList entries={work} />

          <CvHeading id="development">Professional development</CvHeading>
          <CvEntryList entries={profDev} yearKey="yearBegin" />

          <CvDomain id="technical">Technical</CvDomain>

          <CvHeading id="skills">Skills</CvHeading>
          <CvEntryList entries={technical} yearKey="yearBegin" />

          <CvHeading id="r-packages">R packages</CvHeading>
          <CvEntryList entries={rPackages} />

          <CvHeading id="apps">Apps</CvHeading>
          <CvEntryList entries={apps} />

          <CvDomain id="personal">Personal</CvDomain>

          <CvHeading id="volunteering">Skills & volunteering</CvHeading>
          <CvEntryList entries={volunteering} />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import FocusToolsGrid from "@/components/FocusToolsGrid";
import ResearchToolsGrid from "@/components/ResearchToolsGrid";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const jumpCards = [
  {
    title: "Hear me speak",
    body: "Talks and workshops on digital wellbeing and AI for universities, schools, and organisations.",
    href: "#speaking",
  },
  {
    title: "Read the research",
    body: "My research on why we get distracted on our devices, and what actually helps.",
    href: "/publications/",
  },
  {
    title: "Use the tools",
    body: "ReDD Focus, Blocker, To-Do, Phone-Free 2FA, and more open-source tools you can use today.",
    href: "#toolbox",
  },
];

const venues = [
  "BBC",
  "Google",
  "DR",
  "University of Cambridge",
  "University of Oxford",
  "CPDP Brussels",
  "Folkeuniversitetet",
  "Abu Dhabi Mental Health Conference",
];

const featuredTalks = [
  {
    embed: "https://www.youtube.com/embed/QClOST9hIG4?start=502",
    title: "Attention, Freedom, Digital Addiction and Dating Apps",
    venue: "Barnes Philosophy Club, London · 2023",
  },
];

const papers = [
  {
    tag: "CHI'24",
    award: true,
    title:
      "“I finally felt I had the tools to control these urges”: Empowering Students to Achieve Their Device Use Goals With the Reduce Digital Distraction Workshop",
    authors:
      "Ulrik Lyngs, Kai Lukoff, Petr Slovak, Michael Inzlicht, Maureen Freed, Hannah Andrews, Claudine Tinsman, Laura Csuka, Lize Alberts, Victoria Oldemburgo de Mello, Guido Makransky, Kasper Hornbæk, Max Van Kleek, Nigel Shadbolt",
    blurb:
      "Insights from Oxford students who used the workshop to reflect on device-use goals and apply digital focus tools.",
    href: "/publications/#i_finally_felt_i_had_the_tools_to_control_these_urges_empowering_students_to_achieve_their_device_use_goals_with_the_reduce_digital_distraction_workshop",
    embed: "https://youtube.com/embed/ffm6wXsDDa8",
  },
  {
    tag: "CHI'20",
    title:
      "“I Just Want to Hack Myself to Not Get Distracted”: Evaluating Design Interventions for Self-Control on Facebook",
    authors:
      "Ulrik Lyngs, Kai Lukoff, Petr Slovak, William Seymour, Helena Webb, Marina Jirotka, Jun Zhao, Max Van Kleek, Nigel Shadbolt",
    blurb:
      "Tested removing Facebook’s newsfeed versus adding goal reminders: both helped, with large and distinct effects.",
    href: "/publications/#evaluating_design_interventions_for_self_control_on_facebook",
    embed: "https://www.youtube.com/embed/zj9I-2gjths",
  },
  {
    tag: "CHI'19",
    award: true,
    title:
      "Self-Control in Cyberspace: Applying Dual Systems Theory to a Review of Digital Self-Control Tools",
    authors:
      "Ulrik Lyngs, Kai Lukoff, Petr Slovak, Reuben Binns, Adam Slack, Michael Inzlicht, Max Van Kleek, Nigel Shadbolt",
    blurb:
      "Reviewed design features in 367 apps and browser extensions, organised with a dual-systems model of self-control.",
    href: "/publications/#applying_dual_systems_theory_to_digital_self_control_tools",
    embed: "https://www.youtube.com/embed/kf-TwEo954s",
  },
];

const personalProjects = [
  {
    name: "Karaoke Collective Songbook",
    description:
      "The songbook framework I built for my live karaoke band — drunk-person-proof design for gigging musicians...",
    href: "https://songbook.karaokecollective.com",
    imageSrc: "/images/personal/songbook.png",
  },
  {
    name: "Lyngs quiz",
    description:
      "A quiz app that includes all the question formats I personally find most fun. I use it often for tailor-made quizzes with friends.",
    href: "https://quiz.ulriklyngs.com",
    githubHref: "https://github.com/ulyngs/lyngs-quiz",
    imageSrc: "/images/personal/quiz.png",
  },
  {
    name: "Solitaire",
    description:
      "An oldschool solitaire game that runs in the browser. I built it over xmas 2025 for my father after he changed computer and was missing his old game!",
    href: "https://solitaire.ulriklyngs.com",
    githubHref: "https://github.com/ulyngs/solitaire",
    imageSrc: "/images/personal/solitaire.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-5xl px-5 pb-14 pt-6 md:px-8 md:pb-16 md:pt-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/grad_headshot3.jpeg"
              alt="Photo of Ulrik Lyngs"
              className="mx-auto h-36 w-36 rounded-full object-cover ring-1 ring-white/20 md:mx-0 md:h-44 md:w-44"
            />
            <div>
              <h1 className="font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight md:text-[2.35rem]">
                Research, tools, and talks for digital wellbeing
              </h1>
              <div className="mt-5 max-w-2xl space-y-3 text-[15px] leading-relaxed text-white/70 md:text-base">
                <p>
                  I am co-founder of the{" "}
                  <a
                    href="https://digitalhabits.org"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    Centre for Digital Habits
                  </a>
                  , which helps people redesign their digital life to serve
                  their goals &amp; needs.
                </p>
                <p>
                  I am also Research Fellow at{" "}
                  <a
                    href="https://www.linacre.ox.ac.uk"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    Linacre College
                  </a>
                  , and research representative on Denmark&apos;s Media Council
                  for Children and Youth.
                </p>
                <p>
                  When I don&apos;t think about digital distraction, I play
                  various instruments in{" "}
                  <a
                    href="https://karaokecollective.com"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    The Karaoke Collective
                  </a>
                  . Previously, I was a festival producer at{" "}
                  <a
                    href="https://howthelightgetsin.org"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    HowTheLightGetsIn
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {jumpCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-xl border border-white/10 bg-navyCard px-5 py-5 transition hover:border-teal/40 hover:bg-navyMid"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-serif text-lg font-medium text-white">
                    {card.title}
                  </h2>
                  <span className="text-teal transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {card.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered body */}
      <div className="bg-cream">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          {/* 01 Speaking */}
          <section
            id="speaking"
            className="scroll-mt-8 border-b border-border py-14 md:py-16"
          >
            <div className="grid gap-6 md:grid-cols-[7.5rem_1fr_auto] md:gap-10">
              <p className="text-[13px] font-medium tracking-wide text-muted">
                01 — Speaking
              </p>
              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-medium tracking-tight text-navy md:text-[1.75rem]">
                  Talks & workshops on digital wellbeing and AI
                </h2>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-foreground">
                  I help individuals and organisations redesign their
                  relationship with digital devices, and build with AI, through
                  talks and keynotes, workshops, and practical tool demos
                  grounded in HCI research.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {venues.map((v) => (
                    <span
                      key={v}
                      className="rounded-full bg-[#eceae6] px-3 py-1 text-xs text-muted"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-base font-semibold tracking-[0.06em] text-teal uppercase">
                    Example talk
                  </p>
                  <div className="mt-4 grid gap-4">
                    {featuredTalks.map((talk) => (
                      <div
                        key={talk.embed}
                        className="overflow-hidden rounded-xl border border-border bg-white"
                      >
                        <YouTubeEmbed embed={talk.embed} title={talk.title} />
                        <div className="px-4 py-3.5">
                          <p className="font-serif text-[15px] font-medium leading-snug text-navy">
                            {talk.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {talk.venue}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:text-right">
                <p className="font-serif text-3xl font-medium text-teal md:text-4xl">
                  400+
                </p>
                <p className="mt-0.5 text-sm text-muted">workshops and talks</p>
              </div>
            </div>
          </section>

          {/* 02 Research */}
          <section
            id="research"
            className="scroll-mt-8 border-b border-border py-14 md:py-16"
          >
            <div className="grid gap-6 md:grid-cols-[7.5rem_1fr] md:gap-10">
              <p className="text-[13px] font-medium tracking-wide text-muted">
                02 — Research
              </p>
              <div>
                <h2 className="font-serif text-2xl font-medium tracking-tight text-navy md:text-[1.75rem]">
                  Designing to support digital self-control
                </h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground">
                  Hundreds of apps and browser extensions promise to help us
                  control our time and attention on digital devices. I&apos;ve
                  studied this landscape since 2015 to figure out what good
                  design looks like, and to test what actually works.
                </p>
                <p className="mt-8 text-base font-semibold tracking-[0.06em] text-teal uppercase">
                  Selected papers
                </p>
                <ul className="mt-4 space-y-5">
                  {papers.map((paper) => (
                    <li
                      key={paper.title}
                      className="grid gap-4 lg:grid-cols-[1fr_minmax(0,15rem)] lg:gap-5"
                    >
                      <div className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:gap-3">
                        <span className="pt-0.5 text-xs font-semibold tracking-wide text-teal uppercase">
                          {paper.tag}
                        </span>
                        <div>
                          <Link href={paper.href} className="group block">
                            <span className="font-medium text-navy group-hover:text-teal">
                              {paper.title}
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-muted">
                              {paper.authors
                                .split("Ulrik Lyngs")
                                .map((part, i, parts) => (
                                  <span key={i}>
                                    {part}
                                    {i < parts.length - 1 && (
                                      <span className="font-semibold text-navy">
                                        Ulrik Lyngs
                                      </span>
                                    )}
                                  </span>
                                ))}
                            </span>
                            {paper.award && (
                              <span className="mt-1 flex items-center gap-1.5 text-xs text-teal">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src="/images/ribbon_xs.png"
                                  alt=""
                                  className="h-3.5 w-auto"
                                />
                                Best paper honourable mention (top 5%)
                              </span>
                            )}
                            <span className="mt-0.5 block text-sm text-muted">
                              {paper.blurb}
                            </span>
                          </Link>
                        </div>
                      </div>
                      {paper.embed && (
                        <div className="self-start overflow-hidden rounded-xl border border-border">
                          <YouTubeEmbed
                            embed={paper.embed}
                            title={paper.title}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/publications/"
                  className="mt-8 inline-block text-sm font-medium text-teal hover:underline"
                >
                  All publications →
                </Link>
              </div>
            </div>
          </section>

          {/* 03 Toolbox */}
          <section id="toolbox" className="scroll-mt-8 py-14 md:py-16">
            <div className="grid gap-6 md:grid-cols-[7.5rem_1fr] md:gap-10">
              <p className="text-[13px] font-medium tracking-wide text-muted">
                03 — Toolbox
              </p>
              <div>
                <h2 className="font-serif text-2xl font-medium tracking-tight text-navy md:text-[1.75rem]">
                  Things I&apos;ve built
                </h2>
                <p className="mt-5 text-base font-semibold tracking-[0.06em] text-teal uppercase">
                  Digital focus tools
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground">
                  With the{" "}
                  <a
                    href="https://digitalhabits.org"
                    className="text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Centre for Digital Habits
                  </a>{" "}
                  I build practical tools for making it easier to control
                  your time and attention when using digital devices.
                  Give them a try!
                </p>

                <FocusToolsGrid />

                <div className="mt-12">
                  <p className="text-base font-semibold tracking-[0.06em] text-teal uppercase">
                    Personal
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {personalProjects.map((project) => (
                      <div
                        key={project.name}
                        className="flex flex-col overflow-hidden rounded-xl border border-border bg-white px-5 pt-5 pb-4 transition hover:border-teal/40 hover:shadow-sm"
                      >
                        <h3 className="font-serif text-xl font-medium text-navy">
                          {project.name}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-teal hover:underline"
                          >
                            Open
                          </a>
                          {project.githubHref && (
                            <a
                              href={project.githubHref}
                              target="_blank"
                              rel="noreferrer"
                              className="text-teal hover:underline"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                          {project.description}
                        </p>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 block overflow-hidden rounded-lg border border-border"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.imageSrc}
                            alt=""
                            className="aspect-[16/10] w-full object-cover object-top"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-base font-semibold tracking-[0.06em] text-teal uppercase">
                    Transparent & reproducible research
                  </p>
                  <ResearchToolsGrid />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

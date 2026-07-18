import Link from "next/link";
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
    embed: "https://www.youtube.com/embed/QClOST9hIG4",
    title: "Attention, Freedom, Digital Addiction and Dating Apps",
    venue: "Barnes Philosophy Club, London · 2023",
  },
  {
    embed: "https://www.youtube.com/embed/G-EpPpIGsws",
    title: "3 Minute Thesis Competition",
    venue: "University of Oxford · 2021",
  },
];

const papers = [
  {
    tag: "CHI'24",
    title:
      "“I finally felt I had the tools to control these urges”: Empowering Students to Achieve Their Device Use Goals With the Reduce Digital Distraction Workshop",
    authors:
      "Ulrik Lyngs, Kai Lukoff, Petr Slovak, Michael Inzlicht, Maureen Freed, Hannah Andrews, Claudine Tinsman, Laura Csuka, Lize Alberts, Victoria Oldemburgo de Mello, Guido Makransky, Kasper Hornbæk, Max Van Kleek, Nigel Shadbolt",
    blurb:
      "Insights from Oxford students who used the workshop to reflect on device-use goals and apply digital focus tools.",
    href: "/publications/#i_finally_felt_i_had_the_tools_to_control_these_urges_empowering_students_to_achieve_their_device_use_goals_with_the_reduce_digital_distraction_workshop",
  },
  {
    tag: "CHI'23",
    award: true,
    title:
      "SwitchTube: A Proof-of-Concept System Introducing ‘Adaptable Commitment Interfaces’ as a Tool for Digital Wellbeing",
    authors:
      "Kai Lukoff, Ulrik Lyngs, Himanshu Zade, Vera Liao, James Choi, Kaiyue Fan, Sean Munson, Alexis Hiniker",
    blurb:
      "Showed the value of letting people switch between a search-first and a recommendations-first YouTube interface.",
    href: "/publications/#switch_tube_a_proof_of_concept_system_introducing_adaptable_commitment_interfaces_as_a_tool_for_digital_wellbeing",
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
  },
];

const focusTools = [
  {
    title: "ReDD Focus",
    description:
      "Our browser extension and app to eliminate addictive features with one click (feeds, Shorts, Reels, …).",
    href: "https://digitalhabits.org/tools/reddfocus",
    logoSrc: "/images/tool-logos/logo-reddfocus.svg",
  },
  {
    title: "ReDD Blocker",
    description:
      "Our intuitive tool for blocking distracting apps and websites on your computer or phone when you need to focus.",
    href: "https://digitalhabits.org/tools/reddblocker",
    logoSrc: "/images/tool-logos/logo-reddblocker-shield.svg",
  },
  {
    title: "ReDD To-Do",
    description:
      "Our simple to-do app that keeps your current task visible while you work. Especially helpful for those of us with ADHD.",
    href: "https://digitalhabits.org/tools/redd-todo",
    logoSrc: "/images/tool-logos/logo-enkelt.svg",
  },
  {
    title: "Phone-Free 2FA",
    description:
      "Our simple and secure browser extension that lets you use your computer for 2FA. Keep your phone out of sight, out of mind.",
    href: "https://digitalhabits.org/tools/phone-free-2fa",
    logoSrc: "/images/tool-logos/logo-phonefree2fa.svg",
  },
];

const otherBuilds = [
  {
    label: "Transparent & Reproducible Research",
    items: [
      { name: "oxforddown", href: "https://github.com/ulyngs/oxforddown" },
      { name: "pagedownCV", href: "https://github.com/ulyngs/pagedownCV" },
      {
        name: "R Markdown ACM CHI templates",
        href: "/post/2018/10/29/r-packages-for-chi-papers-with-r-markdown/",
      },
    ],
  },
  {
    label: "Personal",
    items: [
      { name: "Karaoke Collective", href: "https://karaokecollective.com" },
      { name: "HowTheLightGetsIn", href: "https://howthelightgetsin.org" },
    ],
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
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
                <span>
                  Co-founder of the{" "}
                  <a
                    href="https://digitalhabits.org"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    Centre for Digital Habits
                  </a>{" "}
                  · Research Fellow at{" "}
                  <a
                    href="https://www.linacre.ox.ac.uk"
                    className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                  >
                    Linacre College, Oxford
                  </a>
                </span>
                <span className="block">
                  Research representative, Denmark&apos;s Media Council for
                  Children and Youth
                </span>
              </p>
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
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
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
              </div>
              <div className="md:text-right">
                <p className="font-serif text-3xl font-medium text-teal md:text-4xl">
                  400+
                </p>
                <p className="mt-0.5 text-sm text-muted">workshops and talks</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-[7.5rem_1fr] md:gap-10">
              <div aria-hidden className="hidden md:block" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase">
                  Example talks
                </p>
                <div className="mt-4 grid max-w-2xl gap-4 sm:grid-cols-2">
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
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                  Hundreds of apps and browser extensions promise to help us
                  control our time and attention on digital devices. I&apos;ve
                  studied this landscape since 2015 to figure out what good
                  design looks like, and to test what actually works.
                </p>
                <ul className="mt-8 space-y-5">
                  {papers.map((paper) => (
                    <li key={paper.title}>
                      <Link
                        href={paper.href}
                        className="group grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:gap-4"
                      >
                        <span className="pt-0.5 text-xs font-semibold tracking-wide text-teal uppercase">
                          {paper.tag}
                        </span>
                        <span>
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
                            <span className="mt-1 flex items-center gap-1.5 text-xs text-coral">
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
                        </span>
                      </Link>
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
                <p className="mt-5 text-[11px] font-semibold tracking-[0.08em] text-teal uppercase">
                  Digital focus tools
                </p>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                  With the{" "}
                  <a
                    href="https://digitalhabits.org"
                    className="text-teal underline decoration-teal/30 underline-offset-2 hover:decoration-teal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Centre for Digital Habits
                  </a>{" "}
                  I&apos;m creating practical tools for making it easier to
                  control your time and attention when using digital devices.
                  Give them a try!
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {focusTools.map((tool) => (
                    <a
                      key={tool.title}
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col rounded-xl border border-border bg-white px-5 py-5 transition hover:border-teal/40 hover:shadow-sm"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.logoSrc}
                          alt=""
                          className="h-10 w-10 object-contain"
                        />
                        <h3 className="font-serif text-xl font-medium text-navy group-hover:text-teal">
                          {tool.title}
                        </h3>
                        <span className="ml-auto text-teal opacity-0 transition group-hover:opacity-100">
                          →
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted">
                        {tool.description}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  {otherBuilds.map((col) => (
                    <div key={col.label}>
                      <p className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase">
                        {col.label}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {col.items.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noreferrer"
                                  : undefined
                              }
                              className="text-[15px] text-navy hover:text-teal"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

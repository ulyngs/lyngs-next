export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-cream">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1 px-5 py-8 font-[family-name:var(--font-geist-sans)] text-sm text-muted md:px-8">
        <span>© Ulrik Lyngs {year}</span>
        <span aria-hidden>·</span>
        <a
          href="mailto:ulrik@digitalhabits.org"
          className="hover:text-navy"
        >
          Email
        </a>
        <span aria-hidden>·</span>
        <a
          href="https://github.com/ulyngs"
          target="_blank"
          rel="noreferrer"
          className="hover:text-navy"
        >
          GitHub
        </a>
        <span aria-hidden>·</span>
        <a
          href="https://scholar.google.co.uk/citations?user=e8XDAzcAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="hover:text-navy"
        >
          Scholar
        </a>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { id: "speaking", label: "Speaking" },
  { id: "research", label: "Research" },
  { id: "toolbox", label: "Digital tools" },
];

const TOP_OFFSET = 32;

export default function HomeSectionNav() {
  const anchorRef = useRef<HTMLParagraphElement>(null);
  const [stuck, setStuck] = useState(false);
  const [left, setLeft] = useState(0);
  const [activeId, setActiveId] = useState(items[0].id);

  useEffect(() => {
    const update = () => {
      const rect = anchorRef.current?.getBoundingClientRect();
      if (!rect) return;
      setLeft(rect.left);
      setStuck(rect.top < TOP_OFFSET);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]?.target.id) setActiveId(inView[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] },
    );
    for (const el of sections) observer.observe(el);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <p
        ref={anchorRef}
        className="text-[13px] font-medium tracking-wide text-muted"
      >
        {items[0].label}
      </p>

      <nav
        aria-label="On this page"
        style={{ left }}
        className={`fixed top-8 z-40 hidden transition-opacity duration-300 md:block ${
          stuck ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-[13px] font-medium tracking-wide transition ${
                  item.id === activeId
                    ? "text-navy"
                    : "text-muted/70 hover:text-navy"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

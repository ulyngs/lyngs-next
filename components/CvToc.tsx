"use client";

import { useEffect, useState } from "react";

export type TocItem = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

export default function CvToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const ids = items.flatMap((item) => [
      item.id,
      ...(item.children?.map((c) => c.id) ?? []),
    ]);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  const activeParentId =
    items.find(
      (item) =>
        item.id === activeId ||
        item.children?.some((c) => c.id === activeId),
    )?.id ?? items[0]?.id;

  return (
    <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-0.5">
      {items.map((item) => {
        const isActiveParent = item.id === activeParentId;
        const showChildren = Boolean(item.children?.length && isActiveParent);

        return (
          <div key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-lg px-2 py-1 text-sm transition ${
                item.id === activeId || isActiveParent
                  ? "font-medium text-navy"
                  : "text-muted hover:bg-hoverWash hover:text-navy"
              }`}
            >
              {item.label}
            </a>
            {showChildren && (
              <ul className="mt-0.5 mb-1 ml-3 border-l border-border pl-2">
                {item.children!.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className={`block rounded-lg px-2 py-0.5 text-[13px] transition ${
                        child.id === activeId
                          ? "font-medium text-navy"
                          : "text-muted hover:bg-hoverWash hover:text-navy"
                      }`}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}

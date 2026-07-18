import type { ReactNode } from "react";

type Tone = "cream" | "warm" | "navy";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-foreground",
  warm: "bg-warmGrey text-foreground",
  navy: "bg-navy text-white",
};

export default function Section({
  children,
  tone = "cream",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 md:px-8">{children}</div>
    </section>
  );
}

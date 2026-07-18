type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-[12px] font-semibold tracking-[0.08em] text-muted uppercase">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

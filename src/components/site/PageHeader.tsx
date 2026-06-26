import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

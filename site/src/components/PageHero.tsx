import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, Reveal } from "@/components/ui";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas pt-[74px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[460px] w-[460px] rounded-full bg-brand-050 blur-3xl"
      />
      <Container className="relative py-14 lg:py-20">
        <Reveal>
          <div className="text-center">
            <nav className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-muted">
              {crumbs.map((c, i) => (
                <span key={c.label} className="inline-flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-brand">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-navy">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span className="text-line">/</span>
                  )}
                </span>
              ))}
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-7 bg-brand" />
              {eyebrow}
            </span>

            <h1 className="mx-auto mt-4 max-w-3xl text-[2.3rem] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>

            {children && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {children}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

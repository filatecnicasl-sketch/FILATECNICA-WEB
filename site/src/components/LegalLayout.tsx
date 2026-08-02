import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal } from "@/components/ui";

export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  crumbLabel,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  crumbLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        crumbs={[{ label: "Inicio", to: "/" }, { label: crumbLabel }]}
      />
      <section className="py-14 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">{children}</div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export function LegalBlock({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-9 first:mt-0">
      <h2 className="text-lg font-extrabold tracking-tight text-navy sm:text-xl">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-[0.98rem] leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

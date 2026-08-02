import type { ComponentType, SVGProps } from "react";
import { Container, Reveal, SectionLabel } from "@/components/ui";

export type Feature = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

export function FeatureGrid({
  label,
  heading,
  intro,
  items,
  columns = 3,
}: {
  label: string;
  heading: string;
  intro?: string;
  items: Feature[];
  columns?: 2 | 3;
}) {
  const cols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
            {heading}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
        </Reveal>

        <div className={`mt-12 grid gap-6 ${cols}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-050 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <item.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

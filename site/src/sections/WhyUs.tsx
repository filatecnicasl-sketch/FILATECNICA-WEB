import { Container, Reveal } from "@/components/ui";
import { IconUsers, IconAward, IconHandshake } from "@/icons";
import type { ComponentType, SVGProps } from "react";

type Reason = {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

const reasons: Reason[] = [
  {
    title: "Cercanía",
    Icon: IconUsers,
    text: "Estamos cerca de ti para entender tus necesidades y responder rápido, siempre con un trato directo y amable.",
  },
  {
    title: "Profesionalidad",
    Icon: IconAward,
    text: "Equipo cualificado y soluciones contratadas que garantizan fiabilidad y resultados.",
  },
  {
    title: "Compromiso",
    Icon: IconHandshake,
    text: "Nos implicamos como si fuera nuestro propio negocio. Tu éxito es también el nuestro.",
  },
];

export function WhyUs() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="h-px flex-1 bg-line" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy/60">
              Por qué elegirnos
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-navy">
                  <r.Icon className="h-9 w-9" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                    {r.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

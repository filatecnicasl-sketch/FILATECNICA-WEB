import { Link } from "react-router-dom";
import { Container, Reveal } from "@/components/ui";
import { IconMonitor, IconPhone, IconArrow } from "@/icons";
import type { ComponentType, SVGProps } from "react";

type Flagship = {
  id: string;
  num: string;
  label: string;
  title: string;
  to: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

const items: Flagship[] = [
  {
    id: "informatica",
    num: "01",
    label: "Informática",
    title: "Mantenimiento y soporte IT",
    to: "/informatica",
    Icon: IconMonitor,
    text: "Mantenemos tu infraestructura siempre operativa y segura. Soporte técnico, monitorización 24/7, copias de seguridad y resolución ágil de incidencias para que tu empresa no se detenga.",
  },
  {
    id: "telefonia",
    num: "02",
    label: "Telefonía IP",
    title: "Centralita virtual para empresas",
    to: "/telefonia-ip",
    Icon: IconPhone,
    text: "Comunicación profesional desde cualquier lugar. Centralitas IP flexibles, integración con tus herramientas y ahorro en costes desde el primer día.",
  },
];

export function Flagship() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-sm md:grid-cols-2">
            {items.map((item, i) => (
              <article
                key={item.id}
                id={item.id}
                className={`group scroll-mt-24 p-8 transition-colors hover:bg-brand-050/40 lg:p-10 ${
                  i === 1 ? "border-t border-line md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-extrabold text-brand">
                    {item.num}
                  </span>
                  <div className="text-navy transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-brand">
                    <item.Icon className="h-11 w-11" strokeWidth={1.4} />
                  </div>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  {item.label}
                </p>
                <h3 className="mt-2 text-[1.7rem] font-extrabold leading-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted">
                  {item.text}
                </p>

                <Link
                  to={item.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all hover:gap-3"
                >
                  Más información
                  <IconArrow className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Container, Reveal, SectionLabel } from "@/components/ui";
import {
  IconPhone,
  IconLayers,
  IconMic,
  IconRefresh,
  IconGauge,
  IconSmartphone,
  IconArrow,
  IconCheck,
} from "@/icons";

const features: Feature[] = [
  {
    Icon: IconPhone,
    title: "Centralita virtual",
    text: "Toda tu telefonía en la nube: extensiones, desvíos, colas y horarios configurables desde un panel sencillo.",
  },
  {
    Icon: IconLayers,
    title: "Fijos y móviles unificados",
    text: "Integra líneas fijas y móviles en un mismo sistema. Recibe y realiza llamadas desde cualquier dispositivo.",
  },
  {
    Icon: IconMic,
    title: "IVR y locuciones",
    text: "Un menú de voz profesional que guía a tus clientes al departamento adecuado y mejora tu imagen.",
  },
  {
    Icon: IconRefresh,
    title: "Grabación de llamadas",
    text: "Graba y consulta tus llamadas para calidad, formación o resolución de incidencias.",
  },
  {
    Icon: IconGauge,
    title: "Estadísticas en tiempo real",
    text: "Controla el volumen de llamadas, tiempos de espera y rendimiento de tu equipo con informes claros.",
  },
  {
    Icon: IconSmartphone,
    title: "App móvil y softphone",
    text: "Lleva tu extensión en el móvil o el ordenador y trabaja desde cualquier lugar como si estuvieras en la oficina.",
  },
];

const plans = [
  {
    tag: "Autónomos y pequeños negocios",
    title: "Empieza sencillo y profesional",
    text: "La solución ideal para dar una imagen profesional desde el primer día: número propio, extensiones, desvíos y buzón de voz. Fácil de activar y sin inversión en equipos.",
    points: [
      "Alta rápida y sin permanencias complicadas",
      "Número y extensiones para tu equipo",
      "Desvíos, horarios y buzón de voz",
    ],
  },
  {
    tag: "Pymes y grandes empresas",
    title: "Centralita avanzada (Neotel)",
    text: "Para empresas con mayor volumen de llamadas: colas, IVR, grabación, estadísticas e integraciones con tu CRM. Escalable a cientos de extensiones.",
    points: [
      "Colas de llamadas e IVR multinivel",
      "Grabación, estadísticas e informes",
      "Integraciones y crecimiento sin límites",
    ],
  },
];

export function TelefoniaIP() {
  return (
    <>
      <PageHero
        eyebrow="Telefonía IP"
        title={
          <>
            Centralita virtual y{" "}
            <span className="text-brand">telefonía IP</span> para tu empresa
          </>
        }
        subtitle="Comunicación profesional desde cualquier lugar. Unifica fijos y móviles, ofrece una atención telefónica de calidad y ahorra en costes con una solución flexible y escalable."
        crumbs={[
          { label: "Inicio", to: "/" },
          { label: "Telefonía IP" },
        ]}
      >
        <Link
          to="/contacto"
          className="inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
        >
          Solicita presupuesto
          <IconArrow className="h-5 w-5" />
        </Link>
      </PageHero>

      <FeatureGrid
        label="Funcionalidades"
        heading="Todo lo que tu centralita puede hacer"
        intro="Herramientas profesionales de comunicación, sin instalaciones complejas ni grandes inversiones."
        items={features}
      />

      <section className="bg-warm/60 py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel>Soluciones a tu medida</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
              Una opción para cada tipo de empresa
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tanto si eres autónomo como si gestionas un gran volumen de
              llamadas, tenemos la centralita que necesitas.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {plans.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 shadow-sm lg:p-10">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-050 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                    {p.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">
                    {p.text}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-[0.98rem] font-medium text-navy/85"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-050 text-brand">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contacto"
                    className="mt-8 inline-flex items-center gap-2 self-start text-sm font-bold text-brand transition-all hover:gap-3"
                  >
                    Más información
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="¿Quieres mejorar tu telefonía?"
        text="Te ayudamos a elegir la centralita adecuada y nos encargamos de toda la migración."
      />
    </>
  );
}

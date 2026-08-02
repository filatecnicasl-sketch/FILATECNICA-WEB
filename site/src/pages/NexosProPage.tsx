import { Link } from "react-router-dom";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Container, Reveal, SectionLabel } from "@/components/ui";
import {
  IconLayers,
  IconCloud,
  IconTerminal,
  IconRefresh,
  IconGauge,
  IconHeadset,
  IconArrow,
} from "@/icons";

const services: Feature[] = [
  {
    Icon: IconLayers,
    title: "Aplicaciones a medida",
    text: "Software de gestión hecho a tu forma de trabajar: pedidos, clientes, inventario, producción… lo que tu empresa necesite.",
  },
  {
    Icon: IconCloud,
    title: "Portales y webs a medida",
    text: "Plataformas web, áreas privadas y portales de cliente rápidos, seguros y fáciles de usar.",
  },
  {
    Icon: IconTerminal,
    title: "Integraciones y APIs",
    text: "Conectamos tus herramientas (ERP, CRM, TPV, facturación) para que la información fluya sin duplicar trabajo.",
  },
  {
    Icon: IconRefresh,
    title: "Automatización de procesos",
    text: "Eliminamos tareas repetitivas y errores manuales automatizando los flujos de trabajo de tu negocio.",
  },
  {
    Icon: IconGauge,
    title: "Paneles y cuadros de mando",
    text: "Visualiza los datos clave de tu empresa en tiempo real y toma decisiones con información fiable.",
  },
  {
    Icon: IconHeadset,
    title: "Mantenimiento evolutivo",
    text: "Tu software crece contigo. Evolucionamos, mejoramos y damos soporte continuo a lo que construimos.",
  },
];

const steps = [
  {
    n: "01",
    title: "Análisis",
    text: "Escuchamos cómo trabajas y definimos juntos qué debe resolver el software.",
  },
  {
    n: "02",
    title: "Diseño",
    text: "Proponemos la solución, los flujos y una interfaz clara antes de programar.",
  },
  {
    n: "03",
    title: "Desarrollo",
    text: "Construimos por fases, con entregas frecuentes para que veas avances reales.",
  },
  {
    n: "04",
    title: "Soporte",
    text: "Ponemos en marcha, formamos a tu equipo y evolucionamos la herramienta contigo.",
  },
];

export function NexosProPage() {
  return (
    <>
      {/* Hero sub-marca (navy) */}
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl"
        />
        <Container className="relative py-16 lg:py-24">
          <Reveal>
            <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/50">
              <Link to="/" className="transition-colors hover:text-white">
                Inicio
              </Link>
              <span>/</span>
              <Link to="/software" className="transition-colors hover:text-white">
                Software
              </Link>
              <span>/</span>
              <span className="text-white">NexosPro</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Software a medida · una marca de Filatècnica
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
              Nexos<span className="text-brand">Pro</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-white/90">
              Software a medida que se adapta a tu negocio, no al revés.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
              Desarrollamos aplicaciones y herramientas digitales diseñadas
              específicamente para optimizar los procesos de tu empresa. Sin
              plantillas genéricas: soluciones pensadas para cómo trabajas tú.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-md shadow-brand/30 transition-all hover:bg-brand-600 hover:shadow-lg"
              >
                Cuéntanos tu proyecto
                <IconArrow className="h-5 w-5" />
              </Link>
              <Link
                to="/informatica"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-base font-bold text-white transition-colors hover:border-white/50"
              >
                Ver otros servicios
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <FeatureGrid
        label="Qué desarrollamos"
        heading="Soluciones digitales a tu medida"
        intro="Desde una pequeña herramienta interna hasta una plataforma completa, lo construimos a partir de tus necesidades reales."
        items={services}
      />

      <section className="bg-warm/60 py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
              Un proceso claro, de principio a fin
            </h2>
            <p className="mt-4 text-lg text-muted">
              Te acompañamos en cada fase, con comunicación cercana y entregas
              que puedes ver y probar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                  <span className="text-4xl font-extrabold text-brand">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">
                    {s.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="¿Tienes una idea en mente?"
        text="Cuéntanos qué proceso quieres mejorar y te proponemos la solución de software a medida con NexosPro."
      />
    </>
  );
}

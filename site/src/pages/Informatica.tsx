import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Container, Reveal, SectionLabel } from "@/components/ui";
import {
  IconHeadset,
  IconTerminal,
  IconWifi,
  IconServer,
  IconLock,
  IconCloud,
  IconArrow,
  IconCheck,
} from "@/icons";

const services: Feature[] = [
  {
    Icon: IconHeadset,
    title: "Mantenimiento y soporte",
    text: "Nos ocupamos de tus equipos y sistemas con un plan de mantenimiento proactivo. Detectamos y resolvemos incidencias antes de que te afecten.",
  },
  {
    Icon: IconTerminal,
    title: "Asistencia remota inmediata",
    text: "Resolvemos la mayoría de incidencias en remoto en cuestión de minutos, sin esperas ni desplazamientos innecesarios.",
  },
  {
    Icon: IconWifi,
    title: "Redes y Wi-Fi",
    text: "Diseño, instalación y optimización de redes cableadas y Wi-Fi para que tu empresa esté siempre conectada y rápida.",
  },
  {
    Icon: IconServer,
    title: "Servidores y equipos",
    text: "Suministro, configuración y puesta a punto de servidores, ordenadores y periféricos adaptados a tu actividad.",
  },
  {
    Icon: IconLock,
    title: "Ciberseguridad",
    text: "Antivirus, firewall y buenas prácticas para proteger tus datos y los de tus clientes frente a amenazas.",
  },
  {
    Icon: IconCloud,
    title: "Copias de seguridad",
    text: "Backups automáticos y planes de recuperación para que nunca pierdas tu información, pase lo que pase.",
  },
];

const benefits = [
  "Un único proveedor para toda tu tecnología",
  "Respuesta ágil y trato directo con personas",
  "Tarifas claras y sin sorpresas",
  "Servicio local en San Fernando y alrededores",
];

export function Informatica() {
  return (
    <>
      <PageHero
        eyebrow="Informática"
        title={
          <>
            Tu departamento de <span className="text-brand">informática</span>,
            sin complicaciones
          </>
        }
        subtitle="Mantenemos tu infraestructura siempre operativa y segura para que tú te centres en tu negocio. Soporte técnico, redes, seguridad y copias de seguridad con un servicio cercano y profesional."
        crumbs={[
          { label: "Inicio", to: "/" },
          { label: "Informática" },
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
        label="Qué hacemos"
        heading="Servicios de informática para empresas"
        intro="Todo lo que necesitas para que tu tecnología funcione, cubierto por un mismo equipo de confianza."
        items={services}
      />

      <section className="bg-warm/60 py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Por qué con nosotros</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
              Cercanía y profesionalidad en cada intervención
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              No somos un centro de llamadas: somos tu equipo técnico de
              confianza. Conocemos tu empresa y respondemos rápido, con
              soluciones reales.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 text-[1rem] font-semibold text-navy/85"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-050 text-brand">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="¿Necesitas soporte informático?"
        text="Cuéntanos cómo trabajas y te preparamos un plan de mantenimiento a tu medida."
      />
    </>
  );
}

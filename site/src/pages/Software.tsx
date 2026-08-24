import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Container, Reveal, SectionLabel } from "@/components/ui";
import { FilanexMark } from "@/components/BrandLogos";
import { IconArrow, IconCheck, IconGlobe } from "@/icons";

const filanexFeatures = [
  "Aplicaciones y ERP a medida",
  "Integraciones y APIs con tus sistemas",
  "Automatización de procesos",
  "Paneles y cuadros de mando",
];

const factoryFeatures = [
  "TPV táctil para bares, restaurantes y cafeterías",
  "Gestión de salas, mesas y comandas",
  "Comanderos y TPV móvil para tomar pedidos en sala",
  "Pantalla de cocina (KDS) e impresión de tickets",
  "Informes de ventas y control de caja en tiempo real",
  "Adaptado a la normativa de facturación vigente",
];

const webFeatures = [
  "Diseño a medida, moderno y alineado con tu marca",
  "Perfecta en móvil, tablet y ordenador",
  "Optimizada para posicionar en Google (SEO)",
  "Carga ultrarrápida y segura con HTTPS",
  "Autogestionable: actualiza tú mismo los contenidos",
  "Tienda online, reservas o citas si lo necesitas",
];

export function Software() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Software" }]}
        eyebrow="Software"
        title="Software para gestionar mejor tu negocio"
        subtitle="Desarrollamos software a medida con nuestra marca Filanex, creamos páginas web que atraen clientes y distribuimos soluciones especializadas como FactoryPOS para hostelería. Elegimos contigo la opción que mejor encaja con tu empresa."
      >
        <Link
          to="/contacto"
          className="inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
        >
          Solicita asesoramiento
          <IconArrow className="h-5 w-5" />
        </Link>
      </PageHero>

      <section className="py-16 lg:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Nuestras soluciones</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
              Software y web para hacer crecer tu negocio
            </h2>
            <p className="mt-4 text-lg text-muted">
              Software propio cuando necesitas algo único, páginas web que
              venden y software especializado ya probado para tu sector.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Filanex */}
            <Reveal>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 shadow-sm shadow-navy/[0.03]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-050 text-navy">
                    <FilanexMark className="h-7 w-7" />
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand-050 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                    Marca propia
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-navy">
                  Filane<span className="text-brand">x</span>
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Nuestra marca de desarrollo de software a medida. Creamos
                  aplicaciones y herramientas digitales diseñadas para encajar
                  exactamente con la forma de trabajar de tu empresa.
                </p>

                <ul className="mt-6 grid gap-3">
                  {filanexFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[0.98rem] font-medium text-navy/80"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-050 text-brand">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://filanex.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
                  >
                    Descubre Filanex
                    <IconArrow className="h-5 w-5" />
                  </a>
                </div>
              </article>
            </Reveal>

            {/* FactoryPOS */}
            <Reveal delay={0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 shadow-sm shadow-navy/[0.03]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warm">
                    <img
                      src="/factorypos-mark.png"
                      alt="FactoryPOS"
                      className="h-7 w-7 object-contain"
                    />
                  </span>
                  <span className="rounded-full border border-line bg-warm px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy/70">
                    Distribuidor oficial
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-navy">
                  FactoryPOS
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Software de TPV para hostelería del que somos distribuidores.
                  Una solución completa y probada para bares, restaurantes y
                  cafeterías, con instalación, formación y soporte de nuestro
                  equipo.
                </p>

                <ul className="mt-6 grid gap-3">
                  {factoryFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[0.98rem] font-medium text-navy/80"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-050 text-brand">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-base font-bold text-navy transition-colors hover:border-brand hover:text-brand"
                  >
                    Solicita una demo
                    <IconArrow className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-sm shadow-navy/[0.04] lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <span className="inline-flex rounded-full border border-line bg-warm px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy/70">
                    FactoryPOS · TPV hostelería
                  </span>
                  <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.2rem]">
                    El TPV que agiliza tu bar o restaurante
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    Toma comandas desde tablet o móvil, gestiona salas y mesas y
                    controla la caja en tiempo real. Una solución probada, con
                    instalación, formación y soporte de nuestro equipo.
                  </p>

                  <div className="mt-8">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
                    >
                      Solicita una demo
                      <IconArrow className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <img
                    src="/factorypos-app.webp"
                    alt="FactoryPOS funcionando en tablet y móvil"
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto w-full max-w-md"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-brand-050 via-surface to-surface p-8 shadow-sm shadow-navy/[0.04] lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                      <IconGlobe className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                      Diseño web
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.2rem]">
                    Páginas web que{" "}
                    <span className="bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent">
                      atraen clientes
                    </span>
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    Diseñamos y desarrollamos tu página web a medida: moderna,
                    rápida y pensada para convertir visitas en clientes. Desde
                    webs corporativas hasta tiendas online y sistemas de
                    reservas.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
                    >
                      Solicita tu página web
                      <IconArrow className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-navy/[0.03] sm:p-8">
                  <ul className="grid gap-3.5">
                    {webFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[0.98rem] font-medium text-navy/80"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-050 text-brand">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="¿No sabes qué solución necesitas?"
        text="Cuéntanos cómo trabajas y te recomendamos la mejor opción: una página web a medida, desarrollo con Filanex o software especializado como FactoryPOS."
      />
    </>
  );
}

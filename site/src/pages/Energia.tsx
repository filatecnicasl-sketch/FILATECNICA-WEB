import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { Container, Reveal, SectionLabel } from "@/components/ui";
import { IconBolt, IconGauge, IconRefresh, IconCheck, IconArrow } from "@/icons";
import { site } from "@/lib/site";

const features: Feature[] = [
  {
    Icon: IconBolt,
    title: "Comparativa de luz y gas",
    text: "Analizamos las principales comercializadoras del mercado y comparamos tarifas para encontrar la que más te conviene.",
  },
  {
    Icon: IconGauge,
    title: "Ahorro en tus facturas",
    text: "Optimizamos la potencia contratada y el tipo de tarifa para reducir el importe de tu factura sin que pierdas servicio.",
  },
  {
    Icon: IconRefresh,
    title: "Gestión de altas y cambios",
    text: "Nos encargamos de todo el papeleo del cambio de comercializadora. Tú no tienes que preocuparte de nada.",
  },
];

const reasons = [
  "El mejor precio en soluciones energéticas para reducir tus costes",
  "Energías renovables y tecnologías más eficientes",
  "Ahorro en tus facturas cada mes",
  "Un futuro más sostenible, contaminando menos",
];

const comercializadoras = [
  "Gana Energía",
  "Wekiwi",
  "Endesa",
  "Iberdrola",
  "Naturgy",
  "TotalEnergies",
];

export function Energia() {
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const supply = String(data.get("supply") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(
      `Presupuesto energía · ${name || "Nueva solicitud"}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nSuministro: ${supply}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Energía"
        title={
          <>
            Ahorra en tu <span className="text-brand">luz y gas</span> con la
            mejor tarifa
          </>
        }
        subtitle="Rellena el formulario y te enviaremos un presupuesto de la comercializadora que más te convenga para tu suministro eléctrico o de gas. Energía más eficiente y sostenible, sin complicaciones."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Energía" }]}
      >
        <a
          href="#presupuesto"
          className="inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
        >
          Solicita tu comparativa
          <IconArrow className="h-5 w-5" />
        </a>
      </PageHero>

      {/* Por qué cambiar */}
      <section className="py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Por qué cambiar</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
              Paga menos y elige un futuro más sostenible
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Descubre cómo el mejor precio en soluciones energéticas puede
              ayudarte a reducir tus costes y a contaminar menos. Al optar por
              energías renovables y tecnologías más eficientes, no solo optimizas
              tu gasto mensual: también contribuyes a proteger el medio ambiente.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface px-5 py-4 text-[1rem] font-semibold text-navy/85"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-050 text-brand">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <FeatureGrid
        label="Qué hacemos"
        heading="Energía a la medida de tu consumo"
        intro="Te ayudamos a pagar solo por lo que necesitas, con un asesoramiento honesto y cercano."
        items={features}
      />

      {/* Comercializadoras */}
      <section className="bg-warm/60 py-14 lg:py-16">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-navy/60">
              Comparamos las principales comercializadoras
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {comercializadoras.map((c) => (
                <span
                  key={c}
                  className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-navy/80"
                >
                  {c}
                </span>
              ))}
              <span className="rounded-xl border border-dashed border-line px-5 py-3 text-sm font-semibold text-muted">
                y muchas más
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Formulario de presupuesto */}
      <section id="presupuesto" className="scroll-mt-20 py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionLabel>Solicita tu presupuesto</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
              Te enviamos la mejor oferta para tu suministro
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Rellena tus datos y compararemos por ti las tarifas de luz y gas.
              Te contactaremos con el presupuesto de la comercializadora que más
              te convenga, sin compromiso.
            </p>
            <p className="mt-5 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-muted">
              ¿Prefieres enviarnos tu factura? Escríbenos a{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-brand"
              >
                {site.email}
              </a>{" "}
              o llámanos al{" "}
              <a
                href={`tel:${site.phoneHref}`}
                className="font-semibold text-brand"
              >
                {site.phone}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5">
                <Field label="Nombre" name="name" required placeholder="Tu nombre" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                  />
                  <Field
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    placeholder="Opcional"
                  />
                </div>
                <div>
                  <label htmlFor="supply" className="text-sm font-bold text-navy">
                    Tipo de suministro
                  </label>
                  <select
                    id="supply"
                    name="supply"
                    defaultValue="Luz"
                    className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.98rem] text-navy outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/15"
                  >
                    <option>Luz</option>
                    <option>Gas</option>
                    <option>Luz y gas</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-bold text-navy">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu consumo o tu factura actual"
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-canvas px-4 py-3 text-[0.98rem] text-navy outline-none transition-all placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-muted">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                  />
                  <span>
                    Estoy de acuerdo en que estos datos se almacenen y procesen
                    con el fin de establecer contacto. Puedo revocar mi
                    consentimiento en cualquier momento.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
                >
                  Enviar solicitud
                  <IconArrow className="h-5 w-5" />
                </button>
              </div>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-navy">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.98rem] text-navy outline-none transition-all placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/15"
      />
    </div>
  );
}

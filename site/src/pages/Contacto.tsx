import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal } from "@/components/ui";
import { IconPhone, IconMail, IconPin, IconArrow } from "@/icons";
import { site } from "@/lib/site";

const cards = [
  {
    Icon: IconPhone,
    label: "Teléfono",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    Icon: IconMail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    Icon: IconPin,
    label: "Dónde estamos",
    value: `${site.address} · ${site.city}`,
  },
];

export function Contacto() {
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await fetch("/", { method: "POST", body: data });
      setStatus("sent");
      form.reset();
      setConsent(false);
      setFileName("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Hablemos de tu <span className="text-brand">empresa</span>
          </>
        }
        subtitle="Escríbenos o llámanos y te asesoramos sin compromiso. Te responderemos con una solución a tu medida."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="grid gap-4">
              {cards.map((c) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-050 text-brand">
                      <c.Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                        {c.label}
                      </p>
                      <p className="mt-0.5 font-semibold text-navy">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-line bg-surface p-5"
                  >
                    {inner}
                  </div>
                );
              })}

              <div className="rounded-2xl border border-line bg-warm/60 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Horario de atención
                </p>
                <p className="mt-1.5 font-semibold text-navy">
                  Lunes a viernes · 9:00 – 14:00 y 16:00 – 19:00
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  No rellenar: <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-5">
                <Field label="Nombre" name="name" required placeholder="Tu nombre" />
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
                <div>
                  <label htmlFor="message" className="text-sm font-bold text-navy">
                    Mensaje <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos qué necesitas"
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-canvas px-4 py-3 text-[0.98rem] text-navy outline-none transition-all placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </div>

                <div>
                  <label htmlFor="file" className="text-sm font-bold text-navy">
                    Adjuntar archivo{" "}
                    <span className="font-normal text-muted">(opcional)</span>
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name ?? "")
                    }
                    className="mt-2 w-full cursor-pointer rounded-xl border border-line bg-canvas px-4 py-3 text-[0.95rem] text-navy outline-none transition-all file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-brand-050 file:px-4 file:py-2 file:text-sm file:font-bold file:text-brand hover:file:bg-brand-100 focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                  <p className="mt-1.5 text-xs text-muted">
                    {fileName
                      ? `Archivo seleccionado: ${fileName}`
                      : "Puedes adjuntar presupuestos, capturas o documentos (PDF, imágenes…)."}
                  </p>
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
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                  <IconArrow className="h-5 w-5" />
                </button>

                {status === "sent" && (
                  <p className="rounded-xl border border-brand/20 bg-brand-050 px-4 py-3 text-sm font-semibold text-brand">
                    ¡Gracias! Hemos recibido tu mensaje y te responderemos lo
                    antes posible.
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    No se pudo enviar. Inténtalo de nuevo o escríbenos a{" "}
                    {site.email}.
                  </p>
                )}
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

import { Link } from "react-router-dom";
import { Container, Reveal } from "@/components/ui";
import { IconArrow, IconPhone } from "@/icons";
import { site } from "@/lib/site";

export function CTASection({
  title = "¿Hablamos de tu proyecto?",
  text = "Cuéntanos qué necesita tu empresa y te asesoramos sin compromiso.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-center shadow-xl shadow-navy/20 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-white/70">{text}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-md shadow-brand/30 transition-all hover:bg-brand-600 hover:shadow-lg"
                >
                  Solicita presupuesto
                  <IconArrow className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-base font-bold text-white transition-colors hover:border-white/50"
                >
                  <IconPhone className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

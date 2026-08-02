import { Link } from "react-router-dom";
import { Container, Reveal } from "@/components/ui";
import { IconArrow, IconCheck } from "@/icons";

const features = ["Apps a medida", "Integraciones", "Automatización de procesos"];

export function NexosPro() {
  return (
    <section id="nexospro" className="scroll-mt-24 pb-14 lg:pb-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-xl shadow-navy/20 lg:p-12">
            {/* halo decorativo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  Software a medida · una marca de Filatècnica
                </span>

                <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Nexos<span className="text-brand">Pro</span>
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
                  Nuestra marca de desarrollo de software a medida. Creamos
                  aplicaciones y herramientas digitales diseñadas para encajar
                  exactamente con la forma de trabajar de tu empresa.
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/85"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/nexospro"
                    className="inline-flex items-center gap-3 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brand/30 transition-all hover:bg-brand-600 hover:shadow-lg"
                  >
                    Descubre NexosPro
                    <IconArrow className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-bold text-white transition-colors hover:border-white/50"
                  >
                    Cuéntanos tu proyecto
                  </Link>
                </div>
              </div>

              {/* mock de ventana de app */}
              <div className="relative hidden lg:block">
                <div className="rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-white/25" />
                    <span className="h-3 w-3 rounded-full bg-white/25" />
                    <span className="h-3 w-3 rounded-full bg-brand" />
                    <span className="ml-3 text-xs font-semibold text-white/40">
                      nexospro · panel
                    </span>
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="h-2.5 w-2/3 rounded-full bg-white/20" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-lg bg-white/10" />
                      <div className="h-16 rounded-lg bg-brand/40" />
                      <div className="h-16 rounded-lg bg-white/10" />
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-white/15" />
                    <div className="h-2.5 w-4/5 rounded-full bg-white/15" />
                    <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui";
import { IconArrow, IconPhone } from "@/icons";
import { site } from "@/lib/site";

const pillars = ["Informática", "Telecomunicaciones", "Software", "Energía"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[74px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-brand-050 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-050 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Tecnología que impulsa tu negocio
          </span>

          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.04] tracking-tight text-navy sm:text-[3.4rem]">
            Soluciones tecnológicas con un{" "}
            <span className="bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent">
              trato cercano
            </span>{" "}
            para empresas.
          </h1>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {pillars.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-navy/80 shadow-sm shadow-navy/[0.03]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {p}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Informática, telecomunicaciones, software y energía con un servicio de
            proximidad para que puedas centrarte en hacer crecer tu negocio.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand/30"
            >
              Solicita presupuesto
              <IconArrow className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-4 text-base font-bold text-navy transition-colors hover:border-brand hover:text-brand"
            >
              <IconPhone className="h-5 w-5" />
              Llámanos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* marco de acento */}
          <div
            aria-hidden
            className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border border-brand/25 sm:block"
          />
          <div className="relative overflow-hidden rounded-3xl bg-surface shadow-xl shadow-navy/10 ring-1 ring-line">
            <img
              src="/hero.png"
              alt="Técnico de Filatècnica atendiendo a un cliente en su empresa"
              width={720}
              height={720}
              fetchPriority="high"
              className="aspect-[5/4] h-full w-full object-cover"
            />
          </div>

          {/* tarjeta flotante */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg shadow-navy/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-050 text-brand">
              <IconPhone className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-navy">Centralita activa</p>
              <p className="text-xs font-medium text-muted">Soporte 24/7</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import {
  IconPhone,
  IconMail,
  IconPin,
  IconLinkedin,
  IconYoutube,
  IconInstagram,
} from "@/icons";
import { site } from "@/lib/site";

const servicios = [
  { label: "Informática", to: "/informatica" },
  { label: "Telefonía IP", to: "/telefonia-ip" },
  { label: "Software", to: "/software" },
  { label: "Energía", to: "/energia" },
];

const enlaces = [
  { label: "Inicio", to: "/" },
  { label: "Contacto", to: "/contacto" },
];

const socials = [
  { Icon: IconLinkedin, label: "LinkedIn", href: "#" },
  { Icon: IconYoutube, label: "YouTube", href: "#" },
  { Icon: IconInstagram, label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Tecnología, comunicación y eficiencia energética para empresas.
            Soluciones cercanas, fiables y escalables.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-navy/70 transition-colors hover:border-brand hover:text-brand"
              >
                <s.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-navy/50">
            Servicios
          </h4>
          <ul className="mt-4 grid gap-2.5">
            {servicios.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="text-sm font-medium text-muted transition-colors hover:text-brand"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-navy/50">
            Enlaces
          </h4>
          <ul className="mt-4 grid gap-2.5">
            {enlaces.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="text-sm font-medium text-muted transition-colors hover:text-brand"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-navy/50">
            Contacto
          </h4>
          <ul className="mt-4 grid gap-3.5">
            <li className="flex items-start gap-3 text-sm font-medium text-muted">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                <IconPhone className="h-4 w-4 shrink-0 text-brand" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                <IconMail className="h-4 w-4 shrink-0 text-brand" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="#" className="transition-colors hover:text-brand">
              Aviso legal
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Política de cookies
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

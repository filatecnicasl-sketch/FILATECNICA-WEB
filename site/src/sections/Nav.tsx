import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { IconMenu, IconClose, IconPhone } from "@/icons";
import { site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-canvas/70 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-[74px] items-center justify-between">
        <Link to="/" aria-label="Filatècnica, inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-[0.9rem] font-semibold transition-colors hover:text-brand ${
                  isActive ? "text-navy" : "text-navy/70"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-brand/25 transition-all hover:bg-brand-600"
          >
            <IconPhone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-navy lg:hidden"
        >
          {open ? (
            <IconClose className="h-6 w-6" />
          ) : (
            <IconMenu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t border-line bg-canvas lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0 border-t-transparent"
        } transition-[max-height] duration-300`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-2 py-3 text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-050 text-brand"
                    : "text-navy hover:bg-brand-050 hover:text-brand"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-base font-bold text-white"
          >
            <IconPhone className="h-5 w-5" />
            {site.phone}
          </a>
        </Container>
      </div>
    </header>
  );
}

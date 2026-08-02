import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "fila-cookie-consent";

type Consent = "accepted" | "rejected";

export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) {
      const t = window.setTimeout(() => setVisible(true), 400);
      return () => window.clearTimeout(t);
    }
  }, []);

  function decide(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* almacenamiento no disponible */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-line bg-surface/95 p-5 shadow-xl shadow-navy/10 backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-bold text-navy">Usamos cookies</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Utilizamos cookies propias y de terceros para el funcionamiento del
            sitio y para analizar el uso de la web. Puedes aceptarlas o
            rechazarlas. Más información en nuestra{" "}
            <Link
              to="/politica-de-cookies"
              className="font-semibold text-brand underline-offset-2 hover:underline"
            >
              Política de cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-xl border border-line px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:border-brand/40 hover:text-brand"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-lg"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

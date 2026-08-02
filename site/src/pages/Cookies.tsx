import { LegalLayout, LegalBlock } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export function Cookies() {
  return (
    <LegalLayout
      eyebrow="Cookies"
      title="Política de cookies"
      subtitle="Qué son las cookies, cuáles utilizamos y cómo puedes gestionarlas."
      crumbLabel="Política de cookies"
    >
      <LegalBlock heading="1. ¿Qué son las cookies?">
        <p>
          Una cookie es un pequeño fichero de texto que un sitio web almacena en
          el navegador del usuario cuando lo visita. Las cookies permiten que el
          sitio funcione correctamente, recuerden preferencias y, en algunos
          casos, analicen el uso que se hace de la web.
        </p>
      </LegalBlock>

      <LegalBlock heading="2. Tipos de cookies que utilizamos">
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong className="text-navy">Cookies técnicas o necesarias:</strong>{" "}
            imprescindibles para el funcionamiento del sitio y para recordar tus
            preferencias de consentimiento. No requieren autorización.
          </li>
          <li>
            <strong className="text-navy">Cookies de análisis:</strong> nos
            ayudan a entender cómo interactúan los usuarios con la web para
            mejorar su contenido y rendimiento. Solo se activan si aceptas su
            uso.
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="3. Gestión y desactivación de cookies">
        <p>
          Al acceder por primera vez a la web se muestra un aviso que te permite
          aceptar o rechazar las cookies no necesarias. Puedes cambiar tu
          decisión en cualquier momento borrando las cookies almacenadas desde la
          configuración de tu navegador.
        </p>
        <p>
          También puedes configurar tu navegador para bloquear o eliminar las
          cookies. A continuación te indicamos los enlaces de ayuda de los
          principales navegadores:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Microsoft Edge</li>
          <li>Safari</li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="4. Actualización de la política">
        <p>
          {site.legalName} puede modificar esta política de cookies en función de
          nuevos requisitos legales o técnicos. Te recomendamos revisarla
          periódicamente. Para cualquier duda puedes escribirnos a{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-brand underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}

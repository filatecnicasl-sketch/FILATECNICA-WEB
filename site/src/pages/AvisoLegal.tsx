import { LegalLayout, LegalBlock } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export function AvisoLegal() {
  return (
    <LegalLayout
      eyebrow="Información legal"
      title="Aviso legal"
      subtitle="Condiciones generales de uso de este sitio web y datos identificativos del titular."
      crumbLabel="Aviso legal"
    >
      <LegalBlock heading="1. Datos identificativos">
        <p>
          En cumplimiento del deber de información recogido en la Ley 34/2002,
          de Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se facilitan los siguientes datos del titular de este sitio
          web:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong className="text-navy">Titular:</strong> {site.legalName}
          </li>
          <li>
            <strong className="text-navy">CIF:</strong> {site.cif}
          </li>
          <li>
            <strong className="text-navy">Domicilio:</strong> {site.address},{" "}
            {site.city}
          </li>
          <li>
            <strong className="text-navy">Teléfono:</strong> {site.phone}
          </li>
          <li>
            <strong className="text-navy">Email:</strong> {site.email}
          </li>
          <li>
            <strong className="text-navy">Sitio web:</strong> www.filatecnica.com
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="2. Objeto">
        <p>
          El presente aviso legal regula el uso del sitio web www.filatecnica.com,
          que {site.legalName} pone a disposición de los usuarios de Internet. La
          navegación por el sitio atribuye la condición de usuario e implica la
          aceptación plena de todas las cláusulas incluidas en este aviso legal.
        </p>
      </LegalBlock>

      <LegalBlock heading="3. Condiciones de uso">
        <p>
          El usuario se compromete a hacer un uso adecuado de los contenidos y
          servicios del sitio y a no emplearlos para incurrir en actividades
          ilícitas, ilegales o contrarias a la buena fe y al orden público, ni
          para provocar daños en los sistemas físicos y lógicos del titular, de
          sus proveedores o de terceros.
        </p>
      </LegalBlock>

      <LegalBlock heading="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio web (textos, fotografías, gráficos,
          imágenes, logotipos, marcas, diseño y código fuente) son propiedad de{" "}
          {site.legalName} o de terceros que han autorizado su uso, y están
          protegidos por los derechos de propiedad intelectual e industrial.
          Queda prohibida su reproducción, distribución o comunicación pública
          sin autorización expresa del titular.
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Exclusión de responsabilidad">
        <p>
          {site.legalName} no se hace responsable de los daños y perjuicios que
          pudieran derivarse de interferencias, omisiones, interrupciones, virus
          informáticos o desconexiones en el funcionamiento del sistema, motivadas
          por causas ajenas a su control.
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Legislación aplicable">
        <p>
          Las presentes condiciones se rigen por la legislación española. Para la
          resolución de cualquier controversia, las partes se someten a los
          juzgados y tribunales del domicilio del titular, salvo que la ley
          disponga otra cosa.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}

import { LegalLayout, LegalBlock } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export function Privacidad() {
  return (
    <LegalLayout
      eyebrow="Protección de datos"
      title="Política de privacidad"
      subtitle="Cómo tratamos tus datos personales conforme al RGPD y a la LOPDGDD."
      crumbLabel="Política de privacidad"
    >
      <LegalBlock heading="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos personales recogidos a
          través de este sitio web es:
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
            <strong className="text-navy">Email:</strong> {site.email}
          </li>
          <li>
            <strong className="text-navy">Teléfono:</strong> {site.phone}
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="2. Finalidad del tratamiento">
        <p>
          Tratamos los datos que nos facilitas con las siguientes finalidades:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            Atender las solicitudes de información, presupuestos o contacto
            realizadas a través del formulario o del correo electrónico.
          </li>
          <li>Gestionar la relación comercial y la prestación de servicios.</li>
          <li>
            Enviar comunicaciones relacionadas con nuestros servicios, siempre
            que exista una base legítima para ello.
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock heading="3. Base legal">
        <p>
          La base legal para el tratamiento es el consentimiento del interesado
          otorgado al enviar sus datos, la ejecución de una relación
          contractual o precontractual y el interés legítimo del responsable en
          atender las consultas recibidas.
        </p>
      </LegalBlock>

      <LegalBlock heading="4. Conservación de los datos">
        <p>
          Los datos se conservarán durante el tiempo necesario para cumplir con
          la finalidad para la que se recabaron y para determinar las posibles
          responsabilidades que se pudieran derivar, además de los plazos
          establecidos por la normativa vigente.
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Destinatarios">
        <p>
          No se cederán datos a terceros, salvo obligación legal. Los datos
          podrán ser tratados por proveedores de servicios (hosting, correo,
          gestión) que actúan como encargados del tratamiento bajo las
          correspondientes garantías.
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Derechos del usuario">
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad de los datos
          escribiendo a{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-brand underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
          , indicando el derecho que deseas ejercer. Asimismo, tienes derecho a
          presentar una reclamación ante la Agencia Española de Protección de
          Datos (www.aepd.es).
        </p>
      </LegalBlock>

      <LegalBlock heading="7. Seguridad">
        <p>
          {site.legalName} aplica las medidas técnicas y organizativas necesarias
          para garantizar la seguridad de los datos personales y evitar su
          alteración, pérdida, tratamiento o acceso no autorizado.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}

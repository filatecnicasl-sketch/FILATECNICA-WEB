export const site = {
  name: "Filatècnica",
  legalName: "Fila Tecnica S.L.",
  tagline: "Informática y telecomunicaciones",
  cif: "B75418350",
  phone: "+34 689 348 148",
  phoneHref: "+34689348148",
  email: "info@filatecnica.com",
  address: "Calle Escritor Luis Berenguer 4, local 5",
  city: "11100 San Fernando (Cádiz)",
  supportUrl:
    "https://download.remotepc.com/downloads/OTA/RemotePCAttended.exe",
  nav: [
    { label: "Inicio", to: "/" },
    { label: "Informática", to: "/informatica" },
    { label: "Telefonía IP", to: "/telefonia-ip" },
    { label: "Software", to: "/software" },
    { label: "Energía", to: "/energia" },
    { label: "Contacto", to: "/contacto" },
  ],
} as const;

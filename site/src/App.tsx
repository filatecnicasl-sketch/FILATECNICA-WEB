import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Informatica } from "@/pages/Informatica";
import { TelefoniaIP } from "@/pages/TelefoniaIP";
import { Software } from "@/pages/Software";
import { Energia } from "@/pages/Energia";
import { Contacto } from "@/pages/Contacto";
import { AvisoLegal } from "@/pages/AvisoLegal";
import { Privacidad } from "@/pages/Privacidad";
import { Cookies } from "@/pages/Cookies";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/telefonia-ip" element={<TelefoniaIP />} />
        <Route path="/software" element={<Software />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-de-privacidad" element={<Privacidad />} />
        <Route path="/politica-de-cookies" element={<Cookies />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

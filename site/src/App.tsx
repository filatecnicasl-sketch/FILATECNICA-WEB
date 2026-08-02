import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Informatica } from "@/pages/Informatica";
import { TelefoniaIP } from "@/pages/TelefoniaIP";
import { Software } from "@/pages/Software";
import { NexosProPage } from "@/pages/NexosProPage";
import { Energia } from "@/pages/Energia";
import { Contacto } from "@/pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/telefonia-ip" element={<TelefoniaIP />} />
        <Route path="/software" element={<Software />} />
        <Route path="/nexospro" element={<NexosProPage />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

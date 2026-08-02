import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Nav } from "@/sections/Nav";
import { Footer } from "@/sections/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

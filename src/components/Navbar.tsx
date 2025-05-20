import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Navbar completamente responsive che non sovrappone il contenuto.
 * ‣ Breakpoint mobile <→ desktop (md: 768 px)
 * ‣ Menu mobile con slide-down + blocco scroll sotto
 * ‣ Calcolo dinamico dell’altezza per inserire uno *spacer* che spinga il contenuto in basso
 * ‣ Accessibilità migliorata (aria-label, aria-hidden, pointer-events)
 */

const links = ["about", "experience", "skills", "portfolio", "contact"] as const;

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* ----------  EFFECTS  ---------- */
  // evidenzia background dopo scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // blocca/riattiva lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // calcola dinamicamente l’altezza della navbar per evitare sovrapposizioni
  useEffect(() => {
    const setHeightVar = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    setHeightVar();
    window.addEventListener("resize", setHeightVar);
    return () => window.removeEventListener("resize", setHeightVar);
  }, []);

  /* ----------  HELPERS  ---------- */
  const navLink = (id: typeof links[number]) => (
    <a
      key={id}
      href={`#${id}`}
      className="hover:text-pink-dark transition-colors"
      onClick={() => setMobileOpen(false)}
    >
      {t(`nav.${id}`)}
    </a>
  );

  /* ----------  RENDER  ---------- */
  return (
    <>
      {/* Navbar fixed */}
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-offwhite/95 backdrop-blur shadow-sm" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          {/* Brand */}
          <a
            href="#"
            className="font-playfair text-xl font-medium md:text-2xl lg:text-3xl"
          >
            Barbara&nbsp;Chertier
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <div className="flex gap-8 lg:gap-10">{links.map(navLink)}</div>
            <div className="h-6 border-l border-gray-300" />
            <LanguageSwitcher />
          </div>

          {/* Burger */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
              onClick={() => setMobileOpen((o) => !o)}
              className="relative h-6 w-6"
            >
              {/* linee burger / X */}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 bg-foreground transition-transform",
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-foreground transition-opacity",
                  mobileOpen ? "opacity-0" : ""
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-foreground transition-transform",
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer (push del contenuto) */}
      <div aria-hidden className="h-[var(--nav-h)]" />

      {/* Overlay mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-offwhite/95 px-6 text-lg backdrop-blur transition-[transform,opacity] duration-300 md:hidden",
          mobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {links.map(navLink)}
      </div>
    </>
  );
};

export default Navbar;
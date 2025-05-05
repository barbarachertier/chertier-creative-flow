
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:py-5",
        isScrolled
          ? "bg-offwhite/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-playfair font-medium">
          Barbara Chertier
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-pink-dark transition-colors">
              {t('nav.about')}
            </a>
            <a href="#experience" className="hover:text-pink-dark transition-colors">
              {t('nav.experience')}
            </a>
            <a href="#skills" className="hover:text-pink-dark transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#portfolio" className="hover:text-pink-dark transition-colors">
              {t('nav.portfolio')}
            </a>
            <a href="#contact" className="hover:text-pink-dark transition-colors">
              {t('nav.contact')}
            </a>
          </div>
          
          <div className="h-6 border-l border-gray-300 mx-2"></div>
          
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span
                className={cn(
                  "h-0.5 bg-foreground transition-all",
                  mobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
                )}
              ></span>
              <span
                className={cn(
                  "h-0.5 bg-foreground transition-all",
                  mobileMenuOpen ? "opacity-0" : "w-4"
                )}
              ></span>
              <span
                className={cn(
                  "h-0.5 bg-foreground transition-all",
                  mobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-offwhite/95 backdrop-blur-sm z-40 pt-24 px-6 flex flex-col items-center transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center space-y-6 text-lg">
          <a
            href="#about"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.about')}
          </a>
          <a
            href="#experience"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.experience')}
          </a>
          <a
            href="#skills"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.skills')}
          </a>
          <a
            href="#portfolio"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.portfolio')}
          </a>
          <a
            href="#contact"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

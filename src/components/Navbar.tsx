
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="hidden md:flex space-x-10">
          <a href="#about" className="hover:text-pink-dark transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-pink-dark transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-pink-dark transition-colors">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-pink-dark transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-pink-dark transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
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
            About
          </a>
          <a
            href="#experience"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-pink-dark transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

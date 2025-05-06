
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MouseLightEffect from "@/components/MouseLightEffect";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  // Enhanced scroll reveal functionality with staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay based on the element's index within its parent
            const delay = 100; // Base delay in ms
            const childElements = entry.target.querySelectorAll('.stagger-item');
            
            // Add staggered reveal to child elements if present
            if (childElements.length > 0) {
              childElements.forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('revealed');
                }, delay * i);
              });
            }
            
            // Reveal the parent element
            entry.target.classList.add('revealed');
            
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    scrollElements.forEach((el) => observer.observe(el));

    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Set document title based on language
  useEffect(() => {
    document.title = language === 'en' 
      ? 'Barbara Chertier | Creative Digital Communication Specialist' 
      : 'Barbara Chertier | Spécialiste en Communication Digitale Créative';
  }, [language]);

  return (
    <div className="min-h-screen relative">
      {/* Add mouse light effect */}
      <MouseLightEffect />
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

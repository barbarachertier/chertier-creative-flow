
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FCE4EC] to-[#FFF8F5]" />
      
      {/* Hero Content - Two-column layout */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col max-w-xl order-2 lg:order-1">
          <h1 
            className={`text-4xl md:text-5xl font-playfair font-medium text-[#4A4A4A] mb-6 
              transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            {t('hero.greeting')} <span className="inline-block animate-bounce ml-2">👋</span>
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-300 ease-out
              ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            {t('hero.title')}
          </p>
          <div 
            className={`transition-all duration-1000 delay-500 ease-out
              ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <Button 
              className="px-8 py-6 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 hover:from-pink-300 hover:to-pink-400 text-white font-medium text-lg transform transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
        
        {/* Right Column - Portrait Image (using the green background image) */}
        <div className={`flex justify-center items-center order-1 lg:order-2 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative rounded-full overflow-hidden shadow-xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img 
              src="/lovable-uploads/f105f36c-6519-44b3-8d47-6381c3642ac7.png" 
              alt="Barbara Chertier" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">{t('hero.scroll')}</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

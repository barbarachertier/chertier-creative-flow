
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Background Image - placeholder for now, replace with Barbara's portrait */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] 
          bg-cover bg-center bg-no-repeat opacity-90"
          style={{ 
            filter: 'grayscale(0.2) brightness(0.9)' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-beige-light/80" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-offwhite mb-6 
              transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            Barbara Chertier
          </h1>
          <p 
            className={`text-xl md:text-2xl text-offwhite/90 max-w-lg transition-all duration-1000 delay-300 ease-out
              ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            Creative Digital Communication Specialist
          </p>
          <div 
            className={`mt-10 transition-all duration-1000 delay-500 ease-out
              ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <a 
              href="#about" 
              className="inline-block px-8 py-3 border border-offwhite text-offwhite hover:bg-offwhite/10 transition-colors rounded-md"
            >
              Discover My Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-offwhite"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

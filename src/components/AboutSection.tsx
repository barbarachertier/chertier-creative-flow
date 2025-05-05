
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-offwhite">
      <div 
        ref={sectionRef} 
        className="section-container grid md:grid-cols-2 gap-12 items-center"
      >
        {/* About Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <span className="text-pink-dark font-medium">About Me</span>
          <h2 className="section-title mt-2">Creative Vision, Digital Expertise</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              As a passionate communication specialist based in Bessan, France, I blend creative design with strategic digital marketing to create compelling stories and impactful campaigns.
            </p>
            <p className="text-muted-foreground">
              With extensive experience in graphic design, video production, and community management, I help brands connect with their audiences through authentic storytelling and beautiful visuals.
            </p>
            <p className="text-muted-foreground">
              My approach combines artistic vision with analytical thinking, allowing me to develop communications that are both creative and effective.
            </p>
          </div>
          
          {/* Signature element */}
          <div className="mt-8">
            <span className="font-['Dancing_Script'] text-2xl text-primary">Barbara Chertier</span>
          </div>
        </div>
        
        {/* Image */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-light"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3" 
              alt="Barbara Chertier" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-pink-DEFAULT"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

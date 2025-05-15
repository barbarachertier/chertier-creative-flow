import { useEffect, useRef, useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

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
          <span className="text-pink-dark font-medium">{t('about.subtitle')}</span>
          <h2 className="section-title mt-2">{t('about.title')}</h2>
          <div className="space-y-4">
            {t('about.bio').split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <p className="text-muted-foreground font-medium mt-4">
              {t('about.languages')}
            </p>
          </div>
          
          {/* Signature element */}
          <div className="mt-8">
            <span className="font-['Dancing_Script'] text-2xl text-primary">Barbara Chertier</span>
          </div>
        </div>
        
        {/* Image - Updated with new image */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-light"></div>
            <img 
              src="/lovable-uploads/photo-barbarachertier.png" 
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

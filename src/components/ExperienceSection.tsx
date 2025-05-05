
import { useState, useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Digital Communication Manager",
    company: "Creative Agency",
    period: "2020 - Present",
    description: "Led digital strategy across multiple platforms, coordinated social media campaigns, and managed a team of content creators. Increased client engagement by 45% through innovative campaign approaches."
  },
  {
    id: 2,
    role: "Video Production Specialist",
    company: "Media Studio",
    period: "2018 - 2020",
    description: "Directed and produced promotional videos, created motion graphics, and edited content for corporate clients and social media. Specialized in storytelling through visual media."
  },
  {
    id: 3,
    role: "Graphic Designer",
    company: "Design Collective",
    period: "2016 - 2018",
    description: "Developed brand identities, designed marketing materials, and created visual content for print and digital media. Collaborated with clients to translate concepts into compelling visual solutions."
  },
  {
    id: 4,
    role: "Community Manager",
    company: "Tech Startup",
    period: "2015 - 2016",
    description: "Managed social media presence, created engaging content, and built online communities. Implemented SEO strategies that increased organic traffic by 60%."
  }
];

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);
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

  const selectedExperience = experiences.find((exp) => exp.id === activeExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 bg-beige-light">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-gold-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Professional Journey</span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Experience</h2>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience Timeline */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-5 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-green-light/50 md:before:ml-[7.5rem]">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={cn(
                    "relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-4",
                    activeExperience === exp.id ? "md:opacity-100" : "md:opacity-70"
                  )}
                >
                  <div className="md:col-span-2 md:text-right md:pr-10">
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  
                  <div className="flex flex-col md:col-span-3">
                    <div 
                      className={cn(
                        "absolute left-0 md:left-auto md:right-full md:mr-[2.2rem] flex items-center justify-center mt-1.5 w-4 h-4 rounded-full border cursor-pointer transition-all",
                        activeExperience === exp.id 
                          ? "bg-green-DEFAULT border-green-dark" 
                          : "bg-beige-light border-green-light hover:bg-green-light"
                      )}
                      onClick={() => setActiveExperience(exp.id)}
                    />
                    <h3 
                      className={cn(
                        "text-lg font-medium transition-colors cursor-pointer",
                        activeExperience === exp.id 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => setActiveExperience(exp.id)}
                    >
                      {exp.role}
                    </h3>
                    <span className="text-muted-foreground">{exp.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Details */}
          <div className={`md:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-offwhite p-6 lg:p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-light w-10 h-10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{selectedExperience.role}</h3>
                  <p className="text-sm text-muted-foreground">{selectedExperience.company}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-muted-foreground">
                  {selectedExperience.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

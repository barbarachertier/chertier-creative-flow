
import { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from "@/contexts/LanguageContext";
import { Tab } from '@headlessui/react';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // 0 for Experience, 1 for Education
  const [selectedExperience, setSelectedExperience] = useState<number>(1);
  const [selectedEducation, setSelectedEducation] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  const experiences: Experience[] = [
    {
      id: 1,
      role: language === 'en' ? "Communication Specialist" : "Spécialiste en Communication",
      company: "STORViX",
      location: "Lund, Sweden",
      period: language === 'en' ? "December 2024 - May 2025" : "Décembre 2024 - Mai 2025",
      description: language === 'en' ? [
        "Creation of promotional videos (After Effects, CapCut, Premiere Pro) to increase brand visibility",
        "Content writing for blogs and social media, promoting engagement and growth",
        "Design of marketing materials and client presentations (Canva, Photoshop, PowerPoint)",
        "SEO optimization of sites and social networks via WordPress and advanced SEO tools"
      ] : [
        "Création de vidéos promotionnelles (After Effects, CapCut, Premiere Pro) pour accroître la visibilité de la marque",
        "Rédaction de contenu pour les blogs et les réseaux sociaux, favorisant l'engagement et la croissance",
        "Conception de supports marketing et de présentations clients (Canva, Photoshop, PowerPoint)",
        "Optimisation SEO des sites et réseaux sociaux via WordPress et outils SEO avancés"
      ]
    },
    {
      id: 2,
      role: language === 'en' ? "Communication Manager Apprentice" : "Apprentie Chargée de Communication",
      company: "Doomli",
      location: "Montpellier, France",
      period: language === 'en' ? "January 2023 - October 2023" : "Janvier 2023 - Octobre 2023",
      description: language === 'en' ? [
        "Development of content strategies for social networks, improving community engagement and brand awareness",
        "Writing and publishing SEO blog articles and press releases",
        "Creation of visuals for events, posters, flyers, and digital media",
        "Support for event coordination and marketing activities"
      ] : [
        "Élaboration de stratégies de contenu pour les réseaux sociaux, amélioration de l'engagement communautaire et de la notoriété de la marque",
        "Rédaction et publication d'articles de blog SEO et de communiqués de presse",
        "Création de visuels pour des événements, affiches, flyers et supports digitaux",
        "Soutien à la coordination d'événements et aux activités marketing"
      ]
    },
    {
      id: 3,
      role: language === 'en' ? "Content Marketing Communication Internship" : "Alternance Content Marketing Communication",
      company: "Windelo Catamaran",
      location: "Canet-en-Roussillon, France",
      period: language === 'en' ? "October 2021 - September 2022" : "Octobre 2021 - Septembre 2022",
      description: language === 'en' ? [
        "Social media management in line with the company's marketing objectives",
        "Website updates (WordPress), integration of SEO techniques",
        "Newsletter writing via Sendiblue to improve engagement rates",
        "Creation of press releases, brochures and other communication materials"
      ] : [
        "Gestion des réseaux sociaux en lien avec les objectifs marketing de l'entreprise",
        "Mise à jour du site internet (WordPress), intégration de techniques SEO",
        "Rédaction de newsletters via Sendiblue pour améliorer les taux d'engagement",
        "Création de communiqués de presse, brochures et autres supports de communication"
      ]
    },
    {
      id: 4,
      role: language === 'en' ? "Communication Intern" : "Stagiaire chargée de communication",
      company: language === 'en' ? "City Hall" : "Mairie",
      location: "Bessan, France",
      period: language === 'en' ? "January 2021 - February 2021" : "Janvier 2021 - Février 2021",
      description: language === 'en' ? [
        "Creation of visual content for the city's communication channels",
        "Social media and website management for real-time updates",
        "Writing press articles for local media"
      ] : [
        "Création de contenu visuel pour les canaux de communication de la ville",
        "Gestion des réseaux sociaux et du site web pour des mises à jour en temps réel",
        "Rédaction d'articles de presse destinés aux médias locaux"
      ]
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: language === 'en' ? "UX/UI Design Training" : "Formation UX/UI Design",
      institution: "Ellipse Formation",
      location: "Paris, France",
      period: language === 'en' ? "February 2024" : "Février 2024",
      description: []
    },
    {
      id: 2,
      degree: language === 'en' ? "Master Information and Communication" : "Master Information et Communication",
      institution: language === 'en' ? "Paul Valéry University" : "Université Paul Valéry",
      location: "Montpellier, France",
      period: "2021 - 2023",
      description: language === 'en' ? [
        "Specialty: Digital Communication and Organization",
        "With honors"
      ] : [
        "Spécialité Communication Digitale et Organisation",
        "Mention Bien"
      ]
    },
    {
      id: 3,
      degree: language === 'en' ? "Bachelor of Information and Communication" : "Licence Information et Communication",
      institution: language === 'en' ? "Paul Valéry University" : "Université Paul Valéry",
      location: "Montpellier, France",
      period: "2018 - 2021",
      description: language === 'en' ? [
        "With honors"
      ] : [
        "Mention bien"
      ]
    }
  ];

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

  const activeExperience = experiences.find((exp) => exp.id === selectedExperience) || experiences[0];
  const activeEducation = education.find((edu) => edu.id === selectedEducation) || education[0];

  return (
    <section id="experience" className="py-20 bg-pink-light/30">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{t('experience.subtitle')}</span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{t('experience.title')}</h2>
        
        <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Tab.Group selectedIndex={selectedCategory} onChange={setSelectedCategory}>
            <Tab.List className="flex space-x-4 border-b border-gray-200 mb-8">
              <Tab className={({ selected }) => cn(
                'px-4 py-2 font-medium outline-none',
                selected 
                  ? 'text-pink-dark border-b-2 border-pink-dark' 
                  : 'text-gray-500 hover:text-pink-DEFAULT hover:border-b-2 hover:border-pink-light'
              )}>
                {t('exp.title')}
              </Tab>
              <Tab className={({ selected }) => cn(
                'px-4 py-2 font-medium outline-none',
                selected 
                  ? 'text-pink-dark border-b-2 border-pink-dark' 
                  : 'text-gray-500 hover:text-pink-DEFAULT hover:border-b-2 hover:border-pink-light'
              )}>
                {t('edu.title')}
              </Tab>
            </Tab.List>
            
            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-8 grid md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Experience Timeline */}
                  <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="space-y-5 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-pink-light md:before:ml-[7.5rem]">
                      {experiences.map((exp) => (
                        <div
                          key={exp.id}
                          className={cn(
                            "relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-4",
                            selectedExperience === exp.id ? "md:opacity-100" : "md:opacity-70"
                          )}
                        >
                          <div className="md:col-span-2 md:text-right md:pr-10">
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          
                          <div className="flex flex-col md:col-span-3">
                            <div 
                              className={cn(
                                "absolute left-0 md:left-auto md:right-full md:mr-[2.2rem] flex items-center justify-center mt-1.5 w-4 h-4 rounded-full border cursor-pointer transition-all",
                                selectedExperience === exp.id 
                                  ? "bg-pink-DEFAULT border-pink-dark" 
                                  : "bg-offwhite border-pink-light hover:bg-pink-light"
                              )}
                              onClick={() => setSelectedExperience(exp.id)}
                            />
                            <h3 
                              className={cn(
                                "text-lg font-medium transition-colors cursor-pointer",
                                selectedExperience === exp.id 
                                  ? "text-primary" 
                                  : "text-muted-foreground hover:text-primary"
                              )}
                              onClick={() => setSelectedExperience(exp.id)}
                            >
                              {exp.role}
                            </h3>
                            <span className="text-muted-foreground">{exp.company}, {exp.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className={`md:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-offwhite p-6 lg:p-8 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{activeExperience.role}</h3>
                          <p className="text-sm text-muted-foreground">{activeExperience.company}, {activeExperience.location}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <ul className="space-y-2">
                          {activeExperience.description.map((item, index) => (
                            <li key={index} className="text-muted-foreground flex items-start">
                              <span className="text-pink-dark mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              
              <Tab.Panel>
                <div className="mt-8 grid md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Education Timeline */}
                  <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="space-y-5 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-pink-light md:before:ml-[7.5rem]">
                      {education.map((edu) => (
                        <div
                          key={edu.id}
                          className={cn(
                            "relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-4",
                            selectedEducation === edu.id ? "md:opacity-100" : "md:opacity-70"
                          )}
                        >
                          <div className="md:col-span-2 md:text-right md:pr-10">
                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                          </div>
                          
                          <div className="flex flex-col md:col-span-3">
                            <div 
                              className={cn(
                                "absolute left-0 md:left-auto md:right-full md:mr-[2.2rem] flex items-center justify-center mt-1.5 w-4 h-4 rounded-full border cursor-pointer transition-all",
                                selectedEducation === edu.id 
                                  ? "bg-pink-DEFAULT border-pink-dark" 
                                  : "bg-offwhite border-pink-light hover:bg-pink-light"
                              )}
                              onClick={() => setSelectedEducation(edu.id)}
                            />
                            <h3 
                              className={cn(
                                "text-lg font-medium transition-colors cursor-pointer",
                                selectedEducation === edu.id 
                                  ? "text-primary" 
                                  : "text-muted-foreground hover:text-primary"
                              )}
                              onClick={() => setSelectedEducation(edu.id)}
                            >
                              {edu.degree}
                            </h3>
                            <span className="text-muted-foreground">{edu.institution}, {edu.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education Details */}
                  <div className={`md:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-offwhite p-6 lg:p-8 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{activeEducation.degree}</h3>
                          <p className="text-sm text-muted-foreground">{activeEducation.institution}, {activeEducation.location}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        {activeEducation.description.length > 0 && (
                          <ul className="space-y-2">
                            {activeEducation.description.map((item, index) => (
                              <li key={index} className="text-muted-foreground flex items-start">
                                <span className="text-pink-dark mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

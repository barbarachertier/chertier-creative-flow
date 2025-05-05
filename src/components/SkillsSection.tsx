
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  id: number;
  name: string;
  proficiency: number;
  category: string;
}

const SkillsSection = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const skills: Skill[] = [
    {
      id: 1,
      name: language === 'en' ? "Teamwork" : "Travail en équipe",
      proficiency: 100,
      category: "teamwork"
    },
    {
      id: 2,
      name: language === 'en' ? "Social Media Management" : "Gestion des réseaux sociaux",
      proficiency: 90,
      category: "social"
    },
    {
      id: 3,
      name: language === 'en' ? "Data Analysis" : "Analyse de données",
      proficiency: 65,
      category: "data"
    },
    {
      id: 4,
      name: language === 'en' ? "Visual Creation" : "Création visuelle",
      proficiency: 80,
      category: "visual"
    },
    {
      id: 5,
      name: language === 'en' ? "Video Creation" : "Création vidéo",
      proficiency: 80,
      category: "video"
    },
    {
      id: 6,
      name: "SEO",
      proficiency: 70,
      category: "seo"
    },
    {
      id: 7,
      name: language === 'en' ? "Content Writing" : "Rédaction de contenu",
      proficiency: 80,
      category: "writing"
    },
    {
      id: 8,
      name: "Adobe Creative Suite",
      proficiency: 85,
      category: "tools"
    },
    {
      id: 9,
      name: language === 'en' ? "Marketing Strategy" : "Stratégie Marketing",
      proficiency: 75,
      category: "marketing"
    }
  ];

  const categories = [
    { id: "all", name: t('skills.category.all') },
    { id: "teamwork", name: t('skills.category.teamwork') },
    { id: "social", name: t('skills.category.social') },
    { id: "data", name: t('skills.category.data') },
    { id: "visual", name: t('skills.category.visual') },
    { id: "video", name: t('skills.category.video') },
    { id: "seo", name: t('skills.category.seo') },
    { id: "writing", name: t('skills.category.writing') },
  ];

  // Filter skills when category changes
  useEffect(() => {
    // Reset animated skills when category changes
    setAnimatedSkills([]);
    
    const filteredSkills = selectedCategory === "all" 
      ? skills 
      : skills.filter(skill => skill.category === selectedCategory);
    
    setVisibleSkills(filteredSkills);
    
    // Clear any existing animation interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // If section is already visible, start animating the new skills
    if (isVisible && filteredSkills.length > 0) {
      startSkillsAnimation(filteredSkills);
    }
  }, [selectedCategory, language]);

  // Handle section visibility
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

  // Start animation when section becomes visible
  useEffect(() => {
    if (isVisible && visibleSkills.length > 0) {
      startSkillsAnimation(visibleSkills);
    }
    
    return () => {
      // Clean up interval on unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, visibleSkills]);

  // Helper function to start skills animation
  const startSkillsAnimation = (skills: Skill[]) => {
    // Clean up any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Wait a little before starting animation
    const timer = setTimeout(() => {
      let delay = 0;
      
      // Safely animate skills one by one
      intervalRef.current = setInterval(() => {
        if (delay < skills.length) {
          const skillId = skills[delay].id;
          setAnimatedSkills(prev => [...prev, skillId]);
          delay++;
        } else {
          // Clear interval once all skills are animated
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, 200);
    }, 400);
    
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  };

  return (
    <section id="skills" className="py-20 bg-beige-light">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{t('skills.subtitle')}</span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{t('skills.title')}</h2>
        
        {/* Categories filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                selectedCategory === category.id
                  ? "bg-pink-DEFAULT text-primary-foreground"
                  : "bg-offwhite hover:bg-pink-light text-muted-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill) => (
            <div 
              key={skill.id}
              className={`bg-offwhite rounded-lg p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + skill.id * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-pink-dark" />
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium">{skill.proficiency}%</span>
              </div>
              
              <div className="h-2 bg-beige-light rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-DEFAULT to-pink-dark transition-all duration-1000 ease-out"
                  style={{ 
                    width: animatedSkills.includes(skill.id) ? `${skill.proficiency}%` : '0%' 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

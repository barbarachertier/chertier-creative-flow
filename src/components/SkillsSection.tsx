
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Skill {
  id: number;
  name: string;
  proficiency: number;
  category: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Graphic Design",
    proficiency: 95,
    category: "design"
  },
  {
    id: 2,
    name: "Video Production",
    proficiency: 90,
    category: "production"
  },
  {
    id: 3,
    name: "Adobe Creative Suite",
    proficiency: 90,
    category: "tools"
  },
  {
    id: 4,
    name: "Social Media Strategy",
    proficiency: 85,
    category: "marketing"
  },
  {
    id: 5,
    name: "Content Writing",
    proficiency: 80,
    category: "content"
  },
  {
    id: 6,
    name: "SEO",
    proficiency: 75,
    category: "marketing"
  },
  {
    id: 7,
    name: "Motion Graphics",
    proficiency: 85,
    category: "design"
  },
  {
    id: 8,
    name: "Community Management",
    proficiency: 90,
    category: "marketing"
  },
  {
    id: 9,
    name: "Digital Marketing",
    proficiency: 85,
    category: "marketing"
  }
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "content", name: "Content" },
  { id: "tools", name: "Tools" },
  { id: "production", name: "Production" },
];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>(skills);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    if (isVisible) {
      startSkillsAnimation(filteredSkills);
    }
  }, [selectedCategory]);

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
    if (isVisible) {
      startSkillsAnimation(visibleSkills);
    }
    
    return () => {
      // Clean up interval on unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

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
    <section id="skills" className="py-20 bg-green-light/30">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-gold-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Expertise</span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Skills & Proficiencies</h2>
        
        {/* Categories filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                selectedCategory === category.id
                  ? "bg-green-DEFAULT text-primary"
                  : "bg-beige-light hover:bg-green-light text-muted-foreground"
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
                  <div className="bg-gold-light w-10 h-10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold-dark" />
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium">{skill.proficiency}%</span>
              </div>
              
              <div className="h-2 bg-beige-light rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-dark to-gold-dark transition-all duration-1000 ease-out"
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

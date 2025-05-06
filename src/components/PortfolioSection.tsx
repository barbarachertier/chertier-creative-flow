
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { ArrowRight, Image, Video, Layout, Palette, Smartphone, FileText, Pen, Folder } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  coverImage?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

const PortfolioSection = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories: Category[] = [
    { 
      id: "all", 
      name: t('portfolio.category.all'),
      icon: <Layout className="w-5 h-5" />
    },
    { 
      id: "video", 
      name: t('portfolio.category.video'),
      icon: <Video className="w-5 h-5" />,
      coverImage: "/lovable-uploads/ed311d7e-00fe-4aca-b901-4b84d532eed8.png"
    },
    { 
      id: "logo", 
      name: t('portfolio.category.logo'),
      icon: <Image className="w-5 h-5" />,
      coverImage: "/lovable-uploads/4cfad69e-a457-46a8-948d-b9230a870d8f.png"
    },
    { 
      id: "print", 
      name: t('portfolio.category.print'),
      icon: <FileText className="w-5 h-5" />,
      coverImage: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png"
    },
    { 
      id: "bigprojects", 
      name: t('portfolio.category.bigprojects'),
      icon: <Folder className="w-5 h-5" />,
      coverImage: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png"
    },
    { 
      id: "motion", 
      name: t('portfolio.category.motion'),
      icon: <Video className="w-5 h-5" />,
      coverImage: "/lovable-uploads/ed311d7e-00fe-4aca-b901-4b84d532eed8.png"
    },
    { 
      id: "ux", 
      name: t('portfolio.category.ux'),
      icon: <Smartphone className="w-5 h-5" />,
      coverImage: "/lovable-uploads/2824f814-bcd0-43e2-8037-8081d710ad0a.png"
    },
    { 
      id: "social", 
      name: t('portfolio.category.social'),
      icon: <Pen className="w-5 h-5" />,
      coverImage: "/lovable-uploads/09297029-307e-48b4-8690-e7f78fc6316a.png"
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: language === 'en' ? "Doomli Branding" : "Image de marque Doomli",
      description: language === 'en' ? "Complete branding and marketing materials for a mobile dog grooming service." : "Image de marque complète et supports marketing pour un service mobile de toilettage canin.",
      category: "logo",
      image: "/lovable-uploads/b51fcd75-4628-4a5a-9f9b-a8d4935922b5.png",
      type: "image"
    },
    {
      id: 2,
      title: language === 'en' ? "Doomli Vehicle Design" : "Design véhicule Doomli",
      description: language === 'en' ? "Complete vehicle wrap design for the mobile dog grooming service Doomli." : "Design complet d'habillage de véhicule pour le service mobile de toilettage canin Doomli.",
      category: "bigprojects",
      image: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png",
      type: "image"
    },
    {
      id: 3,
      title: language === 'en' ? "Plantnet App Poster" : "Affiche application Plantnet",
      description: language === 'en' ? "Promotional poster design for the Plantnet plant identification application." : "Conception d'affiche promotionnelle pour l'application d'identification de plantes Plantnet.",
      category: "print",
      image: "/lovable-uploads/c5c88852-a236-4fa2-a485-d25f3f342642.png",
      type: "image"
    },
    {
      id: 4,
      title: language === 'en' ? "5 Etoiles Luxury Rentals" : "5 Étoiles Locations de Luxe",
      description: language === 'en' ? "Business card and branding design for a luxury vacation rental company." : "Conception de carte de visite et d'image de marque pour une entreprise de location de vacances de luxe.",
      category: "print",
      image: "/lovable-uploads/82366a6d-2181-41b8-bc29-cdcc6ff88927.png",
      type: "image"
    },
    {
      id: 5,
      title: language === 'en' ? "Social Media Campaign" : "Campagne sur les réseaux sociaux",
      description: language === 'en' ? "Series of advertisements for Doomli's social media channels, highlighting the service's unique value proposition." : "Série de publicités pour les canaux de médias sociaux de Doomli, mettant en évidence la proposition de valeur unique du service.",
      category: "social",
      image: "/lovable-uploads/09297029-307e-48b4-8690-e7f78fc6316a.png",
      type: "image"
    },
    {
      id: 6,
      title: language === 'en' ? "ARC App UI Design" : "Design d'interface utilisateur pour l'application ARC",
      description: language === 'en' ? "User interface design for a social networking mobile application." : "Conception d'interface utilisateur pour une application mobile de réseautage social.",
      category: "ux",
      image: "/lovable-uploads/2824f814-bcd0-43e2-8037-8081d710ad0a.png",
      type: "image"
    },
    {
      id: 7,
      title: language === 'en' ? "Echo 2 Pros Magazine" : "Magazine Echo 2 Pros",
      description: language === 'en' ? "Editorial design and layout for a professional business magazine." : "Conception éditoriale et mise en page pour un magazine d'affaires professionnel.",
      category: "print",
      image: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
      type: "image"
    },
    {
      id: 8,
      title: language === 'en' ? "STORViX Company Infographic" : "Infographie d'entreprise STORViX",
      description: language === 'en' ? "Informational graphic explaining the company history and product offerings for a data storage company." : "Graphique informatif expliquant l'histoire de l'entreprise et les offres de produits pour une entreprise de stockage de données.",
      category: "print",
      image: "/lovable-uploads/a57a9b3b-ea4e-4350-b0ab-411ec7939505.png",
      type: "image"
    },
    {
      id: 9,
      title: language === 'en' ? "Baba au Rhum Logo Design" : "Design de logo Baba au Rhum",
      description: language === 'en' ? "Logo design for a pastry brand with a playful and elegant aesthetic." : "Conception de logo pour une marque de pâtisserie avec une esthétique ludique et élégante.",
      category: "logo",
      image: "/lovable-uploads/4cfad69e-a457-46a8-948d-b9230a870d8f.png",
      type: "image"
    }
  ];

  useEffect(() => {
    const filteredProjects = selectedCategory === "all" 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
    
    setVisibleProjects(filteredProjects);
  }, [selectedCategory, language]);

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

  // Get the selected category object
  const currentCategory = categories.find(category => category.id === selectedCategory) || categories[0];

  return (
    <section id="portfolio" className="py-20 bg-offwhite relative z-10">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.subtitle')}
        </span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.title')}
        </h2>
        
        {/* Categories filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all flex items-center gap-2 btn-hover",
                selectedCategory === category.id
                  ? "bg-pink-DEFAULT text-primary-foreground shadow-md"
                  : "bg-white hover:bg-pink-light text-muted-foreground"
              )}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Category header with description and cover image */}
        {selectedCategory !== 'all' && currentCategory.coverImage && (
          <div className="mb-10 bg-white rounded-lg overflow-hidden shadow-md hover-glow transition-all duration-300">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-3">{currentCategory.name}</h3>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? `Discover my ${currentCategory.name.toLowerCase()} projects showcasing creativity and professional expertise.`
                    : `Découvrez mes projets ${currentCategory.name.toLowerCase()} qui mettent en valeur ma créativité et mon expertise professionnelle.`}
                </p>
              </div>
              <div className="h-48 md:h-full">
                <div className="thumbnail-container w-full h-full">
                  <img 
                    src={currentCategory.coverImage} 
                    alt={currentCategory.name}
                    className="thumbnail w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Portfolio grid - enhanced with Card component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group portfolio-item border-0 overflow-hidden shadow-md hover-glow bg-white transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms`, aspectRatio: '4/3' }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-full cursor-pointer">
                  {/* Project image with hover effect */}
                  <div className="thumbnail-container w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="thumbnail w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="portfolio-overlay absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 p-4">
                    <h3 className="text-xl font-medium text-white mb-2 text-center">{project.title}</h3>
                    <p className="text-white/80 text-sm text-center mb-4 line-clamp-2">{project.description}</p>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20 hover:text-white mt-auto">
                      {language === 'en' ? "View Project" : "Voir le projet"} 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Video indicator */}
                  {project.type === 'video' && (
                    <div className="absolute bottom-3 right-3 bg-black/70 rounded-full p-2">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">
                {language === 'en'
                  ? "No projects in this category yet. Check back soon!"
                  : "Pas encore de projets dans cette catégorie. Revenez bientôt !"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project detail dialog - enhanced with better layout */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-white rounded-lg">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-20">
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
              className="h-4 w-4"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">{language === 'en' ? "Close" : "Fermer"}</span>
          </DialogClose>
          
          {selectedProject && (
            <div className="grid md:grid-cols-2">
              <div className="relative h-full min-h-[300px]">
                {selectedProject.type === 'image' ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '80vh' }}
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <p className="text-white">{language === 'en' ? "Video preview placeholder" : "Aperçu vidéo"}</p>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-medium font-playfair mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <div className="flex items-center gap-2 text-sm mt-auto">
                  <span className="bg-pink-light px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === selectedProject.category)?.name || selectedProject.category}
                  </span>
                </div>
                <Button className="mt-6 btn-hover self-start">
                  {language === 'en' ? "View Full Project" : "Voir le projet complet"}
                  <ArrowRight className="ml-1" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;

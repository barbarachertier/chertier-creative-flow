
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft, Image, Video, Layout, FileText, Folder, Smartphone, Pen, X } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
  coverImage?: string;
  bgColor?: string;
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

type NavigationLevel = 'categories' | 'projects' | 'detail';

const PortfolioSection = () => {
  const { t, language } = useLanguage();
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories: Category[] = [
    { 
      id: "video", 
      name: t('portfolio.category.video'),
      icon: <Video className="w-6 h-6" />,
      description: language === 'en' ? "Motion graphics and video editing projects showcasing dynamic visual storytelling." : "Projets de motion design et montage vidéo mettant en valeur une narration visuelle dynamique.",
      coverImage: "/lovable-uploads/ed311d7e-00fe-4aca-b901-4b84d532eed8.png",
      bgColor: "bg-pink-light"
    },
    { 
      id: "logo", 
      name: t('portfolio.category.logo'),
      icon: <Image className="w-6 h-6" />,
      description: language === 'en' ? "Brand identity projects featuring distinctive and memorable logo designs." : "Projets d'identité de marque présentant des designs de logo distinctifs et mémorables.",
      coverImage: "/lovable-uploads/4cfad69e-a457-46a8-948d-b9230a870d8f.png",
      bgColor: "bg-beige-light"
    },
    { 
      id: "print", 
      name: t('portfolio.category.print'),
      icon: <FileText className="w-6 h-6" />,
      description: language === 'en' ? "Print design work from editorial layouts to promotional materials." : "Travaux de design d'impression, des mises en page éditoriales aux supports promotionnels.",
      coverImage: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
      bgColor: "bg-green-light"
    },
    { 
      id: "bigprojects", 
      name: t('portfolio.category.bigprojects'),
      icon: <Folder className="w-6 h-6" />,
      description: language === 'en' ? "Comprehensive design solutions for large-scale projects and campaigns." : "Solutions de design complètes pour des projets et campagnes à grande échelle.",
      coverImage: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png",
      bgColor: "bg-gold-light"
    },
    { 
      id: "motion", 
      name: t('portfolio.category.motion'),
      icon: <Video className="w-6 h-6" />,
      description: language === 'en' ? "Animation and motion design projects creating dynamic visual experiences." : "Projets d'animation et de motion design créant des expériences visuelles dynamiques.",
      coverImage: "/lovable-uploads/ed311d7e-00fe-4aca-b901-4b84d532eed8.png",
      bgColor: "bg-pink-light"
    },
    { 
      id: "ux", 
      name: t('portfolio.category.ux'),
      icon: <Smartphone className="w-6 h-6" />,
      description: language === 'en' ? "User experience design focusing on intuitive and engaging interfaces." : "Design d'expérience utilisateur axé sur des interfaces intuitives et engageantes.",
      coverImage: "/lovable-uploads/2824f814-bcd0-43e2-8037-8081d710ad0a.png",
      bgColor: "bg-green-light"
    },
    { 
      id: "social", 
      name: t('portfolio.category.social'),
      icon: <Pen className="w-6 h-6" />,
      description: language === 'en' ? "Social media content creation and campaign designs." : "Création de contenu pour les réseaux sociaux et conceptions de campagnes.",
      coverImage: "/lovable-uploads/09297029-307e-48b4-8690-e7f78fc6316a.png",
      bgColor: "bg-beige-light"
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
    if (selectedCategory) {
      const filteredProjects = projects.filter(project => project.category === selectedCategory);
      setVisibleProjects(filteredProjects);
    }
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

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setNavigationLevel('projects');
    // Reset scroll position when changing categories
    window.scrollTo({
      top: sectionRef.current?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setNavigationLevel('detail');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setNavigationLevel('categories');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setNavigationLevel('projects');
  };

  const getCurrentCategory = () => {
    return categories.find(category => category.id === selectedCategory);
  };

  // Animated transition classes
  const getAnimationClasses = (level: NavigationLevel) => {
    if (level === navigationLevel) {
      return 'opacity-100 translate-y-0 scale-100';
    }
    return 'opacity-0 translate-y-8 scale-95 absolute inset-0 pointer-events-none';
  };

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
        
        {/* Navigation controls */}
        <div className={`flex items-center gap-4 mb-10 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {navigationLevel !== 'categories' && (
            <Button 
              variant="ghost" 
              onClick={navigationLevel === 'projects' ? handleBackToCategories : handleBackToProjects}
              className="flex items-center gap-2 btn-hover"
            >
              <ArrowLeft className="w-4 h-4" />
              {navigationLevel === 'projects' 
                ? (language === 'en' ? 'All Categories' : 'Toutes les catégories') 
                : (language === 'en' ? 'Back to Projects' : 'Retour aux projets')}
            </Button>
          )}
          
          {/* Breadcrumb */}
          {navigationLevel !== 'categories' && (
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="cursor-pointer hover:text-primary" onClick={handleBackToCategories}>
                {language === 'en' ? 'Portfolio' : 'Portfolio'}
              </span>
              {navigationLevel !== 'categories' && (
                <>
                  <span>/</span>
                  <span 
                    className={`${navigationLevel === 'detail' ? 'cursor-pointer hover:text-primary' : 'font-medium text-primary'}`}
                    onClick={navigationLevel === 'detail' ? handleBackToProjects : undefined}
                  >
                    {getCurrentCategory()?.name}
                  </span>
                </>
              )}
              {navigationLevel === 'detail' && selectedProject && (
                <>
                  <span>/</span>
                  <span className="font-medium text-primary">{selectedProject.title}</span>
                </>
              )}
            </div>
          )}
        </div>
        
        {/* Level 1 - Category Overview */}
        <div className={`relative transition-all duration-500 transform ${getAnimationClasses('categories')}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.id}
                className={`portfolio-item border-0 overflow-hidden shadow-md hover-glow ${category.bgColor || 'bg-white'} transition-all duration-700 cursor-pointer h-60`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`, 
                }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="relative w-full h-full p-6 flex flex-col">
                  {/* Category icon */}
                  <div className="mb-4 bg-white bg-opacity-70 w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                    {category.icon}
                  </div>
                  
                  {/* Category name */}
                  <h3 className="text-xl font-medium font-playfair mb-2">{category.name}</h3>
                  
                  {/* Category description */}
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {category.description || (language === 'en' 
                      ? `Discover my ${category.name.toLowerCase()} projects showcasing creativity and professional expertise.`
                      : `Découvrez mes projets ${category.name.toLowerCase()} qui mettent en valeur ma créativité et mon expertise professionnelle.`)}
                  </p>
                  
                  {/* Explore link */}
                  <div className="mt-auto flex items-center text-sm font-medium">
                    <span className="mr-1">{language === 'en' ? 'Explore Projects' : 'Explorer les projets'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                  {/* Background decoration */}
                  {category.coverImage && (
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <img 
                        src={category.coverImage} 
                        alt="" 
                        className="w-full h-full object-cover"
                        aria-hidden="true" 
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Level 2 - Projects Gallery */}
        <div className={`relative transition-all duration-500 transform ${getAnimationClasses('projects')}`}>
          {selectedCategory && (
            <>
              {/* Category header with description */}
              <div className="mb-10 bg-white rounded-lg overflow-hidden shadow-md hover-glow transition-all duration-300">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair mb-3">
                      {getCurrentCategory()?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {getCurrentCategory()?.description || (language === 'en' 
                        ? `Discover my ${getCurrentCategory()?.name.toLowerCase()} projects showcasing creativity and professional expertise.`
                        : `Découvrez mes projets ${getCurrentCategory()?.name.toLowerCase()} qui mettent en valeur ma créativité et mon expertise professionnelle.`)}
                    </p>
                  </div>
                  {getCurrentCategory()?.coverImage && (
                    <div className="h-48 md:h-full">
                      <div className="thumbnail-container w-full h-full">
                        <img 
                          src={getCurrentCategory()?.coverImage} 
                          alt={getCurrentCategory()?.name}
                          className="thumbnail w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Projects grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.length > 0 ? (
                  visibleProjects.map((project, index) => (
                    <Card 
                      key={project.id}
                      className={`group portfolio-item border-0 overflow-hidden shadow-md hover-glow bg-white transition-all duration-700`}
                      style={{ 
                        transitionDelay: `${200 + index * 100}ms`, 
                        aspectRatio: '4/3' 
                      }}
                      onClick={() => handleProjectClick(project)}
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
            </>
          )}
        </div>
        
        {/* Level 3 - Project Detail */}
        <div className={`relative transition-all duration-500 transform ${getAnimationClasses('detail')}`}>
          {selectedProject && (
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                {/* Large project image */}
                <div className="w-full h-[50vh] max-h-[500px] bg-muted">
                  {selectedProject.type === 'image' ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <span className="text-white">{language === 'en' ? "Video preview" : "Aperçu vidéo"}</span>
                    </div>
                  )}
                </div>
                
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                  onClick={handleBackToProjects}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Project details */}
              <div className="p-6">
                <h3 className="text-2xl font-medium font-playfair mb-4">{selectedProject.title}</h3>
                
                <div className="bg-muted p-4 rounded-md mb-6">
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 items-center mb-6">
                  <span className="text-sm text-muted-foreground">{language === 'en' ? 'Category:' : 'Catégorie:'}</span>
                  <span className="bg-pink-light px-3 py-1 rounded-full text-sm">
                    {categories.find(cat => cat.id === selectedProject.category)?.name || selectedProject.category}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 items-center mb-6">
                  <span className="text-sm text-muted-foreground">{language === 'en' ? 'Tools:' : 'Outils:'}</span>
                  <span className="bg-beige-light px-3 py-1 rounded-full text-sm">Adobe Illustrator</span>
                  <span className="bg-beige-light px-3 py-1 rounded-full text-sm">Adobe Photoshop</span>
                </div>
                
                <Button className="mt-4 btn-hover">
                  {language === 'en' ? "View Full Project" : "Voir le projet complet"}
                  <ArrowRight className="ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;

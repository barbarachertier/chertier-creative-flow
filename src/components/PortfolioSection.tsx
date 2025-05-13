
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { NavigationLevel, Project } from './portfolio/types';
import { getCategories, getProjects } from './portfolio/portfolioData';
import CategoriesView from './portfolio/CategoriesView';
import CategoryHeader from './portfolio/CategoryHeader';
import ProjectsGrid from './portfolio/ProjectsGrid';
import ProjectDetailView from './portfolio/ProjectDetailView';
import PortfolioNavigation from './portfolio/PortfolioNavigation';

const PortfolioSection = () => {
  const { t, language } = useLanguage();
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const categories = getCategories(t, language);
  const projects = getProjects(language);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProjects = projects.filter(project => project.category === selectedCategory);
      setVisibleProjects(filteredProjects);
    }
  }, [selectedCategory, language, projects]);

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
    // Save current scroll position before changing view
    setScrollPosition(window.scrollY);
    setSelectedCategory(categoryId);
    setNavigationLevel('projects');
  };

  const handleProjectClick = (project: Project) => {
    // Save the current scroll position within the projects view
    setScrollPosition(window.scrollY);
    setSelectedProject(project);
    setNavigationLevel('detail');
  };

  const handleBackToCategories = () => {
    // Restore to initial categories view without forcing scroll position
    setSelectedCategory(null);
    setNavigationLevel('categories');
  };

  const handleBackToProjects = () => {
    // Return to projects view without forcing scroll position
    setSelectedProject(null);
    setNavigationLevel('projects');
    
    // Use a small timeout to ensure the DOM has updated before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'instant'
      });
    }, 10);
  };

  const getCurrentCategory = () => {
    return categories.find(category => category.id === selectedCategory) || null;
  };

  // Get animation classes for view transitions
  const getAnimationClasses = (level: NavigationLevel) => {
    if (level === navigationLevel) {
      return 'opacity-100 translate-y-0 scale-100';
    }
    return 'opacity-0 translate-y-8 scale-95 absolute inset-0 pointer-events-none';
  };

  return (
    <section id="portfolio" className="py-8 bg-offwhite relative z-10">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.subtitle')}
        </span>
        <h2 className={`section-title mt-2 mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.title')}
        </h2>
        
        {/* Navigation controls */}
        <PortfolioNavigation 
          navigationLevel={navigationLevel}
          handleBackToCategories={handleBackToCategories}
          handleBackToProjects={handleBackToProjects}
          isVisible={isVisible}
          selectedCategory={selectedCategory}
          selectedProjectTitle={selectedProject?.title}
          getCurrentCategory={getCurrentCategory}
          language={language}
        />
        
        {/* Level 1 - Category Overview */}
        <div className={`relative transition-all duration-500 transform ${getAnimationClasses('categories')}`}>
          <CategoriesView 
            categories={categories}
            isVisible={isVisible}
            handleCategoryClick={handleCategoryClick}
            language={language}
          />
        </div>
        
        {/* Level 2 - Projects Gallery */}
        <div 
          ref={projectsContainerRef}
          className={`relative transition-all duration-500 transform ${getAnimationClasses('projects')}`}
        >
          {selectedCategory && getCurrentCategory() && (
            <>
              {/* Category header with description */}
              <CategoryHeader 
                category={getCurrentCategory()!}
                language={language}
              />
              
              {/* Projects grid */}
              <ProjectsGrid 
                projects={visibleProjects}
                handleProjectClick={handleProjectClick}
                language={language}
              />
            </>
          )}
        </div>
        
        {/* Level 3 - Project Detail */}
        <div className={`relative transition-all duration-500 transform ${getAnimationClasses('detail')}`}>
          {selectedProject && (
            <ProjectDetailView 
              project={selectedProject}
              handleBackToProjects={handleBackToProjects}
              language={language}
              categories={categories}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

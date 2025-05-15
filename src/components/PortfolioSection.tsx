
import CategoryIntro from './CategoryIntro';
import ProjectGallery from './ProjectGallery';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import { NavigationLevel, Project } from './portfolio/types';
import { projectsData } from './portfolio/projectsData';
import { categoriesData } from './portfolio/categoriesData'; // si tu as mis les catégories dans un autre fichier
import CategoriesView from './portfolio/CategoriesView';
import CategoryHeader from './portfolio/CategoryHeader';
import ProjectsGrid from './portfolio/ProjectsGrid';
import ProjectDetailView from './portfolio/ProjectDetailView';
import PortfolioNavigation from './portfolio/PortfolioNavigation';

// Aggiunta funzione fittizia per gestire l'animazione
const getAnimationClasses = (level: NavigationLevel) => {
  switch (level) {
    case 'categories':
      return 'translate-y-0 opacity-100';
    case 'projects':
      return 'translate-y-4 opacity-0';
    case 'projectDetail':
      return 'translate-y-8 opacity-0';
    default:
      return '';
  }
};

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>('categories');
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);
  const { t, language } = useLanguage();

  const handleCategoryClick = (categoryId: string) => {
    setNavigationLevel('projects');
    setSelectedCategory(categoryId);
    setSelectedProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setNavigationLevel('projectDetail');
    setSelectedProject(project);
  };

  const handleBackToCategories = () => {
    setNavigationLevel('categories');
    setSelectedCategory(null);
    setSelectedProject(null);
  };

  const handleBackToProjects = () => {
    setNavigationLevel('projects');
    setSelectedProject(null);
  };

  const getProjectsByCategory = (categoryId: string | null) => {
    if (!categoryId) return [];
    return projectsData(language).filter(project => project.category === categoryId);
  };

  const getCurrentCategory = () => {
    if (!selectedCategory) return null;
    return categoriesData(t, language).find(category => category.id === selectedCategory) || null;
  };

  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Project:", selectedProject);
  }, [selectedCategory, selectedProject]);

  return (
    <section id="portfolio" className="py-8 bg-offwhite relative z-10">
      <div ref={sectionRef} className="section-container">
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.subtitle')}
        </span>
        <h2 className={`section-title mt-2 mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.title')}
        </h2>

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
        <div className={`relative transition-all duration-500 transform ${getAnimationClasses(navigationLevel)}`}>
          <CategoriesView 
            categories={categoriesData(t, language)}
            isVisible={true}
            handleCategoryClick={handleCategoryClick}
            language={language}
          />
        </div>

{navigationLevel === 'projects' && selectedCategory && (
  <>
    <CategoryIntro
      category={getCurrentCategory()}
      language={language}
    />
    <ProjectGallery
      projects={getProjectsByCategory(selectedCategory)}
      onSelectProject={handleProjectClick}
      language={language}
    />
  </>
)}



        {navigationLevel === 'projectDetail' && selectedProject && (
          <ProjectDetailView 
            project={selectedProject}
            handleBackToProjects={handleBackToProjects}
            language={language}
            categories={categoriesData(t, language)}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

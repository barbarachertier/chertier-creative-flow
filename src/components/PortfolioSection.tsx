
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>('categories');
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();

  // Handlers
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

  // Data retrieval functions
  const getProjectsByCategory = (categoryId: string | null) => {
    if (!categoryId) return [];
    return projectsData(language).filter(project => project.category === categoryId);
  };

  const getCurrentCategory = () => {
    if (!selectedCategory) return null;
    return categoriesData(t, language).find(category => category.id === selectedCategory) || null;
  };

  // Log state changes for debugging
  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Project:", selectedProject);
  }, [selectedCategory, selectedProject]);

  const { t } = useLanguage();

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
            categories={categoriesData}
            isVisible={true}
            handleCategoryClick={handleCategoryClick}
            language={language}
          />
        )}

        {navigationLevel === 'projects' && selectedCategory && (
          <ProjectsGrid 
            projects={getProjectsByCategory(selectedCategory)}
            handleProjectClick={handleProjectClick}
            language={language}
          />
        )}

        {navigationLevel === 'projectDetail' && selectedProject && (
          <ProjectDetailView 
            project={selectedProject}
            handleBackToProjects={handleBackToProjects}
            language={language}
            categories={categoriesData}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

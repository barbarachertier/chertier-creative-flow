
import { useState, useEffect } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from '@/lib/utils';
import { NavigationLevel } from './portfolio/types';
import CategoriesView from './portfolio/CategoriesView';
import ProjectsGrid from './portfolio/ProjectsGrid';
import ProjectDetailView from './portfolio/ProjectDetailView';
import PortfolioNavigation from './portfolio/PortfolioNavigation';
import { categoriesData, projectsData } from './portfolio/portfolioData';
import { Category, Project } from './portfolio/types';

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
    return projectsData.filter(project => project.category === categoryId);
  };

  const getCurrentCategory = () => {
    if (!selectedCategory) return null;
    return categoriesData.find(category => category.id === selectedCategory) || null;
  };

  // Log state changes for debugging
  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Project:", selectedProject);
  }, [selectedCategory, selectedProject]);

  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 bg-pink-light/10">
      <div className="container mx-auto px-6">
        <span className="text-pink-dark font-medium">{t('portfolio.subtitle')}</span>
        <h2 className="text-3xl md:text-4xl font-medium mb-10">{t('portfolio.title')}</h2>
        
        {/* Navigation bar with breadcrumbs */}
        <PortfolioNavigation 
          navigationLevel={navigationLevel}
          handleBackToCategories={handleBackToCategories}
          handleBackToProjects={handleBackToProjects}
          isVisible={navigationLevel !== 'categories'}
          selectedCategory={selectedCategory}
          selectedProjectTitle={selectedProject?.title}
          getCurrentCategory={getCurrentCategory}
          language={language}
        />
        
        {/* Main content based on navigation level */}
        {navigationLevel === 'categories' && (
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

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import CategoriesView from './portfolio/CategoriesView';
import CategoryIntro from './CategoryIntro';
import ProjectGallery from './ProjectGallery';
import ProjectDetailView from './portfolio/ProjectDetailView';
import PortfolioNavigation from './portfolio/PortfolioNavigation';

import { categoriesData } from './portfolio/categoriesData';
import { projectsData }   from './portfolio/projectsData';

import { NavigationLevel, Project } from './portfolio/types';

/* ──────────────────────────
   Helpers
────────────────────────── */
const getAnimationClasses = (level: NavigationLevel) => {
  switch (level) {
    case 'categories':
      return 'translate-y-0 opacity-100';
    case 'projects':
      return 'translate-y-4 opacity-100';
    case 'projectDetail':
      return 'translate-y-8 opacity-100';
    default:
      return '';
  }
};

const PortfolioSection = () => {
  /* ───── STATE ───── */
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject,  setSelectedProject]  = useState<Project | null>(null);
  const [navigationLevel,  setNavigationLevel]  = useState<NavigationLevel>('categories');

  /* visibilità titolo/sezione (intersection observer) */
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { t, language } = useLanguage();

  /* ───── EFFECT: header fade-in ───── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ───── CALLBACKS ───── */
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedProject(null);
    setNavigationLevel('projects');
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setNavigationLevel('projectDetail');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setNavigationLevel('categories');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setNavigationLevel('projects');
  };

  /* ───── HELPERS ───── */
  const getProjectsByCategory = (categoryId: string | null) =>
    categoryId ? projectsData(language).filter(p => p.category === categoryId) : [];

  const getCurrentCategory = () =>
    selectedCategory
      ? categoriesData(t, language).find(c => c.id === selectedCategory) ?? null
      : null;

  /* ───── DEBUG ───── */
  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Project:',  selectedProject);
  }, [selectedCategory, selectedProject]);

  /* ───── RENDER ───── */
  return (
    <section id="portfolio" className="py-8 bg-offwhite relative z-10">
      <div ref={sectionRef} className="section-container">
        {/* header sezione */}
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.subtitle')}
        </span>
        <h2 className={`section-title mt-2 mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('portfolio.title')}
        </h2>

        {/* breadcrumb / back buttons */}
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

        {/* ─────────────────────────────────────────────
            ① LISTA CATEGORIE
        ───────────────────────────────────────────── */}
        <div className={`transition-all duration-500 ${getAnimationClasses(navigationLevel)}`}>
          <CategoriesView
            categories={categoriesData(t, language)}
            language={language}
            activeCategoryId={selectedCategory}        /* null => mostra lista */
            onSelect={handleCategoryClick}
          />
        </div>

        {/* ─────────────────────────────────────────────
            ② GRID PROGETTI
        ───────────────────────────────────────────── */}
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

        {/* ─────────────────────────────────────────────
            ③ DETTAGLIO PROGETTO
        ───────────────────────────────────────────── */}
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

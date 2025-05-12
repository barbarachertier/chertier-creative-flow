
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { NavigationLevel } from './types';
import PortfolioBreadcrumb from './PortfolioBreadcrumb';

interface PortfolioNavigationProps {
  navigationLevel: NavigationLevel;
  handleBackToCategories: () => void;
  handleBackToProjects: () => void;
  isVisible: boolean;
  selectedCategory: string | null;
  selectedProjectTitle?: string;
  getCurrentCategory: any; // Using any here as it's a function reference
  language: string;
}

const PortfolioNavigation = ({
  navigationLevel,
  handleBackToCategories,
  handleBackToProjects,
  isVisible,
  selectedCategory,
  selectedProjectTitle,
  getCurrentCategory,
  language
}: PortfolioNavigationProps) => {
  return (
    <div className={`flex items-center gap-4 mb-5 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
      
      <PortfolioBreadcrumb 
        navigationLevel={navigationLevel}
        selectedCategory={selectedCategory}
        selectedProjectTitle={selectedProjectTitle}
        handleBackToCategories={handleBackToCategories}
        handleBackToProjects={handleBackToProjects}
        getCurrentCategory={getCurrentCategory}
        language={language}
      />
    </div>
  );
};

export default PortfolioNavigation;


import { NavigationLevel, Category } from './types';

interface PortfolioBreadcrumbProps {
  navigationLevel: NavigationLevel;
  selectedCategory: string | null;
  selectedProjectTitle?: string;
  handleBackToCategories: () => void;
  handleBackToProjects: () => void;
  getCurrentCategory: () => Category | undefined;
  language: string;
}

const PortfolioBreadcrumb = ({
  navigationLevel,
  selectedCategory,
  selectedProjectTitle,
  handleBackToCategories,
  handleBackToProjects,
  getCurrentCategory,
  language
}: PortfolioBreadcrumbProps) => {
  if (navigationLevel === 'categories') return null;
  
  return (
    <div className="text-sm text-muted-foreground flex items-center gap-2">
      <span className="cursor-pointer hover:text-primary" onClick={handleBackToCategories}>
        {language === 'en' ? 'Portfolio' : 'Portfolio'}
      </span>
      {getCurrentCategory() && (
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
      {navigationLevel === 'detail' && selectedProjectTitle && (
        <>
          <span>/</span>
          <span className="font-medium text-primary">{selectedProjectTitle}</span>
        </>
      )}
    </div>
  );
};

export default PortfolioBreadcrumb;

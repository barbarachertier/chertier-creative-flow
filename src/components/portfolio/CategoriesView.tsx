
import { Card } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Category } from './types';

interface CategoriesViewProps {
  categories: Category[];
  isVisible: boolean;
  handleCategoryClick: (categoryId: string) => void;
  language: string;
}

const CategoriesView = ({ categories, isVisible, handleCategoryClick, language }: CategoriesViewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
  );
};

export default CategoriesView;

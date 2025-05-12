
import { Category } from './types';

interface CategoryHeaderProps {
  category: Category;
  language: string;
}

const CategoryHeader = ({ category, language }: CategoryHeaderProps) => {
  return (
    <div className="mb-4 bg-white rounded-lg overflow-hidden shadow-md hover-glow transition-all duration-300">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-6">
          <h3 className="text-2xl font-playfair mb-3">
            {category.name}
          </h3>
          <p className="text-muted-foreground">
            {category.description || (language === 'en' 
              ? `Discover my ${category.name.toLowerCase()} projects showcasing creativity and professional expertise.`
              : `Découvrez mes projets ${category.name.toLowerCase()} qui mettent en valeur ma créativité et mon expertise professionnelle.`)}
          </p>
        </div>
        {category.coverImage && (
          <div className="h-48 md:h-full">
            <div className="thumbnail-container w-full h-full">
              <img 
                src={category.coverImage} 
                alt={category.name}
                className="thumbnail w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;

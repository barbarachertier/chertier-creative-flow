import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Category } from './types';

interface CategoriesViewProps {
  categories: Category[];
  language: string;

  /** id della categoria attualmente aperta; null se siamo sulla lista  */
  activeCategoryId: string | null;

  /** callback quando l’utente clicca una card  */
  onSelect: (categoryId: string) => void;
}

const CategoriesView = ({
  categories,
  language,
  activeCategoryId,
  onSelect,
}: CategoriesViewProps) => {
  /* Se sto visualizzando una categoria NON mostro la lista */
  if (activeCategoryId) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`portfolio-item border-0 overflow-hidden shadow-md hover-glow ${
            category.bgColor || 'bg-white'
          } cursor-pointer transition-all duration-300`}
          onClick={() => onSelect(category.id)}
        >
          <div className="relative w-full h-full p-5 flex flex-col">
            {/* icona */}
            <div className="mb-4 bg-white/70 w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
              {category.icon}
            </div>

            {/* titolo */}
            <h3 className="text-xl font-medium font-playfair mb-2">
              {category.name}
            </h3>

            {/* descrizione */}
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {category.description ||
                (language === 'en'
                  ? `Discover my ${category.name.toLowerCase()} projects showcasing creativity and professional expertise.`
                  : `Découvrez mes projets ${category.name.toLowerCase()} qui mettent en valeur ma créativité et mon expertise professionnelle.`)}
            </p>

            {/* CTA */}
            <div className="mt-auto flex items-center text-sm font-medium">
              <span className="mr-1">
                {language === 'en' ? 'Explore Projects' : 'Explorer les projets'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* cover decorativa */}
            {category.coverImage?.[0] && (
              <div className="absolute top-0 right-0 w-24 h-24 opacity-50 pointer-events-none">
                <img
                  src={`${import.meta.env.BASE_URL}projects/${encodeURIComponent(
                    category.coverImage[0],
                  )}`}
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

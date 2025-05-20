
import { Category } from './portfolio/types';

interface CategoryIntroProps {
  category: Category | null;
  language: string;
}

const CategoryIntro = ({ category, language }: CategoryIntroProps) => {
  if (!category) return null;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
      <p className="text-muted-foreground">{category.description}</p>
    </div>
  );
};

export default CategoryIntro;

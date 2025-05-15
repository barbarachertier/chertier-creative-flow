
import { getCategories } from './categories';

export const categoriesData = (t: (key: string) => string, language: string) =>
  getCategories(t, language);

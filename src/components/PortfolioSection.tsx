import { useState, useEffect } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from '@/lib/utils';

// Define the structure for a project
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

// Define the structure for a category
interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

// Mock projects data
const projectsData: Project[] = [
  {
    id: 'project1',
    title: 'Project One',
    description: 'Description for Project One.',
    imageUrl: '/placeholder-image.jpg',
    category: 'category1',
  },
  {
    id: 'project2',
    title: 'Project Two',
    description: 'Description for Project Two.',
    imageUrl: '/placeholder-image.jpg',
    category: 'category2',
  },
  {
    id: 'project3',
    title: 'Project Three',
    description: 'Description for Project Three.',
    imageUrl: '/placeholder-image.jpg',
    category: 'category1',
  },
];

// Mock categories data
const categoriesData: Category[] = [
  {
    id: 'category1',
    name: 'Category One',
    description: 'Description for Category One.',
    imageUrl: '/placeholder-image.jpg',
  },
  {
    id: 'category2',
    name: 'Category Two',
    description: 'Description for Category Two.',
    imageUrl: '/placeholder-image.jpg',
  },
];

// CategoryCard component
const CategoryCard: React.FC<{ category: Category; onClick: () => void }> = ({ category, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
        <p className="text-gray-600">{category.description}</p>
      </div>
    </div>
  );
};

// ProjectCard component
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

// CategoryHeader component
const CategoryHeader: React.FC<{ category: Category | null; onBackClick: () => void }> = ({ category, onBackClick }) => {
  const { t } = useLanguage();

  if (!category) {
    return <div className="text-red-500">Category Not Found</div>;
  }

  return (
    <div className="mb-8">
      <button onClick={onBackClick} className="text-pink-500 hover:text-pink-700 transition-colors duration-300 flex items-center">
        ← {t('portfolio.backToCategories')}
      </button>
      <h2 className="text-3xl font-semibold text-gray-800 mt-2">{category.name}</h2>
      <p className="text-gray-600 mt-1">{category.description}</p>
    </div>
  );
};

// ProjectsGrid component
const ProjectsGrid: React.FC<{ projects: Project[]; onProjectClick: (projectId: string) => void }> = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onClick={() => onProjectClick(project.id)} 
        />
      ))}
    </div>
  );
};

// CategoriesGrid component
const CategoriesGrid: React.FC<{ categories: Category[]; onCategoryClick: (categoryId: string) => void }> = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map(category => (
        <CategoryCard 
          key={category.id} 
          category={category} 
          onClick={() => onCategoryClick(category.id)} 
        />
      ))}
    </div>
  );
};

// ProjectDetails component
const ProjectDetails: React.FC<{ project: Project | null; onBackClick: () => void }> = ({ project, onBackClick }) => {
  const { t } = useLanguage();

  if (!project) {
    return <div className="text-red-500">Project Not Found</div>;
  }

  return (
    <div>
      <button onClick={onBackClick} className="text-pink-500 hover:text-pink-700 transition-colors duration-300 flex items-center mb-4">
        ← {t('portfolio.backToProjects')}
      </button>
      <h2 className="text-3xl font-semibold text-gray-800">{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-md mt-4" />
      <p className="text-gray-600 mt-4">{project.description}</p>
    </div>
  );
};

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { t } = useLanguage();

  // Handlers
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedProject(null);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // Data retrieval functions
  const getProjectsByCategory = () => {
    return projectsData.filter(project => project.category === selectedCategory);
  };

  const getProjectById = (projectId: string) => {
    return projectsData.find(project => project.id === projectId) || null;
  };

  const getCurrentCategory = () => {
    return categoriesData.find(category => category.id === selectedCategory) || null;
  };

  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Project:", selectedProject);
  }, [selectedCategory, selectedProject]);

  return (
    <section id="portfolio" className="py-20 bg-pink-light/10">
      <div className="section-container">
        <span className="text-pink-dark font-medium">{t('portfolio.subtitle')}</span>
        <h2 className="section-title mt-2">{t('portfolio.title')}</h2>
        
        {/* Main content based on state */}
        {!selectedCategory && !selectedProject && (
          /* Categories grid */
          <CategoriesGrid 
            categories={categoriesData}
            onCategoryClick={handleCategoryClick}
          />
        )}

        {selectedCategory && !selectedProject && getCurrentCategory() && (
          <>
            {/* Category header with description */}
            <CategoryHeader 
              category={getCurrentCategory()}
              onBackClick={handleBackToCategories}
            />
            
            {/* Projects grid */}
            <ProjectsGrid 
              projects={getProjectsByCategory()}
              onProjectClick={handleProjectClick}
            />
          </>
        )}

        {selectedProject && getProjectById(selectedProject) && (
          /* Project details */
          <ProjectDetails 
            project={getProjectById(selectedProject)}
            onBackClick={handleBackToProjects}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

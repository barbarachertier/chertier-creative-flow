
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from 'lucide-react';
import { Project, Category } from './types';

interface ProjectDetailViewProps {
  project: Project;
  handleBackToProjects: () => void;
  language: string;
  categories: Category[];
}

const ProjectDetailView = ({ project, handleBackToProjects, language, categories }: ProjectDetailViewProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        {/* Large project image */}
        <div className="w-full h-[50vh] max-h-[500px] bg-muted">
          {project.type === 'image' ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <span className="text-white">{language === 'en' ? "Video preview" : "Aperçu vidéo"}</span>
            </div>
          )}
        </div>
        
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
          onClick={handleBackToProjects}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {/* Project details */}
      <div className="p-6">
        <h3 className="text-2xl font-medium font-playfair mb-4">{project.title}</h3>
        
        <div className="bg-muted p-4 rounded-md mb-6">
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center mb-6">
          <span className="text-sm text-muted-foreground">{language === 'en' ? 'Category:' : 'Catégorie:'}</span>
          <span className="bg-pink-light px-3 py-1 rounded-full text-sm">
            {categories.find(cat => cat.id === project.category)?.name || project.category}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center mb-6">
          <span className="text-sm text-muted-foreground">{language === 'en' ? 'Tools:' : 'Outils:'}</span>
          {project.tools?.map((tool, index) => (
            <span key={index} className="bg-beige-light px-3 py-1 rounded-full text-sm">{tool}</span>
          ))}
        </div>
        
        <Button className="mt-4 btn-hover">
          {language === 'en' ? "View Full Project" : "Voir le projet complet"}
          <ArrowRight className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetailView;

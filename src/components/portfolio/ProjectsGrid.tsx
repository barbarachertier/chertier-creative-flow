import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
  handleProjectClick: (project: Project) => void;
  language: string;
}

const ProjectsGrid = ({ projects, handleProjectClick, language }: ProjectsGridProps) => {
  const getImagePath = (imageName: string) => {
    const cleanName = imageName.replace(/^\/projects\//, '');
    return `${import.meta.env.BASE_URL}projects/${encodeURIComponent(cleanName)}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Card 
            key={project.id}
            className={`group portfolio-item border-0 overflow-hidden shadow-md hover-glow bg-white transition-all duration-700`}
            style={{ 
              transitionDelay: `${200 + index * 100}ms`, 
              aspectRatio: '4/3' 
            }}
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative w-full h-full cursor-pointer">
              {/* Project image with hover effect */}
              <div className="thumbnail-container w-full h-full">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={getImagePath(project.images[0])}
                    alt={project.title}
                    className="thumbnail w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    No image
                  </div>
                )}
              </div>
              
              {/* Overlay on hover */}
              <div className="portfolio-overlay absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 p-4">
                <h3 className="text-xl font-medium text-white mb-2 text-center">{project.title}</h3>
                <p className="text-white/80 text-sm text-center mb-4 line-clamp-2">{project.description}</p>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20 hover:text-white mt-auto">
                  {language === 'en' ? "View Project" : "Voir le projet"} 
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-muted-foreground">
            {language === 'en'
              ? "No projects in this category yet. Check back soon!"
              : "Pas encore de projets dans cette catégorie. Revenez bientôt !"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;

import { Button } from "@/components/ui/button";
import { ArrowRight, X } from 'lucide-react';
import { Project, Category } from './types';

const getImagePath = (imageName: string) => {
  const cleanName = imageName.replace(/^\/projects\//, '');
  return `${import.meta.env.BASE_URL}projects/${encodeURIComponent(cleanName)}`;
};

const getVideoPath = (videoName: string) => {
  const cleanName = videoName.replace(/^\/projects\//, '');
  return `${import.meta.env.BASE_URL}projects/${encodeURIComponent(cleanName)}`;
};



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
        {/* Affichage de l’image ou vidéo */}
        <div className="w-full max-h-[500px] overflow-auto flex flex-col gap-4">
          {project.video && project.videoSrc ? (
            <video controls className="w-full rounded-lg">
              <source src={getVideoPath(project.videoSrc)} type="video/mp4" />
              {language === 'en'
                ? "Your browser does not support the video tag."
                : "Votre navigateur ne prend pas en charge la lecture vidéo."}
            </video>
          ) : (
            project.images && project.images.length > 0 ? (
              project.images.map((img, index) => (
                <img
                  key={index}
                  src={getImagePath(img)}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full rounded-lg object-contain"
                />
              ))
            ) : (
              <img
                src="/placeholder.svg"
                alt="No image available"
                className="w-full rounded-lg object-contain"
              />
            )
          )}
        </div>

        {/* Bouton retour */}
        <button
          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
          onClick={handleBackToProjects}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Infos projet */}
      <div className="p-6">
        <h3 className="text-2xl font-medium font-playfair mb-4">{project.title}</h3>

        <div className="bg-muted p-4 rounded-md mb-6">
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center mb-6">
          <span className="text-sm text-muted-foreground">
            {language === 'en' ? 'Category:' : 'Catégorie :'}
          </span>
          <span className="bg-pink-light px-3 py-1 rounded-full text-sm">
            {categories.find(cat => cat.id === project.category)?.name || project.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 items-center mb-6">
          <span className="text-sm text-muted-foreground">
            {language === 'en' ? 'Tools:' : 'Outils :'}
          </span>
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

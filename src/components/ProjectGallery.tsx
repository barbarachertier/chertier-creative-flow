
import { Project } from './types';
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ProjectGalleryProps {
  projects: Project[];
  language: string;
  onSelectProject: (project: Project) => void;
}

const getImagePath = (imageName: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(imageName)}`;


const ProjectGallery = ({ projects, language, onSelectProject }: ProjectGalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => onSelectProject(project)}
        >
          <img
            src={getImagePath(project.images?.[0] || '')}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm">
              {project.description.slice(0, 100)}...
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGallery;

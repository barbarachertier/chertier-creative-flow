import { useState } from "react";
import { Project } from "./portfolio/types";        // ↖︎ adatta il percorso se diverso
import {
  Card,
  CardMedia,
  CardImage,
} from "@/components/ui/card";

interface ProjectGalleryProps {
  projects: Project[];
  language: string;
  onSelectProject: (project: Project) => void;
}

const getImagePath = (imageName: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(imageName)}`;

const ProjectGallery = ({
  projects,
  language,
  onSelectProject,
}: ProjectGalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const cover = project.images?.[0] ?? "placeholder.svg";

        return (
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => onSelectProject(project)}
          >
            {/* Cover image adattata al rettangolo */}
            <CardMedia>
              <CardImage src={getImagePath(cover)} alt={project.title} />
            </CardMedia>

            {/* Text */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {project.description.slice(0, 100)}...
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectGallery;

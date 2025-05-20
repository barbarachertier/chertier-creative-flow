import { Button } from '@/components/ui/button';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Project, Category } from './types';

/* Helpers -------------------------------------------------- */

const getImagePath = (imageName: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(
    imageName.replace(/^\/?projects\//, ''),
  )}`;

const getVideoPath = (videoName: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(
    videoName.replace(/^\/?projects\//, ''),
  )}`;

/* --------------------------------------------------------- */

interface ProjectDetailViewProps {
  project: Project;
  handleBackToProjects: () => void;
  language: string;
  categories: Category[];
}

/* --------------------------------------------------------- */
/**
 * A simple horizontal carousel that snaps like Instagram posts.
 * Uses native scroll with `scroll-snap` and smooth behaviour.
 */
const MediaCarousel = ({
  images,
  altBase,
}: {
  images: string[];
  altBase: string;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBySlide = (dir: 1 | -1) => {
    if (!trackRef.current) return;
    const { clientWidth } = trackRef.current;
    trackRef.current.scrollBy({ left: dir * clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-72 md:h-[28rem] bg-white rounded-lg overflow-hidden">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={getImagePath(img)}
            alt={`${altBase} - ${idx + 1}`}
            className="w-full h-full flex-shrink-0 object-contain snap-center select-none"
          />
        ))}
      </div>

      {/* Dots (bottom‑center) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-black/20 [transition:background-color_0.2s]"
              style={{
                backgroundColor:
                  trackRef.current &&
                  Math.round(trackRef.current.scrollLeft / trackRef.current.clientWidth) === i
                    ? 'rgba(0,0,0,0.7)'
                    : undefined,
              }}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows (md+) */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => scrollBySlide(-1)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBySlide(1)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
};

/* --------------------------------------------------------- */
const ProjectDetailView = ({
  project,
  handleBackToProjects,
  language,
  categories,
}: ProjectDetailViewProps) => {
  const hasLink = Boolean(project.link);

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Close */}
      <button
        onClick={handleBackToProjects}
        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Grid container */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        {/* Media column */}
        <div className="order-2 md:order-1 p-6 md:p-8 flex justify-center">
          {project.video && project.videoSrc ? (
            <div className="w-full h-72 md:h-[28rem] bg-black rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-contain bg-black"
                src={getVideoPath(project.videoSrc)}
              />
            </div>
          ) : project.images?.length ? (
            project.images.length > 1 ? (
              <MediaCarousel images={project.images} altBase={project.title} />
            ) : (
              <div className="w-full h-72 md:h-[28rem] bg-white rounded-lg overflow-hidden">
                <img
                  src={getImagePath(project.images[0])}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )
          ) : (
            <div className="w-full h-72 md:h-[28rem] bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="No image available"
                className="w-24 h-24 opacity-40"
              />
            </div>
          )}
        </div>

        {/* Content column */}
        <div className="order-1 md:order-2 p-6 md:p-8 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-medium font-playfair mb-4">
            {project.title}
          </h3>

          <div className="bg-muted p-4 rounded-md mb-6">
            <p className="text-muted-foreground text-sm md:text-base">
              {project.description}
            </p>
          </div>

          {/* Category */}
          <div className="flex flex-wrap gap-2 items-center mb-6">
            <span className="text-sm text-muted-foreground">
              {language === 'en' ? 'Category:' : 'Catégorie :'}
            </span>
            <span className="bg-pink-light px-3 py-1 rounded-full text-sm">
              {categories.find((c) => c.id === project.category)?.name ??
                project.category}
            </span>
          </div>

          {/* Tools */}
          {project.tools?.length && (
            <div className="flex flex-wrap gap-2 items-center mb-6">
              <span className="text-sm text-muted-foreground">
                {language === 'en' ? 'Tools:' : 'Outils :'}
              </span>
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-beige-light px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Complete visual identity for an eco-friendly fashion brand including logo, color palette, and brand guidelines.",
    category: "design",
    image: "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3",
    type: "image"
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    description: "Integrated marketing campaign for a tech startup's product launch, including social media content and promotional materials.",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1583673354352-9f4e86f8efaf?ixlib=rb-4.0.3",
    type: "image"
  },
  {
    id: 3,
    title: "Corporate Video Production",
    description: "Promotional video showcasing company culture and values for a corporate client.",
    category: "video",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
    type: "video",
    videoUrl: "https://example.com/video1.mp4"
  },
  {
    id: 4,
    title: "Editorial Design",
    description: "Magazine layout and editorial design for a lifestyle publication focusing on sustainable living.",
    category: "design",
    image: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?ixlib=rb-4.0.3",
    type: "image"
  },
  {
    id: 5,
    title: "Social Media Campaign",
    description: "Engaging content series for a food brand's social media channels, resulting in 40% engagement increase.",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
    type: "image"
  },
  {
    id: 6,
    title: "Motion Graphics Explainer",
    description: "Animated explainer video simplifying complex concepts for an educational platform.",
    category: "video",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
    type: "video",
    videoUrl: "https://example.com/video2.mp4"
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "design", name: "Graphic Design" },
  { id: "marketing", name: "Marketing" },
  { id: "video", name: "Video" },
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const filteredProjects = selectedCategory === "all" 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
    
    setVisibleProjects(filteredProjects);
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-offwhite">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>My Work</span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Portfolio</h2>
        
        {/* Categories filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all",
                selectedCategory === category.id
                  ? "bg-pink-DEFAULT text-primary-foreground"
                  : "bg-offwhite hover:bg-pink-light text-muted-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-lg font-medium text-offwhite mb-1">{project.title}</h3>
                    <p className="text-sm text-offwhite/80">View Project</p>
                  </div>
                </div>
                
                {/* Video indicator */}
                {project.type === 'video' && (
                  <div className="absolute bottom-3 right-3 bg-black/70 rounded-full p-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-offwhite"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project detail dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-4 w-4"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {selectedProject && (
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                {selectedProject.type === 'image' ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-md"
                  />
                ) : (
                  <div className="aspect-video bg-black rounded-md flex items-center justify-center">
                    <p className="text-white">Video preview placeholder</p>
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium font-playfair mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-pink-light px-3 py-1 rounded-full">
                    {selectedProject.category === 'design' && 'Graphic Design'}
                    {selectedProject.category === 'marketing' && 'Marketing'}
                    {selectedProject.category === 'video' && 'Video Production'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;


import { Category, Project } from './types';
import { Image, Video, FileText, Folder, Smartphone, Pen, TrendingUp, Users, Newspaper, MessageSquare } from 'lucide-react';
import React from 'react';

export const getCategories = (t: (key: string) => string, language: string): Category[] => [
  { 
    id: "video", 
    name: language === 'en' ? "Videos" : "Vidéos",
    icon: React.createElement(Video, { className: "w-6 h-6" }),
    description: language === 'en' ? "Motion graphics and video editing projects showcasing dynamic visual storytelling." : "Projets de motion design et montage vidéo mettant en valeur une narration visuelle dynamique.",
    coverImage: "/lovable-uploads/ed311d7e-00fe-4aca-b901-4b84d532eed8.png",
    bgColor: "bg-pink-light"
  },
  { 
    id: "logo", 
    name: language === 'en' ? "Logos" : "Logos",
    icon: React.createElement(Image, { className: "w-6 h-6" }),
    description: language === 'en' ? "Brand identity projects featuring distinctive and memorable logo designs." : "Projets d'identité de marque présentant des designs de logo distinctifs et mémorables.",
    coverImage: "/lovable-uploads/4cfad69e-a457-46a8-948d-b9230a870d8f.png",
    bgColor: "bg-beige-light"
  },
  { 
    id: "print", 
    name: language === 'en' ? "Print" : "Print",
    icon: React.createElement(FileText, { className: "w-6 h-6" }),
    description: language === 'en' ? "Print design work from editorial layouts to promotional materials." : "Travaux de design d'impression, des mises en page éditoriales aux supports promotionnels.",
    coverImage: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
    bgColor: "bg-green-light"
  },
  { 
    id: "bigprojects", 
    name: language === 'en' ? "Big Projects" : "Gros Projets",
    icon: React.createElement(Folder, { className: "w-6 h-6" }),
    description: language === 'en' ? "Comprehensive design solutions for large-scale projects and campaigns." : "Solutions de design complètes pour des projets et campagnes à grande échelle.",
    coverImage: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png",
    bgColor: "bg-gold-light"
  },
  { 
    id: "motion", 
    name: language === 'en' ? "Motion Design" : "Motion Design",
    icon: React.createElement(Video, { className: "w-6 h-6" }),
    description: language === 'en' ? "Animation and motion design projects creating dynamic visual experiences." : "Projets d'animation et de motion design créant des expériences visuelles dynamiques.",
    coverImage: "/lovable-uploads/ed311d7e-00fe-4aca-b901-4b84d532eed8.png",
    bgColor: "bg-pink-light"
  },
  { 
    id: "ux", 
    name: language === 'en' ? "UX Design" : "UX Design",
    icon: React.createElement(Smartphone, { className: "w-6 h-6" }),
    description: language === 'en' ? "User experience design focusing on intuitive and engaging interfaces." : "Design d'expérience utilisateur axé sur des interfaces intuitives et engageantes.",
    coverImage: "/lovable-uploads/2824f814-bcd0-43e2-8037-8081d710ad0a.png",
    bgColor: "bg-green-light"
  },
  { 
    id: "social", 
    name: language === 'en' ? "Social Media" : "Réseaux Sociaux",
    icon: React.createElement(Pen, { className: "w-6 h-6" }),
    description: language === 'en' ? "Social media content creation and campaign designs." : "Création de contenu pour les réseaux sociaux et conceptions de campagnes.",
    coverImage: "/lovable-uploads/09297029-307e-48b4-8690-e7f78fc6316a.png",
    bgColor: "bg-beige-light"
  },
  { 
    id: "magazine", 
    name: language === 'en' ? "Magazine" : "Magazine",
    icon: React.createElement(Newspaper, { className: "w-6 h-6" }),
    description: language === 'en' ? "Magazine layouts and editorial design for print and digital." : "Mises en page de magazines et conception éditoriale pour l'impression et le numérique.",
    coverImage: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
    bgColor: "bg-green-light"
  },
  { 
    id: "strategy", 
    name: language === 'en' ? "Strategy" : "Stratégie",
    icon: React.createElement(TrendingUp, { className: "w-6 h-6" }),
    description: language === 'en' ? "Brand strategy and marketing planning for effective communication." : "Stratégie de marque et planification marketing pour une communication efficace.",
    coverImage: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png",
    bgColor: "bg-gold-light"
  },
  { 
    id: "press", 
    name: language === 'en' ? "Press" : "Presse",
    icon: React.createElement(MessageSquare, { className: "w-6 h-6" }),
    description: language === 'en' ? "Press kits, media relations and press release design." : "Dossiers de presse, relations médias et conception de communiqués de presse.",
    coverImage: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
    bgColor: "bg-pink-light"
  }
];

export const getProjects = (language: string): Project[] => [
  {
    id: 1,
    title: language === 'en' ? "Doomli Branding" : "Image de marque Doomli",
    description: language === 'en' ? "Complete branding package for a mobile dog grooming service, including logo design, color palette, typography, and brand guidelines for consistent visual identity." : "Ensemble complet d'image de marque pour un service mobile de toilettage canin, comprenant la conception du logo, la palette de couleurs, la typographie et les directives de marque pour une identité visuelle cohérente.",
    category: "logo",
    image: "/lovable-uploads/b51fcd75-4628-4a5a-9f9b-a8d4935922b5.png",
    type: "image",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"]
  },
  {
    id: 2,
    title: language === 'en' ? "Doomli Vehicle Design" : "Design véhicule Doomli",
    description: language === 'en' ? "Custom vehicle wrap design for the Doomli mobile dog grooming service, featuring eye-catching graphics that showcase the brand's fun and professional approach while ensuring maximum visibility on the road." : "Conception personnalisée d'habillage de véhicule pour le service mobile de toilettage canin Doomli, avec des graphismes attrayants qui mettent en valeur l'approche ludique et professionnelle de la marque tout en assurant une visibilité maximale sur la route.",
    category: "bigprojects",
    image: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png",
    type: "image",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "InDesign"]
  },
  {
    id: 3,
    title: language === 'en' ? "Plantnet App Poster" : "Affiche application Plantnet",
    description: language === 'en' ? "Promotional poster design for the Plantnet plant identification application, combining vivid botanical imagery with clean typography to communicate the app's functionality and appeal to nature enthusiasts." : "Conception d'affiche promotionnelle pour l'application d'identification de plantes Plantnet, combinant des images botaniques vives avec une typographie épurée pour communiquer la fonctionnalité de l'application et attirer les passionnés de nature.",
    category: "print",
    image: "/lovable-uploads/c5c88852-a236-4fa2-a485-d25f3f342642.png",
    type: "image",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: 4,
    title: language === 'en' ? "5 Etoiles Luxury Rentals" : "5 Étoiles Locations de Luxe",
    description: language === 'en' ? "Premium business card and stationery design for a high-end vacation rental company, featuring gold foil details and elegant typography that reflects the luxury positioning of the brand." : "Conception de carte de visite et de papeterie haut de gamme pour une entreprise de location de vacances de luxe, avec des détails en feuille d'or et une typographie élégante qui reflète le positionnement de luxe de la marque.",
    category: "print",
    image: "/lovable-uploads/82366a6d-2181-41b8-bc29-cdcc6ff88927.png",
    type: "image",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Photoshop"]
  },
  {
    id: 5,
    title: language === 'en' ? "Social Media Campaign" : "Campagne sur les réseaux sociaux",
    description: language === 'en' ? "Comprehensive social media campaign for Doomli featuring a series of engaging visuals and animations designed to increase brand awareness and drive customer engagement across Instagram, Facebook, and TikTok platforms." : "Campagne complète sur les réseaux sociaux pour Doomli comprenant une série de visuels et d'animations engageants conçus pour augmenter la notoriété de la marque et stimuler l'engagement des clients sur les plateformes Instagram, Facebook et TikTok.",
    category: "social",
    image: "/lovable-uploads/09297029-307e-48b4-8690-e7f78fc6316a.png",
    type: "image",
    tools: ["Adobe Photoshop", "Canva", "After Effects"]
  },
  {
    id: 6,
    title: language === 'en' ? "ARC App UI Design" : "Design d'interface utilisateur pour l'application ARC",
    description: language === 'en' ? "User interface design for a social networking mobile application, featuring intuitive navigation, custom icons, and a cohesive design system that enhances user engagement and provides a seamless experience across all screens." : "Conception d'interface utilisateur pour une application mobile de réseautage social, avec une navigation intuitive, des icônes personnalisées et un système de design cohérent qui améliore l'engagement des utilisateurs et offre une expérience fluide sur tous les écrans.",
    category: "ux",
    image: "/lovable-uploads/2824f814-bcd0-43e2-8037-8081d710ad0a.png",
    type: "image",
    tools: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    id: 7,
    title: language === 'en' ? "Echo 2 Pros Magazine" : "Magazine Echo 2 Pros",
    description: language === 'en' ? "Editorial design for a professional business magazine featuring dynamic layouts, carefully selected typography, and visual hierarchy that ensures readability while maintaining a sophisticated aesthetic across feature articles and regular columns." : "Conception éditoriale pour un magazine d'affaires professionnel présentant des mises en page dynamiques, une typographie soigneusement sélectionnée et une hiérarchie visuelle qui assure la lisibilité tout en maintenant une esthétique sophistiquée dans les articles de fond et les chroniques régulières.",
    category: "magazine",
    image: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
    type: "image",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    id: 8,
    title: language === 'en' ? "STORViX Company Infographic" : "Infographie d'entreprise STORViX",
    description: language === 'en' ? "Detailed infographic design for STORViX data storage company that visualizes complex technical information and company history in an accessible and visually engaging format, helping customers understand the company's unique value proposition." : "Conception d'infographie détaillée pour la société de stockage de données STORViX qui visualise des informations techniques complexes et l'histoire de l'entreprise dans un format accessible et visuellement attrayant, aidant les clients à comprendre la proposition de valeur unique de l'entreprise.",
    category: "print",
    image: "/lovable-uploads/a57a9b3b-ea4e-4350-b0ab-411ec7939505.png",
    type: "image",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Tableau"]
  },
  {
    id: 9,
    title: language === 'en' ? "Baba au Rhum Logo Design" : "Design de logo Baba au Rhum",
    description: language === 'en' ? "Playful yet sophisticated logo design for a premium pastry brand specializing in rum-infused desserts, combining elegant typography with whimsical visual elements that communicate the brand's unique offering and gourmet positioning." : "Conception de logo ludique mais sophistiquée pour une marque de pâtisserie haut de gamme spécialisée dans les desserts infusés au rhum, combinant une typographie élégante avec des éléments visuels fantaisistes qui communiquent l'offre unique de la marque et son positionnement gastronomique.",
    category: "logo",
    image: "/lovable-uploads/4cfad69e-a457-46a8-948d-b9230a870d8f.png",
    type: "image",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"]
  },
  {
    id: 10,
    title: language === 'en' ? "Media Relations Strategy" : "Stratégie de relations médias",
    description: language === 'en' ? "Comprehensive media relations strategy for a tech startup launch, including press kit design, media outreach planning and PR messaging framework." : "Stratégie complète de relations médias pour le lancement d'une startup technologique, comprenant la conception d'un dossier de presse, la planification des relations avec les médias et un cadre de messagerie RP.",
    category: "strategy",
    image: "/lovable-uploads/3faf1bca-41d0-4c70-acad-49caa5c1ec97.png",
    type: "image",
    tools: ["Adobe InDesign", "Microsoft Excel", "Asana"]
  },
  {
    id: 11,
    title: language === 'en' ? "Press Release Design" : "Conception de communiqué de presse",
    description: language === 'en' ? "Modern press release design for a product launch event, featuring engaging visuals and clear information hierarchy to capture media attention." : "Conception moderne de communiqué de presse pour un événement de lancement de produit, avec des visuels attrayants et une hiérarchie d'information claire pour capter l'attention des médias.",
    category: "press",
    image: "/lovable-uploads/c3702d18-39df-4c7d-a3ad-8643598ea5fb.png",
    type: "image",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Microsoft Word"]
  }
];

// Export the actual data so they can be directly imported
export const categoriesData = (t: (key: string) => string, language: string) => getCategories(t, language);
export const projectsData = (language: string) => getProjects(language);

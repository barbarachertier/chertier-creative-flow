
import { Project } from './types';

export const projectsData = (language: string): Project[] => [
  // BIG PROJECTS
  {
    id: "doomli-van",
    category: "bigprojects",
    title: language === "en" ? "Doomli Van Design" : "Habillage Van Doomli",
    description: language === "en"
      ? "Full van wrap for a mobile pet grooming startup. From sketch to mockup."
      : "Habillage complet de van pour une entreprise de toilettage. Du croquis au mockup.",
    images: [
      "/projects/FINAL MOCKUP.png",
      "/projects/arrière van.png",
      "/projects/gros projet (1).jpeg",
      "/projects/gros projet (2).png",
      "/projects/gros projet (3).png",
      "/projects/photo téléphone final.png",
      "/projects/test mockup final avec fond.png"
    ],
    tools: ["Photoshop", "Illustrator", "Procreate", "Canva"]
  },
  {
    id: "doomli-banner",
    category: "bigprojects",
    title: language === "en" ? "Office Banner" : "Banderole Bureaux",
    description: language === "en"
      ? "Banner created for the opening of Doomli’s first office."
      : "Banderole créée pour l’ouverture du premier bureau Doomli.",
    images: ["/projects/photo téléphone final.png"],
    tools: ["Photoshop", "Canva"]
  },

  // LOGOS
  {
    id: "logo-patisserie",
    category: "logo",
    title: language === "en" ? "Bakery App Logo" : "Logo Appli Pâtisserie",
    description: language === "en"
      ? "Pastel and playful logo for a bakery-finding mobile app."
      : "Logo pastel et ludique pour une appli de recherche de pâtisseries.",
    images: ["/projects/logo (1).png"],
    tools: ["Illustrator"]
  },
  {
    id: "logo-echos2pros",
    category: "logo",
    title: language === "en" ? "Échos2Pros Anniversary Logo" : "Logo Anniversaire Échos2Pros",
    description: language === "en"
      ? "Logo created for the 20th anniversary of our university magazine."
      : "Logo pour les 20 ans du magazine universitaire Échos2Pros.",
    images: ["/projects/logo (2).png"],
    tools: ["Illustrator"]
  },
  {
    id: "logo-la-grappe",
    category: "logo",
    title: language === "en" ? "La Grappe Band Logo" : "Logo Groupe La Grappe",
    description: language === "en"
      ? "Fun and quirky logos for a music band from Montpellier."
      : "Logos décalés pour un groupe de musique montpelliérain.",
    images: ["/projects/Logo la grappe.png", "Logo la grappe_2.png"],
    tools: ["Procreate", "Illustrator", "Canva"]
  },

  // MAGAZINE
  {
    id: "echos2pros-magazine",
    category: "magazine",
    title: language === "en" ? "Échos2Pros Magazine" : "Magazine Échos2Pros",
    description: language === "en"
      ? "Full redesign of a 100+ page university magazine with two other designers."
      : "Refonte de plus de 100 pages du magazine universitaire avec deux autres graphistes.",
    images: ["/projects/échos2pros.png"],
    link: "https://www.calameo.com/read/0073678434477e5d4c24f",
    tools: ["InDesign", "Photoshop", "Illustrator", "Procreate"]
  },

  // VIDEO
  {
    id: "doomli-video",
    category: "video",
    title: language === "en" ? "Doomli Promo Video" : "Vidéo Promo Doomli",
    description: language === "en"
      ? "A fun and light social media video for Doomli."
      : "Vidéo légère et engageante pour les réseaux sociaux de Doomli.",
    video: true,
    videoSrc: "/projects/Doomli c'est quoi.mp4",
    tools: ["CapCut", "After Effects"]
  },
  {
    id: "storvix-video",
    category: "video",
    title: language === "en" ? "Storvix Corporate Video" : "Vidéo Corporate Storvix",
    description: language === "en"
      ? "Informative corporate video for explaining the STORViX product."
      : "Vidéo corporate explicative sur le produit STORViX.",
    video: true,
    videoSrc: "/projects/APRIL 2025 STORViX.mp4",
    tools: ["After Effects"]
  },

  // RACONTR
  {
    id: "racontr",
    category: "video",
    title: language === "en"
      ? "Interactive Documentary - Dancing with Silence"
      : "Documentaire interactif – Danser avec le silence",
    description: language === "en"
      ? "Interactive webdoc about a deaf dance group. I handled the technical creation using Racontr."
      : "Webdoc interactif sur une association de danseurs sourds. J’ai géré toute la partie technique via Racontr.",
    images: ["/projects/racontr.png"],
    tools: ["Racontr"]
  }
];

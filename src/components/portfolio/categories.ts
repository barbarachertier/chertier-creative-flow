
import React from 'react';
import { Category } from './types';
import { Video, Image, FileText, Folder, Smartphone, Pen, TrendingUp, Newspaper } from 'lucide-react';

export const getCategories = (t: (key: string) => string, language: string): Category[] => [
  {
    id: "video",
    name: language === "en" ? "Videos" : "Vidéos",
    icon: React.createElement(Video, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Motion design, video editing, and interactive storytelling."
      : "Montage vidéo, motion design et narration interactive.",
    coverImage:["video.jpg"],
    bgColor: "bg-pink-light"
  },
  {
    id: "logo",
    name: "Logos",
    icon: React.createElement(Image, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Logo and brand identity designs for diverse projects."
      : "Logos et identités visuelles conçus pour divers projets.",
    coverImage:["logo.jpg"],
    bgColor: "bg-beige-light"
  },
  {
    id: "magazine",
    name: "Magazine",
    icon: React.createElement(Newspaper, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Editorial design and layout for student publications."
      : "Mise en page et design éditorial pour des publications étudiantes.",
    coverImage:["magazine.jpg"],
    bgColor: "bg-green-light"
  },
  {
    id: "bigprojects",
    name: language === "en" ? "Big Projects" : "Gros Projets",
    icon: React.createElement(Folder, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Large-scale creative projects from idea to execution."
      : "Projets créatifs d'envergure, de l’idée à la réalisation.",
    coverImage:["gros projet.jpg"],
    bgColor: "bg-gold-light"
  },
  {
    id: "print",
    name: "Print",
    icon: React.createElement(FileText, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Business cards, posters and communication material."
      : "Cartes de visite, affiches et supports de communication.",
    coverImage:["print (1).jpg"],
    bgColor: "bg-green-light"
  },
  {
    id: "ux",
    name: "UX Design",
    icon: React.createElement(Smartphone, { className: "w-6 h-6" }),
    description: language === "en"
      ? "App concepts and user flows focused on user experience."
      : "Concepts d’application et parcours utilisateur centrés UX.",
    coverImage:["ux.jpg"],
    bgColor: "bg-pink-light"
  },
  {
    id: "social",
    name: language === "en" ? "Social Media" : "Réseaux Sociaux",
    icon: React.createElement(Pen, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Creative content for Instagram, LinkedIn and Facebook."
      : "Contenus créatifs pour Instagram, LinkedIn et Facebook.",
    coverImage:["rs.jpg"],
    bgColor: "bg-beige-light"
  },
  {
    id: "strategy",
    name: language === "en" ? "Strategy" : "Stratégie",
    icon: React.createElement(TrendingUp, { className: "w-6 h-6" }),
    description: language === "en"
      ? "Communication and marketing strategies developed in real-life case studies."
      : "Stratégies de communication et marketing développées sur des cas réels.",
    coverImage:["strat.jpg"],
    bgColor: "bg-gold-light"
  }
];

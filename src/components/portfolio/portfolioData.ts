import { Project } from './types';

export const projectsData = (language: string): Project[] => [
  {
    id: "doomli-van",
    category: "bigprojects",
    title: language === "en" ? "Doomli Van Design" : "Habillage Van Doomli",
    description: language === "en"
      ? "Full vehicle design for a mobile pet grooming business. From mockups to final visuals, created during my internship at Doomli."
      : "Habillage complet de van pour une entreprise de toilettage canin, de la création des visuels aux mockups, réalisé pendant mon stage chez Doomli.",
    images: [
      "FINAL MOCKUP.png",
      "arrière van.png",
      "gros projet (1).jpeg",
      "gros projet (2).png",
      "gros projet (3).png",
      "photo téléphone final.png",
      "test mockup final avec fond.png"
    ],
  },
  {
    id: "doomli-banner",
    category: "bigprojects",
    title: language === "en" ? "Office Banner" : "Banderole Bureaux",
    description: language === "en"
      ? "Banner design created for Doomli’s first office, part of the visual identity expansion."
      : "Banderole réalisée pour les premiers bureaux de Doomli, en cohérence avec leur identité visuelle.",
    images: ["photo téléphone final.png"]
  },
  {
    id: "logo-patisserie",
    category: "logo",
    title: language === "en" ? "Bakery App Logo" : "Logo Appli Pâtisserie",
    description: language === "en"
      ? "Logo designed for a bakery locator app, blending a map pin and a piping bag in pastel colors."
      : "Logo d’une application de pâtisserie, mêlant point de géolocalisation et poche à douille, dans des tons pastel.",
    images: ["logo (1).png"]
  },
  {
    id: "logo-echos2pros",
    category: "logo",
    title: language === "en" ? "Échos2Pros Anniversary Logo" : "Logo Anniversaire Échos2Pros",
    description: language === "en"
      ? "Visual identity created for the 20th anniversary of our university magazine."
      : "Identité graphique pour les 20 ans du magazine universitaire Échos2Pros.",
    images: ["logo (2).png"]
  },
  {
    id: "logo-la-grappe",
    category: "logo",
    title: language === "en" ? "La Grappe Band Logo" : "Logo Groupe La Grappe",
    description: language === "en"
      ? "Logo proposals for a quirky Montpellier-based music band."
      : "Propositions de logos pour un groupe de musique montpelliérain décalé.",
    images: ["Logo la grappe.png", "Logo la grappe_2.png"],
  },
  {
    id: "echos2pros-magazine",
    category: "magazine",
    title: language === "en" ? "Échos2Pros Magazine" : "Magazine Échos2Pros",
    description: language === "en"
      ? "100+ page editorial design created in a team of 3 graphic designers for the 20th anniversary edition of the university magazine."
      : "Plus de 100 pages conçues avec deux autres graphistes pour les 20 ans du magazine universitaire.",
    images: ["échos2pros.png"],
    link: "https://www.calameo.com/read/0073678434477e5d4c24f"
  },
  {
    id: "racontr",
    category: "video",
    title: language === "en"
      ? "Interactive Documentary - Dancing with Silence"
      : "Documentaire interactif – Danser avec le silence",
    description: language === "en"
      ? "Technical director for an interactive documentary built with Racontr, aimed at sharing the story of a deaf dance association."
      : "Réalisatrice technique d’un documentaire interactif sur une association de danseurs sourds, conçu avec l’outil Racontr.",
    images: ["racontr.png"],
    video: true,
    videoSrc: "/projects/Doomli c'est quoi .mp4"
  }
];

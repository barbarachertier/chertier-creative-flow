
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.greeting': "Hi, I'm Barbara",
    'hero.title': 'Creative Digital Communication Specialist with a spark for design, video & storytelling. I turn ideas into eye-catching content with purpose and passion <3.',
    'hero.cta': 'Explore My Portfolio',
    'hero.scroll': 'Scroll Down',
    
    // About section
    'about.subtitle': 'About Me',
    'about.title': 'Creative Vision, Digital Expertise',
    'about.bio': '🎯 Always in search of new professional adventures. Passionate, creative, and adaptable communicator. I\'ve worked in universes as varied as dog grooming, catamarans, and even tech with data storage — proof that I can adapt to (almost) anything as long as communication is at the heart.\n\n📍I\'ve moved around a bit in France, and lately, I spent 6 months in Sweden to train in foreign business culture, strengthen my English, and live a new enriching professional experience.\n\n💡 What I like? Getting involved, creating, learning quickly and well, and moving projects forward with energy and ideas.\n\nToday, I am looking for opportunities in the field of communication, regardless of the sector or country. As long as there is meaning, challenge, and room for expression, I go for it!',
    'about.languages': 'Languages: English, French, Spanish (basic)',
    
    // Experience section
    'experience.subtitle': 'Professional Journey',
    'experience.title': 'Experience',
    
    // Skills section
    'skills.subtitle': 'Expertise',
    'skills.title': 'Skills & Proficiencies',
    'skills.category.all': 'All Skills',
    'skills.category.design': 'Design',
    'skills.category.marketing': 'Marketing',
    'skills.category.content': 'Content',
    'skills.category.tools': 'Tools',
    'skills.category.production': 'Production',
    'skills.category.teamwork': 'Teamwork',
    'skills.category.social': 'Social Media',
    'skills.category.data': 'Data Analysis',
    'skills.category.visual': 'Visual Creation',
    'skills.category.video': 'Video Creation',
    'skills.category.seo': 'SEO',
    'skills.category.writing': 'Content Writing',
    
    // Portfolio section
    'portfolio.subtitle': 'My Work',
    'portfolio.title': 'Portfolio',
    'portfolio.category.all': 'All Projects',
    'portfolio.category.video': 'Videos',
    'portfolio.category.logo': 'Logos',
    'portfolio.category.print': 'Print',
    'portfolio.category.bigprojects': 'Big Projects',
    'portfolio.category.motion': 'Motion Design',
    'portfolio.category.ux': 'UX',
    'portfolio.category.social': 'Social Media',
    
    // Contact section
    'contact.subtitle': 'Get in Touch',
    'contact.title': 'Contact',
    'contact.intro': 'I\'m always interested in new projects and collaborations. Whether you have a question or just want to say hi, I\'ll try my best to get back to you as soon as possible.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you for your message!',
    'contact.successDetail': 'I\'ll be in touch with you shortly.',
    'contact.location': 'Location',
    'contact.connect': 'Connect with me',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Education & Experience
    'edu.title': 'Education',
    'exp.title': 'Experience',
  },
  fr: {
    // Navbar
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.greeting': 'Salut, je suis Barbara',
    'hero.title': 'Spécialiste en Communication Digitale Créative avec un talent pour le design, la vidéo et le storytelling. Je transforme les idées en contenu attrayant avec intention et passion.',
    'hero.cta': 'Découvrir Mon Portfolio',
    'hero.scroll': 'Défiler vers le bas',
    
    // About section
    'about.subtitle': 'À propos de moi',
    'about.title': 'Vision Créative, Expertise Digitale',
    'about.bio': '🎯 Toujours en quête de nouvelles aventures pro. Communicante passionnée, créative et adaptable. J\'ai travaillé dans des univers aussi variés que le toilettage canin, les catamarans ou encore la tech avec le stockage de données — preuve que je peux m\'adapter à (presque) tout tant que la com\' est au cœur.\n\n📍J\'ai bougé un peu partout en France, et dernièrement, j\'ai passé 6 mois en Suède pour me former à la culture d\'entreprise à l\'étranger, renforcer mon anglais et vivre une nouvelle expérience pro enrichissante.\n\n💡 Ce que j\'aime ? M\'impliquer, créer, apprendre vite et bien, et faire avancer les projets avec énergie et idées.\n\nAujourd\'hui, je suis à la recherche d\'opportunités dans le domaine de la communication, peu importe le secteur ou le pays. Tant qu\'il y a du sens, du challenge et de la place pour s\'exprimer, je fonce!',
    'about.languages': 'Langues: Anglais, Français, Espagnol (notions)',
    
    // Experience section
    'experience.subtitle': 'Parcours Professionnel',
    'experience.title': 'Expérience',
    
    // Skills section
    'skills.subtitle': 'Expertise',
    'skills.title': 'Compétences & Maîtrises',
    'skills.category.all': 'Toutes les compétences',
    'skills.category.design': 'Design',
    'skills.category.marketing': 'Marketing',
    'skills.category.content': 'Contenu',
    'skills.category.tools': 'Outils',
    'skills.category.production': 'Production',
    'skills.category.teamwork': 'Travail d\'équipe',
    'skills.category.social': 'Réseaux Sociaux',
    'skills.category.data': 'Analyse de données',
    'skills.category.visual': 'Création visuelle',
    'skills.category.video': 'Création vidéo',
    'skills.category.seo': 'SEO',
    'skills.category.writing': 'Rédaction de contenu',
    
    // Portfolio section
    'portfolio.subtitle': 'Mes Travaux',
    'portfolio.title': 'Portfolio',
    'portfolio.category.all': 'Tous les projets',
    'portfolio.category.video': 'Vidéos',
    'portfolio.category.logo': 'Logos',
    'portfolio.category.print': 'Print',
    'portfolio.category.bigprojects': 'Grands Projets',
    'portfolio.category.motion': 'Motion Design',
    'portfolio.category.ux': 'UX',
    'portfolio.category.social': 'Réseaux Sociaux',
    
    // Contact section
    'contact.subtitle': 'Restons en Contact',
    'contact.title': 'Contact',
    'contact.intro': 'Je suis toujours intéressée par de nouveaux projets et collaborations. Que vous ayez une question ou simplement envie de dire bonjour, je ferai de mon mieux pour vous répondre rapidement.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Merci pour votre message!',
    'contact.successDetail': 'Je vous contacterai très bientôt.',
    'contact.location': 'Localisation',
    'contact.connect': 'Connectez-vous avec moi',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    
    // Education & Experience
    'edu.title': 'Formation',
    'exp.title': 'Expérience',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

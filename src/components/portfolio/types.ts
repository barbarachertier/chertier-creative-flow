
import { ReactNode } from 'react';

export interface Category {
  id: string;
  name: string;
  icon: ReactNode;
  description?: string;
  coverImage?: string;
  bgColor?: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  images?: string[];
  video?: boolean;
  videoSrc?: string; // <- nouveau si tu veux inclure la vidéo locale
  tools?: string[];
  link?: string;
}


export type NavigationLevel = 'categories' | 'projects' | 'projectDetail';

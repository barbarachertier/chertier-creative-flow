
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
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
  tools?: string[];
}

export type NavigationLevel = 'categories' | 'projects' | 'detail';

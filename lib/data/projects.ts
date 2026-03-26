export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  previewImage: string;
  previewAlt: string;
  status?: "completed" | "in-progress";
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'e-shop',
    description: 'Full-stack e-commerce solution with real-time inventory management.',
    technologies: ['Next.js', 'TypeScript'],
    previewImage: '/projects/e-shop-hero.png',
    previewAlt: 'E-shop hero section preview',
    status: 'in-progress',
    link: '#',
    github: '#',
  },
];

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
    title: "Fake Shop",
    description:
      "An e-commerce web app built with Next.js and TypeScript that uses the Fake Store API to fetch products, categories, and product details in real time.",
    technologies: ["Next.js", "TypeScript"],
    previewImage: "/images/fake-shop.png",
    previewAlt: "Fake Shop hero section preview",
    status: "completed",
    link: "https://fake-shop-ivory.vercel.app/",
    github: "https://github.com/KormTaiyi/fake-shop",
  },
];

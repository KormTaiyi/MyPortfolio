export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "NextJs",
      "Flutter",
      "React Native",
    ],
  },
  {
    category: "Backend",
    items: ["Java", "SpringBoot", "Php", "Laravel"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman"],
  },
];

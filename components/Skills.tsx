"use client";

import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-5 space-y-4 animate-fadeInUp">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-2xl p-4 border-2 border-gray-500"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover-glow cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-wrap">
        <div className="mb-14 text-center">
          <h2 className="section-title">Skills</h2>
          <p className="mx-auto section-subtitle">
            A practical toolbox for building, shipping, and maintaining modern
            web products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <article
              key={skillGroup.category}
              className="glass-panel hover-glow relative overflow-hidden p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />

              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">
                  {skillGroup.category}
                </h3>
                <span className="rounded-full border border-white/12 bg-white/3 px-3 py-1 text-xs text-foreground/65">
                  {skillGroup.items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data/projects";

const hasRealLink = (url: string) => {
  const value = url.trim();
  return value.length > 0 && value !== "#";
};

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-wrap">
        <div className="mb-14 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="mx-auto section-subtitle">
            Selected work focused on performance, maintainability, and
            user-centered interfaces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const liveReady = hasRealLink(project.link);
            const codeReady = hasRealLink(project.github);
            const isInProgress = project.status === "in-progress";

            return (
              <article
                key={project.id}
                className="glass-panel hover-glow group relative overflow-hidden p-6 sm:p-7"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isInProgress && (
                  <span className="absolute right-2 top-2 z-20 inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/12 px-3 py-1 text-xs font-medium text-amber-200">
                    Not Complete Yet
                  </span>
                )}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 opacity-60 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center rounded-full border border-white/12 bg-white/3 px-3 py-1 text-xs uppercase tracking-[0.14em] text-foreground/60">
                    Project {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-white/12 bg-black/20">
                    <Image
                      src={project.previewImage}
                      alt={project.previewAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 via-transparent to-transparent" />
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-foreground/72">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(liveReady || codeReady) && (
                    <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                      {liveReady && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/3 px-4 py-2 text-sm text-foreground/88 transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}

                      {codeReady && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/3 px-4 py-2 text-sm text-foreground/88 transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

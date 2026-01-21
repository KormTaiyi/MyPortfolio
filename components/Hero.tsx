"use client";

import { profile } from "@/lib/data/profile";

interface HeroProps {
  onScroll: (section: string) => void;
}

export function Hero({ onScroll }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 mb-8">
            I’m passionate about developing responsive websites from scratch and
            transforming creativity and knowledge into modern, user-friendly web
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onScroll("projects")}
              className="px-8 py-3 bg-primary hover-glow text-primary-foreground font-semibold rounded-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => onScroll("contact")}
              className="px-8 py-3 border-2 border-primary text-primary hover-glow font-semibold rounded-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

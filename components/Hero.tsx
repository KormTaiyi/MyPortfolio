"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/data/profile";

interface HeroProps {
  onScroll: (section: string) => void;
}

const quickStats = ["1+ year building products", "Frontend + backend delivery", "Open to remote collaboration"];

export function Hero({ onScroll }: HeroProps) {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center overflow-hidden pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-10 top-24 h-64 w-64 rounded-full bg-primary/18 blur-3xl" />
        <div
          className="animate-drift absolute right-0 top-32 h-72 w-72 rounded-full bg-accent/18 blur-3xl"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="animate-drift absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-primary/12 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="section-wrap relative z-10 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fadeInUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/3 px-4 py-2 text-sm text-foreground/80">
            <Sparkles size={16} className="text-accent" />
            Building modern web experiences
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-primary via-cyan-200 to-accent bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/72 sm:text-xl">
            {profile.title} focused on crafting responsive, performant products that feel polished and intuitive from first click to final interaction.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => onScroll("projects")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              View My Work
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onScroll("contact")}
              className="inline-flex items-center justify-center rounded-xl border border-white/18 bg-white/3 px-6 py-3 text-sm font-semibold text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              Let&apos;s Talk
            </button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickStats.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-foreground/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-slideInRight glass-panel hover-glow p-7 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/55">
            Current Focus
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Shipping useful products with clean UX and reliable code.
          </h2>
          <p className="mt-4 text-foreground/72">
            I care about performance, maintainability, and collaboration. The goal is always simple: deliver an experience users enjoy and teams can scale.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-xl border border-white/10 bg-white/3 p-4 text-sm text-foreground/82">
              Modern stack: Next.js, TypeScript, and scalable backend services.
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 p-4 text-sm text-foreground/82">
              Product mindset: usability first, then clean architecture and growth.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

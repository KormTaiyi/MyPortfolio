"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data/profile";

const highlights = [
  "Responsive interfaces that work smoothly across devices",
  "Team-focused workflow with strong communication",
  "Continuous learning and fast adaptation to new tools",
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-wrap">
        <div className="mb-14">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I combine product thinking with practical engineering so ideas can
            move from concept to a polished user experience.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="animate-slideInLeft">
            <div className="glass-panel group relative mx-auto w-full max-w-[20rem] overflow-hidden p-4">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/16 via-transparent to-accent/16 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/12">
                <Image
                  src="/my_pic.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="relative mt-4 rounded-xl border border-white/10 bg-white/3 p-4 text-sm text-foreground/80">
                {profile.title}
              </div>
            </div>
          </div>

          <div className="animate-slideInRight space-y-6">
            <p className="text-base leading-relaxed text-foreground/82 sm:text-lg">
              {profile.bio}
            </p>

            <p className="text-base leading-relaxed text-foreground/76 sm:text-lg">
              {profile.additionalBio}
            </p>

            <div className="glass-panel space-y-3 p-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground/82 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Github, Mail, Send } from "lucide-react";
import { profile } from "@/lib/data/profile";

const currentYear = new Date().getFullYear();

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-16">
      <div className="section-wrap">
        <div className="glass-panel overflow-hidden">
          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/14 via-transparent to-accent/12" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="section-title">Let&apos;s Build Something Great</h2>
              <p className="mx-auto mt-5 text-base leading-relaxed text-foreground/72 sm:text-lg">
                I&apos;m open to new opportunities and collaborations. If you have a project in mind, let&apos;s connect and make it real.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
                >
                  <Mail size={18} />
                  Send an Email
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/3 px-6 py-3 text-sm font-semibold text-foreground/88 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Github size={18} />
                  GitHub Profile
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-3 border-t border-white/10 pt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/3 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                  title="GitHub"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/3 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                  title="Email"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/3 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                  title="Telegram"
                >
                  <Send size={16} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-foreground/55">
          © {currentYear} {profile.name}. Designed and built with Next.js and Tailwind CSS.
        </div>
      </div>
    </section>
  );
}

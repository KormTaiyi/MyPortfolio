'use client';

import { Github, Mail, Send } from 'lucide-react';
import { profile } from '@/lib/data/profile';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
        <p className="text-foreground/70 text-lg mb-12">
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 px-8 py-3 bg-primary hover-glow text-primary-foreground font-semibold rounded-lg"
          >
            <Mail size={20} />
            Send me an Email
          </a>
          <a
            href={profile.github}
            className="flex items-center gap-3 px-8 py-3 border-2 border-primary text-primary hover-glow font-semibold rounded-lg"
          >
            <Github size={20} />
            GitHub Profile
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-center gap-8">
            <a
              href={profile.github}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.telegram}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title="Telegram"
            >
              <Send size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-foreground/50 text-sm">
            © {2026} {profile.name}. Designed & built with ❤️ using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

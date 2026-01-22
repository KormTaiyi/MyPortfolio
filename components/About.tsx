"use client";

import Image from "next/image";
import { profile } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="animate-slideInLeft"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-64 h-72 md:w-72 md:h-80 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-primary/30 to-primary/10 blur-xl opacity-60 group-hover:opacity-80"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 ">
                  <Image
                    src="/my_pic.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-slideInRight"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-foreground/80 text-lg leading-relaxed">
              {profile.bio}
            </p>
            <br />
            <p className="text-foreground/80 text-lg leading-relaxed">
              {profile.additionalBio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

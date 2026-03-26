"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data/constants";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const formatLabel = (label: string) =>
  label.charAt(0).toUpperCase() + label.slice(1);

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (item: string) => {
    onSectionChange(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/12 bg-background/72 px-4 py-3 shadow-[0_18px_48px_-30px_rgba(6,15,35,0.95)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => handleNavClick("home")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm font-semibold text-foreground/90 transition-colors hover:text-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-glow" />
            KT
          </button>

          <div className="hidden items-center gap-1 rounded-xl border border-white/8 bg-white/2 p-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-foreground/70 hover:bg-white/6 hover:text-foreground"
                  }`}
                >
                  {formatLabel(item)}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/3 p-2 text-foreground/80 transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-xl border border-white/10 bg-card/92 p-2 shadow-[0_16px_36px_-24px_rgba(4,12,30,0.9)] md:hidden">
            <div className="grid gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-white/6 hover:text-foreground"
                    }`}
                  >
                    {formatLabel(item)}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/Icon";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#download", label: "Download" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-borderline bg-deep/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-cyan/50 [animation:core-throb_3.2s_ease-in-out_infinite]" />
            <span className="absolute inset-1.5 rounded-full bg-cyan/20 blur-[2px]" />
            <span className="relative h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_#00e8ff]" />
          </span>
          <span className="font-display text-lg font-bold tracking-[0.22em] text-frost">
            VEX
          </span>
          <span className="label-mono hidden text-[10px] text-mute sm:inline">
            v1.9
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-mono text-[11px] text-mist/80 transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="label-mono hidden items-center gap-2 rounded-full border border-ember/60 bg-ember/10 px-4 py-2 text-[11px] text-ember transition-all hover:bg-ember hover:text-void hover:shadow-[0_0_24px_rgba(255,85,0,0.5)] sm:inline-flex"
          >
            <Icon name="download" className="text-[13px]" />
            Download Free
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-borderline text-cyan md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-lg" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-borderline bg-deep/90 px-6 md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="label-mono block border-b border-borderline/50 py-4 text-[12px] text-mist transition-colors hover:text-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="label-mono block py-4 text-[12px] text-ember"
              >
                ↓ Download Free
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
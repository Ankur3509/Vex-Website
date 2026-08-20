"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CornerBrackets } from "@/components/CornerBrackets";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { HOW_IT_WORKS, SOCIALS } from "@/lib/content";

const STATUS_COLOR: Record<string, string> = {
  BOOT: "text-teal",
  AUTH: "text-cyan",
  CALIBRATE: "text-ember",
  ONLINE: "text-neon",
};

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, amount: 0.4 });

  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          code="BOOT_SEQUENCE // 01"
          title={
            <>
              From <span className="text-cyan">zero</span> to{" "}
              <span className="text-cyan">talking</span> in four steps
            </>
          }
          sub="No account, no credit card, no 40-minute onboarding. Just an installer, a free key, and a few optional questions — then it's yours."
        />

        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            ref={lineRef}
            className="absolute left-[12.5%] right-[12.5%] top-[52px] hidden h-px md:block"
          >
            <div className="absolute inset-0 bg-borderline" />
            <motion.div
              className="absolute inset-0 origin-left bg-gradient-to-r from-teal via-cyan to-neon shadow-[0_0_12px_rgba(0,232,255,0.8)]"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            <motion.span
              className="absolute -top-[5px] left-0 h-[11px] w-[11px] rounded-full bg-cyan shadow-[0_0_12px_#00e8ff]"
              initial={{ left: "0%" }}
              animate={lineInView ? { left: "100%" } : {}}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
            />
          </div>

          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4" stagger={0.16}>
            {HOW_IT_WORKS.map((step, i) => (
              <StaggerItem key={step.step}>
                <article className="group relative flex h-full flex-col rounded-xl border border-borderline bg-panel/70 p-6 pt-10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-cyan/40 hover:shadow-[0_0_28px_rgba(0,232,255,0.14)] md:h-[240px]">
                  <CornerBrackets />
                  {/* mobile rail */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute -bottom-6 left-[26px] top-auto h-6 w-px bg-gradient-to-b from-cyan/60 to-cyan/10 md:hidden"
                    />
                  )}
                  <span className="absolute right-6 top-5 font-display text-4xl font-bold text-frost/5 transition-colors duration-300 group-hover:text-cyan/15">
                    {step.step}
                  </span>
                  <span
                    className={`label-mono absolute left-6 top-5 inline-flex items-center gap-1.5 text-[10px] ${STATUS_COLOR[step.status]}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        step.status === "ONLINE"
                          ? "animate-pulse bg-neon shadow-[0_0_8px_#00ff88]"
                          : "bg-current opacity-80"
                      }`}
                    />
                    {step.status}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-frost">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline"
                    >
                      <Icon name="key" className="text-[12px]" />
                      {step.link.label}
                    </a>
                  )}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-14 text-center">
          <p className="label-mono text-[11px] text-mute">
            QUICK START — GEMINI KEY AT{" "}
            <a
              href={SOCIALS.aiStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline decoration-cyan/40 underline-offset-4 hover:decoration-cyan"
            >
              aistudio.google.com/apikey
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
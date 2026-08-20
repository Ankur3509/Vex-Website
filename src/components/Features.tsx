"use client";

import { motion } from "framer-motion";
import { CornerBrackets } from "@/components/CornerBrackets";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { FEATURE_GROUPS } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          code="SUBSYSTEM_REPORT // 02"
          title={
            <>
              Everything it does. <span className="text-cyan">Nothing it doesn&apos;t.</span>
            </>
          }
          sub="Grouped exactly as the app is built — six subsystems, dispatched to four named agents. Every capability below is live in the current build."
        />

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
          {FEATURE_GROUPS.map((group) => (
            <StaggerItem key={group.id}>
              <motion.article
                whileHover={{ y: -3, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col rounded-2xl border border-borderline bg-panel/60 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-cyan/40 hover:shadow-[0_0_40px_rgba(0,232,255,0.12)] sm:p-8"
              >
                <CornerBrackets className="transition-opacity duration-300 opacity-60 group-hover:opacity-100" />

                <header className="mb-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/5 text-xl text-cyan transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(0,232,255,0.35)]">
                    <Icon
                      name={
                        (
                          {
                            conversation: "wave",
                            vision: "camera",
                            control: "desktop",
                            messaging: "whatsapp",
                            productivity: "doc",
                            access: "phone",
                          } as Record<string, string>
                        )[group.id]
                      }
                    />
                  </span>
                  <div>
                    <p className="label-mono text-[10px] text-cyan/80">{group.code}</p>
                    <h3 className="font-display text-xl font-semibold text-frost">
                      {group.label}
                    </h3>
                    <p className="mt-1 text-sm text-mist/80">{group.tagline}</p>
                  </div>
                </header>

                <ul className="flex flex-1 flex-col gap-4">
                  {group.features.map((f) => (
                    <li
                      key={f.title}
                      className="relative rounded-lg border-l border-cyan/25 bg-deep/50 px-4 py-3 transition-colors duration-300 hover:border-l-cyan hover:bg-cyan/[0.04]"
                    >
                      <div className="flex items-start gap-3">
                        <Icon
                          name={f.icon}
                          className="mt-0.5 shrink-0 text-sm text-cyan/80"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-frost">
                            {f.title}
                          </h4>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-mist/90">
                            {f.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="label-mono mt-10 text-center text-[11px] text-mute">
          + UNDER THE HOOD: BROWSER AUTOMATION · DOCUMENT INTELLIGENCE · FLIGHT & WEATHER ·
          YOUTUBE · REMINDERS · GAME DOWNLOADS · SYSTEM MONITORING
        </p>
      </div>
    </section>
  );
}
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CornerBrackets } from "@/components/CornerBrackets";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { FAQS } from "@/lib/content";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          code="INTERROGATION_LOOP // 06"
          title={
            <>
              Questions, <span className="text-cyan">answered straight</span>
            </>
          }
          sub="The honest versions. We'd rather lose a download than mislead you."
        />

        <Stagger className="flex flex-col gap-4" stagger={0.08}>
          {FAQS.map((f, i) => (
            <StaggerItem key={f.q}>
              <div className="relative overflow-hidden rounded-xl border border-borderline bg-panel/60 backdrop-blur-sm transition-colors duration-300 hover:border-cyan/30">
                <CornerBrackets />
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold text-frost">
                      {f.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-cyan/70"
                  >
                    <Icon name="chevron" className="text-lg" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-borderline/50 px-6 pb-6 pt-4 text-sm leading-relaxed text-mist">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
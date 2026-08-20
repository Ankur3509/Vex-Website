"use client";

import { motion } from "framer-motion";
import { CornerBrackets } from "@/components/CornerBrackets";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { DOWNLOAD } from "@/lib/content";

const FREE_INCLUDES = [
  "Every feature on this page — conversation, vision, control, messaging, productivity, access",
  "Named sub-agents (GENESIS · OPTIX · PROBE · ARCHIVE) with live dispatch view",
  "Long-term memory, visual memory vault, and custom routines",
  "Unlimited devices & unlimited voice sessions — no account, no signup",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          code="PLAN_MATRIX // 05"
          title={
            <>
              Free, <span className="text-cyan">right now</span>. Built for what&apos;s next.
            </>
          }
          sub="VEX is in beta and costs nothing — no credit card, no account, no trial clock. The layout below is future-proofed: when paid tiers arrive, they slot straight in."
        />

        <Stagger className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3" stagger={0.15}>
          {/* ── Free / Beta card ─────────────────────────────────────── */}
          <StaggerItem className="lg:row-span-1">
            <motion.article
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col rounded-2xl border border-cyan/40 bg-panel/70 p-8 backdrop-blur-sm glow-ring transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(0,232,255,0.22)]"
            >
              <CornerBrackets glow />
              <div className="flex items-center justify-between">
                <span className="label-mono text-[10px] text-cyan">CURRENT</span>
                <span className="label-mono flex items-center gap-1.5 rounded-full border border-neon/50 bg-neon/10 px-2.5 py-1 text-[9px] text-neon">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-neon" />
                  BETA
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-frost">Free</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-cyan glow-text">
                  $0
                </span>
                <span className="label-mono text-[10px] text-mute">
                  WHILE IT&apos;S IN BETA
                </span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {FREE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist">
                    <Icon name="check" className="mt-0.5 shrink-0 text-neon" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={DOWNLOAD.href}
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-cyan/70 bg-cyan/10 px-6 py-3.5 font-display text-sm font-semibold text-frost transition-all duration-300 hover:bg-cyan/20 hover:shadow-[0_0_32px_rgba(0,232,255,0.45)]"
              >
                <Icon name="download" className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Free
              </a>
              <p className="label-mono mt-3 text-center text-[9px] text-mute">
                WINDOWS 10/11 · GEMINI FREE-TIER KEY REQUIRED
              </p>
            </motion.article>
          </StaggerItem>

          {/* ── Reserved slots — hidden until they exist ─────────────── */}
          {[
            {
              name: "PRO",
              tag: "PLANNED",
              hint: "When a paid tier ships, it lands here — same drop-in slot, no redesign.",
            },
            {
              name: "ALT",
              tag: "RESERVED",
              hint: "Room for a second tier or a team plan. This row is ready; the products aren't.",
            },
          ].map((tier) => (
            <StaggerItem key={tier.name}>
              <div className="relative flex h-full flex-col rounded-2xl border border-dashed border-borderline/70 bg-deep/30 p-8 backdrop-blur-sm">
                <CornerBrackets color="rgba(58,108,130,0.4)" />
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[10px] text-mute">{tier.tag}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-borderline text-mute">
                    <Icon name="lock" className="text-sm" />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-mute/60">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute/70">{tier.hint}</p>
                <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-mute/50">
                  <span className="h-px w-6 bg-borderline" />
                  NO PRICING YET — NOTHING TO SELL
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="label-mono mx-auto mt-10 max-w-xl text-center text-[11px] leading-relaxed text-mute">
          PAID TIERS STAY FAITHFUL TO FINE PRINT: WHAT&apos;S FREE NOW REMAINS DEFINED HERE — ANY
          FUTURE PRO TIER IS ADDITIVE ON TOP
        </p>
      </div>
    </section>
  );
}
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { Icon } from "@/components/Icon";
import { STATS } from "@/lib/content";

const ParticleSphere = dynamic(() => import("@/components/ParticleSphere"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 rounded-full border border-cyan/30 bg-cyan/5 shadow-[0_0_80px_rgba(0,232,255,0.25)] [animation:core-throb_2.5s_ease-in-out_infinite]" />
    </div>
  ),
});

const HEADLINE_WORDS = ["Your", "own", "JARVIS.", "For", "real."];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* ── Particle sphere centerpiece ─────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          aria-hidden
          className="absolute h-[46rem] w-[46rem] max-w-none rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,232,255,0.16) 0%, rgba(18,214,196,0.06) 34%, rgba(122,92,255,0.03) 55%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative aspect-square h-[60vh] max-h-[640px] min-h-[320px] w-auto max-w-[92vw]">
            <ParticleSphere />
          </div>
        </div>
      </div>

      {/* ── Boot chips ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="relative z-10 mb-6 flex flex-wrap items-center justify-center gap-2"
      >
        {["WINDOWS 10/11", "FREE BETA", "VOICE + VISION", "NO ACCOUNT"].map(
          (chip) => (
            <span
              key={chip}
              className="label-mono rounded-full border border-borderline bg-panel px-3 py-1 text-[10px] text-mist/90 backdrop-blur-sm"
            >
              {chip}
            </span>
          )
        )}
      </motion.div>

      {/* ── Headline ────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <p className="label-mono mb-4 inline-flex items-center gap-2 text-cyan/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan shadow-[0_0_8px_#00e8ff]" />
          SYS.STATUS — AWAKENING
        </p>
        <h1
          aria-label="Your own JARVIS. For real."
          className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-frost sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {HEADLINE_WORDS.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.13, ease: EASE }}
              className={`mr-[0.24em] inline-block ${
                w === "JARVIS." ? "glow-text text-cyan" : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg md:mt-8"
        >
          Not another chatbot. VEX is a{" "}
          <span className="text-frost">real-time voice AI for Windows</span> —
          talk over it mid-sentence, show it your screen, hand it your desktop,
          and it keeps up. <span className="text-cyan">It talks back, instantly.</span>
        </motion.p>

        {/* ── CTAs ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#download"
            className="group relative inline-flex items-center gap-2.5 rounded-full border border-cyan/70 bg-cyan/10 px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-frost backdrop-blur-sm transition-all duration-300 hover:bg-cyan/20 hover:shadow-[0_0_36px_rgba(0,232,255,0.45)] glow-ring"
          >
            <Icon
              name="download"
              className="text-base transition-transform duration-300 group-hover:translate-y-0.5"
            />
            Download Free
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center gap-2.5 rounded-full border border-borderline px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-mist transition-all duration-300 hover:border-cyan/50 hover:text-cyan"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[10px]">
              <Icon name="arrow" className="text-[10px] group-hover:translate-y-px" />
            </span>
            Watch it in action
          </a>
        </motion.div>
      </div>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="relative z-10 mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-borderline bg-borderline/40 sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 bg-panel px-6 py-5 backdrop-blur-sm"
          >
            <dt className="order-2 label-mono text-[10px] text-mute">{s.label}</dt>
            <dd className="order-1 font-display text-3xl font-bold text-cyan glow-text">
              <CountUp value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </motion.dl>

      {/* ── HUD corner readouts ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-6 hidden items-end justify-between lg:flex"
      >
        <div className="label-mono text-[10px] leading-relaxed text-mute">
          CORE.REACTOR — FIBONACCI SPHERE
          <br />
          PARTICLE_COUNT: 1520
        </div>
        <div className="label-mono text-right text-[10px] leading-relaxed text-mute">
          BUILD // VEX 1.9
          <br />
          ENGINE.EXEC — LOST LAD
        </div>
      </motion.div>

      <a
        href="#how-it-works"
        aria-label="Scroll to how it works"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-mute transition-colors hover:text-cyan lg:bottom-6"
      >
        <Icon
          name="chevron"
          className="text-2xl [animation:floaty_2.4s_ease-in-out_infinite]"
        />
      </a>
    </section>
  );
}
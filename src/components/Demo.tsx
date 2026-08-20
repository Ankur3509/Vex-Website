"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CornerBrackets } from "@/components/CornerBrackets";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";

type LogEntry = {
  id: number;
  who: "YOU" | "VEX" | "SYS";
  text: string;
  agent?: string;
};

type State = "LISTENING" | "THINKING" | "SPEAKING";

const STATE_COLOR: Record<State, string> = {
  LISTENING: "#00e8ff",
  THINKING: "#12d6c4",
  SPEAKING: "#00ff88",
};

const SCRIPT: Array<{
  who: "YOU" | "VEX" | "SYS";
  text: string;
  agent?: string;
  think?: number;
  delay: number;
}> = [
  { who: "SYS", text: "core online — gemini live session established", agent: "CORE", delay: 900 },
  { who: "VEX", text: "Core online. Gemini live session established. At your service.", think: 500, delay: 900 },
  { who: "YOU", text: "What's on my screen?", delay: 2200 },
  { who: "SYS", text: "capture: screen → gemini analysis", agent: "OPTIX", delay: 500 },
  { who: "VEX", text: "That's the Gemini quickstart page on your second monitor — and the YOLO model is warm.", think: 600, delay: 2600 },
  { who: "VEX", text: "Opening the camera feed.", think: 300, delay: 1600 },
  { who: "YOU", text: "Show me the sphere. Hologram view.", delay: 2400 },
  { who: "SYS", text: "hologram: test_sphere.gltf → viewport", agent: "OPTIX", delay: 500 },
  { who: "VEX", text: "Summoning the sphere. Rotate it, zoom in — or ask for the exploded view.", think: 600, delay: 2600 },
  { who: "YOU", text: "Deep research on quantum entanglement.", delay: 2200 },
  { who: "SYS", text: "research: quantum entanglement → background task", agent: "PROBE", delay: 500 },
  { who: "VEX", text: "PROBE is researching. I'll keep talking to you meanwhile — the report will be waiting in your research notes.", think: 700, delay: 3000 },
  { who: "VEX", text: "By the way — flights to Tokyo drop ~12% this weekend. Want me to monitor the price?", think: 900, delay: 3200 },
];

const LOG_AGENTS = ["GENESIS", "OPTIX", "PROBE", "ARCHIVE"];
const SPECTRUM_BARS = 26;
const TRANSCRIPT_PRESETS = [
  "Rotate the model 45 degrees",
  "Check my WhatsApp",
  "Open Spotify and play something chill",
];

function CoreVisual({ state }: { state: State }) {
  const color = STATE_COLOR[state];
  return (
    <div className="relative flex aspect-square w-full max-w-[260px] items-center justify-center">
      <div
        className="absolute inset-0 rounded-full blur-2xl transition-colors duration-500"
        style={{ background: color, opacity: 0.14 }}
      />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-dashed"
          style={{
            borderColor: `${color}55`,
            animation: `${i % 2 === 0 ? "ring-spin" : "ring-spin-rev"} ${12 + i * 5}s linear infinite`,
            transform: `rotateX(72deg) rotateY(${i * 30}deg)`,
          }}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 10px ${color}`,
            animation: `ring-spin ${8 + i * 3}s linear infinite`,
            transform: `translate(-50%,-50%) rotate(${(i * 90) + 45}deg) translateX(${94 + i * 10}px)`,
          }}
        />
      ))}
      <div
        className="h-24 w-24 rounded-full transition-all duration-700"
        style={{
          background: `radial-gradient(circle, #ffffff 0%, ${color} 30%, ${color}55 55%, transparent 75%)`,
          animation: "core-throb 2.6s ease-in-out infinite",
          boxShadow: `0 0 40px ${color}80, 0 0 90px ${color}40`,
        }}
      />
    </div>
  );
}

function Spectrum() {
  return (
    <div className="flex h-12 items-end gap-[3px]">
      {Array.from({ length: SPECTRUM_BARS }).map((_, i) => (
        <span
          key={i}
          className="w-1 flex-1 origin-bottom rounded-t-sm bg-cyan/70"
          style={{
            height: "100%",
            animation: `bar-eq ${0.9 + (i % 5) * 0.18}s ease-in-out ${i * 0.045}s infinite`,
            boxShadow: "0 0 6px rgba(0,232,255,0.5)",
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}

function Gauge({ label, value, color }: { label: string; value: number; color: string }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-14 w-14">
        <svg viewBox="0 0 56 56" className="h-full w-full -rotate-90">
          <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(58,108,130,0.3)" strokeWidth="3" />
          <motion.circle
            cx="28"
            cy="28"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            animate={{ strokeDashoffset: c - (c * value) / 100 }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-frost">
          {value}%
        </span>
      </div>
      <span className="label-mono text-[8px] text-mute">{label}</span>
    </div>
  );
}

function VisionOverlay() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-borderline bg-deep">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(rgba(0,232,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/80 shadow-[0_0_10px_#00e8ff] [animation:pulse-dot_2s_ease-in-out_infinite]" />
        {/* YOLO bounding box — person */}
        <div className="absolute left-[14%] top-[16%] h-[62%] w-[34%]">
          <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-cyan" />
          <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-cyan" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan" />
          <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan" />
          <span className="absolute -top-4 left-0 font-mono text-[8px] text-cyan">
            person 0.92
          </span>
        </div>
        {/* YOLO bounding box — cup */}
        <div className="absolute left-[58%] top-[52%] h-[26%] w-[20%]">
          <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-teal" />
          <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-teal" />
          <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-teal" />
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-teal" />
          <span className="absolute -top-4 right-0 font-mono text-[8px] text-teal">
            cup 0.84
          </span>
        </div>
        <span className="label-mono absolute left-2 top-2 text-[8px] text-frost/60">
          ⬡ DETECTED [2]: person, cup
        </span>
        <span className="label-mono absolute right-2 top-2 flex items-center gap-1 text-[8px] text-neon">
          <span className="h-1 w-1 animate-pulse rounded-full bg-neon" /> LIVE
        </span>
      </div>
    </div>
  );
}

export function Demo() {
  const [log, setLog] = useState<LogEntry[]>([
    { id: 0, who: "SYS", text: "hud init — waiting for input", agent: "CORE" },
  ]);
  const [state, setState] = useState<State>("LISTENING");
  const [typed, setTyped] = useState("");
  const [agentActive, setAgentActive] = useState<string | null>("CORE");
  const [custom, setCustom] = useState("");
  const logEndRef = useRef<HTMLDivElement>(null);
  const idx = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const idCounter = { n: 0 };

    const pushLog = (e: (typeof SCRIPT)[number], c: { n: number }) => {
      c.n += 1;
      setLog((prev) => [...prev.slice(-5), { id: c.n, who: e.who, text: e.text, agent: e.agent }]);
      if (e.agent) setAgentActive(e.agent);
    };

    const run = () => {
      if (cancelled) return;
      const entry = SCRIPT[idx.current % SCRIPT.length];
      idx.current += 1;

      if (entry.who === "VEX") {
        setState("THINKING");
        timer = setTimeout(() => {
          if (cancelled) return;
          setState("SPEAKING");
          setTyped("");
          const chars = entry.text;
          let i = 0;
          const typeTick = () => {
            if (cancelled) return;
            i += 1;
            setTyped(chars.slice(0, i));
            if (i < chars.length) {
              timer = setTimeout(typeTick, 22);
            } else {
              timer = setTimeout(() => {
                if (cancelled) return;
                pushLog(entry, idCounter);
                setTyped("");
                setState("LISTENING");
                timer = setTimeout(run, entry.delay);
              }, 1100);
            }
          };
          timer = setTimeout(typeTick, 60);
        }, entry.think ?? 400);
      } else {
        pushLog(entry, idCounter);
        if (entry.agent) setAgentActive(entry.agent);
        timer = setTimeout(run, entry.delay);

        if (entry.agent && !entry.agent.startsWith("CORE")) {
          timer = setTimeout(() => setAgentActive(null), 1800);
        }
      }
    };

    timer = setTimeout(run, 700);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [log, typed]);

  const submitPreset = (text: string) => {
    pushNow({ who: "YOU", text }, { n: log.length + 1000 });
  };

  const pushNow = (e: { who: "YOU"; text: string }, c: { n: number }) => {
    c.n += 1;
    setLog((prev) => [...prev.slice(-5), { id: c.n, who: e.who, text: e.text }]);
  };

  const onType = (text: string) => {
    pushNow({ who: "YOU", text }, { n: log.length + 2000 });
    setCustom("");
  };

  const stateColor = STATE_COLOR[state];

  return (
    <section id="demo" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          code="LIVE_SESSION // 03"
          title={
            <>
              See it in action — <span className="text-cyan">the VEX HUD</span>
            </>
          }
          sub="An interactive recreation of VEX's actual interface: core reactor, comm log, agent dispatch, vision overlay. Screen footage is on the way — for now, this is the real look, running live."
        />

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Left column: chat / comm log ─────────────────────────── */}
          <RevealShell>
            <div className="relative flex h-full flex-col rounded-2xl border border-borderline bg-panel/70 p-5 backdrop-blur-sm">
              <CornerBrackets />
              <header className="mb-4 flex items-center justify-between border-b border-borderline/60 pb-3">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full transition-colors duration-500"
                    style={{ background: stateColor, boxShadow: `0 0 10px ${stateColor}` }}
                  />
                  <span className="font-mono text-[11px] tracking-[0.2em] text-frost">
                    VEX // COMM LOG
                  </span>
                </div>
                <span
                  className="font-mono text-[10px] tracking-[0.25em] transition-colors duration-500"
                  style={{ color: stateColor }}
                >
                  {state}
                </span>
              </header>

              <div className="flex-1 space-y-3 overflow-hidden font-mono text-[13px]">
                <AnimatePresence initial={false}>
                  {log.map((l) => (
                    <motion.div
                      key={l.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="leading-relaxed"
                    >
                      <span
                        className={
                          l.who === "YOU"
                            ? "text-ember"
                            : l.who === "SYS"
                              ? "text-teal"
                              : "text-cyan"
                        }
                      >
                        [{l.who}]
                      </span>{" "}
                      <span className="text-mist">{l.text}</span>
                      {l.agent && (
                        <span className="ml-2 rounded-sm border border-cyan/30 px-1.5 py-0.5 text-[9px] text-cyan/80">
                          {l.agent}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {typed && state === "SPEAKING" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="leading-relaxed"
                  >
                    <span className="text-cyan">[VEX]</span>{" "}
                    <span className="text-mist">{typed}</span>
                    <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-cyan [animation:blink_0.9s_step-end_infinite]" />
                  </motion.div>
                )}
                <div ref={logEndRef} />
              </div>

              {/* ── Input ─────────────────────────────────────────────── */}
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/50 text-cyan [animation:core-throb_2.6s_ease-in-out_infinite]">
                    <Icon name="mic" className="text-base" />
                  </span>
                  <form
                    className="flex flex-1 items-center gap-2 rounded-full border border-borderline bg-deep/70 px-4 py-2.5 focus-within:border-cyan/50"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (custom.trim()) onType(custom.trim());
                    }}
                  >
                    <input
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      placeholder="Or type a command… (voice works the same)"
                      className="w-full bg-transparent font-mono text-[12px] text-frost placeholder:text-mute focus:outline-none"
                      aria-label="Demo command input"
                    />
                  </form>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TRANSCRIPT_PRESETS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => submitPreset(p)}
                      className="rounded-full border border-borderline bg-deep/50 px-3 py-1.5 font-mono text-[10px] text-mist transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </RevealShell>

          {/* ── Right column: reactor + vision ───────────────────────── */}
          <RevealShell delay={0.15}>
            <div className="relative flex h-full flex-col gap-5 rounded-2xl border border-borderline bg-panel/70 p-5 backdrop-blur-sm">
              <CornerBrackets />
              <div className="flex items-center justify-between border-b border-borderline/60 pb-3">
                <span className="font-mono text-[11px] tracking-[0.2em] text-frost">
                  ARC REACTOR // CORE
                </span>
                <span className="label-mono text-[9px] text-ember">
                  ⚠ RECREATION — NOT FOOTAGE
                </span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <CoreVisual state={state} />
                <Spectrum />
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="flex gap-3">
                  <Gauge label="CPU" value={34} color="#00e8ff" />
                  <Gauge label="RAM" value={61} color="#12d6c4" />
                </div>
                <div className="flex flex-col gap-1.5">
                  {LOG_AGENTS.map((a) => (
                    <span
                      key={a}
                      className={`label-mono flex items-center gap-1.5 text-[9px] transition-colors duration-300 ${
                        agentActive === a ? "text-neon" : "text-mute"
                      }`}
                    >
                      <span
                        className={`h-1 w-1 rounded-full ${
                          agentActive === a
                            ? "bg-neon shadow-[0_0_6px_#00ff88]"
                            : "bg-mute"
                        }`}
                      />
                      {a}
                      {agentActive === a && (
                        <span className="text-[8px] text-neon/80">ACTIVE</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <VisionOverlay />
            </div>
          </RevealShell>
        </div>

        <p className="label-mono mt-8 text-center text-[11px] text-mute">
          HUD ELEMENTS: REACTOR · SPECTRUM · TELEMETRY · AGENT DISPATCH · VISION OVERLAY — ALL
          FROM THE SHIPPING APP
        </p>
      </div>
    </section>
  );
}

function RevealShell({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { CornerBrackets } from "@/components/CornerBrackets";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { DOWNLOAD, SOCIALS } from "@/lib/content";

type Platform = "windows" | "unsupported" | "checking";

const REQUIREMENTS = [
  {
    icon: "desktop",
    title: "Windows 10 / 11",
    body: "VEX is built for Windows — that's all. macOS and Linux builds don't exist yet, and we won't pretend otherwise.",
    badge: "REQUIRED",
    badgeColor: "text-ember border-ember/50",
  },
  {
    icon: "key",
    title: "Free Gemini API key",
    body: "VEX runs on Gemini's free tier. Grab a key at Google AI Studio — under a minute, no credit card.",
    link: SOCIALS.aiStudio,
    linkLabel: "aistudio.google.com/apikey",
    badge: "REQUIRED",
    badgeColor: "text-ember border-ember/50",
  },
  {
    icon: "code",
    title: "Node.js v18+",
    body: "Only if you want the WhatsApp bridge. Everything else runs without it.",
    badge: "OPTIONAL",
    badgeColor: "text-cyan border-cyan/40",
  },
  {
    icon: "alert",
    title: "Expect a SmartScreen warning",
    body: "The installer isn't code-signed (normal for indie software), so Windows shows a blue 'Windows protected your PC' prompt. Click More info → Run anyway. It's safe — it's just unsigned.",
    badge: "NORMAL",
    badgeColor: "text-teal border-teal/40",
  },
];

function getPlatform(): Platform {
  if (typeof navigator === "undefined") return "checking";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  return "unsupported";
}

function DownloadButton({ sizeHint }: { sizeHint: string }) {
  const [platform, setPlatform] = useState<Platform>("checking");

  useEffect(() => {
    const raf = requestAnimationFrame(() => setPlatform(getPlatform()));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (platform === "unsupported") {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-borderline bg-panel/60 px-6 py-6 text-center backdrop-blur-sm">
        <p className="font-display text-lg font-semibold text-frost">
          You&apos;re not on Windows — and that&apos;s okay
        </p>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          VEX is Windows-only right now. No macOS or Linux builds exist yet. After the betas
          stabilize and the download area has room to grow, they can slot in here — this
          button auto-detects your platform when that day comes.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl text-center">
      <a
        href={DOWNLOAD.href}
        className="group relative inline-flex items-center gap-3 rounded-full border border-cyan/80 bg-cyan/10 px-10 py-4 font-display text-base font-bold tracking-wide text-frost backdrop-blur-sm transition-all duration-300 hover:bg-cyan/20 hover:shadow-[0_0_46px_rgba(0,232,255,0.5)] glow-ring"
      >
        <span className="absolute -inset-1 -z-10 rounded-full bg-cyan/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan/60 text-sm">
          <Icon name="download" className="transition-transform duration-300 group-hover:translate-y-0.5" />
        </span>
        Download {DOWNLOAD.version} — Free
        <span className="label-mono rounded-full border border-borderline bg-deep/60 px-2.5 py-1 text-[9px] text-mist">
          WINDOWS .EXE
        </span>
      </a>
      <p className="label-mono mt-5 text-[11px] leading-relaxed text-mute">
        {sizeHint}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] text-mist/70">
        <span className="inline-flex items-center gap-1.5">
          <Icon name="check" className="text-neon" /> Windows 10/11
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icon name="check" className="text-neon" /> Free — no account
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icon name="check" className="text-neon" /> Gemini free tier
        </span>
        <span className="text-mute">{DOWNLOAD.checksum}</span>
      </div>
    </div>
  );
}

export function Download() {
  return (
    <section id="download" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          code="DEPLOY // 04"
          title={
            <>
              Download & <span className="text-cyan">requirements</span>
            </>
          }
          sub="Straight answers, up front. Here's exactly what you need, what it costs, and what to expect on first run."
        />

        <div className="mx-auto mb-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Stagger className="contents" stagger={0.12}>
            {REQUIREMENTS.map((r) => (
              <StaggerItem key={r.title} className={r.link ? "sm:col-span-2" : ""}>
                <article className="group relative flex h-full flex-col rounded-xl border border-borderline bg-panel/60 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-cyan/40 hover:shadow-[0_0_28px_rgba(0,232,255,0.14)]">
                  <CornerBrackets />
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/5 text-lg text-cyan">
                      <Icon name={r.icon} />
                    </span>
                    <span
                      className={`label-mono rounded-full border px-2.5 py-1 text-[9px] ${r.badgeColor}`}
                    >
                      {r.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-frost">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{r.body}</p>
                  {r.link && (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 self-start font-mono text-xs text-cyan hover:underline"
                    >
                      <Icon name="key" className="text-[12px]" />
                      {r.linkLabel}
                    </a>
                  )}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <DownloadButton sizeHint={DOWNLOAD.sizeHint} />
      </div>
    </section>
  );
}
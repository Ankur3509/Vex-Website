import { CornerBrackets } from "@/components/CornerBrackets";
import { Icon } from "@/components/Icon";
import { DOWNLOAD, SOCIALS } from "@/lib/content";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
      { label: "Requirements", href: "#download" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Setup",
    links: [
      { label: "Get a Gemini key", href: SOCIALS.aiStudio },
      { label: "Source repository", href: SOCIALS.github },
      { label: "Download VEX 1.9", href: DOWNLOAD.href },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-borderline/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="relative">
            <CornerBrackets color="rgba(0,232,255,0.35)" size={12} />
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-cyan/50" />
                <span className="relative h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_#00e8ff]" />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.22em] text-frost">
                VEX
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              A real-time voice AI assistant that sees, controls, and remembers — built to
              feel like walking into the future of your desktop.
            </p>
            <p className="label-mono mt-6 text-[10px] text-cyan/70">
              ENGINEERED BY LOST LAD
            </p>
            <p className="label-mono mt-1.5 text-[9px] text-mute">
              BUILD // VEX 1.9 · WINDOWS 10/11
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="label-mono text-[10px] text-cyan/70">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-mist/90 transition-colors hover:text-cyan"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-borderline/40 pt-8 sm:flex-row">
          <p className="label-mono text-[9px] text-mute">
            © {new Date().getFullYear()} VEX — PROJECT VEX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VEX on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-borderline text-mist transition-all hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_16px_rgba(0,232,255,0.25)]"
            >
              <Icon name="github" className="text-base" />
            </a>
            <a
              href={SOCIALS.aiStudio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google AI Studio"
              className="label-mono flex h-9 items-center rounded-lg border border-borderline px-3 text-[9px] text-mist transition-all hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_16px_rgba(0,232,255,0.25)]"
            >
              ✦ AI STUDIO
            </a>
          </div>
        </div>

        <p className="label-mono mt-6 text-center text-[9px] leading-relaxed text-mute/70">
          NOT AFFILIATED WITH GOOGLE, WHATSAPP, META, OR THE MARVEL UNIVERSE. GEMINI IS A
          GOOGLE TRADEMARK. WHATSAPP & INSTAGRAM INTEGRATIONS RUN ON THE APPS&apos; OWN
          PROTOCOLS — NOT OFFICIAL PARTNER APIS.
        </p>
      </div>
    </footer>
  );
}
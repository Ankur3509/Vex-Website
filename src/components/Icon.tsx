import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const PATHS: Record<string, ReactNode> = {
  wave: (
    <>
      <path d="M2 12c2 0 2-6 4-6s2 12 4 12 2-12 4-12 2 6 4 6" />
      <path d="M2 8c2 0 2-3 3-3m17 7c-2 0-2-3-3-3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2 21 2m-4 4 3 3" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 8A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 5 3.2A4 4 0 0 0 17 5.2a4 4 0 0 0-7.5 2.8Z" />
      <path d="M9.5 8A3.5 3.5 0 0 1 6 4.5 3.5 3.5 0 0 0 3 8a3.5 3.5 0 0 0 1 2.4A3.5 3.5 0 0 0 7 15" />
      <path d="M12 12v10M9 22h6" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16a8 8 0 0 0 4 2 8 8 0 0 0 4-2" />
      <path d="M5 15a3 3 0 0 1 2-2.8V9a5 5 0 0 1 10 0v3.2a3 3 0 0 1 2 2.8v2H5Z" />
    </>
  ),
  screen: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8m-4-4v4" />
      <path d="M5 7h7" />
    </>
  ),
  camera: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <circle cx="9" cy="12" r="3" />
      <path d="m16 10 6-3v10l-6-3" />
    </>
  ),
  memory: (
    <>
      <rect x="2" y="9" width="20" height="9" rx="2" />
      <path d="M6 9V6m4 3V6m4 3V6m4 3V6M2 13h20" />
    </>
  ),
  face: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M11 9h.01M14 9h.01M9 12c.8 1 2 1.4 3 1.4s2.2-.4 3-1.4" />
      <path d="M5 19a9 9 0 0 1 14 0M12 3v2m9 4h-2M3 9h2" />
    </>
  ),
  translate: (
    <>
      <path d="M3 5h9m-4-2v2m2-2c-1 3-3 5-6 6m7 0c-1.5 1.5-3 2-5 2m1 1L5 8m-2 7h9m5-8c-1.5 2-4 3-6 3" />
      <path d="M16 20l4-3 1 5-5-2Zm0 0 3.5-1.5" />
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <path d="M9 20h6m-3-4v4M8 16c1.5 2 6.5 2 8 0" />
    </>
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5" />
      <path d="m13 5-2 14" />
    </>
  ),
  hand: (
    <>
      <path d="M7 11V6a1.5 1.5 0 0 1 3 0v4m-3-1a1.5 1.5 0 0 1 3 0v3m0-6.5a1.5 1.5 0 0 1 3 0V8m0-1.5a1.5 1.5 0 0 1 3 0V17a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L2 14a1.8 1.8 0 0 1 3.4-1L7 16" />
    </>
  ),
  hologram: (
    <>
      <circle cx="12" cy="12" r="6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <path d="M12 6v12M12 2v4m0 12v4" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 9.5c.5 3 3 5.5 6 6l1.5-1.5-2-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-2Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
      <path d="M14 3v6h6M8 13h8m-8 4h5" />
    </>
  ),
  research: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M8 11h6m-3-3v6M11 4V2m4.9 1.1 1.4 1.4M4 8H2m2.1.9-1.4-1.4" />
    </>
  ),
  macro: (
    <>
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3m0-14-3 3M8 16l-3 3" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  agents: (
    <>
      <rect x="2" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <rect x="16" y="15" width="6" height="6" rx="1" />
      <path d="M5 9v5a2 2 0 0 0 2 2h2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2M9 3h6m-3 19" />
    </>
  ),
  tray: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v4m0 10v4" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v5m0 3h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </>
  ),
  arrow: (
    <>
      <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
    </>
  ),
  check: (
    <>
      <path d="m4 13 5 5L20 7" />
    </>
  ),
  chevron: (
    <>
      <path d="m6 9 6 6 6-6" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18 5.5 4.3 4.3 0 0 0 17.7 3s-1.1-.3-3.7 1.3a13 13 0 0 0-4 0C7.4 2.7 6.3 3 6.3 3a4.3 4.3 0 0 0-.3 2.5A4.6 4.6 0 0 0 3.5 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.3-.5 2V21" />
    </>
  ),
  close: (
    <>
      <path d="m5 5 14 14M19 5 5 19" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {PATHS[name] ?? null}
    </svg>
  );
}
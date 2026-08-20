import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VEX — Your own JARVIS. For real.",
    template: "%s · VEX",
  },
  description:
    "VEX is a real-time voice AI assistant for Windows — true barge-in conversation, live vision, desktop control, and named sub-agents. Free in beta, no account needed.",
  keywords: [
    "VEX",
    "JARVIS",
    "AI assistant",
    "voice assistant",
    "desktop AI",
    "Gemini",
    "Windows",
  ],
  openGraph: {
    title: "VEX — Your own JARVIS. For real.",
    description:
      "A real-time voice AI assistant for Windows. Talk over it mid-sentence. It sees your screen, reads your camera, and controls your desktop.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-deep bg-deep-space">
        {children}
      </body>
    </html>
  );
}
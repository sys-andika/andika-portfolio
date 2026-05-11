import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const spaceGrotesk = localFont({
  src: [
    { path: "../../public/fonts/SpaceGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SpaceGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SpaceGrotesk-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SpaceGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "../../public/fonts/DMSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/DMSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/DMSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andika Dwi Satrio | System Administrator & Developer",
  description:
    "Portfolio of Andika Dwi Satrio - System Administrator, Network Engineer, and Full-Stack Developer specializing in IT Infrastructure, Linux/Windows Server, and Web Development.",
  keywords: [
    "System Administrator",
    "Network Engineer",
    "Linux",
    "Windows Server",
    "Full Stack Developer",
    "Portfolio",
    "Andika Dwi Satrio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased" suppressHydrationWarning>
        <LangProvider>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </LangProvider>
      </body>
    </html>
  );
}

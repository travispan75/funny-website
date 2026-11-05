import type { Metadata } from "next";
import localFont from "next/font/local";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const supercell = localFont({
  src: "../../public/fonts/supercell-magic.ttf",
  variable: "--font-supercell",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Travis Pan",
  icons: { icon: assetPath("/icon.svg") },
  description: "Travis Pan, software engineer. Experience in payroll infrastructure, data platforms, distributed systems, and AI tooling. Computer Science & Finance at the University of Waterloo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={supercell.variable}>
      <head>
        {["tra", "vis", "pan"].map((word) => (
          <link
            key={word}
            rel="preload"
            href={assetPath(`/images/intro/${word}.svg`)}
            as="image"
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}

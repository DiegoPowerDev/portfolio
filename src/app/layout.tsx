import type { Metadata } from "next";
import "./globals.css";
import content from "@/content/content.json";

import {
  Cinzel,
  Righteous,
  Source_Sans_3,
  Playfair_Display,
} from "next/font/google";

const first = Source_Sans_3({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-first",
});
const second = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-second",
});

const third = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-third",
});

const fourth = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fourth",
});

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  authors: content.metadata.authors,
  metadataBase: new URL("https://diegotorres-portfoliodev.vercel.app"),
  openGraph: content.metadata.openGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${first.variable} ${second.variable} ${third.variable} ${fourth.variable} antialiased w-full h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

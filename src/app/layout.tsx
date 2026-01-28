import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import content from "@/content/content.json";
const roboto = Roboto({
  weight: ["400", "700"], // Roboto requiere especificar los pesos
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// Configuración de Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
        className={`${geistSans.variable} 
          ${geistMono.variable} 
          ${roboto.variable} 
          ${montserrat.variable} antialiased w-screen h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

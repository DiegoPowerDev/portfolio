import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import content from "@/content/content.json";

// Configuración de Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
        className={`
          ${montserrat.variable} antialiased w-full h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

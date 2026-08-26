import type { Metadata } from "next";
import "./globals.css";
import content from "@/content/content.json";
import { Analytics } from "@vercel/analytics/next";
import MeshGradient from "@/components/animations/gradient";
import { Toaster } from "react-hot-toast";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: content.metadata.title,
  applicationName: content.metadata.applicationName,
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Diego Torres Portfolio",
              alternateName: ["Diego Torres Dev", "DiegoTorresDev"],
              url: "https://diegotorres-portfoliodev.vercel.app",
              description:
                "Portafolio profesional de Diego Torres, desarrollador Fullstack especializado en Next.js y WordPress.",
              author: {
                "@type": "Person",
                name: "Diego Torres",
              },
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="abSLIjYehY7UNNtTck9OZ0lKx9FvXoWr4XvLnOBVs1M"
        />
      </head>

      <body
        className={`antialiased w-full overflow-x-hidden flex flex-col bg-[#0B0E12] text-white`}
      >
        <MeshGradient />
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  );
}

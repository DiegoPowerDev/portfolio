"use client";

import { useThemeStore } from "@/store/themeStore";
import { AnimatePresence, motion } from "framer-motion";

export default function Background() {
  const theme = useThemeStore((s) => s.theme);

  const videosParaPrecarga = [
    "/background1.webm",
    "/background2.webm",
    "/background3.webm",
    "/background4.webm",
  ].filter((v) => v !== theme.video);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-black pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.video
          key={theme.video}
          preload="metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          autoPlay
          loop
          muted
          playsInline
          poster={theme.poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={theme.video} type="video/webm" />
        </motion.video>
      </AnimatePresence>

      <div className="hidden">
        {videosParaPrecarga.map((v) => (
          <video key={v} preload="none">
            <source src={v} type="video/webm" />
          </video>
        ))}
      </div>
    </div>
  );
}

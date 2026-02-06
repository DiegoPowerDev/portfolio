"use client";

import { useThemeStore } from "@/store/themeStore";
import { AnimatePresence, motion } from "framer-motion";

export default function Background() {
  const theme = useThemeStore((s) => s.theme);
  const videos = [
    "/background1.webm",
    "/background2.webm",
    "/background3.webm",
    "/background4.webm",
  ];

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none">
      <AnimatePresence mode="popLayout">
        <motion.video
          key={theme.video}
          preload="auto"
          initial={{ opacity: theme.video === "/background1.webm" ? 1 : 0 }}
          animate={{ opacity: 1 }} // Ajusta la opacidad según prefieras
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Transición suave de 1.5s
          autoPlay
          loop
          muted
          poster={theme.poster}
          playsInline
          className={`bg-black fixed inset-0 w-full h-full object-cover duration-500`}
        >
          <source src={theme.video} type="video/webm" />
        </motion.video>
      </AnimatePresence>
      <div className="hidden">
        {videos.map((t) => (
          <video key={t} preload="auto" muted>
            <source src={t} type="video/webm" />
          </video>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useThemeStore } from "@/store/themeStore";
import { AnimatePresence, motion } from "framer-motion";

export default function Background() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none">
      <AnimatePresence mode="popLayout">
        <motion.video
          key={theme.video}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Ajusta la opacidad según prefieras
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Transición suave de 1.5s
          autoPlay
          loop
          muted
          playsInline
          className={`bg-black fixed inset-0 w-full h-full object-cover duration-500`}
          src={theme.video}
        />
      </AnimatePresence>
    </div>
  );
}

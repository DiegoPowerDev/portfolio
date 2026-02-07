"use client";

import { useThemeStore } from "@/store/themeStore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const theme = useThemeStore((s) => s.theme);
  const [isMobile, setIsMobile] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    setLoading(false);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videosParaPrecarga = [
    "/background1.webm",
    "/background2.webm",
    "/background3.webm",
    "/background4.webm",
  ].filter((v) => v !== theme.video);

  return (
    <>
      {!loading ? (
        <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none bg-black">
          <AnimatePresence mode="wait">
            {isMobile ? (
              <motion.img
                key={theme.movil}
                src={theme.movil}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover "
                alt="Background"
              />
            ) : (
              <motion.video
                key={theme.video}
                preload="metadata"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                autoPlay
                loop
                muted
                playsInline
                poster={theme.poster}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={theme.video} type="video/webm" />
              </motion.video>
            )}
          </AnimatePresence>

          {!isMobile && (
            <div className="hidden">
              {videosParaPrecarga.map((v) => (
                <video key={v} preload="none">
                  <source src={v} type="video/webm" />
                </video>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="fixed inset-0 -z-50 w-full h-full bg-black overflow-hidden pointer-events-none"></div>
      )}
    </>
  );
}

"use client";

import content from "@/content/content.json";

import { CSSProperties, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import Trabajos from "@/components/trabajos/trabajos";
import Caracteristicas from "@/components/caracteristicas/caracteristicas";
import dynamic from "next/dynamic";
import Resume from "@/components/resume/resume";

import Header from "@/components/header/header";
import Background from "@/components/background/background";
import { useThemeStore } from "@/store/themeStore";

const Detalle = dynamic(() => import("@/components/detalle/detalle"), {
  ssr: false,
});
const Comentarios = dynamic(() => import("@/components/coments/coments"), {
  ssr: false,
});

const Proyectos = dynamic(() => import("@/components/proyects/proyects"), {
  ssr: false,
});

const Tecnologias = dynamic(
  () => import("@/components/tecnologies/tecnologies"),
  {
    ssr: false,
  },
);

// Componente de sección animada
const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="max-w-[80vw] w-full px-4 md:px-8 flex flex-col "
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const incrementPosition = useThemeStore((state) => state.incrementPosition);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const interval = setInterval(() => {
      incrementPosition();
    }, 10000);
    return () => clearInterval(interval);
  }, [incrementPosition]);

  return (
    <motion.main
      animate={{
        fontFamily: theme.fontFamily, // Framer Motion suaviza el cambio de fuente
      }}
      transition={{ duration: 1 }}
      style={{ color: theme.textColor }}
      className={`w-full h-full flex flex-col md:flex-row overflow-x-hidden  relative `}
    >
      <Background />

      <div className="md:h-full max-h-screen overflow-y-hidden flex items-center">
        <Header data={content.Header} />
      </div>

      <div
        style={{ "--theme": theme.theme } as CSSProperties}
        className={cn(
          "scrollContainer w-full gap-20 h-full flex flex-col pb-20  items-center overflow-y-auto  overflow-x-hidden",
        )}
      >
        <div id="inicio"></div>
        <div className="max-w-[80vw] w-full  px-4 md:px-8  flex flex-col">
          <div
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="h-full w-full p-4 py-12 md:p-10 rounded-3xl flex flex-col items-center"
          >
            <Resume data={content.Resume} />
          </div>
          <div id="Detail"></div>
        </div>

        {/* Sección Detalle */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="h-full w-full py-12  p-4 md:p-10 rounded-3xl flex flex-col items-center"
          >
            <Detalle data={content.Detail} />
          </div>
          <div id="Proyectos"></div>
        </AnimatedSection>

        <AnimatedSection delay={0}>
          <div
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="  h-full w-full py-12 p-4 md:p-10 rounded-3xl flex flex-col items-center"
          >
            <Trabajos data={content.Trabajos} />
          </div>
          <div id="Trabajos"></div>
        </AnimatedSection>

        <AnimatedSection delay={0}>
          <div
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="h-full w-full py-12 p-4 md:p-10 rounded-3xl flex flex-col items-center"
          >
            <Caracteristicas data={content.Caracteristicas} />
          </div>
          <div id="Proyectos"></div>
        </AnimatedSection>

        {/* Sección Proyectos */}
        <AnimatedSection delay={0.1}>
          <div
            id="Proyectos"
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="h-full w-full py-12 p-4 md:p-10 rounded-3xl flex flex-col items-center"
          >
            <Proyectos data={content.Proyects} />
          </div>
          <div id="Tecnologias"></div>
        </AnimatedSection>

        {/* Sección Tecnologías */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="h-full w-full py-12  p-4 md:p-10 rounded-3xl flex flex-col items-center overflow-x-hidden"
          >
            <Tecnologias data={content.Technologies} />
          </div>
          <div id="Contactos"></div>
        </AnimatedSection>

        {/* Sección Comentarios */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              boxShadow: `0 0 10px 5px ${theme.theme}`,
              background: theme.background,
            }}
            className="h-full w-full py-12 p-4 md:p-10 rounded-3xl flex flex-col items-center"
          >
            <Comentarios data={content.Comments} />
          </div>
        </AnimatedSection>
      </div>
      <Toaster />
    </motion.main>
  );
}

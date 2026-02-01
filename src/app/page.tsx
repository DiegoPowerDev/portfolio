"use client";

import content from "@/content/content.json";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import Trabajos from "@/components/trabajos/trabajos";
import Caracteristicas from "@/components/caracteristicas/caracteristicas";
import dynamic from "next/dynamic";
import Resume from "@/components/resume/resume";

import Header from "@/components/header/header";

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
      className="max-w-4xl w-full px-8 flex flex-col "
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <motion.main
      className={`w-full h-full flex flex-col md:flex-row overflow-x-hidden  relative bg-black`}
    >
      {/* Efecto deslizante */}
      <motion.div
        className=" absolute w-screen inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--theme) 50%, transparent 100%)",
          width: "30%",
        }}
        animate={{
          x: ["-100%", "400%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />
      <div className="md:h-full flex items-center">
        <div className="md:w-48 w-full bg-Background lg:bg-transparent flex items-center justify-center z-50  sticky ">
          <Header data={content.Header} />
        </div>
      </div>

      <div
        className={cn(
          "scrollContainer w-full gap-20 h-full flex flex-col pb-20 md:py-20 items-center overflow-y-auto  overflow-x-hidden",
        )}
      >
        <div id="inicio"></div>
        <div className="max-w-4xl w-full px-8 flex flex-col">
          <div className="  h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)]">
            <Resume data={content.Resume} />
          </div>
          <div id="Detail"></div>
        </div>

        {/* Sección Detalle */}
        <AnimatedSection delay={0.1}>
          <div className="h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)]">
            <Detalle data={content.Detail} />
          </div>
          <div id="Proyectos"></div>
        </AnimatedSection>

        <AnimatedSection delay={0}>
          <div className="  h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)]">
            <Trabajos data={content.Trabajos} />
          </div>
          <div id="Trabajos"></div>
        </AnimatedSection>

        <AnimatedSection delay={0}>
          <div className="  h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)]">
            <Caracteristicas data={content.Caracteristicas} />
          </div>
          <div id="Proyectos"></div>
        </AnimatedSection>

        {/* Sección Proyectos */}
        <AnimatedSection delay={0.1}>
          <div
            id="Proyectos"
            className="h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)] "
          >
            <Proyectos data={content.Proyects} />
          </div>
          <div id="Tecnologias"></div>
        </AnimatedSection>

        {/* Sección Tecnologías */}
        <AnimatedSection delay={0.1}>
          <div className="h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)] overflow-x-hidden">
            <Tecnologias data={content.Technologies} />
          </div>
          <div id="Contactos"></div>
        </AnimatedSection>

        {/* Sección Comentarios */}
        <AnimatedSection delay={0.1}>
          <div className="h-full w-full bg-theme p-4 md:p-10 rounded-3xl flex flex-col  shadow-[0_0_20px_1px_var(--theme)]">
            <Comentarios data={content.Comments} />
          </div>
        </AnimatedSection>
      </div>
      <Toaster />
    </motion.main>
  );
}

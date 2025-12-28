"use client";

import Comentarios from "@/components/coments/coments";
import Detalle from "@/components/detalle/detalle";
import Header from "@/components/header/header";
import Proyectos from "@/components/proyects/proyects";
import Resume from "@/components/resume/resume";
import Tecnologias from "@/components/tecnologies/tecnologies";
import content from "@/content/content.json";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Toaster } from "react-hot-toast";

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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className={`max-w-screen grid lg:grid-cols-[1fr,4fr] grid-cols-1 px-4 lg:pr-10 lg:pl-0 relative overflow-hidden bg-black`}
    >
      {/* Gradiente base */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to left, black 0%, black 90%, var(--theme) 100%)",
          opacity: 0.5,
        }}
      />

      {/* Efecto shimmer deslizante */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden lg:block"
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
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />
      <div className="w-full bg-Background lg:bg-transparent flex items-center justify-center z-50 lg:w-auto h-auto lg:h-screen sticky top-0 ">
        <Header data={content.Header} />
      </div>
      <div className="w-full h-full grid grid-cols-1 grid-rows-auto lg:gap-20 gap-32 pb-10 lg:py-20 ">
        {isMobile ? <div id="Home"></div> : ""}

        {/* Sección Resume */}
        <AnimatedSection delay={0}>
          {isMobile ? "" : <div id="Home"></div>}
          <div className="h-full bg-theme  p-10 rounded-3xl shadow-[0_0_20px_1px_var(--theme)]">
            <Resume data={content.Resume} />
          </div>
          {isMobile ? <div id="Detail"></div> : ""}
        </AnimatedSection>

        {/* Sección Detalle */}
        <AnimatedSection delay={0.1}>
          {isMobile ? "" : <div id="Detail"></div>}
          <div className="h-full bg-theme  p-10  rounded-3xl  shadow-[0_0_20px_1px_var(--theme)]">
            <Detalle data={content.Detail} />
          </div>
          {isMobile ? <div id="Proyectos"></div> : ""}
        </AnimatedSection>

        {/* Sección Proyectos */}
        <AnimatedSection delay={0.1}>
          {isMobile ? "" : <div id="Proyectos"></div>}
          <div className="h-full bg-theme  p-10 rounded-3xl  shadow-[0_0_20px_1px_var(--theme)]">
            <Proyectos data={content.Proyects} />
          </div>
          {isMobile ? <div id="Tecnologias"></div> : ""}
        </AnimatedSection>

        {/* Sección Tecnologías */}
        <AnimatedSection delay={0.1}>
          {isMobile ? "" : <div id="Tecnologias"></div>}
          <div className="h-full bg-theme  p-10 rounded-3xl  shadow-[0_0_20px_1px_var(--theme)]">
            <Tecnologias data={content.Technologies} />
          </div>
          {isMobile ? <div id="Contactos"></div> : ""}
        </AnimatedSection>

        {/* Sección Comentarios */}
        <AnimatedSection delay={0.1}>
          {isMobile ? "" : <div id="Contactos"></div>}
          <div className="h-full bg-theme  p-10 rounded-3xl  shadow-[0_0_20px_1px_var(--theme)]">
            <Comentarios data={content.Comments} />
          </div>
        </AnimatedSection>
      </div>
      <Toaster />
    </motion.div>
  );
}

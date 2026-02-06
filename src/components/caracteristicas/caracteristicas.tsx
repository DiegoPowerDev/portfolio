"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useThemeStore } from "@/store/themeStore";

interface Caracteristica {
  imagen: string;
  titulo: string;
  descripcion: string;
}

interface Props {
  data: {
    title: string;
    caracteristicas: Caracteristica[];
  };
}

export default function Caracteristicas(props: Props) {
  const { title, caracteristicas } = props.data;
  const [[index, direction], setIndex] = useState([0, 0]);
  const theme = useThemeStore((s) => s.theme);

  const cambiarCaracteristica = (newDirection: number) => {
    const nextIndex =
      (index + newDirection + caracteristicas.length) % caracteristicas.length;
    setIndex([nextIndex, newDirection]);
  };

  // Auto-scroll cada 5 segundos
  useEffect(() => {
    if (caracteristicas.length <= 1) return;
    const timer = setInterval(() => cambiarCaracteristica(1), 5000);
    return () => clearInterval(timer);
  }, [index, caracteristicas.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full md:w-4/6">
      <p
        style={{ color: theme.theme }}
        className="font-bold w-full text-4xl text-center md:text-start mb-8 break-words"
      >
        {title}
      </p>

      {/* Contenedor Principal del Carrusel */}
      <div
        style={{ border: `2px solid ${theme.theme}` }}
        className="relative w-full h-[450px] md:h-[400px] overflow-hidden rounded-3xl shadow-lg"
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset }) => {
              const swipeThreshold = 50;
              if (offset.x < -swipeThreshold) {
                cambiarCaracteristica(1);
              } else if (offset.x > swipeThreshold) {
                cambiarCaracteristica(-1);
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing flex flex-col items-center pb-16"
          >
            {/* Título de la característica */}
            <div
              style={{
                color: theme.theme,
                background: `${theme.theme}20`,
                border: `${theme.theme}50`,
              }}
              className="w-full p-5 font-bold text-center text-xl md:text-2xl "
            >
              {caracteristicas[index].titulo}
            </div>

            <div className="flex flex-col justify-center md:grid md:grid-cols-2 items-center md:justify-around w-full h-full p-6 md:gap-6">
              {/* Imagen */}
              <div className="relative py-8  flex w-full h-full items-center  flex-shrink-0">
                <Image
                  src={caracteristicas[index].imagen}
                  alt={caracteristicas[index].titulo}
                  fill
                  className="object-contain max-w-full max-h-53 pointer-events-none select-none"
                />
              </div>

              {/* Descripción */}
              <div className="text-center md:text-left text-md md:text-lg  w-full">
                {caracteristicas[index].descripcion}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores (Puntos) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {caracteristicas.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a característica ${i + 1}`}
              onClick={() => {
                const dir = i > index ? 1 : -1;
                setIndex([i, dir]);
              }}
              style={{
                background: index === i ? theme.theme : theme.textColor,
                width: index === i ? "20px" : "10px ",
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${"bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

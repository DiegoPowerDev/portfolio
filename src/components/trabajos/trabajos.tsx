import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface trabajo {
  nombre: string;
  link: string;
  imagenes: string[];
}

interface Props {
  data: {
    title: string;
    trabajos: trabajo[];
  };
}

function Trabajo({ imagenes, nombre, link }: trabajo) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const cambiarImagen = (newDirection: number) => {
    const nextIndex =
      (index + newDirection + imagenes.length) % imagenes.length;
    setIndex([nextIndex, newDirection]);
  };

  useEffect(() => {
    if (imagenes.length <= 1) return;
    const timer = setInterval(() => cambiarImagen(1), 5000);
    return () => clearInterval(timer);
  }, [index, imagenes.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150, // Un poco más de desplazamiento para que se vea el flujo
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-3xl border-2 border-Hover bg-black">
      {/* Título - Z-INDEX ALTO para que no interfiera con el drag */}
      <Link href={link} target="_blank">
        <div className="w-full text-center p-4 font-bold text-Theme z-30 pointer-events-none">
          {nombre}
        </div>
      </Link>
      <div className="h-full w-full">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // --- CONFIGURACIÓN DE DRAG ---
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7} // Más elástico para que se sienta que lo mueves
            onDragEnd={(e, { offset }) => {
              const swipeThreshold = 50;
              if (offset.x < -swipeThreshold) {
                cambiarImagen(1);
              } else if (offset.x > swipeThreshold) {
                cambiarImagen(-1);
              }
            }}
            className="h-[200px] inset-0 cursor-grab active:cursor-grabbing z-10"
          >
            <Image
              src={imagenes[index]}
              alt={nombre}
              fill
              className="h-full object-contain pointer-events-none select-none p-4"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Indicadores - Z-INDEX ALTO para poder clickearlos */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const dir = i > index ? 1 : -1;
                setIndex([i, dir]);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i ? "bg-Theme w-6" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Trabajos(props: Props) {
  const { title, trabajos } = props.data;
  return (
    <div>
      <div>
        <p className="w-full font-bold text-Theme text-2xl md:text-4xl text-center md:text-start mb-10">
          {title}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
          {trabajos.map((e, i) => (
            <Trabajo key={i} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconExternalLink, IconWindow } from "@tabler/icons-react";

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
      x: direction > 0 ? 150 : -150,
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
      <Link href={link} target="_blank">
        <div className="w-full flex items-center justify-center p-4 font-bold text-Theme z-30 pointer-events-none gap-2">
          {nombre} <IconExternalLink />
        </div>
      </Link>

      <div className="relative h-[250px] w-full overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset }) => {
              const swipeThreshold = 50;
              if (offset.x < -swipeThreshold) {
                cambiarImagen(1);
              } else if (offset.x > swipeThreshold) {
                cambiarImagen(-1);
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full p-4">
              <Image
                src={imagenes[index]}
                alt={nombre}
                fill
                className="object-contain pointer-events-none select-none"
                priority={index === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {imagenes.map((_, i) => (
          <button
            aria-label={`imagen${i}`}
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

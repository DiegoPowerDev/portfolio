import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconExternalLink, IconWindow } from "@tabler/icons-react";
import { useThemeStore } from "@/store/themeStore";

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
  const theme = useThemeStore((s) => s.theme);
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
    <div
      style={{
        background: theme.background,
        border: `1px solid ${theme.theme}`,
      }}
      className="relative w-full h-[350px] overflow-hidden rounded-3xl"
    >
      <Link href={link} target="_blank">
        <div
          style={{
            color: theme.theme,
            background: `${theme.theme}20`,
            border: `${theme.theme}50`,
          }}
          className="w-full flex text-lg items-center justify-center p-4 font-bold z-30 pointer-events-none gap-2"
        >
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
            className="absolute inset-0 cursor-grab py-4 active:cursor-grabbing"
          >
            <div className="relative w-full h-full p-4">
              <Image
                src={imagenes[index]}
                alt={nombre}
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-contain pointer-events-none select-none"
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
            style={{ color: index === i ? theme.theme : "#fafafa50" }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i ? " w-6" : " w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Trabajos(props: Props) {
  const theme = useThemeStore((s) => s.theme);
  const { title, trabajos } = props.data;

  return (
    <div className="w-full 2xl:w-4/6 h-full flex flex-col items-center">
      <p
        style={{ color: theme.theme }}
        className="w-full font-bold text-4xl text-center md:text-start mb-10"
      >
        {title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
        {trabajos.map((e, i) => (
          <Trabajo key={i} {...e} />
        ))}
      </div>
    </div>
  );
}

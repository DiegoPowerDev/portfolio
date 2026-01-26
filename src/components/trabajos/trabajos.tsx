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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-3xl  border-2 border-Hover">
      <div className="w-full text-center p-4 font-bold text-Theme">
        {nombre}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 "
        >
          <Link href={link} target="_blank">
            <Image
              src={imagenes[index]}
              alt={`Slide ${index}`}
              fill
              className="object-contain p-4"
              priority
            />
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {imagenes.map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i ? "bg-Theme w-6" : "bg-white/50"
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
        <div className="grid grid-cols-2 gap-8 w-full h-full">
          {trabajos.map((e, i) => (
            <Trabajo key={i} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}

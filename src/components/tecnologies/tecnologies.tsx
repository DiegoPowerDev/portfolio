"use client";
import { useState } from "react";
import { IconCaretUp, IconCaretDown } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

import Item from "./item";

interface Props {
  data: {
    title: string;
    frontend: {
      title: string;
      technologies: data[];
    };
    backend: {
      title: string;
      technologies: data[];
    };
    database: {
      title: string;
      technologies: data[];
    };
    tools: {
      title: string;
      technologies: data[];
    };
  };
}

interface data {
  url: string;
  alt: string;
  style: string;
}

// Variantes de animación para las secciones
const sectionVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

// Componente para cada categoría de tecnologías
const TechCategory = ({
  title,
  technologies,
}: {
  title: string;
  technologies: data[];
}) => (
  <motion.div
    variants={itemVariants}
    className="w-full grid grid-rows-auto border-2 border-Theme rounded-xl shadow-[0px_0px_10px_0px_#10B981] p-5"
  >
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-textTheme flex justify-center text-3xl font-bold mb-4"
    >
      {title}
    </motion.div>

    <motion.div
      className="w-full grid grid-rows-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center items-center gap-3"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {technologies.map((element, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3 },
            },
          }}
        >
          <Item data={element} />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

function Tecnologias(props: Props) {
  const { title, frontend, backend, database, tools } = props.data;

  const [mode, setMode] = useState(false);

  const allTechnologies = [
    ...frontend.technologies,
    ...backend.technologies,
    ...database.technologies,
    ...tools.technologies,
  ];

  const duplicatedTechnologies = [...allTechnologies, ...allTechnologies];

  const changeModal = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[auto,auto,auto] gap-4">
      <p className="font-bold text-Theme text-4xl">{title}:</p>

      <div className="grid grid-rows-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {mode ? (
            <motion.div
              key="expanded"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
              className="grid grid-rows-[auto,auto,auto,auto] gap-y-10"
            >
              <TechCategory
                title={frontend.title}
                technologies={frontend.technologies}
              />
              <TechCategory
                title={backend.title}
                technologies={backend.technologies}
              />
              <TechCategory
                title={database.title}
                technologies={database.technologies}
              />
              <TechCategory
                title={tools.title}
                technologies={tools.technologies}
              />
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="grid overflow-hidden w-full gap-x-5"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
              }}
            >
              <motion.div
                className="flex gap-x-5"
                style={{ width: `${duplicatedTechnologies.length * 100}px` }}
                initial={{ transform: "translateX(0%)" }}
                animate={{ transform: "translateX(-50%)" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <Item key={index} data={tech} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="h-10 grid items-center justify-center bg-Theme hover:bg-Hover rounded-xl cursor-pointer"
        onClick={changeModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: mode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {mode ? (
            <IconCaretDown fill="white" strokeWidth={2} size={30} />
          ) : (
            <IconCaretUp fill="white" strokeWidth={2} size={30} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tecnologias;

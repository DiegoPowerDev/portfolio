"use client";
import { useState } from "react";
import { IconCaretUp, IconCaretDown } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

import Item from "./item";
import { useThemeStore } from "@/store/themeStore";

interface Theme {
  video: string;
  textColor: string;
  theme: string;
}
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
    transition: { duration: 1 },
  },
};

// Componente para cada categoría de tecnologías
const TechCategory = ({
  title,
  technologies,
  theme,
}: {
  title: string;
  technologies: data[];
  theme: Theme;
}) => (
  <motion.div
    variants={itemVariants}
    style={{
      border: `2px solid ${theme.theme}`,
      boxShadow: `0 0 10px 5px ${theme.theme}`,
    }}
    className="w-full h-full flex flex-col rounded-xl 
    p-5"
  >
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ color: theme.theme }}
      className=" h-full text-center  text-2xl md:text-4xl  font-bold mb-4"
    >
      {title}
    </motion.div>

    <motion.div
      className="w-full h-full grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center items-center gap-3"
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
          className="w-full h-full flex"
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
  const theme = useThemeStore((s) => s.theme);
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
    <div className="w-full md:w-4/6 flex flex-col gap-4">
      <p
        style={{ color: theme.theme }}
        className="font-bold text-4xl text-center md:text-start"
      >
        {title}
      </p>

      <div className="flex h-full w-full ">
        <AnimatePresence mode="wait">
          {mode ? (
            <motion.div
              key="expanded"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sectionVariants}
              className="flex flex-col h-full w-full gap-y-10"
            >
              <TechCategory
                theme={theme}
                title={frontend.title}
                technologies={frontend.technologies}
              />
              <TechCategory
                theme={theme}
                title={backend.title}
                technologies={backend.technologies}
              />
              <TechCategory
                theme={theme}
                title={database.title}
                technologies={database.technologies}
              />
              <TechCategory
                theme={theme}
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
              className="flex h-full flex-col w-full gap-x-5 justify-center"
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
        style={{ background: theme.theme }}
        className="w-full h-12 px-4 py-2 rounded-xl flex items-center justify-center  text-white font-bold cursor-pointer"
        onClick={changeModal}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: mode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconCaretDown fill="white" color="white" strokeWidth={2} size={30} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tecnologias;

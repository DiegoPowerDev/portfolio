import { useThemeStore } from "@/store/themeStore";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  data: {
    first: {
      name: string;
      work: string;
    };
    second: {
      seccion: string;
      detail: string;
    };
    third: {
      seccion: string;
      detail: string;
    };
    fourth: {
      seccion: string;
      detail: string;
    };
    links: {
      github: {
        title: string;
        detail: string;
      };
      linkedin: {
        title: string;
        detail: string;
      };
    };
  };
}

function Resume(props: Props) {
  const { first, second, third, fourth, links } = props.data;
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="h-full w-full 2xl:w-4/6 grid grid-rows-[auto,auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[3fr,4fr] items-center justify-center">
      <div className="h-full gap-2 w-full flex flex-col items-center justify-center md:p-5 ">
        <div className="h-full w-full flex flex-col gap-2 md:gap-7 font-bold items-center">
          <p className="font-bold w-full text-4xl text-center md:text-start">
            {first.name}
          </p>
          <p style={{ color: theme.theme }} className=" text-xl ">
            {first.work}
          </p>
        </div>
        <div className="grid gap-2 justify-center text-lg">
          <div className="flex space-x-3  items-center ">
            <p style={{ color: theme.theme }} className="text-md font-bold">
              {second.seccion}{" "}
            </p>
            <p>{second.detail}</p>
          </div>
          <div className="flex space-x-3  items-center ">
            <p style={{ color: theme.theme }} className="font-bold">
              {third.seccion}{" "}
            </p>
            <p> {third.detail}</p>
          </div>
          <div className="flex space-x-3  items-center ">
            <p style={{ color: theme.theme }} className="font-bold">
              {" "}
              {fourth.seccion}{" "}
            </p>
            <p> {fourth.detail}</p>
          </div>
        </div>

        <div className="w-full flex pt-10 justify-center items-center ">
          <div className="w-full flex justify-center ">
            <motion.a
              href={links.github.detail}
              target="_blank"
              className="flex flex-col items-center"
              whileHover={{
                scale: 1.25,
                color: theme.theme,
                fill: theme.theme,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{ color: theme.textColor, fill: theme.textColor }}
            >
              <IconBrandGithubFilled
                className="h-10 w-10 md:h-16 md:w-16"
                style={{ fill: "inherit" }}
              />
              <div className="text-center">{links.github.title}</div>
            </motion.a>
          </div>
          <div className="w-full grid  justify-center ">
            <motion.a
              whileHover={{
                scale: 1.25,
                color: theme.theme,
                fill: theme.theme,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{ color: theme.textColor, fill: theme.textColor }}
              href={links.linkedin.detail}
              target="_blank"
              className="flex flex-col items-center"
            >
              <IconBrandLinkedinFilled
                style={{ fill: "inherit" }}
                className="h-10 w-10 md:h-16 md:w-16"
              />
              <div className="text-center">{links.linkedin.title}</div>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="flex py-4 md:py-8 items-center justify-center w-full">
        <div className="relative aspect-square w-full max-w-[250px] md:max-w-[320px]">
          <Image
            src="/foto.webp"
            alt="Foto de perfil"
            width={320}
            height={320}
            priority
            fetchPriority="high"
            loading="eager" // FUERZA LA CARGA INMEDIATA
            className="rounded-full object-contain"
            sizes="(max-width: 768px) 320px, 320px"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;

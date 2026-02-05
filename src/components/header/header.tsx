"use client";

import { useState } from "react";
import {
  IconUser,
  IconAddressBook,
  IconCode,
  IconTools,
  IconMailFast,
} from "@tabler/icons-react";
import { useThemeStore } from "@/store/themeStore";

interface Props {
  data: {
    me: string;
    about: string;
    proyects: string;
    technologies: string;
    contact: string;
  };
}

function Header(props: Props) {
  const { me, proyects, about, technologies, contact } = props.data;
  const theme = useThemeStore((s) => s.theme);
  const [selected, setSelected] = useState("inicio");

  return (
    <div className="md:w-48 w-full lg:bg-transparent h-full flex items-center justify-center z-50  sticky ">
      <div
        style={{
          boxShadow: `0 0 10px 5px ${theme.theme}`,
        }}
        className="md:w-32 bg-black py-4 md:py-10 md:rounded-full grid grid-cols-5 grid-rows-1 w-full md:flex md:flex-col md:gap-4 items-center justify-center"
      >
        <div className="flex h-full w-full  justify-center">
          <a
            style={{ color: selected === "inicio" ? theme.theme : "" }}
            className={`group  grid grid-cols-1 grid-rows-[3fr_2fr] items-center justify-center w-full lg:w-32  rounded-3xl  lg:rounded-full border-2 border-transparent transition-all hover:scale-105`}
            href="#inicio"
            onClick={() => setSelected("inicio")}
          >
            <div className="flex h-12 justify-center items-center">
              <IconUser className=" w-10 sm:w-14 flex justify-center items-center " />
            </div>
            <span
              style={{
                color: selected === "inicio" ? theme.theme : "transparent",
              }}
              className={` text-center font-bold transition-all duration-300 text-sm`}
            >
              {me}
            </span>
          </a>
        </div>
        <div className="flex h-full w-full  justify-center">
          <a
            style={{ color: selected === "About" ? theme.theme : "" }}
            className={`group  grid grid-cols-1 grid-rows-[2fr_1fr]  items-center justify-center w-full lg:w-32  rounded-3xl lg:rounded-full border-2 border-transparent transition-all hover:scale-105`}
            href="#Detail"
            onClick={() => setSelected("About")}
          >
            <div className="flex h-12 justify-center items-center">
              <IconAddressBook className=" w-10 sm:w-14 flex justify-center items-center  " />
            </div>
            <span
              style={{
                color: selected === "About" ? theme.theme : "transparent",
              }}
              className={`font-bold text-center transition-all duration-300 text-sm`}
            >
              {about}
            </span>
          </a>
        </div>
        <div className="flex h-full w-full  justify-center">
          <a
            style={{ color: selected === "proyectos" ? theme.theme : "" }}
            className={`group  grid grid-cols-1 grid-rows-[2fr_1fr]  items-center justify-center w-full lg:w-32  rounded-3xl lg:rounded-full border-2 border-transparent transition-all hover:scale-105`}
            href="#Proyectos"
            onClick={() => setSelected("proyectos")}
          >
            <div className="flex h-12 justify-center items-center">
              <IconCode
                fill="white"
                className={` w-10 sm:w-14 flex justify-center items-center`}
              />
            </div>
            <span
              style={{
                color: selected === "proyectos" ? theme.theme : "transparent",
              }}
              className={` text-center font-bold transition-all duration-300 text-sm`}
            >
              {proyects}
            </span>
          </a>
        </div>
        <div className="flex h-full w-full  justify-center">
          <a
            style={{ color: selected === "tecnologias" ? theme.theme : "" }}
            className={`group  grid grid-cols-1 grid-rows-[2fr_1fr]  items-center justify-center w-full lg:w-32  rounded-3xl lg:rounded-full border-2 border-transparent transition-all hover:scale-105`}
            href="#Tecnologias"
            onClick={() => setSelected("tecnologias")}
          >
            <div className="flex h-12 justify-center items-center">
              <IconTools className=" w-10 sm:w-14 flex justify-center items-center  " />
            </div>
            <span
              style={{
                color: selected === "tecnologias" ? theme.theme : "transparent",
              }}
              className={` text-center font-bold transition-all duration-300 text-sm`}
            >
              {technologies}
            </span>
          </a>
        </div>
        <div className="flex h-full w-full  justify-center">
          <a
            style={{ color: selected === "contactos" ? theme.theme : "" }}
            className={`group  grid grid-cols-1 grid-rows-[2fr_1fr]  items-center justify-center w-full lg:w-32  rounded-3xl lg:rounded-full border-2 border-transparent transition-all hover:scale-105`}
            href="#Contactos"
            onClick={() => setSelected("contactos")}
          >
            <div className="flex h-12 justify-center items-center">
              <IconMailFast
                size={30}
                className="flex justify-center item-center  "
              />
            </div>
            <span
              style={{
                color: selected === "contactos" ? theme.theme : "transparent",
              }}
              className={` text-center font-bold transition-all duration-300 text-sm`}
            >
              {contact}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

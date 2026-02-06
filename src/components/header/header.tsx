"use client";

import { useState } from "react";
import {
  IconUser,
  IconAddressBook,
  IconCode,
  IconTools,
  IconMailFast,
  IconBraces,
  IconBuildingAirport,
} from "@tabler/icons-react";
import { useThemeStore } from "@/store/themeStore";

interface Props {
  data: {
    me: string;
    about: string;
    trabajos: string;
    caracteristicas: string;
    proyects: string;
    technologies: string;
    contact: string;
  };
}

function Header(props: Props) {
  const {
    me,
    proyects,
    trabajos,
    caracteristicas,
    about,
    technologies,
    contact,
  } = props.data;
  const theme = useThemeStore((s) => s.theme);
  const [selected, setSelected] = useState("inicio");

  return (
    <div
      style={{
        borderColor: `${theme.background}`,
      }}
      className="p-4 h-full md:py-10  flex w-full md:flex md:flex-col md:gap-4 items-center  justify-center z-50 sticky overflow-hidden "
    >
      <a
        style={{
          color: selected === "inicio" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background: selected === "inicio" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center justify-center md:justify-start px-2 w-full rounded-3xl transition-all hover:scale-105`}
        href="#inicio"
        onClick={() => setSelected("inicio")}
      >
        <div className="flex h-12 justify-center items-center">
          <IconUser className="flex justify-center items-center " />
        </div>
        <span
          style={{
            color: selected === "inicio" ? theme.theme : theme.textColor,
          }}
          className={`hidden md:block text-center font-bold transition-all duration-300 text-sm`}
        >
          {me}
        </span>
      </a>

      <a
        style={{
          color: selected === "About" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background: selected === "About" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center justify-center md:justify-start px-2 w-full rounded-3xl border-2 border-transparent transition-all hover:scale-105`}
        href="#Detail"
        onClick={() => setSelected("About")}
      >
        <div className="flex h-12 justify-center items-center">
          <IconAddressBook className="flex justify-center items-center  " />
        </div>
        <span
          style={{
            color: selected === "About" ? theme.theme : theme.textColor,
          }}
          className={`hidden md:flex font-bold  text-center transition-all duration-300 text-sm`}
        >
          {about}
        </span>
      </a>
      <a
        style={{
          color: selected === "trabajos" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background: selected === "trabajos" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center justify-center md:justify-start px-2 w-full rounded-3xl border-2 border-transparent transition-all hover:scale-105`}
        href="#trabajos"
        onClick={() => setSelected("trabajos")}
      >
        <div className="flex h-12 justify-center items-center">
          <IconBuildingAirport className="flex justify-center items-center  " />
        </div>
        <span
          style={{
            color: selected === "trabajos" ? theme.theme : theme.textColor,
          }}
          className={`hidden md:flex font-bold  text-center transition-all duration-300 text-sm`}
        >
          {trabajos}
        </span>
      </a>
      <a
        style={{
          color: selected === "caracteristicas" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background:
            selected === "caracteristicas" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center justify-center md:justify-start px-2 w-full rounded-3xl border-2 border-transparent transition-all hover:scale-105`}
        href="#caracteristicas"
        onClick={() => setSelected("caracteristicas")}
      >
        <div className="flex h-12 justify-center items-center">
          <IconBraces className="flex justify-center items-center  " />
        </div>
        <span
          style={{
            color:
              selected === "caracteristicas" ? theme.theme : theme.textColor,
          }}
          className={`hidden md:flex font-bold  text-center transition-all duration-300 text-sm`}
        >
          {caracteristicas}
        </span>
      </a>

      <a
        style={{
          color: selected === "proyectos" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background: selected === "proyectos" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center px-2 w-full justify-center md:justify-start rounded-3xl border-2 border-transparent transition-all hover:scale-105`}
        href="#Proyectos"
        onClick={() => setSelected("proyectos")}
      >
        <div className="flex h-12 justify-center items-center">
          <IconCode className={`flex justify-center items-center`} />
        </div>
        <span
          style={{
            color: selected === "proyectos" ? theme.theme : theme.textColor,
          }}
          className={` text-center hidden md:flex font-bold transition-all duration-300 text-sm`}
        >
          {proyects}
        </span>
      </a>

      <a
        style={{
          color: selected === "tecnologias" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background: selected === "tecnologias" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center justify-center md:justify-start px-2 w-full   rounded-3xl border-2 border-transparent transition-all hover:scale-105`}
        href="#Tecnologias"
        onClick={() => setSelected("tecnologias")}
      >
        <div className="flex h-12 justify-center items-center">
          <IconTools className="flex justify-center items-center  " />
        </div>
        <span
          style={{
            color: selected === "tecnologias" ? theme.theme : theme.textColor,
          }}
          className={` text-center hidden md:flex font-bold transition-all duration-300 text-sm`}
        >
          {technologies}
        </span>
      </a>

      <a
        style={{
          color: selected === "contactos" ? theme.theme : "",
          border: `2px solid ${theme.theme}`,
          background: selected === "contactos" ? `${theme.background}` : "",
        }}
        className={`flex gap-2 items-center justify-center md:justify-start px-2 w-full   rounded-3xl border-2 border-transparent transition-all hover:scale-105`}
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
            color: selected === "contactos" ? theme.theme : theme.textColor,
          }}
          className={` text-center hidden md:flex font-bold transition-all duration-300 text-sm`}
        >
          {contact}
        </span>
      </a>
    </div>
  );
}

export default Header;

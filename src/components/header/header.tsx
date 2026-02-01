"use client";

import { useState } from "react";
import {
  IconUser,
  IconAddressBook,
  IconCode,
  IconTools,
  IconMailFast,
} from "@tabler/icons-react";

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

  const [selected, setSelected] = useState("inicio");

  return (
    <div className="md:w-32 h-full pt-4 md:pt-0 md:bg-transparent grid grid-cols-5 grid-rows-1 w-full md:flex md:flex-col md:gap-4 items-center justify-center">
      <div className="flex h-full w-full items-center justify-center">
        <a
          className={`group flex flex-col gap-2 items-center justify-center w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105  ${
            selected === "inicio" ? "text-Theme" : ""
          }`}
          href="#inicio"
          onClick={() => setSelected("inicio")}
        >
          <div className="flex justify-center">
            <IconUser className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center group-hover:stroke-Theme" />
          </div>
          <span
            className={` text-center font-bold transition-all duration-300 text-sm ${
              selected === "inicio"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {me}
          </span>
        </a>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <a
          className={`group flex flex-col gap-2 items-center justify-center w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105  ${
            selected === "About" ? "border-Theme text-Theme" : ""
          }`}
          href="#Detail"
          onClick={() => setSelected("About")}
        >
          <div className="flex justify-center">
            <IconAddressBook className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={`font-bold text-center transition-all duration-300 text-sm ${
              selected === "About"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {about}
          </span>
        </a>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <a
          className={`group flex flex-col gap-2 items-center justify-center w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105  ${
            selected === "proyectos" ? "text-Theme" : ""
          }`}
          href="#Proyectos"
          onClick={() => setSelected("proyectos")}
        >
          <div className="flex justify-center">
            <IconCode
              fill="white"
              className={`h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:fill-Theme group-hover:stroke-Theme ${
                selected === "proyectos" ? "fill-Theme stroke-Theme" : ""
              }`}
            />
          </div>
          <span
            className={` text-center font-bold transition-all duration-300 text-sm ${
              selected === "proyectos"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {proyects}
          </span>
        </a>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <a
          className={`group flex flex-col gap-2 items-center justify-center w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105  ${
            selected === "tecnologias" ? "text-Theme" : ""
          }`}
          href="#Tecnologias"
          onClick={() => setSelected("tecnologias")}
        >
          <div className="flex justify-center">
            <IconTools className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center items-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={` text-center font-bold transition-all duration-300 text-sm ${
              selected === "tecnologias"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {technologies}
          </span>
        </a>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <a
          className={`group flex flex-col gap-2 items-center justify-center w-full lg:w-32 pt-4 rounded-3xl lg:m-2 lg:rounded-full border-2 border-transparent transition-all hover:scale-105  ${
            selected === "contactos" ? "text-Theme" : ""
          }`}
          href="#Contactos"
          onClick={() => setSelected("contactos")}
        >
          <div className="flex justify-center">
            <IconMailFast className="h-10 sm:h-14 w-10 sm:w-14 flex justify-center item-center  group-hover:stroke-Theme" />
          </div>
          <span
            className={` text-center font-bold transition-all duration-300 text-sm  ${
              selected === "contactos"
                ? "text-Theme"
                : "text-transparent group-hover:text-Theme"
            }`}
          >
            {contact}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;

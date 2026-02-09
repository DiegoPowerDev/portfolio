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
  const theme = useThemeStore((s) => s.theme);
  const [selected, setSelected] = useState("inicio");
  const menuItems = [
    { id: "inicio", label: props.data.me, icon: IconUser, href: "#inicio" },
    {
      id: "About",
      label: props.data.about,
      icon: IconAddressBook,
      href: "#Detail",
    },
    {
      id: "trabajos",
      label: props.data.trabajos,
      icon: IconBuildingAirport,
      href: "#trabajos",
    },
    {
      id: "caracteristicas",
      label: props.data.caracteristicas,
      icon: IconBraces,
      href: "#caracteristicas",
    },
    {
      id: "proyectos",
      label: props.data.proyects,
      icon: IconCode,
      href: "#Proyectos",
    },
    {
      id: "tecnologias",
      label: props.data.technologies,
      icon: IconTools,
      href: "#Tecnologias",
    },
    {
      id: "contactos",
      label: props.data.contact,
      icon: IconMailFast,
      href: "#Contactos",
    },
  ];
  return (
    <nav className="p-4 h-full md:py-10 flex w-full md:flex-col md:gap-2 items-center justify-center z-50 sticky overflow-hidden backdrop-brightness-50">
      {menuItems.map((item) => {
        const isSelected = selected === item.id;
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setSelected(item.id)}
            aria-label={item.label}
            style={{
              border: `2px solid ${isSelected ? theme.background : theme.theme}`,
              background: isSelected ? theme.theme : theme.background,
            }}
            className="flex gap-2 items-center justify-center md:justify-start px-2 w-full rounded-3xl transition-all hover:scale-105"
          >
            <div className="flex h-12 justify-center items-center">
              <Icon
                style={{ color: isSelected ? theme.background : theme.theme }}
              />
            </div>
            <span
              style={{ color: isSelected ? theme.background : theme.theme }}
              className="hidden md:block text-center font-bold transition-all duration-300 text-sm"
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default Header;

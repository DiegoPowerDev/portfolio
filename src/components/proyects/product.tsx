import { useThemeStore } from "@/store/themeStore";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface Props {
  nombre: string;
  imagen: string;
  direccion: string;
  descripcion: string;
  tecnologias: string[];
}

export default function Products(props: Props) {
  const { nombre, imagen, direccion, descripcion, tecnologias } = props;
  const theme = useThemeStore((s) => s.theme);

  return (
    <Link
      className={`cajaProyectos h-64 w-full flex items-center justify-center`}
      href={direccion}
      target="_blank"
    >
      <div className={`cards flex flex-col h-full w-full`}>
        <div
          style={{
            boxShadow: `0 0 10px 5px ${theme.theme}`,
          }}
          className={`page1 h-full w-full flex flex-col gap-2 `}
        >
          <p
            style={{
              color: theme.theme,
              background: `${theme.theme}20`,
              border: `${theme.theme}50`,
            }}
            className="font-bold p-2 text-md sm:text-2xl flex justify-center text-center shrink-0"
          >
            {nombre}
          </p>

          <div className="flex-1 min-h-0 flex items-center justify-center p-2">
            <Image
              src={imagen}
              alt={nombre}
              width={360}
              height={240}
              className="object-contain rounded-xl max-w-full max-h-full"
            />
          </div>
        </div>
        <div
          style={{
            boxShadow: `0 0 10px 5px ${theme.theme}`,
          }}
          className={`page2 h-full w-full flex flex-col justify-between gap-4 p-4 md:p-7 `}
        >
          <p>{descripcion}</p>
          <TooltipProvider delayDuration={1}>
            <div className="w-full flex  lg:justify-center justify-start gap-4">
              {tecnologias.map((element, i) => {
                const image = element.toLowerCase();

                return (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <Image
                        key={element}
                        src={`/${image}.svg`}
                        alt={element}
                        title={element}
                        width={48}
                        height={48}
                        className="max-w-full object-contain rounded-lg transition-all duration-150 hover:scale-125"
                      />
                    </TooltipTrigger>
                    <TooltipContent
                      style={{
                        border: `1px solid ${theme.theme}`,
                        background: theme.theme,
                      }}
                    >
                      <p
                        style={{
                          color: theme.background,
                        }}
                        className="select-none"
                      >
                        {element}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </Link>
  );
}

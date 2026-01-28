import Image from "next/image";
import Link from "next/link";

interface Props {
  nombre: string;
  imagen: string;
  direccion: string;
  descripcion: string;
  tecnologias: string[];
}

export default function Products(props: Props) {
  const { nombre, imagen, direccion, descripcion, tecnologias } = props;

  return (
    <Link
      className={`cajaProyectos h-64 w-full flex items-center justify-center`}
      href={direccion}
      target="_blank"
    >
      <div className={`cards flex flex-col h-full w-full`}>
        <div
          className={`page1 h-full w-full flex flex-col gap-2 p-2 shadow-[0_0_10px_5px_var(--theme)]`}
        >
          <p className="text-md sm:text-2xl flex justify-center text-center shrink-0">
            {nombre}
          </p>

          <div className="flex-1 min-h-0 flex items-center justify-center">
            <img
              src={imagen}
              className="max-w-full max-h-full object-contain rounded-xl"
              alt={nombre}
            />
          </div>
        </div>
        <div
          className={`page2 h-64 w-full gap-2 grid grid-rows-[auto,auto] p-4 md:p-7 shadow-[0_0_10px_5px_var(--theme)]`}
        >
          <p className="text-sm md:text-auto">{descripcion}</p>
          <div className="w-full grid grid-cols-3 lg:justify-center justify-start gap-4">
            {tecnologias.map((element) => {
              const image = element.toLowerCase();

              return (
                <Image
                  key={element}
                  src={`/${image}.svg`}
                  alt={element}
                  title={element}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-lg transition-all duration-150 hover:scale-125"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

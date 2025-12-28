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
      className={`cajaProyectos h-64 w-full grid items-center justify-center `}
      href={direccion}
      target="_blank"
    >
      <div className={`cards h-full w-48 sm:w-52 md:w-72`}>
        <div
          className={`page1 h-64 w-full grid grid-cols-1 grid-rows-[1fr,5fr] p-2 shadow-[0_0_10px_5px_var(--theme)] `}
        >
          <p className="h-full text-md sm:text-2xl flex justify-center text-center">
            {nombre}
          </p>

          <div className="w-full grid items-center justify-center">
            <img
              src={imagen}
              className="sm:h-48 h-52 w-48 grid items-center justify-center"
              alt="github-icon"
            />
          </div>
        </div>
        <div
          className={`page2 h-64 w-full gap-2 grid grid-rows-[auto,auto] p-4 md:p-7 shadow-[0_0_10px_5px_var(--theme)]`}
        >
          <p className="text-sm md:text-auto">{descripcion}</p>
          <div className="w-full grid grid-cols-3 lg:justify-center justify-start gap-4">
            {tecnologias.map((element, index) => {
              const image = element.toLocaleLowerCase();
              return (
                <img
                  src={`${image + ".svg"}`}
                  className="hover:scale-125 md:text-auto h-12 w-12 rounded-lg transition-all duration-150"
                  key={index}
                  title={element}
                  alt={element}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

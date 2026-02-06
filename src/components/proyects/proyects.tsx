import { useThemeStore } from "@/store/themeStore";
import Products from "./product";

interface Props {
  data: {
    web: {
      title: string;
      proyects: Array<{
        nombre: string;
        imagen: string;
        direccion: string;
        descripcion: string;
        tecnologias: Array<string>;
      }>;
    };
  };
}

function Proyectos(props: Props) {
  const { web } = props.data;
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="h-full w-4/6 flex flex-col gap-8  items-center justify-center content-center ">
      <p
        style={{ color: theme.theme }}
        className="font-bold w-full text-4xl text-center md:text-start"
      >
        {web.title}
      </p>
      <div className="h-full w-full grid md:grid-cols-2 grid-rows-auto gap-8 md:gap-y-12">
        {web.proyects.map((element, index: number) => (
          <Products
            nombre={element.nombre}
            imagen={element.imagen}
            direccion={element.direccion}
            descripcion={element.descripcion}
            tecnologias={element.tecnologias}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Proyectos;

import Image from "next/image";

interface Caracteristica {
  imagen: string;
  titulo: string;
}

interface Props {
  data: { title: string; caracteristicas: Caracteristica[] };
}

export default function Caracteristicas(prop: Props) {
  const { title, caracteristicas } = prop.data;
  return (
    <div>
      <p className="font-bold w-full text-Theme text-2xl md:text-4xl text-center md:text-start">
        {title}
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-4">
        {caracteristicas.map((e) => (
          <div key={e.titulo} className="flex flex-col gap-2">
            <Image
              src={e.imagen}
              alt={e.titulo}
              width={200}
              height={200}
              className="object-contain rounded-xl"
            />
            <div className="text-center text-sm md:text-md">{e.titulo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        {caracteristicas.map((e, i) => (
          <div key={i} className="flex flex-col gap-2">
            <img className="object-contain rounded-xl" src={e.imagen} alt="" />
            <div className="text-center text-sm md:text-md">{e.titulo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

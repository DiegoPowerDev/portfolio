interface Props {
  data: {
    title: string;
    about: string;
    about2: string;
  };
}

function Detalle(props: Props) {
  const { title, about, about2 } = props.data;

  return (
    <div className="h-full w-full flex flex-col gap-4 items-center md:gap-8 ">
      <p className="font-bold w-full text-Theme text-2xl md:text-4xl text-center md:text-start">
        {title}
      </p>
      <p className="text-sm md:text-md">{about}</p>
      <p className="text-sm md:text-md">{about2}</p>
    </div>
  );
}

export default Detalle;

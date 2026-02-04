interface Props {
  data: {
    title: string;
    about: string[];
  };
}

function Detalle(props: Props) {
  const { title, about } = props.data;

  return (
    <div className="h-full w-full flex flex-col gap-4 items-center md:gap-8 ">
      <p className="font-bold w-full text-Theme text-2xl md:text-4xl text-center md:text-start">
        {title}
      </p>
      <div className="">
        <span className="text-lg">{about[0]}</span>
        <span className="text-Theme font-bold text-lg">{about[1]}</span>
        <span className="text-lg">{about[2]}</span>
        <br /> <br />
        <span className="text-lg">{about[3]}</span>
      </div>
    </div>
  );
}

export default Detalle;

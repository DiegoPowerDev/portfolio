import { useThemeStore } from "@/store/themeStore";

interface Props {
  data: {
    title: string;
    about: string[];
  };
}

function Detalle(props: Props) {
  const { title, about } = props.data;
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="h-full w-full flex flex-col gap-4 items-center md:gap-8 ">
      <p
        style={{ color: theme.theme }}
        className="font-bold w-full  text-2xl md:text-4xl text-center md:text-start"
      >
        {title}
      </p>
      <div className="">
        <span className="text-lg">{about[0]}</span>
        <span style={{ color: theme.theme }} className="font-bold text-lg">
          {about[1]}
        </span>
        <span className="text-lg">{about[2]}</span>
        <br /> <br />
        <span className="text-lg">{about[3]}</span>
      </div>
    </div>
  );
}

export default Detalle;

import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import Image from "next/image";

interface Props {
  data: {
    first: {
      name: string;
      work: string;
    };
    second: {
      seccion: string;
      detail: string;
    };
    third: {
      seccion: string;
      detail: string;
    };
    fourth: {
      seccion: string;
      detail: string;
    };
    links: {
      github: {
        title: string;
        detail: string;
      };
      linkedin: {
        title: string;
        detail: string;
      };
    };
  };
}

function Resume(props: Props) {
  const { first, second, third, fourth, links } = props.data;

  return (
    <div className="h-full w-full grid grid-rows-[auto,auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[3fr,4fr] items-center justify-center">
      <div className="h-full gap-2 w-full grid grid-rows-[3fr,2fr,2fr] items-center justify-center p-5 ">
        <div className="h-full w-full grid grid-rows-[2fr,1fr] gap-2 md:gap-7 font-bold items-center">
          <p className="font-bold w-full text-Theme text-2xl md:text-4xl text-center md:text-start">
            {first.name}
          </p>
          <p className=" md:text-xl text-center text-Theme">{first.work}</p>
        </div>
        <div className="grid gap-2 justify-center">
          <div className="flex space-x-3  items-center ">
            <p className="md:text-md text-sm font-bold text-Theme">
              {second.seccion}{" "}
            </p>
            <p>{second.detail}</p>
          </div>
          <div className="flex space-x-3  items-center ">
            <p className="font-bold text-Theme">{third.seccion} </p>
            <p> {third.detail}</p>
          </div>
          <div className="flex space-x-3  items-center ">
            <p className="font-bold text-Theme"> {fourth.seccion} </p>
            <p> {fourth.detail}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center ">
          <div className="w-full grid  justify-center ">
            <a
              href={links.github.detail}
              className="flex flex-col items-center  hover:scale-125 transition-all group duration-300"
            >
              <IconBrandGithubFilled className="h-10 w-10 md:h-16 md:w-16  group-hover:fill-Hover" />
              <div className="text-center group-hover:text-Hover ">
                {links.github.title}
              </div>
            </a>
          </div>
          <div className="w-full grid  justify-center ">
            <a
              href={links.linkedin.detail}
              className="flex flex-col items-center hover:scale-125 transition-all group duration-300"
            >
              <IconBrandLinkedinFilled className="h-10 w-10 md:h-16 md:w-16  group-hover:fill-Hover" />
              <div className="text-center group-hover:text-Hover">
                {links.linkedin.title}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-96 items-center justify-center w-full">
        <Image
          src="/foto.webp"
          alt="Foto de perfil"
          width={320}
          height={320}
          priority
          className="rounded-full object-contain max-w-full max-h-full"
        />
      </div>
    </div>
  );
}

export default Resume;

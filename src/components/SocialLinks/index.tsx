import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMail,
} from "@tabler/icons-react";
import { ReactElement } from "react";

interface LinksInterface {
  name: string;
  url: string;
  image: ReactElement;
}

const links: LinksInterface[] = [
  {
    name: "Github",
    url: "https://github.com/DiegoPowerDev",
    image: (
      <IconBrandGithubFilled className="h-10 w-10 hover:scale-125 duration-300" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/diego-arturo-torres-pacherres-440423242/",
    image: (
      <IconBrandLinkedinFilled className="h-10 w-10 hover:scale-125 duration-300" />
    ),
  },
  {
    name: "Email",
    url: "mailto:diegopacherres15@gmail.com",
    image: <IconMail className="h-10 w-10 hover:scale-125 duration-300" />,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-4">
      {links.map((e, i) => (
        <li
          key={i}
          className="text-white hover:text-lime-400 transition-colors"
        >
          <a href={e.url}>{e.image}</a>
        </li>
      ))}
    </ul>
  );
}

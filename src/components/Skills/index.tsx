import { Code2 } from "lucide-react";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "Tailwind", icon: "/tailwind.svg" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "NestJs", icon: "/nestjs.svg" },
      { name: "PHP", icon: "/php.svg" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Firebase", icon: "/firebase.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
      { name: "MySQL", icon: "/mysql.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
    ],
  },
  {
    category: "CMS & Marketing",
    skills: [
      { name: "WordPress", icon: "/wordpress.svg" },
      { name: "Google Ads", icon: "/googleads.svg" },
      { name: "Google Analytics", icon: "/googleanalytics.svg" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Github", icon: "/github.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "Postman", icon: "/postman.svg" },
      { name: "Cloudflare", icon: "/cloudflare.svg" },
      { name: "Cloudinary", icon: "/cloudinary.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="max-w-5xl w-full flex flex-col gap-8 px-4">
      <div className="flex items-center gap-2 text-lime-400">
        <Code2 size={20} />
        <h2 className="text-4xl font-medium">SKILLS</h2>
      </div>

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-4 pb-4 border-b border-neutral-800 "
          >
            <h3 className="uppercase tracking-wider ">
              <span className="text-lime-400">★</span> {group.category}
            </h3>

            <ul className="flex flex-wrap gap-3 ">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group cursor-pointer flex items-center gap-2 rounded-lg border border-neutral-600 bg-black px-3 py-2 transition-colors hover:border-lime-400 hover:text-lime-400 "
                >
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={18}
                    height={18}
                    className="opacity-80 object-contain transition-opacity group-hover:opacity-100"
                  />
                  <span className="text-sm font-mono group-hover:text-lime-400 group-hover:font-bold transition-colors">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

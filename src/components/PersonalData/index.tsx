import SocialLinks from "../SocialLinks";
import { Button } from "../ui/button";

const mainTechnologies: string[] = [
  "Next.js",
  "React",
  "WordPress",
  "TypeScript",
];

export default function PersonalData() {
  return (
    <div id="about" className="max-w-5xl w-full flex flex-col gap-3">
      <span className="text-sm font-mono text-lime-500 tracking-wide">
        Full Stack Developer
      </span>

      <h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-white">
        DIEGO TORRES
      </h1>

      <ul className="flex flex-wrap gap-x-2 gap-y-1 ">
        {mainTechnologies.map((tech, i) => (
          <li key={tech} className="flex items-center gap-2">
            <span>{tech}</span>
            {i < mainTechnologies.length - 1 && (
              <span className="text-lime-500">•</span>
            )}
          </li>
        ))}
      </ul>

      <p className="py-4 text-neutral-300 leading-relaxed max-w-md">
        Full Stack Developer specialized in building fast, secure and scalable
        web applications. Remote contractor for TrainBeyond (Oil & Gas, USA),
        focused on performance, SEO and exceptional user experiences.
      </p>

      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="/CV.pdf"
          download="CV.pdf"
          className="bg-lime-400 h-8 flex items-center rounded-lg p-4 text-black hover:bg-lime-200 transition-colors w-fit"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="w-fit p-4 border-neutral-700 text-white hover:underline"
        >
          Contact me
        </a>
      </div>

      <div className="flex gap-3 items-center pt-2">
        <span className="">Let's connect: </span>
        <SocialLinks />
      </div>
    </div>
  );
}

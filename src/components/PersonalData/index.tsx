import Image from "next/image";
import SocialLinks from "../SocialLinks";

const mainTechnologies: string[] = [
  "Next.js",
  "React",
  "WordPress",
  "TypeScript",
];

export default function PersonalData() {
  return (
    <div
      id="about"
      className="max-w-5xl w-full h-full flex flex-col md:flex-row justify-between"
    >
      <div className="flex flex-col gap-3">
        <span className="text-sm font-mono font-bold text-lime-500 tracking-wide">
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
        <div className="flex md:hidden flex-1 items-center justify-center w-full ">
          <div className="relative  rounded-full p-[3px] bg-gradient-to-br from-lime-400 to-lime-500 shadow-[0_0_25px_rgba(163,230,53,0.45)]">
            <div className="rounded-full h-64 w-64 overflow-hidden bg-neutral-900">
              <Image
                fetchPriority="high"
                src="/foto.webp"
                width={300}
                height={300}
                alt="foto personal"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
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
            className="w-fit p-4 outline-none border-neutral-700 text-white hover:underline"
          >
            Contact me
          </a>
        </div>

        <div className="flex gap-3 items-center pt-2">
          <span className="">Let's connect: </span>
          <SocialLinks />
        </div>
      </div>
      <div className="md:flex flex-1 hidden items-center justify-center w-full ">
        <div className="relative  rounded-full p-[3px] bg-gradient-to-br from-lime-400 to-lime-500 shadow-[0_0_25px_rgba(163,230,53,0.45)]">
          <div className="rounded-full h-96 w-96 overflow-hidden bg-neutral-900">
            <Image
              src="/foto.webp"
              width={300}
              height={300}
              alt="foto personal"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

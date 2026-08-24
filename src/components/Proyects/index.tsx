"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FadeIn from "../animations/fade-in";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  image: string;
  problem: string;
  role: string;
  stack: string[];
  result: string;
  liveUrl: string;
  githubUrl?: string;
}
const projects: Project[] = [
  {
    name: "TrainBeyond",
    image: "/trainbeyond.webp",
    problem:
      "Outdated site structure with underperforming SEO and Core Web Vitals",
    role: "Web Programmer (Contractor)",
    stack: ["WordPress", "Gutenberg", "SEO", "Performance"],
    result:
      "Full site revamp: new sections, blog content, improved SEO and Core Web Vitals scores",
    liveUrl: "https://trainbeyond.com",
  },
  {
    name: "Image Library Platform",
    image: "/image-library.webp",
    problem: "Disorganized asset management for marketing teams",
    role: "Full Stack Developer",
    stack: ["Next.js", "TypeScript", "Firebase", "Cloudinary"],
    result: "Real-time collaboration with an integrated events calendar",
    liveUrl: "https://imagelibrarydev.vercel.app",
    githubUrl: "https://github.com/DiegoPowerDev/image-library",
  },
  {
    name: "FastPDFMaster",
    image: "/fast-pdf.webp",
    problem: "Slow and unreliable PDF editing workflows",
    role: "Full Stack Developer",
    stack: ["Next.js", "Adobe Acrobat API", "Cloudflare R2", "Tailwind"],
    result: "Excellent Core Web Vitals thanks to server-side rendering",
    liveUrl: "https://fastpdfmaster.vercel.app",
    githubUrl: "https://github.com/DiegoPowerDev/PDF-Master-Editor",
  },
  {
    name: "Bidmont Villa",
    image: "/bidmont.webp",
    problem: "Outdated website with low conversion rate",
    role: "Frontend & WordPress Developer",
    stack: ["WordPress", "Gutenberg", "Tailwind", "SEO"],
    result: "Complete redesign focused on conversion",
    liveUrl: "https://bidmontvilla.com",
  },
  {
    name: "Bantel Perú",
    image: "/bantelperu.webp",
    problem: "Limited site performance and SEO",
    role: "Frontend Developer",
    stack: ["WordPress", "SEO", "Performance"],
    result: "Substantial improvement in load speed",
    liveUrl: "https://bantelperu.com",
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl w-full flex flex-col gap-4 px-4">
      <div className="flex items-center gap-2 text-lime-400">
        <Folder size={20} />
        <h2 className="text-4xl font-medium">PROJECTS</h2>
      </div>
      <p className="">Featured projects I&apos;ve built and contributed to.</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1}>
            <motion.li
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "group relative flex flex-col rounded-xl border border-neutral-800 bg-[#0F1318]",
                "overflow-hidden h-full transition-colors duration-200 hover:shadow-[0_0_24px_8px_rgba(163,230,53,0.25)]",
                "hover:border-lime-400/40",
              )}
            >
              <div className="aspect-video max-h-64 bg-neutral-900 flex  justify-center text-neutral-600 text-xs">
                <Image
                  src={project.image}
                  width={500}
                  height={500}
                  alt="project name"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 p-4 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-medium text-white text-xl">
                    <span>
                      <Code2 size={20} />
                    </span>
                    {project.name}
                  </h3>
                </div>

                <dl className=" text-neutral-300 leading-relaxed space-y-0.5">
                  <div>
                    <dt className="inline text-lime-500">Problem: </dt>
                    <dd className="inline">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="inline text-lime-500">Role: </dt>
                    <dd className="inline">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="inline text-lime-500">Result: </dt>
                    <dd className="inline">{project.result}</dd>
                  </div>
                </dl>

                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm px-2 py-0.5 rounded-full border border-lime-400/30 text-lime-400 cursor-pointer hover:bg-lime-400 hover:text-black duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-8 inline-flex items-center justify-center gap-1 w-full font-bold bg-lime-400 text-black hover:bg-lime-400 hover:opacity-80 transition-opacity rounded"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-neutral-700 rounded p-4 text-white hover:bg-neutral-900 gap-1"
                      >
                        <Github size={13} />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}

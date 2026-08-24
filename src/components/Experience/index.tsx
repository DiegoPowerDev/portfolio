import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

interface Experience {
  name: string;
  role: string;
  image: string;
  duration: string;
  location: string;
  tasks: string[];
}

const experiences: Experience[] = [
  {
    name: "TrainBeyond",
    role: "Web Programmer (Contractor)",
    image: "/Trainbeyond.svg",
    duration: "Apr 2026 – Jul 2026",
    location: "Houston, TX",
    tasks: [
      "Led Gutenberg migration and optimization across high-traffic marketing pages",
      "Improved Core Web Vitals, performance scores and SEO rankings",
      "Built VR landing pages and interactive experiences for oil & gas clients",
      "Collaborated remotely in an Agile environment with a US-based team",
    ],
  },
  {
    name: "Consorcio DHMont",
    role: "Web Programmer",
    image: "/Consorciodhmont.webp",
    duration: "Oct 2025 – Mar 2026",
    location: "Peru",
    tasks: [
      "Led SEO and performance optimization initiatives",
      "Developed dynamic features and maintained scalable platforms",
    ],
  },
  {
    name: "Neon House Led",
    role: "Full Stack Developer",
    image: "/nhl.webp",
    duration: "May 2025 – Aug 2025",
    location: "Peru",
    tasks: [
      "Built scalable web solutions with Next.js, Firebase and WordPress",
      "Implemented CI/CD pipelines and cloud deployments",
      "Improved application performance and user experience",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col w-full items-center">
      <div className="flex flex-col max-w-5xl w-full px-4">
        <div className="flex items-center gap-2 text-lime-400 mb-10">
          <BriefcaseBusiness size={20} />
          <h2 className="text-4xl font-medium">EXPERIENCE</h2>
        </div>
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-neutral-800" />

          {experiences.map((exp, i) => (
            <li key={i} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <h3 className="font-semibold text-white">
                    {exp.role} — {exp.name}
                  </h3>
                  <span className="text-sm text-neutral-500">
                    {exp.duration}
                  </span>
                </div>
                <p className=" text-neutral-500 mb-2">{exp.location}</p>

                <div className="flex gap-8 flex-col md:flex-row">
                  <div className="aspect-video flex justify-center">
                    <Image
                      alt={exp.name}
                      src={exp.image}
                      width={200}
                      height={200}
                      className="bg-white p-2 rounded-xl object-contain"
                    />
                  </div>
                  <ul className="flex flex-col gap-1">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className=" text-neutral-400 leading-relaxed">
                        • {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

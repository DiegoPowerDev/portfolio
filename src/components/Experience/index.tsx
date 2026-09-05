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
      "Took ownership of a poorly performing website with unresolved SEO issues and significantly improved Core Web Vitals, page speed, and search visibility",
      "Designed and developed new Industry sections (Logistics, Construction, Manufacturing, Chemical, Oil & Gas) from scratch",
      "Built interactive training modules including Emergency on Rig Site, Coil Tubing, and Risks & Hazards, with 4 practical exercises per module",
      "Automated the production deployment process and resolved critical issues related to custom themes, improving the release workflow",
    ],
  },
  {
    name: "Consorcio DHMont",
    role: "Web Programmer",
    image: "/Consorciodhmont.webp",
    duration: "Oct 2025 – Mar 2026",
    location: "Peru",
    tasks: [
      "Managed and improved 7 websites with severe performance and SEO problems",
      "Redesigned key pages, created new sections, and significantly reduced the number of plugins to improve speed and maintainability",
      "Led the complete optimization of Bidmont Villa (hotel website): managed Google Ads campaigns, configured Google Analytics, and increased organic traffic.",
      "Implemented WooCommerce with OpenPay payment integration and successfully migrated multiple sites from Elementor to Gutenberg",
    ],
  },
  {
    name: "Neon House Led",
    role: "Full Stack Developer",
    image: "/nhl.webp",
    duration: "May 2025 – Aug 2025",
    location: "Peru",
    tasks: [
      "Led a small full-stack development team responsible for two production websites built with Next.js and Laravel",
      "Developed new sections and fixed critical error handling issues in backend API requests",
      "Implemented automated email sending using cron jobs",
      "Set up a continuous deployment pipeline by connecting GitHub to Hostinger, enabling automatic production deployments from a dedicated “production” branch",
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
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-lime-500" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-black border border-neutral-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <h3 className="font-semibold text-white">
                    {exp.role} — {exp.name}
                  </h3>
                  <span className="text-sm text-neutral-300">
                    {exp.duration}
                  </span>
                </div>
                <p className=" text-neutral-300 mb-2">{exp.location}</p>

                <div className="flex gap-8 flex-col md:flex-row">
                  <Image
                    alt={exp.name}
                    src={exp.image}
                    width={200}
                    height={200}
                    className="bg-white p-2 rounded-xl object-contain"
                  />

                  <ul className="flex flex-col gap-1">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className=" text-neutral-400 leading-relaxed">
                        • {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

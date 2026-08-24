"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import useSection from "@/hooks/useSection";

interface MenuItem {
  title: string;
  url: string;
}

const menuOptions: MenuItem[] = [
  { title: "About", url: "#about" },
  { title: "Experience", url: "#experience" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" },
];

export default function Header() {
  const { section, setSection } = useSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-[#0B0E12]/50 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 ">
        <Link
          href="#about"
          className="flex items-center gap-1.5 text-3xl font-semibold outline-none  tracking-tight py-4"
        >
          <span className="text-white">Diego</span>
          <span className="text-lime-400">Torres</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 ">
            {menuOptions.map((item) => (
              <li key={item.url}>
                <a
                  onClick={() => setSection(item.url)}
                  href={item.url}
                  className={`font-bold outline-none hover:underline py-4 ${section === item.url && "text-lime-400 "}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div></div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-b border-neutral-800 bg-[#0B0E12] p-4">
          <ul className="flex flex-col gap-2 text-lg text-neutral-400">
            {menuOptions.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  onClick={() => {
                    setOpen(false);
                    setSection(item.url);
                  }}
                  className={`block font-bold py-3 ${section === item.url && "text-lime-400 "}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

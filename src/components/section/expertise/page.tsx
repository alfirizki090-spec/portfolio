import type { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";

const skills = [
  "API Integration",
  "Version Control Git",
  "Web Performance Optimization",
  "State Management",
  "Server-Side Rendering (SSR)",
  "Static Site Generation (SSG)",
  "Component-Driven Development",
  "Responsive Web Design",
];

interface TsItem {
  name: string;
  icon: ReactNode;
}

const techStack: TsItem[] = [
  { name: "React", icon: <FaReact className="w-9 h-9 text-blue-500" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-9 h-9 text-blue-500" />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="w-9 h-9 text-blue-500" />,
  },
  { name: "Next.js", icon: <RiNextjsFill className="w-9 h-9 text-black" /> },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui className="w-9 h-9 bg-black rounded-md p-2" />,
  },
];

export default function Expertise() {
  return (
    <section className="lg:pt-18" id="expertise">
      <h3 className="font-bold text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 sticky top-0 z-10 lg:hidden">
        EXPERTISE
      </h3>
      <h4 className="font-bold bg-linear-to-r from-pink-400 to-blue-500 bg-clip-text w-fit text-transparent text-lg py-6 px-6">
        Skills
      </h4>
      <div className="mb-10">
        <ul className="gap-4 px-6 flex flex-wrap">
          {skills.map((item) => (
            <li key={item} className="border rounded-full py-1 px-2 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <h4 className="font-bold bg-linear-to-r from-pink-400 to-blue-500 bg-clip-text w-fit text-transparent text-lg py-6 px-6">
        Tech Stacks
      </h4>
      <div>
        <ul className="gap-4 px-6 grid grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => (
            <li
              key={item.name}
              className="flex items-center py-2 px-2 gap-2 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

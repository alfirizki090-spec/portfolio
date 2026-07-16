import { FaReact, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="w-9 h-9 text-blue-500" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-9 h-9 text-black" /> },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="w-9 h-9 text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-9 h-9 text-blue-500" />,
  },
  { name: "Git", icon: <FaGitAlt className="w-9 h-9 text-red-500" /> },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui className="w-9 h-9 bg-black rounded-md p-2" />,
  },
];

export default function TechStack() {
  return (
    <div className="lg:pt-24" id="skills">
      {/* SECTION 2: TECH STACKS */}
      <h3 className="font-bold text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 lg:hidden">
        SKILLS
      </h3>
      <section>
        <ul className="gap-4 px-6 grid grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => (
            <li
              key={item.name}
              className="flex items-center py-2 px-1 gap-2 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

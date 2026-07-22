import { ArrowUpRight } from "@/components/ui/arrowUpRight-icon";
import Image from "next/image";

interface ProjectItem {
  name: string;
  image: string;
  desc: string;
  TS: string[];
  url: string;
}

const project: ProjectItem[] = [
  {
    name: "Project 1",
    image: "/example1.jpeg",
    desc: "This is project 1",
    TS: ["JavaScript", "HTML & CSS"],
    url: "#",
  },
  {
    name: "Project 2",
    image: "/ex2.jpeg",
    desc: "This is project 2",
    TS: ["TypeScript", "React", "Next.js"],
    url: "#",
  },
];

export default function Project() {
  return (
    <section className="lg:pt-21" id="projects">
      <h3 className="font-bold text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 sticky top-0 z-10 lg:hidden">
        PROJECTS
      </h3>

      <nav className="px-6">
        <ul className="flex flex-col gap-5">
          {project.map((item) => (
            <li
              key={item.name}
              className="relative lg:flex lg:items-start lg:px-5 py-4 rounded-sm lg:hover:bg-white/10 lg:hover:backdrop-blur-sm transition-all duration-300"
            >
              {/* Image */}
              <div className="lg:w-1/4 mt-1 mb-3">
              <a 
              href={item.url}
              aria-hidden="true"
              tabIndex={-1}
              className="inline-block w-fit transition-opacity duration-300 hover:opacity-80"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={200}
                  className="w-fit h-24 lg:h-20 object-contain rounded border border-slate-700/50 shadow-sm"
                />
                </a>
              </div>

              {/* Title and description */}
              <div className="lg:w-3/4 flex flex-col gap-3 lg:ml-4">
                <h4 className="font-medium w-fit">
                  <a
                    href={item.url}
                    className="text-slate-200 transition-colors duration-300 hover:text-teal-400 lg:before:absolute lg:before:inset-0 group/link"
                  >
                    {item.name}
                    <ArrowUpRight className="ml-1 inline-block transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </h4>
                <p className="text-sm">{item.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.TS.map((stack) => (
                    <li
                      key={stack}
                      className="rounded-full bg-teal-700/30 px-3 py-1 text-xs font-medium text-teal-400"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

interface ProjectItem {
  name: string;
  time: string;
  desc: string;
  TS: string[];
  url: string;
}

const project: ProjectItem[] = [
  {
    name: "project 1",
    time: "Jan - March 2026",
    desc: "This is project 1",
    TS: ["JavaScript", "HTML & CSS"],
    url: "#",
  },
  {
    name: "project 2",
    time: "April - Present",
    desc: "This is project 2",
    TS: ["TypeScript", "React", "Next.js"],
    url: "#",
  },
];

export default function Project() {
  return (
    <section className="lg:pt-21" id="projects">
      <h3 className="font-bold text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 lg:hidden">
        PROJECTS
      </h3>
      <div className="px-6">
        <nav>
          <ul className="flex flex-col gap-5">
            {project.map((item) => (
              <li
                key={item.name}
                className=" lg:flex lg:items-start lg:px-3 py-2 rounded-sm lg:hover:bg-white/10 lg:hover:backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-sm lg:w-1/4 mt-1 text-slate-400">
                  {item.time}
                </div>
                <div className="lg:w-3/4 flex flex-col gap-3">
                  <a
                    href={item.url}
                    className="text-slate-200 hover:text-teal-400 w-fit"
                  >
                    {item.name}
                  </a>
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
      </div>
    </section>
  );
}

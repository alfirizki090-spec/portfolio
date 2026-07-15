import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";

const navLink = [
  { name: "ABOUT", url: "#about" },
  { name: "SKILLS", url: "#skills" },
  { name: "PROJECTS", url: "#projects" },
];

const contactLink = [
  { name: "Github", url: "#", icon: <FaGithub className="w-6 h-6" />},
  { name: "LinkedIn", url: "#", icon: <FaLinkedin className="w-6 h-6" /> },
  { name: "Email", url: "#", icon: <FaEnvelope className="w-6 h-6" /> },
];

const techStack = [
  { name: "React", icon: < FaReact className="w-9 h-9 text-blue-500" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-9 h-9 text-black" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="w-9 h-9 text-blue-500" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-9 h-9 text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="w-9 h-9 text-red-500"/> },
  { name: "shadcn/ui", icon: <SiShadcnui className="w-9 h-9 bg-black rounded-md p-2"/> },
];

const project = [
  { name: "project 1", time: "Jan - March 2026", desc:"This is project 1", TS:["JavaScript", "HTML & CSS"], url: "#" },
  { name: "project 2", time: "April - Present", desc:"This is project 2", TS:["TypeScript", "React", "Next.js"], url: "#" },
];

export default function Home() {
  return (
    <div className="mx-auto w-full flex flex-col flex-1 py-12 gap-4 lg:flex-row lg:px-6 lg:py-24 bg-slate-900 text-slate-400 selection:bg-cyan-300 selection:text-slate-600" id="about">
      <header className="px-6 flex flex-col gap-3 lg:w-1/4 lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
        {/* PROFILE */}
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-200 tracking-tight">
          Rizki Alfi
        </h1>
        <h2 className="text-lg lg:text-xl font-bold text-slate-200 tracking-tight">
          Frontend Developer
        </h2>
        <p className="mt-1">
          I build clean, performant, and <br /> accessible web interfaces
        </p>

        {/* NAVIGATION */}
        <nav className="hidden lg:block lg:mt-15">
          <ul className="flex flex-col gap-4 text-sm font-bold">
            {navLink.map((item) => (
              <li key={item.name}>
                <a href={item.url} className="group inline-flex items-center">
                  <span className="mr-4 h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200"></span>
                  <span className="text-xs font-bold tracking-widest text-slate-500 transition-all duration-300 group-hover:text-slate-200">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTACTS */}
        <nav className="px-1 lg:mt-auto">
          <ul className="flex gap-5">
            {contactLink.map((item) => (
              <li key={item.name}>
                <a href={item.url} className="hover:text-cyan-300">
                  <span>{item.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="lg:w-[53%] lg:ml-auto">
        <main className="flex flex-col flex-1 lg:gap-24">
          {/* SECTION 1: ABOUT */}
          <h3 className="font-bold text-sm text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 sticky top-0 z-10 lg:hidden">
            ABOUT
          </h3>
          <section
            className="flex flex-col gap-4 leading-relaxed px-6 pr-12"
          >
            <p>
              Hi there! I'm Alfi, and I build modern digital experiences. My
              journey with code started back in vocational high school (SMK)
              where I studied Software Engineering. Today, I am fully focused on
              frontend development, specializing in crafting clean, accessible,
              and detail-oriented user interfaces.
            </p>
            <p>
              Before diving deep into engineering, I helped build and run
              operations for a family-owned garment business. I wore many
              hats—from managing HR payroll data and logistics to hands-on
              packing and product deliveries. Experiencing the chaotic,
              fast-paced nature of a scaling business taught me extreme
              adaptability, resilience, and a sharp eye for operational
              efficiency—traits I now apply to writing robust, scalable code.
            </p>
            <p>
              My path to tech is driven by pure grit. Currently, I fund my
              transition by working as a ride-hailing driver during the day,
              which allows me to dedicate 6 hours every single night to
              mastering frontend architecture and professional English. This
              intense daily discipline is fueled by my ultimate goal: securing a
              remote role in the global tech industry.
            </p>
            <p>
              When I step away from the keyboard, I enjoy analyzing
              cryptocurrency market trends, studying the Japanese language, and
              simply taking a moment to breathe before the next night-shift
              coding session begins.
            </p>
            <div id="skills" />
          </section >

          {/* SECTION 2: TECH STACKS */}
          <h3 className="font-bold text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 lg:hidden">
            SKILLS
          </h3>
          <section>
            <ul className="gap-4 px-6 grid grid-cols-2 lg:grid-cols-3">
              {techStack.map((item) => (
                <li key={item.name} className="flex items-center py-2 px-1 gap-2 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300">{item.icon}{item.name}</li>
              ))}
            </ul>
            <div id="projects" />
          </section>

          {/* SECTION 3: PROJECTS */}
          <h3 className="font-bold text-slate-200 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 lg:hidden">
            PROJECTS
          </h3>
          <section className="px-6">
            <nav>
              <ul className="flex flex-col gap-5">
                {project.map((item) => (
                  <li key={item.name} className=" lg:flex lg:items-start py-2 px-3 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300">
                      <div className="text-sm lg:w-1/4 mt-1 text-slate-400">
                        {item.time}
                      </div>
                      <div className="lg:w-3/4 flex flex-col gap-3">
                          <h4 className="text-slate-200">{item.name}</h4>
                          <p className="text-sm">{item.desc}</p>
                          <ul className="flex flex-wrap gap-2">
                            {item.TS.map((stack) => (
                              <li key={stack} className="rounded-full bg-teal-700/30 px-3 py-1 text-xs font-medium text-teal-400">{stack}</li>
                            ))}
                          </ul>
                        </div>
                    </li>
                ))}
              </ul>
            </nav>
          </section>
        </main>

        <footer className="mt-20 px-6 text-xs text-slate-200">
          <p>
            @ 2026 Rizki Alfi. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}

const navLink = [
  { name: "ABOUT", url: "#about" },
  { name: "SKILLS", url: "#skills" },
  { name: "PROJECTS", url: "#projects" },
];

const contactLink = [
  { name: "Github", url: "" },
  { name: "LinkedIn", url: "" },
  { name: "Email", url: "" },
];

const techStack = [
  { name: "React", icon: "" },
  { name: "Next.js", icon: "" },
  { name: "TypeScript", icon: "" },
  { name: "Tailwind CSS", icon: "" },
  { name: "Git", icon: "" },
  { name: "shadcn/ui", icon: "" },
];

const project = [
  { name: "project 1", url: "" },
  { name: "project 2", url: "" },
];

export default function Home() {
  return (
    <div className="mx-auto w-full flex flex-col flex-1 py-12 gap-4 lg:flex-row lg:px-6 lg:py-24 bg-slate-900 text-slate-400">
      <header className="px-6 flex flex-col gap-3 lg:w-1/4 lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
        {/* PROFILE */}
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-300 tracking-tight">
          Rizki Alfi
        </h1>
        <h2 className="text-lg lg:text-xl font-bold text-slate-300 tracking-tight">
          Frontend Developer
        </h2>
        <p className="mt-1 max-w-xs">
          I build clean, performant, and accessible web interfaces
        </p>

        {/* NAVIGATION */}
        <nav className="hidden lg:block lg:mt-15">
          <ul className="flex flex-col gap-3 text-sm font-bold text-slate-300">
            {navLink.map((item) => (
              <li key={item.name}>
                <a href={item.url}>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTACTS */}
        <nav className="mt-auto">
          <ul className="flex gap-3">
            {contactLink.map((item) => (
              <li key={item.name}>
                <a href={item.url}>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="lg:w-[53%] lg:ml-auto">
        <main className="flex flex-col flex-1 lg:gap-24">
          {/* SECTION 1: ABOUT */}
          <h3 className="font-bold text-slate-300 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 sticky top-0 z-10 lg:hidden">
            ABOUT
          </h3>
          <section
            id="about"
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
          </section>

          {/* SECTION 2: TECH STACKS */}
          <h3 className="font-bold text-slate-300 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 lg:hidden">
            SKILLS
          </h3>
          <section id="skills">
            <ul className="gap-2 px-6 grid grid-cols-2 lg:grid-cols-3">
              {techStack.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section>

          {/* SECTION 3: PROJECTS */}
          <h3 className="font-bold text-slate-300 bg-slate-900/80 backdrop-blur-sm py-6 px-6 mt-15 lg:hidden">
            PROJECTS
          </h3>
          <section id="projects" className="px-6">
            <nav>
              <ul>
                {project.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </nav>
          </section>
        </main>

        <footer className="mt-20 px-6">
          <p>
            @ 2026 Rizki Alfi. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}

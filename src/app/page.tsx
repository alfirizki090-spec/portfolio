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
    <div className="flex">
      <header className="lg:w-1/2">

      {/* PROFILE */}
        <h1>Rizki Alfi</h1>
        <h2>Frontend Developer</h2>
        <p>I build clean, performant, and accessible web interfasces</p>
        <br />

        {/* NAVIGATION */}
        <nav>
          <ul>
            {navLink.map((item) => (
              <li key={item.name}>
                <a href="item.url">
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <br />

        {/* CONTACTS */}
        <nav>
          <ul>
            {contactLink.map((item) => (
              <li key={item.name}>
                <a href="item.url">
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="lg:w-1/2">
        <main>

          {/* SECTION 1: ABOUT */}
          <section id="about">
            <p>
              Hi there! I'm Alfi, and I build modern digital experiences. My
              journey with code started back in vocational high school (SMK)
              where I studied Software Engineering. Today, I am fully focused on
              frontend development, specializing in crafting clean, accessible,
              and detail-oriented user interfaces.
            </p> <br />
            <p>
              Before diving deep into engineering, I helped build and run
              operations for a family-owned garment business. I wore many
              hats—from managing HR payroll data and logistics to hands-on
              packing and product deliveries. Experiencing the chaotic,
              fast-paced nature of a scaling business taught me extreme
              adaptability, resilience, and a sharp eye for operational
              efficiency—traits I now apply to writing robust, scalable code.
            </p> <br />
            <p>
              My path to tech is driven by pure grit. Currently, I fund my
              transition by working as a ride-hailing driver during the day,
              which allows me to dedicate 6 hours every single night to
              mastering frontend architecture and professional English. This
              intense daily discipline is fueled by my ultimate goal: securing a
              remote role in the global tech industry.
            </p> <br />
            <p>
              When I step away from the keyboard, I enjoy analyzing
              cryptocurrency market trends, studying the Japanese language, and
              simply taking a moment to breathe before the next night-shift
              coding session begins.
            </p> <br />
          </section> <br />

          {/* SECTION 2: TECH STACKS */}
          <section id="skills">
            <ul className="flex gap-2">
              {techStack.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section> <br />

          {/* SECTION 3: PROJECTS */}
          <section id="projects">
            <nav>
              <ul>
                {project.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </nav>
          </section>
        </main> <br />

        <footer>
          <p>
            @ 2026 Rizki Alfi. <br />
            Built with Next.js, TypeScript, Tailwind CSS & shadcn/ui.
          </p>
        </footer>
      </div>
    </div>
  );
}

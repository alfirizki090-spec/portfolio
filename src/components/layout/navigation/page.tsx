"use client";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  id: string;
  url: string;
}

const navLink: NavItem[] = [
  { name: "ABOUT", id: "about", url: "#about" },
  { name: "EXPERTISE", id: "expertise", url: "#expertise" },
  { name: "PROJECTS", id: "projects", url: "#projects" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 },
    );
    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <nav className="hidden lg:block lg:mt-15">
        <ul className="flex flex-col gap-4 text-sm font-bold">
          {navLink.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.name}>
                <a href={item.url} className="group inline-flex items-center">
                  <span
                    className={`mr-4 h-px transition-all duration-300 ${
                      isActive
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-200"
                    }`}
                  ></span>
                  <span
                    className={`text-xs font-bold tracking-widest transition-all duration-300 ${
                      isActive
                        ? "text-slate-200"
                        : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

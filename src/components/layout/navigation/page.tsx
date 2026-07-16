const navLink = [
  { name: "ABOUT", url: "#about" },
  { name: "SKILLS", url: "#skills" },
  { name: "PROJECTS", url: "#projects" },
];

export default function Navigation() {
  return (
    <div>
      <nav className="hidden lg:block lg:mt-15">
        <ul className="flex flex-col gap-4 text-sm font-bold">
          {navLink.map((item) => (
            <li key={item.name}>
              <a href={item.url} className="group inline-flex items-center">
                <span className="mr-4 h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200"></span>
                <span className="text-xs font-bold tracking-widest text-slate-500 transition-all duration-300 group-hover:text-slate-200">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

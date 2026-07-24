import type { ReactNode } from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactItem {
  name: string;
  url: string;
  icon: ReactNode;
}

const contactLinks: ContactItem[] = [
  {
    name: "Github",
    url: "https://github.com/alfirizki090-spec",
    icon: <FaGithub className="w-6 h-6" />,
  },
  { name: "LinkedIn", url: "#", icon: <FaLinkedin className="w-6 h-6" /> },
  {
    name: "Email",
    url: "mailto:alfirizki090@gmail.com",
    icon: <FaEnvelope className="w-6 h-6" />,
  },
];

export default function Contact() {
  return (
    <div className="lg:mt-auto">
      <nav>
        <ul className="px-1 flex gap-5">
          {contactLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
                className="hover:text-cyan-300"
              >
                <span>{item.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

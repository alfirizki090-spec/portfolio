import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} className="link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8 px-6 text-sm lg:py-24">
      <p>
        @ 2026 Rizki Alfi. Built with{" "}
        <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>,{" "}
        <ExternalLink href="https://www.typescriptlang.org/">
          TypeScript
        </ExternalLink>{" "}
        &{" "}
        <ExternalLink href="https://tailwindcss.com/">
          Tailwind CSS
        </ExternalLink>
        . Coded in{" "}
        <ExternalLink href="https://code.visualstudio.com/">
          Visual Studio Code
        </ExternalLink>{" "}
        and deployed with{" "}
        <ExternalLink href="https://vercel.com/">Vercel</ExternalLink>. All text
        is set in the{" "}
        <ExternalLink href="https://rsms.me/inter/">Inter</ExternalLink>{" "}
        typeface.
      </p>
    </footer>
  );
}

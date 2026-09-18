import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

function Footer() {
  return (
    <footer className="border-t border-[#202020]">
      <div className="container-main py-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[-0.02em]">
              Keshav Garothia
            </p>

            <p className="mt-2 text-xs text-[#555]">
              Full Stack Developer
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#555] transition-colors hover:text-[#aaa]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="#contact"
              aria-label="GitHub"
              className="text-[#555] transition-colors hover:text-white"
            >
              <FiGithub size={16} />
            </a>

            <a
              href="#contact"
              aria-label="LinkedIn"
              className="text-[#555] transition-colors hover:text-white"
            >
              <FiLinkedin size={16} />
            </a>

            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center border border-[#252525] text-[#777] transition-colors hover:border-[#555] hover:text-white"
            >
              <FiArrowUp size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[#151515] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#444]">
            © {new Date().getFullYear()} Keshav Garothia
          </p>

          <p className="text-[10px] uppercase tracking-[0.12em] text-[#444]">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav
        className="container-main flex h-[82px] items-center justify-between border-b border-[#1a1a1a]"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="text-[15px] font-semibold tracking-[-0.03em]"
          aria-label="Keshav Garothia home"
        >
          <span className="hidden sm:inline">Keshav Garothia</span>
          <span className="sm:hidden">K</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="interactive-link text-[12px] font-medium text-[#777]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#d0d0d0] transition-colors hover:text-white md:flex"
        >
          Let&apos;s Talk
          <FiArrowUpRight size={14} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center text-[#d0d0d0] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-[#202020] bg-[#080808] md:hidden"
          >
            <div className="container-main py-6">
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                    }}
                    className="border-b border-[#181818] py-4 text-xl font-medium tracking-[-0.03em] text-[#d0d0d0]"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-6 flex min-h-[48px] items-center justify-center gap-2 border border-white bg-white text-xs font-semibold uppercase tracking-[0.08em] text-black"
                >
                  Let&apos;s Talk
                  <FiArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
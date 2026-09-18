import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    number: "01",
    name: "WriteUp",
    category: "Full Stack Web Application",
    description:
      "A modern full-stack blogging platform designed for creating and reading blog content through a clean web interface.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    layout: "normal",
  },
  {
    number: "02",
    name: "Portfolio",
    category: "Frontend Development",
    description:
      "A personal developer portfolio focused on strong typography, responsive layouts, thoughtful interaction and a restrained visual system.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    layout: "reverse",
  },
];

function ProjectPreview({ project }) {
  if (project.number === "01") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-[#252525] bg-[#0c0c0c]">
        <div className="absolute inset-x-0 top-0 flex h-9 items-center border-b border-[#222] px-4">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#333]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#333]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#333]" />
          </div>
          <div className="mx-auto h-1 w-24 bg-[#222]" />
        </div>

        <div className="absolute inset-x-[9%] bottom-[10%] top-[16%] border border-[#222]">
          <div className="flex h-full">
            <div className="w-[25%] border-r border-[#222] p-3">
              <div className="mb-5 h-2 w-12 bg-[#333]" />
              <div className="space-y-3">
                <span className="block h-1.5 w-full bg-[#1d1d1d]" />
                <span className="block h-1.5 w-4/5 bg-[#1d1d1d]" />
                <span className="block h-1.5 w-3/5 bg-[#1d1d1d]" />
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="mb-8 h-3 w-28 bg-[#333]" />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-20 border border-[#222] bg-[#101010]" />
                <div className="h-20 border border-[#222] bg-[#101010]" />
                <div className="h-20 border border-[#222] bg-[#101010]" />
                <div className="h-20 border border-[#222] bg-[#101010]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-[#252525] bg-[#0c0c0c]">
      <div className="absolute inset-0 p-[8%]">
        <div className="h-full border border-[#222]">
          <div className="flex h-full flex-col p-[7%]">
            <div className="flex items-center justify-between border-b border-[#222] pb-4">
              <div className="h-2 w-20 bg-[#333]" />
              <div className="h-2 w-10 bg-[#222]" />
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <div className="h-7 w-[65%] bg-[#333]" />
              <div className="mt-3 h-2 w-[45%] bg-[#222]" />

              <div className="mt-8 flex gap-3">
                <div className="h-9 w-24 border border-[#333]" />
                <div className="h-9 w-24 border border-[#222]" />
              </div>
            </div>

            <div className="border-t border-[#222] pt-4">
              <div className="h-1.5 w-32 bg-[#222]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="section-label">03 — Projects</p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="section-heading max-w-[850px]"
            >
              Selected
              <br />
              <span className="text-[#777]">work.</span>
            </motion.h2>

            <div className="mt-20">
              {projects.map((project, index) => (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className={`grid items-center gap-10 border-t border-[#202020] py-12 lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                    project.layout === "reverse"
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="section-label">
                        Project {project.number}
                      </span>

                      <span className="text-xs text-[#444]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                      {project.name}
                    </h3>

                    <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#777]">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-[11px] uppercase tracking-[0.08em] text-[#555]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <a href="#contact" className="secondary-button">
                        View Project
                        <FiExternalLink size={14} />
                      </a>

                      <a
                        href="#contact"
                        className="inline-flex min-h-[50px] items-center justify-center gap-2 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#777] transition-colors hover:text-white"
                      >
                        GitHub
                        <FiGithub size={14} />
                      </a>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <ProjectPreview project={project} />
                  </motion.div>
                </motion.article>
              ))}
            </div>

            <div className="border-t border-[#202020] pt-7">
              <div className="flex items-center justify-between gap-6">
                <p className="max-w-[460px] text-sm leading-7 text-[#555]">
                  More projects can be added here as the portfolio grows.
                </p>

                <FiArrowUpRight
                  size={18}
                  className="shrink-0 text-[#444]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
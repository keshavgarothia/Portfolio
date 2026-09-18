import { motion } from "framer-motion";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-y border-[#151515]"
    >
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="section-label">02 — Skills</p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="section-heading max-w-[800px]"
            >
              Tools I use
              <br />
              <span className="text-[#777]">to build.</span>
            </motion.h2>

            <div className="mt-16 border-t border-[#202020]">
              {groups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: groupIndex * 0.06,
                  }}
                  className="grid gap-6 border-b border-[#202020] py-8 md:grid-cols-[170px_1fr] md:gap-10"
                >
                  <div>
                    <p className="text-sm font-medium text-[#d0d0d0]">
                      {group.title}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.name}
                          className="group flex min-h-[58px] items-center justify-between border-b border-[#171717] py-4"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={15}
                              aria-hidden="true"
                              className="text-[#555] transition-colors group-hover:text-[#aaa]"
                            />

                            <span className="text-sm text-[#999] transition-colors group-hover:text-[#f5f5f5]">
                              {item.name}
                            </span>
                          </div>

                          <span
                            className="h-1 w-1 rounded-full bg-[#333] transition-colors group-hover:bg-[#aaa]"
                            aria-hidden="true"
                          />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
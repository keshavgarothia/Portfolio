import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive interfaces and modern React applications with a focus on structure, usability and clean visual systems.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Creating APIs and server-side functionality with Node.js and Express.js for practical full-stack applications.",
  },
  {
    number: "03",
    title: "Database & Integration",
    description:
      "Working with MongoDB and connecting applications to reliable data systems and application logic.",
  },
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="section-label">01 — About</p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="section-heading max-w-[850px]"
            >
              Building with
              <br />
              <span className="text-[#777]">purpose.</span>
            </motion.h2>

            <div className="mt-10 grid max-w-[900px] gap-10 md:grid-cols-[1fr_260px] md:gap-16">
              <p className="body-copy">
                I&apos;m Keshav Garothia, a Full Stack Developer focused on
                building web applications from interface to backend. I enjoy
                turning ideas into structured, responsive and practical digital
                experiences.
              </p>

              <div className="border-l border-[#202020] pl-5">
                <p className="section-label mb-3">Approach</p>
                <p className="text-sm leading-7 text-[#777]">
                  Clear structure. Thoughtful interfaces. Reliable
                  functionality.
                </p>
              </div>
            </div>

            <div className="mt-20 border-t border-[#202020]">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="grid gap-5 border-b border-[#202020] py-7 md:grid-cols-[70px_250px_1fr] md:items-start md:gap-8"
                >
                  <span className="text-xs text-[#555]">{item.number}</span>

                  <h3 className="text-base font-medium tracking-[-0.02em] text-[#e8e8e8]">
                    {item.title}
                  </h3>

                  <div className="flex items-start justify-between gap-6">
                    <p className="max-w-[540px] text-sm leading-7 text-[#777]">
                      {item.description}
                    </p>

                    <FiArrowUpRight
                      size={16}
                      className="mt-1 hidden shrink-0 text-[#444] md:block"
                    />
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

export default About;
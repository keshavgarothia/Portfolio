import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const journey = [
  {
    year: "Current",
    institution: "JECRC University",
    qualification: "Bachelor of Computer Applications",
    description:
      "Developing a foundation across computer science, software development and application technologies.",
  },
  {
    year: "Learning",
    institution: "Full Stack Development",
    qualification: "React · Node.js · Express.js · MongoDB",
    description:
      "Building practical full-stack applications while developing frontend, backend and database skills.",
  },
];

function Education() {
  return (
    <section id="education" className="section-padding border-y border-[#151515]">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="section-label">04 — Education</p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="section-heading max-w-[900px]"
            >
              The journey
              <br />
              <span className="text-[#777]">so far.</span>
            </motion.h2>

            <div className="mt-16 border-t border-[#202020]">
              {journey.map((item, index) => (
                <motion.article
                  key={`${item.institution}-${item.year}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="grid gap-6 border-b border-[#202020] py-9 md:grid-cols-[100px_1fr_30px] md:gap-8"
                >
                  <span className="text-xs uppercase tracking-[0.08em] text-[#555]">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-[#e8e8e8]">
                      {item.institution}
                    </h3>

                    <p className="mt-2 text-sm text-[#999]">
                      {item.qualification}
                    </p>

                    <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#666]">
                      {item.description}
                    </p>
                  </div>

                  <FiArrowUpRight
                    size={16}
                    className="hidden text-[#444] md:block"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
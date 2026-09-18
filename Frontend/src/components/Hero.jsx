import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-[82px]">
      <div className="container-main flex min-h-[calc(100vh-82px)] flex-col justify-center py-20 lg:py-24">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_280px] lg:gap-20">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#555]" />
              <span className="section-label text-[#777]">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08 }}
              className="max-w-[950px] text-[clamp(4rem,11vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
            >
              Keshav
              <br />
              <span className="text-[#777]">Garothia.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.16 }}
              className="mt-10 max-w-[580px]"
            >
              <p className="text-base leading-7 text-[#8a8a8a] sm:text-lg sm:leading-8">
                I build modern web experiences with clean interfaces,
                thoughtful interactions and reliable full-stack functionality.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#projects" className="primary-button">
                View My Work
                <FiArrowUpRight size={15} />
              </a>

              <a href="#contact" className="secondary-button">
                Let&apos;s Talk
                <FiArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.32 }}
            className="border-t border-[#202020] pt-5 lg:border-t-0 lg:border-l lg:pl-7 lg:pt-0"
          >
            <div className="space-y-6">
              <div>
                <p className="section-label mb-2">Based in</p>
                <p className="text-sm text-[#d0d0d0]">India</p>
              </div>

              <div>
                <p className="section-label mb-2">Focus</p>
                <p className="text-sm text-[#d0d0d0]">
                  Full Stack Development
                </p>
              </div>

              <div>
                <p className="section-label mb-2">Stack</p>
                <p className="text-sm leading-6 text-[#8a8a8a]">
                  React / Node.js / MongoDB
                </p>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href="#contact"
                  aria-label="GitHub"
                  className="text-[#777] transition-colors hover:text-white"
                >
                  <FiGithub size={17} />
                </a>

                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="text-[#777] transition-colors hover:text-white"
                >
                  <FiLinkedin size={17} />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#555] transition-colors hover:text-[#aaa]"
          aria-label="Scroll to about section"
        >
          <FiArrowDown size={14} />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
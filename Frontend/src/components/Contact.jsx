import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <div className="grid gap-16 lg:grid-cols-[1fr_440px] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className="section-label">05 — Contact</p>

            <h2 className="mt-10 text-[clamp(3.4rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              Have an
              <br />
              idea?
              <br />
              <span className="text-[#777]">Let&apos;s build it.</span>
            </h2>

            <p className="mt-9 max-w-[470px] text-base leading-8 text-[#777]">
              If you have a project, opportunity or idea you would like to
              discuss, get in touch.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href="mailto:hello@example.com"
                className="group flex w-fit items-center gap-4 text-sm text-[#aaa] transition-colors hover:text-white"
              >
                <FiMail size={16} className="text-[#555]" />
                <span>hello@example.com</span>
                <FiArrowUpRight
                  size={14}
                  className="text-[#444] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group flex w-fit items-center gap-4 text-sm text-[#aaa] transition-colors hover:text-white"
              >
                <FiGithub size={16} className="text-[#555]" />
                <span>GitHub</span>
                <FiArrowUpRight
                  size={14}
                  className="text-[#444] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group flex w-fit items-center gap-4 text-sm text-[#aaa] transition-colors hover:text-white"
              >
                <FiLinkedin size={16} className="text-[#555]" />
                <span>LinkedIn</span>
                <FiArrowUpRight
                  size={14}
                  className="text-[#444] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="border-t border-[#202020] pt-7">
              <p className="section-label mb-8">Send a message</p>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.08em] text-[#666]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full border-b border-[#292929] bg-transparent px-0 py-3 text-sm text-[#f5f5f5] placeholder:text-[#444] focus:border-white focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.08em] text-[#666]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full border-b border-[#292929] bg-transparent px-0 py-3 text-sm text-[#f5f5f5] placeholder:text-[#444] focus:border-white focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.08em] text-[#666]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-y border-b border-[#292929] bg-transparent px-0 py-3 text-sm leading-7 text-[#f5f5f5] placeholder:text-[#444] focus:border-white focus:outline-none"
                    placeholder="Tell me about your idea..."
                  />
                </div>

                <button type="submit" className="primary-button w-full sm:w-auto">
                  {submitted ? (
                    <>
                      Message Ready
                      <FiCheck size={15} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiArrowUpRight size={15} />
                    </>
                  )}
                </button>

                <p
                  className={`text-xs leading-6 ${
                    submitted ? "text-[#aaa]" : "text-[#444]"
                  }`}
                  aria-live="polite"
                >
                  {submitted
                    ? "The form is currently frontend-only. Connect it to an email service or backend endpoint to send messages."
                    : "This frontend form does not send data until a backend or email service is connected."}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
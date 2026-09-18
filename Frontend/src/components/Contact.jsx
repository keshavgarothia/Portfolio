import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Open to full-time roles, freelance tasks, and technical collaborations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Let's talk about your project</h3>
            <p className="text-slate-400">
              Send a message regarding new projects, full-stack requirements, or architecture queries.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 text-slate-300">
                <HiMail className="text-cyan-400" size={20} />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300">
                <HiLocationMarker className="text-cyan-400" size={20} />
                <span>City, Country</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()} 
            className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-slate-800"
          >
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-cyan-500 text-slate-950 font-semibold rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <HiPaperAirplane size={18} className="rotate-90" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
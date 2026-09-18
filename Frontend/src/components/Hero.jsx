import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 font-medium mb-4 text-sm md:text-base tracking-wide uppercase"
        >
          MERN Stack Developer
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Building scalable Web Applications from <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Frontend to Backend</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto"
        >
          Specialized in MongoDB, Express.js, React, and Node.js. Designing clean interfaces paired with high-performance APIs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:bg-slate-900 transition-colors">
            Get in Touch
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-6 mt-12 text-slate-400"
        >
          <a href="#" className="hover:text-cyan-400 transition-colors"><FaGithub size={24} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><FaLinkedin size={24} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><HiMail size={24} /></a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <HiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
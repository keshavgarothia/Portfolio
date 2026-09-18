import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaDesktop } from 'react-icons/fa';

const features = [
  { icon: FaDesktop, title: 'Frontend Architecture', desc: 'Crafting responsive, dynamic UIs with React and Tailwind CSS.' },
  { icon: FaServer, title: 'Backend Systems', desc: 'Building secure, scalable RESTful APIs with Express and Node.js.' },
  { icon: FaDatabase, title: 'Database Design', desc: 'Structuring flexible and performant MongoDB schemas.' },
  { icon: FaCode, title: 'Clean Code', desc: 'Writing maintainable, modular, and optimized JavaScript code.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Full Stack Developer dedicated to constructing robust MERN stack applications with high engineering standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors"
            >
              <item.icon className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
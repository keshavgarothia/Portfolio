import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Framer Motion']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'WebSockets']
  },
  {
    category: 'Database & Tools',
    skills: ['MongoDB', 'Mongoose', 'Git/GitHub', 'Postman', 'Vite', 'Docker Basics']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Technologies and tools used across full-stack production projects.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
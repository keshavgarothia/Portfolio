import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University / College Name',
    period: '2020 - 2024',
    desc: 'Focused on Data Structures, Algorithms, Web Development, and Database Systems.'
  },
  {
    degree: 'Full Stack MERN Certification',
    institution: 'Tech Academy / Bootcamp',
    period: '2023',
    desc: 'Intensive engineering program focused on building end-to-end web applications.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Training</h2>
          <p className="text-slate-400">Academic background and certified training.</p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800"
            >
              <div className="p-3 bg-slate-950 text-cyan-400 rounded-xl h-fit border border-slate-800">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs text-cyan-400 font-medium">{edu.period}</span>
                <h3 className="text-lg font-semibold text-white mt-1">{edu.degree}</h3>
                <p className="text-sm text-slate-300 mb-2">{edu.institution}</p>
                <p className="text-slate-400 text-sm">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
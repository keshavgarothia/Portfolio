import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-featured MERN store with Stripe payments, admin controls, and state management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Task Management App',
    desc: 'Real-time collaborative kanban board with drag-and-drop features and team tracking.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Social Media Dashboard',
    desc: 'Analytics platform parsing API datasets into interactive data visualizations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Production-ready applications highlighting MERN implementation patterns.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
            >
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href={project.github} className="flex items-center space-x-1.5 text-slate-300 hover:text-white text-sm">
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>
                    <a href={project.demo} className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 text-sm">
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-slate-500 text-sm px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
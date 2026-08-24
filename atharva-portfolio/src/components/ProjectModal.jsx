import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0c0d16] border border-white/[0.15] shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Glow ambient inside modal */}
        <div 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] opacity-30 pointer-events-none"
          style={{ backgroundColor: project.color }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span 
              className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: `${project.color}20`,
                borderColor: `${project.color}50`,
                borderWidth: '1px',
                color: project.color
              }}
            >
              {project.tag}
            </span>
            <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded-md bg-white/[0.05]">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-300 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics / Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] uppercase font-mono text-slate-400">
                {m.label}
              </div>
              <div className="text-sm font-bold text-white font-mono mt-0.5">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Project Overview & Objective
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Architectural & Functional Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Key Engineering Features
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Note */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-8">
          <h4 className="text-xs font-mono uppercase text-cyan-300 font-semibold mb-1 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            Architecture & Design Pattern
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
            Technologies Utilized
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all"
          >
            Close Window
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] text-white transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-slate-200 transition-all shadow-lg shadow-white/10"
          >
            <span>Live Demo / Documentation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

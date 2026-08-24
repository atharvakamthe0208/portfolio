import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Info, 
  ArrowUpRight, 
  Smartphone, 
  Gamepad2, 
  LayoutDashboard, 
  Terminal,
  Activity,
  Layers,
  MapPin,
  Flame
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const projectCategories = ['All', 'Android', 'Game Dev', 'Desktop', 'Systems'];

// Custom Graphic Visual Previews for each project
const ProjectVisual = ({ imageTheme, color }) => {
  switch (imageTheme) {
    case 'blood-donation':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#1a0c10] to-[#090a12] p-4 flex flex-col justify-between overflow-hidden border border-rose-500/20">
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-rose-600/20 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-300">
              <Activity className="w-3.5 h-3.5 animate-pulse text-rose-400" />
              LIVE RADIAL MATCH
            </span>
            <span className="text-[10px] font-mono text-slate-400">Android SDK 34</span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="relative w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center shadow-glow-rose">
              <Flame className="w-7 h-7 text-rose-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-rose-500 animate-ping" />
            </div>
            <div className="text-xs font-mono font-bold text-white mt-2">RAKTDAAN • EMERGENCY RADAR</div>
            <div className="text-[11px] text-rose-300/80 font-mono flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" /> Geolocation Radius Sync
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-2 border-t border-white/[0.06]">
            <span>Nearby Donors: <strong className="text-rose-300">Active</strong></span>
            <span>Blood Banks: <strong className="text-emerald-300">Verified</strong></span>
          </div>
        </div>
      );

    case 'fantasy-game':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#120b1c] to-[#080912] p-4 flex flex-col justify-between overflow-hidden border border-purple-500/20">
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-purple-600/25 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300">
              <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
              UNREAL ENGINE 5
            </span>
            <span className="text-[10px] font-mono text-slate-400">Lumen & Nanite</span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center shadow-glow-purple">
              <Gamepad2 className="w-7 h-7 text-purple-300" />
            </div>
            <div className="text-xs font-mono font-bold text-white mt-2">REALM OF SHADOWS</div>
            <div className="text-[11px] text-purple-300/80 font-mono mt-0.5">
              Action RPG • 60 FPS Target
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-2 border-t border-white/[0.06]">
            <span>Combat AI: <strong className="text-purple-300">Behavior Trees</strong></span>
            <span>VFX: <strong className="text-cyan-300">Niagara</strong></span>
          </div>
        </div>
      );

    case 'grade-tracker':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#0a141e] to-[#070a12] p-4 flex flex-col justify-between overflow-hidden border border-cyan-500/20">
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-cyan-600/20 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" />
              JAVA SWING SUITE
            </span>
            <span className="text-[10px] font-mono text-slate-400">MySQL / JDBC</span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shadow-glow-cyan">
              <LayoutDashboard className="w-7 h-7 text-cyan-300" />
            </div>
            <div className="text-xs font-mono font-bold text-white mt-2">STUDENT GRADE TRACKER</div>
            <div className="text-[11px] text-cyan-300/80 font-mono mt-0.5">
              CGPA Calculation & Analytics
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-2 border-t border-white/[0.06]">
            <span>Charts: <strong className="text-cyan-300">JFreeChart</strong></span>
            <span>Reports: <strong className="text-emerald-300">PDF Export</strong></span>
          </div>
        </div>
      );

    case 'billing-system':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#0a1912] to-[#070d09] p-4 flex flex-col justify-between overflow-hidden border border-emerald-500/20">
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-emerald-600/20 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              C ARCHITECTURE
            </span>
            <span className="text-[10px] font-mono text-slate-400">Binary File I/O</span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shadow-glow-emerald">
              <Terminal className="w-7 h-7 text-emerald-300" />
            </div>
            <div className="text-xs font-mono font-bold text-white mt-2">MALL BILLING & POS</div>
            <div className="text-[11px] text-emerald-300/80 font-mono mt-0.5">
              High-Speed Inventory & Invoices
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-2 border-t border-white/[0.06]">
            <span>Latency: <strong className="text-emerald-300">&lt; 1ms I/O</strong></span>
            <span>Storage: <strong className="text-cyan-300">Binary Records</strong></span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/3 -left-32 w-[34rem] h-[34rem] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured <span className="gradient-text-cyan-purple">Software Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real-world applications spanning native mobile platforms, 3D interactive games, desktop analytics suites, and systems programming.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1 shadow-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Visual Mockup Container */}
                <div className="mb-6 relative">
                  <ProjectVisual imageTheme={project.imageTheme} color={project.color} />
                </div>

                {/* Project Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span 
                      className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                        borderColor: `${project.color}40`,
                        borderWidth: '1px'
                      }}
                    >
                      {project.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.08] transition-all shrink-0 cursor-pointer"
                    title="Learn More & View Specs"
                    aria-label={`View detailed specs for ${project.title}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Short Summary */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.1] text-white transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.1] text-cyan-300 transition-all"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

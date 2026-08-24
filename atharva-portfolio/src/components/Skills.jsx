import React, { useState } from 'react';
import { 
  Atom, 
  FileCode, 
  Layout, 
  Wind, 
  Boxes, 
  Coffee, 
  Server, 
  Flame, 
  Network, 
  Binary, 
  Database, 
  Radio, 
  Layers, 
  Smartphone, 
  GitBranch, 
  Terminal, 
  Send, 
  CloudSun, 
  CloudRain, 
  Gamepad2, 
  Cpu, 
  Sparkles,
  Check
} from 'lucide-react';
import { FigmaIcon } from './BrandIcons';
import { skillsData } from '../data/portfolioData';

const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Tools', 'Cloud & Emerging'];

// Custom SVG Icons for specific tech
const TechIcon = ({ name, color }) => {
  const iconProps = { className: "w-6 h-6", style: { color } };
  
  switch (name) {
    case 'React.js': return <Atom {...iconProps} />;
    case 'JavaScript (ES6+)': return <FileCode {...iconProps} />;
    case 'HTML5 & CSS3': return <Layout {...iconProps} />;
    case 'Tailwind CSS': return <Wind {...iconProps} />;
    case 'Bootstrap 5': return <Boxes {...iconProps} />;
    case 'Java (Core & Adv)': return <Coffee {...iconProps} />;
    case 'Node.js': return <Server {...iconProps} />;
    case 'Firebase (Auth/DB)': return <Flame {...iconProps} />;
    case 'REST APIs': return <Network {...iconProps} />;
    case 'C / C++': return <Binary {...iconProps} />;
    case 'MySQL': return <Database {...iconProps} />;
    case 'Firebase Realtime DB': return <Radio {...iconProps} />;
    case 'Cloud Firestore': return <Layers {...iconProps} />;
    case 'Android Studio': return <Smartphone {...iconProps} />;
    case 'Git & GitHub': return <GitBranch {...iconProps} />;
    case 'VS Code': return <Terminal {...iconProps} />;
    case 'Figma (UI/UX)': return <FigmaIcon {...iconProps} />;
    case 'Postman': return <Send {...iconProps} />;
    case 'Google Cloud (GCP)': return <CloudSun {...iconProps} />;
    case 'AWS (Learning)': return <CloudRain {...iconProps} />;
    case 'Unreal Engine 5': return <Gamepad2 {...iconProps} />;
    case 'Blueprints Scripting': return <Cpu {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Tools & <span className="gradient-text-cyan-purple">Technologies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive overview of programming languages, modern frameworks, database engines, and developer platforms I specialize in.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1 shadow-lg group relative overflow-hidden"
            >
              {/* Subtle top card glow line matching skill color */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: skill.color }}
              />

              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner"
                  style={{ boxShadow: `0 0 20px -5px ${skill.color}20` }}
                >
                  <TechIcon name={skill.name} color={skill.color} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                    {skill.level}
                  </span>
                  <span className="text-xs font-mono font-bold text-white mt-1">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {skill.category}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-4 w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-125"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}80`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Skill Proficiency Highlights */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">Modern Frontend</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xs">
              Single-page apps, responsive design systems, high-performance UI components with React & Tailwind.
            </p>
          </div>

          <div className="flex flex-col items-center md:border-x border-white/[0.08] px-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono">Native Android</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xs">
              Java, Android SDK, Firebase real-time integration, Google Maps location tracking, and Material UI.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">Core CS & DSA</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xs">
              Algorithmic optimization, object-oriented design, relational schema engineering, and systems I/O.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

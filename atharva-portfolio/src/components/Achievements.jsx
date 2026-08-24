import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Cloud, 
  Smartphone, 
  Code2, 
  Cpu, 
  ExternalLink, 
  Sparkles, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const achievementCategories = ['All', 'Certification', 'Hackathon', 'Competitive Coding', 'Workshop', 'Academic'];

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-pink-400" />;
      case 'Award': return <Award className="w-5 h-5 text-cyan-300" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredAchievements = activeCategory === 'All'
    ? achievementsData
    : achievementsData.filter(a => a.category === activeCategory);

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Achievements & <span className="gradient-text-emerald">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Recognitions, verified industry certifications, hackathon participations, and academic honors earned along the way.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {achievementCategories.map((cat) => (
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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-2">
                  {item.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-300 mt-1 mb-3">
                  {item.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>

                {item.link && item.link !== '#' && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

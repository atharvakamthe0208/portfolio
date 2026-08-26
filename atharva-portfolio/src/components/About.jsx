import React from 'react';
import { 
  GraduationCap, 
  Smartphone, 
  Code2, 
  Database, 
  Terminal,
  Calendar, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';
import { aboutMeData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Smartphone: <Smartphone className="w-5 h-5 text-purple-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-amber-400" />
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Section Accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering with <span className="gradient-text-cyan-purple">Passion & Precision</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A closer look into my educational background, engineering foundation, and technical goals.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column: Educational & Passion Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-white/[0.15] transition-all shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Computer Engineering Undergraduate
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                    MMIT, Pune • 2nd Year B.E. (2024 – Present)
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {aboutMeData.description1}
              </p>
              
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6">
                {aboutMeData.description2}
              </p>
            </div>

            {/* Quick Badges in narrative */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Diploma Topper</div>
                  <div className="text-[10px] text-slate-400">88.44% Aggregate</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Android & Java</div>
                  <div className="text-[10px] text-slate-400">Native Studio Apps</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Python & DSA</div>
                  <div className="text-[10px] text-slate-400">Algorithmic Problem Solving</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Interest Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutMeData.interests.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card hover:bg-white/[0.06] transition-all group border border-white/[0.07] hover:border-cyan-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Academic Milestones Timeline */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Academic <span className="gradient-text-emerald">Journey</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
              Consistently strong academic performance from SSC and Diploma to Computer Engineering B.E.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline center line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/60 via-purple-500/60 to-emerald-500/60 -translate-x-1/2 hidden sm:block" />
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/60 via-purple-500/60 to-emerald-500/60 block sm:hidden" />

            <div className="space-y-8 sm:space-y-12">
              {aboutMeData.milestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 pl-10 sm:pl-0`}
                  >
                    {/* Timeline center node */}
                    <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0b12] border-2 border-cyan-400 shadow-glow-cyan flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping" />
                    </div>

                    {/* Timeline Content Card */}
                    <div className="w-full sm:w-[calc(50%-2rem)]">
                      <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-cyan-500/40 transition-all group shadow-lg">
                        
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                            <Calendar className="w-3 h-3" />
                            {milestone.year}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-emerald-400 font-bold">
                            {milestone.badge}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {milestone.title}
                        </h4>
                        
                        <p className="text-xs font-semibold text-slate-300 mt-1 mb-2">
                          {milestone.institution}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

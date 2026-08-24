import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code2, 
  Terminal, 
  Sparkles, 
  ExternalLink,
  ChevronDown,
  Layers,
  Smartphone,
  Server
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onDownloadResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.titles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] sm:w-[48rem] h-[24rem] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-pink-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6 shadow-sm hover:border-cyan-500/40 transition-all">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalInfo.status}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I'm <br />
              <span className="gradient-text-cyan-purple text-glow-cyan">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Typewriter */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-lg sm:text-2xl font-semibold text-slate-300">
                {displayedText}
                <span className="inline-block w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Summary description */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mb-8 leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Projects */}
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-cyan-500/20 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume */}
              <button
                onClick={onDownloadResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-cyan-500/30 hover:border-cyan-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-cyan-500/10 active:scale-95 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 active:scale-95"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl pt-6 border-t border-white/[0.08]">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Glowing Profile Avatar & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Outer Glowing Rotating Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-60 animate-pulse-slow" />
              
              <div className="absolute -inset-2 rounded-full border border-cyan-500/20 border-dashed animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-purple-500/15" />

              {/* Profile Card / Avatar Canvas */}
              <div className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-3xl p-1 bg-gradient-to-b from-cyan-400/40 via-purple-500/30 to-white/10 shadow-2xl shadow-purple-950/50">
                <div className="w-full h-full rounded-[22px] bg-[#0c0d16] p-6 flex flex-col items-center justify-between relative overflow-hidden border border-white/10">
                  
                  {/* Subtle Grid in Avatar box */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />

                  {/* Top Monogram / Header */}
                  <div className="w-full flex items-center justify-between z-10">
                    <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      SYSTEM.ONLINE
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-slate-300">
                      v2.5.0
                    </span>
                  </div>

                  {/* Center Hero Avatar Illustration */}
                  <div className="relative my-auto flex flex-col items-center z-10">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-glow-cyan">
                      <div className="w-full h-full rounded-[14px] bg-[#090a10] flex flex-col items-center justify-center relative overflow-hidden">
                        
                        {/* Futuristic Tech Monogram */}
                        <div className="relative">
                          <Code2 className="w-12 h-12 text-cyan-300" />
                          <Terminal className="w-5 h-5 text-purple-400 absolute -bottom-1 -right-1" />
                        </div>
                        <span className="font-mono font-extrabold text-lg mt-1 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                          ATHARVA
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        Atharva Kamthe
                      </h3>
                      <p className="text-[11px] text-cyan-400 font-mono">
                        B.E. Computer Engineering
                      </p>
                    </div>
                  </div>

                  {/* Bottom Mini Tags */}
                  <div className="w-full flex items-center justify-center gap-1.5 z-10">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      React.js
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300">
                      Android
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                      Java
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Badges around Avatar */}
              {/* Badge 1: React / Web */}
              <div className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/40 text-xs font-semibold text-white shadow-xl shadow-cyan-500/10 flex items-center gap-2 animate-float">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[11px]">React & Tailwind</span>
              </div>

              {/* Badge 2: Android & Firebase */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl glass-panel border border-purple-500/40 text-xs font-semibold text-white shadow-xl shadow-purple-500/10 flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px]">Android & Firebase</span>
              </div>

              {/* Badge 3: LeetCode / Algorithms */}
              <div className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/40 text-xs font-semibold text-white shadow-xl shadow-emerald-500/10 flex items-center gap-2 animate-float" style={{ animationDelay: '4s' }}>
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px]">350+ Solved</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors group"
            aria-label="Scroll to About Section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-cyan-300">
              Explore Portfolio
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

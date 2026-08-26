import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Code2, 
  Terminal, 
  Heart,
  Sparkles
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './BrandIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const FooterBrandIcon = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'GitHub':
      return <GithubIcon className={className} />;
    case 'LinkedIn':
      return <LinkedinIcon className={className} />;
    case 'Gmail':
      return <Mail className={className} />;
    case 'LeetCode':
      return <LeetCodeIcon className={className} />;
    case 'HackerRank':
      return <HackerRankIcon className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07070a] pt-14 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-24 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06] items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 p-[1px] border border-white/10 flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.fullName || personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Computer Engineering student at MMIT Pune with a strong diploma foundation (88.44%). Building scalable Android applications, Java & Python tools, and high-impact digital solutions.
            </p>

            {/* Live Location / Time Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pune, IN (IST)</span>
              <span>•</span>
              <span className="text-cyan-300 font-semibold">{time || '12:00 PM'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400 font-medium">
              <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
              <a href="#resume" className="hover:text-cyan-300 transition-colors">Resume PDF</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            </div>
          </div>

          {/* Official Social Logos Dock in Footer */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider md:text-right">
                Official Profiles
              </h4>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-200 hover:scale-110 active:scale-95"
                    style={{ color: social.color }}
                    title={`${social.name} (${social.username})`}
                    aria-label={`Open ${social.name}`}
                  >
                    <FooterBrandIcon name={social.name} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Atharva Santosh Kamthe. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with <span className="text-rose-400">♥</span> using React & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}

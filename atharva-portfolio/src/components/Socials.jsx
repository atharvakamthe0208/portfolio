import React from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './BrandIcons';
import { socialLinks } from '../data/portfolioData';

// Branded icon renderer
const BrandIcon = ({ name, className = "w-6 h-6" }) => {
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

export default function Socials() {
  return (
    <section id="connect" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Subtle Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>OFFICIAL PROFILES & NETWORKS</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-8 font-mono">
          Connect directly across developer platforms & professional networks
        </p>

        {/* Minimalist Glassmorphic Official Logo Dock */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-3xl glass-panel border border-white/[0.1] shadow-2xl backdrop-blur-2xl">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-cyan-400/50 transition-all duration-300 hover:scale-115 active:scale-95 shadow-md flex items-center justify-center"
              style={{
                color: social.color,
              }}
              title={`${social.name} - ${social.username}`}
              aria-label={`Open ${social.name} Profile`}
            >
              {/* Glowing Aura on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: social.color }}
              />

              {/* Official Icon */}
              <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
                <BrandIcon name={social.name} className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#090a10] border border-white/[0.15] text-[11px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-30">
                {social.name}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Share2 
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  TwitterIcon, 
  LeetCodeIcon, 
  HackerRankIcon 
} from './BrandIcons';
import { socialLinks } from '../data/portfolioData';

// Custom SVG Branded Icons for precise logos
const BrandIcon = ({ name }) => {
  const iconProps = { className: "w-6 h-6" };

  switch (name) {
    case 'GitHub':
      return <GithubIcon {...iconProps} />;
    case 'LinkedIn':
      return <LinkedinIcon {...iconProps} />;
    case 'Gmail':
      return <Mail {...iconProps} />;
    case 'Instagram':
      return <InstagramIcon {...iconProps} />;
    case 'Twitter':
    case 'Twitter / X':
      return <TwitterIcon {...iconProps} />;
    case 'LeetCode':
      return <LeetCodeIcon {...iconProps} />;
    case 'HackerRank':
      return <HackerRankIcon {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};

export default function Socials() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <section id="connect" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>SOCIAL NETWORK & ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Connect <span className="gradient-text-cyan-purple">With Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Let's connect across platforms. Whether you want to discuss software engineering, inspect open-source code, or chat about tech opportunities.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(social.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative p-6 rounded-3xl glass-panel border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1.5 shadow-xl group flex flex-col justify-between overflow-hidden"
              style={{
                boxShadow: hoveredLink === social.name ? `0 10px 30px -5px ${social.glowColor}` : undefined
              }}
            >
              {/* Card top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: social.color }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ color: social.color }}
                  >
                    <BrandIcon name={social.name} />
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/[0.1] transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {social.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  {social.username}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {social.desc}
                </p>
              </div>

              {/* Tooltip / Status hint */}
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Direct Link</span>
                <span className="text-white group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                  Open profile &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

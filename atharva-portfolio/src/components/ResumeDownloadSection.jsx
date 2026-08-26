import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap,
  Award,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeDownloadSection({ onDownloadResume, onViewPdf }) {
  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[18rem] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Modern Apple-style Glassmorphic Download Banner */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/[0.1] shadow-2xl relative overflow-hidden">
          
          {/* Top subtle glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 opacity-70" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Download <span className="gradient-text-cyan-purple">Atharva's Resume</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Get an official PDF copy of my resume detailing academic records (88.44% Diploma, MMIT B.E.), Android & Java engineering projects, certifications, and technical proficiencies.
              </p>

              {/* Key Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Credentials
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  B.E. Computer Engineering
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 justify-center">
              
              {/* Primary Download Button */}
              <button
                onClick={onDownloadResume}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95 cursor-pointer group"
              >
                <Download className="w-4 h-4 text-black group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Official Resume (PDF)</span>
              </button>

              {/* View PDF Preview Button */}
              <button
                onClick={onViewPdf}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-cyan-500/40 text-slate-200 font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View PDF Document Preview</span>
              </button>

              <div className="text-center text-[11px] font-mono text-slate-400 pt-1">
                Format: PDF • Size: &lt; 200 KB • Updated 2026
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

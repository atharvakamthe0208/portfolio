import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Printer
} from 'lucide-react';
import { resumeDetails, personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onDownloadResume }) {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[38rem] h-[24rem] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional <span className="gradient-text-cyan-purple">Resume</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive, recruiter-ready summary of my academic background, technical skills, engineered projects, and credentials.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/[0.08] mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Atharva_Kamthe_Resume.pdf</h4>
              <p className="text-[11px] text-slate-400 font-mono">Updated 2025 • Computer Engineering</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-all duration-200 shadow-lg shadow-white/10 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>
          </div>
        </div>

        {/* Interactive Resume Card Preview */}
        <div className="rounded-3xl glass-panel border border-white/[0.1] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle Grid Backdrop in Resume Paper */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/[0.1] gap-4 relative z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-sm sm:text-base text-cyan-400 font-medium mt-1">
                Computer Engineering Student • Web & Android Developer
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mt-2">
                <span>📍 {personalInfo.location}</span>
                <span>✉️ {personalInfo.email}</span>
                <span>💼 Open to Roles</span>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                GPA: 8.9 / 10.0
              </span>
            </div>
          </div>

          {/* Resume Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10">
            
            {/* Left Column (7 Cols): Summary, Projects, Experience */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Professional Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {resumeDetails.summary}
                </p>
              </div>

              {/* Core Projects */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  Key Engineered Projects
                </h4>
                <div className="space-y-4">
                  {resumeDetails.coreProjects.map((proj, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-bold text-white">
                          {proj.name}
                        </span>
                      </div>
                      <p className="text-xs text-cyan-400 font-mono mb-1.5">
                        {proj.tech}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {proj.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (5 Cols): Education & Skills Breakdown */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Education */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  Education
                </h4>
                <div className="space-y-4">
                  {resumeDetails.education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="text-xs font-mono text-cyan-400 font-semibold">
                        {edu.period}
                      </span>
                      <h5 className="text-sm font-bold text-white mt-1">
                        {edu.degree}
                      </h5>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {edu.institution}
                      </p>
                      <div className="mt-2 text-xs font-mono text-emerald-300">
                        {edu.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  Skills Summary
                </h4>
                <div className="space-y-3">
                  {resumeDetails.skillsSummary.map((group, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="font-semibold text-white block mb-0.5">
                        {group.category}:
                      </span>
                      <span className="text-slate-400 font-mono leading-relaxed">
                        {group.items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Download Banner */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <span className="text-xs text-slate-400 font-mono">
              Available for immediate interviews & internship inquiries.
            </span>
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Copy</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

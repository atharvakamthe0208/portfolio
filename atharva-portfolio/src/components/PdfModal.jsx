import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Award, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo, certificationsData, coursesCompleted } from '../data/portfolioData';

export default function PdfModal({ isOpen, onClose, onDownload }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Dark frosted backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0e1017] border border-white/[0.15] shadow-2xl shadow-cyan-950/50 z-10 my-auto overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.1] bg-[#090a10]/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                Atharva_Santosh_Kamthe_Resume.pdf
              </h3>
              <p className="text-[11px] text-slate-400">Official Document Preview</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Close PDF Viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable PDF Document Canvas (Styled exactly like official resume) */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#0b0d13]">
          
          <div className="max-w-3xl mx-auto bg-[#ffffff] text-[#1e293b] rounded-2xl shadow-2xl p-6 sm:p-10 font-sans border border-slate-200">
            
            {/* Top Resume Header Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b-2 border-emerald-600 items-start">
              <div className="md:col-span-7">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#064e3b] tracking-tight leading-none">
                  Atharva<br />
                  <span className="text-[#047857]">Santosh</span><br />
                  <span className="text-[#059669]">Kamthe</span>
                </h1>
                <p className="text-sm font-bold text-slate-700 mt-2 uppercase tracking-wide">
                  Computer Engineering Student
                </p>
              </div>

              <div className="md:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-800 uppercase tracking-wider mb-1 text-[11px]">
                  Contact Information
                </div>
                <div className="flex items-start gap-1.5 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kalepadal, Hadapsar, Tal. Haveli, Dist. Pune</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>8421568534</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>atharvakamthe2006@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mt-6">
              <h2 className="text-xs font-bold font-mono uppercase text-emerald-800 tracking-wider pb-1 border-b border-slate-200 mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Motivated Computer Engineering student currently in 2nd year B.E., with a strong diploma foundation (88.44% aggregate, 89% in final semester). Skilled in Android development, Java, Python, and multiple technologies. Seeking an internship to apply practical skills and grow in real-world software development.
              </p>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h2 className="text-xs font-bold font-mono uppercase text-emerald-800 tracking-wider pb-1 border-b border-slate-200 mb-3">
                Education
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>B.E. – Computer Engineering</span>
                    <span className="text-emerald-700 font-mono">2024 – Present</span>
                  </div>
                  <div className="text-slate-600 text-xs">
                    Marathwada Mitra Mandal's Institute of Technology (MMIT), Pune
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">
                    • Currently in 2nd year, focusing on advanced algorithms, software engineering & mobile development.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Diploma – Computer Engineering</span>
                    <span className="text-emerald-700 font-mono">Passed: 2025</span>
                  </div>
                  <div className="text-slate-600 text-xs">
                    Jayawantrao Sawant Polytechnic, Hadapsar, Pune | Board: MSBTE
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">
                    • Aggregate: <strong>88.44%</strong> | Final Semester: <strong>89%</strong> — Consistently strong academic performance.
                  </p>
                  <p className="text-slate-600 text-xs">
                    • Covered programming, networking, DBMS, mobile app development, and microprocessors.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>SSC – 10th Standard</span>
                    <span className="text-emerald-700 font-mono">Passed: 2022</span>
                  </div>
                  <div className="text-slate-600 text-xs">
                    S.D.H.B.H. School | State Board
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">
                    • Scored <strong>84%</strong> — strong foundation in science and mathematics.
                  </p>
                </div>

              </div>
            </div>

            {/* Projects */}
            <div className="mt-6">
              <h2 className="text-xs font-bold font-mono uppercase text-emerald-800 tracking-wider pb-1 border-b border-slate-200 mb-2">
                Featured Projects
              </h2>
              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                  <span>Blood Bank System</span>
                  <span className="text-emerald-700 font-mono">Android | Java</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 text-xs space-y-0.5 mt-1">
                  <li>Android app connecting blood donors with recipients in emergency situations.</li>
                  <li>Features: donor registration, blood group search, and request management.</li>
                  <li>Used local database for fast donor lookup with an intuitive, accessible UI.</li>
                </ul>
              </div>
            </div>

            {/* Certifications & Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-4 border-t border-slate-200">
              
              {/* Certifications */}
              <div>
                <h2 className="text-xs font-bold font-mono uppercase text-emerald-800 tracking-wider pb-1 border-b border-slate-200 mb-2">
                  Certifications – VJTECH ACADEMY (ISO 9001:2015)
                </h2>
                <div className="space-y-1.5 text-xs">
                  {certificationsData.map((c, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-700">
                      <span>• {c.name} ({c.duration})</span>
                      <span className="font-bold text-emerald-700">{c.grade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills & Courses */}
              <div>
                <h2 className="text-xs font-bold font-mono uppercase text-emerald-800 tracking-wider pb-1 border-b border-slate-200 mb-2">
                  Technical Skills & Courses
                </h2>
                <div className="text-xs text-slate-700 space-y-1">
                  <div><strong>Languages & Tech:</strong> Java & Adv Java, Python, C/C++, HTML, Android Studio, Flutter (Basics), Django (Basics), DBMS, Git.</div>
                  <div><strong>Completed:</strong> DSA using C, OOP with C++, Java Programming, Python Programming, Mobile App Development, Database Concepts.</div>
                  <div><strong>Languages:</strong> Marathi, Hindi, English.</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

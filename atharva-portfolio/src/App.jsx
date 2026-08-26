import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeDownloadSection from './components/ResumeDownloadSection';
import Socials from './components/Socials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import Toast from './components/Toast';
import PdfModal from './components/PdfModal';
import confetti from 'canvas-confetti';
import { personalInfo, certificationsData, coursesCompleted } from './data/portfolioData';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleDownloadResume = () => {
    // Show toast and celebrate
    setToastMessage('Atharva_Santosh_Kamthe_Resume.pdf is generated! Opening printable document.');
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8b5cf6', '#10b981']
    });

    // Generate exact styled resume printable document matching user's official PDF
    const resumeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Atharva Santosh Kamthe - Resume</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
          * { box-sizing: border-box; }
          body {
            font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
            color: #1e293b;
            background: #f8fafc;
            margin: 0;
            padding: 30px 20px;
            line-height: 1.45;
          }
          .resume-container {
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid #e2e8f0;
          }
          .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2.5px solid #059669;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          .name-title h1 {
            margin: 0;
            font-size: 32px;
            color: #064e3b;
            line-height: 1.1;
            font-weight: 800;
          }
          .name-title .sub {
            font-size: 14px;
            font-weight: 700;
            color: #334155;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 6px;
          }
          .contact-box {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 14px 18px;
            border-radius: 8px;
            font-size: 12px;
            color: #166534;
            max-width: 280px;
          }
          .contact-box div { margin-bottom: 4px; }
          .contact-box div:last-child { margin-bottom: 0; }
          .contact-title { font-weight: 800; font-size: 11px; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; color: #14532d; }
          
          h2 {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #064e3b;
            border-bottom: 1.5px solid #e2e8f0;
            padding-bottom: 4px;
            margin-top: 22px;
            margin-bottom: 10px;
            font-weight: 800;
          }
          p { margin: 4px 0 8px 0; font-size: 12.5px; color: #334155; }
          .edu-item { margin-bottom: 14px; }
          .item-row { display: flex; justify-content: space-between; font-weight: 700; font-size: 13px; color: #0f172a; }
          .item-inst { font-size: 12px; color: #475569; margin-top: 1px; }
          .item-detail { font-size: 12px; color: #334155; margin-top: 2px; }
          
          .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .cert-row { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px; color: #334155; }
          .cert-grade { color: #059669; font-weight: 700; }
          
          ul { margin: 4px 0 8px 0; padding-left: 18px; font-size: 12px; color: #334155; }
          li { margin-bottom: 3px; }
          
          .btn-print {
            display: block;
            margin: 0 auto 20px auto;
            background: #059669;
            color: #ffffff;
            border: none;
            padding: 10px 24px;
            font-size: 13px;
            font-weight: 700;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
          }
          @media print {
            body { padding: 0; background: #ffffff; }
            .resume-container { border: none; box-shadow: none; padding: 15px; }
            .btn-print { display: none; }
          }
        </style>
      </head>
      <body>
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
        <div class="resume-container">
          <div class="top-bar">
            <div class="name-title">
              <h1>Atharva<br>Santosh<br>Kamthe</h1>
              <div class="sub">Computer Engineering Student</div>
            </div>
            <div class="contact-box">
              <div class="contact-title">Contact Information</div>
              <div>📍 Kalepadal, Hadapsar, Tal. Haveli, Dist. Pune</div>
              <div>📞 8421568534</div>
              <div>✉ atharvakamthe2006@gmail.com</div>
              <div>🔗 linkedin.com/in/atharvakamthe</div>
              <div>💻 github.com/atharvakamthe0208</div>
            </div>
          </div>

          <h2>Career Objective</h2>
          <p>Motivated Computer Engineering student currently in 2nd year B.E., with a strong diploma foundation (88.44% aggregate, 89% in final semester). Skilled in Android development, Java, Python, and multiple technologies. Seeking an internship to apply practical skills and grow in real-world software development.</p>

          <h2>Education</h2>
          <div class="edu-item">
            <div class="item-row">
              <span>B.E. – Computer Engineering</span>
              <span style="color: #059669; font-family: monospace;">2024 – Present</span>
            </div>
            <div class="item-inst">Marathwada Mitra Mandal's Institute of Technology (MMIT), Pune</div>
            <div class="item-detail">• Currently in 2nd year, focusing on advanced algorithms, software engineering & mobile development.</div>
          </div>

          <div class="edu-item">
            <div class="item-row">
              <span>Diploma – Computer Engineering</span>
              <span style="color: #059669; font-family: monospace;">Passed: 2025</span>
            </div>
            <div class="item-inst">Jayawantrao Sawant Polytechnic, Hadapsar, Pune | Board: MSBTE</div>
            <div class="item-detail">• Aggregate: <strong>88.44%</strong> | Final Semester: <strong>89%</strong> — Consistently strong academic performance.</div>
            <div class="item-detail">• Covered programming, networking, DBMS, mobile app development, and microprocessors.</div>
          </div>

          <div class="edu-item">
            <div class="item-row">
              <span>SSC – 10th Standard</span>
              <span style="color: #059669; font-family: monospace;">Passed: 2022</span>
            </div>
            <div class="item-inst">S.D.H.B.H. School | State Board</div>
            <div class="item-detail">• Scored <strong>84%</strong> — strong foundation in science and mathematics.</div>
          </div>

          <h2>Projects</h2>
          <div class="edu-item">
            <div class="item-row">
              <span>Blood Bank System</span>
              <span style="color: #059669; font-family: monospace;">Android | Java</span>
            </div>
            <ul>
              <li>Android app connecting blood donors with recipients in emergency situations.</li>
              <li>Features: donor registration, blood group search, and request management.</li>
              <li>Used local database for fast donor lookup with an intuitive, accessible UI.</li>
            </ul>
          </div>

          <div class="grid-2" style="margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            <div>
              <h2>Certifications – VJTECH ACADEMY (ISO 9001:2015)</h2>
              <div class="cert-row"><span>Python Language (6 Months)</span><span class="cert-grade">Outstanding</span></div>
              <div class="cert-row"><span>Microprocessor (6 Months)</span><span class="cert-grade">Outstanding</span></div>
              <div class="cert-row"><span>Advanced Java (6 Months)</span><span class="cert-grade">Outstanding</span></div>
              <div class="cert-row"><span>Android Language (6 Months)</span><span class="cert-grade">Outstanding</span></div>
            </div>

            <div>
              <h2>Technical Skills & Courses</h2>
              <p style="font-size: 11.5px; line-height: 1.5;">
                <strong>Technical:</strong> Java & Adv Java, Python, C / C++, HTML, Android Studio, Flutter (Basics), Django (Basics), DBMS, Git.<br>
                <strong>Completed Courses:</strong> DSA using C, OOP with C++, Java Programming, Python Programming, Mobile App Dev, Database Concepts.<br>
                <strong>Languages:</strong> Marathi, Hindi, English.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const newWindow = window.open(url, '_blank');
    if (!newWindow) {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Atharva_Santosh_Kamthe_Resume.html';
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Interactive Background Canvas Starfield */}
      <BackgroundParticles />

      {/* Navigation */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero 
          onDownloadResume={handleDownloadResume} 
          onViewPdf={() => setIsPdfModalOpen(true)} 
        />
        <About />
        <Skills />
        <Projects />
        <ResumeDownloadSection 
          onDownloadResume={handleDownloadResume} 
          onViewPdf={() => setIsPdfModalOpen(true)} 
        />
        <Socials />
        <Contact onShowToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* PDF Modal Viewer */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onDownload={handleDownloadResume}
      />

      {/* Toast Notification Container */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}

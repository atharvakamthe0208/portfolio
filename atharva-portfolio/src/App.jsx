import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Socials from './components/Socials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import Toast from './components/Toast';
import confetti from 'canvas-confetti';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const handleDownloadResume = () => {
    // Show toast and celebrate
    setToastMessage('Atharva_Kamthe_Resume.pdf is ready! Opening official resume document.');
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8b5cf6', '#3b82f6']
    });

    // Create a dynamic print-ready resume HTML document if a physical PDF isn't hosted yet
    const resumeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Atharva Kamthe - Resume</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            color: #1e293b;
            background: #ffffff;
            margin: 0;
            padding: 40px;
            line-height: 1.5;
          }
          .header {
            border-bottom: 2px solid #0284c7;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          h1 { margin: 0; font-size: 28px; color: #0f172a; }
          .subtitle { font-size: 14px; color: #0284c7; font-weight: 600; margin-top: 4px; }
          .contact-bar { font-size: 12px; color: #64748b; margin-top: 8px; font-family: 'JetBrains Mono', monospace; }
          h2 { font-size: 16px; text-transform: uppercase; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-top: 20px; letter-spacing: 0.5px; }
          .item { margin-bottom: 14px; }
          .item-head { display: flex; justify-content: space-between; font-weight: 600; font-size: 14px; }
          .item-sub { font-size: 12px; color: #64748b; font-weight: 500; }
          p, ul { font-size: 13px; margin: 4px 0; color: #334155; }
          ul { padding-left: 20px; }
          .badge { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 11px; }
          @media print {
            body { padding: 20px; }
            button { display: none; }
          }
          .btn-print {
            background: #0284c7; color: white; border: none; padding: 10px 20px; border-radius: 8px;
            cursor: pointer; font-weight: 600; margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
        <div class="header">
          <h1>Atharva Kamthe</h1>
          <div class="subtitle">Computer Engineering Scholar | Full-Stack Web & Android Developer</div>
          <div class="contact-bar">
            Pune, Maharashtra, India • atharvakamthe.dev@gmail.com • github.com/atharvakamthe • linkedin.com/in/atharva-kamthe
          </div>
        </div>

        <h2>Executive Summary</h2>
        <p>Passionate Computer Engineering undergraduate with expertise in React.js, Tailwind CSS, Java, Android Development, MySQL, and Firebase. Proven track record building full-stack platforms, 3D simulations in Unreal Engine 5, and systems-level POS software in C. Solved 350+ algorithmic challenges on LeetCode and HackerRank.</p>

        <h2>Education</h2>
        <div class="item">
          <div class="item-head">
            <span>Bachelor of Engineering (B.E.) in Computer Engineering</span>
            <span>2022 - 2026</span>
          </div>
          <div class="item-sub">Savitribai Phule Pune University (SPPU) | Cumulative CGPA: 8.9 / 10.0</div>
          <p>Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering.</p>
        </div>

        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Java, JavaScript (ES6+), C, C++, HTML5, CSS3, SQL</li>
          <li><strong>Web & Frameworks:</strong> React.js, Tailwind CSS, Node.js, Express.js, Bootstrap 5, Java Swing</li>
          <li><strong>Mobile & Game Engine:</strong> Android SDK (Java/XML), Firebase, Unreal Engine 5, Blueprints</li>
          <li><strong>Databases & Cloud:</strong> MySQL, Firebase Realtime Database, Cloud Firestore, Google Cloud Platform, AWS Basics</li>
          <li><strong>Developer Tools:</strong> Git, GitHub, Android Studio, VS Code, Postman, Figma, Linux</li>
        </ul>

        <h2>Key Engineered Projects</h2>
        <div class="item">
          <div class="item-head">
            <span>Raktdaan – Blood Donation Platform</span>
            <span>Android / Firebase</span>
          </div>
          <div class="item-sub">Tech: Java, Firebase Realtime DB, Google Maps API, FCM</div>
          <ul>
            <li>Engineered a lifesaving mobile application connecting blood donors and emergency recipients within a 5-50km radius.</li>
            <li>Implemented real-time alerts with Firebase Cloud Messaging and location indexing with Google Maps Geolocation.</li>
          </ul>
        </div>

        <div class="item">
          <div class="item-head">
            <span>Realm of Shadows – Action Adventure Game</span>
            <span>Unreal Engine 5</span>
          </div>
          <div class="item-sub">Tech: Unreal Engine 5, Blueprints, C++, Lumen GI, Niagara VFX</div>
          <ul>
            <li>Developed an atmospheric 3D fantasy action RPG featuring Behavior Tree-driven AI and responsive combo combat.</li>
            <li>Integrated dynamic lighting with Lumen and modular equipment inventory state systems.</li>
          </ul>
        </div>

        <div class="item">
          <div class="item-head">
            <span>Student Grade Tracker – Academic Analytics</span>
            <span>Java Desktop Suite</span>
          </div>
          <div class="item-sub">Tech: Java, Java Swing, MySQL, JDBC, JFreeChart</div>
          <ul>
            <li>Built an MVC desktop suite to compute GPA/CGPA, visualize grade histograms, and generate PDF report cards.</li>
          </ul>
        </div>

        <div class="item">
          <div class="item-head">
            <span>Shopping Mall Billing System</span>
            <span>Systems / C</span>
          </div>
          <div class="item-sub">Tech: C Programming, Binary File I/O, POS Algorithms</div>
          <ul>
            <li>Engineered a low-latency inventory management and customer checkout system using binary record streams.</li>
          </ul>
        </div>

        <h2>Honors & Certifications</h2>
        <ul>
          <li><strong>Google Cloud Computing Foundations:</strong> Certified in Cloud Infrastructure and Big Data basics.</li>
          <li><strong>Smart India Hackathon Participant:</strong> Built rapid digital governance prototype in 36-hour sprint.</li>
          <li><strong>Competitive Programming:</strong> 350+ solved challenges on LeetCode and HackerRank.</li>
        </ul>
      </body>
      </html>
    `;

    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const newWindow = window.open(url, '_blank');
    if (!newWindow) {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Atharva_Kamthe_Resume.html';
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
        <Hero onDownloadResume={handleDownloadResume} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <ResumeSection onDownloadResume={handleDownloadResume} />
        <Socials />
        <Contact onShowToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}

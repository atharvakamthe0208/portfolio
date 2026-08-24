import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Clock,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#8b5cf6', '#10b981', '#ffffff']
      });

      if (onShowToast) {
        onShowToast('Message Sent Successfully! Atharva will get back to you shortly.');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/4 w-[36rem] h-[36rem] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something <span className="gradient-text-cyan-purple">Extraordinary</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Have a project in mind, an internship opportunity, or simply want to talk tech? Drop a message below and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Feel free to contact me via email, phone, or any of the social links.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Response Time</div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-300">
                      Within 24 Hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-purple-950/20 to-slate-900/40 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  Current Status
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Actively Seeking Software Roles & Internships
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Open to Full-Stack, Android, and Software Engineering positions.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-glow-emerald">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. Your message has been received and Atharva will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all`}
                    />
                    {errors.subject && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Message Content <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Atharva, I'd like to discuss a project..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all duration-300 shadow-xl shadow-white/10 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

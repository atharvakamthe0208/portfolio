import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 rounded-2xl bg-[#0c0d16]/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div className="flex-1 pr-1">
          <h5 className="text-xs font-mono font-bold text-cyan-300 uppercase">
            Notification
          </h5>
          <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

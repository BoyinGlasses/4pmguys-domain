import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, UploadCloud, CheckCircle2 } from 'lucide-react';
import type { CareerPosition } from '../../types';
import { soundFX } from '../../utils/soundEffects';

interface ApplyModalProps {
  job: CareerPosition | null;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    note: '',
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    soundFX.playClick();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      soundFX.playSwoosh();
    }, 1200);
  };

  const handleSimulateUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      soundFX.playClick();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-2xl bg-[#0a0e19] border border-orange-500/40 rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#07090f] border-b border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest">
                4PMGUYS TALENT DESK // APPLICATION
              </div>
              <h3 className="font-orbitron font-bold text-white text-lg mt-0.5">
                {job.title}
              </h3>
            </div>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-orbitron font-bold text-2xl text-white">
                  TRANSMISSION RECEIVED
                </h4>
                <p className="mt-2 text-sm text-slate-300 max-w-md">
                  Your candidacy and portfolio have been routed to our Lead Directors. We review all applications within 48 hours.
                </p>
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onClose();
                  }}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors"
                >
                  DISMISS
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@gamecraft.dev"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Portfolio / GitHub / ArtStation URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://artstation.com/your-name or github.com/..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Resume / CV (PDF, DOCX up to 10MB)
                  </label>
                  <label className="border-2 border-dashed border-slate-800 hover:border-orange-500/50 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-950/40">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleSimulateUpload}
                      className="hidden"
                    />
                    <UploadCloud className="w-6 h-6 text-orange-400 mb-1" />
                    <span className="text-xs font-mono text-slate-300">
                      {fileName ? fileName : 'Click or Drag CV file here'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                      PDF, DOCX max 10MB
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Brief Note or Favorite Combat Game
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Tell us what draws you to 4PMGUYS and your engineering or artistic background..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-orbitron font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'TRANSMITTING...' : 'DISPATCH APPLICATION'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

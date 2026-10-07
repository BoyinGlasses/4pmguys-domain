import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Copy, Check, Mail, Sparkles } from 'lucide-react';
import { Logo4PM } from './RealBrandIcons';

interface StudioPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioPitchModal = ({ isOpen, onClose }: StudioPitchModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    studioName: '',
    email: '',
    gameTitle: '',
    deckUrl: '',
    genre: 'Cyberpunk Action RPG',
    description: '',
  });

  const directEmail = 'contact@4pmguys.loc.cc';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col border border-purple-100"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#dcdcf4] border-b border-[#c8c8e8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#381970] flex items-center justify-center text-white">
                <Logo4PM variant="badge" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-lg text-[#381970] flex items-center gap-2">
                  Pitch Your Game to 4PMGUYS
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#7317ba] text-white">
                    Publishing Lab
                  </span>
                </h3>
                <p className="text-xs text-slate-600">
                  Direct partnership for funding, mentorship, multi-platform QA, and global publishing
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/80 text-[#381970] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Mailbox Notice Banner */}
          <div className="bg-[#381970] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#dcdcf4]" />
              <span>Direct Submissions Mailbox: <strong className="text-white font-mono underline">{directEmail}</strong></span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Email' : 'Copy Address'}
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-12 h-12 text-[#7317ba]" />
                </div>
                <h4 className="font-['Poppins',sans-serif] font-bold text-2xl text-[#381970]">
                  Transmission Dispatched!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md">
                  Your pitch has been routed to our production directors at <span className="font-mono text-[#7317ba] font-bold">{directEmail}</span>. We review new game prototypes every Tuesday and Thursday.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-xl">
                  <Sparkles className="w-4 h-4 text-[#7317ba]" />
                  A confirmation summary has been registered for your review.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#381970] mb-1 uppercase tracking-wider">
                      Studio or Indie Team Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studioName}
                      onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                      placeholder="e.g. Neon Horizon Interactive"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7317ba] focus:ring-2 focus:ring-[#7317ba]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#381970] mb-1 uppercase tracking-wider">
                      Lead Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="director@yourstudio.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7317ba] focus:ring-2 focus:ring-[#7317ba]/15 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#381970] mb-1 uppercase tracking-wider">
                      Working Game Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.gameTitle}
                      onChange={(e) => setFormData({ ...formData, gameTitle: e.target.value })}
                      placeholder="e.g. Project Solitude"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7317ba] focus:ring-2 focus:ring-[#7317ba]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#381970] mb-1 uppercase tracking-wider">
                      Primary Genre
                    </label>
                    <select
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7317ba] bg-white text-slate-800"
                    >
                      <option value="Cyberpunk Action RPG">Cyberpunk Action RPG</option>
                      <option value="Cosmic Horror Roguelike">Cosmic Horror Roguelike</option>
                      <option value="Sci-Fi Stealth Infiltration">Sci-Fi Stealth Infiltration</option>
                      <option value="Co-op Tactical Survival">Co-op Tactical Survival</option>
                      <option value="High-Speed Cyber Racer">High-Speed Cyber Racer</option>
                      <option value="Psychological Puzzle Mystery">Psychological Puzzle Mystery</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#381970] mb-1 uppercase tracking-wider">
                    Pitch Deck, Video Demo, or Build URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.deckUrl}
                    onChange={(e) => setFormData({ ...formData, deckUrl: e.target.value })}
                    placeholder="https://dropbox.com/... or https://youtube.com/watch?v=..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7317ba] focus:ring-2 focus:ring-[#7317ba]/15 transition-all"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Google Drive, Dropbox, YouTube unlisted trailer, or playable Steam / itch.io build key.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#381970] mb-1 uppercase tracking-wider">
                    Core Pitch Hook & Distinctive Identity *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your core game loop, target platforms (PC / PS5 / Xbox / Switch), engine (Unreal 5 / Unity), and why players will fall in love with it..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7317ba] focus:ring-2 focus:ring-[#7317ba]/15 transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={`mailto:${directEmail}?subject=4PMGUYS%20Game%20Pitch%20Submission`}
                    className="text-xs text-[#7317ba] hover:underline font-medium inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Prefer sending via your email client? Click here
                  </a>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#381970] hover:bg-[#7317ba] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Pitch
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

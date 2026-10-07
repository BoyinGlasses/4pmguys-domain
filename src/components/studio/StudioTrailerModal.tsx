import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ShieldAlert, Film } from 'lucide-react';
import { Logo4PM } from './RealBrandIcons';

interface StudioTrailerModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export const StudioTrailerModal = ({ isOpen, title, onClose }: StudioTrailerModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 24 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative z-10 w-full max-w-4xl bg-[#120726] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-purple-500/30"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 bg-[#1e0a3d] border-b border-purple-500/20 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#7317ba] flex items-center justify-center text-white shadow-md">
                <Logo4PM variant="badge" className="w-5 h-5" />
              </div>
              <div>
                <span className="font-['Poppins',sans-serif] font-bold text-sm tracking-wide text-white uppercase flex items-center gap-2">
                  <Film className="w-4 h-4 text-purple-400" />
                  {title}
                </span>
                <span className="text-[11px] text-purple-300 font-mono">
                  Official Gameplay & Cinematic Premiere // 4PMGUYS
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              aria-label="Close trailer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
            {/* YouTube embed or high-fidelity trailer frame */}
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
              title={`${title} - 4PMGUYS Premiere`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Overlay badge on top corner */}
            <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>4K 60FPS HDR Broadcast</span>
            </div>
          </div>

          {/* Bottom Bar Info */}
          <div className="px-6 py-4 bg-[#180932] flex flex-wrap items-center justify-between gap-4 text-xs text-purple-200">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-[#7317ba]" />
              <span>Developed & Published under the 4PMGUYS Independent Label</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-400">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Rating: ESRB M / PEGI 16</span>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold transition-colors"
              >
                Done Watching
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

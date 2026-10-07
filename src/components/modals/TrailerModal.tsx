import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl bg-[#090d16] border border-orange-500/40 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,119,0,0.25)] flex flex-col"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#06080e] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
              <h3 className="font-orbitron font-bold text-white text-base tracking-wider uppercase">
                {title} // OFFICIAL IN-ENGINE TEASER
              </h3>
            </div>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-orange-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Frame */}
          <div className="relative aspect-video w-full bg-black">
            <video
              src={videoUrl}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

          {/* Subtitle / Telemetry Info Bar */}
          <div className="px-6 py-3 bg-[#070a12] border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-orange-400">ENCODING:</span>
              <span>4K UHD 60FPS • DOLBY ATMOS 7.1 COMPATIBLE</span>
            </div>
            <div>
              <span className="text-slate-500">CAPTURE SPEC:</span>
              <span className="ml-1 text-slate-300">UNREAL ENGINE 5.5 IN-GAME CAMERAS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

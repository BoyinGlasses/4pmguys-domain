import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, Play } from 'lucide-react';
import type { Game } from '../../types';
import { soundFX } from '../../utils/soundEffects';

interface GameDetailModalProps {
  game: Game | null;
  onClose: () => void;
  onPlayTrailer: (url: string, title: string) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose, onPlayTrailer }) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#090d16] border border-orange-500/40 rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col"
        >
          {/* Top Banner Hero */}
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-950">
            <img
              src={game.bannerImage}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent" />

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-orange-600 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* In-banner Title */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-orange-600 font-bold text-white uppercase">
                  {game.status}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {game.engine}
                </span>
              </div>
              <h2 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white">
                {game.title}
              </h2>
            </div>
          </div>

          {/* Dossier Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Long Description */}
            <div>
              <h4 className="font-mono text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
                PROJECT SYNOPSIS & CORE LORE
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {game.longDescription}
              </p>
            </div>

            {/* Key Gameplay Systems */}
            <div>
              <h4 className="font-mono text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
                KEY GAMEPLAY & ENGINE PILLARS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {game.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements (If available) */}
            {game.systemRequirements && (
              <div>
                <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>TARGET PC HARDWARE SPECIFICATIONS</span>
                </h4>
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5 font-mono text-xs grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-500 block">OPERATING SYSTEM</span>
                    <span className="text-slate-200">{game.systemRequirements.os}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">RECOMMENDED PROCESSOR</span>
                    <span className="text-slate-200">{game.systemRequirements.cpu}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">GRAPHICS ACCELERATOR</span>
                    <span className="text-slate-200">{game.systemRequirements.gpu}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">MEMORY / SYSTEM RAM</span>
                    <span className="text-slate-200">{game.systemRequirements.ram}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500 block">STORAGE ARCHITECTURE</span>
                    <span className="text-slate-200">{game.systemRequirements.storage}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions Cluster */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onPlayTrailer(game.videoPreviewUrl, game.title);
                }}
                className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2"
              >
                <Play className="w-4 h-4 text-orange-400" />
                <span>PLAY IN-ENGINE FOOTAGE</span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={game.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-orbitron font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                >
                  <span>WISHLIST ON STEAM</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { StudioGame } from '../../data/studio4pmData';
import { SteamIcon, PlayStationIcon, XboxIcon, NintendoIcon } from './RealBrandIcons';

interface StudioGameModalProps {
  game: StudioGame | null;
  onClose: () => void;
}

export const StudioGameModal = ({ game, onClose }: StudioGameModalProps) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 25 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col"
        >
          {/* Header Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <img
              src={game.wideImage || game.coverImage}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#381970] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3.5 py-1 rounded-full bg-[#7317ba] text-white text-[11px] font-bold uppercase tracking-wider mb-2 inline-block shadow">
                {game.tag}
              </span>
              <h2 className="font-['Poppins',sans-serif] font-black text-2xl sm:text-4xl">
                {game.title}
              </h2>
              <p className="text-sm text-purple-200 mt-1">
                {game.genre} • Release: {game.releaseDate}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">
                OVERVIEW & LORE SYNOPSIS
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Platforms & Stores */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">
                OFFICIAL STORES & PLATFORMS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={game.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#7317ba] bg-slate-50 hover:bg-[#dcdcf4]/40 flex items-center justify-between text-xs font-bold text-[#381970] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <SteamIcon className="w-4 h-4 text-[#7317ba]" />
                    <span>Steam Store</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://store.playstation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#7317ba] bg-slate-50 hover:bg-[#dcdcf4]/40 flex items-center justify-between text-xs font-bold text-[#381970] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <PlayStationIcon className="w-4 h-4 text-[#7317ba]" />
                    <span>PlayStation Store</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.xbox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#7317ba] bg-slate-50 hover:bg-[#dcdcf4]/40 flex items-center justify-between text-xs font-bold text-[#381970] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <XboxIcon className="w-4 h-4 text-[#7317ba]" />
                    <span>Xbox Store</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.nintendo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-[#7317ba] bg-slate-50 hover:bg-[#dcdcf4]/40 flex items-center justify-between text-xs font-bold text-[#381970] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <NintendoIcon className="w-4 h-4 text-[#7317ba]" />
                    <span>Nintendo eShop</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

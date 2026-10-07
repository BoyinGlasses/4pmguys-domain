import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShoppingBag } from 'lucide-react';
import { HERO_SLIDER_GAMES } from '../../data/studio4pmData';
import { SteamIcon, PlayStationIcon, XboxIcon, NintendoIcon } from './RealBrandIcons';

interface StudioStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioStoreModal = ({ isOpen, onClose }: StudioStoreModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 25 }}
          className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#dcdcf4] border-b border-[#c8c8e8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#7317ba] text-white flex items-center justify-center shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-lg text-[#381970]">
                  4PMGUYS Official Stores & Outlets
                </h3>
                <p className="text-xs text-slate-500">
                  Select your platform to purchase official digital copies
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white text-[#381970] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://store.steampowered.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border-2 border-slate-100 hover:border-[#7317ba] hover:bg-[#dcdcf4]/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#381970] text-white flex items-center justify-center shadow-md">
                    <SteamIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#381970]">Steam Store</h4>
                    <span className="text-xs text-slate-400">PC & Steam Deck</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#7317ba]" />
              </a>

              <a
                href="https://store.playstation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border-2 border-slate-100 hover:border-[#7317ba] hover:bg-[#dcdcf4]/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#381970] text-white flex items-center justify-center shadow-md">
                    <PlayStationIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#381970]">PlayStation Store</h4>
                    <span className="text-xs text-slate-400">PS5 & PS4</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#7317ba]" />
              </a>

              <a
                href="https://www.xbox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border-2 border-slate-100 hover:border-[#7317ba] hover:bg-[#dcdcf4]/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#381970] text-white flex items-center justify-center shadow-md">
                    <XboxIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#381970]">Xbox Store</h4>
                    <span className="text-xs text-slate-400">Series X|S & One</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#7317ba]" />
              </a>

              <a
                href="https://www.nintendo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border-2 border-slate-100 hover:border-[#7317ba] hover:bg-[#dcdcf4]/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#381970] text-white flex items-center justify-center shadow-md">
                    <NintendoIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#381970]">Nintendo eShop</h4>
                    <span className="text-xs text-slate-400">Nintendo Switch</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#7317ba]" />
              </a>
            </div>

            {/* Featured Picks */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3 font-mono">
                POPULAR 4PMGUYS TITLES:
              </span>
              <div className="space-y-2">
                {HERO_SLIDER_GAMES.map((game) => (
                  <div key={game.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-bold text-[#381970]">{game.title}</span>
                    <a
                      href={game.steamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#7317ba] hover:underline"
                    >
                      View on Steam →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

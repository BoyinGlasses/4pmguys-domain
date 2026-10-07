import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FolderArchive, CheckCircle2, Loader2 } from 'lucide-react';
import { PRESS_KIT_ASSETS } from '../../data/studioData';
import { soundFX } from '../../utils/soundEffects';

interface PressKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PressKitModal: React.FC<PressKitModalProps> = ({ isOpen, onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);
  const [allDownloaded, setAllDownloaded] = useState(false);

  if (!isOpen) return null;

  const simulateDownload = (assetTitle: string) => {
    soundFX.playClick();
    setDownloadProgress((prev) => ({ ...prev, [assetTitle]: 15 }));

    let current = 15;
    const interval = setInterval(() => {
      current += 25;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        soundFX.playSwoosh();
      }
      setDownloadProgress((prev) => ({ ...prev, [assetTitle]: current }));
    }, 180);
  };

  const handleDownloadAll = () => {
    soundFX.playClick();
    setIsDownloadingAll(true);
    setAllDownloaded(false);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 12;
      if (progress >= 100) {
        clearInterval(interval);
        setIsDownloadingAll(false);
        setAllDownloaded(true);
        soundFX.playSwoosh();
      }
    }, 200);
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
          className="relative z-10 w-full max-w-3xl bg-[#090d16] border border-orange-500/40 rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#06080e] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                <FolderArchive className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-white text-base">
                  4PMGUYS PRESS KIT ARCHIVES (2026)
                </h3>
                <div className="text-[11px] font-mono text-slate-400">
                  Approved assets for media, content creators, and streamers
                </div>
              </div>
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

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Download Master Bundle Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-orange-950/40 via-amber-950/20 to-slate-900 border border-orange-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                  MASTER BUNDLE • 1.4 GB
                </span>
                <h4 className="font-orbitron font-bold text-white text-base mt-0.5">
                  Complete Studio & Flagship Games Press Pack
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  ZIP archive with high-res PNGs, vector EPS, 4K b-roll clips, and fact PDFs.
                </p>
              </div>

              <button
                onClick={handleDownloadAll}
                disabled={isDownloadingAll}
                className="px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-orbitron font-bold text-xs tracking-wider flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-orange-600/30 disabled:opacity-60"
              >
                {isDownloadingAll ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>PACKAGING (ZIP)...</span>
                  </>
                ) : allDownloaded ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>DOWNLOADED</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD ALL (.ZIP)</span>
                  </>
                )}
              </button>
            </div>

            {/* Individual Assets */}
            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                SELECTIVE ASSET MODULES:
              </h5>

              {PRESS_KIT_ASSETS.map((asset, i) => {
                const progress = downloadProgress[asset.title] || 0;
                const isComplete = progress === 100;
                const isBusy = progress > 0 && progress < 100;

                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-orange-400">
                          {asset.tag}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {asset.size}
                        </span>
                      </div>
                      <h6 className="font-orbitron font-bold text-sm text-white mt-1">
                        {asset.title}
                      </h6>
                      <span className="text-[11px] font-mono text-slate-500">
                        {asset.format}
                      </span>
                    </div>

                    <div className="sm:w-40 flex flex-col items-end gap-1.5">
                      <button
                        onClick={() => simulateDownload(asset.title)}
                        disabled={isBusy}
                        className={`w-full py-2 px-3 rounded text-xs font-mono flex items-center justify-center gap-1.5 transition-all ${
                          isComplete
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                            : isBusy
                            ? 'bg-slate-800 text-orange-400 border border-slate-700'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isComplete ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>READY</span>
                          </>
                        ) : isBusy ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>{progress}%</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>GET ASSET</span>
                          </>
                        )}
                      </button>

                      {isBusy && (
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500 transition-all duration-200"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Editorial Usage note */}
            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
              <span>All visual assets are free for editorial coverage & streaming use.</span>
              <span className="text-orange-400">PR DESK: press@4pmguys.studio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

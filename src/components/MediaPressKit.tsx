import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Maximize2, FolderArchive, Mail, Film, X } from 'lucide-react';
import { MEDIA_GALLERY } from '../data/studioData';
import type { MediaItem } from '../types';
import { soundFX } from '../utils/soundEffects';

gsap.registerPlugin(ScrollTrigger);

interface MediaPressKitProps {
  onOpenPressKitModal: () => void;
}

export const MediaPressKit: React.FC<MediaPressKitProps> = ({ onOpenPressKitModal }) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'SCREENSHOTS' | 'ARTWORK' | 'WALLPAPERS'>('ALL');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const filteredMedia = MEDIA_GALLERY.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'SCREENSHOTS') return item.type === 'screenshot';
    if (filter === 'ARTWORK') return item.type === 'artwork';
    if (filter === 'WALLPAPERS') return item.type === 'wallpaper';
    return true;
  });

  return (
    <section
      id="media-trailer"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-orange-400 mb-2 uppercase">
              <Film className="w-4 h-4 text-orange-400" />
              <span>VISUAL ARCHIVE & PRESS MATERIALS</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              MEDIA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">PRESS KIT</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              High-resolution captures, 5K key art, and curated asset bundles curated for streamers, media outlets, and community creators.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'SCREENSHOTS', 'ARTWORK', 'WALLPAPERS'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  soundFX.playClick();
                  setFilter(tab);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                  filter === tab
                    ? 'bg-orange-500/20 border border-orange-500 text-orange-400 shadow-[0_0_12px_rgba(255,119,0,0.3)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Media Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredMedia.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => soundFX.playHover()}
              className="group relative rounded-xl bg-slate-950 border border-slate-800/80 hover:border-orange-500/50 overflow-hidden cursor-pointer shadow-lg"
              onClick={() => {
                soundFX.playSwoosh();
                setSelectedMedia(item);
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/70 border border-slate-800 text-slate-300 backdrop-blur-sm uppercase">
                    {item.resolution}
                  </span>
                </div>

                {/* Inspect Icon overlay */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Caption and Title at bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] font-mono text-orange-400 uppercase tracking-wider mb-0.5">
                    {item.type}
                  </div>
                  <h4 className="font-orbitron font-bold text-sm text-white truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Kit Download Center Banner */}
        <div className="bg-gradient-to-br from-[#0c101d] to-[#080b12] border border-orange-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] font-mono text-orange-300 mb-4">
                <FolderArchive className="w-3.5 h-3.5 text-orange-400" />
                <span>OFFICIAL STREAMER & PRESS ARCHIVE 2026</span>
              </div>
              <h3 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white tracking-wide uppercase">
                COMPLETE PRESS KIT DOSSIER
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Includes all vector logos, transparent typography PNGs, 4K lossless key arts, developer factsheets, sound snippets, and approved video clips for commercial commentary.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span>TOTAL SIZE: ~1.4 GB (SPLIT ARCHIVES)</span>
                <span>•</span>
                <span>LICENSE: CC BY-ND 4.0 FOR EDITORIAL</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenPressKitModal();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="px-6 py-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-orbitron font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2.5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>BROWSE PRESS BUNDLES</span>
              </button>

              <a
                href="mailto:press@4pmguys.studio?subject=Press%20Inquiry%20-%20Review%20Copy%20Request"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="px-6 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>CONTACT PR TEAM</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] flex flex-col bg-[#07090e] border border-orange-500/30 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={selectedMedia.fullUrl}
                  alt={selectedMedia.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-orange-600 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800 bg-[#0a0d17]">
                <div>
                  <h3 className="font-orbitron font-bold text-white text-lg">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedMedia.caption}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-orange-400">
                    {selectedMedia.resolution}
                  </span>
                  <a
                    href={selectedMedia.fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>FULL RES</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

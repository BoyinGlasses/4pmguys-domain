import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';
import { HERO_SLIDER_GAMES } from '../../data/studio4pmData';
import type { StudioGame } from '../../data/studio4pmData';
import { SteamIcon, PlayStationIcon, XboxIcon, NintendoIcon } from './RealBrandIcons';

interface StudioHeroSliderProps {
  onSelectGame: (game: StudioGame) => void;
  onPlayTrailer?: (title: string) => void;
}

const SLIDE_DURATION = 7000; // 7 seconds

export const StudioHeroSlider = ({ onSelectGame, onPlayTrailer }: StudioHeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const currentGame = HERO_SLIDER_GAMES[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDER_GAMES.length);
      setProgressKey((prev) => prev + 1);
      setBuyDropdownOpen(false);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDER_GAMES.length);
    setProgressKey((prev) => prev + 1);
    setBuyDropdownOpen(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDER_GAMES.length) % HERO_SLIDER_GAMES.length);
    setProgressKey((prev) => prev + 1);
    setBuyDropdownOpen(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#180931] min-h-[620px] sm:min-h-[700px] flex items-center select-none">
      {/* Background Slides with Ken-Burns scale effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGame.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.03 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 7, ease: 'linear' }}
            src={currentGame.wideImage}
            alt={currentGame.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Studio Radial & Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#180931]/95 via-[#180931]/70 to-[#180931]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180931] via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Platforms Icons Strip & Genre */}
          <motion.div
            key={`platforms-${currentGame.id}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2.5 text-white/90 mb-4 flex-wrap"
          >
            {currentGame.platforms.map((p) => (
              <motion.span
                key={p}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#381970] transition-colors shadow-sm"
                title={p}
              >
                {p === 'Steam' && <SteamIcon className="w-4 h-4" />}
                {p === 'PlayStation' && <PlayStationIcon className="w-4 h-4" />}
                {p === 'Xbox' && <XboxIcon className="w-4 h-4" />}
                {p === 'Nintendo' && <NintendoIcon className="w-4 h-4" />}
              </motion.span>
            ))}
            <span className="text-xs font-bold text-purple-300 ml-2 tracking-widest uppercase bg-[#7317ba]/30 px-3 py-1 rounded-full border border-purple-400/20 backdrop-blur-sm">
              {currentGame.genre}
            </span>
          </motion.div>

          {/* Game Tag Badge */}
          {currentGame.tag && (
            <motion.span
              key={`tag-${currentGame.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-3.5 py-1 rounded-full bg-[#7317ba] text-white text-[11px] font-bold tracking-wider uppercase mb-3 shadow-lg"
            >
              ● {currentGame.tag}
            </motion.span>
          )}

          {/* Game Big Headline */}
          <motion.h1
            key={`title-${currentGame.id}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Poppins',sans-serif] font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[1.05] drop-shadow-lg"
          >
            {currentGame.title}
          </motion.h1>

          {/* Subtitle & Description */}
          <motion.p
            key={`desc-${currentGame.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-200 line-clamp-3 leading-relaxed drop-shadow max-w-2xl font-normal"
          >
            {currentGame.description}
          </motion.p>

          {/* Action Cluster */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* 1. Go to Game Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectGame(currentGame)}
              className="px-8 py-4 rounded-full bg-white text-[#381970] font-bold text-sm hover:bg-[#dcdcf4] transition-all shadow-xl"
            >
              Go to game
            </motion.button>

            {/* 2. BUY GAME Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                className="px-8 py-4 rounded-full bg-[#7317ba] hover:bg-[#5b1196] text-white font-bold text-sm transition-all shadow-xl shadow-[#7317ba]/30 flex items-center gap-2"
              >
                <span>BUY GAME</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${buyDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Stores Dropdown */}
              <AnimatePresence>
                {buyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl p-2.5 z-40 border border-slate-100"
                  >
                    <a
                      href={currentGame.steamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#381970] hover:bg-[#dcdcf4]/60 transition-colors"
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
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#381970] hover:bg-[#dcdcf4]/60 transition-colors"
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
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#381970] hover:bg-[#dcdcf4]/60 transition-colors"
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
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#381970] hover:bg-[#dcdcf4]/60 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <NintendoIcon className="w-4 h-4 text-[#7317ba]" />
                        <span>Nintendo eShop</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Watch Trailer */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onPlayTrailer?.(currentGame.title)}
              className="px-6 py-4 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-sm transition-all border border-white/20 backdrop-blur-md flex items-center gap-2.5"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Watch Trailer</span>
            </motion.button>
          </div>
        </div>

        {/* Carousel Bottom Controls & Animated Progress Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Slide indicator & dots */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-purple-300">
              0{currentIndex + 1} / 0{HERO_SLIDER_GAMES.length}
            </span>
            <div className="flex items-center gap-2">
              {HERO_SLIDER_GAMES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setProgressKey((prev) => prev + 1);
                    setBuyDropdownOpen(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-8 h-2.5 bg-[#7317ba]'
                      : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
                  }`}
                  title={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Smooth animated progress line */}
          <div className="flex-1 max-w-xs mx-4 hidden md:block">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                key={progressKey}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                className="h-full bg-[#7317ba]"
              />
            </div>
          </div>

          {/* Left / Right Arrow buttons */}
          <div className="flex items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-[#7317ba] text-white backdrop-blur-md transition-colors border border-white/10"
              title="Previous Title"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-[#7317ba] text-white backdrop-blur-md transition-colors border border-white/10"
              title="Next Title"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface NavbarProps {
  onOpenSteam: () => void;
  onOpenPressKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSteam, onOpenPressKit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundFX.toggleAmbient();
    setIsAudioActive(active);
    soundFX.playClick();
  };

  const navLinks = [
    { name: 'GAMES', href: '#featured-games' },
    { name: 'STUDIO', href: '#about-us' },
    { name: 'MEDIA & PRESS', href: '#media-trailer' },
    { name: 'COMMUNITY', href: '#community' },
    { name: 'CAREERS', href: '#careers' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070b]/85 backdrop-blur-md border-b border-orange-500/15 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Studio Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => soundFX.playHover()}
          className="group flex items-center gap-3 tracking-widest text-white decoration-none"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] flex items-center justify-center overflow-hidden shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/50 transition-all">
            <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
              <span className="font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200 text-sm">
                4PM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-orange-400 transition-colors">
              4PMGUYS
            </span>
            <span className="text-[10px] tracking-[0.28em] text-slate-400 font-mono -mt-1 flex items-center gap-1">
              GAME STUDIO <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="text-xs font-mono font-medium tracking-[0.2em] text-slate-300 hover:text-orange-400 transition-colors relative py-1 group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Ambient Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => soundFX.playHover()}
            title={isAudioActive ? 'Mute Ambient Audio' : 'Synthesize Dusk Drone Ambient'}
            className={`relative px-3 py-2 rounded-md border text-xs font-mono flex items-center gap-2 transition-all ${
              isAudioActive
                ? 'border-orange-500/60 bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(255,119,0,0.3)]'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span className="hidden sm:inline text-[11px] font-mono">AUDIO LIVE</span>
                {/* Visualizer bars */}
                <div className="flex items-end gap-[2px] h-3 ml-1">
                  <span className="w-[2px] h-2 bg-orange-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-[2px] h-3 bg-orange-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-[2px] h-1.5 bg-orange-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">AMBIENT OFF</span>
              </>
            )}
          </button>

          {/* Press Kit quick button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenPressKit();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-md border border-slate-800 hover:border-orange-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
          >
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>PRESS KIT</span>
          </button>

          {/* Main CTA: Wishlist on Steam */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenSteam();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="group relative overflow-hidden rounded-md p-[1px] font-mono text-xs tracking-wider transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transition-all group-hover:opacity-100 opacity-80" />
            <div className="relative flex items-center gap-2 bg-[#080b12] group-hover:bg-[#0c101c] px-4 py-2 rounded-[5px] text-white transition-all font-semibold shadow-md">
              {/* Custom Steam icon SVG */}
              <svg className="w-4 h-4 fill-orange-400 group-hover:fill-orange-300 transition-colors" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.32 3.47 9.83 8.3 11.44l3.12-4.52a3.86 3.86 0 0 1-.36-1.63c0-2.14 1.74-3.88 3.88-3.88 1.48 0 2.77.83 3.42 2.05l4.63-2.09C21.43 5.92 17.15 0 12 0zm0 2.22c4.32 0 7.84 3.52 7.84 7.84 0 1.05-.21 2.05-.59 2.97l-3.35 1.51c-.69-.99-1.84-1.64-3.14-1.64-2.14 0-3.88 1.74-3.88 3.88 0 .42.07.82.2 1.19L6.5 21.84C3.82 20.3 2 17.38 2 14c0-5.4 4.38-9.78 9.78-9.78h.22z"/>
              </svg>
              <span>WISHLIST ON STEAM</span>
            </div>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-md border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#07090e]/95 border-b border-orange-500/20 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFX.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-mono tracking-widest text-slate-200 hover:text-orange-400 py-2 border-b border-slate-800/80"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPressKit();
                  }}
                  className="w-full text-center py-2.5 rounded border border-slate-700 font-mono text-xs text-slate-300"
                >
                  PRESS KIT DOWNLOADS
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSteam();
                  }}
                  className="w-full text-center py-3 rounded bg-orange-600 font-mono text-xs font-bold text-white shadow-lg shadow-orange-500/30"
                >
                  WISHLIST ON STEAM
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

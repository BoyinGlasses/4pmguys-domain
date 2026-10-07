import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { StudioLogo } from './RealBrandIcons';
import { FEATURED_GAMES_LIST } from '../../data/studio4pmData';

interface StudioNavbarProps {
  onOpenStore: () => void;
}

export const StudioNavbar = ({ onOpenStore }: StudioNavbarProps) => {
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#dcdcf4] border-b border-[#c8c8e8] shadow-[0_4px_25px_rgba(56,25,112,0.08)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center group decoration-none">
              <StudioLogo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Games Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setGamesDropdownOpen(true)}
                onMouseLeave={() => setGamesDropdownOpen(false)}
              >
                <button
                  onClick={() => setGamesDropdownOpen(!gamesDropdownOpen)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#381970] hover:text-[#7317ba] transition-colors py-2"
                >
                  <Gamepad2 className="w-4 h-4 text-[#7317ba]" />
                  <span>Games</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${gamesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Submenu Dropdown */}
                <AnimatePresence>
                  {gamesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border-t-2 border-[#7317ba] p-3 z-50 overflow-hidden"
                    >
                      <div className="space-y-1 text-xs">
                        <a
                          href="#featured-games"
                          onClick={() => setGamesDropdownOpen(false)}
                          className="block px-3 py-2 rounded-xl font-bold text-[#7317ba] hover:bg-[#dcdcf4]/50 transition-colors"
                        >
                          All Flagship Titles →
                        </a>
                        <div className="border-t border-slate-100 my-1" />
                        <span className="px-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Featured Releases
                        </span>
                        {FEATURED_GAMES_LIST.slice(0, 5).map((g) => (
                          <a
                            key={g.id}
                            href="#featured-games"
                            onClick={() => setGamesDropdownOpen(false)}
                            className="block px-3 py-2 rounded-xl font-medium text-[#381970] hover:bg-[#dcdcf4]/40 transition-colors"
                          >
                            <span className="font-bold text-[#7317ba] mr-1.5">●</span>
                            {g.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#about-section"
                className="text-sm font-semibold text-[#381970] hover:text-[#7317ba] transition-colors"
              >
                About Studio
              </a>

              <a
                href="#latest-news"
                className="text-sm font-semibold text-[#381970] hover:text-[#7317ba] transition-colors"
              >
                News
              </a>

              <a
                href="#careers-section"
                className="text-sm font-semibold text-[#381970] hover:text-[#7317ba] transition-colors"
              >
                Careers
              </a>
            </nav>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <a
              href="#featured-games"
              className="p-2.5 rounded-full hover:bg-white/70 text-[#381970] transition-colors"
              title="Search Catalog"
            >
              <Search className="w-5 h-5" />
            </a>

            {/* Signature "Buy Games" Pill Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenStore}
              className="px-6 py-2.5 rounded-full bg-[#7317ba] hover:bg-[#5b1196] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-[#7317ba]/30"
            >
              Buy Games
            </motion.button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-[#381970] hover:bg-white/50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#dcdcf4] border-t border-[#c8c8e8] px-6 py-4 space-y-3"
          >
            <a
              href="#featured-games"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#381970] py-2 border-b border-[#c8c8e8]"
            >
              Games
            </a>
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#381970] py-2 border-b border-[#c8c8e8]"
            >
              About Studio
            </a>
            <a
              href="#latest-news"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#381970] py-2 border-b border-[#c8c8e8]"
            >
              News
            </a>
            <a
              href="#careers-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#381970] py-2 border-b border-[#c8c8e8]"
            >
              Careers
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStore();
              }}
              className="w-full py-3 rounded-full bg-[#7317ba] text-white font-bold text-center mt-2 shadow-md"
            >
              Buy Games
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURED_GAMES_LIST } from '../../data/studio4pmData';
import type { StudioGame } from '../../data/studio4pmData';
import { SteamIcon, PlayStationIcon, XboxIcon, NintendoIcon } from './RealBrandIcons';
import { ExternalLink, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StudioFeaturedGamesProps {
  onSelectGame: (game: StudioGame) => void;
}

export const StudioFeaturedGames = ({ onSelectGame }: StudioFeaturedGamesProps) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ACTION RPG' | 'CYBERPUNK' | 'STRATEGY' | 'HORROR'>('ALL');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const categories = ['ALL', 'ACTION RPG', 'CYBERPUNK', 'STRATEGY', 'HORROR'] as const;

  const filteredGames = FEATURED_GAMES_LIST.filter((game) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'ACTION RPG') return game.genre.toLowerCase().includes('rpg') || game.genre.toLowerCase().includes('action');
    if (activeCategory === 'CYBERPUNK') return game.genre.toLowerCase().includes('cyberpunk') || game.title.toLowerCase().includes('neon');
    if (activeCategory === 'STRATEGY') return game.genre.toLowerCase().includes('strategy') || game.genre.toLowerCase().includes('tactical');
    if (activeCategory === 'HORROR') return game.genre.toLowerCase().includes('horror') || game.genre.toLowerCase().includes('survival');
    return true;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.game-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="featured-games" ref={sectionRef} className="py-24 bg-white border-b border-[#eaeaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#7317ba] tracking-[0.2em] uppercase mb-1">
              <Flame className="w-4 h-4 text-[#7317ba]" />
              <span>4PMGUYS BATTLEFIELD CATALOG</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-black text-3xl sm:text-5xl text-[#381970] uppercase tracking-tight">
              FEATURED GAMES
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'text-white'
                    : 'text-[#381970] hover:bg-[#dcdcf4]/50'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#7317ba] rounded-full shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectGame(game)}
                className="game-card group cursor-pointer rounded-3xl bg-white border border-[#eaeaf8] hover:border-[#7317ba]/50 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with smooth hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#7317ba] text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                      {game.tag}
                    </span>
                  </div>

                  {/* Title & Genre over image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-200">
                      {game.genre}
                    </span>
                    <h3 className="font-['Poppins',sans-serif] font-bold text-xl text-white drop-shadow truncate mt-0.5">
                      {game.title}
                    </h3>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    {/* Platform icons */}
                    <div className="flex items-center gap-1.5 text-[#381970]">
                      {game.platforms.map((p) => (
                        <span
                          key={p}
                          className="w-7 h-7 rounded-full bg-[#dcdcf4]/70 flex items-center justify-center hover:bg-[#7317ba] hover:text-white transition-colors"
                          title={p}
                        >
                          {p === 'Steam' && <SteamIcon className="w-3.5 h-3.5" />}
                          {p === 'PlayStation' && <PlayStationIcon className="w-3.5 h-3.5" />}
                          {p === 'Xbox' && <XboxIcon className="w-3.5 h-3.5" />}
                          {p === 'Nintendo' && <NintendoIcon className="w-3.5 h-3.5" />}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7317ba] group-hover:text-[#381970] transition-colors">
                      <span>Explore</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

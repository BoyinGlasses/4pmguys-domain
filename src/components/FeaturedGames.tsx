import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Gamepad, Smartphone, ExternalLink, Play, Info, Flame } from 'lucide-react';
import { FEATURED_GAMES } from '../data/studioData';
import type { Game, Platform } from '../types';
import { soundFX } from '../utils/soundEffects';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedGamesProps {
  onSelectGame: (game: Game) => void;
  onPlayTrailer: (videoUrl: string, title: string) => void;
}

const renderPlatformIcon = (platform: Platform) => {
  switch (platform) {
    case 'PC':
      return <span title="PC (Steam / Epic)"><Monitor className="w-3.5 h-3.5" /></span>;
    case 'PS5':
    case 'Xbox Series X':
    case 'Switch 2':
      return <span title={platform}><Gamepad className="w-3.5 h-3.5" /></span>;
    case 'Mobile':
      return <span title="Mobile iOS & Android"><Smartphone className="w-3.5 h-3.5" /></span>;
    case 'Steam Deck':
      return (
        <span className="text-[10px] font-mono px-1 border border-slate-700 rounded bg-slate-900" title="Steam Deck Verified">
          DECK
        </span>
      );
    default:
      return null;
  }
};

export const FeaturedGames: React.FC<FeaturedGamesProps> = ({ onSelectGame, onPlayTrailer }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'UNREAL 5' | 'SOULS-LIKE' | 'TACTICAL' | 'HORROR'>('ALL');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  // Filter games
  const filteredGames = FEATURED_GAMES.filter((game) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'UNREAL 5') return game.engine.includes('Unreal');
    if (activeFilter === 'SOULS-LIKE') return game.genre.toLowerCase().includes('souls') || game.genre.toLowerCase().includes('action');
    if (activeFilter === 'TACTICAL') return game.genre.toLowerCase().includes('tactical') || game.genre.toLowerCase().includes('extraction');
    if (activeFilter === 'HORROR') return game.genre.toLowerCase().includes('horror');
    return true;
  });

  // GSAP ScrollTrigger animation for cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.game-card');

      gsap.fromTo(
        cards,
        {
          y: 70,
          opacity: 0,
          scale: 0.94,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      id="featured-games"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[250px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-orange-400 mb-2 uppercase">
              <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>THE 4PMGUYS BATTLEFIELD CATALOG</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              FLAGSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">TITLES</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              Explore our sovereign line-up of relentless games. Built with uncompromising depth, visceral kinetic combat, and cutting-edge engine architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'UNREAL 5', 'SOULS-LIKE', 'TACTICAL', 'HORROR'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  soundFX.playClick();
                  setActiveFilter(filter);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'bg-orange-500/20 border border-orange-500 text-orange-400 shadow-[0_0_12px_rgba(255,119,0,0.3)]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Games Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="game-card group relative rounded-xl bg-[#0b0e17] border border-slate-800/90 hover:border-orange-500/50 transition-all duration-500 overflow-hidden flex flex-col shadow-xl hover:shadow-[0_10px_40px_rgba(255,119,0,0.15)]"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={game.bannerImage}
                  alt={game.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-black/60" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded text-[11px] font-mono font-bold tracking-wider uppercase backdrop-blur-md border ${
                      game.status === 'Released'
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                        : game.status === 'Closed Beta'
                        ? 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40'
                        : 'bg-orange-950/80 text-orange-400 border-orange-500/40'
                    }`}
                  >
                    ● {game.status}
                  </span>
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-300 bg-black/60 border border-slate-800 backdrop-blur-sm">
                    {game.engine}
                  </span>
                </div>

                {/* Quick Trailer Play Button overlay */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onPlayTrailer(game.videoPreviewUrl, game.title);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-orange-600/90 hover:bg-orange-500 text-white shadow-lg shadow-black/80 hover:scale-110 transition-all backdrop-blur-md flex items-center justify-center group/btn"
                  title="Watch In-Engine Teaser"
                >
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </button>
              </div>

              {/* Game Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Genre and Target release */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-orange-400 font-semibold">{game.genre}</span>
                    <span>{game.releaseDate}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-orbitron font-extrabold text-2xl text-white group-hover:text-orange-400 transition-colors">
                    {game.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-1 mb-3">
                    {game.subTitle}
                  </div>

                  <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Features Mini-tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {game.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Platform Support & CTAs */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Supported Platforms */}
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">PLATFORMS:</span>
                    <div className="flex items-center gap-2 text-slate-300">
                      {game.platforms.map((p) => (
                        <span key={p} className="hover:text-orange-400 transition-colors">
                          {renderPlatformIcon(p)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Cluster */}
                  <div className="flex items-center gap-2.5">
                    {/* View Dossier Button */}
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        onSelectGame(game);
                      }}
                      onMouseEnter={() => soundFX.playHover()}
                      className="px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-xs font-mono text-slate-200 transition-all flex items-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      <span>INTEL & SPECS</span>
                    </button>

                    {/* Steam Wishlist/Buy Button */}
                    <a
                      href={game.steamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      onMouseEnter={() => soundFX.playHover()}
                      className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-500 text-xs font-orbitron font-bold text-white transition-all shadow-md shadow-orange-600/30 flex items-center gap-1.5"
                    >
                      <span>STEAM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

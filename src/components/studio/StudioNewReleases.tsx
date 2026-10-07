import { motion } from 'framer-motion';
import { Sparkles, Play, ArrowRight } from 'lucide-react';
import { FEATURED_GAMES_LIST } from '../../data/studio4pmData';
import type { StudioGame } from '../../data/studio4pmData';
import { SteamIcon, PlayStationIcon, XboxIcon, NintendoIcon } from './RealBrandIcons';

interface StudioNewReleasesProps {
  onSelectGame: (game: StudioGame) => void;
  onPlayTrailer: (title: string) => void;
}

export const StudioNewReleases = ({ onSelectGame, onPlayTrailer }: StudioNewReleasesProps) => {
  return (
    <section id="new-releases" className="py-24 bg-[#381970] text-white overflow-hidden relative">
      {/* Decorative ambient lighting aura */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7317ba]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with 4PM Studio controller badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-14 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#7317ba] flex items-center justify-center shadow-2xl shadow-[#7317ba]/40 border border-purple-400/30">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-300 tracking-[0.25em] uppercase block">
                FRESH FROM THE PRODUCTION LAB
              </span>
              <h2 className="font-['Poppins',sans-serif] font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mt-0.5">
                NEW RELEASES
              </h2>
            </div>
          </div>

          <a
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#381970] text-xs font-bold transition-all backdrop-blur-md border border-white/20 self-start sm:self-auto shadow-md"
          >
            <SteamIcon className="w-4 h-4" />
            <span>Steam Developer Hub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Carousel / Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_GAMES_LIST.slice(0, 3).map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-[#260f50] border border-white/10 hover:border-[#7317ba] overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={game.wideImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#260f50] via-transparent to-black/40" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#7317ba] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                  ● {game.tag}
                </span>

                {/* Trailer Play Button */}
                <button
                  onClick={() => onPlayTrailer(game.title)}
                  className="absolute bottom-3 right-3 p-3.5 rounded-full bg-white/20 hover:bg-[#7317ba] backdrop-blur-md text-white transition-all hover:scale-110 shadow-lg"
                  title="Watch Official In-Engine Footage"
                >
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">
                    {game.genre}
                  </span>
                  <h3 className="font-['Poppins',sans-serif] font-bold text-xl text-white group-hover:text-purple-200 transition-colors">
                    {game.title}
                  </h3>
                  <p className="mt-2 text-xs text-purple-200 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/80">
                    {game.platforms.map((p) => (
                      <span key={p} className="hover:text-white" title={p}>
                        {p === 'Steam' && <SteamIcon className="w-4 h-4" />}
                        {p === 'PlayStation' && <PlayStationIcon className="w-4 h-4" />}
                        {p === 'Xbox' && <XboxIcon className="w-4 h-4" />}
                        {p === 'Nintendo' && <NintendoIcon className="w-4 h-4" />}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectGame(game)}
                    className="text-xs font-bold text-white hover:text-purple-300 transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

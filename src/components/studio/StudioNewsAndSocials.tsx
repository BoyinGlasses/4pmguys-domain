import { motion } from 'framer-motion';
import { STUDIO_NEWS } from '../../data/studio4pmData';
import { ArrowRight } from 'lucide-react';
import {
  DiscordIcon,
  XTwitterIcon,
  YouTubeIcon,
  TwitchIcon,
  TikTokIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from './RealBrandIcons';

export const StudioNewsAndSocials = () => {
  const socials = [
    { name: 'Discord', url: 'https://discord.com', icon: <DiscordIcon className="w-6 h-6" />, bg: 'hover:bg-[#5865F2]' },
    { name: 'X / Twitter', url: 'https://x.com', icon: <XTwitterIcon className="w-5 h-5" />, bg: 'hover:bg-black' },
    { name: 'YouTube', url: 'https://youtube.com', icon: <YouTubeIcon className="w-6 h-6" />, bg: 'hover:bg-[#FF0000]' },
    { name: 'Twitch', url: 'https://twitch.tv', icon: <TwitchIcon className="w-5 h-5" />, bg: 'hover:bg-[#9146FF]' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: <TikTokIcon className="w-5 h-5" />, bg: 'hover:bg-black' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedInIcon className="w-5 h-5" />, bg: 'hover:bg-[#0A66C2]' },
    { name: 'Facebook', url: 'https://facebook.com', icon: <FacebookIcon className="w-6 h-6" />, bg: 'hover:bg-[#1877F2]' },
    { name: 'Instagram', url: 'https://instagram.com', icon: <InstagramIcon className="w-6 h-6" />, bg: 'hover:bg-[#E4405F]' },
  ];

  return (
    <div>
      {/* Latest News */}
      <section id="latest-news" className="py-24 bg-white border-b border-[#eaeaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#7317ba] tracking-[0.25em] uppercase block mb-1 font-mono">
                DEVELOPER DISPATCHES
              </span>
              <h2 className="font-['Poppins',sans-serif] font-black text-3xl sm:text-5xl text-[#381970] uppercase tracking-tight">
                LATEST NEWS
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7317ba] hover:text-[#381970] transition-colors"
            >
              <span>View all announcements</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_NEWS.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white border border-[#eaeaf8] hover:border-[#7317ba]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                    />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#381970] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-bold text-slate-400 block mb-2 font-mono">
                      {item.date}
                    </span>
                    <h3 className="font-['Poppins',sans-serif] font-bold text-lg text-[#381970] group-hover:text-[#7317ba] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7317ba] group-hover:underline">
                    <span>Read full dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Follow us on socials with Real Brand Icons */}
      <section className="py-24 bg-[#381970] text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-purple-300 tracking-[0.25em] uppercase block mb-2 font-mono">
            JOIN OVER 200,000 COMMUNITY OPERATIVES
          </span>
          <h2 className="font-['Poppins',sans-serif] font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-8">
            Follow us on socials
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-2xl bg-white/10 ${social.bg} text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-md border border-white/15`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 max-w-xl mx-auto">
            <p className="text-xs text-purple-200">
              Direct inquiries, streamer review keys, and press kits:{' '}
              <a
                href="mailto:contact@4pmguys.loc.cc"
                className="text-white font-bold underline hover:text-amber-300 transition-colors"
              >
                contact@4pmguys.loc.cc
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

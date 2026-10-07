import { useState } from 'react';
import { MessageSquare, Radio, ExternalLink, Hash, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_FEEDS, STUDIO_INFO } from '../data/studioData';
import { soundFX } from '../utils/soundEffects';

export const CommunityHub: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'#announcements' | '#beta-feedback' | '#lore-theories' | '#modding'>('#announcements');

  const discordChannels = [
    { name: '#announcements', count: '14.2k active', topic: 'Official patches, key drops, playtest invites' },
    { name: '#beta-feedback', count: '3.8k active', topic: 'Direct line to combat designers and programmers' },
    { name: '#lore-theories', count: '2.1k active', topic: 'Deciphering the Dusk world language' },
    { name: '#modding', count: '1.4k active', topic: 'Custom UE5 pipelines and asset extraction' },
  ];

  return (
    <section
      id="community"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070b] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Decorative cyber grid accent */}
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-orange-400 mb-2 uppercase">
            <Radio className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>GLOBAL SYNDICATE & SOCIAL GRID</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">OPERATIVES</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            We don’t build behind closed doors. Thousands of players, alpha testers, and modders directly shape our weapon balances, lore, and roadmap every week.
          </p>
        </div>

        {/* Discord Widget + Social Network Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Interactive Discord Server Simulation (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0e17] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none" />

            <div>
              {/* Discord Top Banner */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] flex items-center justify-center">
                    <div className="w-full h-full bg-[#0a0d17] rounded-[11px] flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-orbitron font-bold text-lg text-white">4PMGUYS HUB</h3>
                      <span className="p-0.5 rounded-full bg-indigo-500/20 text-indigo-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-0.5">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        14,820 Online
                      </span>
                      <span>•</span>
                      <span>185,400 Members</span>
                    </div>
                  </div>
                </div>

                <a
                  href={STUDIO_INFO.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
                >
                  <span>JOIN SERVER</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Channels simulator */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {discordChannels.map((channel) => (
                  <button
                    key={channel.name}
                    onClick={() => {
                      soundFX.playClick();
                      setActiveChannel(channel.name as any);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    className={`text-left p-3.5 rounded-lg border transition-all ${
                      activeChannel === channel.name
                        ? 'bg-indigo-950/40 border-indigo-500/50 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-slate-200 flex items-center gap-1">
                        <Hash className="w-3.5 h-3.5 text-indigo-400" />
                        {channel.name}
                      </span>
                      <span className="text-[10px] text-emerald-400/90">{channel.count}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {channel.topic}
                    </p>
                  </button>
                ))}
              </div>

              {/* Simulated active conversation sneak-peek */}
              <div className="mt-6 p-4 rounded-lg bg-slate-950/80 border border-slate-800/80 font-mono text-xs">
                <div className="text-[11px] text-indigo-400 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>LIVE TRANSMISSION FROM {activeChannel}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">
                      Dev
                    </div>
                    <div>
                      <span className="text-orange-400 font-bold mr-2">Lead_Director_Jin:</span>
                      <span className="text-slate-300">
                        Pushed new dodge animation blend trees to git. Boss stagger window increased by 150ms!
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold">
                      Op
                    </div>
                    <div>
                      <span className="text-cyan-400 font-bold mr-2">Valkyrie_99:</span>
                      <span className="text-slate-300">
                        Tested on RTX 4080 at 4K, locked 120 FPS. The lighting on obsidian stones looks absurdly realistic.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>DISCORD API STATUS: CONNECTED</span>
              <span className="text-indigo-400">SERVER VERIFIED PARTNER</span>
            </div>
          </div>

          {/* Right: Social Outlets Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Twitter / X Card */}
            <a
              href={STUDIO_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="p-5 rounded-xl bg-[#080c14] border border-slate-800 hover:border-slate-600 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-black border border-slate-800 text-white group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-sky-400" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-orbitron font-bold text-sm text-white group-hover:text-sky-400 transition-colors">
                    X / TWITTER
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div className="text-xs font-mono text-slate-400">@4pmguys (128K Followers)</div>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  Daily combat clips, tech art deep-dives, patch changelogs, and high-res concept art drops.
                </p>
              </div>
            </a>

            {/* YouTube Devlogs Card */}
            <a
              href={STUDIO_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="p-5 rounded-xl bg-[#080c14] border border-slate-800 hover:border-slate-600 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-black border border-slate-800 text-white group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-red-500" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-orbitron font-bold text-sm text-white group-hover:text-red-400 transition-colors">
                    YOUTUBE
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div className="text-xs font-mono text-slate-400">4PMGUYS Studio (94K Subs)</div>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  4K 60FPS Cinematic Trailers, Behind The Code devlogs, and full orchestral soundtrack premieres.
                </p>
              </div>
            </a>

            {/* TikTok / Shorts Card */}
            <a
              href={STUDIO_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="p-5 rounded-xl bg-[#080c14] border border-slate-800 hover:border-slate-600 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-black border border-slate-800 text-white group-hover:scale-110 transition-transform">
                <div className="w-5 h-5 flex items-center justify-center font-bold text-white">
                  TT
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-orbitron font-bold text-sm text-white group-hover:text-pink-400 transition-colors">
                    TIKTOK
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div className="text-xs font-mono text-slate-400">@4pmguys (420K Followers)</div>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  Viral dev bloopers, glitch showcases, mocap session antics, and 1v1 speedrun challenges.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Live Social Highlights Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMMUNITY_FEEDS.map((feed, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="text-orange-400 font-bold">{feed.platform}</span>
                  <span>{feed.time}</span>
                </div>
                <div className="text-xs font-bold text-white mb-1">{feed.author}</div>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  "{feed.content}"
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
                {feed.engagement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState, type FormEvent } from 'react';
import { ArrowUp, Mail, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    soundFX.playClick();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040609] border-t border-slate-800/90 text-slate-400 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative top accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-orbitron font-black text-white text-sm shadow-lg shadow-orange-600/30">
                  4PM
                </div>
                <span className="font-orbitron font-extrabold text-xl text-white tracking-wider">
                  4PMGUYS
                </span>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Independent game studio engineering uncompromising next-generation worlds. Forged in Tokyo & Saigon, deployed worldwide.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SERVER & MULTIPLAYER NODES 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#featured-games" className="hover:text-orange-400 transition-colors">
                  Featured Games
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-orange-400 transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#media-trailer" className="hover:text-orange-400 transition-colors">
                  Media & Press
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-orange-400 transition-colors">
                  Community Hub
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-orange-400 transition-colors">
                  Career Openings
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Contacts (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider mb-4">
              PARTNERSHIPS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <span className="text-slate-500 block text-[10px]">BUSINESS / INVESTORS</span>
                <a href="mailto:biz@4pmguys.studio" className="text-slate-300 hover:text-orange-400 transition-colors">
                  biz@4pmguys.studio
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px]">PRESS & STREAMERS</span>
                <a href="mailto:press@4pmguys.studio" className="text-slate-300 hover:text-orange-400 transition-colors">
                  press@4pmguys.studio
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px]">CAREERS & RESUMES</span>
                <a href="mailto:careers@4pmguys.studio" className="text-slate-300 hover:text-orange-400 transition-colors">
                  careers@4pmguys.studio
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider mb-2">
              DISPATCH TRANSMISSION
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Subscribe to encrypted playtest invitations, secret ARG reveals, and developer changelogs. Never spammed.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>FREQUENCIES SYNCHRONIZED. WELCOME OPERATIVE.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="operative@domain.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-mono text-xs font-bold transition-all shadow-md shadow-orange-600/30 whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 4PMGUYS STUDIO LLC. All trademarks and registered marks belong to their respective owners.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Codex</a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFX.playHover()}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500 text-slate-400 hover:text-white transition-all ml-2"
              title="Return to Peak"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

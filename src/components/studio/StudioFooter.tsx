import { useState } from 'react';
import { StudioLogoWhite } from './RealBrandIcons';
import { Check, Copy, ArrowUp } from 'lucide-react';

export const StudioFooter = () => {
  const [copied, setCopied] = useState(false);
  const email = 'contact@4pmguys.loc.cc';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#180931] text-white pt-20 pb-12 border-t border-[#381970]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5">
            <StudioLogoWhite />
            <p className="text-xs text-purple-200 mt-4 leading-relaxed max-w-sm">
              An independent games studio and publishing label. Forged in Tokyo & Saigon, engineering uncompromising living worlds powered by Unreal Engine 5.5 and custom simulation physics.
            </p>

            {/* Prominent Mailbox Box */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm backdrop-blur-sm">
              <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest block font-mono">
                OFFICIAL STUDIO DESK & PRESS:
              </span>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-bold text-white hover:text-amber-300 transition-colors truncate font-mono"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#7317ba] text-white text-[11px] font-bold transition-all flex items-center gap-1 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Nav Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-['Poppins',sans-serif] font-bold text-xs uppercase tracking-widest text-purple-300 mb-4 font-mono">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200 font-medium">
              <li>
                <a href="#featured-games" className="hover:text-white transition-colors">
                  Flagship Games
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  About 4PMGUYS
                </a>
              </li>
              <li>
                <a href="#new-releases" className="hover:text-white transition-colors">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#careers-section" className="hover:text-white transition-colors">
                  Careers & Studio Culture
                </a>
              </li>
              <li>
                <a href="#latest-news" className="hover:text-white transition-colors">
                  Studio News & Devlogs
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Legal (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-['Poppins',sans-serif] font-bold text-xs uppercase tracking-widest text-purple-300 mb-4 font-mono">
              COLLABORATION & LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200 font-medium">
              <li>
                <a href={`mailto:${email}?subject=Partnership%20Inquiry`} className="hover:text-white transition-colors">
                  Publishing & Investor Inquiries
                </a>
              </li>
              <li>
                <a href={`mailto:${email}?subject=Press%20Key%20Request`} className="hover:text-white transition-colors">
                  Review Copies & Streamer Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy & Cookie Codex
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service & EULA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security & Anti-Cheat Protocols
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-purple-300 gap-4">
          <div>
            © 2026 4PMGUYS STUDIO LLC. All trademarks, registered logos, and brand assets are property of 4PMGUYS.
          </div>

          <div className="flex items-center gap-4">
            <span>Primary Node: {email}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#7317ba] text-white transition-colors ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

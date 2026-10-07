import { useEffect, useRef } from 'react';
import { ArrowRight, Trophy, Sparkles, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StudioPioneeringBanner = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-box',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-section"
      ref={bannerRef}
      className="py-24 bg-white border-b border-[#eaeaf8] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Big Statement */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[#7317ba] tracking-[0.25em] uppercase block mb-2 font-mono">
              ORIGIN & PHILOSOPHY // 4PMGUYS
            </span>
            <h2 className="font-['Poppins',sans-serif] font-black text-3xl sm:text-5xl text-[#381970] uppercase leading-tight tracking-tight">
              PIONEERING UNCOMPROMISING INDIE GAMES THAT PLAYERS AROUND THE WORLD{' '}
              <span className="text-[#7317ba]">LOVE FOR A LIFETIME.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              4PMGUYS is an independent AAA & hardcore games label built by passionate craftsmen.
              Founded on the belief that games should challenge, immerse, and respect player agency, we engineer living worlds powered by Unreal Engine 5.5 and custom physics.
            </p>

            {/* Quick Animated Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="stat-box">
                <div className="text-2xl sm:text-4xl font-black text-[#7317ba]">2.5M+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-0.5">Steam Wishlists</div>
              </div>
              <div className="stat-box">
                <div className="text-2xl sm:text-4xl font-black text-[#381970]">5 YRS</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-0.5">Studio Legacy</div>
              </div>
              <div className="stat-box">
                <div className="text-2xl sm:text-4xl font-black text-[#7317ba]">200K+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-0.5">Beta Operatives</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#featured-games"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#7317ba] text-[#7317ba] hover:bg-[#7317ba] hover:text-white font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow-md"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:contact@4pmguys.loc.cc"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f4f4fc] text-[#381970] hover:bg-[#dcdcf4] font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#7317ba]" />
                <span>contact@4pmguys.loc.cc</span>
              </a>
            </div>
          </div>

          {/* Right: Key Art Card with subtle parallax */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-[#dcdcf4] via-[#f0f0fa] to-white p-6 sm:p-8 flex items-center justify-center shadow-xl border border-[#c8c8e8]">
              {/* Floating Award Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#7317ba] text-white shadow-xl flex flex-col items-center justify-center animate-bounce">
                <Trophy className="w-7 h-7 text-white" />
                <span className="text-[9px] font-black uppercase mt-0.5">TOP RATED</span>
              </div>

              {/* Artwork */}
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                alt="4PMGUYS Studio Vision"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#381970] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase">Independent Label 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

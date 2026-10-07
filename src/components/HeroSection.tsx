import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Play, ChevronDown, Gamepad2, ExternalLink } from 'lucide-react';
import { STUDIO_INFO, FEATURED_GAMES } from '../data/studioData';
import { soundFX } from '../utils/soundEffects';

interface HeroSectionProps {
  onPlayTrailer: (videoUrl: string, title: string) => void;
  onOpenSteam: () => void;
  onPlayDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPlayTrailer,
  onOpenSteam,
  onPlayDemo,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const sublineRef = useRef<HTMLParagraphElement | null>(null);
  const ctaGroupRef = useRef<HTMLDivElement | null>(null);
  const hudMetricsRef = useRef<HTMLDivElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Canvas ember particles simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = 75;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 0.9 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.4 ? 'rgba(255, 119, 0,' : 'rgba(0, 240, 255,',
      pulse: Math.random() * 0.02,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * 0.002 + i) * 0.01;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(0.9, p.opacity))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow halo for larger particles
        if (p.size > 2) {
          ctx.fillStyle = `${p.color}${p.opacity * 0.25})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // GSAP Cinematic Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-badge',
        { y: -25, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { y: 40, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1 },
          '-=0.4'
        )
        .fromTo(
          sublineRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaGroupRef.current?.children || [],
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12 },
          '-=0.5'
        )
        .fromTo(
          hudMetricsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const featuredTitle = FEATURED_GAMES[0];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-[#05070b]"
    >
      {/* Cinematic Video Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
            videoLoaded ? 'opacity-35' : 'opacity-10'
          }`}
          src={featuredTitle.videoPreviewUrl}
        />
        {/* Dark Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/60 to-[#05070b]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#05070b]/50 to-[#05070b]" />
        {/* Subtle Cyber scanlines */}
        <div className="absolute inset-0 scanline-overlay opacity-30" />
      </div>

      {/* Floating Canvas Dusk Embers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Center Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center my-auto pt-6">
        {/* Top Studio Indicator Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/20 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,119,0,0.15)]">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-orange-300 font-semibold uppercase">
            NEXT-GEN ENGINE 5.5 IN-FLIGHT PRODUCTION
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[10px] font-mono text-slate-400">BUILD 0.8.4 BETA</span>
        </div>

        {/* Primary Studio Tagline */}
        <h1
          ref={headlineRef}
          className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.05] drop-shadow-2xl"
        >
          FORGING <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-500 text-glow-amber">
            UNCOMPROMISING
          </span>{' '}
          WORLDS
        </h1>

        {/* Positioning Subtitle */}
        <p
          ref={sublineRef}
          className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed tracking-wide"
        >
          {STUDIO_INFO.subTagline}
        </p>

        {/* Studio Core Vision Anchor */}
        <div className="mt-3 flex items-center gap-3 text-xs font-mono text-orange-400/90 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>INDIE SOVEREIGNTY</span>
          <span>•</span>
          <span>HIGH-OCTANE ACTION</span>
          <span>•</span>
          <span>DARK FANTASY & CYBERPUNK</span>
        </div>

        {/* Primary Action Buttons (CTAs) */}
        <div
          ref={ctaGroupRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-2xl"
        >
          {/* CTA 1: Wishlist on Steam */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              soundFX.playClick();
              onOpenSteam();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="group relative px-7 py-4 rounded-lg bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 font-orbitron font-bold text-xs sm:text-sm tracking-wider text-white shadow-[0_0_35px_rgba(255,119,0,0.45)] hover:shadow-[0_0_50px_rgba(255,119,0,0.7)] transition-all flex items-center gap-3 border border-orange-400/40"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.32 3.47 9.83 8.3 11.44l3.12-4.52a3.86 3.86 0 0 1-.36-1.63c0-2.14 1.74-3.88 3.88-3.88 1.48 0 2.77.83 3.42 2.05l4.63-2.09C21.43 5.92 17.15 0 12 0zm0 2.22c4.32 0 7.84 3.52 7.84 7.84 0 1.05-.21 2.05-.59 2.97l-3.35 1.51c-.69-.99-1.84-1.64-3.14-1.64-2.14 0-3.88 1.74-3.88 3.88 0 .42.07.82.2 1.19L6.5 21.84C3.82 20.3 2 17.38 2 14c0-5.4 4.38-9.78 9.78-9.78h.22z"/>
            </svg>
            <span>WISHLIST ON STEAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-orange-200 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          {/* CTA 2: Play Demo */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              soundFX.playClick();
              onPlayDemo();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="group px-7 py-4 rounded-lg bg-[#0d121f]/90 hover:bg-[#141b2e] border border-cyan-500/40 hover:border-cyan-400 font-orbitron font-bold text-xs sm:text-sm tracking-wider text-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] transition-all flex items-center gap-3 backdrop-blur-md"
          >
            <Gamepad2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>PLAY DEMO (V0.9)</span>
          </motion.button>

          {/* CTA 3: Watch Cinematic Reel */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              soundFX.playClick();
              onPlayTrailer(featuredTitle.videoPreviewUrl, featuredTitle.title);
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="px-6 py-4 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 font-mono text-xs sm:text-sm tracking-wider text-slate-200 transition-all flex items-center gap-2.5 backdrop-blur-sm"
          >
            <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Play className="w-3 h-3 fill-orange-400 ml-0.5" />
            </div>
            <span>CINEMATIC TEASER</span>
          </motion.button>
        </div>
      </div>

      {/* Bottom HUD Metrics & Live Telemetry Strip */}
      <div
        ref={hudMetricsRef}
        className="relative z-20 w-full max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-800/80"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
          {STUDIO_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-orange-500/30 p-3.5 rounded-lg transition-all group backdrop-blur-sm"
            >
              <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                {stat.label}
              </div>
              <div className="mt-1 font-orbitron font-extrabold text-2xl sm:text-3xl text-white group-hover:text-orange-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-emerald-400/90 mt-0.5">
                ● {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <a
            href="#featured-games"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-orange-400 transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">EXPLORE ARMORY & GAMES</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-orange-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Cpu, Award, Compass, Zap, Terminal } from 'lucide-react';
import { STUDIO_INFO, STUDIO_MILESTONES } from '../data/studioData';
import { soundFX } from '../utils/soundEffects';

gsap.registerPlugin(ScrollTrigger);

export const AboutStudio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate philosophy cards
      gsap.fromTo(
        '.philosophy-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-grid',
            start: 'top 85%',
          },
        }
      );

      // Animate milestone nodes
      gsap.fromTo(
        '.milestone-node',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'RADICAL IMMERSION',
      icon: <Compass className="w-5 h-5 text-orange-400" />,
      desc: 'We strip away cluttered HUDs, flashing mini-maps, and patronizing tutorials. Players navigate through audio cues, architectural lighting, and environmental instinct.',
    },
    {
      num: '02',
      title: 'KINETIC COMBAT ARCHITECTURE',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      desc: 'Every sword collision, bullet deflection, and parry window is calculated at sub-millisecond precision. Responsive hit-boxes and visceral physics define our gameplay spine.',
    },
    {
      num: '03',
      title: 'NANITE & LUMEN LIVING REALITIES',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      desc: 'Harnessing the bleeding edge of Unreal Engine 5.5, our worlds react dynamically to localized destruction, weather cycles, and persistent player footprints.',
    },
    {
      num: '04',
      title: 'INDEPENDENT SOVEREIGNTY',
      icon: <Shield className="w-5 h-5 text-rose-400" />,
      desc: '100% developer-owned. We answer to gamers, not quarterly board meetings. No predatory micro-transactions. No algorithm-chasing compromise.',
    },
  ];

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070b] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Studio Manifesto Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-orange-400 mb-2 uppercase">
            <Terminal className="w-4 h-4 text-orange-400" />
            <span>ORIGIN STORY & CODEX</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">4PMGUYS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            {STUDIO_INFO.philosophy}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800">
              EST. {STUDIO_INFO.founded}
            </span>
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800">
              {STUDIO_INFO.location}
            </span>
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-orange-400">
              {STUDIO_INFO.teamSize}
            </span>
          </div>
        </div>

        {/* Studio Pillars Grid */}
        <div className="philosophy-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              onMouseEnter={() => soundFX.playHover()}
              className="philosophy-card p-6 rounded-xl bg-[#080c14] border border-slate-800/80 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-orbitron font-extrabold text-2xl text-slate-600 group-hover:text-orange-400 transition-colors">
                    {pillar.num}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-base text-white group-hover:text-orange-300 transition-colors tracking-wide">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>CORE STANDARD</span>
                <span className="text-orange-400">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Timeline / Milestones */}
        <div className="bg-[#080c14]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-orange-400 tracking-widest uppercase">
                THE EXPEDITION TIMELINE
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white mt-1">
                FROM APARTMENT PROTOTYPE TO AAA ACCLAIM
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>UNCEASING ITERATION</span>
            </div>
          </div>

          <div ref={timelineRef} className="space-y-8 relative">
            {/* Timeline vertical connector line */}
            <div className="absolute top-2 bottom-2 left-4 sm:left-24 w-[2px] bg-gradient-to-b from-orange-500 via-amber-500 to-cyan-500 opacity-30" />

            {STUDIO_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className="milestone-node relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 group"
              >
                {/* Year tag */}
                <div className="sm:w-20 pl-8 sm:pl-0 font-orbitron font-bold text-lg text-orange-400 group-hover:text-white transition-colors">
                  {milestone.year}
                </div>

                {/* Marker dot */}
                <div className="absolute left-[13px] sm:left-[93px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-[#080c14] group-hover:scale-150 transition-all shadow-[0_0_8px_rgba(255,119,0,0.8)]" />

                {/* Content */}
                <div className="flex-1 pl-8 sm:pl-6 bg-slate-900/40 p-4 rounded-lg border border-slate-800/60 group-hover:border-slate-700 transition-all">
                  <h4 className="font-orbitron font-bold text-white text-base">
                    {milestone.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {milestone.description}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-950/40 border border-orange-500/20 text-[11px] font-mono text-orange-300">
                    <Award className="w-3 h-3 text-orange-400" />
                    <span>{milestone.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronRight, Sparkles, Send } from 'lucide-react';
import { CAREER_POSITIONS } from '../data/studioData';
import type { CareerPosition } from '../types';
import { soundFX } from '../utils/soundEffects';

interface CareersSectionProps {
  onApplyJob: (job: CareerPosition) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onApplyJob }) => {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(CAREER_POSITIONS[0]?.id || null);

  const departments = ['ALL', 'Engineering', 'Art & Animation', 'Game Design', 'Audio & Narrative'];

  const filteredJobs = CAREER_POSITIONS.filter((job) => {
    if (selectedDept === 'ALL') return true;
    return job.department === selectedDept;
  });

  const perks = [
    { title: 'Global Remote First', desc: 'Work from anywhere on Earth with flexible asynchronous rhythms.' },
    { title: 'True Anti-Crunch Code', desc: 'We respect mental sanity. Reasonable production milestones and no death-marches.' },
    { title: 'Direct Revenue Profit Points', desc: 'Every full-time team member participates directly in title royalties.' },
    { title: '$4,000 Rig & Gear Allowance', desc: 'Top-tier custom workstations, RTX 4090 GPUs, and ergonomic equipment.' },
  ];

  return (
    <section
      id="careers"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-orange-400 mb-2 uppercase">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>FORGE WORLDS WITH US</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              OPEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">POSITIONS</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              Join a dedicated cabal of veterans building games that matter. No corporate politics, no micro-management. Pure craft.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedDept(dept);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                  selectedDept === dept
                    ? 'bg-orange-500/20 border border-orange-500 text-orange-400'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Culture & Perks Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#090d16] border border-slate-800/80 hover:border-orange-500/30 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-orbitron font-bold text-sm text-white">{perk.title}</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Jobs List Accordion */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0a0e19] border-orange-500/40 shadow-xl shadow-orange-950/20'
                    : 'bg-[#080b12] border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Header bar */}
                <div
                  onClick={() => {
                    soundFX.playClick();
                    setExpandedJobId(isExpanded ? null : job.id);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-orange-950/50 border border-orange-500/30 text-orange-300">
                        {job.department}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {job.level} Level
                      </span>
                    </div>
                    <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white group-hover:text-orange-400 transition-colors">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{job.type}</span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 text-orange-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-800/80 px-6 pb-6 pt-4 bg-slate-950/40"
                    >
                      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Responsibilities */}
                        <div>
                          <h5 className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                            Key Responsibilities:
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {job.responsibilities.map((res, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-orange-500 mt-0.5">▹</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h5 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                            Qualifications & Craft:
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-cyan-400 mt-0.5">▹</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Position Perks */}
                      <div className="mb-6 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                        <h5 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                          Specific Benefits for this role:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {job.perks.map((p, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-mono px-3 py-1 rounded bg-slate-800 text-slate-300"
                            >
                              ✓ {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Apply Action */}
                      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800/80">
                        <button
                          onClick={() => {
                            soundFX.playClick();
                            onApplyJob(job);
                          }}
                          onMouseEnter={() => soundFX.playHover()}
                          className="px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-orbitron font-bold text-xs tracking-wider transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>SUBMIT CANDIDACY & PORTFOLIO</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Can't find position callout */}
        <div className="mt-12 text-center p-8 rounded-xl border border-slate-800 bg-[#080c14]/50">
          <h4 className="font-orbitron font-bold text-lg text-white">
            DON'T SEE YOUR SPECIFIC DISCIPLINE?
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            We are always scouting exceptional gameplay engineers, technical shaders wizards, and dark fantasy lore writers. Send your open portfolio to our hiring desk.
          </p>
          <a
            href="mailto:careers@4pmguys.studio?subject=General%20Inquiry%20-%20Talent%20Pool"
            className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 hover:underline"
          >
            <span>careers@4pmguys.studio</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

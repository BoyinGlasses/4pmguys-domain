import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, Gamepad2, ArrowRight, ChevronRight, Mail } from 'lucide-react';
import { STUDIO_CAREERS } from '../../data/studio4pmData';

interface StudioCareersAndPitchProps {
  onOpenPitch: () => void;
  onOpenCareers?: () => void;
}

export const StudioCareersAndPitch = ({ onOpenPitch, onOpenCareers }: StudioCareersAndPitchProps) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <div className="bg-[#f8f8fd]">
      {/* 1. Join 4PMGUYS Studio Section */}
      <section id="careers-section" className="py-24 bg-white border-b border-[#eaeaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-[#7317ba] tracking-[0.25em] uppercase block mb-1 font-mono">
                CULTURE & RECRUITMENT
              </span>
              <h2 className="font-['Poppins',sans-serif] font-black text-3xl sm:text-5xl text-[#381970] uppercase tracking-tight">
                Join 4PMGUYS
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At 4PMGUYS, we believe game development is an art form that demands bold vision, mathematical precision, and zero corporate compromise.
                </p>
                <p>
                  We are a 100% independent, remote-first collective. We offer competitive salaries, direct game revenue royalties, $4,000 annual equipment stipends, and a strict anti-crunch culture.
                </p>
                <p className="font-bold text-[#381970]">
                  Ready to craft worlds that endure? Explore our open roles.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={onOpenCareers || (() => {
                    const el = document.getElementById('open-roles');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  })}
                  className="px-8 py-3.5 rounded-full bg-[#7317ba] hover:bg-[#5b1196] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>View Open Roles</span>
                </button>

                <a
                  href="mailto:contact@4pmguys.loc.cc?subject=Job%20Application%20Inquiry"
                  className="px-6 py-3.5 rounded-full bg-[#f4f4fc] hover:bg-[#dcdcf4] text-[#381970] font-bold text-sm transition-all inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#7317ba]" />
                  <span>contact@4pmguys.loc.cc</span>
                </a>
              </div>
            </div>

            {/* Right Video / Studio Showcase */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1e0a3d] aspect-video border-4 border-[#dcdcf4]">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/AwL9W9JcZBQ?si=Eo8HgJxF2SDlZTUH"
                  title="4PMGUYS Studio Culture"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Open Roles Accordion Strip */}
          <div id="open-roles" className="mt-16 pt-12 border-t border-slate-100">
            <h3 className="font-['Poppins',sans-serif] font-black text-2xl text-[#381970] uppercase mb-6">
              CURRENT OPPORTUNITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STUDIO_CAREERS.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="p-6 rounded-2xl border border-slate-200 hover:border-[#7317ba] bg-[#fbfbfe] hover:bg-white transition-all cursor-pointer shadow-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#7317ba] uppercase tracking-wider">
                      {job.dept} • {job.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{job.exp}</span>
                  </div>
                  <h4 className="font-bold text-lg text-[#381970] group-hover:text-[#7317ba] transition-colors mt-1">
                    {job.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {job.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7317ba]">
                    <span>Apply via contact@4pmguys.loc.cc</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Play Our Games & Pitch Your Game (Dual Big Clean Cards) */}
      <section className="py-20 bg-[#f4f4fc] border-b border-[#eaeaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Play our games */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#eaeaf8] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#dcdcf4] flex items-center justify-center text-[#381970] mb-6 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-[#7317ba]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-black text-2xl sm:text-3xl text-[#381970] uppercase">
                  Play our games
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  From unforgiving souls-like action and intense cyberpunk extractions to cosmic survival horror, explore our complete catalog of sovereign games. Download demos and wishlist on Steam today!
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#featured-games"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#381970] hover:bg-[#7317ba] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Pitch your game */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#eaeaf8] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#dcdcf4] flex items-center justify-center text-[#381970] mb-6 group-hover:scale-110 transition-transform">
                  <Send className="w-8 h-8 text-[#7317ba]" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-black text-2xl sm:text-3xl text-[#381970] uppercase">
                  Pitch your game
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Are you an independent developer with an uncompromising concept? We partner with passionate indie teams to provide development grants, tech art mentorship, marketing, and global publishing.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenPitch}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7317ba] hover:bg-[#5b1196] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Pitch to 4PMGUYS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sword, Shield, Zap, RefreshCw, Trophy, Skull } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSteam: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenSteam }) => {
  const [playerHp, setPlayerHp] = useState(100);
  const [bossHp, setBossHp] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [combatLog, setCombatLog] = useState<string[]>([
    'Encounter initiated: GOLGOTH, THE TWILIGHT TYRANT',
    'Hold your ground. Timing is everything.',
  ]);
  const [bossStance, setBossStance] = useState<'IDLE' | 'ATTACKING' | 'STAGGERED'>('IDLE');
  const [isVictory, setIsVictory] = useState(false);
  const [isDefeat, setIsDefeat] = useState(false);

  // Boss attack loop
  useEffect(() => {
    if (!isOpen || isVictory || isDefeat) return;

    const interval = setInterval(() => {
      // Boss winds up attack
      setBossStance('ATTACKING');
      setCombatLog((prev) => ['⚠️ Golgoth unleashes a sweeping Obsidian Cleave!', ...prev.slice(0, 4)]);

      setTimeout(() => {
        setBossStance((current) => {
          if (current === 'STAGGERED') return 'IDLE'; // Player parried successfully!
          // Else player takes damage
          setPlayerHp((hp) => {
            const next = Math.max(0, hp - 25);
            if (next === 0) setIsDefeat(true);
            return next;
          });
          soundFX.playClick();
          return 'IDLE';
        });
      }, 1200);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, isVictory, isDefeat]);

  // Stamina regen
  useEffect(() => {
    if (!isOpen) return;
    const regen = setInterval(() => {
      setStamina((s) => Math.min(100, s + 5));
    }, 500);
    return () => clearInterval(regen);
  }, [isOpen]);

  const handleStrike = () => {
    if (stamina < 20 || isVictory || isDefeat) return;
    soundFX.playClick();
    setStamina((s) => Math.max(0, s - 20));

    const dmg = Math.floor(Math.random() * 15) + 15;
    const nextBossHp = Math.max(0, bossHp - dmg);
    setBossHp(nextBossHp);

    setCombatLog((prev) => [`⚔️ You execute a Lunar Blade Strike for ${dmg} DMG!`, ...prev.slice(0, 4)]);

    if (nextBossHp === 0) {
      setIsVictory(true);
      soundFX.playSwoosh();
    }
  };

  const handleParry = () => {
    if (stamina < 15 || isVictory || isDefeat) return;
    soundFX.playClick();
    setStamina((s) => Math.max(0, s - 15));

    if (bossStance === 'ATTACKING') {
      // Perfect parry!
      setBossStance('STAGGERED');
      const counterDmg = 35;
      const nextBossHp = Math.max(0, bossHp - counterDmg);
      setBossHp(nextBossHp);
      soundFX.playSwoosh();

      setCombatLog((prev) => [
        `⚡ PERFECT PARRY! Golgoth is staggered! Countered for ${counterDmg} DMG!`,
        ...prev.slice(0, 4),
      ]);

      if (nextBossHp === 0) {
        setIsVictory(true);
      }
    } else {
      setCombatLog((prev) => ['Parried into thin air! Golgoth was not attacking.', ...prev.slice(0, 4)]);
    }
  };

  const handleDodge = () => {
    if (stamina < 25 || isVictory || isDefeat) return;
    soundFX.playHover();
    setStamina((s) => Math.max(0, s - 25));
    setCombatLog((prev) => ['💨 Frame-perfect shadow roll avoided the trajectory.', ...prev.slice(0, 4)]);
  };

  const resetEncounter = () => {
    setPlayerHp(100);
    setBossHp(100);
    setStamina(100);
    setIsVictory(false);
    setIsDefeat(false);
    setBossStance('IDLE');
    setCombatLog(['Encounter reset: Golgoth stands ready.']);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          className="relative z-10 w-full max-w-3xl bg-[#070a12] border border-orange-500/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-[#05070e] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <h3 className="font-orbitron font-bold text-white text-base">
                DUSKWALKER COMBAT BENCHMARK // BROWSER PROTOTYPE V0.9
              </h3>
            </div>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Arena Visuals */}
          <div className="p-6 sm:p-8 flex flex-col justify-between relative bg-gradient-to-b from-slate-950 via-[#0a0e1a] to-slate-950 min-h-[400px]">
            {/* Boss Status */}
            <div>
              <div className="flex items-center justify-between mb-1.5 font-orbitron font-bold text-xs">
                <span className="text-rose-400 flex items-center gap-2">
                  <Skull className="w-4 h-4" />
                  GOLGOTH, THE TWILIGHT MONARCH
                </span>
                <span className="font-mono text-slate-400">{bossHp} / 100 HP</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-rose-400 transition-all duration-300"
                  style={{ width: `${bossHp}%` }}
                />
              </div>

              {/* Boss Stance Callout */}
              <div className="mt-2 text-center">
                <span
                  className={`text-xs font-mono font-bold px-3 py-1 rounded border ${
                    bossStance === 'ATTACKING'
                      ? 'bg-red-950/80 border-red-500 text-red-300 animate-pulse'
                      : bossStance === 'STAGGERED'
                      ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {bossStance === 'ATTACKING'
                    ? '⚠️ BOSS SWING TELEGRAPHED — HIT PARRY NOW!'
                    : bossStance === 'STAGGERED'
                    ? '⚡ BOSS STAGGERED — EXPLOIT WITH HEAVY STRIKES!'
                    : 'BOSS CADENCE: EVALUATING DISTANCE'}
                </span>
              </div>
            </div>

            {/* Combat Center Graphic */}
            <div className="my-8 flex items-center justify-center">
              {isVictory ? (
                <div className="text-center animate-fade-in">
                  <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-2 animate-bounce" />
                  <h4 className="font-orbitron font-black text-2xl text-amber-300">
                    NEMESIS VANQUISHED
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Combat parity verified. Full demo available on Steam wishlist release.
                  </p>
                  <div className="mt-4 flex gap-3 justify-center">
                    <button
                      onClick={resetEncounter}
                      className="px-4 py-2 rounded bg-slate-800 text-xs font-mono text-white flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> REPLAY
                    </button>
                    <button
                      onClick={onOpenSteam}
                      className="px-5 py-2 rounded bg-orange-600 text-xs font-orbitron font-bold text-white shadow-lg shadow-orange-600/30"
                    >
                      WISHLIST NOW
                    </button>
                  </div>
                </div>
              ) : isDefeat ? (
                <div className="text-center">
                  <Skull className="w-16 h-16 text-rose-500 mx-auto mb-2" />
                  <h4 className="font-orbitron font-black text-2xl text-rose-400">
                    YOU DIED
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Your soul dissolved into the twilight mist.
                  </p>
                  <button
                    onClick={resetEncounter}
                    className="mt-4 px-6 py-2 rounded bg-rose-600 hover:bg-rose-500 text-xs font-mono font-bold text-white"
                  >
                    RETRY ENCOUNTER
                  </button>
                </div>
              ) : (
                <div className="w-48 h-32 rounded-xl bg-slate-950/60 border border-slate-800 p-3 flex flex-col justify-end overflow-hidden font-mono text-[11px] text-slate-400">
                  {combatLog.map((log, i) => (
                    <div key={i} className={`truncate ${i === 0 ? 'text-orange-400 font-semibold' : ''}`}>
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Player Status & Interactive Action Buttons */}
            <div>
              {/* Player HP & Stamina */}
              <div className="grid grid-cols-2 gap-4 mb-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>PLAYER HEALTH</span>
                    <span className="text-emerald-400">{playerHp} / 100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-200"
                      style={{ width: `${playerHp}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>STAMINA (20/ATK)</span>
                    <span className="text-cyan-400">{stamina} / 100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-cyan-400 transition-all duration-200"
                      style={{ width: `${stamina}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={handleStrike}
                  disabled={stamina < 20 || isVictory || isDefeat}
                  onMouseEnter={() => soundFX.playHover()}
                  className="py-3 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-orbitron font-bold text-xs tracking-wider flex items-center justify-center gap-2 disabled:opacity-40 transition-all shadow-md shadow-orange-600/20"
                >
                  <Sword className="w-4 h-4" />
                  <span>SLASH</span>
                </button>

                <button
                  onClick={handleParry}
                  disabled={stamina < 15 || isVictory || isDefeat}
                  onMouseEnter={() => soundFX.playHover()}
                  className="py-3 px-4 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-orbitron font-bold text-xs tracking-wider flex items-center justify-center gap-2 disabled:opacity-40 transition-all shadow-md shadow-amber-600/20"
                >
                  <Shield className="w-4 h-4" />
                  <span>PARRY</span>
                </button>

                <button
                  onClick={handleDodge}
                  disabled={stamina < 25 || isVictory || isDefeat}
                  onMouseEnter={() => soundFX.playHover()}
                  className="py-3 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-orbitron font-bold text-xs tracking-wider flex items-center justify-center gap-2 disabled:opacity-40 transition-all shadow-md shadow-cyan-600/20"
                >
                  <Zap className="w-4 h-4" />
                  <span>DODGE</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

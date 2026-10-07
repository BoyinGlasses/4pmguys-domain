import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse), not touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, [data-cursor="interactive"], select, [role="button"]');
        setIsHoveringInteractive(!!interactive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer crosshair ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 24 : 16),
          y: mousePosition.y - (isHoveringInteractive ? 24 : 16),
          width: isHoveringInteractive ? 48 : 32,
          height: isHoveringInteractive ? 48 : 32,
          borderColor: isHoveringInteractive ? 'rgba(255, 119, 0, 0.9)' : 'rgba(0, 240, 255, 0.5)',
          scale: isHoveringInteractive ? 1.15 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      >
        <div className="w-full h-full rounded-full border border-current opacity-80 relative">
          {isHoveringInteractive && (
            <>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-[2px] h-2 bg-orange-500" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-[2px] h-2 bg-orange-500" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 h-[2px] w-2 bg-orange-500" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 h-[2px] w-2 bg-orange-500" />
            </>
          )}
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          backgroundColor: isHoveringInteractive ? '#ff7700' : '#00f0ff',
          scale: isHoveringInteractive ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 600, mass: 0.1 }}
      >
        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,119,0,0.8)]" />
      </motion.div>
    </div>
  );
};

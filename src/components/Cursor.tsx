import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      links.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Run initially and then observe mutations to catch new elements
    handleLinkHoverEvents();
    
    const observer = new MutationObserver(() => {
      handleLinkHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, [hidden]);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : linkHovered ? 0 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 20,
          mass: 0.1,
        }}
      />
    </>
  );
}

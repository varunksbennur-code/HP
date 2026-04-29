import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-royal-dark">
      
      {/* Immersive Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-[0.25] scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-2849-medium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-royal-dark/60 to-royal-dark/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-dark via-transparent to-royal-dark" />
      </div>

      <div className="diagonal-bg"></div>
      <div className="diagonal-bg-bottom"></div>

      <motion.div style={{ y: y1, opacity }} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center flex-col-reverse lg:flex-row">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-10 lg:pt-0">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-block px-4 py-1.5 glass text-accent-yellow text-xs font-black rounded-lg mb-6 tracking-widest uppercase border-accent-yellow/30"
            >
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse"></span>
                Next Generation • Flat 40% OFF
              </span>
            </motion.div>

            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-6xl sm:text-7xl lg:text-[9rem] font-heading font-black leading-[0.85] mb-6 tracking-tighter text-white"
            >
              LAPTOP <br/>
              <span className="text-accent-yellow text-glow">SALE</span>
            </motion.h1>

            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg sm:text-2xl text-slate-300 w-full max-w-lg mb-10 font-light leading-relaxed"
            >
              Experience the pinnacle of performance. Unmatched power and precision for the modern creator.
            </motion.p>

            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="bg-accent-yellow text-royal-dark px-10 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-all duration-300 box-glow transform hover:scale-105 active:scale-95 uppercase flex items-center gap-3">
                Order Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 rounded-full font-bold tracking-widest text-white border border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300 uppercase">
                View Models
              </button>
            </motion.div>
          </div>

          {/* Right Image/Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000"
          >
            <div className="relative flex items-center justify-center w-full h-[32rem] group">
              <div className="absolute inset-0 bg-accent-yellow/20 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-1000"></div>
              
              {/* Product Frame */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card p-4 lg:p-8 z-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-[24px]"></div>
                <img 
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Premium HP Laptop" 
                  className="relative w-full max-w-lg object-cover rounded-xl shadow-2xl z-20 group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Floating Tags */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -left-12 -bottom-6 glass px-6 py-4 rounded-2xl z-30 shadow-xl border-accent-yellow/20"
                >
                  <div className="text-xs uppercase tracking-widest text-accent-yellow mb-1">Featured</div>
                  <div className="font-heading font-black text-xl text-white">Spectre x360</div>
                </motion.div>
                
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section id="offers" className="py-12 bg-royal-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden group"
        >
          {/* Immersive Video Banner Background */}
           <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-neon-lights-in-a-cyberpunk-city-animation-32529-medium.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-royal-dark/90 via-royal-dark/70 to-blue-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 glass opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-20 px-8 py-20 md:py-28 flex flex-col items-center text-center">
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 text-accent-yellow opacity-10"
            >
              <Sparkles className="w-40 h-40" />
            </motion.div>

            <span className="glass border-white/20 px-6 py-2 rounded-full text-white font-bold tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-yellow"></span>
              </span>
              Cyber Special Event
            </span>
            
            <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-black text-white mb-6 max-w-4xl leading-[0.9] tracking-tighter">
              UPGRADE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow via-yellow-200 to-accent-yellow bg-[length:200%_auto] animate-gradient">REALITY</span>
            </h2>

            <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mb-12">
              Unlock peak performance with an additional 15% off at checkout using code <span className="font-mono bg-white/10 px-2 py-1 rounded text-white font-bold border border-white/20">CYBER15</span>
            </p>
            
            <button className="bg-white text-royal-dark px-12 py-5 rounded-full font-black tracking-widest text-sm hover:bg-accent-yellow transition-all duration-300 box-glow transform hover:scale-105 active:scale-95 uppercase shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Unlock Offer
            </button>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </section>
  );
}

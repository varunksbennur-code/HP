import { motion } from 'motion/react';
import { MonitorPlay, BatteryCharging, Zap, Cpu } from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  return (
    <section id="features" className="py-32 bg-royal-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter"
          >
            Engineering <br />
            <span className="text-accent-yellow">Mastery.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-xl text-xl font-light"
          >
            Meticulously crafted features that separate the exceptional from the everyday.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Display - Spans 2 cols */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 glass rounded-[2rem] overflow-hidden relative group"
          >
            <video 
              autoPlay loop muted playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-screen"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-medium.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Immersive OLED Display</h3>
              <p className="text-slate-300 font-light max-w-md">True blacks, infinite contrast, and spectacular color volume that brings every pixel to life.</p>
            </div>
          </motion.div>

          {/* Card 2: Battery - Spans 1 col */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-[2rem] p-8 relative overflow-hidden group flex flex-col justify-end bg-gradient-to-b from-transparent to-royal-blue/30"
          >
            <div className="absolute top-0 right-0 w-full h-1/2 bg-accent-yellow/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex-1"></div>
            <div className="w-12 h-12 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-4">
              <BatteryCharging className="w-6 h-6 text-accent-yellow" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">24H Battery</h3>
            <p className="text-slate-300 font-light text-sm">Intelligent power management delivering all-day fuel for your most demanding tasks.</p>
          </motion.div>

          {/* Card 3: Performance - Spans 1 col */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-[2rem] overflow-hidden relative group"
          >
             <video 
              autoPlay loop muted playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 mix-blend-screen"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blinking-lights-animation-32439-medium.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-royal-dark/60 mix-blend-multiply"></div>
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Next-Gen CPU</h3>
              <p className="text-slate-300 font-light text-sm">Desktop-caliber performance housed within an ultra-thin chassis.</p>
            </div>
          </motion.div>

          {/* Card 4: Design - Spans 2 cols */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 glass rounded-[2rem] overflow-hidden relative group flex"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full">
               <video 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-close-up-1659-medium.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-royal-dark via-royal-dark/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full md:w-1/2 p-8 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-white mb-3">Ultra Light. <br/>Ultra Premium.</h3>
              <p className="text-slate-300 font-light">Crafted from recycled aerospace-grade aluminum. Incredibly thin, remarkably durable.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

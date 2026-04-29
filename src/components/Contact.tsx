import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="store" className="py-32 bg-royal-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Store Info */}
          <div>
            <div className="inline-block px-4 py-1.5 glass text-white text-xs font-bold tracking-widest uppercase mb-6 border-white/10">
              Offline Experience
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tighter">
              Experience <br/> HP Innovation <span className="text-slate-500">Live.</span>
            </h2>
            
            <p className="text-slate-400 text-xl font-light mb-12 max-w-lg">
              Drop by our flagship store to touch, feel, and experience the latest HP laptops. Get expert advice and claim in-store exclusives.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass border-white/5 hover:border-accent-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">HP Store Davanagere</h4>
                  <p className="text-slate-400">BIET Road, Davanagere<br/>Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-2xl glass border-white/5 hover:border-accent-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Store Hours</h4>
                  <p className="text-slate-400">Mon - Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="tel:9353709773"
                className="bg-white text-royal-dark px-8 py-4 rounded-full font-bold tracking-widest hover:bg-slate-200 transition-all duration-300 flex items-center gap-3 uppercase text-sm"
              >
                <Phone className="w-4 h-4" />
                Call +91 93537 09773
              </a>
              <a 
                href="https://wa.me/919353709773"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest hover:bg-white/5 transition-all duration-300 flex items-center gap-3 uppercase text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map/Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden glass border-white/10 group p-2"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="HP Store Interior" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-royal-dark/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-6 rounded-2xl border-white/10 flex items-center justify-between backdrop-blur-xl">
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-wide uppercase mb-1">Get Directions</h4>
                    <p className="text-slate-400 text-sm font-light">Open in Google Maps</p>
                  </div>
                  <button className="w-12 h-12 bg-white text-royal-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

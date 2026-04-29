import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-dark pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 block">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-royal-dark font-sans lowercase text-lg">
                hp
              </div>
              <span className="text-xl font-heading font-black tracking-wider text-white">
                HP<span className="text-slate-400">STORE</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your premium destination for the latest HP laptops, accessories, and expert tech support. Empowering your digital lifestyle.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-accent-yellow hover:border-accent-yellow/50 transition-colors group">
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Products</h4>
            <ul className="space-y-4">
              {['HP Spectre', 'HP Envy', 'HP Pavilion', 'HP Omen', 'HP Victus', 'Accessories'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-accent-yellow text-sm font-medium transition-colors relative group block w-fit">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Warranty', 'Service Centers', 'Track Order', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow transition-all"
              />
              <button className="bg-white hover:bg-slate-200 text-royal-dark font-bold rounded-xl px-4 py-3 text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm opacity-60">
            &copy; {currentYear} HP Development Company, L.P. Inspired by premium tech showroom design.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500 uppercase font-bold tracking-widest opacity-60">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

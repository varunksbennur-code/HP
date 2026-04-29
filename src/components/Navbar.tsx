import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Laptops', href: '#laptops' },
    { name: 'Offers', href: '#offers' },
    { name: 'Store', href: '#store' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-4 shadow-2xl border-b border-white/5 backdrop-blur-xl bg-royal-dark/50' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-royal-dark font-sans lowercase">
              hp
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">
              Store
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-slate-300 hover:text-white transition-colors relative group opacity-80 hover:opacity-100"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 border border-accent-yellow text-accent-yellow rounded-full text-xs font-bold hover:bg-accent-yellow hover:text-royal-dark transition-all uppercase tracking-widest">
              Find a Store
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-200 hover:text-accent-yellow transition-colors pb-2 border-b border-white/5 uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="px-6 py-3 border border-accent-yellow text-accent-yellow rounded-full text-sm font-bold hover:bg-accent-yellow hover:text-royal-dark transition-all uppercase tracking-widest mt-2 w-full text-center">
                Find a Store
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import PromoBanner from './components/PromoBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] bg-royal-dark flex items-center justify-center flex-col"
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="overflow-hidden flex items-center gap-4">
        <motion.div 
          initial={{ y: 100 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-black font-heading text-white lowercase"
        >
          hp
        </motion.div>
        <motion.div 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: "auto", opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-black font-heading text-slate-500 uppercase tracking-tighter overflow-hidden whitespace-nowrap"
        >
          Store
        </motion.div>
      </div>
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
        className="h-0.5 bg-accent-yellow w-48 mt-8 origin-left"
      />
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-royal-dark min-h-screen selection:bg-accent-yellow selection:text-royal-dark font-sans relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Cursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Products />
        <PromoBanner />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}


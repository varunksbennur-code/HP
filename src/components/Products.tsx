import { motion } from 'motion/react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'HP Omen 16',
    tag: 'Gaming Beast',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '₹1,04,999',
    oldPrice: '₹1,34,999',
    discount: '22% OFF',
    rating: 4.9,
    specs: ['RTX 4070', 'Intel i9', 'QHD 240Hz']
  },
  {
    id: 2,
    name: 'HP Spectre x360',
    tag: 'Creator Choice',
    image: 'https://images.unsplash.com/photo-1593642702821-c823b24094a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '₹1,24,999',
    oldPrice: '₹1,59,999',
    discount: '20% OFF',
    rating: 5.0,
    specs: ['OLED Touch', 'Intel Evo', '32GB RAM']
  },
  {
    id: 3,
    name: 'HP Envy 14',
    tag: 'Ultra Portable',
    image: 'https://images.unsplash.com/photo-1531297172868-224422209741?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '₹84,999',
    oldPrice: '₹1,09,999',
    discount: '23% OFF',
    rating: 4.7,
    specs: ['2.8K Display', '14 Hours', '1.4kg']
  }
];

export default function Products() {
  return (
    <section id="laptops" className="py-32 bg-royal-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-accent-yellow font-bold tracking-widest uppercase text-sm mb-4 block">The Lineup</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter">
              Discover <span className="text-slate-500">Perfection.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-white font-bold tracking-widest uppercase hover:text-accent-yellow transition-colors group">
            View All Models
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="glass p-2 rounded-[2rem] flex flex-col group relative"
            >
              {/* Product Card Internal */}
              <div className="bg-royal-blue/50 rounded-[1.8rem] p-6 h-full border border-white/5 relative overflow-hidden flex flex-col">
                
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-accent-yellow/10 transition-colors duration-500"></div>

                {/* Top Tags */}
                <div className="flex justify-between items-start relative z-10 mb-8">
                  <span className="glass px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300 border-white/10">
                    {product.tag}
                  </span>
                  <div className="bg-accent-yellow text-royal-dark text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {product.discount}
                  </div>
                </div>

                {/* Image Showcase */}
                <div className="relative aspect-[4/3] rounded-2xl mb-8 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-[110%] max-w-[110%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="mt-auto relative z-10">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                    <span className="text-sm font-bold text-slate-300">{product.rating}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black font-heading text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  {/* Specs Pill */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map(spec => (
                      <span key={spec} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-400">
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-500 line-through font-medium">{product.oldPrice}</span>
                      <span className="text-2xl font-black text-white">{product.price}</span>
                    </div>
                    
                    <button className="bg-white text-royal-dark hover:bg-accent-yellow w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 shadow-xl">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

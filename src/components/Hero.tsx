import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000"
          alt="Ocean Waves"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/40 backdrop-brightness-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-ocean font-bold tracking-[0.3em] uppercase text-xs mb-6">
            H&J PREMIUM SHOP ANGLERS BASE
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            伝統とともに <br />
            <span className="text-white/90">釣り文化</span>を <br />
            リードする
          </h1>
          <h2 className="sr-only">H&J PREMIUM SHOP ANGLERS BASE</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            H&Jは最高品質のフィッシングギアを提供し、グローバルパートナーとともに持続可能なエコシステムの構築に専念しています。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#brands"
              className="px-10 py-4 bg-ocean text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-lg shadow-ocean/20 transition-all hover:bg-white hover:text-navy"
            >
              ブランド探索
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:bg-white hover:text-navy"
            >
              私たちのビジョン
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">スクロール</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/60 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

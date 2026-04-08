import { motion } from 'motion/react';
import { HISTORY_DATA } from '../constants';

export default function History() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-20">
          <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            私たちの歩み
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            卓越性のマイルストーン
          </h2>
          <div className="w-20 h-1 bg-ocean mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-navy/10 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {HISTORY_DATA.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full md:w-auto text-center md:text-left px-6">
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <span className="text-ocean font-black text-5xl md:text-7xl opacity-20 block mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-navy/60 leading-relaxed max-w-md mx-auto md:mx-0">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 rounded-full bg-navy border-4 border-white shadow-lg" />
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

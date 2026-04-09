import { motion } from 'motion/react';
import { BRANDS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Brands() {
  return (
    <section id="brands" className="section-padding bg-white">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              ブランドポートフォリオ
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              世界最高水準の <br />
              釣りブランドを厳選する
            </h2>
          </div>
          <p className="text-navy/50 text-sm max-w-xs leading-relaxed">
            私たちは品質、革新、そして釣りの精神を共有するメーカーとパートナーシップを結んでいます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS_DATA.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy"
            >
              {/* Background Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} Logo`} 
                    className="h-10 w-auto object-contain brightness-0 invert opacity-80 mb-6"
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="text-white text-3xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-ocean font-bold text-xs uppercase tracking-widest mb-4">
                    {brand.philosophy}
                  </p>
                </div>

                {/* Hover Details */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out">
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-ocean transition-colors">
                    カタログを見る <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-ocean/20 backdrop-blur-sm flex items-center justify-center rounded-bl-3xl translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                <ExternalLink className="text-white w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

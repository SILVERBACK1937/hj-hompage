import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
                alt="CEO Message"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-navy p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-display italic text-2xl mb-2">"品質こそが私たちの伝統です。"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-ocean" />
                <span className="text-ocean font-bold uppercase tracking-widest text-xs">H&J CEO</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              H&Jについて
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">
              プレミアムフィッシング文化の <br />
              未来を創造する
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              設立以来、H&Jは伝統的な職人技と現代技術の架け橋となり、釣具業界の最前線に立ってきました。
              釣りは単なる趣味ではなく、人と自然を繋ぐ文化であると私たちは信じています。
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-navy font-bold text-xl mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-ocean rounded-full" />
                  ビジョン
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  プレミアム釣具の世界で最も信頼されるB2Bプラットフォームとなり、情熱的なアングラーのグローバルコミュニティを育成します。
                </p>
              </div>
              <div>
                <h3 className="text-navy font-bold text-xl mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-ocean rounded-full" />
                  ミッション
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  厳選されたブランドパートナーシップと革新的なサプライチェーンソリューションを通じて、パートナーの成功を支援します。
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-navy/10">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="block text-3xl font-extrabold text-navy">25+</span>
                  <span className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">経験年数</span>
                </div>
                <div className="w-[1px] h-10 bg-navy/10" />
                <div className="text-center">
                  <span className="block text-3xl font-extrabold text-navy">500+</span>
                  <span className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">パートナー</span>
                </div>
                <div className="w-[1px] h-10 bg-navy/10" />
                <div className="text-center">
                  <span className="block text-3xl font-extrabold text-navy">12</span>
                  <span className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">グローバルブランド</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

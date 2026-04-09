import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Company Overview Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-navy/10 pb-12"
        >
          <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Company Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-12 leading-tight">
            会社概要
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            <div className="space-y-1">
              <h3 className="text-navy font-bold text-xs uppercase tracking-widest opacity-50">■ 事業者名</h3>
              <p className="text-navy font-medium">アングラーズベース釣具</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-navy font-bold text-xs uppercase tracking-widest opacity-50">■ 代表者</h3>
              <p className="text-navy font-medium">熊谷実樹</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-navy font-bold text-xs uppercase tracking-widest opacity-50">■ 事業形態</h3>
              <p className="text-navy font-medium">個人事業主</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-navy font-bold text-xs uppercase tracking-widest opacity-50">■ 事業内容</h3>
              <p className="text-navy font-medium">釣具用品の販売、アウトドア用品の販売</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-navy font-bold text-xs uppercase tracking-widest opacity-50">■ 営業時間</h3>
              <p className="text-navy font-medium">平日 10:00～17:00 <span className="text-[10px] opacity-60 ml-2">※土日祝日は休業</span></p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-navy/5">
            <h3 className="text-navy font-bold text-xs uppercase tracking-widest opacity-50 mb-4">■ 会社紹介</h3>
            <p className="text-navy/70 text-sm leading-relaxed max-w-4xl">
              当ショップは、高品質な釣具用品を中心に取り扱うオンラインショップです。
              厳選した商品をお客様へお届けしております。
              迅速かつ丁寧な対応を心がけ, 安心してご利用いただけるショップ運営を行っております。
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[16/9] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
                alt="Anglers Base"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-navy p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-display italic text-2xl mb-2">"品質こそが私たちの伝統です。"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-ocean" />
                <span className="text-ocean font-bold uppercase tracking-widest text-xs">Anglers Base</span>
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
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">
              最高のギアで <br />
              新しい体験を提供します
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              アングラーズベース釣具は単なる販売を超え、釣りを愛するすべての方々に信頼と楽しさをお届けしたいと考えています。 
              厳選された製品ラインナップと真心を込めたサービスを通じて、あなたのアウトドアライフをより豊かにします。
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-navy font-bold text-xl mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-ocean rounded-full" />
                  信頼経営
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  お客様が安心してショッピングをお楽しみいただけるよう、透明で正直な運営をお約束します。
                </p>
              </div>
              <div>
                <h3 className="text-navy font-bold text-xl mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-ocean rounded-full" />
                  品質優先
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  直接検証し厳選した高品質なフィッシングおよびアウトドア用品のみを取り扱っています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

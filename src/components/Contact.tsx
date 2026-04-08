import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              お問い合わせ
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-12 leading-tight">
              共に繋がり、 <br />
              成長しましょう
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center text-ocean">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-1">本社</h4>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      大韓民国ソウル特別市江南区<br />
                      プレミアムタワー 123
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center text-ocean">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-1">電話番号</h4>
                    <p className="text-navy/60 text-sm">+82 (0)2 1234 5678</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center text-ocean">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-1">メール</h4>
                    <p className="text-navy/60 text-sm">partnership@hjpremium.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center text-ocean">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-1">営業時間</h4>
                    <p className="text-navy/60 text-sm">月 - 金: 09:00 - 18:00</p>
                    <p className="text-navy/40 text-[10px] uppercase font-bold">土日祝日定休</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center text-ocean">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-1">グローバルサポート</h4>
                    <p className="text-navy/60 text-sm">英語、日本語、韓国語で対応可能</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-slate-100 min-h-[400px] shadow-inner"
          >
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-navy/20 mb-4 shadow-sm">
                <MapPin size={32} />
              </div>
              <h3 className="text-navy/40 font-bold uppercase tracking-widest text-sm mb-2">インタラクティブマップ</h3>
              <p className="text-navy/30 text-xs max-w-xs">
                Google Maps API 統合プレースホルダー。 <br />
                リアルタイムのロケーションデータがここに表示されます。
              </p>
            </div>
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

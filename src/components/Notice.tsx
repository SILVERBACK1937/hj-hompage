import { motion } from 'motion/react';
import { ShieldCheck, Truck, CreditCard, Info } from 'lucide-react';

export default function Notice() {
  return (
    <section id="notice" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Legal & Information
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            特定商取引法に基づく表記
          </h2>
          <div className="w-20 h-1 bg-ocean mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 1. Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-navy/5 border border-navy/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-ocean/10 rounded-2xl flex items-center justify-center text-ocean">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy">1. プライバシーポリシー</h3>
            </div>

            <div className="space-y-8 text-navy/70 text-sm leading-relaxed">
              <p className="font-medium text-navy">
                当ショップは、お客様の個人情報の重要性を認識し、適切に取り扱うことを社会的責務と考えております。
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                  ■ 個人情報の取得
                </h4>
                <p>
                  当ショップでは、ご注文・お問い合わせの際に、お名前、住所、電話番号、メールアドレス等の個人情報を取得する場合がございます。
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                  ■ 利用目的
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>商品の発送および関連するご連絡</li>
                  <li>お問い合わせ対応</li>
                  <li>サービス向上のための分析</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                  ■ 個人情報の管理
                </h4>
                <p>
                  お客様の個人情報は、適切に管理し、不正アクセス・紛失・漏洩等の防止に努めます。
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                  ■ 第三者への提供
                </h4>
                <p>
                  法令に基づく場合を除き、お客様の同意なく第三者に提供することはありません。
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                  ■ 開示・訂正・削除
                </h4>
                <p>
                  お客様ご本人からのご要望があった場合、速やかに対応いたします。
                </p>
              </div>

              <div className="pt-6 border-t border-navy/5">
                <h4 className="font-bold text-navy mb-2">■ お問い合わせ窓口</h4>
                <p className="flex items-center gap-2">
                  <span className="opacity-60">メール：</span>
                  <a href="mailto:qkrwodus2926@gmail.com" className="text-ocean font-bold hover:underline">
                    qkrwodus2926@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Shipping & Payment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Payment Section */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-navy/5 border border-navy/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-ocean/10 rounded-2xl flex items-center justify-center text-ocean">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-2xl font-bold text-navy">2. 配送・お支払いについて</h3>
              </div>

              <div className="space-y-6 text-navy/70 text-sm leading-relaxed">
                <div className="space-y-3">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                    ■ お支払い方法
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['クレジットカード', '銀行振込', 'コンビニ決済'].map(method => (
                      <span key={method} className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-navy/60 border border-navy/5">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                    ■ お支払い時期
                  </h4>
                  <p>ご注文確定時にお支払いが確定いたします。</p>
                </div>
              </div>
            </div>

            {/* Shipping Section */}
            <div className="bg-navy p-8 md:p-10 rounded-3xl shadow-xl shadow-navy/20 text-white/70">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-ocean">
                  <Truck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">配送について</h3>
              </div>

              <div className="space-y-6 text-sm leading-relaxed">
                <div className="space-y-3">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                    ■ 配送方法
                  </h4>
                  <p>ヤマト運輸、佐川急便、日本郵便などを利用いたします。</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                    ■ 配送期間
                  </h4>
                  <p>
                    ご注文確定後、通常3～7営業日以内に発送いたします。<br />
                    <span className="text-[10px] opacity-60">※在庫状況や配送状況により遅れる場合がございます。</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-ocean rounded-full" />
                    ■ 送料
                  </h4>
                  <p>
                    送料は地域・商品サイズにより異なります。<br />
                    詳細は商品ページ または 決済画面にてご確認ください。
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex gap-3">
                    <Info size={16} className="text-ocean flex-shrink-0 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-xs uppercase tracking-widest">■ 関税について</h4>
                      <p className="text-xs">
                        海外配送の場合、関税が発生する場合がございます。その際はお客様のご負担となりますのでご了承ください。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Info size={16} className="text-ocean flex-shrink-0 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-xs uppercase tracking-widest">■ 不在・再配達について</h4>
                      <p className="text-xs">
                        配送業者の規定に基づき対応いたします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

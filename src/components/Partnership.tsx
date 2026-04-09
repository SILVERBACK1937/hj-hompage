import { motion } from 'motion/react';
import React, { useState } from 'react';
import { PARTNERSHIP_STEPS } from '../constants';
import { CheckCircle2, Send } from 'lucide-react';

export default function Partnership() {
  const [formData, setFormData] = useState({
    businessType: 'retail',
    companyName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`[Partnership Inquiry] ${formData.companyName}`);
    const body = encodeURIComponent(
      `Business Type: ${formData.businessType}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:qkrwodus2926@gmail.com?subject=${subject}&body=${body}`;

    // Simulate submission UI state
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <section id="partnership" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ocean font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              ネットワークに参加してください
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">
              情熱を共有する <br />
              パートナーシップ
            </h2>
            <p className="text-navy/60 text-lg mb-12 max-w-md">
              私たちは卓越した釣り体験の提供に専念し、長期的な協力を大切にするパートナーを募集しています。
            </p>

            <div className="space-y-8">
              {PARTNERSHIP_STEPS.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-navy/5 flex items-center justify-center text-ocean font-black text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-navy/50 text-sm leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-navy/5 border border-navy/5"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">お問い合わせが正常に送信されました</h3>
                <p className="text-navy/60">
                  ご関心をお寄せいただきありがとうございます。 <br />
                  2〜3営業日以内に担当者よりご連絡いたします。
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3">
                    ビジネスタイプ
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'retail', label: '小売' },
                      { id: 'distribution', label: '流通' },
                      { id: 'collaboration', label: 'コラボレーション' },
                      { id: 'other', label: 'その他' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, businessType: type.id })}
                        className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all ${
                          formData.businessType === type.id
                            ? 'bg-navy text-white border-navy'
                            : 'bg-white text-navy/40 border-navy/10 hover:border-navy/30'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3">
                    会社名
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-navy/5 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all"
                    placeholder="会社名を入力してください"
                  />
                </div>

                <div>
                  <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-navy/5 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label className="block text-navy font-bold text-xs uppercase tracking-widest mb-3">
                    メッセージ / 提案
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-navy/5 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all resize-none"
                    placeholder="ビジネスの目標についてお聞かせください..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-navy text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-ocean transition-colors shadow-xl shadow-navy/10"
                >
                  お問い合わせを送信 <Send size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

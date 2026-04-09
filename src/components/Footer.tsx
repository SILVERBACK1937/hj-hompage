import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6">
      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                <span className="text-navy font-bold text-xl">H&J</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                PREMIUM SHOP ANGLERS BASE
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              伝統、革新、そしてプレミアムブランドとのパートナーシップを通じて、グローバルな釣り文化を リードします。
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-ocean hover:border-ocean transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">ナビゲーション</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-ocean transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">主要ブランド</h4>
            <ul className="space-y-4">
              {['Sunline', 'Shimano', 'Daiwa', 'Gamakatsu', 'Jackall'].map((brand) => (
                <li key={brand}>
                  <a href="#brands" className="text-white/60 text-sm hover:text-ocean transition-colors">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">ニュースレター</h4>
            <p className="text-white/50 text-sm mb-6">
              最新の業界動向とブランドアップデートを受け取るには、購読してください。
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-ocean font-bold text-xs uppercase tracking-widest px-2">
                購読
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
            © 2026 H&J Premium B2B. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#notice" className="text-white/30 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">
              特定商取引法
            </a>
            <a href="#" className="text-white/30 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-white/30 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

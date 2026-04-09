import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(15, 23, 42, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottom,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container-max px-6">
        {/* Top Row: Brand & Mobile Toggle */}
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl">H&J</span>
            </div>
            <span className={`font-display font-bold text-lg md:text-xl tracking-tighter ${isScrolled ? 'text-navy' : 'text-white'}`}>
              PREMIUM SHOP ANGLERS BASE
            </span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-navy' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-navy' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Bottom Row: Desktop Navigation */}
        <div className={`hidden md:flex items-center justify-center gap-8 pb-4 transition-all duration-300 ${isScrolled ? 'border-t border-navy/5 pt-4' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-ocean ${
                isScrolled ? 'text-navy/70' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:qkrwodus2926@gmail.com?subject=[Inquiry] H&J Premium Shop"
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
              isScrolled
                ? 'bg-navy text-white hover:bg-ocean'
                : 'bg-white text-navy hover:bg-ocean hover:text-white'
            }`}
          >
            お問い合わせ
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-navy/10 py-6 px-6"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-navy font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:qkrwodus2926@gmail.com?subject=[Partnership Inquiry] H&J Premium Shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-navy text-white px-6 py-3 rounded-lg text-center font-bold"
            >
              パートナーシップお問い合わせ
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

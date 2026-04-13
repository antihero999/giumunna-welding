import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-dark shadow-2xl shadow-black/60 border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-dark-card rounded overflow-hidden flex items-center justify-center shadow-lg shadow-black/40 border border-dark-border group-hover:border-brand/40 transition-colors">
              <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="text-cream font-heading font-bold text-sm tracking-wide uppercase">
                G.I Umunna Ogu
              </div>
              <div className="text-brand text-xs font-semibold tracking-widest uppercase">
                Ventures
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-muted hover:text-cream transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-light text-white font-semibold px-5 py-2.5 rounded text-sm transition-all duration-200 shadow-lg shadow-brand/20 hover:shadow-brand/40"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+2347065356471"
              className="inline-flex items-center gap-1.5 border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-5 py-2.5 rounded text-sm transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-cream p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-dark-surface border-t border-dark-border">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block text-muted hover:text-cream transition-colors py-3 font-medium border-b border-dark-border/50 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-brand text-white font-semibold px-5 py-3.5 rounded text-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Book via WhatsApp
              </a>
              <a
                href="tel:+2347065356471"
                className="flex items-center justify-center gap-2 border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-5 py-3.5 rounded text-center text-sm transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../lib/constants';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-dark-card rounded overflow-hidden flex items-center justify-center shadow-lg shadow-black/40 border border-dark-border">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-cream font-heading font-bold text-sm tracking-wide uppercase">
                  G.I Umunna Ogu
                </div>
                <div className="text-brand text-xs font-semibold tracking-widest uppercase">
                  Ventures
                </div>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Expert welding and fabrication — Nkwerre, Onitsha, Anambra State. Over 20 years of
              trusted craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted hover:text-cream transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-4 h-0.5 bg-brand/40 group-hover:bg-brand transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-muted text-sm">
                  Nkwerre, Onitsha, Anambra State, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-muted text-sm">
                  Mon – Fri, 8:00am – 6:00pm
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-cream text-sm transition-colors"
                >
                  07065356471
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © 2025 G.I Umunna Ogu Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-muted text-xs">
            <Link
              to="/privacy-policy"
              className="hover:text-brand transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="mx-1 opacity-40">·</span>
            <Link
              to="/terms-of-service"
              className="hover:text-brand transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

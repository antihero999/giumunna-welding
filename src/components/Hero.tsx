import { useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const stats = [
  { value: '40+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglinesRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => headingRef.current?.classList.add('visible'), 200),
      setTimeout(() => taglinesRef.current?.classList.add('visible'), 350),
      setTimeout(() => subRef.current?.classList.add('visible'), 500),
      setTimeout(() => btnsRef.current?.classList.add('visible'), 750),
      setTimeout(() => statsRef.current?.classList.add('visible'), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-20">
        <div className="max-w-4xl">

          {/* Company name — the dominant headline */}
          <h1
            ref={headingRef}
            className="fade-up font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-brand leading-none mb-4 tracking-tight"
          >
            G.I Umunna Ogu
            <br />
            <span className="text-cream">Ventures</span>
          </h1>

          {/* Taglines — immediately under the name */}
          <div ref={taglinesRef} className="fade-up mb-8 flex flex-col gap-2">
            <p className="text-2xl sm:text-4xl font-bold text-brand tracking-wide">
              Welding &amp; Metal Constructions
            </p>
            <p className="text-lg sm:text-xl font-medium text-cream/70 tracking-wide">
              Experts On Metal Fabrications.
            </p>
          </div>

          <div className="w-16 h-0.5 bg-brand mb-8 opacity-60" />

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-brand/40" />
            <span className="text-brand/70 font-semibold text-sm tracking-widest uppercase">
              Liberty Estate, Nkwelle · Est. 1982
            </span>
          </div>

          <p
            ref={subRef}
            className="fade-up text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            For over 40 years, G.I Umunna Ogu Ventures has delivered expert welding and metal
            fabrication to homes, businesses, and industries across Nkwelle and Anambra State.
            When quality matters, we are the name people trust.
          </p>

          <div ref={btnsRef} className="fade-up flex flex-wrap gap-4 mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-light text-white font-semibold px-7 py-4 rounded text-base transition-all duration-200 shadow-xl shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a
              href="#our-work"
              className="inline-flex items-center gap-2.5 border border-dark-border hover:border-brand/50 text-cream hover:text-brand font-semibold px-7 py-4 rounded text-base transition-all duration-200 bg-dark-surface/40 backdrop-blur-sm hover:-translate-y-0.5"
            >
              View Our Work
              <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="tel:+2347065356471"
              className="inline-flex items-center gap-2.5 border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-7 py-4 rounded text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div
            ref={statsRef}
            className="fade-in flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-dark-border/50"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-heading font-black text-3xl sm:text-4xl text-brand leading-none">
                  {value}
                </span>
                <span className="text-muted text-sm mt-1 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-brand/60" />
      </div>
    </section>
  );
}

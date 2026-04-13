import { useInView } from '../hooks/useInView';

const galleryImages = [
  {
    src: '/images/gate_1.jpg',
    alt: 'Large automatic compound gate',
    caption: 'Custom Compound Gate',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/gate_2.jpg',
    alt: 'Modern metal gate design',
    caption: 'Modern Entrance Gate',
    span: '',
  },
  {
    src: '/images/handrail.jpg',
    alt: 'Stainless steel handrails',
    caption: 'Stainless Handrails',
    span: '',
  },
  {
    src: '/images/gate_4.jpg',
    alt: 'Heavy duty security gate',
    caption: 'Security Gate System',
    span: '',
  },
  {
    src: '/images/gate_5.jpg',
    alt: 'Ornamental metal gate',
    caption: 'Ornamental Fabrication',
    span: '',
  },
  {
    src: '/images/welder_2.jpg',
    alt: 'Professional welder at work',
    caption: 'Precision Welding',
    span: '',
  },
];

export default function Gallery() {
  const ref = useInView();

  return (
    <section
      id="our-work"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-brand" />
            <span className="text-brand font-semibold text-sm tracking-widest uppercase fade-left">
              Portfolio
            </span>
          </div>
          <h2 className="fade-up font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-cream leading-none mb-4">
            Our recent work.
          </h2>
          <p className="fade-up delay-200 text-muted text-lg max-w-xl leading-relaxed">
            Every project shown here was built by hand, on site, by our team. No shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-64">
          {galleryImages.map(({ src, alt, caption, span }, i) => (
            <div
              key={i}
              className={`fade-up delay-${Math.min((i + 1) * 100, 600)} relative group overflow-hidden rounded-lg ${span}`}
              style={{ minHeight: '256px' }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-0.5 bg-brand" />
                  <span className="text-cream font-semibold text-sm">{caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

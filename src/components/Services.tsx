import { Shield, Wrench, Layers, Settings, Factory } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Layers,
    title: 'Structural Welding',
    description:
      'Gates, fences, railings, beams and load-bearing structures for residential and commercial builds. Precision work that meets every structural demand.',
  },
  {
    icon: Settings,
    title: 'Custom Fabrication',
    description:
      'Bespoke metal furniture, staircases, decorative pieces and industrial components made to your exact spec. If you can imagine it, we can build it.',
  },
  {
    icon: Shield,
    title: 'Burglar-Proof Doors & Windows',
    description:
      'Heavy-gauge steel security doors and window frames, precision welded with no gaps and no weak points. Your home, properly protected.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    description:
      'Fast, reliable fixes for broken gates, doors, equipment and metal structures. Fixed properly so you do not call us twice.',
  },
  {
    icon: Factory,
    title: 'Industrial & Factory Welding',
    description:
      'Machinery frames, equipment parts, industrial shelving and heavy-duty structures for factories and workshops. Built to handle real load.',
  },
];

export default function Services() {
  const ref = useInView();

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-brand" />
            <span className="text-brand font-semibold text-sm tracking-widest uppercase fade-left">
              What We Do
            </span>
          </div>
          <h2 className="fade-up font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-cream leading-none">
            Every job done right.
          </h2>
          <p className="fade-up delay-200 text-muted text-lg mt-5 max-w-2xl leading-relaxed">
            From compound gates to factory machinery, we apply the same standard to every project
            — clean welds, honest work, and structures that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`fade-up delay-${(i + 1) * 100} group bg-dark-surface border border-dark-border rounded-lg p-7 hover:border-brand/40 hover:bg-dark-card transition-all duration-300 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300 border border-brand/20">
                <Icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-heading font-bold text-xl text-cream mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

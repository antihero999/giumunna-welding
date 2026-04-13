import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote:
      'They built our compound gate from scratch — perfectly measured, clean welds, delivered ahead of schedule. We have already referred three neighbours.',
    author: 'Emeka Obi',
    location: 'Onitsha',
  },
  {
    quote:
      'Straightforward pricing, no hidden costs. The burglar-proof windows looked better than I expected. Highly recommend.',
    author: 'Chioma Eze',
    location: 'Nnewi',
  },
  {
    quote:
      'We use them for all our factory repairs. Fast, professional, fair pricing. They have never let us down.',
    author: 'Adaeze & Sons Hardware',
    location: 'Onitsha',
  },
];

export default function Testimonials() {
  const ref = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-brand" />
            <span className="text-brand font-semibold text-sm tracking-widest uppercase fade-in">
              Testimonials
            </span>
            <div className="w-10 h-0.5 bg-brand" />
          </div>
          <h2 className="fade-up font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-cream leading-none">
            What our clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, location }, i) => (
            <div
              key={author}
              className={`fade-up delay-${(i + 1) * 100} bg-dark-surface border border-dark-border rounded-lg p-7 hover:border-brand/30 transition-all duration-300 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-brand/25" />
              </div>
              <p className="text-muted leading-relaxed flex-1 text-sm italic mb-6">"{quote}"</p>
              <div className="pt-5 border-t border-dark-border">
                <div className="font-semibold text-cream text-sm">{author}</div>
                <div className="text-brand text-xs font-medium mt-0.5">{location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

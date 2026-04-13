import { MessageCircle, ClipboardList, Hammer, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_URL } from '../lib/constants';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Message us on WhatsApp',
    description:
      'Tell us what you need. Even a rough idea is fine. We respond quickly and ask the right questions.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'We assess the job',
    description:
      'We visit your site, take measurements, and give you an honest quote upfront. No guesswork, no surprises.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'We get to work',
    description:
      'Work starts on schedule. We keep you updated throughout. You always know where things stand.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'You approve',
    description:
      'We only hand over when you are fully satisfied. That is our standard, and we do not cut corners to meet it.',
  },
];

export default function HowItWorks() {
  const ref = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-brand" />
            <span className="text-brand font-semibold text-sm tracking-widest uppercase fade-in">
              The Process
            </span>
            <div className="w-10 h-0.5 bg-brand" />
          </div>
          <h2 className="fade-up font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-cream leading-none mb-5">
            Simple from start to finish.
          </h2>
          <p className="fade-up delay-200 text-muted text-lg max-w-xl mx-auto leading-relaxed">
            We keep things straightforward. No confusion, no delays, no excuses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ number, icon: Icon, title, description }, i) => (
            <div key={title} className={`fade-up delay-${(i + 1) * 100} relative`}>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand/30 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-dark border border-dark-border rounded-lg p-6 h-full hover:border-brand/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-brand/10 border border-brand/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <span className="font-heading font-black text-4xl text-dark-border leading-none">
                    {number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-cream mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up delay-500 text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded text-base transition-all duration-200 shadow-xl shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

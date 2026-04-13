import { Clock, Award, DollarSign, Truck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const badges = [
  { icon: Clock, label: 'Long Experience', sub: '20+ years in the craft' },
  { icon: Award, label: 'Quality Finish', sub: 'Clean welds, every time' },
  { icon: DollarSign, label: 'Honest Pricing', sub: 'No hidden costs' },
  { icon: Truck, label: 'On-Time Delivery', sub: 'We respect your schedule' },
];

export default function About() {
  const ref = useInView();

  return (
    <section
      id="about-us"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-left relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] max-w-md">
              <img
                src="/images/dad.jpg"
                alt="G.I Umunna Ogu — Master Welder"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand/5 border border-brand/20 rounded-lg hidden lg:block" />
            <div className="absolute top-6 -left-6 w-24 h-24 bg-brand rounded-lg flex flex-col items-center justify-center shadow-xl shadow-brand/20 hidden lg:flex">
              <span className="font-heading font-black text-3xl text-white leading-none">20+</span>
              <span className="text-white/80 text-xs font-medium mt-1">Years</span>
            </div>
          </div>

          <div className="fade-right">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-0.5 bg-brand" />
              <span className="text-brand font-semibold text-sm tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-cream leading-none mb-8">
              Who we are.
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                G.I Umunna Ogu Ventures is a family-owned welding and metal fabrication business
                based in Liberty Estate, Nkwelle, Oyi Local Government Area, Anambra State, Nigeria. For more than two decades, we have been
                building the structures that hold homes together, protect families, and keep
                businesses running — one quality weld at a time.
              </p>
              <p>
                We are a family business in every sense of the word. The values we bring to work
                — honesty, pride in our craft, and respect for our customers — are the same values
                we carry at home.
              </p>
              <p className="text-cream font-medium border-l-2 border-brand pl-5 italic">
                "When you hire us, you are not just hiring a welder. You are working with people
                who take your project personally."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {badges.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-dark border border-dark-border rounded-lg p-4 hover:border-brand/30 transition-colors duration-300"
                >
                  <div className="w-9 h-9 bg-brand/10 rounded flex items-center justify-center flex-shrink-0 border border-brand/20">
                    <Icon className="w-4.5 h-4.5 text-brand" />
                  </div>
                  <div>
                    <div className="text-cream font-semibold text-sm">{label}</div>
                    <div className="text-muted text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

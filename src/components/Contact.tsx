import { useState, FormEvent } from 'react';
import { MessageCircle, CheckCircle, Send, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_URL, SERVICES } from '../lib/constants';

const FORMSPREE_ID = 'xaqawpgw';

export default function Contact() {
  const ref = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', phone: '', service: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-dark border border-dark-border rounded px-4 py-3.5 text-cream text-sm placeholder-muted/50 focus:outline-none focus:border-brand/50 transition-colors duration-200';

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="fade-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-0.5 bg-brand" />
              <span className="text-brand font-semibold text-sm tracking-widest uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-cream leading-none mb-6">
              Ready to get started?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              The easiest way to reach us is on WhatsApp. Send us a message and we will respond
              quickly. We are always ready to talk about your next project.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold px-8 py-5 rounded-lg text-lg transition-all duration-200 shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 w-full sm:w-auto justify-center sm:justify-start"
            >
              <MessageCircle className="w-6 h-6" />
              Message Us on WhatsApp
            </a>

            <a
              href="tel:+2347065356471"
              className="inline-flex items-center gap-3 border border-brand text-brand hover:bg-brand hover:text-white font-bold px-8 py-5 rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Phone className="w-6 h-6" />
              Or Call Us Directly
            </a>

            <div className="mt-10 pt-10 border-t border-dark-border space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="text-cream font-medium text-sm">Location</div>
                  <div className="text-muted text-sm">Liberty Estate, Nkwelle, Oyi Local Government Area, Anambra State, Nigeria</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="text-cream font-medium text-sm">Phone / WhatsApp</div>
                  <div className="text-muted text-sm">07065356471</div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-right">
            <div className="bg-dark border border-dark-border rounded-lg p-7 sm:p-9">
              <h3 className="font-heading font-bold text-2xl text-cream mb-6">
                Or fill the form below
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-cream mb-2">Message Sent!</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Thank you! We will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded p-3 text-red-400 text-xs text-center">
                      Something went wrong. Please try WhatsApp instead.
                    </div>
                  )}
                  <div>
                    <label className="block text-muted text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 07012345678"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-dark-card">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-muted text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your project or job..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand hover:bg-brand-light text-white font-semibold px-6 py-4 rounded flex items-center justify-center gap-2.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

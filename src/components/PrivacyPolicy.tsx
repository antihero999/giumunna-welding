import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="bg-dark min-h-screen font-body">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand hover:text-brand-light text-sm font-semibold transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>

      <main className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 py-10 pb-24">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-brand" />
            <span className="text-brand font-semibold text-sm tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-cream leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">Effective date: April 2025</p>
        </div>

        <div className="space-y-10 text-muted leading-relaxed">

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              1. Who We Are
            </h2>
            <p>
              This privacy policy applies to <span className="text-cream font-medium">G.I Umunna Ogu Ventures</span>,
              a welding and metal fabrication business located at Nkwerre, Onitsha, Anambra State, Nigeria.
              We operate this website to provide information about our services and allow potential customers
              to reach us.
            </p>
            <p className="mt-3">
              If you have any questions about this policy, you can contact us via WhatsApp at{' '}
              <span className="text-brand font-medium">07065356471</span>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              2. What Information We Collect
            </h2>
            <p>
              We only collect personal information when you voluntarily submit our contact form.
              The information we collect is limited to:
            </p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                'Your full name',
                'Your phone number',
                'The service you are enquiring about',
                'A message describing your project or job',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not use cookies for tracking, and we do not collect any information automatically
              through analytics tools or tracking pixels.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              3. How We Use Your Information
            </h2>
            <p>
              The information you submit through our contact form is used solely to respond to your booking
              enquiry. Specifically, we may use it to:
            </p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                'Contact you via phone or WhatsApp to discuss your project',
                'Provide a quote or schedule a site assessment',
                'Follow up on a previous enquiry you made',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We will not contact you for marketing purposes without your consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              4. How We Share Your Information
            </h2>
            <p>
              <span className="text-cream font-medium">We do not sell, rent, or share your personal information with any third parties.</span>{' '}
              Your contact details are used only internally to respond to your enquiry.
            </p>
            <p className="mt-3">
              Our contact form is powered by{' '}
              <span className="text-cream font-medium">Formspree</span>, a third-party form submission
              service. When you submit the form, your data is transmitted securely to Formspree before
              being forwarded to us. Formspree processes this data in accordance with their own privacy
              policy, available at{' '}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-light underline underline-offset-2 transition-colors"
              >
                formspree.io/legal/privacy-policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              5. Data Retention
            </h2>
            <p>
              We retain your contact information only for as long as is necessary to handle your enquiry
              and any follow-up work that results from it. If you would like your information removed,
              please contact us via WhatsApp at <span className="text-brand font-medium">07065356471</span> and
              we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                'Request access to the personal information we hold about you',
                'Request that we correct or update inaccurate information',
                'Request that we delete your information',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us via WhatsApp at{' '}
              <span className="text-brand font-medium">07065356471</span>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be published on this
              page with a revised effective date. We encourage you to review this page periodically.
            </p>
          </section>

          <div className="pt-6 border-t border-dark-border">
            <p className="text-sm">
              Questions about this Privacy Policy? Contact us on WhatsApp:{' '}
              <span className="text-brand font-medium">07065356471</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

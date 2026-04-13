import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-muted text-sm">Effective date: April 2025</p>
        </div>

        <div className="space-y-10 text-muted leading-relaxed">

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website of{' '}
              <span className="text-cream font-medium">G.I Umunna Ogu Ventures</span>, you agree to
              be bound by these Terms of Service. If you do not agree to these terms, please do not
              use this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              2. Use of This Website
            </h2>
            <p>
              This website is provided for informational purposes — to showcase our services and allow
              customers to contact us. You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of others or restrict their use of the site.
            </p>
            <p className="mt-3">
              You may not attempt to gain unauthorised access to any part of this website, its servers,
              or any related systems or networks.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              3. Services & Site Assessments
            </h2>
            <p>
              All welding and metal fabrication services offered by G.I Umunna Ogu Ventures are subject
              to a <span className="text-cream font-medium">physical site assessment</span> before any
              work commences. Submitting an enquiry through this website or via WhatsApp does not
              constitute a binding contract for services.
            </p>
            <p className="mt-3">
              We reserve the right to decline any job at our sole discretion, including but not limited
              to situations where the scope of work is outside our capabilities, the site is inaccessible,
              or safety concerns are present.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              4. Quotes and Pricing
            </h2>
            <p>
              Any quotes, estimates, or pricing information communicated through this website, WhatsApp,
              or by phone are <span className="text-cream font-medium">estimates only</span> and are
              not binding until confirmed in writing by an authorised representative of G.I Umunna Ogu
              Ventures.
            </p>
            <p className="mt-3">
              Final pricing may vary following a physical site inspection. Factors including material
              costs, site conditions, and complexity of work may affect the final quote.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, images, logos, photographs of our work, and
              design — is the property of{' '}
              <span className="text-cream font-medium">G.I Umunna Ogu Ventures</span> and is protected
              under applicable copyright and intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, or use any content from this site without prior written
              permission from G.I Umunna Ogu Ventures.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              6. Limitation of Liability
            </h2>
            <p>
              G.I Umunna Ogu Ventures makes no warranties, express or implied, regarding the accuracy or
              completeness of the information on this website. We are not liable for any loss or damage
              arising from your reliance on information provided on this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              7. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the{' '}
              <span className="text-cream font-medium">Federal Republic of Nigeria</span>. Any disputes
              arising from the use of this website or our services shall be subject to the exclusive
              jurisdiction of the courts of Anambra State, Nigeria.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-cream mb-3 border-l-2 border-brand pl-4">
              8. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update or amend these Terms of Service at any time. Changes will
              be effective immediately upon publication on this page. Continued use of the website after
              any changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          <div className="pt-6 border-t border-dark-border">
            <p className="text-sm">
              Questions about these Terms? Contact us on WhatsApp:{' '}
              <span className="text-brand font-medium">07065356471</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

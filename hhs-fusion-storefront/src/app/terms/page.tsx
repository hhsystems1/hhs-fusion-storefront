import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-hhs-slate-50 min-h-screen">
      <section className="bg-hhs-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>
          <p className="text-lg opacity-90">
            Please read these terms carefully before using the Helping Hands Systems storefront.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-hhs-slate-200 prose prose-slate max-w-none">
            <div className="text-sm text-hhs-slate-900 opacity-60 mb-8 italic">
              Effective Date: September 04, 2026
            </div>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing or using the Helping Hands Systems website and purchasing our products, 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please refrain from using our services.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">2. Product Use & Safety</h2>
            <p className="mb-6 leading-relaxed">
              Our products are designed for professional engineering use. It is the responsibility 
              of the buyer to ensure that products are installed and operated by qualified personnel 
              in accordance with the provided technical manuals. Helping Hands Systems is not 
              liable for damages resulting from improper installation or misuse.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">3. Payments & Billing</h2>
            <p className="mb-6 leading-relaxed">
              All prices are listed in USD. We reserve the right to change prices at any time. 
              Payments are processed securely via our third-party payment providers. You agree 
              to provide current, complete, and accurate purchase and account information.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">4. Shipping & Delivery</h2>
            <p className="mb-6 leading-relaxed">
              Shipping dates are estimates and not guarantees. Risk of loss and title for 
              products pass to you upon delivery to the carrier. We are not responsible for 
              delays caused by customs or courier issues beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">5. Warranty & Returns</h2>
            <p className="mb-6 leading-relaxed">
              Our products carry a limited manufacturer's warranty. Return requests must be 
              initiated within 30 days of receipt and require original packaging and proof 
              of purchase. Custom-engineered solutions are non-refundable unless a defect 
              is verified by our technical team.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">6. Limitation of Liability</h2>
            <p className="mb-6 leading-relaxed">
              To the maximum extent permitted by law, Helping Hands Systems shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, 
              including loss of profits, data, or business opportunities.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">7. Governing Law</h2>
            <p className="mb-6 leading-relaxed">
              These terms are governed by the laws of the jurisdiction in which Helping Hands 
              Systems is registered, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">8. Contact Information</h2>
            <p className="mb-6 leading-relaxed">
              For any questions regarding these terms, please contact us via our <a href="/support" className="text-hhs-blue font-medium hover:underline">Support Center</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

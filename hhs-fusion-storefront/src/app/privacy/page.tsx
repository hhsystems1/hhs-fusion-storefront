import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-hhs-slate-50 min-h-screen">
      <section className="bg-hhs-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-lg opacity-90">
            Your privacy is paramount. Learn how Helping Hands Systems collects, uses, and protects your data.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-hhs-slate-200 prose prose-slate max-w-none">
            <div className="text-sm text-hhs-slate-900 opacity-60 mb-8 italic">
              Last Updated: September 04, 2026
            </div>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">1. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">
              Helping Hands Systems collects information that you provide directly to us, including your name, 
              email address, shipping address, and payment information when you make a purchase or contact 
              our support team. We also automatically collect certain technical information through cookies 
              and similar technologies to improve your browsing experience.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">2. How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 leading-relaxed">
              <li>Process and fulfill your orders.</li>
              <li>Provide customer support and technical assistance.</li>
              <li>Communicate product updates and promotional offers.</li>
              <li>Improve our website functionality and user experience.</li>
              <li>Comply with legal obligations and prevent fraudulent activity.</li>
            </ul>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">3. Data Protection</h2>
            <p className="mb-6 leading-relaxed">
              We implement industry-standard security measures, including encryption and secure server 
              environments, to protect your personal information from unauthorized access, alteration, 
              or destruction.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">4. Third-Party Sharing</h2>
            <p className="mb-6 leading-relaxed">
              We do not sell your personal data. We only share information with trusted third-party 
              service providers (e.g., payment processors, shipping carriers) to the extent necessary 
              to complete your transactions or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">5. Your Rights</h2>
            <p className="mb-6 leading-relaxed">
              Depending on your jurisdiction, you may have the right to access, correct, or delete 
              the personal information we hold about you. To exercise these rights, please contact 
              us through our support page.
            </p>

            <h2 className="text-2xl font-bold text-hhs-blue mb-4">6. Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please reach out to our 
              Data Protection Office via the <a href="/support" className="text-hhs-blue font-medium hover:underline">Support Center</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-hhs-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-hhs-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Engineering the Future of <span className="text-hhs-accent">Precision</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Helping Hands Systems is a leader in high-performance technology and premium engineering solutions, 
            dedicated to delivering excellence through innovation and reliability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hhs-blue mb-6">Our Mission</h2>
              <p className="text-hhs-slate-900 text-lg leading-relaxed mb-4">
                At Helping Hands Systems, we bridge the gap between complex industrial needs and cutting-edge 
                technological capabilities. Our focus is on creating scalable, robust, and efficient systems 
                that empower our clients to achieve unprecedented levels of productivity.
              </p>
              <p className="text-hhs-slate-900 text-lg leading-relaxed">
                From precision components to full-scale systems integration, we apply rigorous engineering 
                standards to every project, ensuring that "premium" isn't just a label, but a performance guarantee.
              </p>
            </div>
            <div className="bg-hhs-blue rounded-2xl p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 border border-white/20 rounded-lg">
                  <div className="text-3xl font-bold text-hhs-accent mb-2">15+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
                <div className="text-center p-4 border border-white/20 rounded-lg">
                  <div className="text-3xl font-bold text-hhs-accent mb-2">500+</div>
                  <div className="text-sm opacity-80">Projects Delivered</div>
                </div>
                <div className="text-center p-4 border border-white/20 rounded-lg">
                  <div className="text-3xl font-bold text-hhs-accent mb-2">100%</div>
                  <div className="text-sm opacity-80">Quality Assurance</div>
                </div>
                <div className="text-center p-4 border border-white/20 rounded-lg">
                  <div className="text-3xl font-bold text-hhs-accent mb-2">24/7</div>
                  <div className="text-sm opacity-80">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hhs-blue mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-hhs-slate-200 hover:border-hhs-blue transition-colors group">
              <div className="w-12 h-12 bg-hhs-blue text-white rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-hhs-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-hhs-slate-900">Uncompromising Quality</h3>
              <p className="text-hhs-slate-900 opacity-70">
                We adhere to the strictest industry standards, ensuring every product we ship meets 
                the highest benchmarks of performance and durability.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-hhs-slate-200 hover:border-hhs-blue transition-colors group">
              <div className="w-12 h-12 bg-hhs-blue text-white rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-hhs-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-hhs-slate-900">Innovative Spirit</h3>
              <p className="text-hhs-slate-900 opacity-70">
                Innovation is our engine. We constantly explore new materials and methodologies 
                to provide our clients with a competitive edge.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-hhs-slate-200 hover:border-hhs-blue transition-colors group">
              <div className="w-12 h-12 bg-hhs-blue text-white rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-hhs-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-hhs-slate-900">Client-Centric Approach</h3>
              <p className="text-hhs-slate-900 opacity-70">
                Your success is our success. We work closely with our partners to tailor 
                solutions that solve real-world problems efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

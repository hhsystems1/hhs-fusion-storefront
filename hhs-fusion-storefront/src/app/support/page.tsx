'use client';

import React, { useState } from 'react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real app, we would send this to an API route
    console.log('Form submitted:', formData);
    setStatus('success');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <div className="bg-hhs-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-hhs-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Technical <span className="text-hhs-accent">Support</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Our expert engineering team is here to help you optimize your systems and ensure peak performance.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-hhs-slate-200 text-center">
              <div className="w-12 h-12 bg-hhs-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C17.832 18.477 16.246 18 14.5 18s-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-hhs-blue mb-3">Knowledge Base</h3>
              <p className="text-hhs-slate-900 opacity-70">
                Access our comprehensive library of technical manuals and installation guides.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-hhs-slate-200 text-center">
              <div className="w-12 h-12 bg-hhs-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-hhs-blue mb-3">Direct Chat</h3>
              <p className="text-hhs-slate-900 opacity-70">
                Connect with a technical specialist for real-time troubleshooting and guidance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-hhs-slate-200 text-center">
              <div className="w-12 h-12 bg-hhs-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-hhs-blue mb-3">Priority Email</h3>
              <p className="text-hhs-slate-900 opacity-70">
                Submit a detailed request for complex engineering queries and system audits.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-hhs-slate-200">
            <div className="bg-hhs-blue p-8 text-center text-white">
              <h2 className="text-2xl font-bold">Contact Support</h2>
              <p className="opacity-80 mt-2">Fill out the form below and our team will respond within 24 hours.</p>
            </div>
            
            <div className="p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-hhs-slate-900 mb-2">Request Submitted</h3>
                  <p className="text-hhs-slate-900 opacity-70 mb-8">
                    Thank you for reaching out. A member of our technical team is reviewing your request.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="bg-hhs-blue text-white px-6 py-2 rounded-md hover:bg-hhs-blue-dark transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-hhs-slate-900">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-2 rounded-md border border-hhs-slate-200 focus:ring-2 focus:ring-hhs-blue focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-hhs-slate-900">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-2 rounded-md border border-hhs-slate-200 focus:ring-2 focus:ring-hhs-blue focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-hhs-slate-900">Subject</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 rounded-md border border-hhs-slate-200 focus:ring-2 focus:ring-hhs-blue focus:border-transparent outline-none transition-all"
                      placeholder="e.g., Installation Query, Technical Malfunction"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-hhs-slate-900">Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-hhs-slate-200 focus:ring-2 focus:ring-hhs-blue focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please describe your issue in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-hhs-blue text-white py-3 rounded-md font-bold hover:bg-hhs-blue-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.352 2.223 0 11.648 0 19l66-8.5c0 0 7.245-2.5 11.25-8.5z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

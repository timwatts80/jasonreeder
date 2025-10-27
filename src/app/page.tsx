'use client';

import { useState } from 'react';
import Hero from '@/components/Hero'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import FundingForm from '@/components/FundingForm'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle'); // Reset status
    
    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      let data;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // Handle non-JSON responses
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned an unexpected response');
      }

      if (response.ok) {
        setSubmitStatus('success');
        setMessage(data.message || 'Successfully subscribed to newsletter!');
        setEmail('');
      } else {
        setSubmitStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Section 1: What Makes Us Different */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
              What Makes Us Different
            </h2>
            <h3 className="mb-12 text-2xl" style={{ color: 'var(--color-primary)' }}>
              Integrity. Communication. Results.
            </h3>
            <p className="text-lg mb-12 text-gray-600 leading-relaxed">
              We believe real estate investing should be simple, structured, and transparent.
              That means every deal we take on is guided by three non-negotiables:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--color-accent)" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                    <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                    <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                </div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Clarity</h4>
                <p className="text-gray-600">
                  You&apos;ll always know where your investment stands, with consistent updates and accessible reporting.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--color-accent)" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Speed</h4>
                <p className="text-gray-600">
                  Fast, decisive action without cutting corners. We respect your time and capital.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--color-accent)" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Partnership</h4>
                <p className="text-gray-600">
                  Real relationships, not transactions. You&apos;re not just investing in a property — you&apos;re partnering with a person.
                </p>
              </div>
            </div>
            
            <Link 
              href="/approach"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Explore Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Our Focus */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                Our Focus
              </h2>
              <h3 className="mb-8 text-2xl" style={{ color: 'var(--color-primary)' }}>
                Multifamily Syndication. Value-Add Opportunities. Real Returns.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We target properties with strong fundamentals, measurable value-add potential, and clear growth paths.
                Our mission: help investors grow wealth through well-researched, well-managed multifamily projects in Utah and expanding markets across the Midwest.
              </p>
            </div>
            
            <div className="bg-[var(--color-bg)] p-8 rounded-lg mb-12">
              <h4 className="mb-6 text-xl" style={{ color: 'var(--color-primary)' }}>Key strengths:</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                  20+ years of structured project management and partnership experience
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                  Clear communication and investor-first transparency
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                  Data-driven market research and disciplined due diligence
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Link 
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                View Current Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Who We Partner With */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container-custom">
          <div className="">
            <h2 className="mb-12 text-center" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
              Who We Partner With
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="mb-6 text-xl" style={{ color: 'var(--color-primary)' }}>For GPs</h4>
                <p className="text-gray-600 leading-relaxed">
                  Need a reliable co-GP who can act fast and manage efficiently? We help drive deals from underwriting to close with clarity and accountability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="mb-6 text-xl" style={{ color: 'var(--color-primary)' }}>For LPs</h4>
                <p className="text-gray-600 leading-relaxed">
                  Seeking stable returns through passive real estate investments? We bring transparency, reporting, and performance-focused partnership.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/partner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                Let&apos;s Connect About Your Goals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                How It Works
              </h2>
              <h3 className="text-2xl" style={{ color: 'var(--color-primary)' }}>
                A Clear, 3-Step Partnership Process
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  1
                </div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Connect</h4>
                <p className="text-gray-600">
                  Book a quick call to discuss your investment goals and partnership objectives.
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  2
                </div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Review</h4>
                <p className="text-gray-600">
                  We analyze the opportunity together and align on partnership structure and terms.
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  3
                </div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Invest & Execute</h4>
                <p className="text-gray-600">
                  Once terms are set, we move fast with clear communication throughout execution.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/book-call"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Partners Trust Jason Reeder */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-16" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
              Why Partners Trust Jason Reeder
            </h2>
            
            {/* Trust Indicators */}
            <div className="flex justify-center mb-16 px-4">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-600 w-full max-w-sm md:max-w-2xl">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-lg">Successful Partnerships</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-lg">100% Transparent Process</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-lg">Proven ROI Track Record</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-lg">5+ Investor Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Testimonials Carousel */}
            <TestimonialsCarousel />
            
            <div className="mt-12">
              <Link 
                href="/partner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                Partner With Jason
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Form Section */}
      <FundingForm />

      {/* Section 6: Stay Informed */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
              Stay Informed
            </h2>
            <h3 className="mb-8 text-2xl" style={{ color: 'var(--color-primary)' }}>
              Invest with Confidence. Stay Connected.
            </h3>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Join our investor list to receive market insights, deal alerts, and progress reports — all written in plain language.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent disabled:opacity-50"
                style={{ fontFamily: 'var(--font-body)' }}
                key="newsletter-email"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500'
                }}
              >
                {isSubmitting ? 'Subscribing...' : 'Join Our Investor List'}
              </button>
            </form>
            
            {/* Status Messages */}
            {submitStatus !== 'idle' && (
              <div className={`mt-4 p-4 rounded-lg max-w-lg mx-auto ${
                submitStatus === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <p className="text-sm font-medium">{message}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

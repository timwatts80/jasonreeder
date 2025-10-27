'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PartnerForm() {
  const searchParams = useSearchParams();
  const [partnershipType, setPartnershipType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investmentExperience: '',
    investmentAmount: '',
    timeframe: '',
    partnershipType: '',
    message: ''
  });

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam === 'gp' || typeParam === 'lp') {
      setPartnershipType(typeParam);
      setFormData(prev => ({ ...prev, partnershipType: typeParam }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          investmentExperience: '',
          investmentAmount: '',
          timeframe: '',
          partnershipType: partnershipType,
          message: ''
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPageTitle = () => {
    if (partnershipType === 'gp') return 'General Partner Application';
    if (partnershipType === 'lp') return 'Limited Partner Investment';
    return 'Partnership Inquiry';
  };

  const getPageDescription = () => {
    if (partnershipType === 'gp') {
      return 'Ready to co-sponsor deals and take an active role in multifamily investments? Let\'s discuss how we can work together as general partners.';
    }
    if (partnershipType === 'lp') {
      return 'Interested in passive real estate investment opportunities? Explore our limited partner investment options for stable returns.';
    }
    return 'Whether you\'re interested in active partnership or passive investment, let\'s explore how we can work together.';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white" style={{ fontSize: 'var(--font-size-h1)' }}>
              {getPageTitle()}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {getPageDescription()}
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Type Selection (if no type specified) */}
      {!partnershipType && (
        <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                Choose Your Partnership Type
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* GP Option */}
                <div 
                  className="rounded-lg p-8 border-2 cursor-pointer transition-all duration-150 hover:shadow-xl hover:scale-[1.02] hover:border-opacity-80 group"
                  style={{ 
                    borderColor: partnershipType === 'gp' ? 'var(--color-accent)' : '#d1d5db',
                    backgroundColor: partnershipType === 'gp' ? 'var(--color-primary)' : 'white',
                    boxShadow: partnershipType === 'gp' ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    if (partnershipType !== 'gp') {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      // Update radio button on hover
                      const radioButton = e.currentTarget.querySelector('.radio-button') as HTMLElement;
                      if (radioButton) {
                        radioButton.style.backgroundColor = 'var(--color-accent)';
                        radioButton.style.borderColor = 'var(--color-accent)';
                      }
                      // Update click to select button on hover
                      const clickButton = e.currentTarget.querySelector('.click-select-button') as HTMLElement;
                      if (clickButton) {
                        clickButton.style.backgroundColor = 'var(--color-accent)';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (partnershipType !== 'gp') {
                      e.currentTarget.style.backgroundColor = 'white';
                      // Reset radio button on mouse leave
                      const radioButton = e.currentTarget.querySelector('.radio-button') as HTMLElement;
                      if (radioButton) {
                        radioButton.style.backgroundColor = 'transparent';
                        radioButton.style.borderColor = '#d1d5db';
                      }
                      // Reset click to select button on mouse leave
                      const clickButton = e.currentTarget.querySelector('.click-select-button') as HTMLElement;
                      if (clickButton) {
                        clickButton.style.backgroundColor = 'transparent';
                      }
                    }
                  }}
                  onClick={() => {
                    setPartnershipType('gp');
                    setFormData(prev => ({ ...prev, partnershipType: 'gp' }));
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold transition-colors duration-150 ${
                      partnershipType === 'gp' 
                        ? 'text-white' 
                        : 'text-gray-900 group-hover:text-white'
                    }`}>
                      General Partner (GP)
                    </h3>
                    <div 
                      className="radio-button w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150 hover:brightness-90"
                      style={{
                        borderColor: partnershipType === 'gp' ? 'var(--color-accent)' : '#d1d5db',
                        backgroundColor: partnershipType === 'gp' ? 'var(--color-accent)' : 'transparent'
                      }}
                    >
                      {(partnershipType === 'gp') && (
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {/* Hover state checkmark for unselected */}
                      <svg className={`w-3 h-3 text-gray-900 transition-opacity duration-150 absolute ${
                        partnershipType === 'gp' ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className={`mb-4 transition-colors duration-150 ${
                    partnershipType === 'gp' 
                      ? 'text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-300'
                  }`}>
                    Active role in deal sourcing, due diligence, and property management
                  </p>
                  <ul className={`space-y-2 text-sm transition-colors duration-150 ${
                    partnershipType === 'gp' 
                      ? 'text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-300'
                  }`}>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: partnershipType === 'gp' ? 'var(--color-accent)' : 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Higher profit share potential
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: partnershipType === 'gp' ? 'var(--color-accent)' : 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Direct involvement in operations
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: partnershipType === 'gp' ? 'var(--color-accent)' : 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Shared responsibility and liability
                    </li>
                  </ul>
                  <div className="mt-6">
                    <div className={`click-select-button w-full text-center py-3 px-4 rounded-lg transition-all duration-150 hover:brightness-90 ${
                      partnershipType === 'gp' 
                        ? 'bg-transparent' 
                        : 'bg-transparent'
                    }`}
                    style={{
                      backgroundColor: partnershipType === 'gp' ? 'var(--color-accent)' : 'transparent'
                    }}>
                      <span className={`text-sm font-medium transition-colors duration-150 ${
                        partnershipType === 'gp' 
                          ? 'text-gray-900' 
                          : 'text-gray-500 group-hover:text-gray-900'
                      }`}>
                        Click to select →
                      </span>
                    </div>
                  </div>
                </div>

                {/* LP Option */}
                <div 
                  className="rounded-lg p-8 border-2 cursor-pointer transition-all duration-150 hover:shadow-xl hover:scale-[1.02] hover:border-opacity-80 group"
                  style={{ 
                    borderColor: partnershipType === 'lp' ? 'var(--color-accent)' : '#d1d5db',
                    backgroundColor: partnershipType === 'lp' ? 'var(--color-primary)' : 'white',
                    boxShadow: partnershipType === 'lp' ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    if (partnershipType !== 'lp') {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      // Update radio button on hover
                      const radioButton = e.currentTarget.querySelector('.radio-button') as HTMLElement;
                      if (radioButton) {
                        radioButton.style.backgroundColor = 'var(--color-accent)';
                        radioButton.style.borderColor = 'var(--color-accent)';
                      }
                      // Update click to select button on hover
                      const clickButton = e.currentTarget.querySelector('.click-select-button') as HTMLElement;
                      if (clickButton) {
                        clickButton.style.backgroundColor = 'var(--color-accent)';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (partnershipType !== 'lp') {
                      e.currentTarget.style.backgroundColor = 'white';
                      // Reset radio button on mouse leave
                      const radioButton = e.currentTarget.querySelector('.radio-button') as HTMLElement;
                      if (radioButton) {
                        radioButton.style.backgroundColor = 'transparent';
                        radioButton.style.borderColor = '#d1d5db';
                      }
                      // Reset click to select button on mouse leave
                      const clickButton = e.currentTarget.querySelector('.click-select-button') as HTMLElement;
                      if (clickButton) {
                        clickButton.style.backgroundColor = 'transparent';
                      }
                    }
                  }}
                  onClick={() => {
                    setPartnershipType('lp');
                    setFormData(prev => ({ ...prev, partnershipType: 'lp' }));
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold transition-colors duration-150 ${
                      partnershipType === 'lp' 
                        ? 'text-white' 
                        : 'text-gray-900 group-hover:text-white'
                    }`}>
                      Limited Partner (LP)
                    </h3>
                    <div 
                      className="radio-button w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150 hover:brightness-90"
                      style={{
                        borderColor: partnershipType === 'lp' ? 'var(--color-accent)' : '#d1d5db',
                        backgroundColor: partnershipType === 'lp' ? 'var(--color-accent)' : 'transparent'
                      }}
                    >
                      {(partnershipType === 'lp') && (
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {/* Hover state checkmark for unselected */}
                      <svg className={`w-3 h-3 text-gray-900 transition-opacity duration-150 absolute ${
                        partnershipType === 'lp' ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className={`mb-4 transition-colors duration-150 ${
                    partnershipType === 'lp' 
                      ? 'text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-300'
                  }`}>
                    Passive investment option for stable real estate returns
                  </p>
                  <ul className={`space-y-2 text-sm transition-colors duration-150 ${
                    partnershipType === 'lp' 
                      ? 'text-gray-300' 
                      : 'text-gray-600 group-hover:text-gray-300'
                  }`}>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: partnershipType === 'lp' ? 'var(--color-accent)' : 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Passive income generation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: partnershipType === 'lp' ? 'var(--color-accent)' : 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Limited liability exposure
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: partnershipType === 'lp' ? 'var(--color-accent)' : 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      No operational responsibilities
                    </li>
                  </ul>
                  <div className="mt-6">
                    <div className={`click-select-button w-full text-center py-3 px-4 rounded-lg transition-all duration-150 hover:brightness-90 ${
                      partnershipType === 'lp' 
                        ? 'bg-transparent' 
                        : 'bg-transparent'
                    }`}
                    style={{
                      backgroundColor: partnershipType === 'lp' ? 'var(--color-accent)' : 'transparent'
                    }}>
                      <span className={`text-sm font-medium transition-colors duration-150 ${
                        partnershipType === 'lp' 
                          ? 'text-gray-900' 
                          : 'text-gray-500 group-hover:text-gray-900'
                      }`}>
                        Click to select →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partnership Form */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="mb-4" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                  Let&apos;s Start the Conversation
                </h2>
                <p className="text-gray-600">
                  Tell us about your investment goals and we&apos;ll be in touch within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{ 
                      '--tw-ring-color': 'var(--color-accent)'
                    } as React.CSSProperties}
                  />
                </div>

                {/* Partnership Type (if not pre-selected) */}
                {!partnershipType && (
                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      Partnership Interest *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      required
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    >
                      <option value="">Select Partnership Type</option>
                      <option value="gp">General Partner (GP) - Active Role</option>
                      <option value="lp">Limited Partner (LP) - Passive Investment</option>
                      <option value="both">Interested in Both Options</option>
                    </select>
                  </div>
                )}

                {/* Investment Experience */}
                <div>
                  <label htmlFor="investmentExperience" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    Real Estate Investment Experience *
                  </label>
                  <select
                    id="investmentExperience"
                    name="investmentExperience"
                    required
                    value={formData.investmentExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{ 
                      '--tw-ring-color': 'var(--color-accent)'
                    } as React.CSSProperties}
                  >
                    <option value="">Select Experience Level</option>
                    <option value="beginner">New to Real Estate Investing</option>
                    <option value="some">Some Experience (1-5 deals)</option>
                    <option value="experienced">Experienced (5+ deals)</option>
                    <option value="professional">Real Estate Professional</option>
                  </select>
                </div>

                {/* Investment Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="investmentAmount" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      Investment Amount Range
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    >
                      <option value="">Select Range</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                      Investment Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        '--tw-ring-color': 'var(--color-accent)'
                      } as React.CSSProperties}
                    >
                      <option value="">Select Timeframe</option>
                      <option value="immediate">Ready to Invest Now</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6months+">6+ Months</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    Tell us about your investment goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are you hoping to achieve with your real estate investments? Any specific questions or requirements?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                    style={{ 
                      '--tw-ring-color': 'var(--color-accent)'
                    } as React.CSSProperties}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  {submitStatus === 'success' ? (
                    <div className="text-center">
                      <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200">
                        <div className="flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-green-800 font-semibold">Thank you!</span>
                        </div>
                        <p className="text-green-700">Your partnership inquiry has been submitted. We&apos;ll be in touch within 24 hours.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitStatus('idle');
                          // Reset partnership type if it wasn't from URL
                          const typeParam = new URLSearchParams(window.location.search).get('type');
                          if (!typeParam) {
                            setPartnershipType('');
                          }
                        }}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        style={{
                          backgroundColor: 'var(--color-primary)',
                          color: 'white'
                        }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Start Partnership Conversation'
                        )}
                      </button>
                      
                      {submitStatus === 'error' && (
                        <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200">
                          <p className="text-red-700 text-center">
                            There was an error submitting your form. Please try again or contact us directly.
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Disclaimer */}
                <div className="text-center text-sm text-gray-500 pt-4">
                  <p>
                    We respect your privacy. Your information will only be used to contact you about investment opportunities.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--color-primary)' }}>
              What Happens Next?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Review & Response</h4>
                <p className="text-gray-600">We&apos;ll review your information and respond within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Discovery Call</h4>
                <p className="text-gray-600">Schedule a call to discuss your goals and our current opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Partnership</h4>
                <p className="text-gray-600">Move forward with a partnership structure that works for both of us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Partner() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <PartnerForm />
    </Suspense>
  );
}
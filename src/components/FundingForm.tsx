'use client';

import { useState } from 'react';

interface FundingFormData {
  fundingGoal: string;
  personalIncome: string;
  businessOwner: string;
  businessRevenue: string;
  creditScore: string;
  creditLimits: string;
  creditProfile: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
}

export default function FundingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState<FundingFormData>({
    fundingGoal: '',
    personalIncome: '',
    businessOwner: '',
    businessRevenue: '',
    creditScore: '',
    creditLimits: '',
    creditProfile: [],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    termsAccepted: false
  });

  const handleInputChange = (field: keyof FundingFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      creditProfile: checked 
        ? [...prev.creditProfile, field]
        : prev.creditProfile.filter(item => item !== field)
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.fundingGoal || !formData.personalIncome || !formData.businessOwner) {
          return false;
        }
        if (formData.businessOwner === 'own' && !formData.businessRevenue) {
          return false;
        }
        return true;
      case 2:
        return !!(formData.creditScore && formData.creditLimits && formData.creditProfile.length > 0);
      case 3:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone && formData.termsAccepted);
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-funding-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
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

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Funding Goal *
        </label>
        <input
          type="text"
          value={formData.fundingGoal}
          onChange={(e) => handleInputChange('fundingGoal', e.target.value)}
          placeholder="e.g., $50,000 for real estate investment"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
          style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Personal Income *
        </label>
        <div className="space-y-2">
          {['Below $50k', '$50k-$100k', '$100k+'].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="personalIncome"
                value={option}
                checked={formData.personalIncome === option}
                onChange={(e) => handleInputChange('personalIncome', e.target.value)}
                className="mr-3"
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Business Owner *
        </label>
        <div className="space-y-2">
          {[
            { value: 'own', label: 'I own a business' },
            { value: 'start', label: 'I want to start a business' }
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="businessOwner"
                value={option.value}
                checked={formData.businessOwner === option.value}
                onChange={(e) => handleInputChange('businessOwner', e.target.value)}
                className="mr-3"
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {formData.businessOwner === 'own' && (
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
            Business Revenue *
          </label>
          <div className="space-y-2">
            {['No business revenue yet', '$5k-$20k', '$20k-$50k', '$50k+'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="businessRevenue"
                  value={option}
                  checked={formData.businessRevenue === option}
                  onChange={(e) => handleInputChange('businessRevenue', e.target.value)}
                  className="mr-3"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Credit Score *
        </label>
        <div className="space-y-2">
          {['300-580', '580-650', '650-710', '750+'].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="creditScore"
                value={option}
                checked={formData.creditScore === option}
                onChange={(e) => handleInputChange('creditScore', e.target.value)}
                className="mr-3"
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Credit Limits *
        </label>
        <div className="space-y-2">
          {['0-$5k', '$5k-$15k', '$15k-$30k', '$30k+'].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="creditLimits"
                value={option}
                checked={formData.creditLimits === option}
                onChange={(e) => handleInputChange('creditLimits', e.target.value)}
                className="mr-3"
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Credit Profile * (Select all that apply)
        </label>
        <div className="space-y-2">
          {[
            'Late payments within 2 years',
            'Late payments within 5 years',
            'Collections or charge-offs (open or closed)',
            'Bankruptcy',
            'No I do not my credit is clean!'
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.creditProfile.includes(option)}
                onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                className="mr-3"
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
            style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
            style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Email Address *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
          style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
          style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
        />
      </div>

      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
            className="mr-3 mt-1"
            style={{ accentColor: 'var(--color-accent)' }}
          />
          <span className="text-sm text-gray-700">
            I agree to the Terms & Conditions and Privacy Policy. I consent to receive communications about funding opportunities. *
          </span>
        </label>
      </div>
    </div>
  );

  if (submitStatus === 'success') {
    return (
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your funding application has been submitted. We&apos;ll analyze your profile and get back to you within 24 hours with funding options.
              </p>
              <button
                onClick={() => {
                  setSubmitStatus('idle');
                  setCurrentStep(1);
                  setFormData({
                    fundingGoal: '',
                    personalIncome: '',
                    businessOwner: '',
                    businessRevenue: '',
                    creditScore: '',
                    creditLimits: '',
                    creditProfile: [],
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    termsAccepted: false
                  });
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
              Let&apos;s Get You Funded
            </h2>
            <p className="text-gray-600">
              Complete this quick assessment to discover your funding opportunities
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                Step {currentStep} of 3
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / 3) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-accent)',
                  width: `${(currentStep / 3) * 100}%`
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step Content */}
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Back
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  disabled={!validateStep(currentStep)}
                  className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!validateStep(3) || isSubmitting}
                  className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Get Funded'
                  )}
                </button>
              )}
            </div>

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-700 text-center">
                  There was an error submitting your application. Please try again or contact us directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
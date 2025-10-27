'use client';

import { useState } from 'react';

export default function BookCall() {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'Discuss your investment goals and explore partnership opportunities',
      price: 'Free'
    },
    {
      id: 'consultation',
      title: 'Real Estate Consultation', 
      duration: '60 minutes',
      description: 'Deep dive into specific investment strategies and market analysis',
      price: 'Free'
    },
    {
      id: 'deal-review',
      title: 'Deal Review Session',
      duration: '45 minutes', 
      description: 'Review a specific property or investment opportunity together',
      price: 'Free'
    }
  ];

  // You'll need to replace this with Jason's actual Google Calendar booking link
  const getCalendarLink = (serviceId: string) => {
    const baseUrl = 'https://calendar.google.com/calendar/appointments/schedules/';
    // Replace with Jason's actual calendar booking ID
    const calendarId = 'YOUR_GOOGLE_CALENDAR_BOOKING_ID';
    return `${baseUrl}${calendarId}?gv=true&service=${serviceId}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white" style={{ fontSize: 'var(--font-size-h1)' }}>
              Book a Call with Jason
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to discuss your real estate investment goals? Schedule a call to explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                Choose Your Call Type
              </h2>
              <p className="text-gray-600">
                Select the type of conversation that best fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`rounded-lg p-8 border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                    selectedService === service.id 
                      ? 'border-opacity-100 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ 
                    borderColor: selectedService === service.id ? 'var(--color-accent)' : undefined,
                    backgroundColor: selectedService === service.id ? 'var(--color-background-alt)' : 'white'
                  }}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      {service.title}
                    </h3>
                    <div 
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: selectedService === service.id ? 'var(--color-accent)' : '#d1d5db',
                        backgroundColor: selectedService === service.id ? 'var(--color-accent)' : 'transparent'
                      }}
                    >
                      {selectedService === service.id && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2" 
                          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}>
                      {service.duration} • {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Calendar Integration */}
            {selectedService && (
              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                    Schedule Your {services.find(s => s.id === selectedService)?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Click below to open Jason&apos;s calendar and select your preferred time
                  </p>
                  
                  {/* Temporary placeholder - replace with actual Google Calendar embed */}
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">
                        Google Calendar Integration
                      </h4>
                      <p className="text-gray-500 mb-4">
                        Calendar booking widget will appear here once configured
                      </p>
                      <p className="text-sm text-gray-400">
                        Need to add Jason&apos;s Google Calendar booking link
                      </p>
                    </div>
                  </div>

                  <a
                    href={getCalendarLink(selectedService)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:transform hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: 'white'
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Open Calendar & Book Time
                  </a>
                </div>
              </div>
            )}

            {!selectedService && (
              <div className="text-center">
                <p className="text-gray-500">
                  Select a call type above to see available time slots
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: 'var(--color-primary)' }}>
              What to Expect
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.314-2.025L3 21l3.025-4.686A8.013 8.013 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Open Conversation</h4>
                <p className="text-gray-600">No pressure, just an honest discussion about your goals and how real estate fits in</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Market Insights</h4>
                <p className="text-gray-600">Get current market perspective and understand opportunities in our target markets</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Clear Next Steps</h4>
                <p className="text-gray-600">Leave with specific action items and a clear path forward, whether we work together or not</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
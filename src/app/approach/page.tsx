import Link from "next/link";

export default function Approach() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-8 text-white" style={{ fontSize: 'var(--font-size-h1)' }}>
              Our Approach
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              Simple. Transparent. Results-Driven.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Every investor deserves clarity — not confusion. Our approach is built on transparent communication, disciplined execution, and meaningful partnerships that create long-term returns.
              </p>
              <p className="text-xl font-medium text-white">
                We keep things simple so you can invest with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership structure that aligns with your investment goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* GP Card */}
              <div className="rounded-lg p-8 h-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">General Partner (GP)</h3>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Take an active role in deal sourcing, due diligence, and property management. Perfect for experienced investors who want hands-on involvement.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Active participation in decision-making
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Higher profit share potential
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct involvement in operations
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Shared responsibility and liability
                  </div>
                </div>
                
                <Link 
                  href="/partner?type=gp"
                  className="block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
                >
                  Explore GP Partnership
                </Link>
              </div>

              {/* LP Card */}
              <div className="rounded-lg p-8 border-2 h-full bg-white" style={{ borderColor: 'var(--color-primary)' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Limited Partner (LP)</h3>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Passive investment option for those who want real estate exposure without day-to-day involvement. Receive returns while I handle operations.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Passive income generation
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Limited liability exposure
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    No operational responsibilities
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Regular performance updates
                  </div>
                </div>
                
                <Link 
                  href="/partner?type=lp"
                  className="block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
                >
                  Explore LP Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership Process */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                The Partnership Process
              </h2>
              <p className="text-xl text-gray-600">
                From first conversation to profit distribution—here&apos;s how we work together
              </p>
            </div>
            
            {/* Process Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-300" style={{ top: '64px' }}></div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {/* Step 1 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10" style={{ backgroundColor: 'var(--color-primary)' }}>
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Connection</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Initial call to understand your goals and investment preferences
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10" style={{ backgroundColor: 'var(--color-primary)' }}>
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Review</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deep dive into current opportunities and market analysis
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10" style={{ backgroundColor: 'var(--color-primary)' }}>
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Agreement</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Finalize partnership terms and legal documentation
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10" style={{ backgroundColor: 'var(--color-primary)' }}>
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Funding</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Secure financing and close on the investment
                  </p>
                </div>

                {/* Step 5 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10" style={{ backgroundColor: 'var(--color-primary)' }}>
                    5
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Profit</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Execute strategy and deliver returns to partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="mb-6" style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-primary)' }}>
                Why Choose Our Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four core principles that guide every partnership and investment decision
              </p>
            </div>

            {/* First Row - Clarity Comes First (Feature Card) */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-1">
                  <h3 className="mb-6" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                    Clarity Comes First
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      We believe great partnerships start with understanding. That&apos;s why every conversation begins with your goals — whether that&apos;s scaling your portfolio, diversifying your income, or finding a reliable co-GP.
                    </p>
                  </div>
                </div>
                <div className="lg:order-2">
                  <div className="rounded-2xl p-8 shadow-lg" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                    <h4 className="font-semibold mb-6 text-lg" style={{ color: 'var(--color-primary)' }}>You&apos;ll always know:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Where your capital is going</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">What stage each deal is in</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">How performance is measured and reported</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                        No surprises. No guesswork. Just transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Partnership Over Transactions (Centered with cards) */}
            <div className="mb-20 -mx-4 px-4 py-16 rounded-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
              <div className="text-center mb-12">
                <h3 className="mb-6 text-white" style={{ fontSize: 'var(--font-size-h2)' }}>
                  Partnership Over Transactions
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We don&apos;t build deals — we build relationships. Our process is designed to create alignment between all parties — investors, operators, and partners — so everyone moves forward with the same level of confidence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="backdrop-blur-sm border border-white/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-white/30 hover:backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="font-semibold mb-4 text-xl text-white">For GPs</h4>
                  <p className="text-gray-200">You get a structured, experienced co-sponsor who can help move projects from analysis to close — fast.</p>
                </div>
                <div className="backdrop-blur-sm border border-white/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-white/30 hover:backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="font-semibold mb-4 text-xl text-white">For LPs</h4>
                  <p className="text-gray-200">You gain access to multifamily opportunities managed with integrity, clear reporting, and disciplined operations.</p>
                </div>
              </div>
            </div>

            {/* Third Row - Disciplined Execution (Reversed layout) */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <h3 className="mb-6" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                    Disciplined Execution
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Behind every partnership is a system — and that&apos;s where we excel. From underwriting and due diligence to property management and investor reporting, we operate with precision and accountability.
                    </p>
                    <p>
                      Our background in project management and systems design means every process runs efficiently, and every investor stays informed.
                    </p>
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-start p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                      <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Thorough market research and deal vetting</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                      <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Risk mitigation and clear performance metrics</span>
                    </div>
                    <div className="flex items-start p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                      <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Transparent updates and quarterly reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Row - Our Promise (Full width with visual elements) */}
            <div className="text-center">
              <h3 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                Our Promise
              </h3>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Communicate Openly</h4>
                    <p className="text-gray-600">Clear, honest dialogue at every step</p>
                  </div>
                  
                  <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Execute Precisely</h4>
                    <p className="text-gray-600">Disciplined approach to every detail</p>
                  </div>
                  
                  <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Protect Investor Trust</h4>
                    <p className="text-gray-600">Your interests always come first</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-xl font-medium mb-4" style={{ color: 'var(--color-primary)' }}>
                    We lead with integrity, act with speed, and deliver with structure.
                  </p>
                  <p className="text-lg text-gray-600">
                    Fast, clear, and reliable partnerships — that&apos;s the Jason Reeder standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-white" style={{ fontSize: 'var(--font-size-h2)' }}>
              Let&apos;s Build Something Real
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              If you value transparency, communication, and performance, let&apos;s explore how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/book-call"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                📞 Book a Call
              </Link>
              
              <Link 
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                See Active Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
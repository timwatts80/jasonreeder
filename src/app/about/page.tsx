import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              {/* Left: Content */}
              <div>
                {/* Profile Image */}
                <div className="mb-8 flex justify-center lg:justify-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src="/jason_headshot.jpg"
                      alt="Jason Reeder"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h1 className="mb-6 text-white" style={{ fontSize: 'var(--font-size-h1)' }}>
                  About Jason Reeder
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  Real Partnerships. Real Integrity. Real Returns.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe successful real estate partnerships are built on clarity, communication, and follow-through. Every project I take on is guided by a simple principle: <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>Treat investor capital with the same respect as my own.</span>
                </p>
              </div>
              
              {/* Right: Visual */}
              <div className="relative h-auto lg:h-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-white/20 h-auto lg:h-full flex items-center">
                  <div className="grid grid-cols-2 gap-6 lg:gap-12 text-center text-white w-full">
                    <div className="py-3 lg:py-6">
                      <div className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4" style={{ color: 'var(--color-accent)' }}>20+</div>
                      <div className="text-sm lg:text-base text-gray-300">Years Experience</div>
                    </div>
                    <div className="py-3 lg:py-6">
                      <div className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4" style={{ color: 'var(--color-accent)' }}>100%</div>
                      <div className="text-sm lg:text-base text-gray-300">Transparent Process</div>
                    </div>
                    <div className="py-3 lg:py-6">
                      <div className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4" style={{ color: 'var(--color-accent)' }}>Multiple</div>
                      <div className="text-sm lg:text-base text-gray-300">Markets Served</div>
                    </div>
                    <div className="py-3 lg:py-6">
                      <div className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4" style={{ color: 'var(--color-accent)' }}>Proven</div>
                      <div className="text-sm lg:text-base text-gray-300">Track Record</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am & How I Work - Combined */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Who I Am */}
              <div>
                <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                  Who I Am
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    I&apos;m Jason Reeder, a multifamily operator and investor with more than 20 years of structured project and partnership experience — from infrastructure and architecture to real estate development and operations.
                  </p>
                  <p>
                    My background in project management and systems design allows me to bring structure, efficiency, and trust to every deal I enter.
                  </p>
                  <p className="font-medium" style={{ color: 'var(--color-primary)' }}>
                    I don&apos;t chase hype. I build solid partnerships with people who value accountability and performance.
                  </p>
                </div>
              </div>

              {/* Right: How I Work */}
              <div>
                <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                  How I Work
                </h2>
                <p className="text-gray-700 mb-8">
                  I keep my partnerships simple, transparent, and aligned:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                        Communication First
                      </h3>
                      <p className="text-gray-600">
                        Investors are kept informed at every stage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                        Integrity Always
                      </h3>
                      <p className="text-gray-600">
                        No shortcuts. Every decision is data-driven and disclosed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                        Performance Mindset
                      </h3>
                      <p className="text-gray-600">
                        From underwriting to operations, we move with discipline and speed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Promise & Markets - Side by Side */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: My Promise */}
              <div>
                <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                  My Promise
                </h2>
                <p className="text-gray-700 mb-8">
                  To every partner and investor, I commit to:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Clear reporting and open communication</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Honest deal evaluations</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Timely execution and responsible growth</span>
                  </div>
                </div>

                <blockquote className="text-xl italic font-light p-6 border-l-4" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-accent)' }}>
                  &ldquo;Integrity isn&apos;t a strategy. It&apos;s the standard.&rdquo;
                </blockquote>
              </div>

              {/* Right: Markets */}
              <div>
                <h2 className="mb-8" style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-primary)' }}>
                  Markets I Serve
                </h2>
                <p className="text-gray-700 mb-8">
                  Focused in Utah with expansion into the Midwest, I specialize in value-add multifamily assets with strong fundamentals and long-term growth potential.
                </p>
                
                {/* Visual representation */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: 'var(--color-primary)' }}>Primary Market</span>
                      <span className="text-gray-600">Utah</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: 'var(--color-primary)' }}>Expansion</span>
                      <span className="text-gray-600">Midwest</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: 'var(--color-primary)' }}>Focus</span>
                      <span className="text-gray-600">Value-Add Multifamily</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: 'var(--color-primary)' }}>Strategy</span>
                      <span className="text-gray-600">Long-term Growth</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  Whether you&apos;re a GP seeking a reliable co-sponsor or an LP looking for secure, passive income opportunities, you&apos;ll know exactly where your investment stands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-white" style={{ fontSize: 'var(--font-size-h2)' }}>
              Let&apos;s Build Something Real
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              If you value clarity, trust, and measurable results, let&apos;s talk about what partnership could look like.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/partner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                📞 Schedule a Call
              </Link>
              
              <Link 
                href="/approach"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                📋 Learn How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
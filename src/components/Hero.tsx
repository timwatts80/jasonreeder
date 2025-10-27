import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 hero-bg-image"
        style={{
          backgroundImage: 'url(/Jason_Hero_Image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div 
        className="absolute inset-0 opacity-90 hero-gradient"
        style={{
          background: 'linear-gradient(to left, var(--color-primary) 30%, transparent)'
        }}
      />
      <div className="container-custom relative z-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div></div>
        <div className="max-w-xl">
          <h1 
            className="mb-6 hero-headline" 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'var(--font-weight-semibold)', 
              lineHeight: '1.2' 
            }}
          >
            <span className="hero-mobile-breaks">
              Invest with<br />
              Clarity. Partner<br />
              with Confidence.
            </span>
            <span className="hero-desktop-text">
              Invest with Clarity. Partner with Confidence.
            </span>
          </h1>
          <h2 className="mb-8 text-gray-200" style={{ fontSize: '24px', fontWeight: '400', fontFamily: 'var(--font-body)' }}>
            Multifamily investments built on transparency, speed, and real partnership.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/partner"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '500',
                textDecoration: 'none',
                border: 'none'
              }}
            >
              Start a Partnership
            </Link>
            <Link 
              href="/approach"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              See Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center text-white overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/Jason_Hero_Image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(to left, var(--color-primary) 30%, transparent)'
        }}
      />
      <div className="container-custom relative z-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div></div>
        <div className="max-w-xl">
          <h1 className="mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
            Real Estate Partnerships Built on Trust, Speed, and Results.
          </h1>
          <h2 className="mb-8 text-gray-200" style={{ fontSize: '24px', fontWeight: '400', fontFamily: 'var(--font-body)' }}>
            Work directly with Jason — a hands-on investor focused on strong returns and clear communication.
          </h2>
          <Link 
            href="/partner"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Start a Partnership
          </Link>
        </div>
      </div>
    </section>
  )
}
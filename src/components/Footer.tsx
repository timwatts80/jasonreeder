import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)' }} className="text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="mb-4" style={{ fontSize: '24px' }}>Jason Reeder</h3>
            <p className="text-gray-300 mb-4">
              Real estate partnerships built on trust, speed, and results.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/jason-reeder-1a7758109/" 
                style={{ color: 'var(--color-accent)' }}
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-linkedin" 
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://instagram.com/theprofessionaljreeder" 
                style={{ color: 'var(--color-accent)' }}
                className="hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-instagram" 
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="text-gray-300 transition-colors text-left"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 transition-colors text-left"
              >
                About
              </Link>
              <Link 
                href="/approach" 
                className="text-gray-300 transition-colors text-left"
              >
                Approach
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-300 transition-colors text-left"
              >
                Portfolio
              </Link>
              <Link 
                href="/partner" 
                className="text-gray-300 transition-colors text-left"
              >
                Partner
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-mail" 
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <a 
                  href="mailto:ceo@jreeder-reisolutions.com" 
                  className="transition-colors"
                >
                  ceo@jreeder-reisolutions.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-phone" 
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1 2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <a 
                  href="tel:+13852519781" 
                  className="transition-colors"
                >
                  (385) 251-9781
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jason Reeder Real Estate Partnerships. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
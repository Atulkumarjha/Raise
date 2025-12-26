import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#202425] mt-20 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Media */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/main-logo.png"
                alt="Raise Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-[#d0f1cf]">RAISE</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              © 2010 - 2025, Raise Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-400">
              <Link href="#" className="hover:text-[#7fef65]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#7fef65]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#7fef65]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#7fef65]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#7fef65]">Open demat account</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Minor demat account</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">NRI demat account</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Commodity</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Dematerialisation</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Fund transfer</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">MTF</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Referral program</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#7fef65]">Contact us</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Support portal</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">How to file a complaint?</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Status of your complaints</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Bulletin</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Circular</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">R-Connect blog</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Downloads</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#7fef65]">About</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Philosophy</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Press & media</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Raise Cares (CSR)</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Raise.tech</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Open source</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#7fef65]">Upcoming IPOs</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Brokerage charges</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Market holidays</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Economic calendar</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Calculators</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Markets</Link></li>
              <li><Link href="#" className="hover:text-[#7fef65]">Sectors</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-400 leading-relaxed">
            Raise Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
            IND00001234 CDSL/NSDL: Depository services through Raise Broking Ltd. –
            SEBI Registration no.: IND-NSE-123-2025 Registered Address: Raise
            Broking Ltd., INDIA. For any complaints pertaining to securities broking
            please write to complaints@raise.com, for DP related to dp@raise.com. 
            Please ensure you carefully read the Risk Disclosure Document as prescribed 
            by SEBI. Investments in securities market are subject to market risks; 
            read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

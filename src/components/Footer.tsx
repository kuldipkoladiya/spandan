'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ebe1ff] text-purple-800 mt-auto ">
   <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/admission-enquiry" className="hover:text-amber-500 transition-colors">Admission Enquiry</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                A,56  Ashwin Society 3, Varachha, Surat, Gujarat 395006.
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                spandankids123@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 93741 31212
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/spandan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="hover:text-amber-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.856c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/spandan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
                className="hover:text-amber-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 002.163-2.723 9.867 9.867 0 01-3.127 1.184A4.916 4.916 0 0016.616 3c-2.72 0-4.924 2.204-4.924 4.924 0 .386.043.762.128 1.124C7.691 8.087 4.066 6.128 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.903 4.903 0 01-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417A9.867 9.867 0 010 19.54a13.96 13.96 0 007.557 2.209c9.054 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/spandan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="hover:text-amber-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.805.25 2.227.416a4.6 4.6 0 011.381.896 4.6 4.6 0 01.896 1.381c.166.422.36 1.057.416 2.227.057 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.055 1.17-.25 1.805-.416 2.227a4.6 4.6 0 01-.896 1.381 4.6 4.6 0 01-1.381.896c-.422.166-1.057.36-2.227.416-1.266.057-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.056-1.805-.25-2.227-.416a4.6 4.6 0 01-1.381-.896 4.6 4.6 0 01-.896-1.381c-.166-.422-.36-1.057-.416-2.227C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.056-1.17.25-1.805.416-2.227a4.6 4.6 0 01.896-1.381A4.6 4.6 0 014.926 2.65c.422-.166 1.057-.36 2.227-.416C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.052.072 5.773.131 4.905.332 4.14.63 3.351.934 2.683 1.347 2.016 2.014S.934 3.35.63 4.14C.332 4.905.131 5.773.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.948.059 1.278.26 2.146.558 2.912.304.789.716 1.458 1.382 2.124s1.336 1.078 2.125 1.383c.766.297 1.634.498 2.912.558C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.948-.072 1.278-.059 2.146-.26 2.912-.558.789-.304 1.458-.716 2.124-1.382s1.078-1.336 1.383-2.125c.297-.766.498-1.634.558-2.912.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.948-.059-1.278-.26-2.146-.558-2.912a6.935 6.935 0 00-1.383-2.124A6.935 6.935 0 0019.86.63C19.095.332 18.227.131 16.948.072 15.667.014 15.259 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Spandan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

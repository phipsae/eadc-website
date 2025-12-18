import React from "react";
import Link from "next/link";

/**
 * Clean institutional footer
 */
export const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-2.png" alt="ADC" className="h-7 w-7" />
              <span className="font-semibold text-white text-sm">ADC</span>
            </div>
            <p className="text-white/40 text-sm m-0 leading-relaxed">
              Institutional blockchain training by the Ethereum Foundation.
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Program</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/#why-adc" className="text-white/60 hover:text-white transition-colors text-sm">
                  Why ADC
                </Link>
              </li>
              <li>
                <Link href="/#program" className="text-white/60 hover:text-white transition-colors text-sm">
                  Structure
                </Link>
              </li>
              <li>
                <Link href="/#curriculum" className="text-white/60 hover:text-white transition-colors text-sm">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <a
                  href="https://institutions.ethereum.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Institutions
                </a>
              </li>
              <li>
                <a
                  href="https://ethereum.foundation/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Ethereum Foundation
                </a>
              </li>
              <li>
                <a
                  href="https://ethereum.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  ethereum.org
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/terms-and-conditions" className="text-white/60 hover:text-white transition-colors text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href="https://ethereum.org/en/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm m-0">
            © {new Date().getFullYear()} Ethereum Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

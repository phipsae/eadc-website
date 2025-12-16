import React from "react";
import Link from "next/link";

/**
 * Professional corporate footer
 */
export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-enterprise.svg" alt="Ethereum ADC" className="h-9 w-9" />
              <div>
                <p className="m-0 font-semibold text-white tracking-tight">Ethereum ADC</p>
                <p className="m-0 text-white/30 text-[10px] uppercase tracking-[0.1em]">Enterprise Training</p>
              </div>
            </div>
            <p className="text-white/40 text-sm max-w-sm m-0 leading-relaxed mb-6">
              Institutional-grade blockchain training and certification for enterprise technology teams. Developed in
              partnership with the Ethereum Foundation.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://ethereum.foundation/"
                target="_blank"
                rel="noreferrer"
                className="opacity-40 hover:opacity-70 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_ef.svg" alt="Ethereum Foundation" className="h-8" />
              </a>
              <a
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
                className="opacity-40 hover:opacity-70 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_bg.svg" alt="BuidlGuidl" className="h-6" />
              </a>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-6">Program</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              <li>
                <Link href="/#why-adc" className="text-white/50 hover:text-white transition-colors text-sm">
                  Why ADC
                </Link>
              </li>
              <li>
                <Link href="/#program" className="text-white/50 hover:text-white transition-colors text-sm">
                  Program Structure
                </Link>
              </li>
              <li>
                <Link href="/#curriculum" className="text-white/50 hover:text-white transition-colors text-sm">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/50 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-6">Resources</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              <li>
                <a
                  href="https://institutions.ethereum.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Ethereum for Institutions
                </a>
              </li>
              <li>
                <a
                  href="https://ethereum.foundation/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Ethereum Foundation
                </a>
              </li>
              <li>
                <a
                  href="https://ethereum.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  ethereum.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm m-0">
              © {new Date().getFullYear()} Ethereum Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/terms-and-conditions"
                className="text-white/30 hover:text-white/50 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <a
                href="https://ethereum.org/en/privacy-policy/"
                target="_blank"
                rel="noreferrer"
                className="text-white/30 hover:text-white/50 text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

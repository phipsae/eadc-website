"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Why ADC",
    href: "/#why-adc",
  },
  {
    label: "Program",
    href: "/#program",
  },
  {
    label: "Curriculum",
    href: "/#curriculum",
  },
];

export const HeaderMenuLinks = () => {
  return (
    <>
      {menuLinks.map(({ label, href }) => {
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
            >
              {label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Clean institutional header
 */
export const Header = () => {
  const burgerMenuRef = useRef<HTMLDetailsElement>(null);
  useOutsideClick(burgerMenuRef, () => {
    burgerMenuRef?.current?.removeAttribute("open");
  });

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10"
      style={{
        backgroundColor: "rgba(10, 14, 26, 0.08)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" passHref className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-7 h-7">
              <Image alt="Ethereum ADC" className="cursor-pointer" fill src="/logo-enterprise.svg" />
            </div>
            <span className="font-semibold text-white text-sm tracking-tight">ADC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <HeaderMenuLinks />
            </ul>
            <Link href="/#contact" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <details className="dropdown dropdown-end" ref={burgerMenuRef}>
              <summary className="btn btn-ghost btn-sm p-2 hover:bg-white/5">
                <Bars3Icon className="h-5 w-5 text-white" />
              </summary>
              <div className="dropdown-content mt-2 p-0 w-screen max-w-[280px] right-0">
                <div className="bg-[#0a0e1a]/95 backdrop-blur-sm border border-white/10">
                  <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <span className="text-white/40 text-xs uppercase tracking-wider">Menu</span>
                    <button
                      onClick={() => burgerMenuRef?.current?.removeAttribute("open")}
                      className="text-white/40 hover:text-white"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <ul
                    className="p-4 space-y-1 list-none m-0"
                    onClick={() => {
                      burgerMenuRef?.current?.removeAttribute("open");
                    }}
                  >
                    {menuLinks.map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="block py-3 px-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/#contact"
                        className="block py-3 px-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

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
              className="text-white/50 hover:text-white transition-colors duration-200 text-sm font-medium"
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
 * Professional corporate header
 */
export const Header = () => {
  const burgerMenuRef = useRef<HTMLDetailsElement>(null);
  useOutsideClick(burgerMenuRef, () => {
    burgerMenuRef?.current?.removeAttribute("open");
  });

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0a0e1a]/95 backdrop-blur-md border-b border-white/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" passHref className="flex items-center gap-3 shrink-0">
            <div className="relative w-8 h-8 lg:w-9 lg:h-9">
              <Image alt="Ethereum ADC" className="cursor-pointer" fill src="/logo-enterprise.svg" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-sm lg:text-base leading-tight tracking-tight">
                Ethereum ADC
              </span>
              <span className="text-white/30 text-[10px] uppercase tracking-[0.1em]">Enterprise Training</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <HeaderMenuLinks />
            </ul>
            <Link href="/#contact" className="btn btn-primary px-6 py-2 text-sm">
              Request Details
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <details className="dropdown dropdown-end" ref={burgerMenuRef}>
              <summary className="btn btn-ghost btn-sm p-2 hover:bg-white/5">
                <Bars3Icon className="h-6 w-6 text-white" />
              </summary>
              <div className="dropdown-content mt-2 p-0 w-screen max-w-[300px] right-0">
                <div className="bg-[#0e1c36] border border-white/10 shadow-2xl">
                  <div className="p-5 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-white/40 text-xs uppercase tracking-[0.15em]">Navigation</span>
                      <button
                        onClick={() => burgerMenuRef?.current?.removeAttribute("open")}
                        className="text-white/30 hover:text-white"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
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
                          className="block py-3 px-3 text-white/60 hover:text-white hover:bg-white/5 transition-all font-medium"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 mt-4 border-t border-white/5">
                      <Link href="/#contact" className="block w-full text-center btn btn-primary py-3">
                        Request Details
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

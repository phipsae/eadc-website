"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Programs",
    href: "/#programs",
  },
  {
    label: "Curriculum",
    href: "/#curriculum",
  },
  {
    label: "Why us",
    href: "/#why-us",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : "bg-[#F2EBFF]"
              } hover:bg-white focus:!bg-white active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const burgerMenuRef = useRef<HTMLDetailsElement>(null);
  useOutsideClick(burgerMenuRef, () => {
    burgerMenuRef?.current?.removeAttribute("open");
  });

  return (
    <div className="sticky lg:static top-0 navbar bg-[#F2EBFF] min-h-0 shrink-0 justify-between z-20 shadow-md px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <Link href="/" passHref className="flex items-center gap-2 ml-4 mr-4 lg:mr-10 shrink-0">
          <div className="flex relative w-8 h-8 lg:w-10 lg:h-10">
            <Image alt="Enterprise Ethereum logo" className="cursor-pointer" fill src="/logo-enterprise.svg" />
          </div>
          <div className="flex flex-col lg:flex">
            <span className="font-bold leading-none text-sm lg:text-base">
              Enterprise <br /> Ethereum Training
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <details className="dropdown dropdown-end" ref={burgerMenuRef}>
          <summary className="btn btn-ghost hover:bg-transparent">
            <Bars3Icon className="h-1/2" />
          </summary>
          <ul
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-sm bg-[#F2EBFF] rounded-box w-52"
            onClick={() => {
              burgerMenuRef?.current?.removeAttribute("open");
            }}
          >
            <HeaderMenuLinks />
          </ul>
        </details>
      </div>
    </div>
  );
};
